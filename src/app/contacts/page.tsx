import React from "react";
import Image from "next/image";
import { Kdam_Thmor_Pro } from "next/font/google";

const kdamThmorPro = Kdam_Thmor_Pro({
  weight: "400",
  subsets: ["latin"],
});

const ContactForm = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image with Blur */}
      <Image
        src="/pizzaBg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0 filter blur-[2.75px]"
      />

      {/* Foreground content with Google Font */}
      <div
        className={`${kdamThmorPro.className} absolute z-10 bg-white bg-opacity-10 p-6 md:p-10 backdrop-blur rounded-lg grid md:grid-cols-2 gap-6`}
        style={{
          width: "960px",
          height: "640px",
          flexShrink: 0,
        }}
      >
        {/* Left: Contact Info */}
        <div className="text-black overflow-auto">
          <p className="mb-4 text-lg md:text-xl leading-relaxed">
            <span className="block font-bold text-black mb-2 text-[30px]">
              At Pizza Hub
            </span>
            We are always excited to hear from you! Whether you have questions,
            feedback, or just want to say hello, here are the best ways to
            reach us:
          </p>
          <p className="text-[20px]">📞 Phone: (123) 456-7890</p>
          <p className="text-[20px]">📧 Email: contact@pizzahub.com</p>
          <p className="text-[20px]">📍 Address: 123 Pizza Street, Pizzaville, PA 12345</p>
          <p className="mt-4 font-semibold text-[20px]">Social Media:</p>
          <ul className="list-disc list-inside text-[20px]">
            <li>Facebook: PizzaHubOfficial</li>
            <li>Twitter: @PizzaHub</li>
            <li>Instagram: @PizzaHub</li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <form className="text-black space-y-4 overflow-auto" aria-label="Contact Form">
          <div>
            <label htmlFor="name" className="font-bold">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full p-2 bg-[#cc6666] text-white rounded outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-bold">Email Address:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-[#cc6666] text-white rounded outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="font-bold">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-2 bg-[#cc6666] text-white rounded outline-none"
            />
          </div>
          <div>
            <label htmlFor="subject" className="font-bold">Subject:</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject of your message"
              className="w-full p-2 bg-[#cc6666] text-white rounded outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-bold block">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Please leave a message here..."
              rows={4}
              className="w-full p-3 bg-[#cc6666] text-white rounded outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-black font-bold py-2 px-4 rounded hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
