
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/ComicLaunchPad.sol";
import "./NFTHelper.sol";

// you might need to Moc your token, do it here 

contract TestComicLaunchPad is Test {
    // define you state vriables here 
ComicLaunchPad launchPad ;
NFTHelper nFTHelper;
string uri="https://ipfs.io/ipfs/QmdmQXB2mzChmMeKY47C43LxUdg1NDJ5MWcKMKxDu7RgQm/";
  error DoulicatedURI( );
  // define you errors here 
    function setUp() public {
      // set up you testing here 
      launchPad= new ComicLaunchPad();
      nFTHelper = new NFTHelper();
    }
function testMint () public {
       // add your test logic here 
       address bob = address(0x1);

         launchPad.mint(bob,uri);
         assertEq(launchPad.tokenURI(1),uri);
       
    }
     function testBalanceOf () public {
       // add your test logic here 
          launchPad.mint(address(nFTHelper),uri);

          assertEq(launchPad.balanceOf(address(nFTHelper)),1);
       
       
    }    function testName () public {
       // add your test logic here 
         assertEq(launchPad.name(),"ComicLaunchPad");
       
    } 

    function testNoDoublicatedNFT () public {
       
       launchPad.mint(address(nFTHelper),uri);
              vm.expectRevert(DoulicatedURI.selector);
launchPad.mint(address(nFTHelper),uri);
 
    }  
    function testRecieverShouldHandleNFt () public {
       vm.expectRevert("ERC721: transfer to non ERC721Receiver implementer");
       launchPad.mint(address(this),uri);
       launchPad.mint(address(nFTHelper),uri);
       assertEq(launchPad.ownerOf(1),address(nFTHelper));

    }  
    function testSymbol () public {
       // add your test logic here 
       assertEq(launchPad.symbol(),"CLP");
    }
 
}
