// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import {ComicLaunchPad} from "../src/ComicLaunchPad.sol";
import {ComicToken} from "../src/ComicToken.sol";

contract DeployScript is Script {
    function run() public {
        // Get the private key from the .env
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        // Make a new token
        new ComicToken(msg.sender,1000 ether);

        // Make a new ComicLaunchPad
        new ComicLaunchPad();

        vm.stopBroadcast();
    }
}