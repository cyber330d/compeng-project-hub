import Image from "next/image";

export default function PartnersCollaborators() {
  return (
    <section
      id="partners-collaborators"
      className="min-h-[80vh] flex items items-center justify-center bg-blue-50 py-12"
    >
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl font-semibold mb-8 text-primary w-full text-center pb-8">
          Partners & Collaborators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 justify-center justify-items-center items-start">
          {/* Strategic Partnerships */}
          <div className="max-w-80">
            <h3 className="text-2xl font-bold mb-4 text-primary">Partners</h3>
            <ul className="text-gray-800 max-w-[18rem] flex items-center gap-1 ">
              <li className="inline rounded-full size-12">
                <Image
                  src="/h1.jpeg"
                  alt="partner image"
                  width="150"
                  height="150"
                  className="size-12 rounded-full"
                />
              </li>
              <li className="inline rounded-full size-12">
                <Image
                  src="/h1.jpeg"
                  alt="partner image"
                  width="150"
                  height="150"
                  className="size-12 rounded-full"
                />
              </li>
              <li className="inline rounded-full size-12">
                <Image
                  src="/h1.jpeg"
                  alt="partner image"
                  width="150"
                  height="150"
                  className="size-12 rounded-full"
                />
              </li>
            </ul>
          </div>

          {/* Collaborations */}
          <div className="max-w-80">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Collaborations
            </h3>
            <p className="text-gray-800 max-w-[18rem] text-justify">
              We collaborate with educational institutions, government bodies,
              and non-profit organizations to enhance the reach and impact of
              our projects. Our collaborators include universities, research
              centers, and international NGOs.
            </p>
          </div>

          {/* Partnership Benefits */}
          <div className="max-w-80">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Partnership Benefits
            </h3>
            <p className="text-gray-800 max-w-[18rem]">
              Partnering with CompEng Project Hub offers mutual benefits,
              including increased visibility, access to a diverse talent pool,
              and opportunities for innovation. Our partners gain exposure to
              cutting-edge projects while supporting educational and social
              advancements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
