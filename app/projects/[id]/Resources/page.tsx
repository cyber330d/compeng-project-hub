import { Download } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const resources = [
    { name: "Resource 1", link: "#" },
    { name: "Resource 2", link: "#" },
    { name: "Resource 3", link: "#" },
    { name: "Resource 4", link: "#" },
    { name: "Resource 5", link: "#" },
  ];

  return (
    <div className="p-6 pt-3 mt-8">
      <h1 className="text-xl font-medium mb-6  text-primary">Resources and Documents</h1>

      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="w-full bg-white p-4 flex justify-between items-center shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <span className="text-lg font-semibold">{resource.name}</span>
            <Link
              href={resource.link}
              className="text-primary hover:text-gray-800 flex items-center"
            >
              <Download className="w-6 h-6" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
