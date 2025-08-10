"use client";
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "Regular",
    price: "₹899/per night",
  });

  const getPriceFromRoomType = (roomType: string) => {
    switch (roomType) {
      case "Deluxe":
        return "₹1799/per night";
      case "Twin bed with balcony":
        return "₹2500/per night";
      default:
        return "₹899/per night";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "roomType") {
      const newPrice = getPriceFromRoomType(value);
      setForm((prev) => ({ ...prev, roomType: value, price: newPrice }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert(" Booking successful & confirmation email sent!");
      } else {
        alert(" Booking failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error(" Network error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-[#3C3C3C] rounded-[37px] w-[1325px] sm:h-[717px] h-[750px] shadow-2xl overflow-hidden p-4">
        <div className="flex h-full w-full gap-4">
          <div className="hidden sm:block sm:relative w-[380px] h-full rounded-[20px] overflow-hidden">
            <Image
              src="/contactUs.jpg"
              alt="Booking Left Image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-30" />
          </div>

          <div className="relative flex-1 h-full rounded-[37px] overflow-hidden">
            <Image
              src="/contactUsright.jpg"
              alt="Booking Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#3C3C3C]/90" />

            <div className="absolute inset-0 flex flex-col justify-center text-white p-6">
              <div className="text-center">
                <h2
                  className={`${montserrat.className} text-[30px] font-semibold`}
                >
                  Book a Room
                </h2>
                <p
                  className={`${montserrat.className} text-[15px] text-[#FFFFFF99] mt-1 mb-10`}
                >
                  Fill in your details to confirm your booking
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 mt-4 w-full max-w-lg mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col flex-1 gap-1">
                    <p className="text-[#FFFFFF99] text-sm">Name</p>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-1">
                    <p className="text-[#FFFFFF99] text-sm">Email</p>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col flex-1 gap-1">
                    <p className="text-[#FFFFFF99] text-sm">Check-In</p>
                    <input
                      type="date"
                      name="checkIn"
                      value={form.checkIn}
                      onChange={handleChange}
                      className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-1">
                    <p className="text-[#FFFFFF99] text-sm">Check-Out</p>
                    <input
                      type="date"
                      name="checkOut"
                      value={form.checkOut}
                      onChange={handleChange}
                      className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-[#FFFFFF99] text-sm">Room Type</p>
                  <select
                    name="roomType"
                    value={form.roomType}
                    onChange={handleChange}
                    className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                  >
                    <option value="Regular" className="text-black">
                      Regular
                    </option>
                    <option value="Deluxe" className="text-black">
                      Deluxe
                    </option>
                    <option value="Twin" className="text-black">
                      Twin bed with balcony
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-[#FFFFFF99] text-sm">Price</p>
                  <input
                    type="text"
                    name="price"
                    value={form.price}
                    disabled
                    className="px-4 py-2 bg-gray-700 text-white border border-gray-500 rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-300 transition cursor-pointer"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
