import Image from "next/image";
export default function ContactSection() {
  return (
    <div className="py-16 shadow-md px-4 md:px-8 lg-px-0 bg-white text-center flex  items-center flex-col sm:flex-row justify-center sm:justify-between gap-4 w-full">
      <div className="container mx-auto w-full sm:w-1/2">
        <h2 className="text-3xl font-bold text-primary mb-8 ">Get in Touch</h2>
        <p className="mb-8">
          Have questions or want to learn more? We&apos;d love to hear from you!
        </p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1c3b73]"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1c3b73]"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1c3b73]"
              rows={4}
            ></textarea>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-[#1c3b73] transition">
            Send Message
          </button>
        </form>
      </div>
      <div className="img w-full sm:w-1/2">
        <Image
          src="/slide1.png" // Replace with your image path
          alt="Hero Image"
          // layout="fill"
          // objectFit="cover"
          width="1280"
          height="720"
          className="w-full h-full rounded"
        />
      </div>
    </div>
  );
}
