import AccordionItem from "@/app/components/Accordion";

export default function FuturePlans() {
  return (
    <section
      id="future-plans"
      className="bg-blue-50 px-6 min-h-[70vh] flex items items-center justify-center py-12"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-primary">
          Future Plans
        </h2>
        <div className="space-y-8">
          <AccordionItem
            title="Roadmap"
            content={
              <>
                <p className="text-lg mb-4">
                  Discover our plans for upcoming features, expansion, and
                  future goals.
                </p>
                <a href="/roadmap" className="text-primary underline">
                  View Roadmap
                </a>
              </>
            }
          />
          <AccordionItem
            title="Innovation Hub"
            content={
              <>
                <p className="text-lg mb-4">
                  Learn about our initiatives to foster innovation, including
                  hackathons, competitions, and incubators.
                </p>
                <a href="/innovation-hub" className="text-primary underline">
                  Explore Innovation Hub
                </a>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
