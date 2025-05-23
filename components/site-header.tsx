"use client"

import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  // Function for smooth scrolling to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Header with logo and title */}
      <header className="bg-gradient-to-r from-blue-100 to-white p-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%209.30.58%20PM-XC4wnIogFInECYZIj2wyMTJtji6Ycn.jpeg"
              alt="IIHSS Logo"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="school-name-modern text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              INDIAN INTERNATIONAL
              <br />
              HIGHER SECONDARY SCHOOL
            </h1>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-600 text-white">
        <ul className="flex flex-wrap justify-center max-w-6xl mx-auto">
          <li>
            <Link href="/" className="block px-4 py-3 hover:bg-blue-700" scroll={true} onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-4 py-3 hover:bg-blue-700" scroll={true} onClick={scrollToTop}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/academics" className="block px-4 py-3 hover:bg-blue-700" scroll={true} onClick={scrollToTop}>
              Academics
            </Link>
          </li>
          <li>
            <Link href="/admissions" className="block px-4 py-3 hover:bg-blue-700" scroll={true} onClick={scrollToTop}>
              Admissions
            </Link>
          </li>
          <li>
            <Link href="/faculty" className="block px-4 py-3 hover:bg-blue-700" scroll={true} onClick={scrollToTop}>
              Faculty
            </Link>
          </li>
          <li>
            <Link href="/facilities" className="block px-4 py-3 hover:bg-blue-700" scroll={true} onClick={scrollToTop}>
              Facilities
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="block px-4 py-3 hover:bg-blue-700" scroll={true} onClick={scrollToTop}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/news" className="block px-4 py-3 hover:bg-blue-700" scroll={true} onClick={scrollToTop}>
              News
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block px-4 py-3 hover:bg-blue-700" scroll={true} onClick={scrollToTop}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
