export default function CallToActionSection() {
  return (
    <div className="py-16  px-4 md:px-8 lg-px-0 bg-[#0e2b5a] text-white text-center w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
        <p className="mb-8 px-1">
          Sign up now to start showcasing your projects or explore the
          innovative work of your peers.
        </p>
        <a
          href="/signup"
          className="bg-white text-[#0e2b5a]  px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  );
}
