import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import FooterSection from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackers' Playground",
  description: "A 30-hour offline overnight hackathon hosted in collaboration with GDG on Campus MIET and TechNexus Community. Join us at MIET Campus on 8th - 9th March 2025 for an exciting opportunity to unleash your creativity, solve real-world challenges, and push your skills to the limit!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/technexus-logo.png" />
      </head>
      <body
       
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <div className="">
          <NavBar />
        </div>
        <CustomCursor />
        {children}
        <div>
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
