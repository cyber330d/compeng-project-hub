// app/blogs/page.tsx
"use client"

import { useState } from 'react';
import BlogSearch from './BlogSearch';
import BlogFilter from './BlogFilter';
import BlogListing from './BlogListing';

const sampleBlogs = [
    { id: 1, title: 'Tech Innovations', description: 'Exploring the latest in tech.', category: 'Tech', topic: 'AI', date: '2024-09' },
    { id: 2, title: 'Health Tips', description: 'Tips for a healthier lifestyle.', category: 'Health', topic: 'Fitness', date: '2024-09' },
    { id: 3, title: 'Travel Adventures', description: 'Amazing places to visit around the world.', category: 'Travel', topic: 'Exploration', date: '2024-09' },
    { id: 4, title: 'Cooking Secrets', description: 'Delicious recipes and cooking tips.', category: 'Food', topic: 'Recipes', date: '2024-09' },
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
        <div className="bg-white text-gray-800">
            <section className="bg-blue-50 py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
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
