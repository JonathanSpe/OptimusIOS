
import React from 'react';

const FactsSection: React.FC = () => {
  return (
    <section className="py-8 lg:py-12 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6 lg:gap-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-[1.5px] bg-red-800"></div>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-800">Molekulare Analyse</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-[900] tracking-tighter leading-[0.95] text-[#0F172A]">
              Zahlen lügen nicht. <br />
              <span className="text-slate-900/30 italic font-[800]">Messbare Gesundheit.</span>
            </h3>
          </div>
          <p className="text-slate-500 text-base lg:text-lg max-w-sm leading-relaxed border-l-[1px] border-slate-200 pl-6 font-medium italic">
            Wir analysieren über 15 Biomarker für ein glasklares Bild deines inneren Zustands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Fact 1 */}
          <div className="group relative p-6 lg:p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-slate-200 transition-all duration-700 overflow-hidden shadow-sm hover:shadow-xl card-medical">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-800/[0.01] rounded-full -mr-32 -mt-32 blur-[80px] group-hover:bg-red-800/[0.03] transition-all duration-1000" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl lg:text-6xl font-[900] tracking-[-0.05em] text-[#0F172A]">30%</span>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.3em]">Globaler Schnitt</span>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-black text-[#0F172A] tracking-tight uppercase">Unerkannter Eisenmangel</h4>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  Ein Großteil lebt mit einem Defizit, das als "Müdigkeit" abgetan wird. Bei Athleten sinkt die regenerative Kapazität dadurch drastisch.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-50 flex items-center gap-4 text-[8px] font-black text-slate-300 uppercase tracking-[0.25em]">
                <span>Peer-Reviewed 2024</span>
                <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                <span>Klinische Studie</span>
              </div>
            </div>
          </div>

          {/* Fact 2 */}
          <div className="group relative p-6 lg:p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-slate-200 transition-all duration-700 overflow-hidden shadow-sm hover:shadow-xl card-medical">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-800/[0.01] rounded-full -mr-32 -mt-32 blur-[80px] group-hover:bg-red-800/[0.03] transition-all duration-1000" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl lg:text-6xl font-[900] tracking-[-0.05em] text-[#0F172A]">-25%</span>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.3em]">Leistungsverlust</span>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-black text-[#0F172A] tracking-tight uppercase">Sauerstoff-Limitierung</h4>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  Niedrige Ferritin-Werte reduzieren den Sauerstofftransport. Ohne Analyse trainierst du gegen eine unsichtbare Wand – ineffizient und frustrierend.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-50 flex items-center gap-4 text-[8px] font-black text-slate-300 uppercase tracking-[0.25em]">
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
