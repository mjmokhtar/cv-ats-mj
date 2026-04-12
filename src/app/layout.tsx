import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Muhammad Jumiat Mokhtar | Embedded Systems & IoT Engineer",
  description: "Embedded Systems & IoT Engineer with 3+ years experience in end-to-end system development, IoT solutions, and technical project management for industrial applications.",
  metadataBase: new URL("https://cv-ats.mjmokhtar.cloud"),
  openGraph: {
    title: "Muhammad Jumiat Mokhtar | Embedded Systems & IoT Engineer",
    description: "Embedded Systems & IoT Engineer with 3+ years experience in end-to-end system development, IoT solutions, and technical project management for industrial applications.",
    url: "https://cv-ats.mjmokhtar.cloud",
    images: [
      {
        url: "https://toaster.mjmokhtar.cloud/image/new2.jpg",
        width: 800,
        height: 800,
      },
    ],
    type: "profile",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}