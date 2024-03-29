import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextFont } from 'next/dist/compiled/@next/font';

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Pomodoro app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}