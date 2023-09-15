"use client";
import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Bottom from "./components/bottom";


const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Navbar />
        {children}
  <Bottom/>
      </body>
    </html>
  );
}
