import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

const comparisonData = [
  {
    feature: "Schmerzfreies Home-Kit",
    elite: true,
    optimizer: true,
    doctor: "Nadel / Vene",
  },
  {
    feature: "15 Biomarker Analyse",
    elite: true,
    optimizer: true,
    doctor: "Eingeschränkt",
  },
  {
    feature: "Ärztliche Validierung",
    elite: true,
    optimizer: true,
    doctor: false,
  },
  {
    feature: "Test-Frequenz",
    elite: "Monatlich",
    optimizer: "Alle 3 Monate",
    doctor: "Nach Bedarf",
  },
  {
    feature: "Supplement Discount",
    elite: "20% Rabatt",
    optimizer: "20% Rabatt",
    doctor: "Listenpreis",
  },
  {
    feature: "KI-Empfehlungen",
    elite: true,
    optimizer: true,
    doctor: false,
  },
  {
    feature: "Software & Dashboard",
    elite: true,
    optimizer: true,
    doctor: false,
  },
  {
    feature: "Mindestlaufzeit",
    elite: "6 Monate",
    optimizer: "12 Monate",
    doctor: "-",
  },
];

const PricingSection: React.FC = () => {
  const renderValue = (val: any, isDark: boolean = false, isDoctor: boolean = false) => {
    if (val === true) return <Check className={`mx-auto ${isDark ? 'text-white' : 'text-slate-400'}`} size={18} strokeWidth={3} />;
    if (val === false) return <X className={`mx-auto ${isDark ? 'text-white/20' : 'text-slate-200'}`} size={18} strokeWidth={2} />;
    return <span className={`font-black text-[9px] uppercase tracking-widest ${isDark ? 'text-white' : isDoctor ? 'text-slate-500' : 'text-slate-400'}`}>{val}</span>;
  };

  return (
    <section id="pricing" className="py-12 lg:py-16 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 text-red-800 text-[9px] font-black uppercase tracking-[0.2em] mb-0.5 shadow-sm">
            Wähle dein Level
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] tracking-tighter leading-none text-[#0F172A]">
            Präzision für <span className="text-slate-900/40 italic font-[800]">jeden Anspruch.</span>
          </h2>
          <p className="text-slate-500 text-base font-medium max-w-xl mx-auto italic">
            Wissenschaftlich fundierte Optimierung ohne Kompromisse.
          </p>
        </div>

        {/* Added pt-8 to prevent the "Premium Choice" badge from being clipped */}
        <div className="overflow-x-auto pb-4 pt-8">
          <table className="w-full border-separate border-spacing-y-1.5 min-w-[850px]">
            <thead>
              <tr className="text-left">
                <th className="p-3 text-slate-400 font-black uppercase tracking-[0.3em] text-[8px]">Leistungsumfang</th>
                
                {/* Elite Plan */}
                <th className="p-5 bg-white border-x border-t border-slate-100 rounded-t-[2rem] w-1/4 shadow-sm">
                  <div className="text-slate-400 font-black text-[8px] uppercase tracking-widest mb-1">Elite Plan</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-[900] text-[#0F172A]">69€</span>
                    <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest">/ Mon.</span>
                  </div>
                </th>

                {/* Optimizer Plan (Premium Choice) */}
                <th className="p-5 bg-slate-900 rounded-t-[2rem] border-x border-t border-slate-900 w-1/4 shadow-xl relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-800 text-white text-[8px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg z-10 whitespace-nowrap">
                    Premium choice
                  </div>
                  <div className="text-slate-400 font-black text-[8px] uppercase tracking-widest mb-1">Optimizer Plan</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-[900] text-white">29€</span>
                    <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest">/ Mon.</span>
                  </div>
                </th>

                {/* Hausarzt Plan */}
                <th className="p-5 bg-white rounded-t-[2rem] border-x border-t border-slate-100 w-1/4">
                  <div className="text-slate-400 font-black text-[8px] uppercase tracking-widest mb-1">Hausarzt</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-[900] text-slate-600">150€+</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="group">
                  <td className="p-3.5 px-5 rounded-l-2xl border-l border-y border-slate-100 font-black text-slate-700 text-xs group-hover:text-[#0F172A] transition-colors uppercase tracking-tight">
                    {row.feature}
                  </td>
                  
                  {/* Elite Column */}
                  <td className="p-3.5 border-y border-slate-50 text-center">
                    {renderValue(row.elite, false)}
                  </td>
                  
                  {/* Optimizer Column (Dark) */}
                  <td className="p-3.5 bg-slate-900/95 border-y border-x border-slate-900 text-center relative text-white">
                    {renderValue(row.optimizer, true)}
                  </td>
                  
                  {/* Doctor Column */}
                  <td className="p-3.5 border-y border-r border-slate-100 rounded-r-2xl text-center">
                    {renderValue(row.doctor, false, true)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-2"></td>
                <td className="p-4">
                  <button className="w-full py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-[#0F172A] transition-all font-black text-[9px] uppercase tracking-widest shadow-sm">
                    Plan wählen
                  </button>
                </td>
                <td className="p-4">
                  <button className="w-full py-4 rounded-xl bg-red-800 text-white hover:bg-red-900 transition-all font-black text-[9px] uppercase tracking-[0.25em] shadow-xl flex items-center justify-center gap-2 group active:scale-95">
                    Jetzt Starten <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </td>
                <td className="p-4">
                  <div className="text-center text-slate-400 text-[8px] font-black uppercase tracking-widest italic">
                    Referenz-Wert
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;