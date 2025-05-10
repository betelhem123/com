import React from 'react'
const Shop = () => {
    return (
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Shop Our Shoes</h2>
        <div className="flex flex-wrap justify-around mt-6">
          <div className="w-1/3 p-4">
            <img src="/images/shoe1.jpg" alt="Shoe 1" className="w-full h-auto" />
            <h3 className="text-xl font-bold mt-2">Shoe Name 1</h3>
            <p className="text-gray-600">Description of the shoe goes here...</p>
            <button className="mt-4 px-6 py-2 bg-primary text-white">View More</button>
          </div>
          <div className="w-1/3 p-4">
            <img src="/images/shoe2.jpg" alt="Shoe 2" className="w-full h-auto" />
            <h3 className="text-xl font-bold mt-2">Shoe Name 2</h3>
            <p className="text-gray-600">Description of the shoe goes here...</p>
            <button className="mt-4 px-6 py-2 bg-primary text-white">View More</button>
          </div>
        </div>
      </div>
    );
  };
  
export default Shop
