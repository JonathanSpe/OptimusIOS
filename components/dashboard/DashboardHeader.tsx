
import React from 'react';
import { CheckCircle2, Clock, CalendarDays, Server } from 'lucide-react';

export const DashboardHeader: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
      <div className="space-y-1">
         <div className="flex items-center gap-4">
            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter leading-none uppercase text-[#0F172A]">Biometric <span className="text-slate-300 italic">Feed</span></h1>
         </div>
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Optimus Clinical Protocol v5.2_Enterprise</p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl">
        <div className="flex-1 bg-white px-8 py-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center justify-between w-full">
           <div className="flex items-center gap-10">
             <div className="space-y-0.5">
               <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest leading-none">Last Sync State</p>
               <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-tight font-mono-data">15. JAN 24</span>
                  <CheckCircle2 size={12} className="text-emerald-500" />
               </div>
             </div>
             <div className="w-px h-8 bg-slate-100" />
             <div className="space-y-0.5">
               <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest leading-none">Telemetry Region</p>
               <div className="flex items-center gap-2 text-slate-600">
                  <span className="text-xs font-black uppercase tracking-tight">EU-WEST-3</span>
                  <Server size={12} />
               </div>
             </div>
           </div>
           <div className="text-right">
             <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest leading-none">Next Lab Cycle</p>
             <p className="text-sm font-black uppercase tracking-tight text-red-800 flex items-center justify-end gap-2 font-mono-data">
               15. APR <Clock size={14} className="animate-pulse" />
             </p>
           </div>
        </div>
        <button className="px-10 py-5 bg-[#0F172A] text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/10 flex items-center gap-3 active:scale-95">
          <CalendarDays size={14} /> Schedule Sync
        </button>
      </div>
    </div>
  );
}
