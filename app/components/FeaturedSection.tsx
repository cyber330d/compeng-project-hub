import Image from "next/image";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "AI-powered Chatbot",
      description: "An AI chatbot that learns from user interactions.",
      category: "Artificial Intelligence",
      imageUrl: "/i2.png",
    },
    {
      id: 2,
      title: "Smart Traffic Management",
      description: "A system to manage city traffic using IoT devices.",
      category: "IoT",
      imageUrl: "/i3.png",
    },
    {
      id: 3,
      title: "Blockchain Voting System",
      description: "A secure voting platform based on blockchain technology.",
      category: "Blockchain",
      imageUrl: "/i4.png",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 lg-px-0 bg-[#f7f9fc] w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0e2b5a] mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 justify-items-center center items-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white max-w-96 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                // layout="fill"
                // objectFit="cover"
                width="1280"
                height="720"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-[#1c3b73] text-white text-xs font-semibold px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0e2b5a] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#0e2b5a] mb-4">{project.description}</p>
                <a
                  href={`/projects/${project.id}`}
                  className="text-[#214a8d] hover:underline font-semibold"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
