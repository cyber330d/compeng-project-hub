import Image from "next/image";

export default function ProjectListing({ projects }) {
  return (
    <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white max-w-96 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            width="1280"
            height="720"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="mb-2">
              <span className="inline-block bg-blue-800 text-white text-xs font-semibold px-2 py-1 rounded">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              {project.title}
            </h3>
            <p className="text-blue-700 mb-4">{project.description}</p>
            <a
              href={`/projects/${project.id}`}
              className="text-blue-700 hover:underline font-semibold"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
