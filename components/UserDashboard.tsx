
import React, { useState, useMemo } from 'react';
import { AnalysisPanel } from './dashboard/AnalysisPanel';
import { categoryData } from './dashboard/DashboardData';
import { Zap, HeartPulse, Activity, TrendingUp, TrendingDown, Bot, Sparkles } from 'lucide-react';
import AIChat from './AIChat';

const UserDashboard: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  const [selectedKey, setSelectedKey] = useState<string>('Sports');
  const activeData = categoryData[selectedKey];
  const categories = useMemo(() => Object.keys(categoryData), []);

  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-12 pb-24 px-5 space-y-8 overflow-x-hidden">
      {/* 1. TOP HEADER & MINI METRICS */}
      <header className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h1 className="text-3xl font-black tracking-tighter text-[#0F172A] uppercase italic leading-none">Status</h1>
          <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">Protocol v5.2_ENT</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 overflow-hidden grayscale">
          <img src="https://raw.githubusercontent.com/JonathanSpe/Optimus/05eb146bea4dbb2e2597fc672e0aea7d6995f76a/optimus---personalisierte-blutanalyse/assets/Jonathan%20Pic.png" alt="Profile" />
        </div>
      </header>

      {/* 2. COMPACT SUMMARY CARDS */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#0f172a] p-5 rounded-[2rem] text-white flex flex-col justify-between shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-10 text-white pointer-events-none">
            <Zap size={24} />
          </div>
          <span className="text-[7px] font-black uppercase tracking-[0.3em] text-white/40">Overall Index</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-4xl font-black font-mono-data tracking-tighter">91</span>
            <span className="text-[10px] font-black text-red-800">%</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-[2rem] border border-slate-100 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10 text-slate-900 pointer-events-none">
            <HeartPulse size={24} />
          </div>
          <span className="text-[7px] font-black uppercase tracking-[0.3em] text-slate-400">Bio-Age</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-4xl font-black font-mono-data tracking-tighter text-slate-900">29</span>
            <span className="text-[9px] font-black text-emerald-500 uppercase">-3.2Y</span>
          </div>
        </div>
      </div>

      {/* 3. CATEGORY NAV - HORIZONTAL SCROLL */}
      <div className="relative -mx-5 px-5 overflow-x-auto scrollbar-hide flex items-center gap-2 pb-2">
        {categories.map((catKey) => {
          const isActive = selectedKey === catKey;
          const data = categoryData[catKey];
          return (
            <button
              key={catKey}
              onClick={() => setSelectedKey(catKey)}
              className={`flex-shrink-0 px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all border ${
                isActive 
                  ? 'bg-[#0f172a] text-white border-[#0f172a] shadow-md scale-105' 
                  : 'bg-white text-slate-400 border-slate-100'
              }`}
            >
              {data.label}
            </button>
          );
        })}
      </div>

      {/* 4. BIOMARKER INSIGHT GRID */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-400">Biometric Snapshot</h3>
          <span className="text-[8px] font-black text-red-800 uppercase tracking-widest flex items-center gap-1">
             <Activity size={10} /> Live Panel
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {activeData.markers.map((marker, i) => (
            <div key={i} className="bg-white border border-slate-100 p-4 rounded-[1.8rem] shadow-sm flex flex-col gap-3 hover:border-slate-200 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest leading-none">{marker.name}</p>
                {marker.trend === 'up' ? <TrendingUp size={10} className="text-emerald-500" /> : <TrendingDown size={10} className="text-red-800" />}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-[#0f172a] tracking-tighter font-mono-data">{marker.value}</span>
                <span className="text-[8px] font-bold text-slate-300 uppercase">{marker.unit}</span>
              </div>
              <div className={`px-2 py-0.5 rounded-md text-[6px] font-black uppercase tracking-widest w-fit ${
                marker.status === 'Optimal' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
              }`}>
                {marker.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. EVOLUTION CHART SECTION */}
      <div className="pt-2">
        <AnalysisPanel activeData={activeData} onNavigate={onNavigate} />
      </div>

      {/* 6. AI PERFORMANCE CHAT */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-3 px-1">
           <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-[#0F172A]">
             <Bot size={18} />
           </div>
           <div className="space-y-0.5">
             <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#0F172A]">AI Bio-Advisor</h3>
             <div className="flex items-center gap-1.5">
               <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest italic">Analyzing markers...</span>
             </div>
           </div>
        </div>
        <AIChat />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default UserDashboard;
