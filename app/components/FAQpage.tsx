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
      question: "How is this platform different from regular travel booking sites?",
      answer: (
        <>
          <p className="mb-2">
          Unlike traditional booking platforms that focus on selling fixed travel packages, our system designs personalized itineraries based on your budget, available time, and preferences. You can choose transport types, accommodation styles, and activity levels without being forced into pre-made deals. Every plan is generated using real-time data from trusted providers, ensuring accurate pricing and availability. Plus, your travel choices remain private unless you choose to use our Premium Assisted Travel service for full end-to-end support.
          </p>
        </>
      ),
    },
    {
      question: "How does the privacy-first approach work?",
      answer:
        "We believe your travel plans are yours alone. That means no third-party agents or marketers will have access to your preferences or itinerary unless you explicitly share them. All your trip data is stored securely in your account dashboard and is only visible to you. Even when you use the Premium Assisted Travel service, only your dedicated travel assistant can view your trip details, and this access is removed once your journey ends. Your data is never sold or used for spam marketing.",
    },
  ];

  const faqDataRight = [
    {
      question: "What kind of customer support do you offer during a trip?",
      answer:
        "Basic plan users have access to online help articles, FAQs, and automated trip reminders through the Trip Dashboard. Premium users receive 24/7 real-time support through WhatsApp, app chat, or phone. Your personal travel assistant can help with emergencies such as canceled transport, hotel issues, or rescheduling activities. We also provide local guidance, dining recommendations, and safety alerts when needed. Our aim is to ensure you feel supported throughout your journey, whether you’re traveling domestically or internationally.",
    },
    {
      question: "How do the 2–3 suggested travel plans work?",
      answer:
        "When you fill in our smart filter form, our system processes your preferences and budget to create three unique itineraries: Budget Saver Plan (lowest cost without losing comfort), Balanced Plan (affordable mid-range comfort), and Premium Plan (luxury options with fast travel and top-rated stays). Each plan includes cost breakdowns, travel details, hotel information, activity suggestions, and local tips. You can book any plan instantly, mix and match elements from different plans, or fine-tune them before confirming your final itinerary.",
    },
    {
      question: "Do I need to create an account to plan a trip?",
      answer:
        "While you can browse destinations and sample itineraries without an account, creating a free profile unlocks the platform’s full power. Your preferences, past trips, and saved itineraries are stored securely, so you can plan faster in the future. An account also lets you access your Trip Dashboard, download tickets, track expenses, and make last-minute changes. For Premium users, an account is essential to connect with your dedicated travel assistant and receive real-time support during your journey.",
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
