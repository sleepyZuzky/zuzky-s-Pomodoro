import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextFont } from 'next/dist/compiled/@next/font';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
