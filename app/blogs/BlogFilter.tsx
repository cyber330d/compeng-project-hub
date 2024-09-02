// app/components/BlogFilter.tsx

export default function BlogFilter({
    categories,
    topics,
    selectedCategory,
    selectedTopic,
    selectedDate,
    onCategoryChange,
    onTopicChange,
    onDateChange
}) {
    return (
        <div className="w-full md:w-1/2">
            <div className="flex flex-wrap gap-2">
                <select
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
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
                    className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
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
                    className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
        </div>
    );
}
