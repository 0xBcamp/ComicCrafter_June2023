// create nftlaunchpad contract 
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

 import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/// @title ComicLaunchPad
/// @notice ComicLaunchPad is a contract for minting comic books as NFTs

contract ComicLaunchPad  is ERC721 {
    /// @dev mapping from token id to IPFS hash
    mapping(uint256 => string) private _tokenURIs;
    /// @dev mapping from IPFS hash to token id
    mapping( string=> uint256) private _tokenToUri;
    /// @dev token id tracker
    uint256 private _tokenIdTracker; 
  
    constructor() ERC721("ComicLaunchPad", "CLP") {
    }
    

    /// @notice  mint function for each new comic book for free. token id is IPFS hash.  
    /// @param _to the address of the receiver
    /// @param uri the IPFS hash of the comic book
            function mint(address _to,  string memory uri) public {
     // if the book is added, revert
      if(_tokenToUri[uri]!=0){
        revert DoulicatedURI();
      }
       ++ _tokenIdTracker; 
        _tokenURIs[_tokenIdTracker]=uri;
        _tokenToUri[uri]=_tokenIdTracker;
        _safeMint(_to, _tokenIdTracker);
    
    }

      /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireMinted(tokenId);

        return  _tokenURIs[tokenId];
        }

error DoulicatedURI( );
}
