
// File: @openzeppelin/contracts/security/ReentrancyGuard.sol


// OpenZeppelin Contracts (last updated v4.8.0) (security/ReentrancyGuard.sol)

pragma solidity ^0.8.0;

/**
 * @dev Contract module that helps prevent reentrant calls to a function.
 *
 * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier
 * available, which can be applied to functions to make sure there are no nested
 * (reentrant) calls to them.
 *
 * Note that because there is a single `nonReentrant` guard, functions marked as
 * `nonReentrant` may not call one another. This can be worked around by making
 * those functions `private`, and then adding `external` `nonReentrant` entry
 * points to them.
 *
 * TIP: If you would like to learn more about reentrancy and alternative ways
 * to protect against it, check out our blog post
 * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].
 */
abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and making it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        _nonReentrantBefore();
        _;
        _nonReentrantAfter();
    }

    function _nonReentrantBefore() private {
        // On the first call to nonReentrant, _status will be _NOT_ENTERED
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;
    }

    function _nonReentrantAfter() private {
        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }
}

// File: @chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol


pragma solidity ^0.8.0;

interface AggregatorV3Interface {
  function decimals() external view returns (uint8);

  function description() external view returns (string memory);

  function version() external view returns (uint256);

  function getRoundData(uint80 _roundId)
    external
    view
    returns (
      uint80 roundId,
      int256 answer,
      uint256 startedAt,
      uint256 updatedAt,
      uint80 answeredInRound
    );

  function latestRoundData()
    external
    view
    returns (
      uint80 roundId,
      int256 answer,
      uint256 startedAt,
      uint256 updatedAt,
      uint80 answeredInRound
    );
}

// File: @openzeppelin/contracts/utils/Context.sol


// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)

pragma solidity ^0.8.0;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

// File: @openzeppelin/contracts/access/Ownable.sol


// OpenZeppelin Contracts (last updated v4.7.0) (access/Ownable.sol)

pragma solidity ^0.8.0;


/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor() {
        _transferOwnership(_msgSender());
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if the sender is not the owner.
     */
    function _checkOwner() internal view virtual {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

// File: @openzeppelin/contracts/token/ERC20/IERC20.sol


// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC20/IERC20.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);

    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}

// File: @openzeppelin/contracts/interfaces/IERC20.sol


// OpenZeppelin Contracts v4.4.1 (interfaces/IERC20.sol)

pragma solidity ^0.8.0;


// File: @openzeppelin/contracts/utils/introspection/IERC165.sol


// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC165 standard, as defined in the
 * https://eips.ethereum.org/EIPS/eip-165[EIP].
 *
 * Implementers can declare support of contract interfaces, which can then be
 * queried by others ({ERC165Checker}).
 *
 * For an implementation, see {ERC165}.
 */
interface IERC165 {
    /**
     * @dev Returns true if this contract implements the interface defined by
     * `interfaceId`. See the corresponding
     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
     * to learn more about how these ids are created.
     *
     * This function call must use less than 30 000 gas.
     */
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}

// File: @openzeppelin/contracts/utils/introspection/ERC165.sol


// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)

pragma solidity ^0.8.0;


/**
 * @dev Implementation of the {IERC165} interface.
 *
 * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check
 * for the additional interface id that will be supported. For example:
 *
 * ```solidity
 * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
 *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);
 * }
 * ```
 *
 * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.
 */
abstract contract ERC165 is IERC165 {
    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return interfaceId == type(IERC165).interfaceId;
    }
}

// File: @openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol


// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC1155/IERC1155Receiver.sol)

pragma solidity ^0.8.0;


/**
 * @dev _Available since v3.1._
 */
interface IERC1155Receiver is IERC165 {
    /**
     * @dev Handles the receipt of a single ERC1155 token type. This function is
     * called at the end of a `safeTransferFrom` after the balance has been updated.
     *
     * NOTE: To accept the transfer, this must return
     * `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`
     * (i.e. 0xf23a6e61, or its own function selector).
     *
     * @param operator The address which initiated the transfer (i.e. msg.sender)
     * @param from The address which previously owned the token
     * @param id The ID of the token being transferred
     * @param value The amount of tokens being transferred
     * @param data Additional data with no specified format
     * @return `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` if transfer is allowed
     */
    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external returns (bytes4);

    /**
     * @dev Handles the receipt of a multiple ERC1155 token types. This function
     * is called at the end of a `safeBatchTransferFrom` after the balances have
     * been updated.
     *
     * NOTE: To accept the transfer(s), this must return
     * `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))`
     * (i.e. 0xbc197c81, or its own function selector).
     *
     * @param operator The address which initiated the batch transfer (i.e. msg.sender)
     * @param from The address which previously owned the token
     * @param ids An array containing ids of each token being transferred (order and length must match values array)
     * @param values An array containing amounts of each token being transferred (order and length must match ids array)
     * @param data Additional data with no specified format
     * @return `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` if transfer is allowed
     */
    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) external returns (bytes4);
}

// File: @openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol


// OpenZeppelin Contracts v4.4.1 (token/ERC1155/utils/ERC1155Receiver.sol)

pragma solidity ^0.8.0;



/**
 * @dev _Available since v3.1._
 */
abstract contract ERC1155Receiver is ERC165, IERC1155Receiver {
    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return interfaceId == type(IERC1155Receiver).interfaceId || super.supportsInterface(interfaceId);
    }
}

// File: @openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol


// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC1155/utils/ERC1155Holder.sol)

pragma solidity ^0.8.0;


/**
 * Simple implementation of `ERC1155Receiver` that will allow a contract to hold ERC1155 tokens.
 *
 * IMPORTANT: When inheriting this contract, you must include a way to use the received tokens, otherwise they will be
 * stuck.
 *
 * @dev _Available since v3.1._
 */
contract ERC1155Holder is ERC1155Receiver {
    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address,
        address,
        uint256[] memory,
        uint256[] memory,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }
}

// File: @openzeppelin/contracts/token/ERC721/IERC721.sol


// OpenZeppelin Contracts (last updated v4.8.0) (token/ERC721/IERC721.sol)

pragma solidity ^0.8.0;


/**
 * @dev Required interface of an ERC721 compliant contract.
 */
interface IERC721 is IERC165 {
    /**
     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.
     */
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    /**
     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.
     */
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    /**
     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.
     */
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    /**
     * @dev Returns the number of tokens in ``owner``'s account.
     */
    function balanceOf(address owner) external view returns (uint256 balance);

    /**
     * @dev Returns the owner of the `tokenId` token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function ownerOf(uint256 tokenId) external view returns (address owner);

    /**
     * @dev Safely transfers `tokenId` token from `from` to `to`.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `tokenId` token must exist and be owned by `from`.
     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes calldata data
    ) external;

    /**
     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients
     * are aware of the ERC721 protocol to prevent tokens from being forever locked.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `tokenId` token must exist and be owned by `from`.
     * - If the caller is not `from`, it must have been allowed to move this token by either {approve} or {setApprovalForAll}.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    /**
     * @dev Transfers `tokenId` token from `from` to `to`.
     *
     * WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC721
     * or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must
     * understand this adds an external call which potentially creates a reentrancy vulnerability.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `tokenId` token must be owned by `from`.
     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    /**
     * @dev Gives permission to `to` to transfer `tokenId` token to another account.
     * The approval is cleared when the token is transferred.
     *
     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.
     *
     * Requirements:
     *
     * - The caller must own the token or be an approved operator.
     * - `tokenId` must exist.
     *
     * Emits an {Approval} event.
     */
    function approve(address to, uint256 tokenId) external;

    /**
     * @dev Approve or remove `operator` as an operator for the caller.
     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.
     *
     * Requirements:
     *
     * - The `operator` cannot be the caller.
     *
     * Emits an {ApprovalForAll} event.
     */
    function setApprovalForAll(address operator, bool _approved) external;

    /**
     * @dev Returns the account approved for `tokenId` token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function getApproved(uint256 tokenId) external view returns (address operator);

    /**
     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.
     *
     * See {setApprovalForAll}
     */
    function isApprovedForAll(address owner, address operator) external view returns (bool);
}

// File: @openzeppelin/contracts/interfaces/IERC721.sol


// OpenZeppelin Contracts v4.4.1 (interfaces/IERC721.sol)

pragma solidity ^0.8.0;


// File: @openzeppelin/contracts/token/ERC1155/IERC1155.sol


// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC1155/IERC1155.sol)

pragma solidity ^0.8.0;


/**
 * @dev Required interface of an ERC1155 compliant contract, as defined in the
 * https://eips.ethereum.org/EIPS/eip-1155[EIP].
 *
 * _Available since v3.1._
 */
interface IERC1155 is IERC165 {
    /**
     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.
     */
    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);

    /**
     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all
     * transfers.
     */
    event TransferBatch(
        address indexed operator,
        address indexed from,
        address indexed to,
        uint256[] ids,
        uint256[] values
    );

    /**
     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to
     * `approved`.
     */
    event ApprovalForAll(address indexed account, address indexed operator, bool approved);

    /**
     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.
     *
     * If an {URI} event was emitted for `id`, the standard
     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value
     * returned by {IERC1155MetadataURI-uri}.
     */
    event URI(string value, uint256 indexed id);

    /**
     * @dev Returns the amount of tokens of token type `id` owned by `account`.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function balanceOf(address account, uint256 id) external view returns (uint256);

    /**
     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.
     *
     * Requirements:
     *
     * - `accounts` and `ids` must have the same length.
     */
    function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids)
        external
        view
        returns (uint256[] memory);

    /**
     * @dev Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,
     *
     * Emits an {ApprovalForAll} event.
     *
     * Requirements:
     *
     * - `operator` cannot be the caller.
     */
    function setApprovalForAll(address operator, bool approved) external;

    /**
     * @dev Returns true if `operator` is approved to transfer ``account``'s tokens.
     *
     * See {setApprovalForAll}.
     */
    function isApprovedForAll(address account, address operator) external view returns (bool);

    /**
     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.
     *
     * Emits a {TransferSingle} event.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}.
     * - `from` must have a balance of tokens of type `id` of at least `amount`.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
     * acceptance magic value.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes calldata data
    ) external;

    /**
     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.
     *
     * Emits a {TransferBatch} event.
     *
     * Requirements:
     *
     * - `ids` and `amounts` must have the same length.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
     * acceptance magic value.
     */
    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes calldata data
    ) external;
}

// File: @openzeppelin/contracts/interfaces/IERC1155.sol


// OpenZeppelin Contracts v4.4.1 (interfaces/IERC1155.sol)

pragma solidity ^0.8.0;


// File: propertys.sol


pragma solidity ^0.8.17;







// SPDX-License-Identifier: MIT
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