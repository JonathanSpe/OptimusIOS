
import React, { useState, useRef, useEffect } from 'react';
import { 
  Pill, Moon, Activity, Timer, 
  ArrowLeft, Info, Sparkles, Coffee, 
  TrendingUp, TrendingDown, Brain, 
  ShoppingCart, ShieldCheck, Box, Tag, Award,
  Utensils, Dumbbell, ZapOff, Trash2, Plus, 
  Truck, FlaskConical, ChevronDown, ChevronUp, 
  Target, Zap, Leaf, ZapIcon, HeartPulse, 
  Send, Bot, Loader2, MessageSquare, Fingerprint,
  Cpu, RefreshCw
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface SupplementData {
  id: number;
  name: string;
  dose: string;
  status: 'ACTIVE' | 'UPDATED' | 'PAUSED';
  category: string;
  reason: string;
  explanation: string;
  tip?: string;
}

const SupplementItem: React.FC<{ 
  name: string; 
  dose: string; 
  reason: string; 
  explanation: string;
  tip?: string; 
  status: 'ACTIVE' | 'UPDATED' | 'PAUSED';
  onToggle?: () => void;
}> = ({ name, dose, reason, explanation, tip, status, onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`space-y-1 p-4 rounded-[1.8rem] border transition-all medical-card-shadow group ${
        status === 'PAUSED' ? 'bg-slate-50/50 opacity-60 grayscale border-slate-100' : 'bg-white border-slate-100 hover:border-slate-300'
      }`}
    >
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
            status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-600' :
            status === 'UPDATED' ? 'bg-amber-50 text-amber-600' :
            'bg-slate-100 text-slate-400'
          }`}>
            <Pill size={16} />
          </div>
          <div className="max-w-[140px]">
            <div className="flex items-center gap-2">
              <h4 className="font-[900] text-[#0F172A] text-[11px] uppercase tracking-tight truncate">{name}</h4>
              <span className={`text-[6px] font-extrabold px-1 py-0.5 rounded-full uppercase tracking-tighter ${
                status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                status === 'UPDATED' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                'bg-slate-100 text-slate-600 border border-slate-200'
              }`}>
                {status}
              </span>
            </div>
            <p className="text-[9px] text-slate-500 font-bold truncate">{reason}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-[900] text-slate-900 uppercase tracking-widest">{status === 'PAUSED' ? '0mg' : dose}</span>
          {isExpanded ? <ChevronUp size={12} className="text-slate-300" /> : <ChevronDown size={12} className="text-slate-300" />}
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] mt-3 pb-2 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 space-y-3">
           <div className="space-y-1">
             <span className="text-red-800 font-black uppercase text-[8px] tracking-widest flex items-center gap-1.5">
               Targeted Insight
             </span>
             <p className="text-[10px] text-slate-600 leading-relaxed font-semibold">
               {explanation}
             </p>
           </div>
           {tip && (
            <div className={`flex items-center gap-2 text-[8px] font-extrabold uppercase tracking-widest pt-2 border-t border-slate-100 ${status === 'PAUSED' ? 'text-slate-400' : 'text-red-800'}`}>
              <Info size={10} className="opacity-60" /> {tip}
            </div>
           )}
           <button 
             onClick={(e) => { e.stopPropagation(); onToggle?.(); }}
             className="w-full mt-2 py-2 rounded-xl border border-slate-200 bg-white text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-red-800 hover:border-red-800/20 transition-all"
           >
             {status === 'PAUSED' ? 'In Ration aufnehmen' : 'Pausieren'}
           </button>
        </div>
      </div>
    </div>
  );
};

const LifestyleCard: React.FC<{
  rec: { icon: React.ReactNode; label: string; text: string; why: string; data: string };
}> = ({ rec }) => {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-7 medical-card-shadow space-y-5 transition-all hover:border-slate-200">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0F172A]">
          {React.cloneElement(rec.icon as React.ReactElement, { size: 20 })}
        </div>
        <div className="px-2 py-1 bg-red-800/[0.03] border border-red-800/10 rounded-lg text-[8px] font-black text-red-800 uppercase tracking-widest">
          {rec.data}
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="font-black text-xs text-[#0F172A] uppercase tracking-tight">{rec.label}</h4>
        <p className="text-[12px] font-bold text-slate-600 leading-relaxed">
          {rec.text}
        </p>
        
        <div className="pt-1">
          <button 
            onClick={() => setShowAnalysis(!showAnalysis)}
            className="text-[8px] font-black text-red-800 uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <Target size={10} /> {showAnalysis ? 'Schließen' : 'Hintergrund'}
            {showAnalysis ? <ChevronUp size={8} /> : <ChevronDown size={8} />}
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showAnalysis ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-4 bg-red-800/[0.03] border border-red-800/5 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-500 italic leading-snug">
                "{rec.why}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StrategyChat: React.FC<{ strategyContext: string }> = ({ strategyContext }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Jonathan, ich habe deine Q2-Strategie vollständig geladen. Hast du Fragen zur Dosierung deiner Supplements?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMsg }].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `Du bist der Optimus Strategie-Berater. Kontext: Jonathan, Ironman-Athlet. Seine Q2 Strategie fokussiert auf Eisen und Magnesium. Hilf ihm, seine molekularen und Lifestyle-Empfehlungen zu verstehen. Antworte präzise, professionell und auf Deutsch.`,
          temperature: 0.7,
        },
      });
      setMessages(prev => [...prev, { role: 'model', text: response.text || 'Analyse-Fehler.' }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'Fehler. Später erneut versuchen.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0F172A] rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row gap-8">
      <div className="absolute top-0 right-0 p-16 opacity-[0.03] text-white pointer-events-none">
        <Fingerprint size={180} />
      </div>
      
      <div className="space-y-6 relative z-10 flex-shrink-0 md:max-w-[300px]">
        <div className="space-y-3">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-800">
                <Bot size={20} />
              </div>
              <h2 className="text-[9px] font-[900] uppercase tracking-[0.4em] text-white/40">Q2 Advisor</h2>
           </div>
           <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-tight">
             Frage deine <br /><span className="text-white/30 italic">Biologie.</span>
           </h2>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {["Eisen-Timing?", "Magnesium?", "Ferritin?"].map(q => (
            <button 
              key={q} 
              onClick={() => { setInput(q); }}
              className="text-left px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest text-white/60 hover:bg-white/10 hover:text-white transition-all"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white/5 rounded-[2.5rem] p-5 border border-white/10 flex flex-col h-[300px] relative z-10">
        <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-3 pr-1 mb-4 scrollbar-thin">
           {messages.map((m, i) => (
             <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
               <div className={`max-w-[90%] p-3 rounded-xl text-[10px] font-bold leading-relaxed ${
                 m.role === 'user' ? 'bg-red-800 text-white' : 'bg-white/10 text-slate-300'
               }`}>
                 {m.text}
               </div>
             </div>
           ))}
        </div>
        <div className="relative">
          <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Frage stellen..."
            className="w-full bg-white/10 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-xs text-white placeholder:text-white/20 focus:outline-none transition-all"
          />
          <button 
            onClick={handleSend}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-red-800 text-white flex items-center justify-center"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

const RecommendationsPage: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'molecular' | 'lifestyle'>('molecular');
  const [supplements, setSupplements] = useState<SupplementData[]>([
    { id: 1, name: "Eisenbisglycinat", dose: "15mg", status: 'UPDATED', category: 'essential', reason: "Ferritin-Korrektur", explanation: "Deine Sauerstoff-Transportkapazität ist dein Flaschenhals. Ferritin 60ng/ml ist suboptimal.", tip: "Strikt 45 Min. VOR dem Kaffee einnehmen." },
    { id: 2, name: "Vitamin D3 + K2", dose: "5000 IU", status: 'ACTIVE', category: 'essential', reason: "Hormon-Präkursor", explanation: "Wir gleichen das Defizit aus, um die Testosteron-Resynthese stabil zu halten." },
    { id: 3, name: "Magnesium-Glycinat", dose: "400mg", status: 'ACTIVE', category: 'essential', reason: "Regeneration", explanation: "Das Glycinat-Chelat hilft dir, schneller in den Recovery-Modus zu schalten." },
    { id: 4, name: "Omega-3 Ultra", dose: "2000mg", status: 'ACTIVE', category: 'optional', reason: "Entzündungshemmung", explanation: "Senkt systemische Inflammation.", tip: "Zu fettreichem Essen einnehmen." },
    { id: 5, name: "Ashwagandha", dose: "600mg", status: 'ACTIVE', category: 'optional', reason: "Stress-Management", explanation: "Senkt das nächtliche Cortisol." },
    { id: 6, name: "B-Komplex", dose: "0mg", status: 'PAUSED', category: 'paused', reason: "Status: Optimal", explanation: "Aktuelle Blutwerte zeigen optimalen B12-Spiegel." }
  ]);

  const toggleStatus = (id: number) => {
    setSupplements(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, status: s.status === 'PAUSED' ? 'ACTIVE' : 'PAUSED' };
      }
      return s;
    }));
  };

  const totalPrice = 25.80;

  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-12 pb-24 px-5 text-[#0F172A]">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER */}
        <div className="space-y-4">
          <button 
            onClick={() => onNavigate('user-dashboard')}
            className="flex items-center gap-2 text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] group"
          >
            <ArrowLeft size={11} className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>
          <h1 className="text-4xl font-black tracking-tighter text-[#0F172A] leading-none uppercase">
            Q2 <span className="text-slate-900/20 italic">Strategie</span>
          </h1>
        </div>

        {/* 1. DAILY RATION PACK - STACKED FOR MOBILE */}
        <div className="bg-white border border-slate-100 rounded-[3rem] p-7 md:p-14 relative overflow-hidden shadow-sm medical-card-shadow">
          <div className="flex flex-col lg:flex-row gap-10 relative z-10">
            
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-800/[0.03] border border-red-800/10 text-red-800 text-[8px] font-black uppercase tracking-[0.2em]">
                  Elite Protocol v4
                </div>
                <h2 className="text-2xl font-black text-[#0F172A] tracking-tighter leading-tight">
                  Deine <span className="text-slate-900/30 italic">Daily-Ration</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <ShieldCheck size={14} />, label: "Geprüft" },
                  { icon: <Box size={14} />, label: "30 Tage" },
                  { icon: <Truck size={14} />, label: "Gratis" },
                  { icon: <RefreshCw size={14} />, label: "Abo" }
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-red-800 shrink-0">
                      {f.icon}
                    </div>
                    <span className="text-[9px] font-black text-[#0F172A] uppercase tracking-widest">{f.label}</span>
                  </div>
                ))}
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-100">
                 <img 
                  src="https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Tagesrationen%20Supplements.png" 
                  alt="Daily Sachet" 
                  className="w-full h-full object-cover grayscale opacity-80"
                 />
              </div>
            </div>

            {/* RIGHT: Compact Checkout */}
            <div className="bg-[#0F172A] rounded-[2.5rem] p-6 text-white flex flex-col shadow-2xl h-fit">
               <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                     <p className="text-xs font-black uppercase tracking-tight">Übersicht</p>
                     <div className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md">
                       <span className="text-[7px] font-black text-red-800 uppercase tracking-widest">PRO-20</span>
                     </div>
                  </div>
                  
                  <div className="max-h-[140px] overflow-y-auto space-y-2 pr-1 scrollbar-thin">
                    {supplements.filter(s => s.status !== 'PAUSED').map((s) => (
                      <div key={s.id} className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                         <div className="flex items-center gap-2">
                            <Pill size={12} className="text-red-800" />
                            <p className="text-[9px] font-black text-white uppercase truncate max-w-[100px]">{s.name}</p>
                         </div>
                         <button onClick={() => toggleStatus(s.id)} className="text-white/20 hover:text-red-800 p-1">
                           <Trash2 size={10} />
                         </button>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/10 flex justify-between items-end">
                      <span className="text-[8px] font-black uppercase text-white/40">Total Pack</span>
                      <span className="text-2xl font-black text-white tracking-tighter">{totalPrice.toFixed(2)}€</span>
                  </div>

                  <button className="w-full bg-white text-[#0F172A] py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2">
                    Bestätigen <ShoppingCart size={14} />
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* 2. OPTIMIERUNGS ÜBERSICHT & NAV */}
        <div className="space-y-6">
          <div className="bg-slate-100/50 p-1.5 rounded-2xl flex items-center border border-slate-200/50">
            <button 
              onClick={() => setActiveTab('molecular')}
              className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                activeTab === 'molecular' ? 'bg-white shadow text-[#0F172A]' : 'text-slate-400'
              }`}
            >
              Molekular
            </button>
            <button 
              onClick={() => setActiveTab('lifestyle')}
              className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                activeTab === 'lifestyle' ? 'bg-white shadow text-[#0F172A]' : 'text-slate-400'
              }`}
            >
              Lifestyle
            </button>
          </div>

          <div className="transition-all duration-500">
            {activeTab === 'molecular' ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
                <div className="space-y-4">
                  <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 px-2">Essentials</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {supplements.filter(s => s.category === 'essential').map(s => (
                      <SupplementItem 
                        key={s.id}
                        name={s.name} dose={s.dose} status={s.status} 
                        reason={s.reason} explanation={s.explanation}
                        tip={s.tip} onToggle={() => toggleStatus(s.id)}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 px-2">Optionals</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {supplements.filter(s => s.category === 'optional').map(s => (
                      <SupplementItem 
                        key={s.id}
                        name={s.name} dose={s.dose} status={s.status} 
                        reason={s.reason} explanation={s.explanation}
                        onToggle={() => toggleStatus(s.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { 
                      icon: <Utensils />, 
                      label: "Nährstoffdichte", 
                      text: "Fokussiere dich auf eisenreiche Kost kombiniert mit B12-Quellen.", 
                      why: "Dein Ferritin-Wert von 60ng/ml limitiert deine Ausdauer.",
                      data: "Ferritin 60"
                    },
                    { 
                      icon: <Leaf />, 
                      label: "Magnesium", 
                      text: "Integriere täglich magnesiumreiche Lebensmittel.", 
                      why: "Dein Status zeigt bei hoher Belastung abnehmende Tendenz.",
                      data: "ATP-Level"
                    },
                    { 
                      icon: <Coffee />, 
                      label: "Kaffee-Timing", 
                      text: "Halte 60 Minuten Abstand zwischen Kaffee und Mahlzeiten.", 
                      why: "Steigert deine Eisen-Resorptionsrate um bis zu 40%.",
                      data: "Resorption"
                    }
                  ].map((rec, i) => <LifestyleCard key={i} rec={rec} />)}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. STRATEGY CHAT ADVISOR */}
        <StrategyChat strategyContext="Jonathan, Ferritin 60ng/ml, SHBG erhöht. Fokus: Sauerstoff Q2." />

        {/* DOCTOR VALIDATION */}
        <div className="pt-8 border-t border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 grayscale opacity-60">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop" alt="Dr. Hering" />
          </div>
          <div>
            <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest leading-none mb-1">Validated Strategy</p>
            <p className="text-[#0F172A] font-black italic text-sm tracking-tighter leading-none">Dr. med. Christian Hering</p>
          </div>
        </div>

      </div>
      <style>{`
        .scrollbar-thin::-webkit-scrollbar { width: 2px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default RecommendationsPage;
