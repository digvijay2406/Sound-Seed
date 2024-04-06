import React, { useState } from 'react';

const items = [
  {
    name: "Arjit Singh",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["red", "purple", "orange"],
    imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    availableTokens: 100,
    releaseDate: "2024-04-15",
    timeRemaining: "10 days",
    pricePerToken: 1.5, // Add price per token
    tokenCount: 0 // Add token count for this item
  },
  {
    name: "Nike Airmax v2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["red", "purple", "orange"],
    imageUrl: "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    availableTokens: 100,
    releaseDate: "2024-04-15",
    timeRemaining: "10 days",
    pricePerToken: 2, // Add price per token
    tokenCount: 0 // Add token count for this item
  },
  // Add more items as needed
  {
    name: "Item 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["blue", "green", "yellow"],
    imageUrl: "https://via.placeholder.com/400",
    availableTokens: 150,
    releaseDate: "2024-04-20",
    timeRemaining: "15 days",
    pricePerToken: 1.75,
    tokenCount: 0
  },
  {
    name: "Item 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["black", "white", "gray"],
    imageUrl: "https://via.placeholder.com/400",
    availableTokens: 200,
    releaseDate: "2024-04-25",
    timeRemaining: "20 days",
    pricePerToken: 2.25,
    tokenCount: 0
  },
  {
    name: "Item 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["red", "blue", "green"],
    imageUrl: "https://via.placeholder.com/400",
    availableTokens: 100,
    releaseDate: "2024-04-30",
    timeRemaining: "25 days",
    pricePerToken: 1.99,
    tokenCount: 0
  },
  {
    name: "Item 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["purple", "yellow", "orange"],
    imageUrl: "https://via.placeholder.com/400",
    availableTokens: 180,
    releaseDate: "2024-05-05",
    timeRemaining: "30 days",
    pricePerToken: 2.5,
    tokenCount: 0
  },
  {
    name: "Item 7",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["brown", "cyan", "magenta"],
    imageUrl: "https://via.placeholder.com/400",
    availableTokens: 120,
    releaseDate: "2024-05-10",
    timeRemaining: "35 days",
    pricePerToken: 1.49,
    tokenCount: 0
  },
  {
    name: "Item 8",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["lime", "indigo", "teal"],
    imageUrl: "https://via.placeholder.com/400",
    availableTokens: 160,
    releaseDate: "2024-05-15",
    timeRemaining: "40 days",
    pricePerToken: 1.89,
    tokenCount: 0
  },
  {
    name: "Item 9",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["maroon", "navy", "olive"],
    imageUrl: "https://via.placeholder.com/400",
    availableTokens: 140,
    releaseDate: "2024-05-20",
    timeRemaining: "45 days",
    pricePerToken: 2.99,
    tokenCount: 0
  },
  {
    name: "Item 10",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    colors: ["pink", "turquoise", "violet"],
    imageUrl: "https://via.placeholder.com/400",
    availableTokens: 110,
    releaseDate: "2024-05-25",
    timeRemaining: "50 days",
    pricePerToken: 2.19,
    tokenCount: 0
  },
];

export function Service() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const incrementTokenCount = (index) => {
    items[index].tokenCount += 1;
    setHoveredIndex(null); // Reset hovered index to prevent scaling issue
  };

  const decrementTokenCount = (index) => {
    if (items[index].tokenCount > 0) {
      items[index].tokenCount -= 1;
      setHoveredIndex(null); // Reset hovered index to prevent scaling issue
    }
  };

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-md border"
          style={{
            transition: 'transform 0.3s ease-in-out', // Add transition property
            transform: index === hoveredIndex ? 'scale(1.05)' : 'scale(1)'
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={item.imageUrl}
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">{item.name}</h1>
            <p className="mt-3 text-sm text-gray-600">{item.description}</p>
            <div className="mt-4">
              {item.colors.map((color, index) => (
                <span key={index} className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #{color}
                </span>
              ))}
            </div>
            <div className="mt-3">
              <span className="block text-sm font-semibold">Available Tokens : {item.availableTokens}</span>
              <span className="block text-sm font-semibold">Release Date : {item.releaseDate}</span>
              <span className="block text-sm font-semibold">Time Remaining : {item.timeRemaining}</span>
              <span className="block text-sm font-semibold">Price per Token : ${item.pricePerToken}</span> {/* Display price per token */}
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <button
                type="button"
                onClick={() => decrementTokenCount(index)}
                className="rounded-full border border-gray-300 px-3 py-1 text-[10px] font-semibold"
              >
                -
              </button>
              <span className="text-lg font-semibold">{item.tokenCount}</span>
              <button
                type="button"
                onClick={() => incrementTokenCount(index)}
                className="rounded-full border border-gray-300 px-3 py-1 text-[10px] font-semibold"
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
    </div>
  );
}
