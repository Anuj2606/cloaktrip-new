import React from "react";
import AccordionItem from "./AccordionItem";
import localFont from 'next/font/local';

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

export default function FAQPage() {
  const faqDataLeft = [
    {
      question: "What amenities are included in the room?",
      answer: (
        <>
          <p className="mb-2">
            Every room is thoughtfully designed to blend luxury with ultimate
            comfort.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Enjoy plush bedding, climate control, and a smart LED TV with
              streaming options.
            </li>
            <li>
              A premium minibar, electronic safe, and high-speed Wi-Fi come
              standard.
            </li>
            <li>
              A dedicated work desk ensures business travelers stay productive.
            </li>
            <li>
              Bathrooms feature luxury toiletries, soft cotton towels, and rain
              showers or bathtubs.
            </li>
          </ul>
          <p className="mt-2">
            Select suites offer jacuzzis, private balconies, and ambient
            lighting systems. 24/7 room service is available for your
            convenience and indulgence. Daily housekeeping maintains cleanliness
            to the highest standards. An on-call concierge is ready to assist
            with any personalized requests. Whether for work or relaxation,
            every detail has been carefully curated for you.
          </p>
        </>
      ),
    },
    {
      question: "What kind of security systems are in place at the hotel?",
      answer:
        "Our hotel is equipped with 24/7 CCTV surveillance in all public areas, electronic key card access to rooms and elevators, and trained security personnel on duty around the clock to ensure guest safety and peace of mind.",
    },
  ];

  const faqDataRight = [
    {
      question: "Do you offer curated tours, spa sessions, or local events?",
      answer:
        "Yes, we offer a range of curated experiences including guided local tours, rejuvenating spa sessions, and we can also assist in booking tickets for local events and attractions. Our concierge team is happy to help you plan your itinerary.",
    },
    {
      question: "Is there a space for quiet work or business meetings?",
      answer:
        "Absolutely. We provide dedicated co-working spaces and private meeting rooms equipped with high-speed internet and presentation facilities, ideal for both individual work and small business gatherings.",
    },
    {
      question: "Can I celebrate special occasions during my stay?",
      answer:
        "We love helping guests celebrate. Our team can assist with arrangements for birthdays, anniversaries, or other special occasions, including private dining, decorations, and custom experiences. Please contact our concierge for personalized planning.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className={`${kugile.className} text-4xl md:text-6xl text-[#3C3C3C] mb-12 ml-4`}>
          FAQs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {faqDataLeft.map((item, index) => (
              <AccordionItem
                key={`left-${index}`}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          <div>
            {faqDataRight.map((item, index) => (
              <AccordionItem
                key={`right-${index}`}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
