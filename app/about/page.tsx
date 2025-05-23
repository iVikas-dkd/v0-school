import Image from "next/image"

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">About Us</h1>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
        <div className="relative h-[400px] w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.29%20PM%20%281%29-1p5XQvomIRWf1la4y6uSOPi6vNChWR.jpeg"
            alt="School Building with Central Courtyard"
            fill
            className="rounded-lg shadow-md object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Welcome to Indian International Higher Secondary School
          </h2>
          <p className="mb-4">
            Indian International Higher Secondary School at Kadwasa Chouraha is committed to providing quality education
            to students from Nursery to 12th standard. We offer both English and Hindi medium education to cater to
            diverse needs.
          </p>
          <p>
            Our mission is to nurture young minds and help them develop into responsible citizens with strong values and
            academic excellence. We provide a safe and stimulating environment where students can explore their
            potential.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h2>
        <p>
          To be a leading educational institution that empowers students with knowledge, skills, and values necessary to
          excel in life and contribute positively to society.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide quality education that balances academic excellence with character development</li>
          <li>Create a supportive and inclusive learning environment for all students</li>
          <li>Employ modern teaching methodologies and technologies to enhance learning</li>
          <li>Foster creativity, critical thinking, and problem-solving skills</li>
          <li>Prepare students for higher education and future careers</li>
          <li>Instill values of respect, responsibility, and community service</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">Experienced Faculty</h3>
            <p>Our teachers are highly qualified and experienced in their respective fields.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">Modern Infrastructure</h3>
            <p>Newly constructed school building with all necessary facilities for effective learning.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">Smart Classrooms</h3>
            <p>Technology-enabled classrooms for interactive and engaging learning experiences.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">Safe Environment</h3>
            <p>We prioritize student safety with proper security measures and CCTV surveillance.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
