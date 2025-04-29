"use client";

import React from "react";
import Image from "next/image";

const MenuSection = () => {
  const menuItems = [
    {
      title: "Traditional Italian Pizza",
      description:
        "Traditional Italian pizza, or 'pizza Napoletana,' features a thin, soft crust with a slightly charred exterior from being baked in a wood-fired oven.",
      image: "/pizzas/traditional.png",
    },
    {
      title: "Pepperoni Pizza",
      description:
        "Pepperoni pizza is a classic favorite, featuring a deliciously crispy crust, tangy tomato sauce, melted mozzarella cheese, and spicy pepperoni slices.",
      image: "/pizzas/pepperoni.png",
    },
    {
      title: "Hawaiian Pizza",
      description:
        "Hawaiian pizza is a delightful blend of savory and sweet flavors, typically topped with tomato sauce, mozzarella cheese, ham, and pineapple chunks.",
      image: "/pizzas/hawaiian.png",
    },
    {
      title: "Ham and Cheese Pizza",
      description:
        "Ham and cheese pizza is a comforting classic, combining the savory flavors of ham with the creamy, melted goodness of cheese.",
      image: "/pizzas/hamcheese.png",
    },
    {
      title: "Vegan Pizza",
      description:
        "Vegan pizza features a crispy crust topped with tomato sauce, dairy-free cheese, and an array of fresh vegetables like bell peppers, mushrooms, spinach, and olives.",
      image: "/pizzas/vegan.png",
    },
    {
      title: "Classic Pizza",
      description:
        "Classic pizza, often referred to as Margherita, features a simple combination of tomato sauce, mozzarella cheese, and fresh basil leaves.",
      image: "/pizzas/classic.png",
    },
  ];

  return (
    <div className="relative bg-[#E5A73D] min-h-screen w-full py-16 px-6">
      {/* Content */}
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8A1F1F] mb-16 flex items-center justify-center gap-2">
          Our Menu <span>🍕</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-white to-[#E5A73D] rounded-[20px] shadow-md pt-28 pb-6 px-4 w-[305px] h-[400px] mx-auto"
            >
              {/* Image Container */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-[#833939] opacity-90 w-[252px] h-[184px] rounded-[15px] border-[3px] border-[#D9D9D9] flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={160}
                  className="object-contain"
                />
              </div>

              {/* Text Container */}
              <div className="mt-10 flex flex-col items-center justify-center bg-white rounded-[10px] w-[272px] h-[146px] mx-auto px-4 py-2">
                <h3 className="text-[22px] font-normal text-[#8A1F1F] mb-2 font-kaushan">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#8A1F1F] leading-snug">
                  {item.description}
                </p>
              </div>

              {/* Order Button */}
              <button className="absolute bottom-4 right-4 bg-[#C92525] hover:bg-[#a71f1f] text-white font-semibold text-sm px-5 py-2 rounded-md shadow-sm transition-all duration-300">
                Order 📩
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
