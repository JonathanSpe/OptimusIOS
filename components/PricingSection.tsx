import React from 'react';
import { Check, X, Star, ArrowRight, Microscope, UserCheck, ShieldCheck } from 'lucide-react';

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
  const renderValue = (val: any, highlight: boolean = false, isDoctor: boolean = false) => {
    if (val === true) return <Check className={`mx-auto ${highlight ? 'text-red-800' : isDoctor ? 'text-slate-400' : 'text-slate-400'}`} size={20} strokeWidth={3} />;
    if (val === false) return <X className={`mx-auto ${isDoctor ? 'text-slate-200' : 'text-slate-200'}`} size={20} strokeWidth={2} />;
    return <span className={`font-black text-[10px] uppercase tracking-widest ${highlight ? 'text-[#0F172A]' : isDoctor ? 'text-slate-400' : 'text-slate-400'}`}>{val}</span>;
  };

  return (
    <section id="pricing" className="py-24 lg:py-32 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-100 text-red-800 text-[10px] font-black uppercase tracking-[0.2em] mb-1 shadow-sm">
            Wähle dein Level
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[900] tracking-tighter leading-[0.9] text-[#0F172A]">
            Präzision für <br /> <span className="text-slate-900/40 italic font-[800]">jeden Anspruch.</span>
          </h2>
          <p className="text-slate-500 text-lg lg:text-xl font-medium max-w-2xl mx-auto italic">
            Wissenschaftlich fundierte Optimierung ohne Kompromisse.
          </p>
        </div>

        <div className="overflow-x-auto pb-8">
          <table className="w-full border-separate border-spacing-y-3 min-w-[900px]">
            <thead>
              <tr className="text-left">
                <th className="p-4 text-slate-400 font-black uppercase tracking-[0.3em] text-[9px]">Leistungsumfang</th>
                <th className="p-8 bg-white rounded-t-[2.5rem] border-x border-t border-slate-100 w-1/4 shadow-sm">
                  <div className="text-slate-400 font-black text-[9px] uppercase tracking-widest mb-2">Elite Plan</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-[900] text-[#0F172A]">69€</span>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">/ Mon.</span>
                  </div>
                </th>
                <th className="p-8 bg-slate-900 border-x border-t border-slate-900 rounded-t-[2.5rem] relative w-1/4 shadow-xl">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-800 text-white text-[9px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                  <div className="text-red-800/80 font-black text-[9px] uppercase tracking-widest flex items-center gap-2 mb-2">
                    <Star size={10} fill="currentColor" /> Optimizer Plan
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-[900] text-white">29€</span>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">/ Mon.</span>
                  </div>
                </th>
                <th className="p-8 bg-white rounded-t-[2.5rem] border-x border-t border-slate-100 w-1/4">
                  <div className="text-slate-400 font-black text-[9px] uppercase tracking-widest mb-2">Hausarzt</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-[900] text-slate-300">150€+</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="group">
                  <td className="p-6 rounded-l-3xl border-l border-y border-slate-100 font-black text-slate-700 text-sm group-hover:text-[#0F172A] transition-colors uppercase tracking-tight">
                    {row.feature}
                  </td>
                  <td className="p-6 border-y border-slate-50 text-center">
                    {renderValue(row.elite)}
                  </td>
                  <td className="p-6 bg-slate-900/95 border-y border-x border-slate-900 text-center relative text-white">
                    {renderValue(row.optimizer, true)}
                  </td>
                  <td className="p-6 border-y border-r border-slate-100 rounded-r-3xl text-center">
                    {renderValue(row.doctor, false, true)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-4"></td>
                <td className="p-6">
                  <button className="w-full py-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-[#0F172A] transition-all font-black text-[10px] uppercase tracking-widest shadow-sm">
                    Elite Plan starten
                  </button>
                </td>
                <td className="p-6">
                  <button className="w-full py-5 rounded-2xl bg-red-800 text-white hover:bg-red-900 transition-all font-black text-[10px] uppercase tracking-[0.3em] shadow-xl flex items-center justify-center gap-3 group active:scale-95">
                    Jetzt Starten <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </td>
                <td className="p-6">
                  <div className="text-center text-slate-300 text-[9px] font-black uppercase tracking-widest italic">
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