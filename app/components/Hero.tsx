import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative flex h-screen items-center justify-center flex-col bg-gradient-to-b from-[#0e2b5a] to-[#1c3b73] box-border">
      <div className=" w-full h-min sm:max-w-[60%] md:max-w-[55%] mx-auto px-6 py-8 z-10 rounded-lg flex flex-col items-center justify-center text-white bg-opacity-80 bg-black sm:mt-[9rem] absolute bottom-[3.5rem] md:bottom-40">
        {/* <div className=" w-full h-min sm:max-w-[60%] mx-auto px-6 py-8 z-10 rounded-lg flex flex-col items-center justify-center text-white bg-opacity-80 bg-black  sm:mt-[9rem] "> */}

        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Welcome to the Project Hub
        </h2>
        <p className=" md:text-xl text-justify mb-8 ">
          Discover innovative projects by Computer Engineering students.
          Explore, contribute, and showcase your talent.
        </p>
        <div className="flex justify-between sm:justify-center items-center gap-4 sm:space-x-4">
          <a
            href="/projects"
            className="bg-[#0e2b5a] hover:text-[#0e2b5a] text-sm sm:text-base px-3 sm:px-6 py-2 rounded-full hover:bg-white text-white transition-colors"
          >
            Explore Projects
          </a>
          <a
            href="/signup"
            className="bg-white hover:bg-[#0e2b5a] text-[#0e2b5a] sm:px-6 py-2 px-3 text-sm sm:text-base rounded-full hover:text-white transition-colors break-keep"
          >
            Sign Up
          </a>
        </div>
      </div>

      <div className="absolute  h-full w-full box-border">
        <Image
          src="/Slide 2.png" // Replace with your image path
          alt="Hero Image"
          width="1280"
          height="720"
          className="opacity-80 w-full h-full"
        />
      </div>
    </div>
  );
}
