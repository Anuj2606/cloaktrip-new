import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from './providers';
import Navbar from "./components/Navbar";
import PromoBanner from "./sections/PromoBanner";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A cozy place to relax and unwind",
  description: "Mayur Lodge",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <LayoutWrapper>
            <PromoBanner />
            <Navbar />
            {children}
          </LayoutWrapper>
        </body>
      </html>
  );
}
