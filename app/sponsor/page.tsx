"use client";

import { useState } from "react";

// Define the type for formData
interface FormData {
  fullName: string;
  organizationName: string;
  email: string;
  phoneNumber: string;
  website: string;
  sponsorshipType: string;
  sponsorshipAmount: string;
  resourceContribution: string;
  mentorshipAvailability: boolean;
  preferredCategories: string[]; // Explicitly define this as a string array
  specificProjects: string;
  collaborationInterest: string;
  goals: string;
  preferredOutcomes: string;
  publicRecognition: boolean;
  logo: File | null;
  additionalComments: string;
  contactMethod: string;
  agreement: boolean;
  customCategory: string;
}

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    organizationName: "",
    email: "",
    phoneNumber: "",
    website: "",
    sponsorshipType: "",
    sponsorshipAmount: "",
    resourceContribution: "",
    mentorshipAvailability: false,
    preferredCategories: [], // Initialize as an empty string array
    specificProjects: "",
    collaborationInterest: "",
    goals: "",
    preferredOutcomes: "",
    publicRecognition: false,
    logo: null,
    additionalComments: "",
    contactMethod: "",
    agreement: false,
    customCategory: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      preferredCategories: checked
        ? [...prevData.preferredCategories, value]
        : prevData.preferredCategories.filter((category) => category !== value),
    }));
  };

  const addCustomCategory = () => {
    if (formData.customCategory) {
      setFormData((prevData) => ({
        ...prevData,
        preferredCategories: [
          ...prevData.preferredCategories,
          formData.customCategory,
        ],
        customCategory: "",
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      logo: e.target.files ? e.target.files[0] : null,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sponsorshipId = Date.now(); // Unique ID for the sponsorship
    const sponsorshipData = { ...formData, sponsorshipId };

    // Simulate form submission by logging the data
    console.log("Sponsorship Submitted:", sponsorshipData);

    // Reset form
    setFormData({
      fullName: "",
      organizationName: "",
      email: "",
      phoneNumber: "",
      website: "",
      sponsorshipType: "",
      sponsorshipAmount: "",
      resourceContribution: "",
      mentorshipAvailability: false,
      preferredCategories: [], // Reset to an empty array
      specificProjects: "",
      collaborationInterest: "",
      goals: "",
      preferredOutcomes: "",
      publicRecognition: false,
      logo: null,
      additionalComments: "",
      contactMethod: "",
      agreement: false,
      customCategory: "",
    });
    setCurrentPage(0); // Reset to first page
  };

  const pages = [
    {
      title: "Sponsor Information",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            placeholder="Organization Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            placeholder="Phone Number"
          />
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            placeholder="Website (optional)"
          />
        </div>
      ),
    },
    {
      title: "Sponsorship Details",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select
            name="sponsorshipType"
            value={formData.sponsorshipType}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            required
          >
            <option value="">Select Sponsorship Type</option>
            <option value="financial">Financial</option>
            <option value="resources">Resources</option>
            <option value="mentorship">Mentorship</option>
          </select>
          <input
            type="text"
            name="sponsorshipAmount"
            value={formData.sponsorshipAmount}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            placeholder="Sponsorship Amount (if financial)"
          />
          <input
            type="text"
            name="resourceContribution"
            value={formData.resourceContribution}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            placeholder="Resource Contribution (if any)"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              name="mentorshipAvailability"
              checked={formData.mentorshipAvailability}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="text-gray-700">Available for Mentorship</label>
          </div>
        </div>
      ),
    },
    {
      title: "Project Interest",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-2">Preferred Project Categories</label>
            <div className="grid grid-cols-2 gap-2">
              {["AI", "Blockchain", "IoT", "Software Development"].map(
                (category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      value={category}
                      onChange={handleCategoryChange}
                      checked={formData.preferredCategories.includes(category)}
                      className="mr-2"
                    />
                    <label>{category}</label>
                  </div>
                )
              )}
            </div>
            <div className="mt-4">
              <label className="mb-2">Add More Categories</label>
              <input
                type="text"
                name="customCategory"
                value={formData.customCategory}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
                placeholder="Custom Category"
              />
              <button
                onClick={addCustomCategory}
                className="mt-2 bg-[#0e2b5a] text-white px-4 py-2 rounded-full hover:bg-[#21a2f8] transition-colors"
              >
                Add Category
              </button>
            </div>
          </div>
          <textarea
            name="specificProjects"
            value={formData.specificProjects}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            placeholder="Specific Projects of Interest"
          ></textarea>
          <textarea
            name="collaborationInterest"
            value={formData.collaborationInterest}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            placeholder="Collaboration Interest"
          ></textarea>
        </div>
      ),
    },
    {
      title: "Sponsorship Goals",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <textarea
            name="goals"
            value={formData.goals}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            placeholder="Sponsorship Goals / Expectations"
          ></textarea>
          <textarea
            name="preferredOutcomes"
            value={formData.preferredOutcomes}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            placeholder="Preferred Outcomes"
          ></textarea>
        </div>
      ),
    },
    {
      title: "Recognition Preferences",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="publicRecognition"
              checked={formData.publicRecognition}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="text-gray-700">Agree to Public Recognition</label>
          </div>
          <input
            type="file"
            placeholder="Add Your Brand or Logo Image"
            name="logo"
            onChange={handleFileChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none"
            accept="image/*"
          />
        </div>
      ),
    },
    {
      title: "Additional Information",
      content: (
        <>
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none w-full"
            placeholder="Additional Comments"
          ></textarea>
          <div className="mt-4">
            <select
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 rounded-md focus:border-[#0e2b5a] focus:outline-none w-full"
            >
              <option value="">Preferred Contact Method</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>
        </>
      ),
    },
    {
      title: "Agreement",
      content: (
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleInputChange}
            className="mr-2"
            required
          />
          <label className="text-gray-700">
            I agree to the terms and conditions
          </label>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white text-[#0e2b5a] min-h-screen flex flex-col justify-between w-full">
      <div className="container mx-auto pt-24 md:pt-32 py-12 px-8 bg-[#0e2b5a] rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Why Sponsor Us?</h2>
        <p className="max-w-2xl mx-auto text-lg ">
          By sponsoring our platform, you are not only supporting innovative
          projects but also contributing to a collaborative ecosystem where
          ideas come to life. Your sponsorship helps empower creators, fosters
          collaboration, and drives technological advancements in various
          fields.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex-grow my-20 ">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            {pages[currentPage].title}
          </h2>
          <form onSubmit={handleSubmit}>
            {pages[currentPage].content}

            {/* Pagination Controls */}
            <div className="flex justify-between mt-8">
              {currentPage > 0 && (
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="bg-[#0e2b5a] text-white px-6 py-3 rounded-md hover:bg-[#21a2f8] transition"
                >
                  Previous
                </button>
              )}
              {currentPage < pages.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="bg-[#0e2b5a] text-white px-6 py-3 rounded-md hover:bg-[#21a2f8] transition ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-[#0e2b5a] text-white px-6 py-3 rounded-md hover:bg-[#21a2f8] transition ml-auto"
                >
                  Submit Sponsorship
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
