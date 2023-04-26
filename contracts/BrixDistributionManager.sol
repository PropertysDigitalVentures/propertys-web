// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/// @title The propertys.xyz brix distribution manager
/// @notice No warranties or whatsoever are taken by the author.
/// @notice Usage of this contract in a productive environment is on your own risk

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract BrixDistributor is Ownable, ReentrancyGuard {

    /// @notice admin mapping
    mapping (address => bool) public adminAddresses;

    /// @notice BRIX
    // polygon
    // address brix = 0xaBFFedaF784Dc40A4C1947F9D5ddB3AfE2075353;
    // mumbai
    address brix = 0x858aE51B38c7fd338e1f0f57707079b157F46F50;

    /// @notice events
    event brixClaimed(address claimer, uint256 amount);

    constructor() {

    }

    /// @notice claim function
    function claimBrix(address _claimer, uint256 _amount) public reqAdmin nonReentrant {
        IERC20(brix).transfer(_claimer, _amount);
        emit brixClaimed(_claimer, _amount);
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