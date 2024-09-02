// app/blogs/page.tsx
"use client"

import { useState } from 'react';
import BlogSearch from './BlogSearch';
import BlogFilter from './BlogFilter';
import BlogListing from './BlogListing';

const sampleBlogs = [
  {
    id: 1,
    title: "The Future of Quantum Computing",
    description:
      "Exploring advancements in quantum computing and their impact on technology.",
    category: "Computer Engineering",
    topic: "Quantum Computing",
    date: "2024-09",
    imageUrl: "/i2.png", // Add image URL
  },
  {
    id: 2,
    title: "Machine Learning Algorithms",
    description:
      "An in-depth look at popular machine learning algorithms and their applications.",
    category: "Computer Engineering",
    topic: "Machine Learning",
    date: "2024-09",
    imageUrl: "/img8.webp", // Add image URL
  },
  {
    id: 3,
    title: "Cybersecurity Trends in 2024",
    description:
      "Discussing the latest trends and best practices in cybersecurity.",
    category: "Computer Engineering",
    topic: "Cybersecurity",
    date: "2024-09",
    imageUrl: "/i4.png", // Add image URL
  },
  {
    id: 4,
    title: "The Rise of Edge Computing",
    description:
      "Understanding the benefits and challenges of edge computing in modern applications.",
    category: "Computer Engineering",
    topic: "Edge Computing",
    date: "2024-09",
    imageUrl: "/img6.png", // Add image URL
  },
];


const categories = ['Tech', 'Health', 'Travel', 'Food'];
const topics = ['AI', 'Fitness', 'Exploration', 'Recipes'];

export default function Page() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const filteredBlogs = sampleBlogs.filter(blog => {
        return (
            (searchTerm === '' || blog.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedCategory === '' || blog.category === selectedCategory) &&
            (selectedTopic === '' || blog.topic === selectedTopic) &&
            (selectedDate === '' || blog.date.startsWith(selectedDate))
        );
    });

    return (
      <div className="bg-white text-gray-800 min-h-screen py-20 w-full overflow-hidden">
        <section className=" py-6">
          <div className="w-full px-4 flex flex-col md:flex-row justify-between gap-4 items-center">
            <BlogSearch
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
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
