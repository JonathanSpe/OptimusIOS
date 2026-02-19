
import React, { useState } from 'react';
import DashboardPreview from './DashboardPreview';

const PotentialSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Athletik');

  return (
    <section className="py-24 lg:py-32 px-6 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        <div className="flex-1 space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <div className="w-10 h-[1.5px] bg-red-800"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-800">Dein Potential</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-[900] tracking-tighter leading-[0.9] text-[#0F172A]">
              Deine Gesundheit, <br />
              Deine Ziele, <br />
              <span className="text-slate-400 italic font-[800]">Dein Vorsprung.</span>
            </h2>
            <div className="space-y-5 pt-4">
              <FeatureItem title="Lifestyle-Analyse" desc="Individuelle Abstimmung auf deine persönlichen Interessen und Performance-Ziele." />
              <FeatureItem title="Wearable-Integration" desc="Nahtlose Synchronisation deiner Daten von Apple Health, Strava und Garmin." />
              <FeatureItem title="Personalisierte Empfehlungen" desc="KI-gestützte Supplement-Protokolle für deine tägliche molekulare Bestform." />
              <FeatureItem title="Daily-Rationen" desc="Deine maßgeschneiderten Nährstoffe in praktischen Tages-Sachets – fertig dosiert." />
            </div>
          </div>

          <button className="flex items-center justify-center gap-4 bg-[#0F172A] hover:bg-black text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl active:scale-95 group btn-medical">
            Wissenschaft entdecken
          </button>
        </div>

        <div className="flex-1 order-1 lg:order-2 w-full">
           <div className="relative p-2 rounded-[4rem] bg-white shadow-[0_48px_100px_-24px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden group">
              <div className="p-4 md:p-8 lg:p-12">
                <DashboardPreview 
                  lightTheme={true} 
                  selectedCategory={selectedCategory} 
                  onSelectCategory={setSelectedCategory} 
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-800/5 blur-3xl rounded-full"></div>
              
              {/* Floating Badge for interactivity hint */}
              <div className="absolute bottom-10 right-10 bg-white/80 backdrop-blur-md border border-slate-100 px-4 py-2 rounded-xl shadow-lg animate-bounce hidden md:block">
                <span className="text-[9px] font-black uppercase tracking-widest text-red-800">Interaktive Analyse</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="flex items-start gap-5 group">
    <div className="mt-1.5 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:border-red-800 transition-colors duration-500">
      <div className="w-1.5 h-1.5 bg-red-800/40 rounded-full" />
    </div>
    <p className="text-lg text-slate-500 font-medium leading-snug">
      <span className="text-[#0F172A] font-black uppercase text-sm tracking-tight">{title}:</span> {desc}
    </p>
  </div>
);

export default PotentialSection;
