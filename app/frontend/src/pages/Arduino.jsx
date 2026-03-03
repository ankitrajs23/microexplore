import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Cpu,
  Code,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
  Zap,
  Usb,
  Download
} from 'lucide-react';
import { SectionHeader } from '../components/shared/SectionHeader';
import { YouTubeEmbed } from '../components/shared/YouTubeEmbed';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Button } from '../components/ui/button';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

export default function Arduino() {
  const specs = [
    { spec: 'Microcontroller', value: 'ATmega328P' },
    { spec: 'Operating Voltage', value: '5V' },
    { spec: 'Input Voltage (recommended)', value: '7-12V' },
    { spec: 'Digital I/O Pins', value: '14 (6 provide PWM output)' },
    { spec: 'Analog Input Pins', value: '6' },
    { spec: 'DC Current per I/O Pin', value: '20 mA' },
    { spec: 'Flash Memory', value: '32 KB (0.5 KB used by bootloader)' },
    { spec: 'SRAM', value: '2 KB' },
    { spec: 'EEPROM', value: '1 KB' },
    { spec: 'Clock Speed', value: '16 MHz' },
    { spec: 'USB Connection', value: 'Type-B' },
    { spec: 'Dimensions', value: '68.6 x 53.4 mm' },
  ];

  const gettingStartedSteps = [
    {
      step: 1,
      title: 'Download Arduino IDE',
      description: 'Visit arduino.cc and download the Arduino IDE for your operating system (Windows, macOS, or Linux).',
      tip: 'The IDE is free and open-source'
    },
    {
      step: 2,
      title: 'Install the Software',
      description: 'Run the installer and follow the prompts. On Windows, allow driver installation when prompted.',
      tip: 'Install all components including USB drivers'
    },
    {
      step: 3,
      title: 'Connect Your Arduino',
      description: 'Use a USB Type-B cable to connect your Arduino Uno to your computer.',
      tip: 'The power LED should light up'
    },
    {
      step: 4,
      title: 'Select Board and Port',
      description: 'In the IDE, go to Tools → Board → Arduino Uno, then Tools → Port and select the COM port.',
      tip: 'On Windows, it appears as COM3, COM4, etc.'
    },
    {
      step: 5,
      title: 'Upload Your First Sketch',
      description: 'Go to File → Examples → 01.Basics → Blink. Click the Upload button (→) to program your board.',
      tip: 'The onboard LED will start blinking!'
    }
  ];

  const projectIdeas = [
    {
      title: 'LED Traffic Light',
      difficulty: 'Beginner',
      description: 'Create a working traffic light using 3 LEDs and basic timing code.'
    },
    {
      title: 'Temperature Monitor',
      difficulty: 'Beginner',
      description: 'Read temperature from a sensor and display it on the Serial Monitor.'
    },
    {
      title: 'Ultrasonic Distance Sensor',
      difficulty: 'Intermediate',
      description: 'Build a distance measuring device using HC-SR04 sensor.'
    },
    {
      title: 'LCD Message Display',
      difficulty: 'Intermediate',
      description: 'Display custom messages on a 16x2 LCD screen.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]" data-testid="arduino-page">
      {/* Page Header */}
      <section className="bg-[#00979D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Breadcrumb className="mb-6 text-white [&>ol>li>svg]:text-white/80">
  <BreadcrumbList>

    <BreadcrumbItem>
      <BreadcrumbLink asChild>
  <Link
  to="/"
  className="text-white/80 hover:text-[#0ea5e9] transition-colors duration-200"
>
  Home
</Link>
</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbLink asChild>
  <Link
  to="/embedded"
  className="text-white/80 hover:text-[#0ea5e9] transition-colors duration-200"
>
  Embedded Boards
</Link>
</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbPage className="text-white">
        Arduino
      </BreadcrumbPage>
    </BreadcrumbItem>

  </BreadcrumbList>
</Breadcrumb>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
              <Cpu className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-4"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Arduino
              </h1>
              <p className="text-white/80 text-lg">The Perfect Platform for Beginners</p>
            </div>
          </div>
          <p className="text-white/90 text-lg leading-relaxed max-w-3xl">
            Arduino is an open-source electronics platform that makes it easy to create 
            interactive projects. With a simple programming language and extensive community 
            support, it's the ideal choice for students and educators starting their journey 
            in embedded systems.
          </p>
        </div>
      </section>

      {/* Why Arduino Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Why Choose Arduino?"
            subtitle="Arduino has become the go-to platform for learning electronics and programming."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-[#00979D]/10 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-7 h-7 text-[#00979D]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2" style={{ fontFamily: 'Manrope' }}>Easy to Learn</h3>
              <p className="text-sm text-[#64748b]">Simplified programming language with thousands of tutorials available.</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-[#00979D]/10 flex items-center justify-center mx-auto mb-4">
                <Code className="w-7 h-7 text-[#00979D]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2" style={{ fontFamily: 'Manrope' }}>Open Source</h3>
              <p className="text-sm text-[#64748b]">Free software and hardware designs with a transparent ecosystem.</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-[#00979D]/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-[#00979D]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2" style={{ fontFamily: 'Manrope' }}>Rich Libraries</h3>
              <p className="text-sm text-[#64748b]">Extensive library support for sensors, displays, and communication.</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-[#00979D]/10 flex items-center justify-center mx-auto mb-4">
                <Usb className="w-7 h-7 text-[#00979D]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[#0f172a] mb-2" style={{ fontFamily: 'Manrope' }}>Plug & Play</h3>
              <p className="text-sm text-[#64748b]">Simple USB connection with no external programmer needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Arduino Uno Specifications"
            subtitle="Technical specifications of the most popular Arduino board for education."
          />
          
          <div className="glass-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#00979D]/5">
                  <TableHead className="font-bold text-[#0f172a] w-1/3">Specification</TableHead>
                  <TableHead className="font-bold text-[#0f172a]">Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {specs.map((row) => (
                  <TableRow key={row.spec}>
                    <TableCell className="font-medium text-[#0f172a]">{row.spec}</TableCell>
                    <TableCell className="text-[#64748b] font-mono text-sm">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Getting Started Guide */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Getting Started Guide"
            subtitle="Follow these steps to set up your Arduino and write your first program."
          />
          
          <div className="space-y-6">
            {gettingStartedSteps.map((item) => (
              <div 
                key={item.step}
                className="glass-card p-6 lg:p-8"
                data-testid={`arduino-step-${item.step}`}
              >
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#00979D] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-xl font-bold text-[#0f172a] mb-2"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#64748b] mb-3">{item.description}</p>
                    <div className="flex items-center gap-2 text-sm text-[#00979D]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="font-medium">Tip: {item.tip}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://www.arduino.cc/en/software" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="arduino-download-link"
            >
              <Button className="bg-[#00979D] hover:bg-[#00979D]/90 text-white rounded-full px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download Arduino IDE
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Starter Project Ideas"
            subtitle="Try these projects to practice your Arduino skills."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectIdeas.map((project) => (
              <div 
                key={project.title}
                className="glass-card p-6"
                data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 
                    className="text-lg font-bold text-[#0f172a]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    project.difficulty === 'Beginner' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-[#64748b] text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Tutorial Videos"
            subtitle="Watch these videos to accelerate your learning."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <YouTubeEmbed 
                videoId="nL34zDTPkcs"
                title="Arduino for Beginners"
              />
              <p className="mt-3 text-sm text-[#64748b]">
                <strong>Arduino for Beginners</strong> - Complete beginner's guide to Arduino programming.
              </p>
            </div>
            <div>
              <YouTubeEmbed 
                videoId="fJWR7dBuc18"
                title="Arduino Projects"
              />
              <p className="mt-3 text-sm text-[#64748b]">
                <strong>Arduino Projects</strong> - Build your first interactive project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link to="/embedded">
              <Button variant="outline" className="rounded-full">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Overview
              </Button>
            </Link>
            <Link to="/stm32">
              <Button className="bg-[#03234B] hover:bg-[#03234B]/90 text-white rounded-full">
                Explore STM32
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
