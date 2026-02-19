import React, { useState } from 'react';
import { Activity, Download, History, Moon, Pill, Smartphone, TrendingDown, TrendingUp, Sparkles, Heart, Timer, Footprints, Layers, ArrowRight, Target, CheckCircle2, ShieldCheck, Cpu, Calendar, ChevronRight } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Line, Area, ComposedChart } from 'recharts';
import DashboardPreview from './DashboardPreview';
import AIChat from './AIChat';

interface BiomarkerDetail {
  name: string;
  value: string;
  unit: string;
  status: 'Optimal' | 'Stabil' | 'Kritisch' | 'Verbesserung';
  trend: 'up' | 'down' | 'stable';
}

const WearableInsightCard: React.FC<{ icon: React.ReactNode, label: string, value: string, trend: string, isPositive: boolean }> = ({ icon, label, value, trend, isPositive }) => {
  return (
    <div className="bg-white border border-black/[0.03] p-5 rounded-[2rem] space-y-2 hover:bg-zinc-50 transition-all group medical-card-shadow">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-zinc-50 flex items-center justify-center scale-90">{icon}</div>
        <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">{label}</span>
      </div>
      <div className="flex items-end justify-between gap-1">
        <p className="text-2xl font-black text-[#111827]">{value}</p>
        <span className={`text-[8px] font-bold uppercase mb-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>{trend}</span>
      </div>
    </div>
  );
};

const historyData = [
  { period: 'Q2 23', testosteron: 610, ferritin: 88, vitaminD: 32, zinc: 82, cortisol: 22, b12: 380, stravaLoad: 320, hrv: 58, steps: 8500 },
  { period: 'Q3 23', testosteron: 695, ferritin: 104, vitaminD: 46, zinc: 89, cortisol: 19, b12: 410, stravaLoad: 450, hrv: 62, steps: 11200 },
  { period: 'Q4 23', testosteron: 785, ferritin: 115, vitaminD: 55, zinc: 95, cortisol: 16, b12: 450, stravaLoad: 580, hrv: 65, steps: 12500 },
  { period: 'Q1 24', testosteron: 840, ferritin: 142, vitaminD: 65, zinc: 102, cortisol: 14, b12: 520, stravaLoad: 510, hrv: 68, steps: 13100 }
];

const categoryMapping: Record<string, { 
  biomarkers: string[], 
  colors: string[], 
  analysis: string, 
  wearableContext: string,
  detailedMarkers: BiomarkerDetail[] 
}> = {
  'Erholung': {
    biomarkers: ['cortisol', 'vitaminD'],
    colors: ['#ef4444', '#111827'],
    analysis: 'Dein Erholungs-Score korreliert stark mit deinem verbesserten HRV-Trend (+15ms). Die Senkung des Cortisols ist ein direktes Resultat der optimierten Schlafhygiene laut Apple Health.',
    wearableContext: 'HRV: 68ms (Trend: Stabil)',
    detailedMarkers: [
      { name: 'Cortisol (Speichel)', value: '14', unit: 'ng/ml', status: 'Optimal', trend: 'down' },
      { name: 'Vitamin D', value: '65', unit: 'ng/ml', status: 'Stabil', trend: 'up' },
      { name: 'hs-CRP', value: '0.8', unit: 'mg/l', status: 'Optimal', trend: 'stable' }
    ]
  },
  'Athletik': {
    biomarkers: ['testosteron', 'ferritin'],
    colors: ['#ef4444', '#111827'],
    analysis: 'Herausragende Steigerung. Trotz eines Anstiegs des Strava Training Loads um 40% bleibt dein Testosteron-Spiegel stabil ansteigend. Das Ferritin-Management verhindert das typische "Athleten-Loch".',
    wearableContext: 'Training Load: 510 (Peak)',
    detailedMarkers: [
      { name: 'Ferritin', value: '142', unit: 'ng/ml', status: 'Optimal', trend: 'up' },
      { name: 'Testosteron', value: '840', unit: 'ng/dl', status: 'Optimal', trend: 'up' },
      { name: 'Magnesium', value: '0.92', unit: 'mmol/l', status: 'Stabil', trend: 'stable' }
    ]
  },
  'Haut & Haare': {
    biomarkers: ['zinc', 'ferritin'],
    colors: ['#ef4444', '#111827'],
    analysis: 'Die Hautregeneration profitiert von der stabilen Mikronährstoff-Zufuhr. Dein Aktivitätslevel (Schritte) zeigt eine verbesserte Durchblutung des peripheren Gewebes.',
    wearableContext: 'Schritte: 13.1k avg',
    detailedMarkers: [
      { name: 'Zink (Serum)', value: '102', unit: 'µg/dl', status: 'Stabil', trend: 'stable' },
      { name: 'Ferritin', value: '142', unit: 'ng/ml', status: 'Optimal', trend: 'up' },
      { name: 'Biotin', value: '680', unit: 'ng/l', status: 'Optimal', trend: 'up' }
    ]
  },
  'Kognition': {
    biomarkers: ['b12', 'vitaminD'],
    colors: ['#ef4444', '#111827'],
    analysis: 'Dein B12-Status korreliert mit einer höheren Schlafeffizienz (88% im Schnitt). Dies reduziert mentale Fatigue nach intensiven Trainingseinheiten.',
    wearableContext: 'Tiefschlaf: 2.2h avg',
    detailedMarkers: [
      { name: 'Vitamin B12', value: '520', unit: 'pg/ml', status: 'Stabil', trend: 'up' },
      { name: 'Omega-3 Index', value: '8.4', unit: '%', status: 'Optimal', trend: 'up' },
      { name: 'Folsäure', value: '12', unit: 'ng/ml', status: 'Stabil', trend: 'stable' }
    ]
  },
  'Hormone': {
    biomarkers: ['testosteron', 'cortisol'],
    colors: ['#ef4444', '#111827'],
    analysis: 'Optimale Balance zwischen Belastung und Regeneration. Deine Apple Health Herzfrequenz-Variabilität zeigt an, dass dein Nervensystem die Hormon-Anstiege gut verarbeitet.',
    wearableContext: 'Resting HR: 47 bpm',
    detailedMarkers: [
      { name: 'Testosteron', value: '840', unit: 'ng/dl', status: 'Optimal', trend: 'up' },
      { name: 'Estradiol', value: '28', unit: 'pg/ml', status: 'Stabil', trend: 'stable' },
      { name: 'SHBG', value: '34', unit: 'nmol/l', status: 'Optimal', trend: 'stable' }
    ]
  }
};

interface UserDashboardProps {
  onNavigate: (page: any) => void;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('Athletik');
  const activeConfig = categoryMapping[selectedCategory] || categoryMapping['Athletik'];

  const integrations = [
    { name: "Strava", status: "Verbunden", color: "text-orange-600" },
    { name: "Apple Health", status: "Verbunden", color: "text-red-600" },
    { name: "Garmin", status: "Standby", color: "text-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-32 pb-24 px-6 text-[#111827]">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header & Bio-Sync Integration */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-[#111827]">Hi, Jonathan</h1>
              <div className="px-4 py-1.5 rounded-full bg-red-600/[0.04] border border-red-600/10 text-red-600 text-[9px] font-bold uppercase tracking-widest mt-2">
                Elite Member
              </div>
            </div>
            <p className="text-zinc-500 text-xl font-medium">9-Monats Performance Trend: <span className="text-red-600 italic font-bold">Optimaler Aufstieg</span></p>
          </div>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-black/[0.03] text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all shadow-sm active:scale-95">
              <Download size={14} className="text-red-600/40" /> Bio-Report
            </button>
            <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#111827] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-all shadow-md active:scale-95">
              <Activity size={14} /> Q2 Test Starten
            </button>
          </div>
        </div>

        {/* Test Timeline Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-12 bg-white border border-black/[0.03] rounded-[2.5rem] p-6 flex flex-col sm:flex-row items-center justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-red-600/[0.01] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-4 relative z-10 w-full sm:w-auto mb-4 sm:mb-0">
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Letzter Test</p>
                <p className="text-sm font-black text-[#111827]">20. Feb 2024</p>
              </div>
            </div>

            <div className="flex-1 px-4 sm:px-12 relative z-10 w-full sm:w-auto h-20 flex flex-col justify-center">
              <div className="h-1 bg-zinc-100 rounded-full w-full relative">
                <div className="absolute inset-0 bg-red-600/20 rounded-full w-[65%]" />
                <div className="absolute top-1/2 left-[65%] -translate-y-1/2 w-3 h-3 rounded-full bg-red-600 border-2 border-white shadow-sm" />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Analyse Phase</span>
                <span className="text-[8px] font-bold text-red-600 uppercase tracking-widest">Nächster Test in 32 Tagen</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-right relative z-10 w-full sm:w-auto justify-end">
              <div>
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Nächster Termin</p>
                <p className="text-sm font-black text-[#111827]">20. Mai 2024</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-red-600/40">
                <Timer size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            
            {/* Performance Overview Card */}
            <div className="bg-white rounded-[3.5rem] p-10 md:p-14 border border-black/[0.03] medical-card-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] text-red-600 pointer-events-none">
                <Target size={300} />
              </div>
              <div className="relative z-10">
                <div className="mb-10">
                   <h2 className="text-3xl font-black text-[#111827] tracking-tighter uppercase">Biologische Gesamtübersicht</h2>
                   <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-1">360° Analyse inkl. Wearable-Daten</p>
                </div>
                <DashboardPreview 
                  lightTheme={true} 
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
              </div>
            </div>

            {/* Expert Analysis Section - Medical feel */}
            <div className="p-10 bg-zinc-50 border border-black/[0.03] rounded-[3rem] relative group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <Cpu className="text-red-600/40" size={20} />
                   <h3 className="text-lg font-bold text-[#111827] uppercase tracking-tight">Expert Analysis: {selectedCategory}</h3>
                </div>
                <p className="text-[#374151] text-lg leading-relaxed font-medium">
                  {activeConfig.analysis}
                </p>
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 mt-4">
                  <CheckCircle2 size={12} className="text-green-600/60" /> Verifiziert durch Optimus Engine 2.5
                </div>
              </div>
            </div>

            {/* Granular Detail Cards */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-50 border border-black/[0.03] rounded-2xl text-zinc-400">
                  <Layers size={22} />
                </div>
                <h2 className="text-2xl font-black text-[#111827] tracking-tight uppercase">Analyse-Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeConfig.detailedMarkers.map((marker, idx) => (
                  <div key={idx} className="bg-white border border-black/[0.03] p-8 rounded-[2.5rem] hover:shadow-lg transition-all medical-card-shadow group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{marker.name}</span>
                        <div className={`w-1.5 h-1.5 rounded-full ${marker.trend === 'up' ? 'bg-green-500' : 'bg-zinc-300'}`} />
                      </div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-black text-[#111827]">{marker.value}</p>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase">{marker.unit}</span>
                      </div>
                      <div className={`text-[8px] font-black uppercase tracking-[0.2em] ${
                        marker.status === 'Optimal' ? 'text-green-600' : 'text-zinc-500'
                      }`}>
                        Status: {marker.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Chart Area - Enhanced with Strava Load for Athletik */}
            <div className="bg-white rounded-[3.5rem] p-10 md:p-14 border border-black/[0.03] medical-card-shadow">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-black text-[#111827] uppercase tracking-tight">Historischer Verlauf</h3>
                  <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Langzeit-Monitoring</p>
                </div>
                <div className="flex gap-4">
                  {activeConfig.biomarkers.map((bm, i) => (
                    <div key={bm} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: activeConfig.colors[i] }}></div>
                      <span className="text-[9px] font-black uppercase text-zinc-500">{bm}</span>
                    </div>
                  ))}
                  {selectedCategory === 'Athletik' && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-100 border border-orange-500/30"></div>
                      <span className="text-[9px] font-black uppercase text-orange-500">Strava Load</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={historyData}>
                    <defs>
                      <linearGradient id="colorStrava" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.05}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis 
                      dataKey="period" 
                      stroke="#9ca3af" 
                      fontSize={10} 
                      fontWeight="700" 
                      axisLine={false} 
                      tickLine={false} 
                      dy={10}
                    />
                    <YAxis yAxisId="rel" hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#ffffff', border: 'none', borderRadius: '24px', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}
                      labelStyle={{ fontWeight: '900', color: '#111827', marginBottom: '8px', textTransform: 'uppercase', fontSize: '10px' }}
                      itemStyle={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}
                    />
                    
                    {selectedCategory === 'Athletik' && (
                      <Area
                        yAxisId="rel"
                        type="monotone"
                        dataKey="stravaLoad"
                        fill="url(#colorStrava)"
                        stroke="#f97316"
                        strokeWidth={1}
                        strokeDasharray="5 5"
                        name="Strava Load"
                      />
                    )}

                    {activeConfig.biomarkers.map((bm, idx) => (
                      <Line 
                        key={bm} 
                        yAxisId="rel" 
                        type="monotone" 
                        dataKey={bm} 
                        stroke={activeConfig.colors[idx]} 
                        strokeWidth={4} 
                        dot={{ r: 6, fill: '#fff', strokeWidth: 3 }} 
                        activeDot={{ r: 8, strokeWidth: 0 }}
                        animationDuration={1500}
                      />
                    ))}
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Molecule Strategy Link Card */}
            <div 
              onClick={() => onNavigate('recommendations')}
              className="group relative p-12 rounded-[3.5rem] bg-zinc-50 border border-black/[0.03] hover:shadow-xl transition-all cursor-pointer overflow-hidden medical-card-shadow"
            >
              <div className="absolute top-0 right-0 p-12 text-red-600/[0.02] pointer-events-none group-hover:rotate-6 transition-transform duration-700">
                <Pill size={200} />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                 <div className="space-y-6 flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/[0.04] border border-red-600/10 text-red-600 text-[9px] font-bold uppercase tracking-widest">
                      Strategie Update
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tighter leading-tight">
                      Dein molekulares <br /> <span className="text-zinc-400 italic">Protokoll Q2</span>
                    </h3>
                    <p className="text-[#374151] text-lg font-medium leading-relaxed max-w-xl">
                      Optimierte Mikronährstoff-Zufuhr basierend auf deinen Q1 Resultaten und Live-Metriken.
                    </p>
                 </div>
                 <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-white text-[#111827] flex items-center justify-center border border-black/[0.03] group-hover:bg-[#111827] group-hover:text-white transition-all shadow-sm group-hover:scale-105 active:scale-95">
                       <ArrowRight size={32} />
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            <AIChat />

            {/* Ecosystem Connectivity in Side Panel */}
            <div className="bg-white border border-black/[0.03] rounded-[2.5rem] p-8 space-y-6 medical-card-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Bio-Sync Ecosystem</h3>
                <ShieldCheck size={14} className="text-green-500/40" />
              </div>
              <div className="space-y-3">
                {integrations.map(app => (
                  <div key={app.name} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-black/[0.02] hover:bg-zinc-100 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${app.status === 'Verbunden' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'bg-zinc-300'}`} />
                      <span className={`text-xs font-black ${app.color} uppercase tracking-widest`}>{app.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-[8px] font-bold text-zinc-400 uppercase opacity-0 group-hover:opacity-100 transition-opacity">Verwalten</span>
                       <ChevronRight size={12} className="text-zinc-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wearable Summary */}
            <div className="space-y-4">
              <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 px-2">Live Health Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <WearableInsightCard icon={<Footprints className="text-zinc-400" />} label="Steps" value="13.1k" trend="+14%" isPositive={true} />
                <WearableInsightCard icon={<Heart className="text-red-500/60" />} label="HRV" value="68ms" trend="+8" isPositive={true} />
                <WearableInsightCard icon={<Activity className="text-orange-500/60" />} label="Load" value="510" trend="Peak" isPositive={true} />
                <WearableInsightCard icon={<Moon className="text-blue-400/60" />} label="Sleep" value="88" trend="+3" isPositive={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
