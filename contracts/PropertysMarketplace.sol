// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/interfaces/IERC1155.sol";
import "@openzeppelin/contracts/interfaces/IERC721.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol"; 
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

contract NFTMarket is ReentrancyGuard, Ownable, ERC1155Holder {

    /// @notice admin mapping
    mapping(address => bool) public adminAddresses;

    /// @notice general settings
    address public receiverWallet;
    uint256 public itemId;
    uint256 public itemsReverted;
    uint256 public itemsSold;

    /// @notice erc20 addresses
    // polygon
    /*
    address public brix = 0xaBFFedaF784Dc40A4C1947F9D5ddB3AfE2075353;
    address public usdc = 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174;
    address public weth = 0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619;
    */

    // polygon mumbai
    address public brix = 0x858aE51B38c7fd338e1f0f57707079b157F46F50;
    address public usdc = 0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747;
    address public weth = 0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa;

    /// @notice pricefeeds
    // polygon
    // address usdEth = 0xF9680D99D6C9589e2a93a78A04A279e509205945;
    // address usdMatic = 0xAB594600376Ec9fD91F8e885dADF0CE036862dE0;

    // polygon mumbai
    address public usdEth = 0x0715A7794a1dc8e42615F059dD6e406A6594651A;
    address public usdMatic = 0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada;

    struct MarketItem {
        uint itemId;
        address nftContract;
        uint256 tokenId;    
        address seller;
        uint256 priceBRIX;
        uint256 priceUSDC;
        bool sold;
        bool reverted;
        uint256 standard;
        uint256 amount;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;

    event MarketItemCreated (
        uint indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        uint256 priceBRIX,
        uint256 priceUSDC,
        bool sold,
        bool reverted,
        uint256 standard,
        uint256 amount
    );

    event SoldItem (
        uint indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address buyer,
        uint256 currency,
        uint256 amount
    );

    constructor(address receiver) {
        switchAdmin(msg.sender);
        updReceiver(receiver);
        itemId = 0;
    }
    
    /* Places an item for sale on the marketplace */
    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 _priceBRIX,
        uint256 _priceUSDC,
        uint256 _standard, // 1= erc721 / 2=erc1155
        uint256 _amount
    ) public nonReentrant reqAdmin {
        require(_priceBRIX > 0, "Price BRIX must be at least 1 wei");
        require(_priceUSDC > 0, "Price USDC must be at least 1 wei");

        if(_standard == 2) {
            require(_amount > 0, "No amount given");
        }

        itemId++;

        // transfer nft(s) to marketplace
        if(_standard == 1) {
            IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);
        }
        if(_standard == 2) {
            IERC1155(nftContract).safeTransferFrom(msg.sender, address(this), tokenId, _amount, "[]");
        }

        // create item
        idToMarketItem[itemId] =  MarketItem(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            _priceBRIX,
            _priceUSDC,
            false,
            false,
            _standard,
            _amount
        );
        
        // log creation
        emit MarketItemCreated(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            _priceBRIX,
            _priceUSDC,
            false,
            false,
            _standard,
            _amount
        );
    }

    /* Places an item for sale on the marketplace */
    function updateMarketItem(
        uint256 _item,
        uint256 _priceBRIX,
        uint256 _priceUSDC
    ) public nonReentrant reqAdmin {
        require(_priceBRIX > 0, "Price BRIX must be at least 1 wei");
        require(_priceUSDC > 0, "Price USDC must be at least 1 wei");
        require(idToMarketItem[_item].sold == false, "Instance of NFT already sold");
        require(idToMarketItem[_item].reverted == false, "Instance of NFT already reverted");

        idToMarketItem[itemId].priceBRIX = _priceBRIX;
        idToMarketItem[itemId].priceUSDC = _priceUSDC;
    }

    // revert the sale order and send back the NFT
    function revertMarketItem(uint256 _item) public nonReentrant reqAdmin {
        require(idToMarketItem[_item].sold == false, "Instance of NFT already sold");
        require(idToMarketItem[_item].reverted == false, "Instance of NFT already reverted");
        
        // transfer nft(s) to marketplace
        if(idToMarketItem[_item].standard == 1) {
            IERC721(idToMarketItem[_item].nftContract).transferFrom(address(this), idToMarketItem[_item].seller, idToMarketItem[_item].tokenId);
        }
        if(idToMarketItem[_item].standard == 2) {
            IERC1155(idToMarketItem[_item].nftContract).safeTransferFrom(address(this), idToMarketItem[_item].seller, idToMarketItem[_item].tokenId, idToMarketItem[itemId].amount, "[]");
        }
        
        idToMarketItem[_item].reverted = true;
        itemsReverted++;
    }

    /* Creates the sale of a marketplace item */
    /* Transfers ownership of the item, as well as funds between parties */
    function buyItem(
        uint256 _item,
        uint256 _amount,
        uint256 _currency
        ) public payable nonReentrant {

        require(!idToMarketItem[_item].sold, "Item is already sold");
        require(!idToMarketItem[_item].reverted, "Item is not listed anymore");
        require(_amount > 0, "No amount of NFTs to be bought given");
        require(_item > 0, "No item to buy given");
        require(idToMarketItem[_item].amount - _amount >= 0, "No NFT of selected item in stock");

        /// @notice pay in BRIX
        if(_currency == 1) {
            require(IERC20(brix).balanceOf(msg.sender) >= _amount * idToMarketItem[_item].priceBRIX, "You own to less BRIX");
            require(IERC20(brix).allowance(msg.sender, address(this)) >= _amount * idToMarketItem[_item].priceBRIX, "BRIX allowance to less");
            IERC20(brix).transferFrom(msg.sender, receiverWallet, _amount * idToMarketItem[_item].priceBRIX);
        }

        /// @notice pay in usd
        if(_currency == 2) {
            require(IERC20(usdc).balanceOf(msg.sender) >= _amount * idToMarketItem[_item].priceUSDC, "You own to less USDC");
            require(IERC20(usdc).allowance(msg.sender, address(this)) >= _amount * idToMarketItem[_item].priceUSDC, "USDC allowance to less");
            IERC20(usdc).transferFrom(msg.sender, receiverWallet, _amount * idToMarketItem[_item].priceUSDC);
        }

        /// @notice pay in weth
        if(_currency == 3) {
            uint256 priceWeth = convert(3, idToMarketItem[_item].priceUSDC);
            require(IERC20(weth).balanceOf(msg.sender) >= _amount * priceWeth, "You own to less WETH");
            require(IERC20(weth).allowance(msg.sender, address(this)) >= _amount * priceWeth, "WETH allowance to less");
            IERC20(weth).transferFrom(msg.sender, receiverWallet, _amount * priceWeth);
        }

        /// @notice pay in matic
        if(_currency == 4) {
            uint256 priceMatic = convert(4, idToMarketItem[_item].priceUSDC);
            require(msg.value >= _amount * priceMatic, "You own to less Matic");
        }

        idToMarketItem[_item].amount -= _amount;
        if(idToMarketItem[_item].amount == 0) {
            idToMarketItem[_item].sold = true;
        }

        // transfer nft(s) to marketplace
        if(idToMarketItem[_item].standard == 1) {
            IERC721(idToMarketItem[_item].nftContract).transferFrom(address(this), msg.sender, idToMarketItem[_item].tokenId);
        }
        if(idToMarketItem[_item].standard == 2) {
            IERC1155(idToMarketItem[_item].nftContract).safeTransferFrom(address(this), msg.sender, idToMarketItem[_item].tokenId, _amount, "[]");
        }

        // log sale
        emit SoldItem(
            _item,
            idToMarketItem[_item].nftContract,
            idToMarketItem[_item].tokenId,
            msg.sender,
            _currency,
            _amount
        );

        itemsSold++;
    }

    /* Returns all unsold market items */
    function fetchItemsOnSale() public view returns (MarketItem[] memory) {
        uint totalItemCount = itemId;
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 1; i <= totalItemCount; i++) {
            if (idToMarketItem[i].sold == false && idToMarketItem[i].reverted == false) {
                itemCount += 1;
            }
        } 

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 1; i <= totalItemCount; i++) {
            if (idToMarketItem[i].sold == false && idToMarketItem[i].reverted == false) {
                MarketItem storage currentItem = idToMarketItem[i];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns all unsold market items */
    function fetchAllItems() public view returns (MarketItem[] memory) {
        uint totalItemCount = itemId;
        uint currentIndex = 0;
        MarketItem[] memory items = new MarketItem[](totalItemCount);
        for (uint i = 1; i <= totalItemCount; i++) {
            MarketItem storage currentItem = idToMarketItem[i];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }
        return items;
    }

    /* Returns the items that a user has purchased */
    function fetchMyNFTs() public view returns (MarketItem[] memory) {
        uint totalItemCount = itemId;
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 1; i <= totalItemCount; i++) {
            if (idToMarketItem[i].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 1; i <= totalItemCount; i++) {
            if (idToMarketItem[i].seller == msg.sender) {
                MarketItem storage currentItem = idToMarketItem[i];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
    
    /// @notice convert into currency
    /// @param currency to be calculated
    /// @param value to be calculated
    function convert(uint8 currency, uint256 value) public view returns(uint256 result) {
        uint256 finprice = 0;
        if(currency == 3){
            (,int256 price,,,) = AggregatorV3Interface(usdEth).latestRoundData();
            finprice = uint256(price * 10**10);
            finprice = value * 10**18 / finprice;

        }
        if(currency == 4){
            (,int256 price,,,) = AggregatorV3Interface(usdMatic).latestRoundData();
            finprice = uint256(price * 10**10);
            finprice = value * 10**18  / finprice ;
        }

        return finprice;
    }

    // function read market item
    function getMarketItem(uint256 _itemId) public view returns(MarketItem memory) {
        return idToMarketItem[_itemId];
    }

    /// @notice edit admin
    /// @param _wallet to be switches
    function switchAdmin(address _wallet) public reqAdmin {
        adminAddresses[_wallet] = !adminAddresses[_wallet];
    }

    /// @notice modifier to check admin. Throws if caller not in admin mapping
    modifier reqAdmin() {
        checkAdmin();
        _;
    }

    /// @notice general function to check admin state of caller
    /// @dev owner is always also an admin. Also if he gets delisted in mapping
    function checkAdmin() internal view virtual {
        require(adminAddresses[msg.sender] || msg.sender == owner(), "Only admins and owner are eligible");
    }

    /// @notice only Owner functions

    /// @notice update receiver wallet
    /// @param wallet as the new receiver
    function updReceiver(address wallet) public onlyOwner {
        receiverWallet = wallet;
    }

    /// @notice change brix token
    /// @param token for new token address
    function updBRIX(address token) public onlyOwner {
        brix = token;
    }

    /// @notice change usd token
    /// @param token for new token address
    function updUsd(address token) public onlyOwner {
        usdc = token;
    }

    /// @notice change weth token
    /// @param token for new token address
    function updWeth(address token) public onlyOwner {
        weth = token;
    }

    /// @notice update chainlink data feed for usd eth
    /// @param feed as address of new feed
    function updUsdEth(address feed) public onlyOwner {
        usdEth = feed;
    }

    /// @notice update chainlink data feed for usd matic
    /// @param feed as address of new feed
    function updUsdMatic(address feed) public onlyOwner {
        usdMatic = feed;
    }

    /// @notice change BRIX price of token
    /// @param _itemId to be switched
    /// @param _price to what price it should be set
    function updBRIXprice(uint256 _itemId, uint256 _price) public reqAdmin {
        idToMarketItem[_itemId].priceBRIX = _price;
    }

    /// @notice change BRIX price of token
    /// @param _itemId to be switched
    /// @param _price to what price it should be set
    function updUSDprice(uint256 _itemId, uint256 _price) public reqAdmin {
        idToMarketItem[_itemId].priceUSDC = _price;
    }

    // withdrawal all credits
    function withdraw() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }

    // withdrawal all credits of erc20 token
    function withdrawERC20(address _contract) public payable onlyOwner {
        uint256 balance = IERC20(_contract).balanceOf(msg.sender);
        require(balance > 0, "No balance of given token on contract");
        IERC20(_contract).transferFrom(address(this), msg.sender, balance);
    }
}