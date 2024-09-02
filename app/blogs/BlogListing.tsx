// app/components/BlogListing.tsx

export default function BlogListing({ blogs }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white rounded-lg shadow-lg">
                        <div className="bg-primary text-white py-4 px-6 rounded-t-lg">
                            <h2 className="text-xl font-semibold">{blog.title}</h2>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">{blog.description}</p>
                            <a
                                href={`/blog/${blog.id}`}
                                className="text-primary font-semibold hover:underline"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
