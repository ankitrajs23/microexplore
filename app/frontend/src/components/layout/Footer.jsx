import { Link, useLocation } from 'react-router-dom';
import { Cpu, BookOpen, Zap, CircuitBoard } from 'lucide-react';

const FOOTER_LINK_SECTIONS = [
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

const FOOTER_ICON_LINKS = [
  { path: '/semiconductors', label: 'Semiconductors', Icon: Cpu },
  { path: '/circuits', label: 'Circuits', Icon: Zap },
  { path: '/embedded', label: 'Embedded Boards', Icon: CircuitBoard },
  { path: '/resources', label: 'Resources', Icon: BookOpen },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();

  return (
    <footer className="border-t border-slate-800 bg-gradient-to-b from-[#0f172a] to-[#0b1220] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Link to="/" className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0ea5e9]">
                <Cpu className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>
                MicroExplore
              </span>
            </Link>

            <p className="mb-8 max-w-lg text-sm leading-relaxed text-slate-400">
              A comprehensive resource hub for K-12 students and educators exploring the fascinating world of
              microelectronics, semiconductors, and embedded systems.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {FOOTER_ICON_LINKS.map(({ path, label, Icon }) => {
                const active = pathname === path;

                return (
                  <Link
                    key={path}
                    to={path}
                    aria-label={label}
                    title={label}
                    className={`group flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 ${
                      active
                        ? 'bg-[#0ea5e9]/20 text-[#0ea5e9]'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-[#0ea5e9]'
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 transition-all duration-300 ${
                        active ? 'text-[#0ea5e9]' : 'text-slate-400 group-hover:scale-110 group-hover:text-white'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {FOOTER_LINK_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3
                className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-300"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={`${link.path}-${link.label}`}>
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 text-sm transition-colors duration-200 ${
                        pathname === link.path ? 'text-[#0ea5e9]' : 'text-slate-400 hover:text-white'
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

        <div className="mt-16 flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row">
          <p className="text-sm text-slate-500">© {currentYear} MicroExplore. A Resource Hub for Schools.</p>
          <p className="text-xs text-slate-500">Designed for K-12 Education</p>
        </div>
      </div>
    </footer>
  );
};