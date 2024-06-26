# Sound-Seed

## Overview -
The Sound-Seed project aims to disrupt the music industry. This will work as first an artist will register himself/herself on the website and add a song along with its properties. Now he will put up how many tokens need to be created and also the price of each token will be specified by the artist. This will list the song tokens on the marketplace page where all the active song tokens will be displayed. Here people like us and the fans of the artists can buy the tokens in exchange of specified amount of money. Now once all tokens of a song are sold, the song will be released. The revenue generated by the song in a specified span of time will be proportionally distributed among all the token holders and the tokens will be destroyed once they get their share. Hence forward the revenue generated will be wholly go to the artist.

## Tech-Stack used -
- Smart Contract with Solidity
- Frontend using React+Vite App
- Integrated using JavaScript


# Smart Contract Overview

## Title: Music Tokenization Platform

### Description:

The provided smart contract facilitates the creation, management, and tokenization of music assets on the Ethereum blockchain. It consists of two primary contracts: `SongToken` and `Music`.

#### `SongToken` Contract:

- `SongToken` is an implementation of the ERC-20 standard interface for fungible tokens.
- It serves as the token contract for each song created on the platform.
- Features include token transfer, allowance management, and balance inquiries.
- Tokenization allows for fractional ownership and trading of music rights.

#### `Music` Contract:

- `Music` acts as the main contract responsible for managing artists, songs, and token sales.
- Artists can register on the platform, adding their songs for tokenization.
- Each song is represented by a unique ERC-20 token, facilitating ownership and trading.
- Artists can define song parameters such as genre, total tokens, price per token, and release date.
- The contract enables users to purchase tokens representing a share of a song's revenue.
- Revenue sharing occurs between the artist and token holders for a specified duration after the song's release.
- The contract ensures transparency and security in music rights management and revenue distribution.

### Usage:

1. Artists register on the platform via `registerArtist` function.
2. Artists add songs via `addSong` function, specifying song details and token parameters.
3. Users purchase tokens for desired songs through `buyTokens` function, adhering to specified conditions such as availability, price, and sale period.

### Events:

- `ArtistRegistered`: Triggered upon successful artist registration.
- `SongAdded`: Fired when a new song is added to the platform.
- `TokensPurchased`: Signaled when tokens are purchased by users.

### Security:

- Contracts enforce conditions such as token availability, sufficient ether sent, and sale period validity to prevent unauthorized actions.
- ERC-20 token standards ensure interoperability and compatibility with various platforms and wallets.
- Transparency is maintained through event logging, providing visibility into contract actions.

### Benefits:

- Enables fractional ownership and trading of music assets.
- Facilitates fair revenue sharing between artists and token holders.
- Enhances transparency and trust in music rights management.

### Future Enhancements:

- Integration with decentralized finance (DeFi) protocols for enhanced liquidity and token utility.
- Implementing additional features such as secondary markets for trading music tokens.



# Frontend Application Overview:

The frontend application was built using react and vite js. It provides an intuitive user interface for interacting with the Music contract.

