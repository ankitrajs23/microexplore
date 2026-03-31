import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Beaker,
  BookOpen,
  CircuitBoard,
  Cpu,
  GraduationCap,
  Lightbulb,
  Zap,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { SectionHeader } from '../components/shared/SectionHeader';

const TOPICS = [
  {
    title: 'Semiconductor Fundamentals',
    description: 'Understand the physics and materials that power modern electronics.',
    icon: Cpu,
    path: '/semiconductors',
    color: 'bg-[#0ea5e9]',
  },
  {
    title: 'Basic Circuits',
    description: 'Learn about circuit components, theory, and analysis techniques.',
    icon: Zap,
    path: '/circuits',
    color: 'bg-[#0d9488]',
  },
  {
    title: 'Embedded Development Boards',
    description: 'Get started with Arduino, STM32, and hands-on projects.',
    icon: CircuitBoard,
    path: '/embedded',
    color: 'bg-[#8b5cf6]',
  },
  {
    title: 'Learning Resources',
    description: 'Curated materials, videos, and external links for deeper learning.',
    icon: BookOpen,
    path: '/resources',
    color: 'bg-[#f59e0b]',
  },
];

const FEATURES = [
  {
    icon: Lightbulb,
    title: 'Hands-On Learning',
    description: 'Practical projects and experiments designed for classroom implementation.',
  },
  {
    icon: GraduationCap,
    title: 'K-12 Aligned',
    description: 'Content structured to support curriculum standards and learning objectives.',
  },
  {
    icon: Beaker,
    title: 'STEM Integration',
    description: 'Cross-disciplinary connections between physics, math, and engineering.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="home-page">
      <section className="relative overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-7">
              <span className="mb-6 inline-block rounded-full bg-[#0ea5e9]/20 px-4 py-1.5 text-sm font-medium text-[#0ea5e9]">
                K-12 Educational Resource
              </span>
              <h1
                className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Discover the World of <span className="text-[#0ea5e9]">Microelectronics</span>
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                A comprehensive resource hub for students and educators exploring semiconductors, circuits, and
                embedded systems.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/semiconductors">
                  <Button
                    className="rounded-full bg-[#0ea5e9] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#0ea5e9]/30 transition-all hover:-translate-y-0.5 hover:bg-[#0284c7]"
                    data-testid="cta-start-learning"
                  >
                    Start Learning
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button
                    variant="outline"
                    className="rounded-full border-slate-600 px-8 py-6 text-base font-medium text-white hover:bg-slate-800"
                    data-testid="cta-browse-resources"
                  >
                    Browse Resources
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-[#0ea5e9]/20">
                <img
                  src="https://images.unsplash.com/photo-1760539165482-c0c83b052065?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxtaWNyb2NoaXAlMjBzaWxpY29uJTIwd2FmZXIlMjBjbG9zZSUyMHVwJTIwYmx1ZSUyMHRlYWwlMjBsaWdodGluZ3xlbnwwfHx8fDE3NzE2NzcxNTl8MA&ixlib=rb-4.1.0&q=85"
                  alt="Microchip close-up"
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Explore Topics"
            subtitle="Structured content designed for progressive learning, from fundamentals to hands-on projects."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TOPICS.map((topic) => (
              <Link key={topic.path} to={topic.path} className="group block">
                <div
                  className="glass-card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-8"
                  data-testid={`topic-card-${topic.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${topic.color} transition-transform group-hover:scale-110`}
                  >
                    <topic.icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="mb-2 text-xl font-bold text-[#0f172a] transition-colors group-hover:text-[#0ea5e9]"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {topic.title}
                  </h3>
                  <p className="mb-4 text-[#64748b]">{topic.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-[#0ea5e9]">
                    Explore Topic
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Learn Microelectronics?"
            subtitle="Understanding electronics opens doors to innovation, problem-solving, and future careers in technology."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="text-center"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0ea5e9]/10">
                  <feature.icon className="h-8 w-8 text-[#0ea5e9]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0f172a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#64748b]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f172a] py-20 lg:py-24">
        <div className="absolute inset-0 grid-pattern opacity-5" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400">
            Start with the fundamentals of semiconductors and build your way up to creating real projects with embedded
            systems.
          </p>
          <Link to="/semiconductors">
            <Button
              className="rounded-full bg-[#0ea5e9] px-10 py-6 text-base font-semibold text-white shadow-lg shadow-[#0ea5e9]/30 transition-all hover:-translate-y-0.5 hover:bg-[#0284c7]"
              data-testid="cta-get-started"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}