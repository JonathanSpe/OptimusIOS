
import React, { useMemo } from 'react';
import { categoryData } from './DashboardData';

interface MolecularOrbitProps {
  categories: string[];
  selectedKey: string;
  onSelect: (key: string) => void;
}

export const MolecularOrbit: React.FC<MolecularOrbitProps> = ({ categories, selectedKey, onSelect }) => {
  const allMarkers = useMemo(() => {
    const uniqueMarkers: any[] = [];
    const seen = new Set();
    categories.forEach(cat => {
      categoryData[cat].markers.forEach(m => {
        if (!seen.has(m.name)) {
          uniqueMarkers.push({ ...m, mainCategory: cat });
          seen.add(m.name);
        }
      });
    });
    return uniqueMarkers;
  }, [categories]);

  const total = allMarkers.length;
  const RADAR_R = 195; // Max radius (Optimal Performance)
  const CENTER_R = 70; // Min radius (Critical Performance)

  return (
    <div className="relative w-full h-full flex flex-col items-center bg-white overflow-hidden p-4">
      {/* Background Technical Micro-Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />
      
      {/* Visual Anchor / Radial Instrument */}
      <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center">
        
        {/* Technical Threshold Rings & Zone Coloration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Critical Zone Background (Intensified Red Tint) */}
          <div className="absolute rounded-full border border-red-500/20 bg-red-600/[0.05] animate-pulse-slow" style={{ width: CENTER_R * 2, height: CENTER_R * 2 }} />
          <div className="absolute text-[8px] font-[900] text-red-600 uppercase tracking-[0.4em] translate-y-[-55px]">Critical Alert</div>
          
          {/* Optimal Zone Background (Intensified Emerald Ring) */}
          <div className="absolute rounded-full border border-emerald-500/10 bg-emerald-500/[0.04]" style={{ width: RADAR_R * 2, height: RADAR_R * 2 }} />
          <div className="absolute text-[8px] font-[900] text-emerald-600 uppercase tracking-[0.4em] translate-y-[-215px]">Peak Performance</div>

          {/* Median Rings */}
          {[0.5, 0.75, 1.0].map((ring) => (
            <div 
              key={ring}
              className={`absolute rounded-full border ${ring === 1.0 ? 'border-slate-200 border-dashed' : 'border-slate-100'}`}
              style={{ width: (CENTER_R + (RADAR_R - CENTER_R) * ring) * 2, height: (CENTER_R + (RADAR_R - CENTER_R) * ring) * 2 }}
            />
          ))}

          {/* Orientation Compass */}
          {[0, 90, 180, 270].map(deg => (
             <div key={deg} className="absolute text-[6px] font-black text-slate-300 tracking-widest" style={{ transform: `rotate(${deg}deg) translate(0, -${RADAR_R + 25}px)` }}>{deg}°</div>
          ))}
        </div>

        <svg width="100%" height="100%" viewBox="-250 -250 500 500" className="overflow-visible relative z-10">
          {/* Connecting Lines for Active Category */}
          {allMarkers.map((m, i) => {
            const isActive = m.categories.includes(selectedKey);
            if (!isActive) return null;
            const angle = (i * (360 / total) - 90) * (Math.PI / 180);
            const score = Math.min(m.value / m.max, 1);
            const r = CENTER_R + (RADAR_R - CENTER_R) * score;
            return (
              <line 
                key={`line-${i}`}
                x1={0} y1={0}
                x2={r * Math.cos(angle)} y2={r * Math.sin(angle)}
                stroke="#991B1B"
                strokeWidth="0.75"
                strokeDasharray="4 4"
                className="opacity-10"
              />
            );
          })}

          {/* Biomarkers Nodes - ALWAYS VISIBLE */}
          {allMarkers.map((m, i) => {
            const angle = (i * (360 / total) - 90) * (Math.PI / 180);
            const score = Math.min(m.value / m.max, 1);
            const r = CENTER_R + (RADAR_R - CENTER_R) * score;
            const x = r * Math.cos(angle);
            const y = r * Math.sin(angle);
            const isActive = m.categories.includes(selectedKey);

            return (
              <g key={i} className="transition-all duration-700 cursor-help group/node">
                {/* Node Dot */}
                <circle 
                  cx={x} cy={y} 
                  r={isActive ? 5 : 3} 
                  fill={isActive ? '#991B1B' : '#CBD5E1'} 
                  className={`transition-all ${isActive ? 'shadow-xl' : 'opacity-30 group-hover/node:opacity-60'}`} 
                />
                
                {/* Label positioning adjusted to avoid overlapping the center */}
                <text 
                  x={(RADAR_R + 20) * Math.cos(angle)} 
                  y={(RADAR_R + 20) * Math.sin(angle)}
                  textAnchor={Math.cos(angle) > 0 ? "start" : "end"}
                  className={`text-[7px] font-black uppercase tracking-tighter transition-all ${isActive ? 'fill-slate-900 font-extrabold' : 'fill-slate-300'}`}
                >
                  {m.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Center Identity Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-20">
           <div className="w-full h-full rounded-full overflow-hidden bg-white grayscale border border-slate-100 shadow-2xl relative">
             <img 
               src="https://raw.githubusercontent.com/JonathanSpe/Optimus/05eb146bea4dbb2e2597fc672e0aea7d6995f76a/optimus---personalisierte-blutanalyse/assets/Jonathan%20Pic.png" 
               className="w-full h-full object-cover opacity-80"
             />
             <div className="absolute inset-0 ring-4 ring-inset ring-white/60" />
           </div>
           {/* Performance Wave Pulse */}
           <div className={`absolute -inset-4 rounded-full border border-red-800/5 animate-ping opacity-20`} />
        </div>
      </div>

      {/* Domain Selection Dock */}
      <div className="w-full px-6 pb-4 mt-6">
        <div className="grid grid-cols-5 gap-px bg-slate-100 border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
          {categories.map((catKey) => {
            const data = categoryData[catKey];
            const active = selectedKey === catKey;
            return (
              <button
                key={catKey}
                onClick={() => onSelect(catKey)}
                className={`py-5 px-2 flex flex-col items-center gap-1 transition-all ${
                  active ? 'bg-white' : 'bg-slate-50/50 hover:bg-white'
                }`}
              >
                <span className={`text-[7px] font-black uppercase tracking-widest leading-none mb-1 ${active ? 'text-red-800' : 'text-slate-400'}`}>
                  {data.label}
                </span>
                <span className={`text-xl font-mono-data font-black leading-none ${active ? 'text-slate-900' : 'text-slate-300'}`}>
                  {data.score}
                </span>
                <div className={`w-10 h-1 mt-1 rounded-full ${active ? 'bg-red-800' : 'bg-transparent'}`} />
              </button>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
