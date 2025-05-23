import Link from "next/link"

export default function News() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">News & Announcements</h1>

      <div className="space-y-6">
        {/* Important Announcement */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-600 text-white p-2 text-sm font-bold">IMPORTANT</div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-1">May 19, 2025</div>
            <h3 className="font-bold text-xl mb-2">इंडियन इंटरनेशनल हायर सेकेंडरी स्कूल में नौकरी के अवसर</h3>
            <p className="text-gray-700 mb-4">
              नीमच, मध्यप्रदेश - कदवासा चौराहा, धाराड़ी, तहसील सिंगोली, जिला नीमच (मध्यप्रदेश) स्थित इंडियन इंटरनेशनल हायर सेकेंडरी स्कूल
              (IIHSS) ने आगामी शैक्षणिक सत्र के लिए कई शिक्षण पदों की घोषणा की है। प्रधानाचार्य श्रीलाल धाकर के नेतृत्व में स्कूल प्रशासन
              विभिन्न विषयों और कक्षा स्तरों के लिए 9 शिक्षण पदों को भरने की तलाश में है।
            </p>
            <Link href="/news/admission-deadline" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Read more →
            </Link>
          </div>
        </div>

        {/* Event */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-2 text-sm font-bold">EVENT</div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-1">May 10, 2023</div>
            <h3 className="font-bold text-xl mb-2">Annual Sports Day</h3>
            <p className="text-gray-700 mb-4">
              We are pleased to announce that the Annual Sports Day of Indian International Higher Secondary School will
              be held on June 5, 2023, at the school playground. The event will start at 9:00 AM and continue until 4:00
              PM.
            </p>
            <Link href="/news/sports-day" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Read more →
            </Link>
          </div>
        </div>

        {/* Achievement */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-600 text-white p-2 text-sm font-bold">ACHIEVEMENT</div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-1">May 5, 2023</div>
            <h3 className="font-bold text-xl mb-2">Navodaya Entrance Results</h3>
            <p className="text-gray-700 mb-4">
              We are proud to announce that 15 students from our school have qualified for Jawahar Navodaya Vidyalaya in
              the recent entrance examination. This is a remarkable achievement and a testament to the quality of
              education provided at Indian International Higher Secondary School.
            </p>
            <Link href="/news/navodaya-results" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Read more →
            </Link>
          </div>
        </div>

        {/* Parent-Teacher Meeting */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-yellow-600 text-white p-2 text-sm font-bold">NOTICE</div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-1">April 28, 2023</div>
            <h3 className="font-bold text-xl mb-2">Parent-Teacher Meeting</h3>
            <p className="text-gray-700 mb-4">
              The Parent-Teacher Meeting for the first term of the academic year 2025-26 will be held on May 20, 2025
              (Saturday) from 9:00 AM to 2:00 PM. Parents are requested to attend the meeting to discuss their child's
              academic progress and other related matters.
            </p>
            <p className="text-gray-700 mb-4">
              Parents are requested to adhere to the given time slots to avoid overcrowding. Report cards will be
              distributed during the meeting.
            </p>
            <p className="text-gray-700">For more information, please contact: Indiainternationalschool29@gmail.com</p>
          </div>
        </div>

        {/* Summer Camp */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-purple-600 text-white p-2 text-sm font-bold">ANNOUNCEMENT</div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-1">April 20, 2025</div>
            <h3 className="font-bold text-xl mb-2">Summer Camp 2025</h3>
            <p className="text-gray-700 mb-4">
              Indian International Higher Secondary School is organizing a Summer Camp from June 10 to June 25, 2025.
              The camp will include various activities such as sports, arts and crafts, music, dance, and educational
              workshops.
            </p>
            <p className="text-gray-700 mb-4">
              Interested parents can register their children at the school office before June 5, 2025. Limited seats are
              available, so early registration is recommended.
            </p>
            <p className="text-gray-700">For more information, please contact: Indiainternationalschool29@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
