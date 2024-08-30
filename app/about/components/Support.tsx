"use client";
import AccordionItem from "@/app/components/Accordion";

export default function SupportResources() {
  return (
    <section
      id="support-resources"
      className="bg-white px-6 py-12 min-h-[70vh] flex items items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-primary">
          Support & Resources
        </h2>

        <div className="space-y-8">
          {/* Help Center */}
          <AccordionItem
            title="Help Center"
            content={
              <>
                <p className="text-lg mb-4">
                  Find guides, tutorials, and troubleshooting tips in our Help
                  Center.
                </p>
                <a href="/help-center" className="text-primary underline">
                  Visit Help Center
                </a>
              </>
            }
          />

          {/* Resource Library */}
          <AccordionItem
            title="Resource Library"
            content={
              <>
                <p className="text-lg mb-4">
                  Access a collection of resources, including templates, guides,
                  and whitepapers for sponsors and creators.
                </p>
                <a href="/resource-library" className="text-primary underline">
                  Explore Resource Library
                </a>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
