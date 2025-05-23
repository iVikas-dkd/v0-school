import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Facilities() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Our Facilities</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700">Smart Classrooms</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Smart Classroom"
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
            <p>
              Our smart classrooms are equipped with modern technology to enhance the learning experience. Interactive
              teaching methods help students grasp concepts more effectively.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700">Computer Lab</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Computer Lab"
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
            <p>
              Our well-equipped computer lab provides hands-on experience to students. We ensure that students develop
              essential digital skills required in today's world.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700">Library</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Library"
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
            <p>
              Our library is stocked with a wide range of books, reference materials, and educational resources. It
              provides a quiet and conducive environment for reading and research.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700">Transportation</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="School Bus"
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
            <p>
              We provide safe and reliable transportation with GPS tracking and CCTV cameras. Our buses cover various
              routes to ensure convenient access for all students.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700">Playground</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Playground"
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
            <p>
              Our newly constructed playground provides ample space for sports and physical activities. We encourage
              students to participate in various sports to ensure their physical development.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700">Science Laboratory</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Science Lab"
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
            <p>
              Our science laboratory is equipped with modern equipment for conducting experiments. It provides students
              with hands-on experience to understand scientific concepts better.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
