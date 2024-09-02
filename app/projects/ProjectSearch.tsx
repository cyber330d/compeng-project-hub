import React from "react";
import { Search } from "lucide-react";


export default function ProjectSearch({ searchTerm, onSearchChange }) {
    return (
      <div className="w-full md:w-1/2 mb-4 md:mb-0 flex ">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <Search className="size-10 text-primary -ml-12 mt-1" />
      </div>
    );
}
