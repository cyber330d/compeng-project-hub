"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const partners = [
    { name: "Quthstech", logoUrl: "/i1.png" },
    { name: "TechCorp", logoUrl: "/slide2.png" },
    { name: "Cyber330d", logoUrl: "/i4.png" },
    { name: "InnoSoft", logoUrl: "/h1.jpeg" },
    { name: "SamsHack", logoUrl: "/slide3.png" },
  ];
  const contributors = [
    { name: "Quthstech", logoUrl: "/i1.png" },
    { name: "TechCorp", logoUrl: "/slide2.png" },
    { name: "Cyber330d", logoUrl: "/i4.png" },
    { name: "InnoSoft", logoUrl: "/h1.jpeg" },
    { name: "SamsHack", logoUrl: "/slide3.png" },
  ];
  const teams = [
    { name: "AI", logoUrl: "/i1.png" },
    { name: "Backend", logoUrl: "/slide2.png" },
    { name: "PM", logoUrl: "/i4.png" },
    { name: "UI UX", logoUrl: "/i4.png" },
    { name: "Frontend", logoUrl: "/h1.jpeg" },
    { name: "DevOps", logoUrl: "/slide3.png" },
  ];
  const [versions] = useState([
    {
      id: 1,
      no: "1.0.0",
      desc: "New feaures 1.0.0",
      date: "2024-08-25",
      by: "Team A",
    },
    {
      id: 2,
      no: "1.2.0",
      desc: "New feaures 1.2.0",
      date: "2024-08-25",
      by: "Team B",
    },
    {
      id: 3,
      no: "1.3.0",
      desc: "New feaures 1.3.0",
      date: "2024-08-25",
      by: "Team AI",
    },
   
  ]);
   const [changes] = useState([
     {
       id: 1,
       no: "1.0.0",
       desc: "New feautre",
       date: "2024-08-25",
       by: "Team A",
     },
     {
       id: 2,
       no: "1.2.0",
       desc: "New feature",
       date: "2024-08-25",
       by: "Team B",
     },
     {
       id: 3,
       no: "1.3.0",
       desc: "New feature",
       date: "2024-08-25",
       by: "Team AI",
     },
     {
       id: 4,
       no: "1.4.0",
       desc: "New feature ",
       date: "2024-08-25",
       by: "Team Frontend",
     },
     {
       id: 5,
       no: "1.5.0",
       desc: "New feature",
       date: "2024-08-25",
       by: "Team A",
     },
   ]);


  return (
    <div>
      <div className="flex flex-col p-4 gap-6">
        <div className="sponsor-btn flex max-[470px]:flex-col gap-4 items-center justify-between">
          <p className="text-primary font-bold text-2xl text-center flex items-center justify-center self-stretch">
            Project Sponsors
          </p>
          <Link
            href="/login"
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-white hover:text-primary text-center transition-colors"
          >
            Sponsor Project
          </Link>
        </div>
        <div className="flex px-4 md:justify-center items-center gap-3 sm:gap-4 overflow-x-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white flex items-center justify-center flex-col  size-24 font-extrabold "
            >
              <Image
                src={partner.logoUrl}
                alt={partner.name}
                width="1280"
                height="720"
                className="size-16 rounded-full shadow-lg"
              />
              <p className="text-primary text-center text-xs font-sans py-2 w-full">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-4 gap-6">
        <div className="sponsor-btn flex items-center justify-between max-[470px]:flex-col gap-4">
          <p className="text-primary font-bold text-2xl text-center flex items-center justify-center self-stretch">
            Project Contributors
          </p>
          <Link
            href="/contribute"
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-white hover:text-primary text-center transition-colors"
          >
            Contribute to Project
          </Link>
        </div>
        <div className="flex sm:justify-center items-center px-4 gap-3 justify-start sm:gap-4 overflow-x-auto">
          {contributors.map((contributor, index) => (
            <div
              key={index}
              className="bg-white flex items-center justify-center flex-col  size-24 font-extrabold "
            >
              <Image
                src={contributor.logoUrl}
                alt={contributor.name}
                width="1280"
                height="720"
                className="size-16 rounded-full shadow-lg"
              />
              <p className="text-primary text-center text-xs font-sans py-2 w-full">
                {contributor.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-4 gap-6">
        <div className="sponsor-btn flex items-center justify-between max-[470px]:flex-col gap-4">
          <p className="text-primary font-bold text-2xl text-center flex items-center justify-center self-stretch">
            Project Teams
          </p>
          <Link
            href="/contribute"
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-white hover:text-primary text-center transition-colors"
          >
            Join
          </Link>
        </div>
        <div className="flex sm:justify-center items-center px-4 gap-3 justify-start sm:gap-4 overflow-x-auto">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-white flex items-center justify-center flex-col  size-24 font-extrabold "
            >
              <Image
                src={team.logoUrl}
                alt={team.name}
                width="1280"
                height="720"
                className="size-16 rounded-full shadow-lg"
              />
              <p className="text-primary text-center text-xs font-sans py-2 w-full">
                {team.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 pt-3 mt-8">
        <h1 className="font-bold mb-6 text-primary text-2xl">
          Project Versions
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-blue-50 text-left text-sm font-semibold text-primary uppercase tracking-wider">
                <th className="p-4">No:</th>
                <th className="p-4">description</th>
                <th className="p-4">Date</th>
                <th className="p-4">By</th>
              </tr>
            </thead>
            <tbody>
              {versions.map((version) => (
                <tr key={version.id} className={`border-t border-gray-200 `}>
                  <td className="p-4">{version.no}</td>
                  <td className="p-4">{version.desc}</td>
                  <td className="p-4">{version.date}</td>
                  <td className="p-4">{version.by}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-6 pt-3 mt-8">
        <h1 className="font-bold mb-6 text-primary text-2xl">
          Project Changes
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-blue-50 text-left text-sm font-semibold text-primary uppercase tracking-wider">
                <th className="p-4">No:</th>
                <th className="p-4">Name</th>
                <th className="p-4">description</th>
                <th className="p-4">Status</th>
                <th className="p-4">Type</th>
                <th className="p-4">By</th>
                <th className="p-4">Where</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {changes.map((change) => (
                <tr key={change.id} className={`border-t border-gray-200 `}>

                  <td className="p-4">{change.no}</td>
                  <td className="p-4">{change.desc}</td>
                  <td className="p-4">{change.date}</td>
                  <td className="p-4">{change.by}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
