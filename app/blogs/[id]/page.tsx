// "use client";
// import { useSearchParams } from "next/navigation";

// export default function Page() {
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");
 "use client";

 import { useState, useEffect } from "react";
 import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
 import Image from "next/image";

 // Define the BlogPost type
 interface BlogPost {
   id: string;
   title: string;
   author: string;
   publishedDate: string;
   content: string;
   imageUrl: string;
   tags: string[];
 }

 // Mock data for the blog post
 const mockBlogPost: BlogPost = {
   id: "1",
   title: "AI-powered Chatbot Development",
   author: "John Doe",
   publishedDate: "2024-01-15T00:00:00.000Z",
   content: `This blog post discusses the development of an AI-powered chatbot. 
    The project involved using advanced AI techniques, including natural language processing and machine learning, 
    to create a chatbot that can understand and respond to user inquiries in a human-like manner. 
    The challenges faced, solutions implemented, and the overall success of the project are discussed in detail.`,
   imageUrl: "/path/to/your/image.jpg", // Replace with your actual image path
   tags: ["AI", "Chatbot", "Technology"],
 };

 export default function BlogDetail() {
   const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);
  //  const router = useRouter();
  //  const { id } = router.query;
   const searchParams = useSearchParams();
     const id = searchParams.get("id");

   useEffect(() => {
    const mockBlogPost = {
      id: "2",
      title: "The Future of AI: Trends and Predictions for 2025",
      author: "Jane Doe",
      publishedDate: "2024-09-01T00:00:00.000Z",
      content: `Artificial Intelligence (AI) has become one of the most transformative technologies of the 21st century. As we move closer to 2025, the evolution of AI is poised to revolutionize various sectors, from healthcare to finance, and beyond.

In this article, we'll explore the key trends and predictions that are expected to shape the future of AI:

1. **AI in Healthcare**: By 2025, AI will be deeply integrated into the healthcare system, aiding in diagnostics, personalized medicine, and even surgery. AI-powered tools will help doctors provide more accurate diagnoses and treatment plans tailored to individual patients.

2. **AI Ethics and Regulation**: As AI continues to advance, ethical concerns will take center stage. We can expect stricter regulations and frameworks to ensure that AI is used responsibly, with respect to privacy, fairness, and accountability.

3. **AI and the Workforce**: The impact of AI on the workforce will be significant. While AI will automate routine tasks, it will also create new job opportunities that require human creativity and problem-solving skills. The workforce of 2025 will need to adapt to these changes through continuous learning and reskilling.

4. **AI in Everyday Life**: From smart homes to autonomous vehicles, AI will become an integral part of our daily lives. The technology will enable more efficient energy usage, safer transportation, and enhanced communication, making our lives more convenient and connected.

5. **AI-Driven Innovation**: AI will be a key driver of innovation across industries. Startups and established companies alike will leverage AI to create new products and services, pushing the boundaries of what's possible.

As we look to the future, it's clear that AI will play a crucial role in shaping the world of tomorrow. The key to harnessing its potential will be ensuring that the technology is developed and deployed in a way that benefits all of humanity.

Stay tuned as we continue to explore the fascinating world of AI and its impact on our lives.`,
      imageUrl: "/img10.jpg", // Example image URL
      tags: ["AI", "Technology", "Future", "Innovation", "Ethics"],
      
    };

    setBlogPost(mockBlogPost);
   }, [id]);

  
   if (error || !blogPost) {
     return (
       <div className="text-center py-20">{error || "Blog post not found"}</div>
     );
   }

   return (
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
       <div className="max-w-4xl mx-auto">
         <h1 className="text-4xl font-bold text-gray-800 mb-4">
           {blogPost.title}
         </h1>
         <div className="flex items-center justify-between mb-6 text-gray-600">
           <div>
             <span className="text-sm">By </span>
             <span className="text-primary font-semibold">
               {blogPost.author}
             </span>
           </div>
           <div className="text-sm">
             {new Date(blogPost.publishedDate).toDateString()}
           </div>
         </div>
         {blogPost.imageUrl && (
           <Image
             src={blogPost.imageUrl}
             alt={blogPost.title}
             width="1280"
             height="720"
             className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
           />
         )}
         <div className="prose prose-lg max-w-none text-gray-800">
           <p>{blogPost.content}</p>
         </div>
         <div className="mt-8">
           <h2 className="text-xl font-semibold text-primary mb-4">Tags</h2>
           <div className="flex flex-wrap gap-2">
             {blogPost.tags.map((tag, index) => (
               <Link
                 key={index}
                 href={`/blog/tag/${tag}`}
                 className="bg-primary text-white py-1 px-3 rounded-full text-sm hover:bg-primary-dark"
               >
                 #{tag}
               </Link>
             ))}
           </div>
         </div>
         <div className="mt-12">
           <Link href="/blog" className="text-primary hover:underline">
             ← Back to Blog
           </Link>
         </div>
       </div>
     </div>
   );
 }
