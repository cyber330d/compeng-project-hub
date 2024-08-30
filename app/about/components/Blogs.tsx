export default function BlogInsights() {
  return (
    <section
      id="blog-insights"
      className="min-h-[80vh] flex flex-col items items-center justify-center bg-blue-50  py-12"
    >
      <h2 className="text-3xl font-semibold mb-8 text-primary w-full text-center pb-8">
        Blogs
      </h2>
      <div className="container mx-auto px-6 flex items items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Latest News */}
          <div className="max-w-80">
            <h3 className="text-2xl font-bold mb-4">Latest News</h3>
            <p className="mb-4">
              Stay updated with the latest news, updates, and success stories
              from CompEng Project Hub.
            </p>
            <a href="/blogs" className="text-primary underline">
              Read our Blog
            </a>
          </div>

          {/* Industry Trends */}
          <div className="max-w-80">
            <h3 className="text-2xl font-bold mb-4">Industry Trends</h3>
            <p className="mb-4">
              Explore the latest trends and insights in technology, sponsorship,
              and innovation.
            </p>
            <a href="/blogs#industry-trends" className="text-primary underline">
              View Industry Trends
            </a>
          </div>

          {/* Expert Opinions */}
          <div className="max-w-80">
            <h3 className="text-2xl font-bold mb-4">Expert Opinions</h3>
            <p className="mb-4">
              Read guest posts and interviews with experts in relevant fields.
            </p>
            <a href="/blogs#expert-opinions" className="text-primary underline">
              Explore Expert Opinions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
