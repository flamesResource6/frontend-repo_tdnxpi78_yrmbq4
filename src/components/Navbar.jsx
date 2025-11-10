import React, { useState } from 'react';
import { Menu, X, GraduationCap, Phone, BookOpen, Users } from 'lucide-react';

const primaryBlue = '#007BFF';
const primaryOrange = '#FF7A00';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Academic', href: '#academic' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Students', href: '#students' },
  { label: 'Teachers & Staff', href: '#teachers' },
  { label: 'Parents', href: '#parents' },
  { label: 'News & Events', href: '#news' },
  { label: 'Alumni', href: '#alumni' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl flex items-center justify-center shadow-sm" style={{ background: primaryBlue }}>
              <GraduationCap className="text-white" size={20} />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">BrightPath School</p>
              <p className="text-xs text-slate-500">Inspire. Learn. Lead.</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#admissions"
              className="px-4 py-2 text-sm font-medium rounded-full shadow-sm text-white"
              style={{ background: primaryOrange }}
            >
              Explore Admissions
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium rounded-full border"
              style={{ borderColor: primaryBlue, color: primaryBlue }}
            >
              Contact Us
            </a>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md border text-slate-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a
                href="#admissions"
                className="flex-1 px-3 py-2 text-sm font-medium rounded-md text-white text-center"
                style={{ background: primaryOrange }}
                onClick={() => setOpen(false)}
              >
                Admissions
              </a>
              <a
                href="#contact"
                className="flex-1 px-3 py-2 text-sm font-medium rounded-md text-center"
                style={{ border: `1px solid ${primaryBlue}`, color: primaryBlue }}
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="hidden md:block border-t border-slate-100 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-xs text-slate-600 flex items-center gap-6 overflow-x-auto">
          <div className="flex items-center gap-2"><BookOpen size={14} className="text-slate-500"/> Holistic Curriculum</div>
          <div className="flex items-center gap-2"><Users size={14} className="text-slate-500"/> Caring Community</div>
          <div className="flex items-center gap-2"><Phone size={14} className="text-slate-500"/> +1 (555) 123-4567</div>
        </div>
      </div>
    </header>
  );
}
