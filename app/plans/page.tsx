"use client";
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function GeneratePlan() {
  const [form, setForm] = useState({
    name: "",
    budget: "₹1000-₹2000",
    transport: "Bus",
    comfort: "Economy",
    accommodation: "Budget Hotel",
    availableTime: "3-5 days",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Show alert with travel plan details
    const planDetails = `
      Travel Plan Generated!
      Destination: ${form.name}
      Budget: ${form.budget}
      Available Time: ${form.availableTime}
      Transport: ${form.transport}
      Comfort Level: ${form.comfort}
      Accommodation: ${form.accommodation}

      Your personalized travel plan is being prepared. We'll contact you soon with detailed recommendations!
          `;
          
          alert(planDetails);
        };

        return (
          <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="bg-[#3C3C3C] rounded-[37px] w-[1325px] sm:h-[717px] h-[750px] shadow-2xl overflow-hidden p-4">
              <div className="flex h-full w-full gap-4">
                <div className="hidden sm:block sm:relative w-[380px] h-full rounded-[20px] overflow-hidden">
                  <Image
                    src="/plantripleft.jpeg"
                    alt="Booking Left Image"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black opacity-30" />
                </div>

                <div className="relative flex-1 h-full rounded-[37px] overflow-hidden">
                  <Image
                    src="/plantrip.jpg"
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
                        Plan Your Perfect Trip
                      </h2>
                      <p
                        className={`${montserrat.className} text-[15px] text-[#FFFFFF99] mt-1 mb-10`}
                      >
                        Get personalized travel plans based on your budget, time and preferences
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 mt-4 w-full max-w-lg mx-auto"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex flex-col flex-1 gap-1">
                          <p className="text-[#FFFFFF99] text-sm">Destination</p>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter Destination"
                            value={form.name}
                            onChange={handleChange}
                            className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                          />
                        </div>
                        <div className="flex flex-col flex-1 gap-1">
                          <p className="text-[#FFFFFF99] text-sm">Budget</p>
                          <select
                            name="budget"
                            value={form.budget}
                            onChange={handleChange}
                            className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                            required
                          >
                            <option value="₹2000-₹5000" className="text-black">
                              ₹2000 - ₹5000
                            </option>
                            <option value="₹5000-₹10000" className="text-black">
                              ₹5000 - ₹10000
                            </option>
                            <option value="₹10000-₹20000" className="text-black">
                              ₹10000 - ₹20000
                            </option>
                          </select>
                        </div>
                      </div>



                      <div className="flex flex-col gap-1">
                        <p className="text-[#FFFFFF99] text-sm">Available Time</p>
                        <select
                          name="availableTime"
                          value={form.availableTime}
                          onChange={handleChange}
                          className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                          required
                        >
                          <option value="1-2 days" className="text-black">
                            1-2 days
                          </option>
                          <option value="3-5 days" className="text-black">
                            3-5 days
                          </option>
                          <option value="1 week" className="text-black">
                            1 week
                          </option>
                          <option value="2 weeks" className="text-black">
                            2 weeks
                          </option>
                          <option value="1 month" className="text-black">
                            1 month
                          </option>
                        </select>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex flex-col flex-1 gap-1">
                          <p className="text-[#FFFFFF99] text-sm">Transport</p>
                          <select
                            name="transport"
                            value={form.transport}
                            onChange={handleChange}
                            className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                            required
                          >
                            <option value="Train" className="text-black">
                              Train
                            </option>
                            <option value="Flight" className="text-black">
                              Flight
                            </option>
                          </select>
                        </div>
                        <div className="flex flex-col flex-1 gap-1">
                          <p className="text-[#FFFFFF99] text-sm">Comfort</p>
                          <select
                            name="comfort"
                            value={form.comfort}
                            onChange={handleChange}
                            className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                            required
                          >
                            <option value="Economy" className="text-black">
                              Economy
                            </option>
                            <option value="Comfort" className="text-black">
                              Comfort
                            </option>
                            <option value="Premium" className="text-black">
                              Premium
                            </option>
                            <option value="Luxury" className="text-black">
                              Luxury
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <p className="text-[#FFFFFF99] text-sm">Accommodation</p>
                        <select
                          name="accommodation"
                          value={form.accommodation}
                          onChange={handleChange}
                          className="px-4 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                          required
                        >
                          <option value="Boutique Hotel" className="text-black">
                            Boutique Hotel
                          </option>
                          <option value="3-Star Hotel" className="text-black">
                            3-Star Hotel
                          </option>
                          <option value="4-Star Hotel" className="text-black">
                            4-Star Hotel
                          </option>
                          <option value="5-Star Hotel" className="text-black">
                            5-Star Hotel
                          </option>
                          <option value="Resort" className="text-black">
                            
                            Resort
                          </option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-300 transition cursor-pointer"
                      >
                        Generate Plans 
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
