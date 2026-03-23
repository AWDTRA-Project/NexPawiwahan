import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NexPawiwahan",
  description: "Invitation by NexCode.INA",
  icons: {
    icon: "/images/Outdoor.jpg", 
  },
  openGraph: {
    title: "NexPawiwahan",
    description: "Undangan Pernikahan Digital",
    url: "https://www.nexpawiwahan.my.id", 
    siteName: "NexPawiwahan",
    images: [
      {
        url: "/images/Outdoor.jpg",
        width: 1200,
        height: 630,
        alt: "NexPawiwahan Invitation",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
