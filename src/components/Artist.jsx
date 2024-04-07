import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Web3 from 'web3';

// Import your contract ABI file
import contractABI from '../music.json';

const contractAddress = '0xe8EF684feBe1eF7a50355816C1c2954Fe458859D';

export const Artist = () => {
  const [showAddSong, setShowAddSong] = useState(false);
  const [songName, setSongName] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [totalTokens, setTotalTokens] = useState('');
  const [pricePerToken, setPricePerToken] = useState('');
  const [revenueShareDuration, setRevenueShareDuration] = useState('');
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    connectToBlockchain();
  }, []);

  const connectToBlockchain = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
        setContract(contractInstance);
      } catch (error) {
        console.error('Error connecting to the blockchain:', error);
      }
    } else {
      console.error('Please install MetaMask to use this application');
    }
  };

  const handleCreateArtist = async () => {
    setShowAddSong(true);
    await createArtist();
  };

  const handleAddSong = async () => {
    await addSong();
  };

  const createArtist = async () => {
    try {
      await contract.methods.createArtist().send({ from: web3.eth.defaultAccount });
      console.log('Artist created successfully');
    } catch (error) {
      console.error('Error creating artist:', error);
    }
  };

  const addSong = async () => {
    console.log('Adding song:', {
      songName,
      genre,
      releaseDate,
      totalTokens,
      pricePerToken,
      revenueShareDuration
    });
  };

  return (
    <div className="relative w-full dark:bg-gray-900">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
            Join Our Artistic Community
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Embark on Your Artistic Journey: Take the First Step Towards Recognition and Collaboration by Registering as an Artist with Us
          </p>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div>
              <input
                className="flex w-full rounded-md border border-black/30 bg-slate-300 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Enter your name"
                id="email"
              ></input>
            </div>
            <div>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={handleCreateArtist}
              >
                Create Artist
              </button>
            </div>
          </form>

          {showAddSong && (
            <>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5 ">
                  <div >
                    <input
                      type="text"
                      className="bg-slate-300"
                      placeholder="Song Name"
                      value={songName}
                      onChange={(e) => setSongName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Genre"
                      className="bg-slate-300"
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="bg-slate-300"
                      placeholder="Release Date"
                      value={releaseDate}
                      onChange={(e) => setReleaseDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="bg-slate-300"
                      placeholder="Total Tokens"
                      value={totalTokens}
                      onChange={(e) => setTotalTokens(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="bg-slate-300"
                      placeholder="Price per Token"
                      value={pricePerToken}
                      onChange={(e) => setPricePerToken(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="bg-slate-300"
                      placeholder="Revenue Share Duration"
                      value={revenueShareDuration}
                      onChange={(e) => setRevenueShareDuration(e.target.value)}
                    />
                  </div>
                  <div>
                    <button className="bg-slate-300"i
                      type="button"
                      onClick={handleAddSong}
                    >
                      Add Song <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        {/* </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div> */}

      </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 pt-10">
          <video className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]" autoPlay muted loop>
            <source src="\gifs\bg_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

    </div>
  );
};
