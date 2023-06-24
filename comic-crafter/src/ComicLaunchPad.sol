// create nftlaunchpad contract 
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

// import erc721 fform OpenZeppelin
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ComicLaunchPad  is ERC721 {
        // Optional mapping for token URIs
    mapping(uint256 => string) private _tokenURIs;
    mapping( string=> uint256) private _tokenToUri;
    uint256 private _tokenIdTracker;
    // constructor
    constructor() ERC721("ComicLaunchPad", "CLP") {
    }
    // mint function for each new comic book for free. token id is IPFS hash 
    function mint(address _to,  string memory uri) public {
     // if the book is added, revert
      if(_tokenToUri[uri]!=0){
        revert();
      }
    ++ _tokenIdTracker; 
        _safeMint(_to, _tokenIdTracker);
        _tokenURIs[_tokenIdTracker]=uri;
        _tokenToUri[uri]=_tokenIdTracker;
    }

      /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireMinted(tokenId);

        return  _tokenURIs[tokenId];
        }


}
