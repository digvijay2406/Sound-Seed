// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Standard ERC-20 token interface
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

// ERC-20 token contract (basic implementation)
contract SongToken is IERC20 {
    string public name;
    string public symbol;
    uint public totalSupply;
    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowances;

    function initialize(string memory _name, string memory _symbol, uint _totalSupply) external {
        require(bytes(name).length == 0, "Already initialized");
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
        balances[msg.sender] = totalSupply;
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        _transfer(msg.sender, recipient, amount);
        return true;
    }

    function allowance(address owner, address spender) public override view returns (uint256) {
        return allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) public override returns (bool) {
        allowances[msg.sender][spender] = amount;
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        _transfer(sender, recipient, amount);
        require(allowances[sender][msg.sender] >= amount, "Insufficient allowance");
        return true;
    }

    function balanceOf(address account) public override view returns (uint256) {
        return balances[account];
    }

    function _transfer(address from, address to, uint256 amount) internal {
        require(balances[from] >= amount, "Insufficient balance");
        balances[from] -= amount;
        balances[to] += amount;
        emit Transfer(from, to, amount);
    }
}

contract Music {
    
    struct Artist {
        string name;
        uint totalSongs;
        uint activeSongs;
        uint releasedSongs;
    }
    
    struct Song {
        string name;
        string genre;
        uint totalTokens;
        uint pricePerToken;
        uint remainingTokens;
        address payable artist;
        address tokenAddress; // Address of the ERC-20 token for this song
        uint releaseDate; // Date until which tokens can be bought
        uint revenueShareDuration; // Duration for which revenue will be shared after the release date
    }
    
    mapping(address => Artist) public artists;
    mapping(uint => Song) public songs;
    uint public nextSongId = 1;
    
    // Array to store song IDs for each artist
    mapping(address => uint[]) public artistSongIds;
    
    // Event to notify when a new artist is registered
    event ArtistRegistered(address artist, string name);
    
    // Event to notify when a new song is added
    event SongAdded(uint songId, string name, string genre, uint totalTokens, uint pricePerToken, uint releaseDate, uint revenueShareDuration);
    
    // Event to notify when tokens are purchased
    event TokensPurchased(uint songId, address buyer, uint amount);
    
    // Function for artist to register
    function registerArtist(string memory _name) public {
        require(bytes(artists[msg.sender].name).length == 0, "Artist already registered");
        artists[msg.sender] = Artist(_name, 0, 0, 0);
        emit ArtistRegistered(msg.sender, _name);
    }
    
    // Function for artist to add a song
    function addSong(string memory _name, string memory _genre, uint _totalTokens, uint _pricePerToken, uint _releaseDate, uint _revenueShareDuration) public {
        require(bytes(artists[msg.sender].name).length > 0, "Artist not registered");
        
        // Create a new ERC-20 token for this song
        SongToken tokenContract = new SongToken();
        tokenContract.initialize(_name, _genre, _totalTokens);
        
        // Mint tokens to the artist
        tokenContract.transfer(msg.sender, _totalTokens);
        
        // Create the song and store it
        songs[nextSongId] = Song({
            name: _name,
            genre: _genre,
            totalTokens: _totalTokens,
            pricePerToken: _pricePerToken,
            remainingTokens: _totalTokens,
            artist: payable(msg.sender),
            tokenAddress: address(tokenContract),
            releaseDate: _releaseDate,
            revenueShareDuration: _revenueShareDuration
        });
        
        // Update artist's song list
        artistSongIds[msg.sender].push(nextSongId);
        
        emit SongAdded(nextSongId, _name, _genre, _totalTokens, _pricePerToken, _releaseDate, _revenueShareDuration);
        nextSongId++;
    }
    
    // Function to buy tokens for a song
    function buyTokens(uint _songId, uint _amount) public payable {
        Song storage song = songs[_songId];
        
        require(song.remainingTokens >= _amount, "Not enough tokens available");
        require(msg.value >= _amount * song.pricePerToken, "Insufficient ether sent");
        require(block.timestamp <= song.releaseDate, "Tokens sale period has ended");
        
        // Transfer tokens to the buyer
        SongToken tokenContract = SongToken(song.tokenAddress);
        tokenContract.transfer(msg.sender, _amount);
        
        // Reduce the remaining tokens for the song
        song.remainingTokens -= _amount;
        
        // Transfer ether to the artist
        song.artist.transfer(msg.value);
        
        emit TokensPurchased(_songId, msg.sender, _amount);
    }
}
