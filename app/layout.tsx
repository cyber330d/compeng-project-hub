import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CompEng Project Hub",
  description: "Created by Team 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen box-border">
      <body className={`${inter.className}  bg-white  text-black`}>
        <header className="px-16">
          <Navbar />
        </header>
        <main className="lg:px-16 ">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
