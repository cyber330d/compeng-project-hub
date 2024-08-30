export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="bg-blue-50 px-6 py-12 min-h-[80vh] flex items items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4 text-primary text-center pb-8">
          Mission & Vision
        </h2>
        <div className="flex justify-center gap-10">
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary">Our Mission</h3>
            <p className="text-gray-700 max-w-7xl">
              To empower students by providing them with the resources,
              oppurtunities, mentorship, and support they need to bring their
              projects to life. We aim to foster a collaborative ecosystem where
              great ideas can be innovated, flourish and make a tangible impact
              on the world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary">Our Vision</h3>
            <p className="text-gray-700 max-w-7xl">
              To become the leading platform for computer engineering project
              showcase and sponsorships that drive innovation and progress
              across multiple sectors. We envision a world where every great
              idea has the opportunity and exposure to succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
