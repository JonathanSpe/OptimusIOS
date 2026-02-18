
import React from 'react';
import { Microscope, ArrowRight, Activity, LineChart } from 'lucide-react';
import { ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, ComposedChart, Line, Area, Bar, Legend } from 'recharts';
import { CategoryData } from './DashboardTypes';

interface AnalysisPanelProps {
  activeData: CategoryData;
  onNavigate: (page: any) => void;
}

const EvolutionTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f172a] p-3 border border-white/10 shadow-2xl font-mono-data rounded-xl z-[200]">
        <p className="text-[8px] text-white/40 mb-2 uppercase tracking-[0.2em] border-b border-white/5 pb-2">{label}</p>
        <div className="space-y-1">
          {payload.map((p: any, i: number) => (
            <div key={i} className="flex justify-between gap-4 items-center">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color || p.fill }} />
                <span className="text-[7px] text-white/60 uppercase">{p.name === 'Index Path' ? 'Index' : p.name}:</span>
              </div>
              <span className={`text-[9px] font-bold text-white`}>
                {p.value}{p.name === 'Index Path' || p.name === 'Training Vol' ? '%' : ''}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const chartColors = ['#991B1B', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

export const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ activeData, onNavigate }) => {
  return (
    <div className="w-full space-y-6">
      {/* EVOLUTION CHART */}
      <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            <h3 className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-400 leading-none">Correlated Performance</h3>
            <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 leading-none">
              {activeData.label} <span className="text-slate-200 italic font-black">Analytics</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
            <div className="w-1.5 h-1.5 rounded-full bg-red-800 animate-pulse" />
            <span className="text-[7px] font-black uppercase tracking-widest text-slate-400">Live Data</span>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart 
              data={activeData.trendHistory} 
              margin={{ top: 10, right: 0, bottom: 0, left: -35 }}
            >
              <defs>
                <linearGradient id="mainScoreGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#991B1B" stopOpacity={0.06}/>
                  <stop offset="95%" stopColor="#991B1B" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F1F5F9" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#E2E8F0" stopOpacity={0.5}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="8 8" stroke="#F1F5F9" vertical={false} />
              <XAxis 
                dataKey="period" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94A3B8', fontSize: 8, fontWeight: 800}} 
                dy={10} 
              />
              <YAxis 
                domain={[0, 100]} 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94A3B8', fontSize: 8, fontWeight: 500}} 
              />
              <Tooltip content={<EvolutionTooltip />} cursor={{ stroke: '#F1F5F9', strokeWidth: 1.5 }} />
              <Legend 
                verticalAlign="top" 
                align="right" 
                iconType="circle" 
                wrapperStyle={{ fontSize: '7px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: '0px', paddingBottom: '20px' }}
              />
              
              {/* Training Volume Bars */}
              <Bar 
                dataKey="stravaLoad" 
                name="Training Vol" 
                fill="url(#barGrad)" 
                radius={[4, 4, 0, 0]} 
                barSize={30}
              />

              {/* Index Area */}
              <Area 
                type="monotone" 
                dataKey="score" 
                name="Index Path" 
                stroke="none" 
                fill="url(#mainScoreGrad)" 
              />

              {/* Dynamic Biomarker Lines */}
              {activeData.markers.map((marker, idx) => (
                <Line 
                  key={marker.dataKey}
                  type="monotone" 
                  dataKey={marker.dataKey} 
                  name={marker.name} 
                  stroke={chartColors[(idx + 1) % chartColors.length]} 
                  strokeWidth={2}
                  dot={{ r: 3, strokeWidth: 1, fill: 'white' }}
                  activeDot={{ r: 5, strokeWidth: 0 }}
                />
              ))}

              {/* Main Index Line (Higher weight) */}
              <Line 
                type="monotone" 
                dataKey="score" 
                name="Index Path" 
                stroke="#991B1B" 
                strokeWidth={4} 
                dot={{ r: 4, fill: '#991B1B', strokeWidth: 2, stroke: 'white' }} 
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* DIAGNOSTIC SUMMARY */}
      <div className="bg-[#0f172a] rounded-[2.5rem] p-7 text-white relative overflow-hidden shadow-xl border border-white/5">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-white pointer-events-none">
           <LineChart size={140} />
        </div>
        
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-700">
               <Microscope size={20} />
            </div>
            <h4 className="text-md font-black uppercase italic tracking-tight">{activeData.label} <span className="text-white/20">Summary</span></h4>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
             {activeData.sprints.map((sprint, i) => (
               <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[6px] font-black text-white/30 uppercase tracking-widest">{sprint.label}</span>
                  <p className="text-[9px] font-black font-mono-data tracking-tight truncate">{sprint.value}</p>
               </div>
             ))}
          </div>

          <div className="space-y-4">
             <p className="text-[11px] font-medium italic text-slate-300 leading-relaxed font-serif">
               "{activeData.detailedAnalysis.substring(0, 140)}..."
             </p>
             <button 
                onClick={() => onNavigate('strategy')}
                className="w-full bg-white text-[#0f172a] py-3.5 rounded-2xl font-black text-[9px] uppercase tracking-[0.3em] shadow-xl flex items-center justify-center gap-2"
              >
                Go to Strategy <ArrowRight size={12} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
