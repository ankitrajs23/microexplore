import { Link, useLocation } from 'react-router-dom';
import { Cpu, Menu, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const EMBEDDED_PATHS = ['/embedded', '/arduino', '/stm32'];

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/semiconductors', label: 'Semiconductor Fundamentals' },
  { path: '/circuits', label: 'Basic Circuits' },
  {
    path: '/embedded',
    label: 'Embedded Boards',
    submenu: [
      { path: '/embedded', label: 'Overview' },
      { path: '/arduino', label: 'Arduino' },
      { path: '/stm32', label: 'STM32' },
    ],
  },
  { path: '/resources', label: 'Learning Resources' },
];

const MOBILE_MENU_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/semiconductors', label: 'Semiconductor Fundamentals' },
  { path: '/circuits', label: 'Basic Circuits' },
  { type: 'separator', key: 'separator-topics' },
  { path: '/embedded', label: 'Embedded Boards Overview' },
  { path: '/arduino', label: 'Arduino', isSubItem: true },
  { path: '/stm32', label: 'STM32', isSubItem: true },
  { type: 'separator', key: 'separator-embedded' },
  { path: '/resources', label: 'Learning Resources' },
];

export const Navigation = () => {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;
  const isEmbeddedActive = EMBEDDED_PATHS.includes(pathname);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm"
      data-testid="main-navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <Link to="/" className="group flex items-center gap-3" data-testid="logo-link">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f172a] transition-colors duration-300 group-hover:bg-[#0ea5e9]">
              <Cpu className="h-6 w-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-[#0f172a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                MicroExplore
              </span>
              <p className="-mt-1 text-xs text-[#64748b]">Discover Microelectronics</p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) =>
              link.submenu ? (
                <div key={link.path} className="group relative">
                  <button
                    type="button"
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      isEmbeddedActive ? 'text-[#0ea5e9]' : 'text-[#475569]'
                    }`}
                    aria-label="Open embedded boards menu"
                  >
                    <span className="relative">
                      {link.label}
                      {!isEmbeddedActive && (
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full" />
                      )}
                    </span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  <div className="invisible absolute left-0 mt-2 w-52 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.path}
                        to={sublink.path}
                        className={`block rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                          isActive(sublink.path)
                            ? 'bg-[#0ea5e9]/5 font-semibold text-[#0ea5e9]'
                            : 'text-[#475569] hover:bg-slate-100'
                        }`}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive(link.path) ? 'bg-[#0ea5e9]/10 text-[#0ea5e9]' : 'text-[#475569] hover:text-[#0f172a]'
                  }`}
                >
                  {link.label}
                  {!isActive(link.path) && (
                    <span className="absolute -bottom-1 left-1/2 h-[1.5px] w-0 -translate-x-1/2 bg-[#0ea5e9]/70 transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              ),
            )}
          </div>

          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="mobile-menu-toggle" aria-label="Open mobile menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56 bg-white">
                {MOBILE_MENU_ITEMS.map((item) => {
                  if (item.type === 'separator') {
                    return <DropdownMenuSeparator key={item.key} />;
                  }

                  return (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link
                        to={item.path}
                        className={`w-full ${item.isSubItem ? 'pl-6 ' : ''}${isActive(item.path) ? 'text-[#0ea5e9]' : ''}`}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};