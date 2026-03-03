import { 
  Atom, 
  Layers, 
  Zap, 
  CircleDot,
  Plus,
  Minus
} from 'lucide-react';
import { Link } from "react-router-dom";
import { SectionHeader } from '../components/shared/SectionHeader';
import { ContentCard } from '../components/shared/ContentCard';
import { YouTubeEmbed } from '../components/shared/YouTubeEmbed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

export default function Semiconductors() {
  const concepts = [
    {
      title: 'Conductors',
      description: 'Materials like copper and silver that allow electrons to flow freely due to loosely bound valence electrons.',
      icon: Zap
    },
    {
      title: 'Insulators',
      description: 'Materials like rubber and glass that resist electron flow due to tightly bound electrons.',
      icon: Layers
    },
    {
      title: 'Semiconductors',
      description: 'Materials like silicon and germanium with conductivity between conductors and insulators, controllable through doping.',
      icon: CircleDot
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]" data-testid="semiconductors-page">
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
        Semiconductor Fundamentals
      </BreadcrumbPage>
    </BreadcrumbItem>

  </BreadcrumbList>
</Breadcrumb>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0f172a] mb-4"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Semiconductor Fundamentals
              </h1>
              <p className="text-[#64748b] text-lg leading-relaxed">
                Semiconductors are the foundation of modern electronics. Understanding 
                their properties and behavior is essential for grasping how computers, 
                smartphones, and countless other devices function.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1760539165482-c0c83b052065?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxtaWNyb2NoaXAlMjBzaWxpY29uJTIwd2FmZXIlMjBjbG9zZSUyMHVwJTIwYmx1ZSUyMHRlYWwlMjBsaWdodGluZ3xlbnwwfHx8fDE3NzE2NzcxNTl8MA&ixlib=rb-4.1.0&q=85"
                alt="Silicon wafer"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="What is a Semiconductor?"
            subtitle="A semiconductor is a material with electrical conductivity between that of a conductor and an insulator."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {concepts.map((concept) => (
              <ContentCard 
                key={concept.title}
                title={concept.title}
                description={concept.description}
                icon={concept.icon}
              />
            ))}
          </div>

          <div className="glass-card p-6 lg:p-8">
            <h3 
              className="text-xl font-bold text-[#0f172a] mb-4"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Key Properties
            </h3>
            <ul className="space-y-3 text-[#64748b]">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#0ea5e9] text-sm font-bold">1</span>
                </div>
                <span><strong className="text-[#0f172a]">Temperature Sensitivity:</strong> Semiconductor conductivity increases with temperature, unlike metals.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#0ea5e9] text-sm font-bold">2</span>
                </div>
                <span><strong className="text-[#0f172a]">Band Gap:</strong> The energy gap between valence and conduction bands determines electrical properties.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#0ea5e9] text-sm font-bold">3</span>
                </div>
                <span><strong className="text-[#0f172a]">Controllable Conductivity:</strong> Adding impurities (doping) allows precise control of electrical behavior.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Atomic Structure Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Atomic Structure"
            subtitle="Understanding the crystal lattice structure of silicon and how it enables semiconductor behavior."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center">
                  <Atom className="w-5 h-5 text-[#0ea5e9]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a]" style={{ fontFamily: 'Manrope' }}>
                  Silicon Crystal Structure
                </h3>
              </div>
              <p className="text-[#64748b] mb-4">
                Silicon atoms have 4 valence electrons and form a diamond cubic crystal structure. 
                Each silicon atom bonds with 4 neighboring atoms through covalent bonds, sharing 
                electrons to achieve a stable configuration.
              </p>
              <div className="bg-slate-50 rounded-lg p-4 border border-dashed border-slate-300">
                <p className="text-sm text-slate-500 text-center">
                  Diagram: Silicon Crystal Lattice Structure
                </p>
                <div className="grid grid-cols-3 gap-2 mt-4 max-w-xs mx-auto">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-[#0ea5e9]/20 border-2 border-[#0ea5e9] mx-auto flex items-center justify-center"
                    >
                      <span className="text-xs font-bold text-[#0ea5e9]">Si</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <h3 className="text-lg font-bold text-[#0f172a] mb-4" style={{ fontFamily: 'Manrope' }}>
                Energy Band Theory
              </h3>
              <p className="text-[#64748b] mb-4">
                In semiconductors, electrons occupy energy levels called bands. The valence band 
                contains electrons bound to atoms, while the conduction band allows electron movement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-full h-8 bg-[#0ea5e9]/20 rounded flex items-center justify-center">
                    <span className="text-sm font-medium text-[#0ea5e9]">Conduction Band</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="h-16 w-px border-l-2 border-dashed border-slate-300 relative">
                    <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-xs text-slate-500">Band Gap</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full h-8 bg-[#0d9488]/20 rounded flex items-center justify-center">
                    <span className="text-sm font-medium text-[#0d9488]">Valence Band</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doping Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Doping: N-Type and P-Type Semiconductors"
            subtitle="Doping is the process of adding impurities to pure semiconductors to modify their electrical properties."
          />
          
          <Tabs defaultValue="n-type" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8 bg-slate-100">
              <TabsTrigger 
                value="n-type" 
                className="data-[state=active]:bg-[#0ea5e9] data-[state=active]:text-white"
                data-testid="tab-n-type"
              >
                N-Type Semiconductor
              </TabsTrigger>
              <TabsTrigger 
                value="p-type"
                className="data-[state=active]:bg-[#0d9488] data-[state=active]:text-white"
                data-testid="tab-p-type"
              >
                P-Type Semiconductor
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="n-type">
              <div className="glass-card p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0ea5e9] flex items-center justify-center">
                        <Minus className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0f172a]" style={{ fontFamily: 'Manrope' }}>
                        N-Type (Negative)
                      </h3>
                    </div>
                    <p className="text-[#64748b] mb-4">
                      Created by adding pentavalent impurities (5 valence electrons) like 
                      phosphorus, arsenic, or antimony to silicon.
                    </p>
                    <ul className="space-y-2 text-[#64748b]">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                        Extra electron becomes a free charge carrier
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                        Majority carriers: Electrons
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#0ea5e9]" />
                        Minority carriers: Holes
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-6 border border-dashed border-slate-300">
                    <p className="text-sm text-slate-500 text-center mb-4">
                      Diagram: N-Type Doping with Phosphorus
                    </p>
                    <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
                      <div className="w-12 h-12 rounded-full bg-slate-200 mx-auto flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-600">Si</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#0ea5e9] mx-auto flex items-center justify-center relative">
                        <span className="text-xs font-bold text-white">P</span>
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                          <span className="text-[8px] font-bold">e-</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-slate-200 mx-auto flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-600">Si</span>
                      </div>
                    </div>
                    <p className="text-xs text-center text-slate-400 mt-4">
                      Extra electron from phosphorus is free to move
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="p-type">
              <div className="glass-card p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0d9488] flex items-center justify-center">
                        <Plus className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0f172a]" style={{ fontFamily: 'Manrope' }}>
                        P-Type (Positive)
                      </h3>
                    </div>
                    <p className="text-[#64748b] mb-4">
                      Created by adding trivalent impurities (3 valence electrons) like 
                      boron, aluminum, or gallium to silicon.
                    </p>
                    <ul className="space-y-2 text-[#64748b]">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#0d9488]" />
                        Missing electron creates a "hole"
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#0d9488]" />
                        Majority carriers: Holes
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#0d9488]" />
                        Minority carriers: Electrons
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-6 border border-dashed border-slate-300">
                    <p className="text-sm text-slate-500 text-center mb-4">
                      Diagram: P-Type Doping with Boron
                    </p>
                    <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
                      <div className="w-12 h-12 rounded-full bg-slate-200 mx-auto flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-600">Si</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#0d9488] mx-auto flex items-center justify-center relative">
                        <span className="text-xs font-bold text-white">B</span>
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-dashed border-yellow-400 flex items-center justify-center">
                          <span className="text-[8px] text-yellow-600">h+</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-slate-200 mx-auto flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-600">Si</span>
                      </div>
                    </div>
                    <p className="text-xs text-center text-slate-400 mt-4">
                      Missing electron creates a "hole" that acts as positive charge
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Educational Videos"
            subtitle="Watch these videos to deepen your understanding of semiconductor physics."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <YouTubeEmbed 
                videoId="33vbFFFn04k"
                title="How Semiconductors Work"
              />
              <p className="mt-3 text-sm text-[#64748b]">
                <strong>How Semiconductors Work</strong> - A comprehensive introduction to semiconductor physics.
              </p>
            </div>
            <div>
              <YouTubeEmbed 
                videoId="IcrBqCFLHIY"
                title="P-N Junction Explained"
              />
              <p className="mt-3 text-sm text-[#64748b]">
                <strong>P-N Junction Explained</strong> - Understanding diodes and transistors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
