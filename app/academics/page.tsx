import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Academics() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Academics</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Curriculum</h2>
        <p className="mb-4">
          At Indian International Higher Secondary School, we follow a comprehensive curriculum that focuses on holistic
          development of students. Our academic program is designed to nurture critical thinking, creativity, and
          problem-solving skills.
        </p>
        <p>
          We offer both English and Hindi medium education to cater to diverse needs of our students. Our curriculum
          integrates traditional learning with modern teaching methodologies to provide the best educational experience.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Classes Offered</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-700">Nursery to 10th</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-2">
                <span className="font-bold">Medium:</span> Hindi
              </p>
              <p>
                Our primary and middle school curriculum focuses on building strong foundations in core subjects while
                encouraging exploration and creativity. We use activity-based learning approaches to make education
                engaging and effective.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-700">11th to 12th</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-2">
                <span className="font-bold">Streams:</span> Maths, Bio., Arts, Commerce
              </p>
              <p>
                Our high school curriculum prepares students for board examinations while developing critical thinking
                and analytical skills. We offer specialized streams to accommodate student interests and career goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Special Programs</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-700">Navodaya Preparation</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p>
                We offer special preparation for Navodaya Vidyalaya entrance examinations for students in 5th and 8th
                grades. Our dedicated faculty provides targeted coaching to help students succeed in these competitive
                exams.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-700">Computer Education</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p>
                Our comprehensive computer education program ensures that students develop essential digital skills.
                From basic computer literacy to advanced applications, we prepare students for the digital age.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Teaching Methodology</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Smart classroom technology for interactive learning</li>
          <li>Activity-based learning approaches</li>
          <li>Regular assessments and feedback</li>
          <li>Personalized attention to address individual learning needs</li>
          <li>Project-based learning to develop practical skills</li>
          <li>Integration of technology in education</li>
        </ul>
      </div>
    </div>
  )
}
