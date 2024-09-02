// app/components/BlogListing.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";


interface Blog {
  id: string; // Use string for consistency, or number if you prefer
  title: string;
  excerpt: string;
  imageUrl: string;
}

interface BlogListingProps {
  blogs: Blog[];
}

export default function BlogListing({ blogs }: BlogListingProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Link
              href={`/blog/${blog.id}`}
              className="text-[#214a8d] hover:underline font-semibold"
            >
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={1280}
                height={720}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#0e2b5a] mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <Link
                href={`/blog/${blog.id}`}
                className="text-[#214a8d] hover:underline font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
