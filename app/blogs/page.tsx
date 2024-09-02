// app/blogs/page.tsx
"use client";

import { useState } from "react";
import BlogSearch from "./BlogSearch";
import BlogFilter from "./BlogFilter";
import BlogListing from "./BlogListing";

interface Blog {
  id: string; 
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  topic: string;
  date: string; // Format "YYYY-MM"
}

const sampleBlogs: Blog[] = [
  {
    id: "1",
    title: "The Future of Quantum Computing",
    excerpt:
      "An overview of quantum computing advancements and their implications.",
    imageUrl: "/i2.png",
    category: "Tech",
    topic: "Quantum Computing",
    date: "2024-09",
  },
  {
    id: "2",
    title: "Machine Learning Algorithms",
    excerpt: "A detailed exploration of various machine learning algorithms.",
    imageUrl: "/img8.webp",
    category: "Tech",
    topic: "Machine Learning",
    date: "2024-09",
  },
  {
    id: "3",
    title: "Cybersecurity Trends in 2024",
    excerpt: "Insights into current trends and practices in cybersecurity.",
    imageUrl: "/i4.png",
    category: "Tech",
    topic: "Cybersecurity",
    date: "2024-09",
  },
  {
    id: "4",
    title: "The Rise of Edge Computing",
    excerpt: "Exploring the rise and impact of edge computing.",
    imageUrl: "/img6.png",
    category: "Tech",
    topic: "Edge Computing",
    date: "2024-09",
  },
];

const categories = ["Tech", "Health", "Travel", "Food"];
const topics = ["AI", "Fitness", "Exploration", "Recipes"];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const filteredBlogs = sampleBlogs.filter((blog) => {
    return (
      (searchTerm === "" ||
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "" || blog.category === selectedCategory) &&
      (selectedTopic === "" || blog.topic === selectedTopic) &&
      (selectedDate === "" || blog.date.startsWith(selectedDate))
    );
  });

  return (
    <div className="bg-white text-gray-800 min-h-screen py-20 w-full overflow-hidden">
      <section className="py-6">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between gap-4 items-center">
          <BlogSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <BlogFilter
            categories={categories}
            topics={topics}
            selectedCategory={selectedCategory}
            selectedTopic={selectedTopic}
            selectedDate={selectedDate}
            onCategoryChange={setSelectedCategory}
            onTopicChange={setSelectedTopic}
            onDateChange={setSelectedDate}
          />
        </div>
      </section>
      <BlogListing blogs={filteredBlogs} />
    </div>
  );
}
