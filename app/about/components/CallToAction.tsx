export default function CallToAction() {
  return (
    <section id="call-to-action" className="bg-primary text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 text-primary">
          Join Us in Making a Difference
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
          Whether you&apos;re a sponsor looking to support groundbreaking
          projects or a creator with a vision, [Your Platform Name] is the
          perfect place to connect and collaborate. Let&apos;s make great things
          happen together.
        </p>
        <a
          href="/contact"
          className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-white hover:text-primary transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
