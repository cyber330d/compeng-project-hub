"use client"
import AccordionItem from "@/app/components/Accordion";

export default function FAQs() {
  return (
    <section
      id="faqs"
      className="py-12 px-6 min-h-[70vh] flex items items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-primary">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-8">
          {/* General FAQs */}
          <AccordionItem
            title="General FAQs"
            content={
              <>
                <div className="space-y-4">
                  <div className="border-b border-gray-300 pb-4">
                    <h4 className="text-lg font-semibold">
                      What is CompEng Project Hub?
                    </h4>
                    <p className="text-gray-700">
                      CompEng Project Hub connects students, mentors, sponsors,
                      and enthusiasts to showcase, collaborate on, and support
                      innovative projects.
                    </p>
                  </div>
                  {/* Add more FAQs as needed */}
                </div>
              </>
            }
          />

          {/* For Sponsors */}
          <AccordionItem
            title="For Sponsors"
            content={
              <>
                <div className="space-y-4">
                  <div className="border-b border-gray-300 pb-4">
                    <h4 className="text-lg font-semibold">
                      How can I become a sponsor?
                    </h4>
                    <p className="text-gray-700">
                      You can become a sponsor by filling out our{" "}
                      <a
                        href="/sponsorship-form"
                        className="text-primary underline"
                      >
                        sponsorship form
                      </a>
                      .
                    </p>
                  </div>
                  {/* Add more FAQs as needed */}
                </div>
              </>
            }
          />

          {/* For Creators */}
          <AccordionItem
            title="For Creators"
            content={
              <>
                <div className="space-y-4">
                  <div className="border-b border-gray-300 pb-4">
                    <h4 className="text-lg font-semibold">
                      How do I get my project sponsored?
                    </h4>
                    <p className="text-gray-700">
                      Submit your project on our platform, and sponsors will
                      review and express interest through the provided channels.
                    </p>
                  </div>
                  {/* Add more FAQs as needed */}
                </div>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
