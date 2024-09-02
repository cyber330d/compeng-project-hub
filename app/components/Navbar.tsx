"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 bg-blend-overlay z-50 shadow-md px-4 sm:px-0 lg:px-16 bg-primary p-4 w-full">
      <div className="w-full flex items-center justify-between rounded">
        <div className="text-white text-base sm:text-xl md:text-2xl font-bold">
          <Link href="/">CompEng Project Hub</Link>
        </div>

        {/* Links Container */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col p-8 gap-6 absolute top-[3.5rem] bg-[#0e2b5ad0] w-72 rounded-lg -ml-4 
            md:p-0 md:items-center md:w-max md:flex-row md:bg-transparent md:static md:flex`}
        >
          <Link
            href="/projects"
            className="text-white hover:text-[#8fc7ed] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="text-white hover:text-[#8fc7ed] transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="/sponsor"
            className="text-white hover:text-[#8fc7ed] transition-colors"
          >
            Sponsor
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-[#8fc7ed] transition-colors"
          >
            About
          </Link>
          <Link
            href="/about#contact-us"
            className="text-white hover:text-[#8fc7ed] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="bg-white text-[#0e2b5a] px-4 py-2 rounded-full hover:bg-[#21a2f8] hover:text-white text-center transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
