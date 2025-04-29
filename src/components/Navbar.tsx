"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Katibeh } from "next/font/google";
import { Kdam_Thmor_Pro } from "next/font/google";

const katibeh = Katibeh({
  weight: "400",
  subsets: ["latin"],
});

const kdamThmorPro = Kdam_Thmor_Pro({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // router.push(`/search?query=${query}`);
  };

  return (
    <div className="h-16 md:h-20 bg-black text-white px-4 md:px-10 flex items-center justify-between shadow-md">
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-all">
        <Image src="/logo.png" alt="Bossing Logo" width={35} height={35} />
        <span className={`${katibeh.className} text-lg md:text-xl text-[#f3c96b]`}>BOSSING</span>
      </Link>

      {/* SEARCH MODE */}
      {showSearch ? (
        <form onSubmit={handleSearch} className="flex items-center bg-white text-black rounded-2xl px-4 py-2 w-full max-w-md shadow-md ml-4">
          {/* Back Button */}
          <button type="button" onClick={() => setShowSearch(false)} aria-label="Go back">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="sr-only">Go back</span>
          </button>

          {/* Input Field */}
          <input
            type="text"
            autoFocus
            placeholder="Input text"
            className="flex-grow bg-transparent outline-none text-black placeholder-gray-500 ml-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Clear Button */}
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="sr-only">Clear search</span>
            </button>
          )}
        </form>
      ) : (
        // NAVIGATION LINKS
        <div className={`hidden md:flex gap-6 items-center text-sm md:text-base font-semibold ${kdamThmorPro.className}`}>
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/products" className="hover:text-gray-300">Products</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contacts" className="hover:text-gray-300">Contact</Link>

          {/* Search Button */}
          <button
            type="button"
            onClick={() => setShowSearch(true)}
            className="hover:text-gray-300 cursor-pointer"
            aria-label="Open search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="sr-only">Open search</span>
          </button>

          {/* Cart Icon */}
          <Link href="/cart">
            <button type="button" className="hover:text-gray-300 cursor-pointer" aria-label="Open cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 6.76a1 1 0 00.98 1.24h12.74a1 1 0 00.98-1.24L17 13M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              <span className="sr-only">Open cart</span>
            </button>
          </Link>
        </div>
      )}

      {/* MOBILE MENU ICON */}
      <div className="md:hidden">
        <Image src="/menu-icon.png" alt="Menu" width={24} height={24} />
      </div>
    </div>
  );
};

export default Navbar;
