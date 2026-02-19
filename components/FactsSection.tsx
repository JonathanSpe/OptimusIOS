import React from 'react';

const FactsSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 lg:gap-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-10 h-[1.5px] bg-red-800"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-800">Molekulare Analyse</span>
            </div>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-[900] tracking-tighter leading-[0.9] text-[#0F172A]">
              Zahlen lügen nicht. <br />
              <span className="text-slate-900/30 italic font-[800]">Deine Gesundheit ist messbar.</span>
            </h3>
          </div>
          <p className="text-slate-500 text-lg lg:text-xl max-w-sm leading-relaxed border-l-[1px] border-slate-200 pl-8 font-medium italic">
            Wir analysieren über 15 Biomarker, um ein glasklares Bild deines inneren Zustands zu zeichnen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Fact 1 */}
          <div className="group relative p-10 lg:p-14 rounded-[3.5rem] border border-slate-100 bg-white hover:border-slate-200 transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl card-medical">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-800/[0.01] rounded-full -mr-40 -mt-40 blur-[100px] group-hover:bg-red-800/[0.03] transition-all duration-1000" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-7xl lg:text-8xl font-[900] tracking-[-0.05em] text-[#0F172A]">30%</span>
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Globaler Schnitt</span>
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-black text-[#0F172A] tracking-tight uppercase">Unerkannter Eisenmangel</h4>
                <p className="text-slate-500 leading-relaxed text-lg font-medium">
                  Ein Großteil der Bevölkerung lebt mit einem Defizit, das oft als einfache "Müdigkeit" abgetan wird. Bei Athleten sinkt die regenerative Kapazität dadurch drastisch.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-50 flex items-center gap-6 text-[9px] font-black text-slate-300 uppercase tracking-[0.25em]">
                <span>Peer-Reviewed 2024</span>
                <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                <span>Klinische Studie</span>
              </div>
            </div>
          </div>

          {/* Fact 2 */}
          <div className="group relative p-10 lg:p-14 rounded-[3.5rem] border border-slate-100 bg-white hover:border-slate-200 transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl card-medical">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-800/[0.01] rounded-full -mr-40 -mt-40 blur-[100px] group-hover:bg-red-800/[0.03] transition-all duration-1000" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-7xl lg:text-8xl font-[900] tracking-[-0.05em] text-[#0F172A]">-25%</span>
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Leistungsverlust</span>
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-black text-[#0F172A] tracking-tight uppercase">Sauerstoff-Limitierung</h4>
                <p className="text-slate-500 leading-relaxed text-lg font-medium">
                  Niedrige Ferritin-Werte reduzieren den Sauerstofftransport in deine Muskeln. Ohne Analyse trainierst du gegen eine unsichtbare Wand – ineffizient und frustrierend.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-50 flex items-center gap-6 text-[9px] font-black text-slate-300 uppercase tracking-[0.25em]">
                <span>Performance Lab</span>
                <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                <span>Zertifiziert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;