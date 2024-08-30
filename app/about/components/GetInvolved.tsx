export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className=" min-h-[70vh] flex items-center justify-center px-6 py-12"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center pb-8 text-primary">
          Get Involved
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center justify-items-center">
          {/* How to Sponsor */}
          <div className="bg-blue-50 text-gray-800 p-6 rounded-lg shadow-lg max-w-80 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              How to Sponsor
            </h3>
            <p className="mb-4">
              Support the next generation of innovators by becoming a sponsor.
              Your contributions help fuel groundbreaking projects and provide
              valuable resources to our community.
            </p>
            <a
              href="/sponsorship-form"
              className="inline-block px-4 py-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-primary-dark transition"
            >
              Sponsorship Form
            </a>
          </div>

          {/* Volunteer Opportunities */}
          <div className="bg-blue-50 text-gray-800 p-6 rounded-lg shadow-lg max-w-80 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Volunteer Opportunities
            </h3>
            <p className="mb-4">
              We are always looking for passionate individuals to contribute
              their time and skills. Whether you&apos;re interested in
              mentoring, organizing events, or supporting projects, there are
              many ways you can get involved.
            </p>
            <a
              href="/volunteer-signup"
              className="inline-block px-4 py-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-primary-dark transition"
            >
              Volunteer Signup
            </a>
          </div>

          {/* Join Our Team */}
          <div className="bg-blue-50 text-gray-800 p-6 rounded-lg shadow-lg max-w-80 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Join Our Team
            </h3>
            <p className="mb-4">
              We’re always on the lookout for talented individuals to join our
              team. Check out our current job openings and internships to find
              out how you can contribute to our mission.
            </p>
            <a
              href="/careers"
              className="inline-block px-4 py-2 bg-primary text-white font-semibold rounded-md shadow hover:bg-primary-dark transition"
            >
              Careers & Internships
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
