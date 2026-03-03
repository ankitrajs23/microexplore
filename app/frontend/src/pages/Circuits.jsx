import { 
  Zap, 
  Battery,
  Circle,
  ToggleLeft,
  Gauge,
  Waves,
  Cable
} from 'lucide-react';

import { SectionHeader } from '../components/shared/SectionHeader';
import { ContentCard } from '../components/shared/ContentCard';
import { YouTubeEmbed } from '../components/shared/YouTubeEmbed';
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export default function Circuits() {
  const components = [
    {
      name: 'Resistor',
      symbol: 'R',
      unit: 'Ohms (Ω)',
      description: 'Limits current flow and divides voltage. Dissipates energy as heat.',
      color: 'bg-amber-500'
    },
    {
      name: 'Capacitor',
      symbol: 'C',
      unit: 'Farads (F)',
      description: 'Stores electrical energy in an electric field. Used for filtering and timing.',
      color: 'bg-blue-500'
    },
    {
      name: 'Inductor',
      symbol: 'L',
      unit: 'Henrys (H)',
      description: 'Stores energy in a magnetic field. Opposes changes in current.',
      color: 'bg-purple-500'
    },
    {
      name: 'Diode',
      symbol: 'D',
      unit: 'Forward Voltage (V)',
      description: 'Allows current flow in one direction only. Used for rectification.',
      color: 'bg-green-500'
    },
    {
      name: 'Transistor',
      symbol: 'Q',
      unit: 'Current Gain (β)',
      description: 'Amplifies or switches electronic signals. Foundation of digital electronics.',
      color: 'bg-red-500'
    },
    {
      name: 'LED',
      symbol: 'LED',
      unit: 'Forward Voltage (V)',
      description: 'Emits light when current flows through. Energy-efficient light source.',
      color: 'bg-cyan-500'
    }
  ];

  const laws = [
    {
      title: "Ohm's Law",
      formula: "V = I × R",
      explanation: "Voltage equals current multiplied by resistance. This fundamental relationship describes how voltage, current, and resistance interact in a circuit.",
      example: "If a 9V battery powers a 100Ω resistor: I = V/R = 9V / 100Ω = 0.09A (90mA)"
    },
    {
      title: "Kirchhoff's Voltage Law (KVL)",
      formula: "ΣV = 0",
      explanation: "The sum of all voltages around any closed loop in a circuit equals zero. Voltage rises equal voltage drops.",
      example: "In a series circuit with 12V source, V₁ = 4V, V₂ = 5V, then V₃ must equal 3V."
    },
    {
      title: "Kirchhoff's Current Law (KCL)",
      formula: "ΣI = 0",
      explanation: "The sum of currents entering a node equals the sum of currents leaving. Charge is conserved.",
      example: "If 5A enters a node and two branches leave, they might carry 3A and 2A respectively."
    },
    {
      title: "Power Equation",
      formula: "P = V × I = I²R = V²/R",
      explanation: "Power dissipated in a circuit element can be calculated using voltage, current, and resistance.",
      example: "A 10Ω resistor with 2A current dissipates: P = I²R = 4 × 10 = 40W"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]" data-testid="circuits-page">
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
        Basic Circuits
      </BreadcrumbPage>
    </BreadcrumbItem>

  </BreadcrumbList>
</Breadcrumb>
                    <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0f172a] mb-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Basic Circuits
          </h1>
          <p className="text-[#64748b] text-lg leading-relaxed max-w-3xl">
            Circuits are the foundation of all electronic devices. Understanding circuit 
            theory, components, and analysis techniques is essential for designing and 
            troubleshooting electronic systems.
          </p>
        </div>
      </section>

      {/* Circuit Theory Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Circuit Theory Fundamentals"
            subtitle="Master the essential laws that govern electrical circuits."
          />
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {laws.map((law, index) => (
              <AccordionItem 
                key={law.title} 
                value={`item-${index}`}
                className="glass-card px-6 border-none"
                data-testid={`accordion-${law.title.toLowerCase().replace(/['\s]/g, '-')}`}
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-[#0ea5e9]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0f172a]" style={{ fontFamily: 'Manrope' }}>
                        {law.title}
                      </h3>
                      <code className="text-sm text-[#0ea5e9] font-mono">{law.formula}</code>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-14">
                    <p className="text-[#64748b] mb-4">{law.explanation}</p>
                    <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-[#0ea5e9]">
                      <p className="text-sm">
                        <strong className="text-[#0f172a]">Example: </strong>
                        <span className="text-[#64748b]">{law.example}</span>
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Components Gallery */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Electronic Components"
            subtitle="Learn about the building blocks of electronic circuits."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component) => (
              <div 
                key={component.name}
                className="glass-card p-6"
                data-testid={`component-card-${component.name.toLowerCase()}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${component.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'JetBrains Mono' }}>
                      {component.symbol}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#64748b] bg-slate-100 px-2 py-1 rounded">
                    {component.unit}
                  </span>
                </div>
                <h3 
                  className="text-lg font-bold text-[#0f172a] mb-2"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {component.name}
                </h3>
                <p className="text-[#64748b] text-sm">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circuit Types */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Series vs Parallel Circuits"
            subtitle="Understanding how components can be connected in different configurations."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Series Circuit */}
            <div className="glass-card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center">
                  <Cable className="w-5 h-5 text-[#0ea5e9]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]" style={{ fontFamily: 'Manrope' }}>
                  Series Circuit
                </h3>
              </div>
              
              {/* Simple Series Diagram */}
              <div className="bg-slate-50 rounded-lg p-6 mb-4 border border-dashed border-slate-300">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center">
                    <Battery className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-12 h-1 bg-[#0f172a]" />
                  <div className="w-8 h-4 rounded bg-slate-300 flex items-center justify-center">
                    <span className="text-[8px] font-bold">R1</span>
                  </div>
                  <div className="w-12 h-1 bg-[#0f172a]" />
                  <div className="w-8 h-4 rounded bg-slate-300 flex items-center justify-center">
                    <span className="text-[8px] font-bold">R2</span>
                  </div>
                  <div className="w-12 h-1 bg-[#0f172a]" />
                  <div className="w-8 h-4 rounded bg-slate-300 flex items-center justify-center">
                    <span className="text-[8px] font-bold">R3</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 text-[#64748b] text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                  Same current flows through all components
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                  Total resistance: R<sub>total</sub> = R₁ + R₂ + R₃
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                  Voltage divides across components
                </li>
              </ul>
            </div>

            {/* Parallel Circuit */}
            <div className="glass-card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0d9488]/10 flex items-center justify-center">
                  <Waves className="w-5 h-5 text-[#0d9488]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]" style={{ fontFamily: 'Manrope' }}>
                  Parallel Circuit
                </h3>
              </div>
              
              {/* Simple Parallel Diagram */}
              <div className="bg-slate-50 rounded-lg p-6 mb-4 border border-dashed border-slate-300">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center">
                      <Battery className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-1 bg-[#0f172a]" />
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center">
                        <div className="w-6 h-1 bg-[#0f172a]" />
                        <div className="w-8 h-4 rounded bg-slate-300 flex items-center justify-center">
                          <span className="text-[8px] font-bold">R1</span>
                        </div>
                        <div className="w-6 h-1 bg-[#0f172a]" />
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-1 bg-[#0f172a]" />
                        <div className="w-8 h-4 rounded bg-slate-300 flex items-center justify-center">
                          <span className="text-[8px] font-bold">R2</span>
                        </div>
                        <div className="w-6 h-1 bg-[#0f172a]" />
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-1 bg-[#0f172a]" />
                        <div className="w-8 h-4 rounded bg-slate-300 flex items-center justify-center">
                          <span className="text-[8px] font-bold">R3</span>
                        </div>
                        <div className="w-6 h-1 bg-[#0f172a]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 text-[#64748b] text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0d9488]" />
                  Same voltage across all components
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0d9488]" />
                  Total resistance: 1/R<sub>total</sub> = 1/R₁ + 1/R₂ + 1/R₃
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0d9488]" />
                  Current divides among branches
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Educational Videos"
            subtitle="Visual explanations of circuit concepts and analysis techniques."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <YouTubeEmbed 
                videoId="mc979OhitAg"
                title="Circuit Analysis Introduction"
              />
              <p className="mt-3 text-sm text-[#64748b]">
                <strong>Circuit Analysis Basics</strong> - Introduction to analyzing electronic circuits.
              </p>
            </div>
            <div>
              <YouTubeEmbed 
                videoId="F_vLWkkOETI"
                title="Ohm's Law Explained"
              />
              <p className="mt-3 text-sm text-[#64748b]">
                <strong>Ohm's Law Explained</strong> - Understanding the fundamental relationship in circuits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
