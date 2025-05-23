"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Faculty data structure
const facultyData = {
  administration: [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Principal",
      qualifications: "Ph.D. in Education, M.Ed., B.Ed.",
      experience: "25+ years",
      subjects: ["Educational Leadership", "Administration"],
      bio: "Dr. Rajesh Kumar has been leading Indian International School since its inception. With over 25 years of experience in education, he has transformed the school into a center of excellence.",
    },
    {
      id: 2,
      name: "Mrs. Sunita Sharma",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Vice Principal",
      qualifications: "M.Ed., B.Ed., M.A. in English",
      experience: "18 years",
      subjects: ["English Literature", "Educational Management"],
      bio: "Mrs. Sunita Sharma oversees the academic programs and curriculum development. Her leadership has been instrumental in maintaining high academic standards.",
    },
    {
      id: 3,
      name: "Mr. Prakash Verma",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Administrative Officer",
      qualifications: "MBA, B.Com",
      experience: "15 years",
      subjects: ["School Administration"],
      bio: "Mr. Prakash Verma manages the administrative functions of the school, ensuring smooth operations and efficient resource management.",
    },
  ],
  primary: [
    {
      id: 1,
      name: "Mrs. Priya Patel",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Primary Section Head",
      qualifications: "M.Ed., B.Ed., B.A.",
      experience: "12 years",
      subjects: ["All Primary Subjects", "Child Psychology"],
      bio: "Mrs. Priya Patel leads our primary section with a focus on holistic development of young learners. She specializes in early childhood education.",
    },
    {
      id: 2,
      name: "Mr. Rahul Singh",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Primary Teacher",
      qualifications: "B.Ed., B.A.",
      experience: "8 years",
      subjects: ["Mathematics", "Environmental Studies"],
      bio: "Mr. Rahul Singh makes mathematics fun and engaging for young students. His innovative teaching methods help students develop a strong foundation in math.",
    },
    {
      id: 3,
      name: "Mrs. Anjali Gupta",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Primary Teacher",
      qualifications: "B.Ed., B.A. in English",
      experience: "10 years",
      subjects: ["English", "Hindi", "Art"],
      bio: "Mrs. Anjali Gupta specializes in language development for young learners. She incorporates creative activities to enhance language skills.",
    },
    {
      id: 4,
      name: "Ms. Neha Joshi",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Primary Teacher",
      qualifications: "Montessori Training, B.Ed.",
      experience: "6 years",
      subjects: ["General Studies", "Music"],
      bio: "Ms. Neha Joshi brings Montessori principles into her classroom, focusing on experiential learning and individual development.",
    },
  ],
  middle: [
    {
      id: 1,
      name: "Mr. Suresh Mishra",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Middle School Coordinator",
      qualifications: "M.Sc. in Mathematics, B.Ed.",
      experience: "14 years",
      subjects: ["Mathematics", "Physics"],
      bio: "Mr. Suresh Mishra coordinates the middle school section and teaches mathematics with a focus on problem-solving skills and analytical thinking.",
    },
    {
      id: 2,
      name: "Mrs. Kavita Sharma",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Middle School Teacher",
      qualifications: "M.A. in Hindi, B.Ed.",
      experience: "11 years",
      subjects: ["Hindi", "Sanskrit", "Social Studies"],
      bio: "Mrs. Kavita Sharma is passionate about Indian languages and culture. She organizes various cultural activities to promote traditional values.",
    },
    {
      id: 3,
      name: "Mr. Deepak Verma",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Middle School Teacher",
      qualifications: "M.Sc. in Biology, B.Ed.",
      experience: "9 years",
      subjects: ["Science", "Biology"],
      bio: "Mr. Deepak Verma makes science come alive through practical demonstrations and experiments. His hands-on approach makes learning science enjoyable.",
    },
    {
      id: 4,
      name: "Mrs. Ritu Yadav",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Middle School Teacher",
      qualifications: "M.A. in English, B.Ed.",
      experience: "8 years",
      subjects: ["English", "Social Studies"],
      bio: "Mrs. Ritu Yadav focuses on developing strong communication skills in students. She uses literature and debates to enhance language proficiency.",
    },
  ],
  secondary: [
    {
      id: 1,
      name: "Dr. Amit Kumar",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Secondary Section Head",
      qualifications: "Ph.D. in Physics, M.Sc., B.Ed.",
      experience: "16 years",
      subjects: ["Physics", "Mathematics"],
      bio: "Dr. Amit Kumar leads our secondary section with a focus on academic excellence and preparation for board examinations. His expertise in physics has helped many students excel in competitive exams.",
    },
    {
      id: 2,
      name: "Mrs. Sneha Verma",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Secondary Teacher",
      qualifications: "M.Sc. in Chemistry, B.Ed.",
      experience: "12 years",
      subjects: ["Chemistry", "Science"],
      bio: "Mrs. Sneha Verma specializes in making complex chemistry concepts accessible through practical applications and real-world examples.",
    },
    {
      id: 3,
      name: "Mr. Rajesh Singh",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Secondary Teacher",
      qualifications: "M.A. in History, B.Ed.",
      experience: "10 years",
      subjects: ["History", "Civics", "Geography"],
      bio: "Mr. Rajesh Singh brings history to life through storytelling and visual aids. His interactive teaching style makes social studies engaging for students.",
    },
    {
      id: 4,
      name: "Mrs. Anita Jain",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Secondary Teacher",
      qualifications: "M.Com, B.Ed.",
      experience: "9 years",
      subjects: ["Commerce", "Economics", "Business Studies"],
      bio: "Mrs. Anita Jain prepares students for the practical aspects of commerce and economics. She incorporates case studies and current affairs into her teaching.",
    },
  ],
  special: [
    {
      id: 1,
      name: "Mr. Vikram Yadav",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Physical Education Teacher",
      qualifications: "M.P.Ed., B.P.Ed.",
      experience: "10 years",
      subjects: ["Physical Education", "Sports Coaching"],
      bio: "Mr. Vikram Yadav oversees all sports activities and physical education programs. He has coached several district and state-level athletes.",
    },
    {
      id: 2,
      name: "Mrs. Meena Gupta",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Art & Craft Teacher",
      qualifications: "Master of Fine Arts, B.Ed.",
      experience: "8 years",
      subjects: ["Art", "Craft", "Drawing"],
      bio: "Mrs. Meena Gupta nurtures creativity and artistic expression in students. Her students have won numerous art competitions at various levels.",
    },
    {
      id: 3,
      name: "Mr. Sanjay Kumar",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Computer Science Teacher",
      qualifications: "MCA, B.Ed.",
      experience: "11 years",
      subjects: ["Computer Science", "Information Technology"],
      bio: "Mr. Sanjay Kumar keeps our students updated with the latest in technology and computer science. He has developed the school's digital literacy program.",
    },
    {
      id: 4,
      name: "Mrs. Pooja Sharma",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Music Teacher",
      qualifications: "M.A. in Music, B.Ed.",
      experience: "7 years",
      subjects: ["Vocal Music", "Instrumental Music"],
      bio: "Mrs. Pooja Sharma trains students in both classical and contemporary music. She directs the school choir and organizes cultural performances.",
    },
    {
      id: 5,
      name: "Mr. Ravi Mishra",
      photo: "/placeholder.svg?height=300&width=300",
      designation: "Librarian",
      qualifications: "M.Lib., B.Lib.",
      experience: "9 years",
      subjects: ["Library Science", "Reading Programs"],
      bio: "Mr. Ravi Mishra manages our well-stocked library and promotes reading habits among students through various initiatives and reading clubs.",
    },
  ],
}

