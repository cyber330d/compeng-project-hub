"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Define the type for the Project object
interface Project {
  id: number;
  title: string;
  creators: string;
  supervisor: string;
  abstract: string;
  introduction: string;
  methodology: string;
  result: string;
  innovation: string;
  commercialization: string;
  conclusion: string;
  futureWork: string;
  acknowledgment: string;
  references: string;
}

// Example data with the Project type
const projectData: Project = {
  id: 1,
  title: "AI-powered Chatbot",
  creators: "John Doe, Jane Smith",
  supervisor: "Prof. Alan Turing",
  abstract: "This project focuses on developing an AI chatbot...",
  introduction: "In today's world...",
  methodology: "We used a combination of AI techniques...",
  result: "The chatbot successfully handles user queries...",
  innovation: "Our project introduces...",
  commercialization: "The potential for commercialization...",
  conclusion: "In conclusion...",
  futureWork: "Future work could involve...",
  acknowledgment: "We would like to thank...",
  references: "1. AI for Dummies...",
};

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // State to hold the project data, with typing for Project or null
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    // Simulate data fetching
    setProject(projectData); // Replace with actual API call
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <Link href="/projects/new" className="flex items-center justify-end">
        <button className="bg-primary text-white py-2 px-4 rounded">
          Create New Project
        </button>
      </Link>
      <h1 className="text-4xl font-bold mb-4 text-primary">{project.title}</h1>
      <p className="mb-2 ">
        <strong className="text-primary">Creators:</strong> {project.creators}
      </p>
      <p className="mb-2">
        <strong className="text-primary">Supervised by:</strong> {project.supervisor}
      </p>
      <hr className="my-4" />
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2  text-primary">Abstract</h2>
        <p className="text-justify">{project.abstract}</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2  text-primary">Introduction</h2>
        <p className="text-justify">{project.introduction}</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2  text-primary">Methodology</h2>
        <p className="text-justify">{project.methodology}</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2  text-primary">Result</h2>
        <p className="text-justify">{project.result}</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2  text-primary">
          Innovation and Creativity
        </h2>
        <p className="text-justify">{project.innovation}</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2  text-primary">
          Potential for Commercialization
        </h2>
        <p className="text-justify">{project.commercialization}</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2  text-primary">Conclusion</h2>
        <p className="text-justify">{project.conclusion}</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2  text-primary">Future Work</h2>
        <p>{project.futureWork}</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2  text-primary">Acknowledgment</h2>
        <p className="text-justify">{project.acknowledgment}</p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2  text-primary">References</h2>
        <p className="text-justify">{project.references}</p>
      </section>
    </div>
  );
}
