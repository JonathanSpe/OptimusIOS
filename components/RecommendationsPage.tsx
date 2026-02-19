import React from 'react';
import { 
  Zap, Pill, Moon, Activity, Timer, 
  CheckCircle2, AlertCircle, ArrowLeft, 
  Info, Sparkles, Coffee, Sun, CloudMoon,
  TrendingUp, TrendingDown, Brain, Heart,
  XCircle, RotateCcw, Clock, ShoppingCart, 
  ChevronRight, ShieldCheck, Box, Tag, Award,
  Utensils, Dumbbell, ZapOff, Flame, Microscope,
  Dna, Fingerprint
} from 'lucide-react';

// Helper component for individual supplements in the molecular protocol
const SupplementItem: React.FC<{ 
  name: string; 
  dose: string; 
  reason: string; 
  tip?: string; 
  status: 'ACTIVE' | 'UPDATED' | 'PAUSED' 
}> = ({ name, dose, reason, tip, status }) => {
  return (
    <div className={`space-y-3 p-8 rounded-[2.5rem] border border-slate-100 transition-all medical-card-shadow group ${
      status === 'PAUSED' ? 'bg-slate-50/50 opacity-60 grayscale' : 'bg-[#FDFDFD] hover:bg-white hover:border-slate-200'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h4 className="font-[900] text-[#0F172A] text-base uppercase tracking-tight">{name}</h4>
          <span className={`text-[8px] font-extrabold px-3 py-1 rounded-full uppercase tracking-[0.2em] ${
            status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
            status === 'UPDATED' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
            'bg-slate-100 text-slate-600 border border-slate-200'
          }`}>
            {status}
          </span>
        </div>
        <span className="text-[11px] font-[800] text-slate-400 uppercase tracking-widest">{status === 'PAUSED' ? '0mg' : dose}</span>
      </div>
      <p className="text-xs text-slate-500 leading-relaxed font-semibold">{reason}</p>
      {tip && (
        <div className={`flex items-center gap-2.5 text-[10px] font-extrabold uppercase tracking-widest mt-3 ${status === 'PAUSED' ? 'text-slate-400' : 'text-red-800'}`}>
          <Info size={12} className="opacity-60" /> {tip}
        </div>
      )}
    </div>
  );
};

// Custom SVG component for the FlaskConical icon used in medical branding
const FlaskConical: React.FC<{ size?: number, className?: string }> = ({ size = 24, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M10 2v7.5" />
      <path d="M14 2v7.5" />
      <path d="M8.5 2h7" />
      <path d="M14 9.5a2 2 0 1 1 0 4c-.2 0-.4 0-.6-.1" />
      <path d="M10.6 13.4c-.2.1-.4.1-.6.1a2 2 0 1 1 0-4" />
      <path d="m14 13.5 4.5 7.5c.3.5.3 1.1 0 1.6-.3.5-.8.9-1.4.9H6.9c-.6 0-1.1-.4-1.4-.9-.3-.5-.3-1.1 0-1.6l4.5-7.5" />
    </svg>
  );
};

interface RecommendationsPageProps {
  onNavigate: (page: any) => void;
}

const RecommendationsPage: React.FC<RecommendationsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-36 pb-24 px-6 text-[#0F172A]">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="space-y-5">
            <button 
              onClick={() => onNavigate('user-dashboard')}
              className="flex items-center gap-2.5 text-slate-400 hover:text-[#0F172A] transition-all text-[11px] font-extrabold uppercase tracking-[0.2em] group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Zurück zum Dashboard
            </button>
            <h1 className="text-7xl lg:text-[8.5rem] font-[900] tracking-[-0.04em] text-[#0F172A] leading-[0.85]">
              Deine <br /> <span className="text-slate-900/40 italic font-[800]">Strategie.</span>
            </h1>
          </div>
          <div className="p-10 rounded-[3rem] bg-white border border-slate-100 flex items-center gap-10 shadow-sm medical-card-shadow">
             <div className="text-right">
               <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">Performance Score</p>
               <p className="text-5xl font-[900] text-[#0F172A] tracking-tighter">92</p>
             </div>
             <div className="w-[1px] h-14 bg-slate-100" />
             <div className="flex items-center gap-2.5 text-emerald-600">
               <TrendingUp size={22} />
               <span className="text-[10px] font-extrabold uppercase tracking-[0.15em]">+4% vs Vormonat</span>
             </div>
          </div>
        </div>

        {/* Protocol Correction - Scaled Down & Refined */}
        <div className="p-1 rounded-[3.5rem] bg-gradient-to-br from-slate-100 to-transparent shadow-md max-w-5xl mx-auto">
          <div className="bg-white rounded-[3.4rem] p-10 md:p-14 border border-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-[0.015] text-red-800 pointer-events-none">
                <RotateCcw size={180} />
             </div>
             
             <div className="flex flex-col gap-10 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-red-800 shadow-sm">
                    <AlertCircle size={26} />
                  </div>
                  <div>
                    <h2 className="text-xl font-[900] text-[#0F172A] uppercase tracking-tight">Protokoll-Korrektur</h2>
                    <p className="text-red-800 text-[9px] font-extrabold uppercase tracking-[0.25em]">Dringlichkeitsstufe: Hoch</p>
                  </div>
                </div>

                <div className="space-y-6 max-w-3xl">
                  <h3 className="text-3xl md:text-4xl font-[900] text-[#0F172A] leading-tight tracking-tight">Warum dein Ferritin <br /> bisher <span className="text-slate-900/40 italic font-[800]">stagnierte.</span></h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-semibold">
                    Dein letzter Biomarker-Check zeigte trotz Supplementierung nur einen minimalen Anstieg. Die KI-Analyse ergab eine <span className="text-red-800 font-[900]">Resorptions-Barriere</span> durch Zeitfenster-Interaktionen.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 rounded-[2rem] bg-slate-50/50 border border-slate-100 space-y-4">
                    <div className="flex items-center gap-3 text-slate-400">
                      <XCircle size={18} />
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Fehler-Indikator</span>
                    </div>
                    <p className="text-sm text-slate-500 font-bold leading-relaxed italic">Koffein am Frühstückstisch zeitgleich mit Eisen blockiert die Resorption massiv.</p>
                  </div>
                  <div className="p-8 rounded-[2rem] bg-white border border-red-800/10 space-y-4 shadow-sm">
                    <div className="flex items-center gap-3 text-emerald-600">
                      <CheckCircle2 size={18} />
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Anpassung</span>
                    </div>
                    <p className="text-sm text-[#0F172A] font-[800] leading-relaxed">Nüchtern-Einnahme direkt nach dem Aufstehen. Mind. 45 Min. Abstand zu Heißgetränken.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Strategy Summary - Deep Luxury Mode */}
        <div className="p-14 rounded-[4rem] bg-[#0F172A] text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-16 opacity-[0.05] text-white pointer-events-none">
              <Fingerprint size={200} />
           </div>
           <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                 <Sparkles className="text-red-700" size={28} />
                 <h2 className="text-2xl font-[900] uppercase tracking-[0.25em]">Strategie-Zusammenfassung Q2</h2>
              </div>
              <p className="text-2xl md:text-3xl text-slate-300 leading-tight font-[600] max-w-4xl tracking-tight">
                 Deine Strategie basiert auf der Synergie zwischen <span className="text-white">statischen Blutwerten</span> (Q1 Labor), <span className="text-white">dynamischen Lifestyle-Daten</span> (Strava & Apple Health) und der <span className="text-white text-red-700 italic font-[800]">Optimus AI-Engine</span>. Wir priorisieren aktuell die hormonelle Regeneration bei steigender Trainingslast.
              </p>
              <div className="flex flex-wrap gap-10 pt-6 border-t border-white/10">
                 <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-400">
                    <Microscope size={16} className="text-red-700" /> Lab-Validated
                 </div>
                 <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-400">
                    <Activity size={16} className="text-red-700" /> Live-Sync Data
                 </div>
                 <div className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-400">
                    <Dna size={16} className="text-red-700" /> Bio-Individuell
                 </div>
              </div>
           </div>
        </div>

        {/* Molecular Strategy Section */}
        <div className="space-y-16">
          <div className="flex items-center gap-5 px-4">
            <div className="w-1.5 h-10 bg-red-800/20 rounded-full"></div>
            <h2 className="text-4xl font-[900] text-[#0F172A] tracking-tighter uppercase">Molekulares Protokoll</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Optimus Basis */}
            <div className="p-12 rounded-[4rem] bg-white border border-slate-100 space-y-10 medical-card-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-red-800">
                  <Sun size={24} />
                  <span className="text-[11px] font-[900] uppercase tracking-[0.35em]">Optimus Basis</span>
                </div>
              </div>
              <div className="space-y-8">
                <SupplementItem 
                  name="Eisenbisglycinat" 
                  dose="15mg" 
                  status="UPDATED" 
                  reason="Korrektur deines latenten Mangels für besseren Sauerstofftransport." 
                  tip="Einnahme nüchtern für maximale Resorption." 
                />
                <SupplementItem 
                  name="Vitamin D3 + K2" 
                  dose="5000 IU" 
                  status="ACTIVE" 
                  reason="Erhaltung der Testosteron-Achse und Immunmodulation." 
                  tip="Zu einer fettreichen Mahlzeit einnehmen."
                />
                <SupplementItem 
                  name="Vitamin B-Komplex Forte" 
                  dose="0mg" 
                  status="PAUSED" 
                  reason="Serum-Spiegel über dem optimalen Schwellenwert. Pausierung zur Vermeidung von Hypervitaminose." 
                  tip="Re-Evaluation beim nächsten Check in Q3."
                />
                <SupplementItem 
                  name="Magnesium-Glycinat" 
                  dose="400mg" 
                  status="ACTIVE" 
                  reason="Essentiell für über 300 Enzyme und neuromuskuläre Entspannung." 
                />
              </div>
            </div>

            {/* Optionale Ergänzung */}
            <div className="p-12 rounded-[4rem] bg-slate-50/40 border border-slate-100 space-y-10 medical-card-shadow">
              <div className="flex items-center justify-between text-slate-500">
                <div className="flex items-center gap-4">
                  <CloudMoon size={24} />
                  <span className="text-[11px] font-[900] uppercase tracking-[0.35em]">Optionale Nahrungsergänzung</span>
                </div>
              </div>
              <div className="space-y-8">
                <SupplementItem 
                  name="Omega-3 Ultra" 
                  dose="2000mg" 
                  status="ACTIVE" 
                  reason="Senkung von Entzündungswerten (hs-CRP) nach Strava-Intensivblöcken." 
                  tip="Hochdosiert für neuronale Regeneration."
                />
                <SupplementItem 
                  name="Ashwagandha KSM-66" 
                  dose="600mg" 
                  status="ACTIVE" 
                  reason="Adaptogen zur Senkung des morgendlichen Cortisol-Peaks." 
                />
                <SupplementItem 
                  name="Kreatin Monohydrat" 
                  dose="5g" 
                  status="ACTIVE" 
                  reason="Unterstützung der ATP-Resynthese bei Kraft-Intervallen." 
                  tip="Täglich, unabhängig vom Training."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Daily Ration Pack Subscription - Refined */}
        <div className="bg-white border border-slate-100 rounded-[5rem] p-14 md:p-20 relative overflow-hidden group shadow-sm medical-card-shadow">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
                <div className="lg:col-span-7 space-y-10">
                   <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-800/[0.03] border border-red-800/10 text-red-800 text-[11px] font-[900] uppercase tracking-[0.25em]">
                     Individual Order ready
                   </div>
                   <h2 className="text-5xl md:text-7xl font-[900] text-[#0F172A] tracking-tighter leading-[0.9]">
                     Dein Q2 <br /> <span className="text-slate-900/40 italic font-[800]">Daily-Ration Pack</span>
                   </h2>
                   <div className="space-y-8">
                    <p className="text-slate-600 text-xl font-[600] leading-relaxed max-w-2xl">
                      Alle aktiven Komponenten deiner Molekularstrategie kommen in <span className="text-[#0F172A] font-[900]">vorportionierten Tages-Sachets</span>. GMP-zertifiziert und exakt dosiert für deine Biologie.
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[
                        "30x individuelle Tages-Sachets",
                        "Exakte Dosierung nach deinem Labor",
                        "Keine künstlichen Füllstoffe",
                        "Monatliche Lieferung (Jederzeit pausierbar)",
                        "Nachhaltige Verpackung",
                        "CO2-neutraler Versand"
                      ].map((point, i) => (
                        <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-500">
                          <CheckCircle2 size={16} className="text-red-800/40" />
                          {point}
                        </li>
                      ))}
                    </ul>
                   </div>
                   
                   <div className="relative w-full max-w-sm pt-6">
                      <img 
                        src="https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Tagesrationen%20Supplements.png" 
                        alt="Tagesrationen Supplements" 
                        className="w-full h-auto rounded-[3rem] border border-slate-100 shadow-md grayscale group-hover:grayscale-0 transition-all duration-[1500ms]"
                      />
                   </div>

                   <div className="flex flex-wrap gap-10 pt-6">
                     <div className="flex items-center gap-3 text-[11px] font-[900] uppercase tracking-[0.2em] text-slate-400">
                       <ShieldCheck size={20} className="text-emerald-600/40" /> GMP Zertifiziert
                     </div>
                     <div className="flex items-center gap-3 text-[11px] font-[900] uppercase tracking-[0.2em] text-slate-400">
                       <ZapOff size={20} className="text-red-800/40" /> Keine Füllstoffe
                     </div>
                   </div>
                </div>

                <div className="lg:col-span-5 bg-slate-50 p-12 rounded-[4rem] border border-slate-100 space-y-12 relative h-full flex flex-col justify-between shadow-inner">
                   <div className="absolute -top-4 -right-4 bg-[#0F172A] text-white text-[10px] font-[900] uppercase tracking-[0.3em] px-6 py-3 rounded-2xl shadow-lg">
                     <Award size={14} className="inline mr-2 text-red-700" /> Member Discount
                   </div>

                   <div className="space-y-8">
                      <div className="flex justify-between items-center pb-8 border-b border-slate-200">
                        <div className="flex flex-col">
                          <span className="text-base font-[900] text-[#0F172A] uppercase tracking-wider">Tages-Rationen</span>
                          <span className="text-[10px] text-slate-400 font-[800] uppercase tracking-[0.25em] mt-1.5">Monatliches Abo</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-slate-300 font-[800] line-through block">35,63 €</span>
                          <span className="text-4xl font-[900] text-[#0F172A]">28,50 € <span className="text-xs text-slate-400 font-[800]">/ Mon.</span></span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 font-[800] uppercase tracking-[0.2em] leading-relaxed">
                        Jederzeit kündbar. Basierend auf deinem Q2 Protokoll.
                      </p>
                   </div>
                   
                   <div className="pt-10 space-y-5">
                    <button className="w-full bg-[#0F172A] hover:bg-black text-white py-7 rounded-[2rem] font-[900] text-xl transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 group btn-medical">
                      Order bestätigen <ShoppingCart size={24} />
                    </button>
                    <button className="w-full bg-white border border-slate-200 text-slate-500 hover:text-[#0F172A] py-5 rounded-[2rem] font-[800] text-[11px] transition-all uppercase tracking-[0.25em] active:scale-95 shadow-sm">
                      Aktuelles Abo anpassen
                    </button>
                    <p className="text-center text-[10px] font-[900] uppercase tracking-[0.3em] text-slate-400 mt-3">Nächste Lieferung in 48 Stunden</p>
                   </div>
                </div>
             </div>
        </div>

        {/* Additional Lifestyle & Activity Tips */}
        <div className="space-y-16">
          <div className="flex items-center gap-5 px-4">
            <div className="w-1.5 h-10 bg-slate-200 rounded-full"></div>
            <h2 className="text-4xl font-[900] text-[#0F172A] tracking-tighter uppercase">Performance Lifestyle</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-10 rounded-[3rem] bg-white border border-slate-100 space-y-8 medical-card-shadow">
               <div className="w-14 h-14 rounded-3xl bg-slate-50 flex items-center justify-center text-[#0F172A] border border-slate-100 shadow-sm">
                  <Utensils size={28} />
               </div>
               <div className="space-y-4">
                  <h4 className="font-[900] text-xl uppercase tracking-tight">Ernährung</h4>
                  <ul className="space-y-4 text-sm font-bold text-slate-500">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-red-800 mt-2 shrink-0" />
                      <span className="leading-relaxed">Erhöhe die Zufuhr von Polyphenolen (Beeren, grüner Tee) zur Minderung von oxidativen Stress.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-red-800 mt-2 shrink-0" />
                      <span className="leading-relaxed">Protein-Timing: 0.4g/kg Körpergewicht alle 4 Stunden für optimalen Muskel-Erhalt.</span>
                    </li>
                  </ul>
               </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-white border border-slate-100 space-y-8 medical-card-shadow">
               <div className="w-14 h-14 rounded-3xl bg-slate-50 flex items-center justify-center text-[#0F172A] border border-slate-100 shadow-sm">
                  <Dumbbell size={28} />
               </div>
               <div className="space-y-4">
                  <h4 className="font-[900] text-xl uppercase tracking-tight">Aktivität</h4>
                  <ul className="space-y-4 text-sm font-bold text-slate-500">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-red-800 mt-2 shrink-0" />
                      <span className="leading-relaxed">Zone 2 Training priorisieren: Halte 70% deines Volumens im aeroben Bereich zur Fettstoffwechsel-Optimierung.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-red-800 mt-2 shrink-0" />
                      <span className="leading-relaxed">Explosive Kraft-Intervalle (Sprints) zur akuten Testosteron-Stimulation (2x wöchentlich).</span>
                    </li>
                  </ul>
               </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-white border border-slate-100 space-y-8 medical-card-shadow">
               <div className="w-14 h-14 rounded-3xl bg-slate-50 flex items-center justify-center text-[#0F172A] border border-slate-100 shadow-sm">
                  <Moon size={28} />
               </div>
               <div className="space-y-4">
                  <h4 className="font-[900] text-xl uppercase tracking-tight">Regeneration</h4>
                  <ul className="space-y-4 text-sm font-bold text-slate-500">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-red-800 mt-2 shrink-0" />
                      <span className="leading-relaxed">Kälteexposition (Eisbad) nur an Tagen mit primärem Fokus auf neurale Erholung, nicht nach Hypertrophie-Training.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-red-800 mt-2 shrink-0" />
                      <span className="leading-relaxed">Digital Detox 90 Min. vor Schlaf zur Melatonin-Optimierung (basierend auf deiner Sleep-Efficiency Metrik).</span>
                    </li>
                  </ul>
               </div>
            </div>
          </div>
        </div>

        {/* Doctor Signature Area */}
        <div className="pt-24 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 cursor-help shadow-lg">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop" alt="Dr. Hering" />
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-[900] uppercase tracking-[0.3em]">Medizinische Freigabe</p>
              <p className="text-[#0F172A] font-[900] italic tracking-tighter text-3xl">Dr. med. Christian Hering</p>
              <p className="text-slate-400 text-[11px] uppercase font-[800] tracking-[0.2em] mt-1">Facharzt für Endokrinologie</p>
            </div>
          </div>
          <div className="flex items-center gap-16 opacity-[0.15]">
            <ShieldCheck size={48} />
            <Award size={48} />
            <div className="w-[1px] h-14 bg-slate-400" />
            <FlaskConical size={48} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecommendationsPage;