import { Link } from 'react-router-dom';
import { 
  Terminal,
  Code,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Settings,
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

export default function STM32() {
  const specs = [
    { spec: 'Microcontroller', value: 'STM32F103C8T6' },
    { spec: 'Core', value: 'ARM 32-bit Cortex-M3' },
    { spec: 'Operating Voltage', value: '3.3V' },
    { spec: 'Input Voltage', value: '2.0V - 3.6V' },
    { spec: 'Digital I/O Pins', value: '37' },
    { spec: 'Analog Input Pins', value: '10 (12-bit ADC)' },
    { spec: 'Flash Memory', value: '64 KB' },
    { spec: 'SRAM', value: '20 KB' },
    { spec: 'Clock Speed', value: '72 MHz' },
    { spec: 'Timers', value: '7 (including 3 general-purpose)' },
    { spec: 'Communication', value: 'USART x3, I2C x2, SPI x2, USB, CAN' },
    { spec: 'Dimensions', value: '53 x 22.5 mm' },
  ];

  const gettingStartedSteps = [
    {
      step: 1,
      title: 'Download STM32CubeIDE',
      description: 'Visit ST\'s website and download STM32CubeIDE. It includes the compiler, debugger, and HAL libraries.',
      tip: 'Registration required but free'
    },
    {
      step: 2,
      title: 'Install Development Tools',
      description: 'Run the installer and select all components. The installation includes ST-Link drivers.',
      tip: 'Requires approximately 2-3 GB disk space'
    },
    {
      step: 3,
      title: 'Get a Programmer',
      description: 'You\'ll need an ST-Link V2 programmer or use the board\'s USB if it supports DFU/bootloader mode.',
      tip: 'ST-Link V2 clones work well and are affordable'
    },
    {
      step: 4,
      title: 'Create a New Project',
      description: 'In STM32CubeIDE, create a new STM32 project and select STM32F103C8 as your target MCU.',
      tip: 'Use the graphical pin configurator'
    },
    {
      step: 5,
      title: 'Configure Peripherals',
      description: 'Use the graphical interface to enable GPIO, UART, or other peripherals you need.',
      tip: 'HAL code is auto-generated'
    },
    {
      step: 6,
      title: 'Write and Upload Code',
      description: 'Add your code in the USER CODE sections, build the project, and flash it to your board.',
      tip: 'Use Run → Debug to step through code'
    }
  ];

  const features = [
    {
      title: 'ARM Cortex-M3 Core',
      description: '32-bit processor with excellent performance-per-watt ratio.',
      icon: Cpu
    },
    {
      title: 'Rich Peripherals',
      description: 'DMA, USB, CAN, multiple UARTs, I2C, SPI interfaces.',
      icon: Layers
    },
    {
      title: 'Professional Tools',
      description: 'Industry-standard debugging with breakpoints and watch expressions.',
      icon: Settings
    },
    {
      title: 'HAL Libraries',
      description: 'Hardware Abstraction Layer for portable, readable code.',
      icon: Code
    }
  ];

  const projectIdeas = [
    {
      title: 'USB HID Device',
      difficulty: 'Intermediate',
      description: 'Create a custom USB keyboard or mouse using the built-in USB peripheral.'
    },
    {
      title: 'PWM Motor Control',
      difficulty: 'Intermediate',
      description: 'Use hardware timers to generate precise PWM signals for motor control.'
    },
    {
      title: 'UART Communication',
      difficulty: 'Beginner',
      description: 'Send and receive data between STM32 and a computer using serial communication.'
    },
    {
      title: 'ADC with DMA',
      difficulty: 'Advanced',
      description: 'High-speed analog data acquisition using DMA transfers.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]" data-testid="stm32-page">
      {/* Page Header */}
      <section className="bg-[#03234B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Breadcrumb className="mb-6 text-white/80">
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
        <Link to="/embedded" className="text-white/80 hover:text-[#0ea5e9] transition-colors duration-200">Embedded Boards</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbPage className="text-white">
        STM32
      </BreadcrumbPage>
    </BreadcrumbItem>

  </BreadcrumbList>
</Breadcrumb>
                    <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
              <Terminal className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-4"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                STM32
              </h1>
              <p className="text-white/80 text-lg">Professional-Grade ARM Microcontrollers</p>
            </div>
          </div>
          <p className="text-white/90 text-lg leading-relaxed max-w-3xl">
            STM32 is a family of 32-bit ARM Cortex-M microcontrollers from STMicroelectronics. 
            With superior performance, rich peripherals, and professional development tools, 
            STM32 is ideal for students advancing beyond Arduino into professional embedded development.
          </p>
        </div>
      </section>

      {/* Why STM32 Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Why Choose STM32?"
            subtitle="STM32 offers professional-grade features for serious embedded development."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-[#03234B]/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-[#03234B]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#0f172a] mb-2" style={{ fontFamily: 'Manrope' }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-[#64748b]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="STM32F103C8T6 (Blue Pill) Specifications"
            subtitle="Technical specifications of the popular STM32 Blue Pill development board."
          />
          
          <div className="glass-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#03234B]/5">
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
            subtitle="Follow these steps to set up your STM32 development environment."
          />
          
          <div className="space-y-6">
            {gettingStartedSteps.map((item) => (
              <div 
                key={item.step}
                className="glass-card p-6 lg:p-8"
                data-testid={`stm32-step-${item.step}`}
              >
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#03234B] flex items-center justify-center flex-shrink-0">
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
                    <div className="flex items-center gap-2 text-sm text-[#03234B]">
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
              href="https://www.st.com/en/development-tools/stm32cubeide.html" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="stm32-download-link"
            >
              <Button className="bg-[#03234B] hover:bg-[#03234B]/90 text-white rounded-full px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download STM32CubeIDE
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
            title="Project Ideas"
            subtitle="Challenge yourself with these STM32 projects."
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
                      : project.difficulty === 'Intermediate'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-red-100 text-red-700'
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
            subtitle="Watch these videos to get started with STM32 development."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <YouTubeEmbed 
                videoId="s0J4dSgutNc"
                title="STM32 Getting Started"
              />
              <p className="mt-3 text-sm text-[#64748b]">
                <strong>STM32 Getting Started</strong> - Introduction to STM32CubeIDE and your first project.
              </p>
            </div>
            <div>
              <YouTubeEmbed 
                videoId="hyZS2p1tW-g"
                title="STM32 HAL Programming"
              />
              <p className="mt-3 text-sm text-[#64748b]">
                <strong>STM32 HAL Programming</strong> - Understanding HAL libraries and peripheral configuration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link to="/arduino">
              <Button variant="outline" className="rounded-full">
                Back to Arduino
              </Button>
            </Link>
            <Link to="/resources">
              <Button className="bg-[#0ea5e9] hover:bg-[#0ea5e9]/90 text-white rounded-full">
                Learning Resources
                              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
