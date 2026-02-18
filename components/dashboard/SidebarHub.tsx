
import React from 'react';
import { ShieldCheck, Heart, Footprints, Calendar, ChevronRight, Droplets, Download, Moon, Zap, Smartphone, Activity, RefreshCcw, FileText, Send } from 'lucide-react';
import AIChat from '../AIChat';

const IntegrationItem: React.FC<{ name: string; icon: React.ReactNode; status: 'Live' | 'Syncing' | 'Last Check'; color: string; time?: string }> = ({ name, icon, status, color, time }) => (
  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:bg-white transition-all group">
     <div className="flex items-center gap-2.5">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color} border border-black/[0.03] shadow-sm group-hover:scale-105 transition-transform`}>
          {icon}
        </div>
        <div>
           <p className="text-[8px] font-black text-[#111827] uppercase tracking-widest leading-none">{name}</p>
           <p className="text-[6px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">{time || 'Connected'}</p>
        </div>
     </div>
     <div className="flex items-center gap-1.5">
        <span className={`text-[6px] font-black uppercase tracking-widest ${status === 'Syncing' ? 'text-amber-500' : 'text-emerald-500'}`}>{status}</span>
        <div className={`w-1 h-1 rounded-full ${status === 'Syncing' ? 'bg-amber-500 animate-spin' : 'bg-emerald-500 animate-pulse'}`} />
     </div>
  </div>
);

const FloatingActionHub: React.FC = () => (
  <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[100] hidden xl:flex">
    <div className="flex flex-col p-2 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl space-y-2">
       {[
         { icon: <RefreshCcw size={16} />, label: "Sync Strava", color: "hover:bg-orange-500/20" },
         { icon: <FileText size={16} />, label: "Lab PDF", color: "hover:bg-blue-500/20" },
         { icon: <Send size={16} />, label: "Contact MD", color: "hover:bg-red-500/20" }
       ].map((btn, i) => (
         <button key={i} className={`w-12 h-12 flex items-center justify-center rounded-xl text-white/40 transition-all ${btn.color} hover:text-white group relative`}>
           {btn.icon}
           <span className="absolute right-full mr-4 px-3 py-1.5 bg-zinc-900 text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
             {btn.label}
           </span>
         </button>
       ))}
    </div>
  </div>
);

export const SidebarHub: React.FC = () => {
  return (
    <div className="lg:col-span-4 space-y-4">
      <FloatingActionHub />
      
      <div className="scale-[0.98] origin-top">
        <AIChat />
      </div>

      {/* Connectivity Tracker */}
      <div className="bg-white/95 rounded-[2.5rem] p-6 border border-black/[0.02] shadow-2xl space-y-4">
         <div className="flex items-center justify-between">
           <h3 className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-400">System Linkage</h3>
           <RefreshCcw size={14} className="text-zinc-200 animate-[spin_10s_linear_infinite]" />
         </div>
         <div className="space-y-2">
            <IntegrationItem 
              name="Apple Health" 
              icon={<Smartphone size={14} className="text-red-500" />} 
              status="Live" 
              color="bg-red-50" 
              time="1m ago"
            />
            <IntegrationItem 
              name="Strava" 
              icon={<Activity size={14} className="text-orange-500" />} 
              status="Syncing" 
              color="bg-orange-50" 
            />
            <IntegrationItem 
              name="Garmin" 
              icon={<Activity size={14} className="text-blue-500" />} 
              status="Last Check" 
              color="bg-blue-50" 
              time="08:14"
            />
         </div>
      </div>

      {/* Bio-Feed Sync */}
      <div className="bg-white/95 rounded-[2.5rem] p-6 border border-black/[0.02] shadow-2xl space-y-6">
         <div className="flex items-center justify-between">
          <h3 className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-400">Bio Sync</h3>
          <ShieldCheck size={16} className="text-emerald-500/30" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: <Moon size={16} />, value: "7h 42m", label: "Sleep", color: "text-indigo-500/50" },
            { icon: <Heart size={16} />, value: "48 bpm", label: "Rest-HR", color: "text-red-500/50" },
            { icon: <Zap size={16} />, value: "68 ms", label: "HRV", color: "text-amber-500/50" },
            { icon: <Footprints size={16} />, value: "13.2k", label: "Steps", color: "text-emerald-500/50" },
          ].map((sync, i) => (
            <div key={i} className="bg-zinc-50/50 p-4 rounded-2xl border border-zinc-100 space-y-1 hover:bg-white transition-all group">
              <div className={sync.color}>{sync.icon}</div>
              <p className="text-lg font-black text-[#111827] tracking-tighter leading-none">{sync.value}</p>
              <p className="text-[6px] font-bold text-zinc-400 uppercase tracking-[0.2em]">{sync.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnostic Timeline */}
      <div className="bg-white/95 border border-white/50 rounded-[2.5rem] p-7 space-y-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-400">History</h3>
          <Calendar size={16} className="text-zinc-200" />
        </div>
        <div className="space-y-2">
          {['Jan 2024', 'Oct 2023'].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-zinc-100/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-300 group-hover:text-red-800 transition-colors">
                  <Droplets size={16} />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#111827] block">{item}</span>
                  <span className="text-[7px] font-bold text-zinc-400 uppercase tracking-widest">Full Panel</span>
                </div>
              </div>
              <button className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-black transition-all">
                <Download size={12} />
              </button>
            </div>
          ))}
        </div>
        <button className="w-full py-4 rounded-xl bg-[#111827] text-white text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 group">
          Download Archive <Download size={14} />
        </button>
      </div>
    </div>
  );
};
