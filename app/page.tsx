import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"

// Define the school images for the carousel
const schoolImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.29%20PM-BnW7AG7nFXFcFTF9zjsT0vCFJl6nYy.jpeg",
    alt: "School Building Front View",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.30%20PM-uDFUIfP0SJFI1NR2bStSiDDxRoRiqm.jpeg",
    alt: "Aerial View of School Campus with Buses",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.30%20PM%20%281%29-MR2oMaN4Vnq0aeve89ANOcSkTIO0FU.jpeg",
    alt: "School Courtyard with Students",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.29%20PM%20%281%29-1p5XQvomIRWf1la4y6uSOPi6vNChWR.jpeg",
    alt: "School Buildings with Central Courtyard",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.28%20PM-gh0ITVK8YDCrNn0zapt7qG4x9ZnIgu.jpeg",
    alt: "School Transportation Fleet",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-19%20at%208.28.27%20PM%20%281%29-qYc7ucK1Jarb69yRQJcEIKEnbuNGd2.jpeg",
    alt: "School Building Close-up View",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Banner - Full Width Carousel */}
      <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Full-width carousel */}
          <div className="mb-8">
            <ImageCarousel
              images={schoolImages}
              autoSlideInterval={5000}
              className="rounded-lg shadow-md w-full h-[400px] md:h-[500px] lg:h-[600px]"
              width={1200}
              height={600}
            />
          </div>

          {/* Information section below carousel */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-700 text-white py-4 px-6 rounded-md">
              <h2 className="text-xl font-bold">Session 2025-26</h2>
            </div>

            <div className="bg-purple-700 text-white py-4 px-6 rounded-md">
              <h2 className="text-xl">
                Class-Nursery To 10th <span className="text-yellow-300">(Hindi Medium)</span>
              </h2>
            </div>

            <div className="bg-purple-700 text-white py-4 px-6 rounded-md">
              <h2 className="text-xl">
                11th To 12th <span className="text-yellow-300">(Maths, Bio., Arts, Commerce)</span>
              </h2>
            </div>
          </div>

          {/* Admission section - without circular badge */}
          <div className="mt-8">
            <div className="bg-red-600 text-white p-6 rounded-md relative overflow-hidden">
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-red-500 rounded-full"></div>
              <h3 className="text-2xl font-bold relative z-10 text-center">प्रवेश प्रारम्भ</h3>
              <p className="relative z-10 text-center text-xl mt-2">Admissions Open for All Classes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">हमारी विशेषताएँ</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start gap-2">
                <span className="text-2xl text-blue-600">✦</span>
                <p className="text-gray-800">उच्च गुणवत्ता की शिक्षा के लिए स्मार्ट कक्षाएं</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start gap-2">
                <span className="text-2xl text-blue-600">✦</span>
                <p className="text-gray-800">सीसीटीवी कैमरों के साथ उचित परिवहन व्यवस्था</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start gap-2">
                <span className="text-2xl text-blue-600">✦</span>
                <p className="text-gray-800">कंप्यूटर लैब, पुस्तकालय और अनुभवी कर्मचारी</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start gap-2">
                <span className="text-2xl text-blue-600">✦</span>
                <p className="text-gray-800">
                  5वीं, 8वीं और 10वीं कक्षा के छात्रों के लिए नवोदय और मॉडल, उत्कृष्ट स्कूल प्रवेश परीक्षा की विशेष तैयारी
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start gap-2">
                <span className="text-2xl text-blue-600">✦</span>
                <p className="text-gray-800">नवनिर्मित स्कूल भवन और खेल का मैदान</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start gap-2">
                <span className="text-2xl text-blue-600">✦</span>
                <p className="text-gray-800">आपके बच्चों के लिए सुरक्षित और स्वच्छ वातावरण</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News and Announcements Section */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-blue-700">News & Announcements</h2>
            <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              View All <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-red-600 text-white p-2 text-sm font-bold">IMPORTANT</div>
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">May 15, 2025</div>
                <h3 className="font-bold text-lg mb-2">इंडियन इंटरनेशनल हायर सेकेंडरी स्कूल में नौकरी के अवसर</h3>
                <p className="text-gray-700 mb-3">
                  नीमच, मध्यप्रदेश - कदवासा चौराहा, धाराड़ी, तहसील सिंगोली, जिला नीमच (मध्यप्रदेश) स्थित इंडियन इंटरनेशनल हायर सेकेंडरी
                  स्कूल (IIHSS) ने आगामी शैक्षणिक सत्र के लिए कई शिक्षण पदों की घोषणा की है। प्रधानाचार्य श्रीलाल धाकर के नेतृत्व में स्कूल
                  प्रशासन विभिन्न विषयों और कक्षा स्तरों के लिए 9 शिक्षण पदों को भरने की तलाश में है। यह भर्ती अभियान इस प्रतिष्ठित
                  संस्थान के शैक्षणिक संकाय को मजबूत करने का लक्ष्य रखता है।
                </p>
                <Link href="/news/admission-deadline" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Read more →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-2 text-sm font-bold">EVENT</div>
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">May 10, 2023</div>
                <h3 className="font-bold text-lg mb-2">Annual Sports Day</h3>
                <p className="text-gray-700 mb-3">
                  Annual Sports Day will be held on June 5, 2023. All parents are cordially invited to attend and
                  encourage the students.
                </p>
                <Link href="/news/sports-day" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Read more →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 text-white p-2 text-sm font-bold">ACHIEVEMENT</div>
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">April 10, 2025</div>
                <h3 className="font-bold text-lg mb-2">
                  उत्कृष्ट एवं नवोदय विद्यालय में इंडियन इंटरनेशनल हायर सेकेंडरी स्कूल धाराड़ी के छात्रों का चयन
                </h3>
                <p className="text-gray-700 mb-3">
                  नीमच, मध्यप्रदेश - इंडियन इंटरनेशनल हायर सेकेंडरी स्कूल, धाराड़ी के प्रधानाचार्य श्रीलाल धाकड़ ने गर्व के साथ घोषणा की है
                  कि विद्यालय के आठ छात्रों का प्रतिष्ठित उत्कृष्ट एवं नवोदय विद्यालयों में शैक्षणिक सत्र 2024-25 के लिए चयन हुआ है।
                </p>
                <Link href="/news/navodaya-results" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section - Replacing Hostel Section */}
      <div className="bg-yellow-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-yellow-300">विशेष सुविधाएँ</span>
            </h2>
            <p className="text-lg">Smart classrooms, computer lab, library, and transportation facilities available</p>
          </div>
        </div>
      </div>
    </>
  )
}
