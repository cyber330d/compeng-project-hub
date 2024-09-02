import React from "react";

// Define types for the props
interface BlogFilterProps {
  categories: string[];
  topics: string[];
  selectedCategory: string;
  selectedTopic: string;
  selectedDate: string;
  onCategoryChange: (category: string) => void;
  onTopicChange: (topic: string) => void;
  onDateChange: (date: string) => void;
}

export default function BlogFilter({
  categories,
  topics,
  selectedCategory,
  selectedTopic,
  selectedDate,
  onCategoryChange,
  onTopicChange,
  onDateChange,
}: BlogFilterProps) {
  return (
    <div className="w-full md:w-1/2">
      <div className="flex flex-wrap gap-2 justify-between md:justify-end">
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="p-3 border text-primary border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={selectedTopic}
          onChange={(e) => onTopicChange(e.target.value)}
          className="p-2 border border-gray-300 text-primary rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Topic</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        <input
          type="month"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          className="p-3 border text-primary border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  );
}
