import React from 'react';
import { Users, Trophy, Building2, CalendarDays, BookOpen, FileText, HelpCircle, Shield, HeartHandshake, MapPin, Mail, Phone, School, Star } from 'lucide-react';

const primaryBlue = '#007BFF';
const primaryOrange = '#FF7A00';

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
        <div className="mt-8 space-y-6 text-slate-600">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <div>
      <Section id="about" title="About Us">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-900">Overview & History</h3>
            <p className="mt-2 text-sm">Founded in 1998, BrightPath fosters a culture of curiosity, compassion, and excellence.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-900">Vision & Mission</h3>
            <p className="mt-2 text-sm">We empower students to lead with integrity and innovate for the common good.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-900">Principal’s Message</h3>
            <p className="mt-2 text-sm">“Every child is a story being written. We are honored to be a chapter in theirs.”</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {["STEM Labs","Library","Sports Arena","Art Studio"].map((f) => (
            <div key={f} className="rounded-xl border border-slate-100 p-4 text-sm bg-white shadow-sm">{f}</div>
          ))}
        </div>
      </Section>

      <Section id="academic" title="Academic">
        <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900">Curriculum Overview</h3>
          <p className="mt-2 text-sm">A balanced program across sciences, humanities, and arts, aligned with national standards.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {["Mathematics","Sciences","Languages"].map((d) => (
            <div key={d} className="rounded-2xl bg-slate-50 p-6">
              <h4 className="font-medium text-slate-900">{d}</h4>
              <p className="mt-2 text-sm">Department overview and subject pathways.</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Academic Calendar","Teaching Methods","Faculty"].map((x) => (
            <div key={x} className="rounded-xl bg-white border border-slate-100 p-4 text-sm shadow-sm">{x}</div>
          ))}
        </div>
      </Section>

      <Section id="admissions" title="Admissions">
        <ol className="list-decimal list-inside text-sm space-y-2">
          <li>Submit application</li>
          <li>Entrance assessment and interview</li>
          <li>Offer & enrollment</li>
        </ol>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h4 className="font-semibold text-slate-900">Online Registration</h4>
            <form className="mt-4 space-y-3">
              <input className="w-full rounded-lg border px-3 py-2" placeholder="Parent Name" />
              <input className="w-full rounded-lg border px-3 py-2" placeholder="Email" type="email" />
              <input className="w-full rounded-lg border px-3 py-2" placeholder="Student Name" />
              <button type="button" className="w-full px-4 py-2 rounded-lg text-white" style={{ background: primaryOrange }}>Submit</button>
            </form>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6">
            <h4 className="font-semibold text-slate-900">Tuition & Fees</h4>
            <p className="mt-2 text-sm">Transparent fee structure with flexible plans.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6">
            <h4 className="font-semibold text-slate-900">Scholarships & Aid</h4>
            <p className="mt-2 text-sm">Merit and need-based support available.</p>
          </div>
        </div>
        <div className="rounded-xl border border-slate-100 p-4 text-sm shadow-sm">
          <p className="font-medium text-slate-800">FAQ</p>
          <p className="text-slate-600 mt-1">Find answers to common questions from parents and students.</p>
        </div>
      </Section>

      <Section id="news" title="News & Events">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm">
              <div className="h-32 bg-gradient-to-br from-blue-100 to-orange-100" />
              <div className="p-4">
                <h4 className="font-semibold text-slate-900">Latest update {i}</h4>
                <p className="mt-1 text-sm text-slate-600">Brief description of the news or event.</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact Us">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-100 p-6 shadow-sm bg-white">
            <form className="space-y-3">
              <input className="w-full rounded-lg border px-3 py-2" placeholder="Your Name" />
              <input className="w-full rounded-lg border px-3 py-2" placeholder="Email" type="email" />
              <textarea className="w-full rounded-lg border px-3 py-2" rows="4" placeholder="Message" />
              <button type="button" className="px-4 py-2 rounded-lg text-white" style={{ background: primaryBlue }}>Send Message</button>
            </form>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-600">123 Learning Ave, Knowledge City</p>
            <div className="mt-2 text-sm text-slate-600 flex flex-col gap-1">
              <span className="flex items-center gap-2"><Phone size={16}/> +1 (555) 123-4567</span>
              <span className="flex items-center gap-2"><Mail size={16}/> hello@brightpath.edu</span>
              <span className="flex items-center gap-2"><MapPin size={16}/> Open Mon–Fri, 8:00–16:00</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
