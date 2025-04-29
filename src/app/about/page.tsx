"use client";

import React from "react";
import Image from "next/image";
import { Kdam_Thmor_Pro } from "next/font/google";

const kdam = Kdam_Thmor_Pro({ subsets: ["latin"], weight: "400" });

const AboutUs = () => {
  return (
    <section className={`h-screen overflow-hidden bg-[#E5A73D] flex flex-col lg:flex-row items-stretch ${kdam.className}`}>
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 relative">
        <Image
          src="/pizzaHub.jpg"
          alt="Pizza Hub Signage"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 text-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to Pizza Hub!
        </h1>

        {/* About Us Section */}
        <div className="mb-5">
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p className="text-base leading-relaxed">
            At Pizza Hub, we are passionate about crafting the perfect pizza for every craving. Our journey began with a simple belief: great pizza comes from great ingredients and great care. We pride ourselves on using only the freshest produce, finest cheeses, and premium meats to create mouthwatering pizzas that leave a lasting impression.
          </p>
        </div>

        {/* Our Promise Section */}
        <div className="mb-5">
          <h2 className="text-2xl font-semibold mb-2">Our Promise</h2>
          <p className="text-base leading-relaxed">
            At Pizza Hub, we are committed to delivering top-quality pizzas with outstanding service. Whether you're dining in or ordering for delivery, we ensure that every pizza meets our high standards of taste and satisfaction.
          </p>
        </div>

        {/* Join Us Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
          <p className="text-base leading-relaxed">
            Visit us at our locations, order online, or call for delivery. Follow us on social media to stay updated on our latest promotions and new menu items. We look forward to serving you the best pizza in town!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
