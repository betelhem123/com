import React from 'react';
import './FlipCard.css';
import frontImage from '../assets/images/shoe-front.png';
import backImage from '../assets/images/shoe-back.png';

const Home = () => {
 return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white px-6 md:px-16"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Left - Content */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Step Into Style with{' '}
            <span className="text-yellow-500">Zala Footwear</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Discover handcrafted shoes designed for comfort, elegance, and confidence.
          </p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-2xl hover:bg-yellow-600 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Right - Floating 3D Rotating Shoe with Shadow */}
        <div className="mt-16 md:mt-0 relative flex flex-col items-center">
          {/* Oval Shadow */}
          <div className="w-60 h-4 bg-black/20 rounded-full blur-sm absolute bottom-0 z-0"></div>

          {/* Flip Card */}
          <div className="flip-container relative z-10 animate-float">
            <div className="flip-card w-[350px] h-[350px]">
              <img
                src={frontImage}
                alt="Front Shoe"
                className="flip-front object-contain w-full h-full"
              />
              <img
                src={backImage}
                alt="Back Shoe"
                className="flip-back object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
