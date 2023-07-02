// implement erc20 token based on OZ 
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract ComicToken is ERC20 {
    constructor(address minter, uint256 maxSupply) ERC20("ComicToken", "COMIC") {
        _mint(minter, maxSupply);
    }
}