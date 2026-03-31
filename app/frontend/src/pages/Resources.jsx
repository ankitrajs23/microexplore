import { 
  BookOpen,
  Video,
  ExternalLink,
  FileText,
  Globe,
  Bookmark
} from 'lucide-react';
import { SectionHeader } from '../components/shared/SectionHeader';
import { YouTubeEmbed } from '../components/shared/YouTubeEmbed';
import { Badge } from '../components/ui/badge';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

export default function Resources() {
  const BASE_URL = `http://${window.location.hostname}:8000`;
  const [answers, setAnswers] = useState({});
  const [question, setQuestion] = useState("");
  const [faqs, setFaqs] = useState([]);
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const userId =
  localStorage.getItem("userId") ||
  Math.random().toString(36).substring(2);

localStorage.setItem("userId", userId);

  
  const books = [
    {
      title: 'Electronics',
      author: 'Paul Horowitz & Winfield Hill',
      level: 'Intermediate',
      description: 'Comprehensive guide to analog and digital electronics, widely regarded as the definitive reference.',
      link: 'https://artofelectronics.net/'
    },
    {
      title: 'Practical Electronics for Inventors',
      author: 'Paul Scherz & Simon Monk',
      level: 'Beginner',
      description: 'Hands-on guide covering electronic components, circuits, and project building.',
      link: 'https://www.mhprofessional.com/practical-electronics-for-inventors-fourth-edition-9781259587542-usa'
    },
    {
      title: 'Make: Electronics',
      author: 'Charles Platt',
      level: 'Beginner',
      description: 'Learn by doing approach with hands-on experiments and projects.',
      link: 'https://www.makershed.com/products/make-electronics-3rd-edition'
    },
    {
      title: 'Programming Arduino',
      author: 'Simon Monk',
      level: 'Beginner',
      description: 'Getting started guide for Arduino programming with practical projects.',
      link: 'https://www.simonmonk.org/'
    },
    {
      title: 'Mastering STM32',
      author: 'Carmine Noviello',
      level: 'Advanced',
      description: 'In-depth guide to programming STM32 microcontrollers using HAL library.',
      link: 'https://leanpub.com/mastering-stm32'
    }
  ];

  const videoChannels = [
    {
      name: 'Ben Eater',
      description: 'Building a computer from scratch, digital electronics fundamentals.',
      subscribers: '1.2M',
      link: 'https://www.youtube.com/@BenEater'
    },
    {
      name: 'EEVblog',
      description: 'Electronics engineering video blog with teardowns and tutorials.',
      subscribers: '1M',
      link: 'https://www.youtube.com/@EEVblog'
    },
    {
      name: 'GreatScott!',
      description: 'DIY electronics projects and explanations.',
      subscribers: '2.5M',
      link: 'https://www.youtube.com/@greatscottlab'
    },
    {
      name: 'DroneBot Workshop',
      description: 'Arduino, Raspberry Pi, and maker projects.',
      subscribers: '800K',
      link: 'https://www.youtube.com/@Dronebotworkshop'
    }
  ];

  const downloadables = [
  {
  title: 'Arduino Cheat Sheet',
  type: 'GitHub Resource',
  size: 'Repository',
  description: 'Comprehensive Arduino cheat sheet repository with reference material and examples.',
  icon: Globe,
  link: 'https://github.com/liffiton/Arduino-Cheat-Sheet'
},
  {
  title: 'Circuit Symbols Reference',
  type: 'Article',
  size: 'Web Resource',
  description: 'Complete guide to standard schematic symbols used in electronic circuit diagrams.',
  icon: Globe,
  link: 'https://electronicsclub.info/circuitsymbols.htm'
},
  {
  title: 'Resistor Color Code Guide',
  type: 'Article',
  size: 'Web Resource',
  description: 'Complete explanation of resistor color coding with charts and examples.',
  icon: Globe,
  link: 'https://www.arrow.com/en/research-and-events/articles/resistor-color-code'
},
  {
    title: "Ohm's Law Calculator",
    type: 'Interactive',
    size: 'Web App',
    description: 'Calculate voltage, current, resistance, and power relationships.',
    icon: Globe,
    link: 'https://www.calculator.net/ohms-law-calculator.html'
  }
];

  const externalLinks = [
    {
      name: 'All About Circuits',
      url: 'https://www.allaboutcircuits.com/',
      description: 'Free textbooks, worksheets, and community forums.'
    },
    {
      name: 'SparkFun Learn',
      url: 'https://learn.sparkfun.com/',
      description: 'Tutorials on electronics, programming, and maker skills.'
    },
    {
      name: 'Adafruit Learning System',
      url: 'https://learn.adafruit.com/',
      description: 'Project guides and tutorials for makers of all levels.'
    },
    {
      name: 'Electronics Tutorials',
      url: 'https://www.electronics-tutorials.ws/',
      description: 'Comprehensive tutorials on basic electronics concepts.'
    },
    {
      name: 'TinkerCAD Circuits',
      url: 'https://www.tinkercad.com/circuits',
      description: 'Free online circuit simulator for Arduino projects.'
    },
    {
      name: 'Falstad Circuit Simulator',
      url: 'https://www.falstad.com/circuit/',
      description: 'Interactive circuit simulation in your browser.'
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-amber-100 text-amber-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

    // Fetch FAQs from backend
  const fetchFaqs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/faq`);
      setFaqs(res.data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };
const submitAnswer = async (id, answer) => {
  if (!answer) return;

  try {
    await axios.put(`${BASE_URL}/api/faq/${id}`, {
      answer: answer,
    });

    setAnswers({});
    fetchFaqs();
  } catch (error) {
    console.error("Error updating answer:", error);
  }
};


  // Send question to backend
  
  const submitQuestion = async () => {
  console.log("CLICKED");

  if (!question.trim()) return;

  try {
    const res = await axios.post(`${BASE_URL}/api/faq`,  {
  question: question,
  answer: "",
  userId: userId
});

    console.log("SUCCESS:", res.data);

    setQuestion("");
    fetchFaqs();
  } catch (error) {
    console.error("ERROR:", error);
  }
};

  // Load FAQs when page opens
  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc]" data-testid="resources-page">
      {/* Page Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Breadcrumb className="mb-6">
  <BreadcrumbList>

    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link to="/">Home</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbPage>
        Learning Resources
      </BreadcrumbPage>
    </BreadcrumbItem>

  </BreadcrumbList>
</Breadcrumb>
                    <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Learning Resources
          </h1>
          <p className="text-[#64748b] text-lg leading-relaxed max-w-3xl">
            Curated collection of books, videos, tools, and external resources to 
            support your journey in learning microelectronics and embedded systems.
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Recommended Books"
            subtitle="Essential reading materials for electronics and embedded systems."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <a 
                key={book.title}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 group"
                data-testid={`book-card-${book.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[#0ea5e9]" strokeWidth={1.5} />
                  </div>
                  <Badge className={getLevelColor(book.level)}>
                    {book.level}
                  </Badge>
                </div>
                <h3 
                  className="text-lg font-bold text-[#0f172a] mb-1 group-hover:text-[#0ea5e9] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {book.title}
                </h3>
                <p className="text-sm text-[#64748b] mb-3">by {book.author}</p>
                <p className="text-sm text-[#64748b]">{book.description}</p>
                <span className="inline-flex items-center gap-1 text-[#0ea5e9] text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Video Channels Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Video Channels"
            subtitle="YouTube channels and educational video resources."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {videoChannels.map((channel) => (
              <a
                key={channel.name}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-4 group"
                data-testid={`channel-card-${channel.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-14 h-14 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0">
                  <Video className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-lg font-bold text-[#0f172a] group-hover:text-[#0ea5e9] transition-colors"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {channel.name}
                  </h3>
                  <p className="text-sm text-[#64748b] mb-1">{channel.description}</p>
                  <span className="text-xs text-[#64748b]">{channel.subscribers} subscribers</span>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-[#0ea5e9] transition-colors" />
              </a>
            ))}
          </div>

          {/* Featured Videos */}
          <h3 
            className="text-xl font-bold text-[#0f172a] mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Featured Videos
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <YouTubeEmbed 
                videoId="tz62t-q_KEc"
                title="How Computers Work"
              />
              <p className="mt-3 text-sm text-[#64748b]">
                <strong>How Computers Work</strong> - Understanding digital logic and computer architecture.
              </p>
            </div>
            <div>
              <YouTubeEmbed 
                videoId="6Maq5IyHSuc"
                title="Electronics Basics"
              />
              <p className="mt-3 text-sm text-[#64748b]">
                <strong>Electronics Basics</strong> - Voltage, current, and resistance fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
<section className="py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader 
      title="Downloads & Tools"
      subtitle="Reference materials and interactive tools for learning."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {downloadables.map((item) => (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-6 text-center cursor-pointer block transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="w-14 h-14 rounded-xl bg-[#0d9488]/10 flex items-center justify-center mx-auto mb-4">
            <item.icon className="w-7 h-7 text-[#0d9488]" strokeWidth={1.5} />
          </div>

          <h3 className="text-base font-bold text-[#0f172a] mb-1">
            {item.title}
          </h3>

          <p className="text-sm text-[#64748b] mb-3">
            {item.description}
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-[#64748b]">
            <Badge variant="outline">{item.type}</Badge>
            <span>{item.size}</span>
          </div>
        </a>
      ))}
    </div>

  </div>
</section>

      {/* External Links Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="External Resources"
            subtitle="Trusted websites and online learning platforms."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 group"
                data-testid={`external-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-[#0ea5e9]/10 transition-colors">
                    <Bookmark className="w-5 h-5 text-[#64748b] group-hover:text-[#0ea5e9] transition-colors" strokeWidth={1.5} />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-[#0ea5e9] transition-colors" />
                </div>
                <h3 
                  className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#0ea5e9] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {link.name}
                </h3>
                <p className="text-sm text-[#64748b]">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader 
            title="Ask a Question"
            subtitle="Have doubts? Ask here and answers will be added soon."
          />

          {/* Input Box */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
            />
            <button

            
  onClick={submitQuestion}
  className="bg-[#0ea5e9] text-white px-4 py-2 rounded-lg hover:bg-[#0284c7]"
>
  Submit
</button>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.length === 0 && (
              <p className="text-sm text-[#64748b]">No questions yet. Be the first to ask!</p>
            )}

            {faqs.map((faq) => (
 <div
  key={faq._id}
  className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
>
    <p className="font-semibold text-[#0f172a] mb-1">
  Q: {faq.question}
</p>
    
    <p className="text-[#334155] mb-3">
  A: {faq.answer ? faq.answer : "Answer coming soon"}
</p>

{/* DELETE BUTTON */}
{(faq.userId === userId || isAdmin) && (
  <button
    onClick={async () => {
      try {
  await axios.delete(`${BASE_URL}/api/faq/${faq._id}`);
  fetchFaqs();
} catch (error) {
  console.error("Delete failed:", error);
}
      fetchFaqs();
    }}
    className="text-red-500 text-sm mb-2"
  >
    Delete
  </button>
)}


    {/* Answer input (for professor) */}
    {isAdmin && (
  <div className="flex gap-2 mt-2">
    <input
      type="text"
      placeholder="Write answer..."
      value={answers[faq._id] || ""}
      onChange={(e) =>
        setAnswers({
          ...answers,
          [faq._id]: e.target.value
        })
      }
      className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
    />

    <button
      disabled={!answers[faq._id]}
      onClick={() => submitAnswer(faq._id, answers[faq._id])}
      className="bg-[#0ea5e9] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#0284c7] disabled:opacity-50"
    >
      Submit
    </button>
  </div>
)}

  </div>
))}
          </div>

        </div>
      </section>

    </div>
  );
}
