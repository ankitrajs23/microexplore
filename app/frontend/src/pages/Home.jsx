import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  CircuitBoard, 
  BookOpen, 
  ArrowRight,
  Lightbulb,
  GraduationCap,
  Beaker
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { SectionHeader } from '../components/shared/SectionHeader';

export default function Home() {
  const topics = [
    {
      title: 'Semiconductor Fundamentals',
      description: 'Understand the physics and materials that power modern electronics.',
      icon: Cpu,
      path: '/semiconductors',
      color: 'bg-[#0ea5e9]'
    },
    {
      title: 'Basic Circuits',
      description: 'Learn about circuit components, theory, and analysis techniques.',
      icon: Zap,
      path: '/circuits',
      color: 'bg-[#0d9488]'
    },
    {
      title: 'Embedded Development Boards',
      description: 'Get started with Arduino, STM32, and hands-on projects.',
      icon: CircuitBoard,
      path: '/embedded',
      color: 'bg-[#8b5cf6]'
    },
    {
      title: 'Learning Resources',
      description: 'Curated materials, videos, and external links for deeper learning.',
      icon: BookOpen,
      path: '/resources',
      color: 'bg-[#f59e0b]'
    }
  ];

  const features = [
    {
      icon: Lightbulb,
      title: 'Hands-On Learning',
      description: 'Practical projects and experiments designed for classroom implementation.'
    },
    {
      icon: GraduationCap,
      title: 'K-12 Aligned',
      description: 'Content structured to support curriculum standards and learning objectives.'
    },
    {
      icon: Beaker,
      title: 'STEM Integration',
      description: 'Cross-disciplinary connections between physics, math, and engineering.'
    }
  ];

  return (
    <div className="min-h-screen" data-testid="home-page">
      {/* Hero Section - Tetris Grid */}
      <section className="relative bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Hero Content - col-span-8 */}
            <div className="lg:col-span-7 relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0ea5e9]/20 text-[#0ea5e9] text-sm font-medium mb-6">
                K-12 Educational Resource
              </span>
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Discover the World of{' '}
                <span className="text-[#0ea5e9]">Microelectronics</span>
              </h1>
              <p className="text-slate-300 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed">
                A comprehensive resource hub for students and educators exploring 
                semiconductors, circuits, and embedded systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/semiconductors">
                  <Button 
                    className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-[#0ea5e9]/30 transition-all hover:-translate-y-0.5"
                    data-testid="cta-start-learning"
                  >
                    Start Learning
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button 
                    variant="outline"
                    className="border-slate-600 text-white hover:bg-slate-800 rounded-full px-8 py-6 text-base font-medium"
                    data-testid="cta-browse-resources"
                  >
                    Browse Resources
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image - col-span-4 */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0ea5e9]/20">
                <img 
                  src="https://images.unsplash.com/photo-1760539165482-c0c83b052065?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxtaWNyb2NoaXAlMjBzaWxpY29uJTIwd2FmZXIlMjBjbG9zZSUyMHVwJTIwYmx1ZSUyMHRlYWwlMjBsaWdodGluZ3xlbnwwfHx8fDE3NzE2NzcxNTl8MA&ixlib=rb-4.1.0&q=85"
                  alt="Microchip close-up"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Overview - Bento Grid */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Explore Topics"
            subtitle="Structured content designed for progressive learning, from fundamentals to hands-on projects."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <Link key={topic.path} to={topic.path} className="block group">
                <div 
                  className="glass-card p-6 lg:p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  data-testid={`topic-card-${topic.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`w-14 h-14 rounded-xl ${topic.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <topic.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 
                    className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#0ea5e9] transition-colors"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {topic.title}
                  </h3>
                  <p className="text-[#64748b] mb-4">
                    {topic.description}
                  </p>
                  <span className="inline-flex items-center text-[#0ea5e9] font-medium text-sm">
                    Explore Topic
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Why Learn Microelectronics?"
            subtitle="Understanding electronics opens doors to innovation, problem-solving, and future careers in technology."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="text-center"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0ea5e9]/10 flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-8 h-8 text-[#0ea5e9]" strokeWidth={1.5} />
                </div>
                <h3 
                  className="text-lg font-bold text-[#0f172a] mb-2"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0f172a] mb-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Ready to Begin Your Journey?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Start with the fundamentals of semiconductors and build your way up to 
            creating real projects with embedded systems.
          </p>
          <Link to="/semiconductors">
            <Button 
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-full px-10 py-6 text-base font-semibold shadow-lg shadow-[#0ea5e9]/30 transition-all hover:-translate-y-0.5"
              data-testid="cta-get-started"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
