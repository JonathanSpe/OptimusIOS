import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle, ShieldCheck, Activity, Shield, Cpu, Microscope } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: any) => void;
}

const slides = [
  {
    url: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Athlete%20Apartment.png',
    duration: 3500,
    label: 'Modern Lifestyle Analysis'
  },
  {
    url: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/athlete%20sports.png',
    duration: 3500,
    label: 'High-Performance Metrics'
  },
  {
    url: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Optimus%20Tasso.jpg',
    duration: 3500,
    label: 'Pain-Free Extraction'
  },
  {
    url: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Athlete%20results.jpg',
    duration: 4500,
    label: 'Deep Molecular Insights'
  }
];

const trustBadges = [
  { icon: <ShieldCheck size={14} />, text: "DSGVO Konform" },
  { icon: <ShieldCheck size={14} />, text: "ISO Zertifiziert" },
  { icon: <Microscope size={14} />, text: "Doktor verifiziert" },
  { icon: <Activity size={14} />, text: "Strava & Garmin Integrated" },
  { icon: <Shield size={14} />, text: "Deutsche Datensicherheit" },
  { icon: <Cpu size={14} />, text: "Transparente KI" },
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, slides[activeIndex].duration);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-[#F8FAFC] overflow-hidden px-6 lg:px-12">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-red-800/[0.01] blur-[220px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-12 -right-12 w-[500px] h-[500px] bg-slate-200/20 blur-[180px] rounded-full pointer-events-none -z-10" />
      
      {/* Thin Technical Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none -z-10" 
        style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/carbon-fibre.png)' }}
      />

      <div className="max-w-7xl mx-auto w-full pt-28 lg:pt-24 pb-12 lg:pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-[54%] xl:w-[50%] space-y-6 lg:space-y-8 z-10 text-center lg:text-left lg:-translate-y-8">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-[4.2rem] xl:text-[5rem] font-[900] tracking-[-0.06em] leading-[0.9] text-[#0F172A] text-balance">
                Was steckt <br /> <span className="text-red-800 italic font-[800]">wirklich</span> <br /> <span className="text-slate-400/30">in dir?</span>
              </h1>
              
              <div className="space-y-3 lg:space-y-4 max-w-xl mx-auto lg:mx-0">
                <p className="text-xl md:text-2xl text-slate-900 font-extrabold tracking-tight leading-tight">
                  Hole das Maximum aus Alltag, Job und Sport heraus.
                </p>
                <p className="text-slate-500 text-base lg:text-lg font-medium leading-relaxed">
                  Für Vitalität und hormonelle Balance. Dein erster Bluttest: Schmerzfrei, digital und von Zuhause — <span className="text-[#0F172A] font-extrabold border-b-2 border-red-800/10 pb-0.5">ab 29 Euro</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-4 bg-[#0F172A] hover:bg-black text-white px-9 py-4 rounded-[1.1rem] font-extrabold text-base transition-all shadow-2xl active:scale-95 group shadow-slate-900/10 btn-medical">
                Analyse Starten <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('how-it-works')}
                className="flex items-center justify-center gap-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-[1.1rem] font-bold text-sm transition-all shadow-sm btn-medical"
              >
                <PlayCircle className="w-5 h-5 text-red-800" /> Demo ansehen
              </button>
            </div>

            {/* Marquee */}
            <div className="relative w-full overflow-hidden pt-4 lg:pt-6 select-none border-t border-slate-200/40">
              <div className="flex animate-marquee whitespace-nowrap gap-12">
                {[...trustBadges, ...trustBadges].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[8px] lg:text-[9px] font-black uppercase tracking-[0.25em] text-slate-400">
                    <span className="text-red-800/40">{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Larger Image Frame */}
          <div className="w-full lg:w-[46%] xl:w-[50%] h-[350px] md:h-[450px] lg:h-[520px] xl:h-[580px] z-10 relative flex-shrink-0">
            
            <div className="relative w-full h-full rounded-[3.5rem] lg:rounded-[4.5rem] overflow-hidden shadow-[0_48px_100px_-24px_rgba(0,0,0,0.12)] border-[1px] border-slate-200/50 bg-white group">
              
              <div className="absolute inset-5 rounded-[2.8rem] lg:rounded-[3.8rem] border border-white/40 z-30 pointer-events-none" />
              
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-30">
                <div className="w-full h-[1px] bg-red-800/30 shadow-[0_0_8px_rgba(153,27,27,0.2)] animate-scanline"></div>
              </div>

              <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                  <div
                    key={slide.url}
                    className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
                      index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={slide.url} 
                      alt={slide.label} 
                      className={`w-full h-full object-cover grayscale brightness-[1.05] contrast-[1.05] transition-transform duration-[12000ms] ease-out ${
                        index === activeIndex ? 'scale-110' : 'scale-100'
                      }`}
                      style={{ objectPosition: 'center 20%' }}
                    />
                    
                    <div className={`absolute bottom-0 left-0 right-0 p-8 lg:p-12 bg-gradient-to-t from-black/50 via-black/5 to-transparent transition-all duration-1000 ${index === activeIndex ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-[1px] h-8 bg-red-800/60" />
                        <div>
                          <p className="text-white text-base lg:text-xl font-[900] tracking-tighter uppercase italic leading-none">
                            {slide.label}
                          </p>
                          <p className="text-white/40 text-[8px] font-bold uppercase tracking-[0.3em] mt-1.5">Molecular Visualization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute top-8 left-8 z-30 scale-90 lg:scale-100 origin-top-left">
                <div className="group/badge inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-2xl border border-white/50 text-[#0F172A] shadow-2xl shadow-black/5 transition-all">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-800"></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black tracking-[0.12em] uppercase leading-none">Bio-Intelligence</span>
                    <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Neural Engine v2.5</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-8 z-30 flex gap-1.5">
                {slides.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-0.5 rounded-full transition-all duration-700 ${
                      i === activeIndex ? 'w-10 bg-white' : 'w-2 bg-white/30'
                    }`} 
                  />
                ))}
              </div>

            </div>

            <div className="absolute -inset-10 bg-red-800/[0.015] blur-[80px] rounded-full -z-10 animate-pulse" />
          </div>

        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scanline {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-scanline {
          position: absolute;
          animation: scanline 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;