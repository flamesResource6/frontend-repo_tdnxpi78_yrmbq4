import React from 'react';
import { ArrowRight } from 'lucide-react';

const primaryBlue = '#007BFF';
const primaryOrange = '#FF7A00';

function BatikBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden="true">
      <defs>
        <pattern id="batik" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
          <g fill="none" stroke="#0f172a">
            <path d="M10 60c20-30 80-30 100 0M10 60c20 30 80 30 100 0" strokeWidth="0.6" />
            <circle cx="60" cy="60" r="18" strokeWidth="0.6" />
            <path d="M0 0h120v120H0z" strokeWidth="0.3" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#batik)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50 pointer-events-none" />
      <BatikBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border mb-4" style={{ borderColor: primaryOrange, color: primaryOrange }}>Trusted. Bright. Caring.</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              BrightPath School
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Inspiring young minds to learn, grow, and lead with character.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#admissions" className="px-5 py-3 rounded-full text-white shadow-md" style={{ background: primaryOrange }}>
                Explore Admissions
              </a>
              <a href="#contact" className="px-5 py-3 rounded-full border flex items-center gap-2" style={{ borderColor: primaryBlue, color: primaryBlue }}>
                Contact Us <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { label: 'Students', value: '1,200+' },
                { label: 'Clubs', value: '30+' },
                { label: 'Awards', value: '50+' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white shadow-sm p-4 text-center">
                  <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-72 md:h-[420px] rounded-3xl bg-gradient-to-br from-blue-50 to-orange-50 shadow-inner">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full blur-2xl opacity-40" style={{ background: primaryBlue }} />
            <div className="absolute -left-8 -bottom-8 h-40 w-40 rounded-full blur-2xl opacity-40" style={{ background: primaryOrange }} />
            <div className="absolute inset-6 rounded-3xl border border-white/60 backdrop-blur bg-white/60 flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-sm text-slate-600">“Education is the most powerful weapon.”</p>
                <p className="mt-2 font-semibold text-slate-900">— Nelson Mandela</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-4">
          {[{
            title: 'Admissions', desc: 'How to apply, requirements, and key dates.', href: '#admissions'
          }, {
            title: 'Academics', desc: 'Curriculum, departments, and faculty.', href: '#academic'
          }, {
            title: 'Contact', desc: 'Get in touch or visit our campus.', href: '#contact'
          }].map((c) => (
            <a key={c.title} href={c.href} className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{c.title}</h3>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: primaryBlue, color: 'white' }}>Explore</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
