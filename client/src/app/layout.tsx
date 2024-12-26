import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FocusManager from "@/components/FocusManager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Sadhwani",
  description: "Portfolio website of Nikhil Sadhwani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <FocusManager />
        {children}
      </body>
    </html>
  );
}
