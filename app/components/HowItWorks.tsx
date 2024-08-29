export default function HowItWorks() {
  return (
    <div className="sm:py-16  px-8 lg-px-0 mb-8 bg-[#f7f9fc] w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0e2b5a] mb-12">
          How It Works
        </h2>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-12">
          <div className="text-center w-80">
            <h3 className="text-xl font-bold text-[#1c3b73] mb-4">
              Showcase Your Projects
            </h3>
            <p className="text-[#0e2b5a] ">
              Upload your projects to share with peers, mentors, and potential
              sponsors.
            </p>
          </div>
          <div className="text-center  w-80">
            <h3 className="text-xl font-bold text-[#1c3b73] mb-4">
              Discover Talent
            </h3>
            <p className="text-[#0e2b5a]">
              Browse through innovative projects and find the talent you’re
              looking for.
            </p>
          </div>
          <div className="text-center  w-80">
            <h3 className="text-xl font-bold text-[#1c3b73] mb-4">
              Contribute and Collaborate
            </h3>
            <p className="text-[#0e2b5a]">
              Join forces with other students on exciting projects and grow
              together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
