export default function LegalPrivacy() {
  return (
    <section
      id="legal-privacy"
      className="bg-gray-100 py-12 px-6 min-h-[80vh] flex items items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-primary">
          Legal & Privacy
        </h2>

        <div className="space-y-4">
          {/* Terms of Service */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Terms of Service</h3>
            <p className="text-lg">
              <a href="/terms-of-service" className="text-primary underline">
                Read our Terms of Service
              </a>
            </p>
          </div>

          {/* Privacy Policy */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Privacy Policy</h3>
            <p className="text-lg">
              <a href="/privacy-policy" className="text-primary underline">
                Read our Privacy Policy
              </a>
            </p>
          </div>

          {/* Sponsorship Agreement */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Sponsorship Agreement</h3>
            <p className="text-lg">
              <a
                href="/sponsorship-agreement"
                className="text-primary underline"
              >
                View Sponsorship Agreement
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
