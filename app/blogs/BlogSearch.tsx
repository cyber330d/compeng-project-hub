import React from "react";
import { Search } from "lucide-react";

// Define the type for the props
interface BlogSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function BlogSearch({
  searchTerm,
  onSearchChange,
}: BlogSearchProps) {
  return (
    <div className="w-full md:w-1/2 mb-4 md:mb-0 flex">
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <Search className="size-10 text-primary -ml-12 mt-1" />
    </div>
  );
}
