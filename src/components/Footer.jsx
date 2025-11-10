import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const primaryBlue = '#007BFF';
const primaryOrange = '#FF7A00';

function BatikFooterBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden="true">
      <defs>
        <pattern id="batikFooter" width="140" height="140" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#0f172a">
            <path d="M20 70c30-40 70-40 100 0M20 70c30 40 70 40 100 0" strokeWidth="0.6" />
            <circle cx="70" cy="70" r="14" strokeWidth="0.6" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#batikFooter)" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white" id="footer">
      <BatikFooterBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <p className="text-lg font-semibold text-slate-900">BrightPath School</p>
            <p className="mt-2 text-sm text-slate-600">Inspire. Learn. Lead.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="p-2 rounded-full text-white" style={{ background: primaryBlue }}><Facebook size={16} /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-full text-white" style={{ background: primaryBlue }}><Twitter size={16} /></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-full text-white" style={{ background: primaryOrange }}><Instagram size={16} /></a>
            </div>
          </div>
          <div>
            <p className="font-medium text-slate-900">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {['Admissions','Academic','Students','News & Events'].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace(/ & /g,'-').split(' ').join('')}`} className="hover:text-slate-900">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-slate-900">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {['PTA','Policies','Guides','Alumni'].map((l) => (
                <li key={l}><a href="#" className="hover:text-slate-900">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-slate-900">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><MapPin size={16}/> 123 Learning Ave</li>
              <li className="flex items-center gap-2"><Phone size={16}/> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail size={16}/> hello@brightpath.edu</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-xs text-slate-500">© {new Date().getFullYear()} BrightPath School. All rights reserved.</div>
      </div>
    </footer>
  );
}
