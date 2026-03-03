import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Menu, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';

export const Navigation = () => {
  const location = useLocation();

  const navLinks = [
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
      ]
    },
    { path: '/resources', label: 'Learning Resources' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
return location.pathname === path;
};  const isEmbeddedActive = () => ['/embedded', '/arduino', '/stm32'].includes(location.pathname);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm" data-testid="main-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            data-testid="logo-link"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0f172a] flex items-center justify-center group-hover:bg-[#0ea5e9] transition-colors duration-300">
              <Cpu className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-[#0f172a]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                MicroExplore
              </span>
              <p className="text-xs text-[#64748b] -mt-1">Discover Microelectronics</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.submenu ? (
                <div key={link.path} className="relative group">
  <button
  className={`px-4 py-2 text-sm font-semibold flex items-center gap-1 transition-all duration-200 relative group ${
    isEmbeddedActive()
      ? 'text-[#0ea5e9]'
      : 'text-[#475569]'
  }`}
>
  <span className="relative">
    {link.label}
    {!isEmbeddedActive() && (
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
    )}
  </span>

  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
</button>

  <div className="absolute left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-200 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
    {link.submenu.map((sublink) => (
      <Link
        key={sublink.path}
        to={sublink.path}
        className={`block px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
  isActive(sublink.path)
    ? 'text-[#0ea5e9] font-semibold bg-[#0ea5e9]/5'
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
  className={`group relative px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
    isActive(link.path)
      ? "bg-[#0ea5e9]/10 text-[#0ea5e9]"
      : "text-[#475569] hover:text-[#0f172a]"
  }`}
>
  {link.label}

  {/* Hover Underline Only For Inactive */}
  {!isActive(link.path) && (
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[1.5px] bg-[#0ea5e9]/70 transition-all duration-300 w-0 group-hover:w-full"></span>
  )}
</Link>
              )
            ))}
          </div>

          {/* Mobile Menu - Dropdown */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  data-testid="mobile-menu-toggle"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/" className={`w-full ${isActive('/') ? 'text-[#0ea5e9]' : ''}`}>
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/semiconductors" className={`w-full ${isActive('/semiconductors') ? 'text-[#0ea5e9]' : ''}`}>
                    Semiconductor Fundamentals
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/circuits" className={`w-full ${isActive('/circuits') ? 'text-[#0ea5e9]' : ''}`}>
                    Basic Circuits
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/embedded" className={`w-full ${isActive('/embedded') ? 'text-[#0ea5e9]' : ''}`}>
                    Embedded Boards Overview
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/arduino" className={`w-full pl-6 ${isActive('/arduino') ? 'text-[#0ea5e9]' : ''}`}>
                    Arduino
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/stm32" className={`w-full pl-6 ${isActive('/stm32') ? 'text-[#0ea5e9]' : ''}`}>
                    STM32
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/resources" className={`w-full ${isActive('/resources') ? 'text-[#0ea5e9]' : ''}`}>
                    Learning Resources
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
