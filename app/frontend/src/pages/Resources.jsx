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
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

export default function Resources() {
    
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

    </div>
  );
}
