import Image from "next/image";
export default function Team() {
  const teamMembers = [
    { name: "Koji James Joshua", role: "Developer" },
    { name: "Samalia Musa", role: "Usability and Requirements" },
    { name: "Erasmus E Obeth", role: "Product Manager" },
    { name: "Yusuf Bugaje", role: "Developer" },
    { name: "Shakira Tosluv", role: "UI/UX" },
    { name: "Ayyub", role: "Dev Tester" },
    { name: "Assad", role: "UI/UX" },
    { name: "Usman", role: "Developer" },
    { name: "Abu Nabeel", role: "Content Creator" },
    { name: "Ibrahim", role: "Tester" },
  ];

  return (
    <section id="team" className="container mx-auto py-12 px-6 bg-blue-50">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">
        Meet the Team
      </h2>
      <div className="flex flex-wrap gap-4 overflow-x-auto p-4 justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-52 bg-white rounded-lg shadow-md px-3 pb-6 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-center flex flex-col items-center">
              <div className="text-lg font-semibold text-gray-800 size-24">
                <Image
                  src="/i2.png"
                  width="100"
                  height="100"
                  alt={member.name}
                  className="size-24 rounded-full "
                />
              </div>
              <div className="">{member.name}</div>
              <div className="text-sm  text-gray-600">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
