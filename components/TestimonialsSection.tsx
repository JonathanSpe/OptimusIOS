import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Lukas Weber",
    role: "Marathonläufer",
    comment: "Seit ich meine Eisenwerte durch Optimus optimiert habe, konnte ich meine Bestzeit um 4 Minuten steigern. Die schmerzfreie Abwicklung von zu Hause ist genial.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Sarah Lindner",
    role: "Unternehmerin & Biohackerin",
    comment: "Das Dashboard gibt mir endlich die Kontrolle über meine hormonelle Balance. Die KI-gestützten Empfehlungen sind präzise und wissenschaftlich fundiert.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Marc Jensen",
    role: "Crossfit-Athlet",
    comment: "Kein langes Warten beim Arzt mehr. Der Test kam per Post, 10 Minuten später war alles erledigt. Die Ergebnisse waren am nächsten Tag da. Weltklasse!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 px-6 relative bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-1">
            Member Feedback
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[900] tracking-tighter leading-[0.9] text-[#0F172A]">
            Vertrauen durch <br /> <span className="text-slate-900/40 italic font-[800]">Ergebnisse.</span>
          </h2>
          <p className="text-slate-500 text-lg lg:text-xl max-w-2xl font-medium leading-relaxed italic">
            Tausende von Optimierern nutzen bereits unsere Technologie, um ihre biologischen Limits neu zu definieren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative p-10 lg:p-12 rounded-[3.5rem] bg-white border border-slate-100 hover:border-slate-200 hover:shadow-[0_32px_80px_-16px_rgba(0,0,0,0.06)] transition-all duration-700 medical-card-shadow"
            >
              <div className="absolute top-10 right-10 text-slate-50 group-hover:text-red-800/5 transition-colors duration-700">
                <Quote size={48} strokeWidth={3} />
              </div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-red-800 text-red-800/10" />
                ))}
              </div>

              <p className="text-slate-700 text-lg mb-10 leading-relaxed font-bold italic">
                "{t.comment}"
              </p>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-50 group-hover:border-red-800/40 transition-all duration-700">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale brightness-[1.05] group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <div>
                  <h4 className="font-black text-[#0F172A] text-lg leading-tight uppercase tracking-tight">{t.name}</h4>
                  <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.3em] mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary badges */}
        <div className="mt-20 pt-12 border-t border-slate-50 flex flex-wrap justify-center items-center gap-16 opacity-30">
          <div className="flex flex-col items-center">
             <span className="text-3xl font-[900] text-[#0F172A]">4.9/5</span>
             <span className="text-[8px] uppercase tracking-[0.4em] font-black text-slate-400 mt-1">Google Rating</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-3xl font-[900] text-[#0F172A]">TÜV</span>
             <span className="text-[8px] uppercase tracking-[0.4em] font-black text-slate-400 mt-1">Süd Zertifiziert</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-3xl font-[900] text-[#0F172A]">100%</span>
             <span className="text-[8px] uppercase tracking-[0.4em] font-black text-slate-400 mt-1">Datensicher</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;