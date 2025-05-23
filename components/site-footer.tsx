"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react"

export function SiteFooter() {
  // Function for smooth scrolling to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white relative">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEyODAgMy40QzEwNTAuNTkgMTggMTAxOS40IDg0Ljg5IDczNC40MiA4NC44OWMtMzIwIDAtMzIwLTg0LjMtNjQwLTg0LjNDNTkuNC41OSAyOC4yIDEuNiAwIDMuNFYxNDBoMTI4MHoiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMCAyNC4zMWM0My40Ni01LjY5IDk0LjU2LTkuMjUgMTU4LjQyLTkuMjUgMzIwIDAgMzIwIDg5LjI0IDY0MCA4OS4yNCAyNTYuMTMgMCAzMDcuMjgtNTcuMTYgNDgxLjU4LTgwVjE0MEgweiIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0xMjgwIDUxLjc2Yy0yMDEgMTIuNDktMjQyLjQzIDUzLjQtNTEzLjU4IDUzLjQtMzIwIDAtMzIwLTU3LTY0MC01Ny00OC44NS4wMS05MC4yMSAxLjM1LTEyNi40MiAzLjZWMTQwaDEyODB6Ii8+PC9nPjwvc3ZnPg==')]"></div>

      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        {/* Top section with logo and school info */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative w-20 h-20 mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%209.30.58%20PM-XC4wnIogFInECYZIj2wyMTJtji6Ycn.jpeg"
              alt="IIHSS Logo"
              fill
              className="rounded-full object-cover border-2 border-yellow-300"
            />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-2">
            Indian International Higher Secondary School
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto">
            Providing quality education from Nursery to 12th standard in Hindi and English medium since 2018.
          </p>

          {/* Social media icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-pink-700 hover:bg-pink-600 p-2 rounded-full transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-sky-600 hover:bg-sky-500 p-2 rounded-full transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-300 border-b border-blue-700 pb-2 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              <Link
                href="/about"
                scroll={true}
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
                onClick={scrollToTop}
              >
                <ChevronRight size={16} className="text-yellow-300 group-hover:translate-x-1 transition-transform" />
                <span>About Us</span>
              </Link>
              <Link
                href="/academics"
                scroll={true}
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
                onClick={scrollToTop}
              >
                <ChevronRight size={16} className="text-yellow-300 group-hover:translate-x-1 transition-transform" />
                <span>Academics</span>
              </Link>
              <Link
                href="/admissions"
                scroll={true}
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
                onClick={scrollToTop}
              >
                <ChevronRight size={16} className="text-yellow-300 group-hover:translate-x-1 transition-transform" />
                <span>Admissions</span>
              </Link>
              <Link
                href="/faculty"
                scroll={true}
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
                onClick={scrollToTop}
              >
                <ChevronRight size={16} className="text-yellow-300 group-hover:translate-x-1 transition-transform" />
                <span>Faculty</span>
              </Link>
              <Link
                href="/facilities"
                scroll={true}
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
                onClick={scrollToTop}
              >
                <ChevronRight size={16} className="text-yellow-300 group-hover:translate-x-1 transition-transform" />
                <span>Facilities</span>
              </Link>
              <Link
                href="/gallery"
                scroll={true}
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
                onClick={scrollToTop}
              >
                <ChevronRight size={16} className="text-yellow-300 group-hover:translate-x-1 transition-transform" />
                <span>Gallery</span>
              </Link>
              <Link
                href="/news"
                scroll={true}
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
                onClick={scrollToTop}
              >
                <ChevronRight size={16} className="text-yellow-300 group-hover:translate-x-1 transition-transform" />
                <span>News</span>
              </Link>
              <Link
                href="/contact"
                scroll={true}
                className="hover:text-yellow-300 transition-colors flex items-center gap-1 group"
                onClick={scrollToTop}
              >
                <ChevronRight size={16} className="text-yellow-300 group-hover:translate-x-1 transition-transform" />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-300 border-b border-blue-700 pb-2 mb-4">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-yellow-300 shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-medium">Indian International Higher Secondary School</p>
                  <p className="text-gray-300 text-sm">
                    Kadwasa Chouraha, Dharadi
                    <br />
                    Tehsil Singoli, District Neemuch
                    <br />
                    Madhya Pradesh
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-yellow-300 shrink-0" size={18} />
                <div>
                  <p className="font-medium">9425979097</p>
                  <p className="text-gray-300 text-sm">9826014296</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-yellow-300 shrink-0" size={18} />
                <p className="break-all">Indiainternationalschool29@gmail.com</p>
              </li>
              
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-lg font-bold text-yellow-300 border-b border-blue-700 pb-2 mb-4">
              Admissions Open 2025-26
            </h3>
            <div className="bg-gradient-to-br from-blue-800/60 to-indigo-900/60 rounded-lg p-5 shadow-lg border border-blue-700/50">
              <div className="space-y-3 mb-4">
                <div className="bg-gradient-to-r from-purple-700 to-purple-600 text-white py-2 px-4 rounded-md">
                  <p className="text-sm font-medium">
                    Class-Nursery To 10th <span className="text-yellow-300">(Hindi Medium)</span>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-700 to-purple-600 text-white py-2 px-4 rounded-md">
                  <p className="text-sm font-medium">
                    11th To 12th <span className="text-yellow-300">(Maths, Bio., Arts, Commerce)</span>
                  </p>
                </div>
              </div>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                <Link href="/admissions" scroll={true} onClick={scrollToTop}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Achievements Highlight */}
        <div className="mt-12 pt-6 border-t border-blue-800">
          <h3 className="text-lg font-bold mb-6 text-center text-yellow-300">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-800/60 to-indigo-900/60 p-4 rounded-lg border border-blue-700/50 text-center">
              <div className="text-2xl font-bold text-yellow-300">100%</div>
              <div className="text-sm text-gray-300">Board Results</div>
            </div>
            <div className="bg-gradient-to-br from-blue-800/60 to-indigo-900/60 p-4 rounded-lg border border-blue-700/50 text-center">
              <div className="text-2xl font-bold text-yellow-300">6+</div>
              <div className="text-sm text-gray-300">Years of Excellence</div>
            </div>
            <div className="bg-gradient-to-br from-blue-800/60 to-indigo-900/60 p-4 rounded-lg border border-blue-700/50 text-center">
              <div className="text-2xl font-bold text-yellow-300">30+</div>
              <div className="text-sm text-gray-300">Qualified Teachers</div>
            </div>
            <div className="bg-gradient-to-br from-blue-800/60 to-indigo-900/60 p-4 rounded-lg border border-blue-700/50 text-center">
              <div className="text-2xl font-bold text-yellow-300">600+</div>
              <div className="text-sm text-gray-300">Happy Students</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-blue-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Indian International Higher Secondary School. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            <span className="text-yellow-300 font-medium">Principal:</span>{" "}
            <span className="text-gray-300">Shri Lal Dhakar</span> |{" "}
            <span className="text-yellow-300 font-medium">Spokesperson:</span>{" "}
            <span className="text-gray-300">Dr. Kailash Dhakad</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
