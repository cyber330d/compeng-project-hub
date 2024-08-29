import { User } from "lucide-react"; // Importing an avatar icon

export default function Testimonials() {
  const testimonials = [
    {
      name: "Joshua Koji James",
      role: "Final Year Student",
      testimonial:
        "CompEng Project Hub was a game-changer for me. It allowed me to showcase my final year project to industry professionals and secure valuable feedback.",
    },
    {
      name: "Bugaje Yusuf",
      role: "Industry Mentor",
      testimonial:
        "I was able to mentor students through the platform and was impressed by the innovative projects they were working on. It's a great way to discover emerging talent.",
    },
    {
      name: "Shakirat Aminu",
      role: "Tech Recruiter",
      testimonial:
        "The platform made it easy to find and connect with students who have the potential to make an impact in the tech industry. I've hired two interns through CompEng Project Hub!",
    },
    {
      name: "Samaila Musa",
      role: "Startup Founder",
      testimonial:
        "CompEng Project Hub helped me identify talented students who could contribute to my startup. It's an excellent resource for finding fresh ideas and passionate individuals.",
    },
  ];

  return (
    <div className="py-8 sm:py-16 bg-[#0e2b5a] text-white w-full overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 sm:mb-12">
          Testimonials
        </h2>
        <div className="flex gap-4 lg:justify-center items-center overflow-x-auto sm:gap-8 scrollbar-hide p-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[14.5rem] h-64 bg-[#1c3b73] p-4 rounded-lg shadow-lg flex-shrink-0"
            >
              <div className="flex items-center mb-4">
                <User className="h-8 w-8 text-white mr-4" />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-400 text-justify text-sm px-1">
                &quot;{testimonial.testimonial}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
