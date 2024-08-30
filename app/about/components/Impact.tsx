import Link from "next/link";

export default function Impact() {
  return (
    <section
      id="impact"
      className="px-6 py-12 min-h-[80vh] flex items items-center justify-center"
    >
      <div className="container mx-auto ">
        <h2 className="text-3xl font-semibold mb-8 text-primary w-full text-center pb-8">
          Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center justify-items-center items-start ">
          {/* Statistics & Metrics */}
          <div className="max-w-96">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Key Metrics
            </h3>
            <ul className="text-gray-800  max-w-[18rem] flex-col flex gap-1">
              <li>
                <strong>50+</strong> Projects Funded
              </li>
              <li>
                <strong>&#8358; 20M+</strong> in Sponsorships
              </li>
              <li>
                <strong>10+</strong> Sponsors Involved
              </li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-80">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Success Stories
            </h3>
            <p className="text-gray-800  max-w-[18rem]">
              From student projects that grew into successful startups to
              community initiatives that made a global impact, our platform has
              been a catalyst for countless success stories.
            </p>
            <Link
              href="#testimonials"
              className="text-primary underline mt-2 block"
            >
              Read More
            </Link>
          </div>

          {/* Global Reach */}
          <div className="max-w-80">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Global Reach
            </h3>
            <p className="text-gray-800  max-w-[18rem]">
              Our platform connects creators and sponsors across the globe, with
              projects spanning multiple continents and industries.
            </p>
            <Link
              href="/projects#global-projects"
              className="text-primary underline mt-2 block"
            >
              Explore International Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
