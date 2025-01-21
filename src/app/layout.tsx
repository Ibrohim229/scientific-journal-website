import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Path from "@/components/Path";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "University Website",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" antialiased">
        <Navbar />
        <Path />
        {children}
        <Footer />
      </body>
    </html>
  );
}
