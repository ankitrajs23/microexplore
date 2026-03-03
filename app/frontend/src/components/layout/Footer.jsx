import { Link } from 'react-router-dom';
import { Cpu, BookOpen, Zap, CircuitBoard } from 'lucide-react';
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const footerLinks = [
    {
      title: 'Topics',
      links: [
        { label: 'Semiconductor Fundamentals', path: '/semiconductors' },
        { label: 'Basic Circuits', path: '/circuits' },
        { label: 'Embedded Boards', path: '/embedded' },
        { label: 'Learning Resources', path: '/resources' },
      ],
    },
    {
      title: 'Development Boards',
      links: [
        { label: 'Arduino Guide', path: '/arduino' },
        { label: 'STM32 Guide', path: '/stm32' },
        { label: 'Board Comparison', path: '/embedded' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#0b1220] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-3">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0ea5e9] flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
                MicroExplore
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg mb-8">
              A comprehensive resource hub for K-12 students and educators exploring 
              the fascinating world of microelectronics, semiconductors, and embedded systems.
            </p>
            <div className="flex items-center gap-4 mt-6">
  <Link
  to="/semiconductors"
  className={`group flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
  location.pathname === "/semiconductors"
    ? "bg-[#0ea5e9]/20 text-[#0ea5e9]"
    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-[#0ea5e9]"
}`}
>
<Cpu className={`w-6 h-6 transition-all duration-300 ${
  location.pathname === "/semiconductors"
    ? "text-[#0ea5e9]"
    : "text-slate-400 group-hover:text-white group-hover:scale-110"
}`} />
<span className="mt-2 text-xs text-slate-400 group-hover:text-white group-hover:tracking-wide transition-all duration-300">
    </span>
  </Link>

  <Link
  to="/circuits"
  className={`group flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
  location.pathname === "/circuits"
    ? "bg-[#0ea5e9]/20 text-[#0ea5e9]"
    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-[#0ea5e9]"
}`}
>
    <Zap className={`w-6 h-6 transition-all duration-300 ${
  location.pathname === "/circuits"
    ? "text-[#0ea5e9]"
    : "text-slate-400 group-hover:text-white group-hover:scale-110"
}`} />
<span className="mt-2 text-xs text-slate-400 group-hover:text-white group-hover:tracking-wide transition-all duration-300">
    </span>
  </Link>

  <Link
  to="/embedded"
  className={`group flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
  location.pathname === "/embedded"
    ? "bg-[#0ea5e9]/20 text-[#0ea5e9]"
    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-[#0ea5e9]"
}`}
>
    <CircuitBoard className={`w-6 h-6 transition-all duration-300 ${
  location.pathname === "/embedded"
    ? "text-[#0ea5e9]"
    : "text-slate-400 group-hover:text-white group-hover:scale-110"
}`} />
<span className="mt-2 text-xs text-slate-400 group-hover:text-white group-hover:tracking-wide transition-all duration-300">
    </span>
  </Link>

  <Link
  to="/resources"
  className={`group flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
  location.pathname === "/resources"
    ? "bg-[#0ea5e9]/20 text-[#0ea5e9]"
    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-[#0ea5e9]"
}`}
>
    <BookOpen className={`w-6 h-6 transition-all duration-300 ${
  location.pathname === "/resources"
    ? "text-[#0ea5e9]"
    : "text-slate-400 group-hover:text-white group-hover:scale-110"
}`} />
<span className="mt-2 text-xs text-slate-400 group-hover:text-white group-hover:tracking-wide transition-all duration-300">
    </span>
  </Link>

</div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 
                className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-5"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
  <li key={link.path + link.label}>
    <Link
      to={link.path}
      className={`text-sm transition-colors duration-200 flex items-center gap-1 ${
        location.pathname === link.path
          ? "text-[#0ea5e9]"
          : "text-slate-400 hover:text-white"
      }`}
    >
      {link.label}
    </Link>
  </li>
))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-sm">
          <p className="text-slate-500 text-sm">
            © {currentYear} MicroExplore. A Resource Hub for Schools.
          </p>
          <p className="text-slate-500 text-xs">
            Designed for K-12 Education
          </p>
        </div>
      </div>
    </footer>
  );
};
