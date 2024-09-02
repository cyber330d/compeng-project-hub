import React from "react";

// Define the types for the props
interface ProjectFilterProps {
  selectedYear: string;
  selectedRegNo: string;
  selectedCategory: string;
  selectedLabel: string;
  onYearChange: (value: string) => void;
  onRegNoChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onLabelChange: (value: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  selectedYear,
  selectedRegNo,
  selectedCategory,
  selectedLabel,
  onYearChange,
  onRegNoChange,
  onCategoryChange,
  onLabelChange,
}) => {
  return (
    <div className="text-primary fixed top-0 left-0  z-50 sm:w-1/4 w-[60%] lg:w-full py-16  h-screen overflow-y-auto lg:overflow-hidden bg-white shadow-lg p-4 lg:static lg:block">
      <h3 className="text-lg font-bold mb-4 text-primary">Filter Projects</h3>

      <div className="mb-4 w-full">
        <label className="block mb-2">Year</label>
        <input
          type="text"
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Reg No</label>
        <input
          type="text"
          value={selectedRegNo}
          onChange={(e) => onRegNoChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">All Categories</option>
          <option value="Artificial Intelligence">
            Artificial Intelligence
          </option>
          <option value="IoT">IoT</option>
          <option value="Blockchain">Blockchain</option>
          <option value="Augmented Reality">Augmented Reality</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Label</label>
        <select
          value={selectedLabel}
          onChange={(e) => onLabelChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">All Labels</option>
          <option value="AI">AI</option>
          <option value="IoT">IoT</option>
          <option value="Blockchain">Blockchain</option>
          <option value="AR">AR</option>
        </select>
      </div>
    </div>
  );
};

export default ProjectFilter;
