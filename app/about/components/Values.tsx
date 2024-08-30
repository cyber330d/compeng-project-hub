export default function Values() {
  return (
    <section
      id="values"
      className=" bg-blue-50 container mx-auto py-12 px-6 min-h-[80vh] flex flex-col items items-center justify-center"
    >
      <h2 className="text-3xl font-semibold mb-4 text-primary w-full text-center pb-8 ">
        Values
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="max-w-80">
          <h3 className="text-xl font-bold mb-2 text-primary">Innovation</h3>
          <p className="text-gray-800  max-w-[18rem]">
            We believe in the power of innovation to transform the world. Our
            platform is designed to support those who are pushing the boundaries
            of what&apos;s possible.
          </p>
        </div>
        <div className="max-w-80">
          <h3 className="text-xl font-bold mb-2 text-primary">Collaboration</h3>
          <p className="text-gray-800  max-w-[18rem]">
            We foster collaboration between sponsors and creators, believing
            that the best outcomes are achieved when people work together
            towards a common goal.
          </p>
        </div>
        <div className="max-w-80">
          <h3 className="text-xl font-bold mb-2 text-primary">Integrity</h3>
          <p className="text-gray-800  max-w-[18rem]">
            We uphold the highest standards of integrity in all our dealings,
            ensuring that our platform is trustworthy and reliable for all
            users.
          </p>
        </div>
      </div>
    </section>
  );
}
