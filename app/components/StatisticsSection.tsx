export default function StatisticsSection() {
  const stats = [
    { label: "Projects Uploaded", value: "500+" },
    { label: "Students Registered", value: "300+" },
    { label: "Sponsors Engaged", value: "100+" },
  ];

  return (
    <div className="py-4 sm:py-16 bg-[#0e2b5a] text-white text-center w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
        <div className="flex px-4 justify-center items-center  gap-4 sm:space-x-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1c3b73] sm:p-4 rounded-lg shadow-lg max-sm:h-20 max-sm:w-1/3"
            >
              <p className="text-lg md:text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-xs sm:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
