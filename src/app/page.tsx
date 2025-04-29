"use client";

import React from "react";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="relative h-[90vh] bg-[#181716] flex items-center justify-center px-6 py-8 overflow-hidden">

      {/* Red Wavy Background */}
      <div className="absolute top-0 right-0 h-full w-[40%] z-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="609" height="911" viewBox="0 0 609 911" fill="none" className="h-full w-full object-cover scale-110 translate-x-6">
          <path d="M139.717 18.5278C156.651 6.47607 176.919 0 197.703 0H747V911H183.271C171.738 911 160.352 908.409 149.955 903.417L90.6692 874.957C56.5893 858.596 56.4599 810.117 90.4521 793.575V793.575C126.745 775.913 123.446 723.153 85.2356 710.15L69.7506 704.881C32.1933 692.1 30.7989 639.495 67.6264 624.743V624.743C106.008 609.368 102.367 553.882 62.3054 543.655L32.127 535.95C-12.7174 524.502 -9.70457 459.822 36.0099 452.592L44.8691 451.191C85.1669 444.818 91.3606 389.368 53.4622 374.26V374.26C19.8297 360.853 19.7407 313.279 53.3227 299.746L84.995 286.982C122.102 272.029 130.506 223.256 100.543 196.747L76.1136 175.132C40.452 143.58 43.445 87.0467 82.2388 59.4365L139.717 18.5278Z" fill="#962222"/>
        </svg>
      </div>

      {/* Yellow/Orange Wavy Overlay */}
      <div className="absolute top-0 right-0 h-full z-10 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="492" height="911" viewBox="0 0 492 911" fill="none" className="h-full w-full object-cover scale-110 translate-x-6">
          <path d="M116.271 23.8711C134.362 8.46255 157.349 0 181.113 0H630V911H164.832C151.378 911 138.159 907.473 126.493 900.771L81.558 874.956C50.2236 856.954 50.0903 811.796 81.3179 793.609V793.609C115.025 773.979 111.519 724.2 75.3934 709.488L64.6556 705.115C29.3324 690.73 27.841 641.264 62.2334 624.777V624.777C98.3482 607.464 94.3784 554.812 56.0759 543.11L31.0388 535.461C-11.623 522.427 -8.25519 460.947 35.5751 452.651L40.1568 451.784C79.2773 444.379 86.166 391.29 50.2307 374.147V374.147C19.0353 359.265 18.9416 314.894 50.0739 299.88L76.3624 287.202C109.991 270.984 118.146 226.749 92.5106 199.606L69.0663 174.783C37.557 141.42 40.4315 88.4661 75.3671 58.7104L116.271 23.8711Z" fill="#E5A73D"/>
        </svg>
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center z-20">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-500 mb-4">PIZZAHUB</h1>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            At PizzaHub, we believe that pizza is more than just food — it is an experience.
            Our mission is to bring joy to every meal with our mouth-watering, hand-crafted pizzas 
            made from the freshest ingredients. Whether you are craving a classic Margherita, a meat lovers feast, 
            or a unique gourmet creation, we have got something to tantalize every taste bud. 
            Join us at PizzaHub, where delicious moments are shared one slice at a time.
          </p>
          <button className="bg-[#A24A2C] text-white font-semibold px-5 py-2 rounded hover:bg-[#8a3f26] transition">
            Get Started
          </button>
        </div>

        {/* Right Side with Pizza Image */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
          <Image
            src="/pizza.png"
            alt="Delicious pizza"
            width={800}
            height={800}
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Homepage;
