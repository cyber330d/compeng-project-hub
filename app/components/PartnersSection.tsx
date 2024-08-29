import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { name: "Quthstech", logoUrl: "/i1.png" },
    { name: "TechCorp", logoUrl: "/slide 2.png" },
    { name: "Cyber330d", logoUrl: "/i4.png" },
    { name: "InnoSoft", logoUrl: "/h1.jpeg" },
    { name: "SamsHack", logoUrl: "/slide 3.png" },
  ];

  return (
    <div className="py-16 px-4 sm:px-0 bg-[#0e2b5a] text-white w-full">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
        <div className="flex flex-wrap sm:justify-center items-center gap-4 sm:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg size-24 font-extrabold"
            >
              <Image
                src={partner.logoUrl}
                alt={partner.name}
                // layout="fill"
                // objectFit="cover"
                width="1280"
                height="720"
                className="h-2/3 mx-auto"
              />
              <p className="text-[#1c3b73] text-xs font-sans py-2">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
