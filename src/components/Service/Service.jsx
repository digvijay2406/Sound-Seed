// import React, { useState } from 'react';

// const items = [
//     {
//         name: "Arjit Singh",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
//         colors: ["red", "purple", "orange"],
//         sizes: ["8 UK", "9 UK", "10 UK"],
//         imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       },
//       // Add more items as needed
//       {
//         name: "Nike Airmax v2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
//         colors: ["red", "purple", "orange"],
//         sizes: ["8 UK", "9 UK", "10 UK"],
//         imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       },
//       {
//         name: "Nike Airmax v2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
//         colors: ["red", "purple", "orange"],
//         sizes: ["8 UK", "9 UK", "10 UK"],
//         imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       },
//       {
//         name: "Nike Airmax v2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
//         colors: ["red", "purple", "orange"],
//         sizes: ["8 UK", "9 UK", "10 UK"],
//         imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       },
//       {
//         name: "Nike Airmax v2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
//         colors: ["red", "purple", "orange"],
//         sizes: ["8 UK", "9 UK", "10 UK"],
//         imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       },
//       {
//         name: "Nike Airmax v2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
//         colors: ["red", "purple", "orange"],
//         sizes: ["8 UK", "9 UK", "10 UK"],
//         imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       },
//       {
//         name: "Nike Airmax v2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
//         colors: ["red", "purple", "orange"],
//         sizes: ["8 UK", "9 UK", "10 UK"],
//         imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       },
//       {
//         name: "Nike Airmax v2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
//         colors: ["red", "purple", "orange"],
//         sizes: ["8 UK", "9 UK", "10 UK"],
//         imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       },
//       {
//         name: "Nike Airmax v2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
//         colors: ["red", "purple", "orange"],
//         sizes: ["8 UK", "9 UK", "10 UK"],
//         imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       },
//       {
//         name: "Nike Airmax v2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
//         colors: ["red", "purple", "orange"],
//         sizes: ["8 UK", "9 UK", "10 UK"],
//         imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       },
//       {
//         name: "Nike Airmax v2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
//         colors: ["red", "purple", "orange"],
//         sizes: ["8 UK", "9 UK", "10 UK"],
//         imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       },
//       {
//         name: "Nike Airmax v2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
//         colors: ["red", "purple", "orange"],
//         sizes: ["8 UK", "9 UK", "10 UK"],
//         imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       }
// ];

// export function Service() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className="rounded-md border"
//           style={{
//             transition: 'transform 0.3s ease-in-out', // Add transition property
//             transform: index === hoveredIndex ? 'scale(1.05)' : 'scale(1)'
//           }}
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <img
//             src={item.imageUrl}
//             alt="Laptop"
//             className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
//           />
//           <div className="p-4">
//             <h1 className="inline-flex items-center text-lg font-semibold">{item.name}</h1>
//             <p className="mt-3 text-sm text-gray-600">{item.description}</p>
//             <div className="mt-4">
//               {item.colors.map((color, index) => (
//                 <span key={index} className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
//                   #{color}
//                 </span>
//               ))}
//             </div>
//             <div className="mt-3 flex items-center space-x-2">
//               <span className="block text-sm font-semibold">Size : </span>
//               {item.sizes.map((size, index) => (
//                 <span key={index} className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
//                   {size}
//                 </span>
//               ))}
//             </div>
//             <button
//               type="button"
//               className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//             >
//               Go To Profile
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



import React, { useState } from 'react';

const items1 = [
  {
    name: "Shayranna",
    description: "Arjit Singh",
    colors: ["slow", "romantic", "hindi"],
    imageUrl: "../../gifs/Designer1.png",
    availableTokens: 100,
    releaseDate: "2024-04-15",
    timeRemaining: "10 days"
  },
  // Add more items as needed
];

// const items2 = [
//   {
//     name: "Angreji Beat",
//     description: "Yo Yo Honey Singh",
//     colors: ["pop", "hiphop", "energetic"],
//     imageUrl: "../../gifs/Designer2.png",
//     availableTokens: 100,
//     releaseDate: "2024-04-15",
//     timeRemaining: "10 days"
//   },
// ];

// const items3 = [
//   {
//     name: "Mercy",
//     description: "Badshah",
//     colors: ["pop", "hiphop", "energetic"],
//     imageUrl: "../../gifs/Designer3.png",
//     availableTokens: 100,
//     releaseDate: "2024-04-15",
//     timeRemaining: "10 days"
//   },
// ];

// const items4 = [
//   {
//     name: "Alone Dark",
//     description: "Alan Walker",
//     colors: ["pop", "english", "jazz"],
//     imageUrl: "../../gifs/Designer4.png",
//     availableTokens: 100,
//     releaseDate: "2024-04-15",
//     timeRemaining: "10 days"
//   },
// ];

export function Service() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tokenCount, setTokenCount] = useState(0);

  const incrementTokenCount = () => {
    setTokenCount(tokenCount + 1);
  };

  const decrementTokenCount = () => {
    if (tokenCount > 0) {
      setTokenCount(tokenCount - 1);
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="bg-black">
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {items1.map((item, index) => (
          <div
            key={index}
            className="rounded-md border"
            style={{
              transition: 'transform 0.3s ease-in-out',
              transform: index === hoveredIndex ? 'scale(1.05)' : 'scale(1)'
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={item.imageUrl}
              alt="Laptop"
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex text-white items-center text-lg font-semibold">{item.name}</h1>
              <p className="mt-3 text-sm text-gray-600">{item.description}</p>
              <div className="mt-4">
                {item.colors.map((color, index) => (
                  <span key={index} className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #{color}
                  </span>
                ))}
              </div>
              <div className="mt-3">
                <span className="block text-sm font-semibold text-gray-600">Available Tokens : {item.availableTokens}</span>
                <span className="block text-sm font-semibold text-gray-600">Release Date : {item.releaseDate}</span>
                <span className="block text-sm font-semibold text-gray-600">Time Remaining : {item.timeRemaining}</span>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <button
                  type="button"
                  onClick={decrementTokenCount}
                  className="rounded-full border text-white border-gray-300 px-3 py-1 text-[10px] font-semibold"
                >
                  -
                </button>
                <span className="text-lg text-white font-semibold">{tokenCount}</span>
                <button
                  type="button"
                  onClick={incrementTokenCount}
                  className="rounded-full border text-white border-gray-300 px-3 py-1 text-[10px] font-semibold"
                >
                  +
                </button>
                <button
                  type="button"
                  className="rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Buy Tokens
                </button>
              </div>
            </div>
          </div>
        ))}


        {/* Render other items similarly */}

        
      </div>
    </section>
  );
}