"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

interface FormData {
  title: string;
  creators: string;
  supervisor: string;
  abstract: string;
  introduction: string;
  methodology: string;
  result: string;
  innovation: string;
  commercialization: string;
  conclusion: string;
  futureWork: string;
  acknowledgment: string;
  references: string;
  projectDocument: File | null;
  sponsors: string;
  resources: File[];
  teams: string;
  contributors: string;
  methodologyImages: File[];
  resultImages: File[];
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    creators: "",
    supervisor: "",
    abstract: "",
    introduction: "",
    methodology: "",
    result: "",
    innovation: "",
    commercialization: "",
    conclusion: "",
    futureWork: "",
    acknowledgment: "",
    references: "",
    projectDocument: null,
    sponsors: "",
    resources: [],
    teams: "",
    contributors: "",
    methodologyImages: [],
    resultImages: [],
  });

  const [page, setPage] = useState(1);
  const params = useSearchParams();
  const router = useRouter();

  // Handle text input and textarea changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input changes
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      if (name === "methodologyImages") {
        setFormData((prev) => ({
          ...prev,
          methodologyImages: Array.from(files),
        }));
      } else if (name === "resultImages") {
        setFormData((prev) => ({
          ...prev,
          resultImages: Array.from(files),
        }));
      } else if (name === "projectDocument") {
        setFormData((prev) => ({
          ...prev,
          projectDocument: files[0],
        }));
      } else if (name === "resources") {
        setFormData((prev) => ({
          ...prev,
          resources: Array.from(files),
        }));
      }
    }
  };

  // Handle form submission
  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();

  //   const data = new FormData();
  //   data.append("title", formData.title);
  //   data.append("creators", formData.creators);
  //   data.append("supervisor", formData.supervisor);
  //   data.append("abstract", formData.abstract);
  //   data.append("introduction", formData.introduction);
  //   data.append("methodology", formData.methodology);
  //   data.append("result", formData.result);
  //   data.append("innovation", formData.innovation);
  //   data.append("commercialization", formData.commercialization);
  //   data.append("conclusion", formData.conclusion);
  //   data.append("futureWork", formData.futureWork);
  //   data.append("acknowledgment", formData.acknowledgment);
  //   data.append("references", formData.references);
  //   data.append("sponsors", formData.sponsors);
  //   data.append("teams", formData.teams);
  //   data.append("contributors", formData.contributors);

  //   if (formData.projectDocument) {
  //     data.append("projectDocument", formData.projectDocument);
  //   }

  //   formData.methodologyImages.forEach((file) => {
  //     data.append("methodologyImages", file);
  //   });

  //   formData.resultImages.forEach((file) => {
  //     data.append("resultImages", file);
  //   });

  //   formData.resources.forEach((file) => {
  //     data.append("resources", file);
  //   });

  //   try {
  //     const response = await fetch(`/api/projects/${id}`, {
  //       method: "POST",
  //       body: data,
  //     });

  //     if (response.ok) {
  //       alert("Project created successfully");
  //       router.push(`/projects/${id}`);
  //     } else {
  //       const result = await response.json();
  //       console.error("Error creating project:", result.message);
  //       alert("Failed to create project");
  //     }
  //   } catch (error) {
  //     console.error("Unexpected error:", error);
  //     alert("An unexpected error occurred");
  //   }
  // };
