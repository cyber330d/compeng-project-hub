import Image from "next/image";
import React from "react";
import Link from "next/link";

// Define the types for a project
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  label: string;
  regNo: string;
  year: string;
  imageUrl: string;
}

// Define the types for the props of the ProjectListing component
interface ProjectListingProps {
  projects: Project[];
}

const ProjectListing: React.FC<ProjectListingProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 z-10 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white max-w-96 rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105"
        >
          <Link
            href={`/projects/${project.id}`}
            className="text-primary hover:underline font-semibold"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={1280}
              height={720}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="mb-2">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-gray-800 mb-4">{project.description}</p>
              <Link
                href={`/projects/${project.id}`}
                className="text-primary hover:underline font-semibold"
              >
                View Project
              </Link>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectListing;
