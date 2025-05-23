"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// This is a simple mock database of news articles
const newsArticles = {
  "admission-deadline": {
    title: "इंडियन इंटरनेशनल हायर सेकेंडरी स्कूल में नौकरी के अवसर",
    date: "May 19, 2025",
    category: "IMPORTANT",
    categoryColor: "bg-red-600",
    content: `
      <p>नीमच, मध्यप्रदेश - कदवासा चौराहा, धाराड़ी, तहसील सिंगोली, जिला नीमच (मध्यप्रदेश) स्थित इंडियन इंटरनेशनल हायर सेकेंडरी स्कूल (IIHSS) ने आगामी शैक्षणिक सत्र के लिए कई शिक्षण पदों की घोषणा की है।</p>
      
      <p>प्रधानाचार्य श्रीलाल धाकर के नेतृत्व में स्कूल प्रशासन विभिन्न विषयों और कक्षा स्तरों के लिए 9 शिक्षण पदों को भरने की तलाश में है। यह भर्ती अभियान इस प्रतिष्ठित संस्थान के शैक्षणिक संकाय को मजबूत करने का लक्ष्य रखता है।</p>
      
      <p><strong>उपलब्ध पद:</strong></p>
      <ul>
        <li>विज्ञान शिक्षक (कक्षा 6-10): 1 पद</li>
        <li>अंग्रेजी शिक्षक (कक्षा 6-10): 1 पद</li>
        <li>संस्कृत शिक्षक (कक्षा 6-10): 1 पद</li>
        <li>हिंदी शिक्षक (कक्षा 6-10): 1 पद</li>
        <li>प्राथमिक शिक्षक (कक्षा 1-5): 2 पद</li>
        <li>पूर्व-प्राथमिक शिक्षक (नर्सरी, एलकेजी, यूकेजी): 2 पद</li>
        <li>कंप्यूटर शिक्षक (कक्षा 6-10): 1 पद</li>
      </ul>
      
      <p><strong>योग्यता आवश्यकताएं:</strong></p>
      <ul>
        <li>कक्षा 6-10 के लिए: B.A./B.Sc. के साथ B.Ed/D.Ed योग्यता आवश्यक</li>
        <li>कक्षा 1-5 के लिए: 12वीं पास के साथ D.Ed योग्यता आवश्यक</li>
        <li>कंप्यूटर शिक्षक के लिए: बच्चों को पढ़ाने का न्यूनतम 3 वर्ष का अनुभव</li>
        <li>सभी पद हिंदी माध्यम के लिए हैं</li>
        <li>अनुभवी उम्मीदवारों को प्राथमिकता दी जाएगी</li>
      </ul>
      
      <p>वेतन योग्यता के अनुसार प्रदान किया जाएगा। इच्छुक उम्मीदवार अधिक जानकारी के लिए प्रधानाचार्य से 9826014296 पर संपर्क कर सकते हैं।</p>
      <p>ईमेल: Indiainternationalschool29@gmail.com</p>
     
    `,
  },
  "sports-day": {
    title: "Annual Sports Day",
    date: "May 10, 2023",
    category: "EVENT",
    categoryColor: "bg-blue-600",
    content: `
      <p>We are pleased to announce that the Annual Sports Day of Indian International Higher Secondary School will be held on June 5, 2023, at the school playground. The event will start at 9:00 AM and continue until 4:00 PM.</p>
      <p>Various sports competitions will be organized for different age groups. Students are encouraged to participate in multiple events. Prizes will be awarded to the winners in each category.</p>
      <p>The events include:</p>
      <ul>
        <li>100m, 200m, and 400m races</li>
        <li>Long jump and high jump</li>
        <li>Shot put and discus throw</li>
        <li>Relay races</li>
        <li>Tug of war</li>
        <li>Musical chairs (for junior classes)</li>
        <li>Sack race (for junior classes)</li>
      </ul>
      <p>The schedule for the day is as follows:</p>
      <ul>
        <li>9:00 AM - 9:30 AM: Opening ceremony</li>
        <li>9:30 AM - 12:30 PM: Track events</li>
        <li>12:30 PM - 1:30 PM: Lunch break</li>
        <li>1:30 PM - 3:30 PM: Field events</li>
        <li>3:30 PM - 4:00 PM: Prize distribution and closing ceremony</li>
      </ul>
      <p>All parents are cordially invited to attend the event and encourage the participants. Refreshments will be provided for all attendees.</p>
      <p>For more information, please contact: Indiainternationalschool29@gmail.com</p>
    `,
  },
  "navodaya-results": {
    title: "Navodaya, SOE and MOE Entrance Results",
    date: "April 10, 2025",
    category: "उत्कृष्ट एवं नवोदय विद्यालय में इंडियन इंटरनेशनल हायर सेकेंडरी स्कूल धाराड़ी के छात्रों का चयन",
    categoryColor: "bg-green-600",
    content: `
       

  <div class="section">
    <h2>📢 प्रेस विज्ञप्ति: छात्र चयन सूची की घोषणा</h2>
    <p><strong>दिनांक:</strong> 19 मई 2025</p>
    <p>इंडियन इंटरनेशनल हायर सेकेंडरी स्कूल द्वारा कक्षा 5वीं एवं 8वीं में चयनित छात्रों की सूची जारी की गई है। यह चयन शैक्षणिक उत्कृष्टता के आधार पर किया गया है।</p>
  </div>

  <div class="section">
    <h3>🏅 उत्कृष्ट विद्यालय, नीमच – कक्षा 8वीं के लिए चयनित छात्र</h3>
    <table>
      <tr>
        <th>क्रम</th>
        <th>छात्र का नाम</th>
        <th>पिता का नाम</th>
        <th>निवास स्थान</th>
      </tr>
      <tr><td>1</td><td>अर्जुन कुमार धाकड़</td><td>श्री बाबूलाल जी धाकड़</td><td>फतलाखेड़ी</td></tr>
      <tr><td>2</td><td>उषा धाकड़</td><td>श्री बनवारीलाल जी धाकड़</td><td>मतुपुरा परुण</td></tr>
      <tr><td>3</td><td>मनवीर सिंह</td><td>श्री पवन सिंह जी</td><td>कदवासा</td></tr>
      <tr><td>4</td><td>संध्या</td><td>श्री कमलेश जी</td><td>लाडपुरा</td></tr>
      <tr><td>5</td><td>युवराज धाकड़</td><td>श्री शोभालाल जी धाकड़</td><td>बिलखेड़ा</td></tr>
      <tr><td>6</td><td>भावना धाकड़</td><td>श्री गोपाल जी धाकड़</td><td>धाराड़ी</td></tr>
      <tr><td>7</td><td>गोविंद धाकड़</td><td>श्री मुकेश जी धाकड़</td><td>लाडपुरा</td></tr>
    </table>
  </div>

  <div class="section">
    <h3>🎓 नवोदय विद्यालय, रामपुरा – कक्षा 5वीं के लिए चयनित छात्र</h3>
    <table>
      <tr>
        <th>क्रम</th>
        <th>छात्र का नाम</th>
        <th>पिता का नाम</th>
        <th>निवास स्थान</th>
      </tr>
      <tr>
        <td>1</td>
        <td>अंशु धाकड़</td>
        <td>श्री रतनलाल जी धाकड़</td>
        <td>बोरवावड़ी</td>
      </tr>
    </table>
  </div>

  <div class="section">
    <h3>👏 प्रशंसा एवं संदेश</h3>
    <p>स्कूल <strong>प्रवक्ता डॉ. कैलाश धाकड़</strong> (मो. <strong>9425979097</strong>) ने बताया कि विद्यालय हमेशा छात्रों की शैक्षणिक उन्नति हेतु प्रयत्नशील रहा है।</p>
    <p>विद्यालय के <strong>प्रधानाचार्य श्रीलाल धाकड़</strong> (मो. <strong>9826014296</strong>) ने कहा:</p>
    <blockquote>
      "यह उपलब्धि हमारे लिए गर्व की बात है और यह अन्य छात्रों के लिए प्रेरणादायक होगी। विद्यालय सतत शैक्षणिक गुणवत्ता में सुधार हेतु प्रतिबद्ध है।"
    </blockquote>
    <p>अधिक जानकारी के लिए संपर्क करें: Indiainternationalschool29@gmail.com</p>
  </div>
      
    `,
  },
}

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const article = newsArticles[params.slug]

  if (!article) {
    notFound()
  }

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={handleGoBack}
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-md transition-colors"
        >
          <ArrowLeft size={16} />
          Go Back
        </button>

        <Link
          href="/news"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-md transition-colors"
        >
          News & Announcements
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className={`${article.categoryColor} text-white p-2 text-sm font-bold`}>{article.category}</div>
        <div className="p-6">
          <div className="text-sm text-gray-500 mb-1">{article.date}</div>
          <h1 className="font-bold text-2xl mb-4">{article.title}</h1>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </div>
    </div>
  )
}
