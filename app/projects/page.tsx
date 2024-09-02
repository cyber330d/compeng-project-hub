"use client";
import { useState, useEffect } from "react";
import ProjectListing from "./ProjectListing";
import ProjectSearch from "./ProjectSearch";
import ProjectFilter from "./ProjectFilter";
import { Filter } from "lucide-react"; // Ensure to install lucide-react

export default function Page() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedRegNo, setSelectedRegNo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);



  // Fetching projects from the mock API
  useEffect(() => {
    async function fetchProjects() {
      // const response = await fetch("http://projects");
      const data = [
        {
          id: 1,
          title: "AI-powered Chatbot",
          description: "An AI chatbot that learns from user interactions.",
          category: "Artificial Intelligence",
          label: "AI",
          regNo: "AI2024001",
          year: "2024",
          imageUrl: "/i2.png",
        },
        {
          id: 2,
          title: "Smart Traffic Management",
          description: "A system to manage city traffic using IoT devices.",
          category: "IoT",
          label: "IoT",
          regNo: "IoT2024002",
          year: "2024",
          imageUrl: "/i4.png",
        },
      ];

      setProjects(data);
    }
    fetchProjects();
  }, []);

  // Filtering and searching logic
  const filteredProjects = projects.filter((project) => {
    return (
      (searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.regNo.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedYear === "" || project.year === selectedYear) &&
      (selectedRegNo === "" ||
        project.regNo.toLowerCase().includes(selectedRegNo.toLowerCase())) &&
      (selectedCategory === "" || project.category === selectedCategory) &&
      (selectedLabel === "" || project.label === selectedLabel)
    );
  });

  return (
    <div className="flex flex-col lg:flex-row  min-h-screen py-20 lg:-mx-16">
      <aside
        className={`fixed lg:static top-0 left-0 lg:w-1/4 w-[60%] h-screen overflow-y-auto bg-white shadow-lg p-4 transition-transform duration-300 ${
          isFilterOpen ? "block" : "hidden lg:block"
        }`}
      >
        <ProjectFilter
          selectedYear={selectedYear}
          selectedRegNo={selectedRegNo}
          selectedCategory={selectedCategory}
          selectedLabel={selectedLabel}
          onYearChange={setSelectedYear}
          onRegNoChange={setSelectedRegNo}
          onCategoryChange={setSelectedCategory}
          onLabelChange={setSelectedLabel}
        />
      </aside>

      <main className="flex-1 p-4 sm:p-8 lg:ml-1/4">
        <div className="mb-8 flex items-start justify-between gap-4">
          <ProjectSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden bg-primary text-white p-2 rounded-md flex items-center"
          >
            <Filter className="mr-2" />
            Filter
          </button>
        </div>
        <ProjectListing projects={filteredProjects} />
      </main>
    </div>
  );
}
