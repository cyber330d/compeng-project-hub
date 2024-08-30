import {
  Github,
  Facebook,
  Linkedin,
  Instagram,
  // Map,
  PhoneIcon,
  MailIcon,
  MapPin
} from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section
      id="contact-us"
      className="bg-blue-50 py-12 -mb-16 min-h-[70vh] flex items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center pb-8 ">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full mb-8">
          {/* Contact Information */}
          <div className="w-full flex flex-col gap-4">
            <Link
              href="mailto:info@compenghub.com"
              className="text-primary flex gap-4"
            >
              <MailIcon /> compengprojecthub@abu.edu.ng
            </Link>

            <Link href="tel:+1234567890" className="text-primary flex gap-4">
              <PhoneIcon /> (+234) 8129709392
            </Link>

            <Link
              href="https://engineering.abu.edu.ng/department/compeng/public/"
              className="text-primary"
            >
              <div className="flex gap-4">
                <MapPin />
                <p className="">Department of Computer Engineering</p>
              </div>
              <p className="pl-10">Ahmadu Bello Universiy, Zaria</p>
            </Link>

            {/* Social Media Links */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary ">Follow Us</h3>
              <div className="flex gap-8">
                <Link
                  href="https://www.github.com/cyber330d"
                  target="_blank"
                  className="text-primary hover:underline flex items-center"
                >
                  <Github />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/erasmus-e-obeth"
                  target="_blank"
                  className="text-primary hover:underline flex items-center"
                >
                  <Linkedin />
                </Link>
                <Link
                  href="https://instagram.com/"
                  target="_blank"
                  className="text-primary hover:underline flex items-center"
                >
                  <Instagram />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100064762728692"
                  target="_blank"
                  className="text-primary hover:underline flex items-center"
                >
                  <Facebook />
                </Link>
              </div>
            </div>
          </div>

          <div className="container mx-auto w-full ">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Get in Touch
            </h2>

            <p className="mb-4">
              Have questions or want to learn more? We&apos;d love to hear from
              you!
            </p>
            <form className="space-y-4">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  rows={4}
                ></textarea>
              </div>
              <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