const handleSubmit = async (event: FormEvent) => {
  event.preventDefault();

  const formDataToSubmit = new FormData();

  // Append all text fields from formData
  for (const [key, value] of Object.entries(formData)) {
    if (Array.isArray(value)) {
      // Append files for array fields
      value.forEach((file) => {
        formDataToSubmit.append(key, file);
      });
    } else if (value) {
      formDataToSubmit.append(key, value);
    }
  }

  try {
    const response = await fetch("/api/projects", {
      method: "POST",
      body: formDataToSubmit,
    });

    const result = await response.json();

    if (response.ok && result.project?.id) {
      alert("Project submitted successfully!");
      router.push(`/projects/${result.project.id}`);
    } else {
      alert(`Submission failed: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("An unexpected error occurred.");
  }
};

  // Render the form's current page content
  const renderPageContent = () => {
    switch (page) {
      case 1:
        return (
          <>
            <div className="mb-4">
              <label className="block text-primary">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-primary">Creators</label>
              <input
                type="text"
                name="creators"
                value={formData.creators}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-primary">Supervised By</label>
              <input
                type="text"
                name="supervisor"
                value={formData.supervisor}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-primary">Abstract</label>
              <textarea
                name="abstract"
                value={formData.abstract}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                rows={4}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-primary">Introduction</label>
              <textarea
                name="introduction"
                value={formData.introduction}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                rows={4}
                required
              />
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div className="mb-4">
              <label className="block text-primary">Methodology</label>
              <textarea
                name="methodology"
                value={formData.methodology}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                rows={4}
                required
              />
              <label className="block text-primary my-4">
                Add Methodology Images if Any
              </label>
              <input
                type="file"
                name="methodologyImages"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none mb-4"
              />
              {formData.methodologyImages.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.methodologyImages.map((file, index) => (
                    <div key={index} className="relative">
                      <Image
                        width="1280"
                        height="720"
                        src={URL.createObjectURL(file)}
                        alt={`Methodology Image ${index + 1}`}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            methodologyImages: prev.methodologyImages.filter(
                              (_, i) => i !== index
                            ),
                          }))
                        }
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-4 ">
              <label className="block text-primary">Result</label>
              <textarea
                name="result"
                value={formData.result}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                rows={4}
                required
              />
              <label className="block text-primary my-4">
                Add Result Images if Any
              </label>
              <input
                type="file"
                name="resultImages"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none mb-4"
              />
              {formData.resultImages.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.resultImages.map((file, index) => (
                    <div key={index} className="relative">
                      <Image
                        width="1280"
                        height="720"
                        src={URL.createObjectURL(file)}
                        alt={`Result Image ${index + 1}`}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            resultImages: prev.resultImages.filter(
                              (_, i) => i !== index
                            ),
                          }))
                        }
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div className="mb-4">
              <label className="block text-primary">Innovation</label>
              <textarea
                name="innovation"
                value={formData.innovation}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                rows={4}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-primary">
                Commercialization Potential
              </label>
              <textarea
                name="commercialization"
                value={formData.commercialization}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                rows={4}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-primary">Conclusion</label>
              <textarea
                name="conclusion"
                value={formData.conclusion}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                rows={4}
                required
              />
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className="mb-4">
              <label className="block text-primary">Future Work</label>
              <textarea
                name="futureWork"
                value={formData.futureWork}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                rows={4}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-primary">Acknowledgment</label>
              <textarea
                name="acknowledgment"
                value={formData.acknowledgment}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                rows={4}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-primary">References</label>
              <textarea
                name="references"
                value={formData.references}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                rows={4}
                required
              />
            </div>
          </>
        );

      case 5:
        return (
          <>
            <div className="mb-4">
              <label className="block text-primary">
                Upload the Project Document
              </label>
              <input
                type="file"
                name="projectDocument"
                accept=".doc,.docx,.pdf"
                onChange={handleFileChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-primary">Sponsors</label>
              <input
                type="text"
                name="sponsors"
                value={formData.sponsors}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-primary">
                Add Resource Files if Any
              </label>
              <input
                type="file"
                name="resources"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                multiple
                onChange={handleFileChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none mb-4"
              />
            </div>
            {formData.resources.length > 0 && (
              <ul className="list-disc list-inside">
                {formData.resources.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            )}

            <div className="mb-4">
              <label className="block text-primary">Teams</label>
              <input
                type="text"
                name="teams"
                value={formData.teams}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-primary">Contributors</label>
              <input
                type="text"
                name="contributors"
                value={formData.contributors}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded focus:border-primary focus:outline-none"
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-24 ">
      <h1 className="text-2xl font-semibold mb-6">New Project Submission</h1>

      <form onSubmit={handleSubmit}>
        {renderPageContent()}

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => setPage((prev) => prev - 1)}
            className="px-4 py-2 bg-primary text-white rounded"
            disabled={page === 1}
          >
            Previous
          </button>
          {page < 5 ? (
            <button
              type="button"
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
