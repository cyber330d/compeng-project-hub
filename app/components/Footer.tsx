import { Github, Facebook, Linkedin, Instagram, Map, PhoneIcon, MailIcon } from "lucide-react";
import Link from "next/link";
export default function FooterSection() {
  return (
    <footer className="bg-primary shadow-md w-full  px-4 md:px-8 lg:px-16  text-white py-12 ">
      <div className="flex flex-wrap justify-between  items-start flex-col sm:flex-row gap-4 md:gap-8">
        <div className="flex flex-col gap-3 w-80">
          <h4 className="text-lg font-bold mb-2">CompEng Project Hub</h4>
          <p className="flex gap-2">
            <MailIcon /> compengprojecthub@abu.edu.ng
          </p>
          <p className="flex gap-2">
            <PhoneIcon /> (+234) 8129709392
          </p>
          <Link href="https://engineering.abu.edu.ng/department/compeng/public/">
            <p className="flex gap-2">
              <Map /> Department of Computer Engineering
            </p>
            <p className="flex pl-8">Ahmadu Bello Universiy, Zaria</p>
          </Link>
          <div className=" flex  flex-col gap-3.5">
            <div className="flex gap-8">
              <Link
                href="https://www.github.com/cyber330d"
                target="_blank"
                className="text-blue-100 hover:underline flex items-center"
              >
                <Github />
              </Link>
              <Link
                href="https://www.linkedin.com/in/erasmus-e-obeth"
                target="_blank"
                className="text-blue-100 hover:underline flex items-center"
              >
                <Linkedin />
              </Link>
              <Link
                href="https://instagram.com/"
                target="_blank"
                className="text-blue-100 hover:underline flex items-center"
              >
                <Instagram />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100064762728692"
                target="_blank"
                className="text-blue-100 hover:underline flex items-center"
              >
                <Facebook />
              </Link>
            </div>
          </div>
        </div>
        {/* Column 2 - Projects */}
        <div className="80">
          <h4 className="text-lg font-bold mb-4">Project Hub</h4>
          <ul>
            <li className="mb-2">
              <Link href="/about#feaures" className="hover:underline">
                Features
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/sponsor" className="hover:underline">
                Sponsor a Project
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/project" className="hover:underline">
                Add a Project
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div className="80">
          <h4 className="text-lg font-bold mb-4">Resources</h4>
          <ul>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Documentation
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                API Reference
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Support
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Community Forum
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Company */}
        <div className="80">
          <h4 className="text-lg font-bold mb-4">Organisation</h4>
          <ul>
            <li className="mb-2">
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/about" className="hover:underline">
                Careers
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/about#team" className="hover:underline">
                Team
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/blogs" className="hover:underline">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5 - Legal */}
        <div className="80">
          <h4 className="text-lg font-bold mb-4">Legal</h4>
          <ul>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                License Agreement
              </Link>
            </li>
          </ul>
        </div>
        {/* Column 1 - GitHub Branding & Subscription */}
        <div className="w-80">
          <p className="mb-4">
            Join our newsletter to stay updated with our latest projects and
            events.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded max-w-72 bg-white text-black placeholder-gray-600 focus:outline-none focus:border-[#1c3b73]"
            />
            <button className="bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 rounded max-w-72">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center mt-8">
        <p className="text-sm mb-4">
          &copy; 2024 CompEng Project Hub. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="#"
            className="text-blue-300 hover:text-blue-500 transition"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link
            href="#"
            className="text-blue-300 hover:text-blue-500 transition"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            href="#"
            className="text-blue-300 hover:text-blue-500 transition"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}
