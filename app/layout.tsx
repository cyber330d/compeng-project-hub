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
    <html lang="en" className="w-full">
      <body className={`${inter.className} w-full`}>
          <Navbar />
        <main className="lg:px-16 ">
          {/* <div className="w-full fixed  bg-[#0e2b5a] h-[4.4rem] z-10"></div> */}
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
