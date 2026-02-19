
import React from 'react';
import { Activity, Zap, HeartPulse, Brain, Moon, ChevronRight, Target, ShieldCheck } from 'lucide-react';

// Repräsentative Auswahl aus dem echten Datensatz für die Vorschau
const biomarkers = [
  { id: 'fer', name: 'Ferritin', val: 92, cat: 'Athletik' },
  { id: 'cor', name: 'Cortisol', val: 85, cat: 'Erholung' },
  { id: 'tes', name: 'Testosteron', val: 94, cat: 'Hormone' },
  { id: 'b12', name: 'Vitamin B12', val: 88, cat: 'Kognition' },
  { id: 'mg', name: 'Magnesium', val: 81, cat: 'Vitalität' },
  { id: 'd3', name: 'Vitamin D3', val: 78, cat: 'Hormone' },
  { id: 'crp', name: 'hs-CRP', val: 95, cat: 'Erholung' },
  { id: 'om3', name: 'Omega-3', val: 89, cat: 'Kognition' },
];

const categories = [
  { id: 'Athletik', icon: <Activity size={14} />, score: 92 },
  { id: 'Erholung', icon: <Moon size={14} />, score: 85 },
  { id: 'Hormone', icon: <Zap size={14} />, score: 94 },
  { id: 'Kognition', icon: <Brain size={14} />, score: 88 },
  { id: 'Vitalität', icon: <HeartPulse size={14} />, score: 81 },
];

interface DashboardPreviewProps {
  selectedCategory?: string;
  onSelectCategory?: (id: string) => void;
  lightTheme?: boolean;
}

/**
 * DashboardPreview component displaying a molecular orbit visualization of biomarkers.
 * Added Biological Age and Overall Status Score directly below the orbit.
 */
export const DashboardPreview: React.FC<DashboardPreviewProps> = ({ 
  selectedCategory = 'Athletik', 
  onSelectCategory,
  lightTheme 
}) => {
  const R = 150, r0 = 60;
  
  return (
    <div className="space-y-6">
      {/* Mini-Header */}
      <div className="flex justify-between items-end border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-800 animate-pulse" />
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-red-800">Biometric Feed v5.2</span>
          </div>
          <h3 className="text-xl font-[900] tracking-tighter text-[#0F172A] uppercase italic">Molecular Orbit</h3>
        </div>
        <div className="text-right">
          <p className="text-[7px] font-black text-slate-300 uppercase tracking-widest">System Status</p>
          <p className="text-[10px] font-black text-emerald-500 uppercase flex items-center gap-1 justify-end">
             <ShieldCheck size={10} /> Optimal
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Orbit & Key Metrics */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* SVG Orbit (Height slightly reduced for better grouping) */}
          <div className="relative aspect-square flex items-center justify-center select-none bg-slate-50/30 rounded-[3rem] p-4">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[0.5, 0.75, 1].map(r => (
                <div key={r} className="absolute rounded-full border border-slate-100" style={{ width: (r0 + (R-r0)*r)*2, height: (r0 + (R-r0)*r)*2 }} />
              ))}
              <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-xl z-20 overflow-hidden grayscale brightness-110">
                <img src="https://raw.githubusercontent.com/JonathanSpe/Optimus/05eb146bea4dbb2e2597fc672e0aea7d6995f76a/optimus---personalisierte-blutanalyse/assets/Jonathan%20Pic.png" className="w-full h-full object-cover" />
              </div>
            </div>

            <svg width="100%" height="100%" viewBox="-180 -180 360 360" className="relative z-10 overflow-visible">
              {biomarkers.map((b, i) => {
                const ang = (i * (360 / biomarkers.length) - 90) * (Math.PI / 180);
                const r = r0 + (R - r0) * (b.val / 100);
                const isSel = b.cat === selectedCategory;
                return (
                  <g key={b.id} className="cursor-pointer group" onClick={() => onSelectCategory?.(b.cat)}>
                    <line x1={0} y1={0} x2={r * Math.cos(ang)} y2={r * Math.sin(ang)} stroke={isSel ? '#991B1B' : '#F1F5F9'} strokeWidth={isSel ? 1.5 : 0.5} strokeDasharray={isSel ? "" : "3 3"} className="transition-all duration-500 opacity-40" />
                    <circle cx={r * Math.cos(ang)} cy={r * Math.sin(ang)} r={isSel ? 5 : 3} fill={isSel ? '#991B1B' : '#CBD5E1'} className="transition-all duration-500" />
                    <text x={(R + 25) * Math.cos(ang)} y={(R + 25) * Math.sin(ang)} textAnchor={Math.cos(ang) > 0 ? "start" : "end"} className={`text-[7px] font-black uppercase tracking-tighter transition-all ${isSel ? 'fill-[#0F172A]' : 'fill-slate-300'}`}>
                      {b.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Key Metrics Dashboard Integration (Directly below Orbit) */}
          <div className="grid grid-cols-2 gap-4">
             {/* Overall Status Score */}
             <div className="bg-[#0F172A] p-6 rounded-[2rem] text-white flex flex-col justify-between shadow-lg relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-[0.05] text-white pointer-events-none group-hover:rotate-12 transition-transform">
                 <Zap size={40} />
               </div>
               <span className="text-[7px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">Overall Score</span>
               <div className="flex items-baseline gap-1">
                 <span className="text-4xl font-black font-mono-data">91</span>
                 <span className="text-xs font-black text-red-800">%</span>
               </div>
               <div className="mt-3 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[7px] font-extrabold text-white/60 uppercase tracking-widest">HPG Axis Optimal</span>
               </div>
             </div>

             {/* Biological Age */}
             <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-between shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-[0.05] text-[#0F172A] pointer-events-none">
                 <HeartPulse size={40} />
               </div>
               <span className="text-[7px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Bio-Age Delta</span>
               <div className="flex items-baseline gap-2">
                 <span className="text-4xl font-black font-mono-data text-[#0F172A]">29</span>
                 <span className="text-[10px] font-black text-emerald-500 uppercase tracking-tighter">-3.2Y</span>
               </div>
               <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-[7px] font-extrabold text-slate-400 uppercase tracking-widest leading-none">Regenerative Capacity High</span>
               </div>
             </div>
          </div>
        </div>

        {/* Right Column: Sidebar Controls */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-50/50 rounded-[2.5rem] p-4 border border-slate-100">
            <p className="text-[7px] font-black text-slate-300 uppercase tracking-widest px-3 mb-3">Domain Indices</p>
            {categories.map(c => (
              <div key={c.id} onClick={() => onSelectCategory?.(c.id)} className={`flex items-center justify-between p-3 mb-2 rounded-2xl cursor-pointer transition-all border ${c.id === selectedCategory ? 'bg-white border-slate-200 shadow-sm scale-[1.02]' : 'bg-transparent border-transparent opacity-40 hover:opacity-100'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${c.id === selectedCategory ? 'bg-[#0F172A] text-white' : 'bg-slate-100'}`}>{c.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-[7px] font-black uppercase text-slate-400 leading-none mb-1">{c.id}</span>
                    <span className="text-xs font-black font-mono-data leading-none">{c.score}%</span>
                  </div>
                </div>
                <ChevronRight size={12} className={c.id === selectedCategory ? 'text-red-800' : 'text-slate-200'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