// Faculty profile component
function FacultyProfile({ teacher }: { teacher: any }) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="relative h-64 overflow-hidden">
        <Image src={teacher.photo || "/placeholder.svg"} alt={teacher.name} fill className="object-cover object-top" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{teacher.name}</CardTitle>
        <CardDescription className="font-medium text-blue-700">{teacher.designation}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm font-semibold text-gray-600">Qualifications:</p>
          <p className="text-sm">{teacher.qualifications}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Experience:</p>
          <p className="text-sm">{teacher.experience}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Subjects:</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {teacher.subjects.map((subject: string, index: number) => (
              <Badge key={index} variant="outline" className="bg-blue-50">
                {subject}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">About:</p>
          <p className="text-sm">{teacher.bio}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Faculty() {
  const [activeTab, setActiveTab] = useState("all")

  // Function to get all faculty members for "all" tab
  const getAllFaculty = () => {
    return [
      ...facultyData.administration,
      ...facultyData.primary,
      ...facultyData.middle,
      ...facultyData.secondary,
      ...facultyData.special,
    ]
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Our Faculty</h1>

      <div className="mb-8">
        <p className="text-gray-700">
          At Indian International School, we take pride in our team of dedicated and highly qualified educators who are
          committed to providing quality education and nurturing the overall development of our students. Our faculty
          members bring a wealth of knowledge, experience, and passion to the classroom.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="mb-6 overflow-x-auto">
          <TabsList className="h-auto flex flex-nowrap p-1 w-full md:w-auto">
            <TabsTrigger value="all" className="px-4 py-2 whitespace-nowrap">
              All Faculty
            </TabsTrigger>
            <TabsTrigger value="administration" className="px-4 py-2 whitespace-nowrap">
              Administration
            </TabsTrigger>
            <TabsTrigger value="primary" className="px-4 py-2 whitespace-nowrap">
              Primary Section
            </TabsTrigger>
            <TabsTrigger value="middle" className="px-4 py-2 whitespace-nowrap">
              Middle School
            </TabsTrigger>
            <TabsTrigger value="secondary" className="px-4 py-2 whitespace-nowrap">
              Secondary Section
            </TabsTrigger>
            <TabsTrigger value="special" className="px-4 py-2 whitespace-nowrap">
              Special Faculty
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAllFaculty().map((teacher) => (
              <FacultyProfile key={`all-${teacher.id}`} teacher={teacher} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="administration" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyData.administration.map((teacher) => (
              <FacultyProfile key={`admin-${teacher.id}`} teacher={teacher} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="primary" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyData.primary.map((teacher) => (
              <FacultyProfile key={`primary-${teacher.id}`} teacher={teacher} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="middle" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyData.middle.map((teacher) => (
              <FacultyProfile key={`middle-${teacher.id}`} teacher={teacher} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="secondary" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyData.secondary.map((teacher) => (
              <FacultyProfile key={`secondary-${teacher.id}`} teacher={teacher} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="special" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyData.special.map((teacher) => (
              <FacultyProfile key={`special-${teacher.id}`} teacher={teacher} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
