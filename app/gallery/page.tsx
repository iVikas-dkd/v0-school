"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Photo gallery data structure
const galleryData = {
  infrastructure: [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.29%20PM-BnW7AG7nFXFcFTF9zjsT0vCFJl6nYy.jpeg",
      alt: "School Building Front View",
      caption: "Main School Building",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.30%20PM-uDFUIfP0SJFI1NR2bStSiDDxRoRiqm.jpeg",
      alt: "Aerial View of School Campus",
      caption: "Aerial View of School Campus",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.30%20PM%20%281%29-MR2oMaN4Vnq0aeve89ANOcSkTIO0FU.jpeg",
      alt: "School Courtyard",
      caption: "School Courtyard with Students",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.29%20PM%20%281%29-1p5XQvomIRWf1la4y6uSOPi6vNChWR.jpeg",
      alt: "School Buildings",
      caption: "School Buildings with Central Courtyard",
    },
    {
      id: 5,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.28%20PM-gh0ITVK8YDCrNn0zapt7qG4x9ZnIgu.jpeg",
      alt: "School Transportation",
      caption: "School Transportation Fleet",
    },
    {
      id: 6,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.27%20PM%20%281%29-qYc7ucK1Jarb69yRQJcEIKEnbuNGd2.jpeg",
      alt: "School Building Close-up",
      caption: "School Building Close-up View",
    },
  ],
  classroom: [
    { id: 1, src: "/placeholder.svg?height=300&width=400", alt: "Smart Class", caption: "Smart Classroom Teaching" },
    { id: 2, src: "/placeholder.svg?height=300&width=400", alt: "Science Lab", caption: "Science Experiment Session" },
    { id: 3, src: "/placeholder.svg?height=300&width=400", alt: "Art Class", caption: "Art and Craft Activities" },
    {
      id: 4,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Group Study",
      caption: "Students in Group Discussion",
    },
  ],
  sports: [
    { id: 1, src: "/placeholder.svg?height=300&width=400", alt: "Annual Sports", caption: "Annual Sports Day" },
    {
      id: 2,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Cricket Match",
      caption: "Inter-School Cricket Match",
    },
    { id: 3, src: "/placeholder.svg?height=300&width=400", alt: "Kabaddi", caption: "Kabaddi Tournament" },
    { id: 4, src: "/placeholder.svg?height=300&width=400", alt: "Athletics", caption: "Track and Field Events" },
    { id: 5, src: "/placeholder.svg?height=300&width=400", alt: "Yoga Session", caption: "Morning Yoga Session" },
  ],
  cultural: [
    { id: 1, src: "/placeholder.svg?height=300&width=400", alt: "Annual Function", caption: "Annual Day Celebration" },
    {
      id: 2,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Dance Performance",
      caption: "Cultural Dance Performance",
    },
    { id: 3, src: "/placeholder.svg?height=300&width=400", alt: "Drama", caption: "School Drama Production" },
    { id: 4, src: "/placeholder.svg?height=300&width=400", alt: "Music Performance", caption: "School Orchestra" },
    {
      id: 5,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Prize Distribution",
      caption: "Annual Prize Distribution Ceremony",
    },
  ],
  celebrations: [
    {
      id: 1,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Independence Day",
      caption: "Independence Day Celebration",
    },
    { id: 2, src: "/placeholder.svg?height=300&width=400", alt: "Republic Day", caption: "Republic Day Parade" },
    { id: 3, src: "/placeholder.svg?height=300&width=400", alt: "Teachers Day", caption: "Teachers Day Celebration" },
    {
      id: 4,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Children's Day",
      caption: "Children's Day Activities",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Diwali Celebration",
      caption: "Diwali Celebration at School",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Holi Celebration",
      caption: "Holi Festival Celebration",
    },
  ],
  trips: [
    {
      id: 1,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Educational Trip",
      caption: "Educational Trip to Science Museum",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Historical Visit",
      caption: "Visit to Historical Monument",
    },
    { id: 3, src: "/placeholder.svg?height=300&width=400", alt: "Nature Camp", caption: "Nature Camp and Trekking" },
    {
      id: 4,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Industrial Visit",
      caption: "Industrial Visit for Senior Students",
    },
  ],
}

// Gallery photo component with lightbox functionality
function GalleryPhoto({ photo }: { photo: { id: number; src: string; alt: string; caption: string } }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="overflow-hidden rounded-lg shadow-md cursor-pointer group">
          <div className="relative h-48 md:h-56">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3 bg-blue-50">
            <p className="font-medium text-blue-700">{photo.caption}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <div className="relative h-[60vh]">
          <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-contain" />
        </div>
        <p className="text-center font-medium text-lg mt-2">{photo.caption}</p>
      </DialogContent>
    </Dialog>
  )
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("all")

  // Function to get all photos for "all" tab
  const getAllPhotos = () => {
    const allPhotos = [
      ...galleryData.infrastructure,
      ...galleryData.classroom,
      ...galleryData.sports,
      ...galleryData.cultural,
      ...galleryData.celebrations,
      ...galleryData.trips,
    ]
    // Shuffle the array to mix categories
    return allPhotos.sort(() => Math.random() - 0.5)
  }

  // Get photos based on active tab
  const getPhotos = () => {
    if (activeTab === "all") return getAllPhotos()
    return galleryData[activeTab as keyof typeof galleryData] || []
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Photo Gallery</h1>

      <div className="mb-8">
        <p className="text-gray-700">
          Explore our school's vibrant atmosphere through our collection of photographs capturing various events,
          activities, and facilities at Indian International School, Kadwasa Chouraha.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="mb-6 overflow-x-auto">
          <TabsList className="h-auto flex flex-nowrap p-1 w-full md:w-auto">
            <TabsTrigger value="all" className="px-4 py-2 whitespace-nowrap">
              All Photos
            </TabsTrigger>
            <TabsTrigger value="infrastructure" className="px-4 py-2 whitespace-nowrap">
              Infrastructure
            </TabsTrigger>
            <TabsTrigger value="classroom" className="px-4 py-2 whitespace-nowrap">
              Classroom Activities
            </TabsTrigger>
            <TabsTrigger value="sports" className="px-4 py-2 whitespace-nowrap">
              Sports Events
            </TabsTrigger>
            <TabsTrigger value="cultural" className="px-4 py-2 whitespace-nowrap">
              Cultural Programs
            </TabsTrigger>
            <TabsTrigger value="celebrations" className="px-4 py-2 whitespace-nowrap">
              Celebrations
            </TabsTrigger>
            <TabsTrigger value="trips" className="px-4 py-2 whitespace-nowrap">
              Field Trips
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {getPhotos().map((photo) => (
              <GalleryPhoto key={`all-${photo.id}`} photo={photo} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="infrastructure" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryData.infrastructure.map((photo) => (
              <GalleryPhoto key={`infra-${photo.id}`} photo={photo} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="classroom" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryData.classroom.map((photo) => (
              <GalleryPhoto key={`class-${photo.id}`} photo={photo} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sports" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryData.sports.map((photo) => (
              <GalleryPhoto key={`sports-${photo.id}`} photo={photo} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cultural" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryData.cultural.map((photo) => (
              <GalleryPhoto key={`cultural-${photo.id}`} photo={photo} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="celebrations" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryData.celebrations.map((photo) => (
              <GalleryPhoto key={`celebrations-${photo.id}`} photo={photo} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trips" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryData.trips.map((photo) => (
              <GalleryPhoto key={`trips-${photo.id}`} photo={photo} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
