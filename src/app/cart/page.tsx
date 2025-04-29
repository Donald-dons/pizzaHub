"use client";

import React from "react";
import {
  FaBoxOpen,
  FaCheck,
  FaCogs,
  FaTruckLoading,
  FaShippingFast,
} from "react-icons/fa";
import { Kdam_Thmor_Pro } from "next/font/google";

const kdamThmorPro = Kdam_Thmor_Pro({
  weight: "400",
  subsets: ["latin"],
});

const orderSteps = [
  {
    title: "Order Placed",
    description: "We have received your order",
    icon: <FaBoxOpen />,
    active: true,
  },
  {
    title: "Order Confirmed",
    description: "We have confirmed",
    icon: <FaCheck />,
    active: true,
  },
  {
    title: "Order Processed",
    description: "We are preparing your order",
    icon: <FaCogs />,
    active: true,
  },
  {
    title: "Ready to Ship",
    description: "Your order is ready to ship",
    icon: <FaTruckLoading />,
    active: false,
  },
  {
    title: "Out for Delivery",
    description: "Your order is out for delivery",
    icon: <FaShippingFast />,
    active: false,
  },
];

const OrderTracking = () => {
  return (
    <div className="min-h-screen bg-[#981c1c] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-[#d46928] rounded-md shadow-lg overflow-hidden">

        {/* Header */}
        <div className={`${kdamThmorPro.className} text-white text-3xl font-bold text-center py-4`}>
          Order Details
        </div>

        <div className="flex flex-col md:flex-row">
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-white gap-6 p-6 border-r border-white">
            <div className="text-xl font-semibold">No order yet...</div>
            <div className="text-xl font-semibold">No order yet...</div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-1/2 px-8 py-10 text-white">
            <h2 className={`${kdamThmorPro.className} text-2xl font-bold mb-6 text-center`}>
              Track Order
            </h2>

            <div className="relative pl-12">
              {orderSteps.map((step, index) => (
                <div key={index} className="relative mb-10 flex items-start">
                  {/* Circle + Icon */}
                  <div className="absolute left-0 top-1 flex flex-col items-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-lg z-10 shadow-md ${
                        step.active ? "bg-green-500" : "bg-orange-300"
                      } opacity-70`}
                    >
                      {step.icon}
                    </div>

                    {/* Line connector (except last step) */}
                    {index < orderSteps.length - 1 && (
                      <div className="w-1 h-10 bg-[#E5A73D] mt-1 rounded-full"></div>
                    )}
                  </div>

                  {/* Step Text */}
                  <div className="ml-12 opacity-70">
                    <h3
                      className={`text-lg font-bold ${
                        step.active ? "text-green-300" : "text-white"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-200">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderTracking;
