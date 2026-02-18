
import React, { useState } from 'react';
import { ShieldCheck, Cpu, Microscope, UserCheck, ChevronRight, GraduationCap, ExternalLink, BookOpen, Info, X, ChevronDown, Network, Eye, CheckCircle2, Target, Fingerprint } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  desc: string;
  biomarkers: string[];
}

const SciencePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Sport');
  const [expandedDoctor, setExpandedDoctor] = useState<string | null>(null);

  const categories: Category[] = [
    { 
      id: 'Sport', 
      title: 'Sport & Performance', 
      desc: 'Optimierung von Ausdauer, Kraft und Regeneration durch die Analyse des Sauerstoff- und Energiemetabolismus.',
      biomarkers: ['Ferritin', 'Magnesium', 'Vitamin D', 'Freies T3']
    },
    { 
      id: 'Hormone', 
      title: 'Hormonelle Balance', 
      desc: 'Präzise Überwachung der Schlüsselhormone für Vitalität, Libido und emotionales Gleichgewicht.',
      biomarkers: ['Testosteron', 'Estradiol', 'SHBG', 'TSH']
    },
    { 
      id: 'Erholung', 
      title: 'Regeneration & Schlaf', 
      desc: 'Identifikation von Mikronährstoffen und Entzündungsmarkern für die nächtliche Zellreparatur.',
      biomarkers: ['hs-CRP', 'Magnesium', 'Zink']
    },
    { 
      id: 'Kognition', 
      title: 'Kognitive Leistung', 
      desc: 'Fokus, Gedächtnis und neuronale Gesundheit durch die Analyse essentieller Bausteine der Neurotransmission.',
      biomarkers: ['Vitamin B12', 'Omega-3', 'Selen']
    },
    { 
      id: 'Haare', 
      title: 'Haut & Haare', 
      desc: 'Strukturelle Gesundheit von innen durch Bausteine für Keratin- und Kollagensynthese.',
      biomarkers: ['Zink', 'Ferritin', 'Estradiol']
    }
  ];

  const biomarkerData: Record<string, { desc: string, study: string }> = {
    'Testosteron': {
      desc: 'Das primäre anabole Hormon. Kritisch für Muskelaufbau, Knochendichte und Antrieb.',
      study: 'Studie: Endocrine regulation in elite sports (JSCR 2024)'
    },
    'Estradiol': {
      desc: 'Wichtig für den Knochenstoffwechsel und die kognitive Funktion bei beiden Geschlechtern.',
      study: 'Studie: Estrogen influence on cognitive brain health (Nature 2023)'
    },
    'SHBG': {
      desc: 'Reguliert die Verfügbarkeit von freien Hormonen im Blutkreislauf.',
      study: 'Studie: SHBG as a biomarker for metabolic health (JE 2023)'
    },
    'TSH': {
      desc: 'Zentraler Marker für die Schilddrüsenfunktion und den Grundumsatz.',
      study: 'Studie: Thyroid axis and metabolic efficiency (JCEM 2024)'
    },
    'Freies T3': {
      desc: 'Das aktive Schilddrüsenhormon, das den Energieverbrauch direkt steuert.',
      study: 'Studie: Active T3 levels in endurance training (Frontiers 2023)'
    },
    'Selen': {
      desc: 'Essentielles Spurenelement für die Schilddrüsenhormon-Konversion.',
      study: 'Studie: Selenium and antioxidant status in athletes (Nutrients 2024)'
    },
    'Ferritin': {
      desc: 'Speichereisen. Entscheidend für Sauerstofftransport und ATP-Produktion.',
      study: 'Studie: Iron deficiency in non-anemic athletes (JSS 2023)'
    },
    'Magnesium': {
      desc: 'Beteiligt an über 300 enzymatischen Reaktionen, inkl. Muskelentspannung.',
      study: 'Studie: Magnesium and physical performance (MDPI 2023)'
    },
    'Vitamin D': {
      desc: 'Ein Pro-Hormon, das Immunsystem und Calciumhaushalt moduliert.',
      study: 'Studie: Vitamin D and immune modulation in sports (MSSE 2024)'
    },
    'Vitamin B12': {
      desc: 'Essenziell für die Nervenfunktion und die Bildung roter Blutkörperchen.',
      study: 'Studie: B12 and cognitive reserve in adults (JCN 2023)'
    },
    'Zink': {
      desc: 'Baustein für Enzyme, wichtig für Testosteronproduktion und Wundhealung.',
      study: 'Studie: Zinc status and hormonal health (Biol Trace Elem Res 2023)'
    },
    'hs-CRP': {
      desc: 'Hochsensitiver Marker für systemische Entzündungen im Körper.',
      study: 'Studie: Silent inflammation in endurance runners (Sports Med 2024)'
    },
    'Omega-3': {
      desc: 'Essentielle Fettsäuren für die Gehirngesundheit und Entzündungshemmung.',
      study: 'Studie: Omega-3 index and cardiovascular risk (JCL 2023)'
    }
  };

  const doctors = [
    {
      id: 'hering',
      name: "Prof. Dr. med. Julian Hering",
      role: "Leitender Labormediziner",
      focus: "Molekulargenetik & Epigenetik",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
      bio: "Prof. Hering ist Spezialist für personalisierte Medizin und Molekulargenetik. Er forscht seit über 15 Jahren an der Schnittstelle zwischen Ernährung und Genexpression. Als Leiter der medizinischen Beirats stellt er sicher, dass jeder Entscheidungsbaum der Optimus Engine auf aktuellen, peer-reviewed Studien basiert."
    },
    {
      id: 'arnim',
      name: "Dr. med. Katharina von Arnim",
      role: "FÄ für Innere Medizin",
      focus: "Kardiologie & Endokrinologie",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop",
      bio: "Dr. von Arnim betreut seit Jahren Profisportler im Bereich der Leistungsdiagnostik. Ihre Expertise in der Hormonersatztherapie und der mitochondrialen Gesundheit fließt direkt in die Supplement-Protokolle ein."
    },
    {
      id: 'falk',
      name: "Dr. rer. nat. Sebastian Falk",
      role: "Biochemiker",
      focus: "Nährstoff-Bioverfügbarkeit",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
      bio: "Dr. Falk leitet die biochemische Validierung. Sein Spezialgebiet ist die Synergie von Mikronährstoffen. Er entwickelte die 'No-Filler' Richtlinien für Optimus Supplements und prüft jede Rohstoff-Charge auf Reinheit."
    }
  ];

  return (
    <div className="bg-[#fcfcfc] text-[#333333]">
      {/* SCIENCE HERO - Side-by-Side: Widened Image Side */}
      <section className="pt-32 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
          
          {/* TEXT SIDE */}
          <div className="flex-[0.8] space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="w-10 h-px bg-red-800"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-800">Clinical Data Infrastructure</span>
              </div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tighter text-[#333333]">
                Wissenschaft <br /> <span className="text-zinc-400 italic">ohne Kompromisse.</span>
              </h1>
              <p className="text-lg text-zinc-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-semibold">
                Wir machen aus komplexen Blutwerten handfeste Erkenntnisse. Basierend auf klinischen Goldstandards und modernster Analytik.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start gap-12 pt-2">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#333333]">15+</span>
                <span className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest">Biomarker</span>
              </div>
              <div className="w-[1px] h-12 bg-zinc-200 self-center"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#333333]">100%</span>
                <span className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest">Evidenzbasiert</span>
              </div>
            </div>
          </div>

          {/* IMAGE SIDE - Smaller height, more width (aspect-ratio change) */}
          <div className="flex-1 w-full max-w-3xl">
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-black/[0.03] group aspect-[16/11] md:aspect-[16/10] lg:aspect-[4/3]">
              <img 
                src="https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Labor%20Wissenschaft.png" 
                alt="Optimus Laboratory Science" 
                className="w-full h-full object-cover grayscale brightness-[1.05] contrast-[1.1] group-hover:grayscale-0 transition-all duration-[2500ms]"
              />
              
              {/* HIGH-CONTRAST ALGORITHM BOX (UPPER LEFT) */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 p-6 md:p-8 bg-[#0F172A]/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] max-w-[280px] md:max-w-[340px] shadow-[0_32px_120px_-24px_rgba(0,0,0,0.6)] text-white">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-800 flex items-center justify-center text-white shadow-lg">
                      <Cpu size={18} />
                    </div>
                    <div>
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/40 block mb-0.5">Optimus Protocol v2.5</span>
                      <h4 className="text-base font-black tracking-tight uppercase leading-none">Biometric <span className="text-white/40 italic">Engine</span></h4>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-[10px] md:text-[11px] font-bold text-white/90 leading-relaxed font-mono-data uppercase tracking-tight">
                      Der Optimus-Kern synthetisiert über 500 klinische Datenpunkte mit biometrischer Echtzeit-Telemetrie. 
                    </p>
                    <p className="text-[10px] md:text-[11px] font-medium text-white/50 leading-relaxed italic border-l-2 border-red-800/40 pl-4">
                      Durch evidenzbasierte Entscheidungsbäume identifiziert das System molekulare Engpässe präventiv.
                    </p>
                  </div>

                  <div className="pt-5 flex items-center justify-between border-t border-white/10">
                    <div className="flex items-center gap-2">
                       <CheckCircle2 size={12} className="text-emerald-500" />
                       <span className="text-[8px] font-black uppercase tracking-widest text-white/60">Validated</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Fingerprint size={12} className="text-white/20" />
                       <span className="text-[8px] font-black uppercase tracking-widest text-white/40 italic">Encoded</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative scanline overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-b from-white/5 to-transparent" />
            </div>
            
            {/* Glow behind image */}
            <div className="absolute -inset-10 bg-red-800/[0.03] blur-[100px] rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white border-y border-black/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/[0.03] border border-red-600/10 text-red-600 text-[10px] font-bold tracking-widest uppercase mb-2">
              Diagnostik-Panel
            </div>
            <h2 className="text-5xl font-black tracking-tighter text-[#333333]">Struktur der Analyse</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/3 space-y-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left p-6 rounded-[2rem] border transition-all flex items-center justify-between group ${
                    activeCategory === cat.id 
                    ? 'bg-[#111827] border-black shadow-lg text-white' 
                    : 'bg-zinc-50 border-black/[0.03] text-zinc-400 hover:border-black/[0.1] hover:bg-zinc-100/50'
                  }`}
                >
                  <div className="space-y-1">
                    <h4 className="font-black text-lg tracking-tight uppercase">{cat.title}</h4>
                  </div>
                  <ChevronRight className={`transition-transform duration-500 ${activeCategory === cat.id ? 'translate-x-1' : ''}`} size={18} />
                </button>
              ))}
            </div>

            <div className="flex-1 bg-white border border-black/[0.03] rounded-[3rem] p-8 md:p-12 medical-card-shadow relative">
              {categories.map((cat) => cat.id === activeCategory && (
                <div key={cat.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-10">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-[#333333] tracking-tighter uppercase">{cat.title}</h3>
                    <p className="text-zinc-500 text-lg leading-relaxed font-semibold border-l-4 border-red-600/10 pl-6 italic">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cat.biomarkers.map((bm) => (
                      <div key={bm} className="p-6 rounded-[2rem] bg-zinc-50 border border-black/[0.02] hover:bg-white hover:border-red-600/20 transition-all group medical-card-shadow">
                        <div className="space-y-3">
                          <h5 className="font-black text-[#111827] text-lg tracking-tight uppercase">{bm}</h5>
                          <p className="text-zinc-600 text-sm font-semibold leading-relaxed">
                            {biomarkerData[bm]?.desc || 'Physiologischer Schlüsselmarker.'}
                          </p>
                          <div className="pt-2">
                             <a href="#" className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-red-800/60 hover:text-red-800 transition-colors">
                               <ExternalLink size={10} /> {biomarkerData[bm]?.study || 'Studien-Mapping'}
                             </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-red-800 font-black uppercase tracking-[0.3em] text-[10px]">Ärztliche Leitung</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#333333] tracking-tighter">Human-in-the-Loop</h2>
            <p className="text-zinc-500 text-lg font-bold max-w-2xl mx-auto">Unser medizinisches Board überwacht jeden Algorithmus.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc) => (
              <div 
                key={doc.id} 
                onClick={() => setExpandedDoctor(expandedDoctor === doc.id ? null : doc.id)}
                className={`group cursor-pointer p-8 rounded-[3rem] bg-white border border-black/[0.03] transition-all duration-500 medical-card-shadow overflow-hidden flex flex-col items-center text-center ${expandedDoctor === doc.id ? 'border-red-800/20' : 'hover:border-zinc-200'}`}
              >
                <div className="relative mb-6">
                  <div className={`absolute -inset-4 bg-red-600/[0.05] blur-2xl rounded-full transition-opacity duration-500 ${expandedDoctor === doc.id ? 'opacity-100' : 'opacity-0'}`} />
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-black text-[#111827] tracking-tight">{doc.name}</h4>
                  <p className="text-red-800 font-black uppercase tracking-[0.15em] text-[10px]">{doc.role}</p>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedDoctor === doc.id ? 'max-h-[300px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-zinc-600 text-sm font-semibold leading-relaxed border-t border-zinc-100 pt-6">
                    {doc.bio}
                  </p>
                </div>
                <div className={`mt-6 w-8 h-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center transition-transform duration-500 ${expandedDoctor === doc.id ? 'rotate-180 bg-red-800 text-white' : 'text-zinc-300'}`}>
                  <ChevronDown size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-white border-t border-black/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12 md:p-20 rounded-[4rem] bg-[#111827] text-white overflow-hidden shadow-2xl group">
             <div className="absolute top-0 right-0 p-20 opacity-[0.05] text-white pointer-events-none group-hover:scale-110 transition-transform duration-[5s]">
                <Network size={300} />
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
                <div className="space-y-10">
                   <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-black tracking-widest uppercase">
                        Core Technology
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                        Die Optimus <br /> <span className="text-zinc-400 italic">Engine v2.5</span>
                      </h2>
                      <p className="text-zinc-400 text-xl font-medium leading-relaxed">
                        Transparente Intelligenz statt Black-Box. Wir nutzen klinisch validierte Entscheidungsbäume.
                      </p>
                   </div>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { icon: <Cpu size={20} />, title: "Evidence-Mapping", desc: "Abgleich mit >500 klinischen Studien." },
                        { icon: <Eye size={20} />, title: "Transparenz", desc: "Jede Empfehlung ist logisch herleitbar." },
                        { icon: <UserCheck size={20} />, title: "MD Supervision", desc: "Jedes Update wird ärztlich geprüft." },
                        { icon: <ShieldCheck size={20} />, title: "Data Safety", desc: "Algorithmus läuft auf DE-Servern." }
                      ].map((item, i) => (
                        <div key={i} className="space-y-3 p-6 rounded-3xl bg-white/5 border border-white/10">
                          <div className="text-red-700">{item.icon}</div>
                          <h4 className="font-black text-sm uppercase tracking-tight">{item.title}</h4>
                          <p className="text-zinc-500 text-[11px] font-bold leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="hidden lg:block relative">
                   <div className="p-10 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-inner">
                      <div className="space-y-8">
                         <div className="space-y-2">
                           <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500">
                              <span>Daten-Input</span>
                              <span>Biomarker + Lifestyle</span>
                           </div>
                           <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className="w-[85%] h-full bg-red-800 animate-pulse" />
                           </div>
                         </div>
                         <div className="p-6 bg-white/10 rounded-2xl border border-white/5 font-mono text-[10px] text-zinc-400 space-y-2">
                            <p className="text-red-700 font-bold tracking-widest">IF (Ferritin &lt; 35ng/ml && VO2max_trend == UP)</p>
                            <p className="pl-4">THEN: Priority = IRON_RESORPTION_UPGRADE</p>
                            <p className="pl-4">REF: JSS_2023_IRON_DEFICIENCY_ATHLETES</p>
                         </div>
                         <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                               <CheckCircle2 size={20} />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest">Optimierungs-Strategie aktiv</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
      <div className="h-20 bg-[#fcfcfc]" />
    </div>
  );
};

export default SciencePage;
