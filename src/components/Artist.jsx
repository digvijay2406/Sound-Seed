import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react'

export const Artist = () => {
  const [showAddSong, setShowAddSong] = useState(false);

  const handleCreateArtist = () => {
    setShowAddSong(true);
  };

  const [enteredDate, setEnteredDate] = useState('');

  // Function to handle input change
  const handleInputChange = (e) => {
    setEnteredDate(e.target.value);
  };

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">

          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            People who care about your growth
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi blanditiis
            dolores quasi eaque explicabo!
          </p>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div>
              <input
                className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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

          {/* {showAddSong && (
            <button 
              type="button"
              className="mx-48 my-3.5 rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add song
            </button>

          )} */}

{showAddSong && (
  <>
    <form action="#" method="POST" className="mt-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            {' '}
            Song Name{' '}
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Song Name"
              id="name"
            ></input>
          </div>
        </div>

        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            {' '}
            Genre{' '}
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Genre"
              id="name"
            ></input>
          </div>
        </div>

        <div>
      <div className="flex items-center justify-between">
        <label htmlFor="date" className="text-base font-medium text-gray-900">
          {' '}
          Release Date (DD-MM-YYYY){' '}
        </label>
      </div>
      <div className="mt-2">
        <input
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          id="date"
          value={enteredDate} // Bind the input value to the entered date
          onChange={handleInputChange} // Handle input change
          placeholder="DD-MM-YYYY" // Placeholder text to guide the user
        ></input>
      </div>
    </div>
 
        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            {' '}
            Total Tokens{' '}
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Total Tokens"
              id="name"
            ></input>
          </div>
        </div>

        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            {' '}
            Price per Token{' '}
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Price per Token"
              id="name"
            ></input>
          </div>
        </div>

        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            {' '}
            Revenue Share Duration{' '}
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Revenue Share Duration"
              id="name"
            ></input>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
          >
            Add Song <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </form>
  </>
)}


        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
