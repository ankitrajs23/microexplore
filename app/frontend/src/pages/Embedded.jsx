import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Cpu,
  Terminal,
  CheckCircle2,
  ArrowLeftRight
} from 'lucide-react';
import { SectionHeader } from '../components/shared/SectionHeader';
import { YouTubeEmbed } from '../components/shared/YouTubeEmbed';
import { Button } from '../components/ui/button';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

export default function Embedded() {
  const comparisonPoints = [
    {
      category: 'Best For',
      arduino: 'Beginners, education, rapid prototyping',
      stm32: 'Professional applications, performance-critical projects'
    },
    {
      category: 'Architecture',
      arduino: '8-bit AVR (ATmega328P)',
      stm32: '32-bit ARM Cortex-M'
    },
    {
      category: 'Clock Speed',
      arduino: '16 MHz',
      stm32: '72 MHz (up to 480 MHz on higher models)'
    },
    {
      category: 'Memory',
      arduino: '32 KB Flash, 2 KB SRAM',
      stm32: '64 KB+ Flash, 20 KB+ SRAM'
    },
    {
      category: 'Development Environment',
      arduino: 'Arduino IDE (simple, beginner-friendly)',
      stm32: 'STM32CubeIDE (professional, feature-rich)'
    },
    {
      category: 'Programming Language',
      arduino: 'Simplified C/C++ with Arduino framework',
      stm32: 'C/C++ with HAL/LL libraries'
    },
    {
      category: 'Cost',
      arduino: '$20-25 (official), $3-5 (clones)',
      stm32: '$2-5 (Blue Pill), varies by model'
    },
    {
      category: 'Community',
      arduino: 'Massive beginner-friendly community',
      stm32: 'Professional and industrial community'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]" data-testid="embedded-page">
      {/* Page Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Breadcrumb className="mb-6 text-[#64748b]">
  <BreadcrumbList>

    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link to="/">Home</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbPage className="text-[#0ea5e9]">
        Embedded Development Boards
      </BreadcrumbPage>
    </BreadcrumbItem>

  </BreadcrumbList>
</Breadcrumb>
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0f172a] mb-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Embedded Development Boards
          </h1>
          <p className="text-[#64748b] text-lg leading-relaxed max-w-3xl">
            Development boards provide a platform for learning microcontroller programming, 
            prototyping projects, and understanding embedded systems. Compare Arduino and 
            STM32 platforms to find the right fit for your projects.
          </p>
        </div>
      </section>

      {/* Board Selection Cards */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Choose Your Platform"
            subtitle="Select a development board to learn more about its features, specifications, and getting started guides."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Arduino Card */}
            <Link to="/arduino" className="block group">
              <div 
                className="glass-card overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                data-testid="arduino-card"
              >
                <div className="bg-[#00979D] p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <Cpu className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 
                        className="text-2xl font-bold text-white"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        Arduino
                      </h2>
                      <p className="text-white/80 text-sm">Beginner-Friendly Platform</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#64748b] mb-4">
                    Arduino is an open-source electronics platform based on easy-to-use hardware 
                    and software. Perfect for beginners, hobbyists, and educators.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-[#64748b]">
                      <CheckCircle2 className="w-4 h-4 text-[#00979D]" />
                      Simple C/C++ based programming
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#64748b]">
                      <CheckCircle2 className="w-4 h-4 text-[#00979D]" />
                      Extensive library ecosystem
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#64748b]">
                      <CheckCircle2 className="w-4 h-4 text-[#00979D]" />
                      Large community support
                    </div>
                  </div>
                  <span className="inline-flex items-center text-[#00979D] font-semibold group-hover:gap-3 transition-all">
                    Learn Arduino
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* STM32 Card */}
            <Link to="/stm32" className="block group">
              <div 
                className="glass-card overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                data-testid="stm32-card"
              >
                <div className="bg-[#03234B] p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <Terminal className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 
                        className="text-2xl font-bold text-white"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        STM32
                      </h2>
                      <p className="text-white/80 text-sm">Professional-Grade ARM MCU</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#64748b] mb-4">
                    STM32 is a family of 32-bit ARM Cortex-M microcontrollers offering higher 
                    performance for professional and industrial applications.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-[#64748b]">
                      <CheckCircle2 className="w-4 h-4 text-[#03234B]" />
                      32-bit ARM Cortex-M architecture
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#64748b]">
                      <CheckCircle2 className="w-4 h-4 text-[#03234B]" />
                      Higher clock speeds and memory
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#64748b]">
                      <CheckCircle2 className="w-4 h-4 text-[#03234B]" />
                      Industry-standard debugging
                    </div>
                  </div>
                  <span className="inline-flex items-center text-[#03234B] font-semibold group-hover:gap-3 transition-all">
                    Learn STM32
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Arduino vs STM32 Comparison"
            subtitle="Side-by-side comparison to help you choose the right platform for your needs."
          />
          
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full" data-testid="comparison-table">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left p-4 font-bold text-[#0f172a]" style={{ fontFamily: 'Manrope' }}>
                      <ArrowLeftRight className="w-5 h-5 inline mr-2" />
                      Category
                    </th>
                    <th className="text-left p-4 font-bold text-[#00979D]" style={{ fontFamily: 'Manrope' }}>
                      Arduino
                    </th>
                    <th className="text-left p-4 font-bold text-[#03234B]" style={{ fontFamily: 'Manrope' }}>
                      STM32
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((point, idx) => (
                    <tr key={point.category} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="p-4 font-medium text-[#0f172a] border-b border-slate-100">
                        {point.category}
                      </td>
                      <td className="p-4 text-[#64748b] text-sm border-b border-slate-100">
                        {point.arduino}
                      </td>
                      <td className="p-4 text-[#64748b] text-sm border-b border-slate-100">
                        {point.stm32}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Introduction Videos"
            subtitle="Get an overview of both platforms before diving deeper."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <YouTubeEmbed 
                videoId="nL34zDTPkcs"
                title="Arduino for Beginners"
              />
              <p className="mt-3 text-sm text-[#64748b]">
                <strong>Arduino for Beginners</strong> - Complete introduction to Arduino programming.
              </p>
            </div>
            <div>
              <YouTubeEmbed 
                videoId="rfBeq-Fu0hc"
                title="STM32 Getting Started"
              />
              <p className="mt-3 text-sm text-[#64748b]">
                <strong>STM32 Getting Started</strong> - Introduction to STM32 development environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Ready to Start Building?
          </h2>
          <p className="text-slate-400 mb-8">
            Choose a platform and begin your embedded development journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/arduino">
              <Button 
                className="bg-[#00979D] hover:bg-[#00979D]/90 text-white rounded-full px-8 py-6"
                data-testid="cta-arduino"
              >
                Start with Arduino
              </Button>
            </Link>
            <Link to="/stm32">
              <Button 
                className="bg-[#03234B] hover:bg-[#03234B]/90 text-white rounded-full px-8 py-6"
                data-testid="cta-stm32"
              >
                Start with STM32
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
