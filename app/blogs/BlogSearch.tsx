// app/components/BlogSearch.tsx

export default function BlogSearch({ searchTerm, onSearchChange }) {
    return (
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
        </div>
    );
}
