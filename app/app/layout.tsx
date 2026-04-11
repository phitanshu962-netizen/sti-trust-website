import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | STI Trust Institute",
    default: "STI Trust Institute | Aviation & Skill Education",
  },
  description: "A National Centre for Vocational and Technical Educational providing skill development courses, aviation education programs, and online degree programs.",
  keywords: ["Aviation Education", "Skill Development", "Degree Courses", "Vocational Training", "Technical Education", "NSDC", "Institute"],
  authors: [{ name: "STI Trust Institute" }],
  creator: "STI Trust Institute",
  publisher: "STI Trust Institute",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.stitrust.com", // Replace with your actual domain
    title: "STI Trust Institute | Aviation & Skill Education",
    description: "Empowering youth through vocational, technical, and aviation education programs.",
    siteName: "STI Trust Institute",
    images: [
      {
        url: "/og-image.jpg", // Create an image in the public folder and link it here later
        width: 1200,
        height: 630,
        alt: "STI Trust Institute Educational Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STI Trust Institute | Aviation & Skill Education",
    description: "Empowering youth through vocational, technical, and aviation education programs.",
    images: ["/og-image.jpg"], // Create an image in the public folder and link it here later
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-100 text-black">
        <div className="max-w-[1280px] mx-auto bg-white min-h-screen shadow-lg flex flex-col">
          <Header />
          <Navbar />
          
          <MainLayoutWrapper>
            {children}
          </MainLayoutWrapper>
        </div>
      </body>
    </html>
  );
}
