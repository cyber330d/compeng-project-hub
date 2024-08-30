"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div className="bg-blue-50 h-[30vh] text-center">
      <h2 className="text-3xl font-bold mb-4 text-dept-blue">
        Project Details: {id}
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-dept-blue-light">
        <h3 className="text-2xl font-bold text-dept-blue">
          Project Title {id}
        </h3>
        <p className="text-gray-600 mt-2">
          Detailed description of the project goes here...
        </p>
      </div>
    </div>
  );
}
