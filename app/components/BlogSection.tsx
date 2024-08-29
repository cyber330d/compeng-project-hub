import Image from "next/image";

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      title: "5 Tips for Building a Successful Project",
      excerpt: "Learn how to create impactful projects that stand out...",
      imageUrl: "/i2.png",
    },
    {
      id: 2,
      title: "The Future of IoT in Smart Cities",
      excerpt: "Exploring the potential of IoT technology...",
      imageUrl: "/i2.png",
    },
  ];

  return (
    <div className="py-16  px-4 md:px-8 lg-px-0  bg-[#f7f9fc] w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0e2b5a] mb-12">
          Latest News & Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                // layout="fill"
                // objectFit="cover"
                width="1280"
                height="720"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0e2b5a] mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-[#214a8d] hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
