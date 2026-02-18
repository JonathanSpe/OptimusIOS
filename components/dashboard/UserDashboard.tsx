
import React, { useState, useMemo } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { MolecularOrbit } from './MolecularOrbit';
import { AnalysisPanel } from './AnalysisPanel';
import { SidebarHub } from './SidebarHub';
import { categoryData } from './DashboardData';
import { Activity, HeartPulse, Zap, Download, Microscope, ShieldCheck } from 'lucide-react';

const SummarySidebar: React.FC = () => (
  <div className="flex flex-col gap-4">
    {/* Overall Status Score */}
    <div className="bg-[#0f172a] p-10 rounded-[3rem] border border-white/5 text-white space-y-8 relative overflow-hidden group shadow-2xl">
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-white pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
        <Zap size={120} />
      </div>
      <div className="flex items-center justify-between relative z-10">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Overall Status Score</span>
        <div className="px-2 py-1 bg-white/10 border border-white/10 rounded-lg text-[8px] font-black text-red-500 uppercase tracking-widest animate-pulse">Live Tracking</div>
      </div>
      <div className="flex items-baseline gap-2 relative z-10">
        <span className="text-8xl font-mono-data font-black text-white tracking-tighter leading-none">91</span>
        <span className="text-white text-3xl font-black">%</span>
      </div>
      <div className="pt-6 border-t border-white/10 space-y-4 relative z-10">
        <p className="text-[11px] font-bold text-white/80 uppercase tracking-widest leading-relaxed">Optimization protocol running: All clinical domains operating in prime homeostatic balance.</p>
        
        {/* Expanded Technical Breakdown */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
           <div className="space-y-1">
             <span className="text-[8px] font-black text-white/40 uppercase tracking-widest block">CNS Variability</span>
             <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">+12.4% Stable</span>
           </div>
           <div className="space-y-1">
             <span className="text-[8px] font-black text-white/40 uppercase tracking-widest block">HPG Integrity</span>
             <span className="text-[10px] font-bold text-white uppercase tracking-tighter">98th Percentile</span>
           </div>
        </div>
        
        <button className="w-full mt-2 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/80 hover:bg-white hover:text-slate-900 transition-all active:scale-95">
          View Neural Profile
        </button>
      </div>
    </div>

    {/* Bio-Aging Metric */}
    <div className="bg-white p-10 rounded-[3rem] border border-slate-200 medical-card-shadow space-y-8 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Biological Age</span>
        <HeartPulse size={18} className="text-red-800 opacity-20" />
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-7xl font-black tracking-tighter text-slate-900 leading-none font-mono-data">29</span>
        <div className="flex flex-col">
           <span className="text-emerald-500 font-black text-xs uppercase tracking-widest">-3.2Y</span>
           <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">vs Norm</span>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-[11px] font-medium text-slate-500 leading-relaxed italic border-l-2 border-slate-100 pl-4">
          Cellular methylation analysis suggests high regenerative capacity and low oxidative stress burden.
        </p>
        
        {/* Expanded Cellular Telemetry */}
        <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 space-y-4">
          <div className="flex items-center gap-3">
            <Microscope size={14} className="text-slate-400" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Cellular Telemetry</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-900">
               <span className="uppercase tracking-tight">Methylation Cycle</span>
               <span className="text-emerald-500">OPTIMAL</span>
            </div>
            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
              <div className="w-[92%] h-full bg-emerald-500" />
            </div>
            <p className="text-[9px] text-slate-400 leading-relaxed font-semibold">
              Telomere length integration predicts enhanced mitochondrial efficiency through Q4.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Telemetry Integration Preview */}
    <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 flex items-center justify-between">
       <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-100">
             <Activity size={18} className="text-orange-500" />
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-900">Strava TSS Sync</p>
            <p className="text-[8px] font-bold text-slate-400">Load: 88 (Heavy)</p>
          </div>
       </div>
       <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
    </div>
  </div>
);

const UserDashboard: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  const [selectedKey, setSelectedKey] = useState<string>('Sports');
  const activeData = categoryData[selectedKey];
  const categories = useMemo(() => Object.keys(categoryData), []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <DashboardHeader />

        {/* Primary Analytical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Visual Anchor */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Download Report Bar */}
            <div className="bg-white border border-slate-100 px-10 py-5 rounded-[2.5rem] flex items-center justify-between shadow-sm">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-red-800/5 flex items-center justify-center text-red-800">
                   <Download size={18} />
                 </div>
                 <div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 block">Report Center</span>
                   <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Q2 Clinical Protocol is ready</span>
                 </div>
               </div>
               <button className="text-[10px] font-black text-red-800 uppercase tracking-widest hover:underline px-6 py-2 border border-red-800/10 rounded-xl hover:bg-red-50 transition-all">
                 Download Detailed Report (PDF)
               </button>
            </div>

            <div className="bg-white rounded-[3.5rem] border border-slate-200 medical-card-shadow overflow-hidden relative">
              <MolecularOrbit 
                categories={categories} 
                selectedKey={selectedKey} 
                onSelect={setSelectedKey} 
              />
            </div>
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-4">
            <SummarySidebar />
          </div>
        </div>

        {/* Secondary Detailed Data */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <AnalysisPanel activeData={activeData} onNavigate={onNavigate} />
          <SidebarHub />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
