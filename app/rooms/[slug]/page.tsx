import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { FaWifi, FaRegBell, FaTv, FaUsers } from "react-icons/fa";

const kugile = localFont({
  src: "../../fonts/Kugile_Demo.ttf",
  variable: "--font-kugile",
  display: "swap",
});

// Room data
const roomDetailsData = [
  {
    slug: "regular-room",
    title: "Regular Room",
    description:
      "A comfortable and affordable room, perfect for solo travelers or short stays. Equipped with basic amenities and a cozy atmosphere.",
    price: "₹899 / night",
    features: [
      { name: "Free Wi-Fi", icon: FaWifi },
      { name: "24/7 Room Service", icon: FaRegBell },
      { name: "Entertainment", icon: FaTv },
      { name: "Accommodates 1-2 people", icon: FaUsers },
    ],
    mainImage: "/regular_1.jpg",
    gallery: ["/regular_1.jpg", "/regular_2.jpg", "/deluxroom2.jpg"],
  },
  {
    slug: "deluxe-room",
    title: "Deluxe Room",
    description:
      "Indulge in the luxury of our deluxe room, designed with elegant interiors and plush comforts to elevate your stay.",
    price: "₹1799 / night",
    features: [
      { name: "High-speed Wi-Fi", icon: FaWifi },
      { name: "24/7 Room Service", icon: FaRegBell },
      { name: "Entertainment", icon: FaTv },
      { name: "Accommodates 2-3 people", icon: FaUsers },
    ],
    mainImage: "/deluxroom1.jpg",
    gallery: ["/deluxroom1.jpg", "/deluxroom2.jpg", "/deluxroom3.jpg"],
  },
  {
    slug: "twin-room",
    title: "Twin Bed with balcony",
    description:
      "Our Family Hut offers ample space and privacy, perfect for families or small groups. Features multiple beds and a private outdoor area.",
    price: "₹2299 / night",
    features: [
      { name: "Free Wi-Fi", icon: FaWifi },
      { name: "24/7 Room Service", icon: FaRegBell },
      { name: "Entertainment", icon: FaTv },
      { name: "Accommodates 4-6 people", icon: FaUsers },
    ],
    mainImage: "/twin_3.jpg",
    gallery: ["/twin_3.jpg", "/twin_2.jpg", "/twin_4.jpg"],
  },
];

export async function generateStaticParams() {
  return roomDetailsData.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = roomDetailsData.find((r) => r.slug === slug);
  return {
    title: room ? `Mayur Lodge - ${room.title}` : "Mayur Lodge - Room Details",
    description: room
      ? room.description
      : "Details about our comfortable rooms at Mayur Lodge.",
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = roomDetailsData.find((r) => r.slug === slug);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-700">
        Room not found.
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-[#F8F8F8] text-[#3C3C3C] py-16 px-4 sm:px-6 md:px-12 lg:px-24 pt-28 ${kugile.variable}`}
    >
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1
          className={`${kugile.className} text-4xl sm:text-5xl md:text-6xl text-center mb-8 text-gray-700`}
        >
          {room.title}
        </h1>

        <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src={room.mainImage}
            alt={room.title}
            fill
            className="object-cover"
          />
        </div>

        <p className="text-lg leading-relaxed mb-6">{room.description}</p>

        <div className="flex items-baseline mb-6">
          <span className="text-2xl font-bold text-red-600 mr-2">
            {room.price}
          </span>
        </div>

        <h3 className="text-2xl mb-4">Features:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {room.features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-[#E1E1E1] rounded-lg shadow-sm text-center
                         transition-transform duration-300 hover:scale-105 hover:shadow-md"
            >
              <feature.icon className="text-[#3c3c3c] text-3xl mb-2" />
              <span className="text-base">{feature.name}</span>
            </div>
          ))}
        </div>

        {room.gallery.length > 1 && (
          <>
            <h3 className="text-2xl mb-4">Gallery:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {room.gallery.map((imgSrc, index) => (
                <div
                  key={index}
                  className="relative w-full h-32 sm:h-40 rounded-md overflow-hidden shadow hover:scale-105 transition-all delay-150 duration-300 ease-in-out cursor-pointer"
                >
                  <Image
                    src={imgSrc}
                    alt={`${room.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <div className="text-center mt-10">
          <Link
            href="/"
            className="bg-[#3C3C3C] text-white py-3 px-6 hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/booking"
            className="bg-[#3C3C3C] text-white py-3 px-6 hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            BOOK NOW 
          </Link>
        </div>
      </div>
    </div>
  );
}