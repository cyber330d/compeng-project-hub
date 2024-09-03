"use client";
import { useState, useEffect } from "react";
import { Filter, TableOfContents } from "lucide-react"; 


import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isOutlineOpen, setIsOutlineOpen] = useState<boolean>(false);

  const tabs = [
    { name: "Overview", href: `/projects/${pathname.split("/")[2]}/` },
    {
      name: "Discussions",
      href: `/projects/${pathname.split("/")[2]}/discussions`,
    },
    {
      name: "Teams",
      href: `/projects/${pathname.split("/")[2]}/teams`,
    },
    {
      name: "Sponsors",
      href: `/projects/${pathname.split("/")[2]}/sponsors`,
    },
    {
      name: "Resources",
      href: `/projects/${pathname.split("/")[2]}/Resources`,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:-mx-16 py-36 ">
      <aside
        className={`fixed lg:static z-50 top-0 left-0 sm:w-1/4 w-[60%] h-screen overflow-y-auto bg-white shadow-lg p-4 transition-transform duration-300 ${
          isOutlineOpen ? "block" : "hidden"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 text-lms-green">
          Project Outline
        </h2>
        <ul className="space-y-2"></ul>
      </aside>

      <div className="flex-1 flex-col w-full z-40  bg-white">
        {/* Tab navigation */}
        <div
          className={`mb-6 fixed z-50 py-3 top-16 shadow-md flex  gap-4 px-4 justify-between overflow-x-hidden ${
            isOutlineOpen ? "lg:ml-1/4  lg:w-3/4  w-full" : "w-full"
          }`}
        >
          <ul className="flex gap-6 items-start w-max overflow-x-auto bg-white">
            {tabs.map((tab) => (
              <li
                key={tab.name}
                className={`pb-2  text-sm lg:text-base ${
                  pathname === tab.href
                    ? "border-b-[3px] border-b-primary text-primary"
                    : "text-primary border-b-4 border-transparent hover:border-b-primary hover:text-primary p-4 py-2 text-center  flex items-center justify-center"
                }`}
              >
                <Link href={tab.href}>{tab.name}</Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsOutlineOpen(!isOutlineOpen)}
            className="bg-primary text-white  text-sm lg:text-base  px-1 py-0 h-7 lg:h-auto lg:p-2 rounded-md flex items-center"
          >
            <TableOfContents className="mr-1 size-4 text-sm" />
            Outline
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 lg:ml-1/4 ">{children}</div>
      </div>
    </div>
  );
}
