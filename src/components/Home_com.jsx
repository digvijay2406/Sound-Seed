import React from 'react';

export const Home_com = () => {
  return (
    <section>
      <div className="min-h-screen flex items-center justify-left bg-blue-900 relative">
        <div className="text-left pl-20 pb-96 relative">
          <h1 className="text-6xl font-bold">Want Sound Seed Updates</h1>
          <h1 className="text-5xl font-bold">sent straight to your inbox?</h1>
        </div>

      <div></div>
      {/* <div className='flex flex-col gap-y-4'> */}

        <div className="flex flex-col w-full items-center space-x-2 md:w-1/3 mt-96 pl-20 ml-20 relative">
          <div className='flex pb-16'>

          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-white px-3 py-2 text-sm placeholder:text-white-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="Email"
          />

{/* <p className="text-sm text-white mt-2 md:ml-2">Small text goes here...</p> */}
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-8 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Subscribe
          </button>
          </div>

          
          {/* First animated GIF */}
          <img
            src="\gifs\arrow good.gif"
            alt="First Animated GIF"
            className="absolute -top-[250px] -bottom-16 -left-[290px] w-[400px] -right-16 h-auto z-50"
          />
          {/* Second animated GIF */}
          {/* <img
            src="path/to/second/animated.gif"
            alt="Second Animated GIF"
            className="absolute -top-8 -left-16 w-40 h-auto z-50"
          /> */}
            <p className="text-white text-sm">
            By clicking send you'll receive occasional emails from Sound Seed. You always have the choice to unsubscribe within every email you receive.
            </p>
        </div>
      {/* </div> */}

        

        
      </div>
      
    </section>
  );
}
