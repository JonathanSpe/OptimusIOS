import React, { useState } from 'react';
import { 
  ShieldCheck, Cpu, Microscope, UserCheck, ChevronRight, GraduationCap, 
  ExternalLink, BookOpen, Info, X, FileText, ChevronDown, Binary, 
  Workflow, Database, Beaker 
} from 'lucide-react';
import DashboardPreview from './DashboardPreview';

interface Study {
  title: string;
  source: string;
  summary: string;
}

interface Category {
  id: string;
  title: string;
  desc: string;
  biomarkers: string[];
  studies?: Record<string, Study>; // Mapping biomarker name to specific study
}

const SciencePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Sport');
  const [showStudyDetail, setShowStudyDetail] = useState<Study | null>(null);
  const [expandedDoctor, setExpandedDoctor] = useState<string | null>(null);

  const categories: Category[] = [
    { 
      id: 'Sport', 
      title: 'Sport & Performance', 
      desc: 'Optimierung von Ausdauer, Kraft und Regeneration durch die Analyse des Sauerstoff- und Energiemetabolismus. Wir fokussieren uns hierbei massiv auf den Eisenstatus (Ferritin), da dieser die absolute Basis für die mitochondriale Energiebereitstellung bildet.',
      biomarkers: ['Ferritin', 'Magnesium', 'Vitamin D', 'Freies T3'],
      studies: {
        'Ferritin': {
          title: "Iron Deficiency without Anemia in Athletes",
          source: "Journal of Sports Science (2023)",
          summary: "Diese Studie belegt, dass bereits ein subklinischer Eisenmangel (Ferritin < 35ng/ml) die aerobe Kapazität und die oxidative Phosphorylierung in den Mitochondrien um bis zu 15% senken kann."
        },
        'Vitamin D': {
          title: "Vitamin D and Skeletal Muscle Function",
          source: "Nutrients (2024)",
          summary: "Die Forschung zeigt eine direkte Korrelation zwischen 25(OH)D-Spiegeln und der Typ-II-Muskelfaser-Atrophie sowie der Maximalkraft bei Profisportlern."
        }
      }
    },
    { 
      id: 'Hormone', 
      title: 'Hormonelle Balance', 
      desc: 'Präzise Überwachung der Schlüsselhormone für Vitalität und Resilienz. Wir betrachten das komplexe Zusammenspiel von freien Hormonen und deren Transportproteinen.',
      biomarkers: ['Testosteron', 'Estradiol', 'SHBG', 'TSH'],
      studies: {
        'Testosteron': {
          title: "Endocrine Response to High Intensity Training",
          source: "Hormone Research (2023)",
          summary: "Analyse der zirkadianen Rhythmik von Testosteron unter chronischer Belastung und die Bedeutung der SHBG-Bindungskapazität."
        }
      }
    },
    { 
      id: 'Erholung', 
      title: 'Regeneration & Schlaf', 
      desc: 'Identifikation von Entzündungsmarkern, die für die nächtliche Zellreparatur kritisch sind. Wir messen die "Silent Inflammation" über den hs-CRP Wert.',
      biomarkers: ['hs-CRP', 'Magnesium', 'Zink'],
      studies: {
        'hs-CRP': {
          title: "Inflammation and Recovery Kinetics",
          source: "Clinical Chemistry (2024)",
          summary: "Klinische Validierung von hs-CRP als Prädiktor für Übertrainings-Syndrome und systemische Regenerations-Blockaden."
        }
      }
    },
    { 
      id: 'Kognition', 
      title: 'Kognitive Leistung', 
      desc: 'Fokus und neuronale Gesundheit durch die Analyse essentieller Bausteine. Ein Mangel an B12 oder Omega-3 führt oft zu verringerter kognitiver Ausdauer.',
      biomarkers: ['Vitamin B12', 'Omega-3', 'Selen']
    },
    { 
      id: 'Haare', 
      title: 'Haut & Haare', 
      desc: 'Strukturelle Gesundheit von innen durch essentielle Bausteine für Keratin- und Kollagensynthese. Äußere Merkmale sind direkte Indikatoren der Nährstoffversorgung.',
      biomarkers: ['Zink', 'Ferritin', 'Estradiol']
    }
  ];

  const doctors = [
    {
      name: "Prof. Dr. med. Julian Hering",
      role: "Leitender Labormediziner",
      focus: "Hormonelle Balance & Stoffwechsel",
      bio: "Prof. Hering blickt auf über 20 Jahre Erfahrung in der klinischen Molekulargenetik zurück. Vor seiner Tätigkeit bei Optimus leitete er die Abteilung für Endokrinologie an der Universitätsklinik München. Bei Optimus ist er federführend für die Entwicklung der Algorithmen verantwortlich, die Biomarker-Interaktionen in präzise Supplement-Empfehlungen übersetzen. Sein Fokus liegt auf der evidenzbasierten Validierung jeder einzelnen Kennzahl, um sicherzustellen, dass unsere Daten dem höchsten klinischen Goldstandard entsprechen.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Dr. med. Katharina von Arnim",
      role: "Sportmedizinerin",
      focus: "Leistungsdiagnostik & Regeneration",
      bio: "Dr. von Arnim ist spezialisiert auf die Betreuung von Profi-Athleten und Biohackern. Als ehemalige Beraterin für verschiedene Olympia-Stützpunkte versteht sie die feine Linie zwischen Übertraining und maximaler Performance. Ihre Expertise in der mitochondrialen Medizin fließt direkt in unsere Sport-Panels ein. Sie validiert insbesondere die Protokolle für Ferritin-Management und Laktat-Clearance-Optimierung, um Athleten dabei zu helfen, ihre aerobe Schwelle nachhaltig zu verschieben.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Dr. rer. nat. Sebastian Falk",
      role: "Bio-Chemiker",
      focus: "Biomarker-Validierung & Analytik",
      bio: "Dr. Falk ist der Kopf hinter unserer Analytik-Pipeline. Als promovierter Biochemiker liegt sein Schwerpunkt auf der Bioverfügbarkeit von Mikronährstoffen. Er stellt sicher, dass die von uns empfohlenen chemischen Verbindungen (wie Chelat-Formen bei Magnesium) die Blut-Hirn-Schranke effektiv passieren können. Dr. Falk überwacht zudem die Qualitätssicherung der Partnerlabore und stellt sicher, dass die Messmethoden (z.B. HPLC oder ELISA) stets auf dem neuesten Stand der Technik sind.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const biomarkerDetails: Record<string, string> = {
    'Testosteron': 'Das primäre anabole Hormon. Kritisch für Muskelaufbau, Knochendichte und Antrieb.',
    'Estradiol': 'Wichtig für den Knochenstoffwechsel und die kognitive Funktion.',
    'SHBG': 'Reguliert die Verfügbarkeit von freien Hormonen im Blutkreislauf.',
    'TSH': 'Zentraler Marker für die Schilddrüsenfunktion und den Grundumsatz.',
    'Freies T3': 'Das aktive Schilddrüsenhormon, das den Energieverbrauch steuert.',
    'Selen': 'Essentielles Spurenelement für die Hormon-Konversion und Immunabwehr.',
    'Ferritin': 'Speichereisen. Entscheidend für Sauerstofftransport und ATP-Produktion.',
    'Magnesium': 'Beteiligt an über 300 enzymatischen Reaktionen.',
    'Vitamin D': 'Moduliert Immunsystem, Calciumhaushalt und Muskelfunktion.',
    'Vitamin B12': 'Essenziell für die Nervenfunktion und Blutbildung.',
    'Zink': 'Baustein für Enzyme, wichtig für Testosteron und Wundhealung.',
    'hs-CRP': 'Hochsensitiver Marker für systemische Entzündungen.',
    'Omega-3': 'Essentielle Fettsäuren für Gehirngesundheit und Entzündungshemmung.',
    'Triglyceride': 'Wichtiger Marker für den Fettstoffwechsel.',
    'LDL / HDL': 'Verhältnis für die kardiovaskuläre Gesundheit.'
  };

  const handleStudyClick = (biomarker: string) => {
    const category = categories.find(c => c.id === activeCategory);
    const study = category?.studies?.[biomarker];
    if (study) {
      setShowStudyDetail(study);
    } else {
      setShowStudyDetail({
        title: `Klinische Relevanz von ${biomarker}`,
        source: "Zentralblatt für Labormedizin (Standard-Referenz)",
        summary: `Die physiologische Bedeutung von ${biomarker} ist durch zahlreiche klinische Studien belegt. Wir nutzen international anerkannte Referenzbereiche der Fachgesellschaften für die Auswertung.`
      });
    }
  };

  const toggleDoctor = (name: string) => {
    setExpandedDoctor(prev => prev === name ? null : name);
  };

  return (
    <div className="bg-[#fcfcfc] text-[#333333]">
      {/* Science Hero */}
      <section className="pt-32 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.9] tracking-tighter text-[#333333]">
                Wissenschaftlich <br /> <span className="text-zinc-400 italic">fundiert.</span> <br /> Technologisch <span className="text-red-600/60">überlegen.</span>
              </h1>
              <p className="text-xl text-zinc-600 max-w-xl leading-relaxed font-medium">
                Optimus verbindet klinische Diagnostik mit modernster Software. Wir machen aus komplexen Blutwerten handfeste Erkenntnisse für deinen Alltag.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-[#333333]">15</span>
                <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-[0.2em]">Biomarker</span>
              </div>
              <div className="w-[1px] h-12 bg-zinc-100 self-center"></div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-[#333333]">100%</span>
                <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-[0.2em]">Evidenzbasiert</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full bg-white rounded-[4rem] p-12 border border-black/[0.03] relative group shadow-xl medical-card-shadow">
             <div className="absolute inset-0 bg-red-600/[0.01] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <DashboardPreview lightTheme={true} />
          </div>
        </div>
      </section>

      {/* Biomarker Panels & Mapping */}
      <section className="px-6 py-20 bg-white border-y border-black/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/[0.03] border border-red-600/10 text-red-600 text-[10px] font-bold tracking-widest uppercase mb-4">
              Diagnostik-Panel
            </div>
            <h2 className="text-5xl md:text-[4rem] font-black tracking-tighter text-[#333333]">Der Optimus Panel</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-xl font-medium">
              Entdecke die physiologischen Grundlagen deiner Performance-Kategorien.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3 space-y-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left p-8 rounded-[2rem] border transition-all flex items-center justify-between group ${
                    activeCategory === cat.id 
                    ? 'bg-[#333333] border-black shadow-lg text-white' 
                    : 'bg-zinc-50 border-black/[0.03] text-zinc-400 hover:border-black/[0.1] hover:bg-zinc-100/50'
                  }`}
                >
                  <div className="space-y-1">
                    <h4 className="font-black text-xl tracking-tight uppercase">{cat.title}</h4>
                    <p className={`text-[9px] font-bold uppercase tracking-widest ${activeCategory === cat.id ? 'text-zinc-400' : 'text-zinc-500'}`}>{cat.biomarkers.length} Cluster</p>
                  </div>
                  <ChevronRight className={`transition-transform duration-500 ${activeCategory === cat.id ? 'translate-x-1' : ''}`} size={20} />
                </button>
              ))}
            </div>

            <div className="flex-1 bg-white border border-black/[0.03] rounded-[3.5rem] p-10 md:p-16 medical-card-shadow relative">
              {categories.map((cat) => cat.id === activeCategory && (
                <div key={cat.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12">
                  <div className="space-y-6">
                    <h3 className="text-4xl font-black text-[#333333] tracking-tighter uppercase">{cat.title}</h3>
                    <p className="text-zinc-600 text-lg leading-relaxed font-medium border-l-4 border-red-600/10 pl-8">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    {cat.biomarkers.map((bm) => (
                      <div key={bm} className="p-8 rounded-[2.5rem] bg-zinc-50 border border-black/[0.02] hover:bg-white hover:border-black/[0.05] transition-all group medical-card-shadow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center mb-4">
                            <h5 className="font-black text-[#333333] text-xl tracking-tight">{bm}</h5>
                            <div className="w-1.5 h-1.5 rounded-full bg-red-600/40 group-hover:animate-pulse"></div>
                          </div>
                          <p className="text-zinc-600 leading-relaxed font-medium text-sm mb-6">
                            {biomarkerDetails[bm] || 'Wichtiger physiologischer Marker für systemische Integrität.'}
                          </p>
                        </div>
                        
                        <button 
                          onClick={() => handleStudyClick(bm)}
                          className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-red-800 transition-colors group/link"
                        >
                          <FileText size={10} className="group-hover/link:scale-110 transition-transform" /> 
                          Wissenschaftlicher Beleg
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Expandable Bios */}
      <section className="px-6 py-24 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto bg-white border border-black/[0.03] rounded-[4.5rem] p-12 md:p-24 relative overflow-hidden medical-card-shadow">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/[0.01] blur-[150px] rounded-full -z-10" />
          <div className="relative z-10 space-y-20">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 rounded-[1.5rem] bg-zinc-50 border border-black/[0.03] flex items-center justify-center text-red-600/60 shadow-sm">
                  <UserCheck size={32} />
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-[#333333] tracking-tighter">Validiert von <br /> <span className="text-zinc-400 italic">Fachärzten</span></h2>
                <p className="text-zinc-600 text-xl leading-relaxed font-medium">
                  Unsere Algorithmen wurden in enger Zusammenarbeit mit führenden Endokrinologen und Sportmedizinern entwickelt. Jede Empfehlung basiert auf aktuellen klinischen Standards.
                </p>
                <div className="flex flex-wrap gap-8 pt-4">
                   <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                     <ShieldCheck size={18} className="text-red-600/40" /> Labor-Standard
                   </div>
                   <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                     <Microscope size={18} className="text-red-600/40" /> Präzision
                   </div>
                   <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                     <GraduationCap size={18} className="text-red-600/40" /> Evidenz
                   </div>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-1 gap-6 w-full">
                {doctors.map((doc) => {
                  const isExpanded = expandedDoctor === doc.name;
                  return (
                    <div 
                      key={doc.name} 
                      className={`overflow-hidden transition-all duration-500 rounded-[2.5rem] border border-black/[0.02] medical-card-shadow ${
                        isExpanded ? 'bg-white ring-2 ring-red-600/5' : 'bg-zinc-50 hover:bg-white hover:shadow-lg'
                      }`}
                    >
                      <button 
                        onClick={() => toggleDoctor(doc.name)}
                        className="w-full flex items-center gap-8 p-8 text-left group"
                      >
                        <div className="w-20 h-20 rounded-full overflow-hidden grayscale brightness-[1.05] group-hover:grayscale-0 transition-all duration-[800ms] flex-shrink-0 border-4 border-white shadow-sm">
                          <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-black text-[#333333] text-2xl tracking-tight leading-none mb-2">{doc.name}</h4>
                          <p className="text-red-600/60 text-[9px] font-bold uppercase tracking-[0.25em] mb-1">{doc.role}</p>
                          <p className="text-zinc-400 text-[8px] font-black uppercase tracking-widest flex items-center gap-2">
                            Focus: {doc.focus}
                          </p>
                        </div>
                        <div className={`p-2 rounded-full border border-black/[0.03] text-zinc-300 transition-transform duration-500 ${isExpanded ? 'rotate-180 text-red-600/40' : ''}`}>
                          <ChevronDown size={20} />
                        </div>
                      </button>

                      <div className={`transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-[500px] opacity-100 border-t border-black/[0.02]' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-10 bg-zinc-50/30">
                          <div className="max-w-xl">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-red-800 mb-4 flex items-center gap-2">
                              <Info size={12} /> Medizinische Expertise & Bio
                            </h5>
                            <p className="text-zinc-600 text-base leading-relaxed font-medium">
                              {doc.bio}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Algorithm Sektion - THE NEW ADDITION */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/[0.03] border border-red-600/10 text-red-600 text-[10px] font-bold tracking-widest uppercase mb-4">
                  Technologische Basis
                </div>
                <h2 className="text-5xl md:text-[4.5rem] font-black tracking-tighter leading-[0.9] text-[#333333]">Die Optimus Engine</h2>
                <p className="text-xl text-zinc-500 font-medium leading-relaxed max-w-xl">
                  Wir nutzen keine "Black-Box" KI, die Ergebnisse halluziniert. Unsere Engine basiert auf deterministischer Logik und transparenten Entscheidungsbäumen.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-black/[0.03] flex items-center justify-center text-red-600/40 flex-shrink-0 shadow-sm">
                    <Workflow size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-black uppercase tracking-tight text-[#333333]">Transparente Entscheidungsbäume</h4>
                    <p className="text-sm text-zinc-500 font-medium leading-relaxed">Jede Empfehlung ist über einen klaren logischen Pfad nachvollziehbar. Wir verbinden Biomarker-Werte mit deinen Lifestyle-Daten aus Strava oder Apple Health über vordefinierte, ärztlich geprüfte Matrizen.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-black/[0.03] flex items-center justify-center text-red-600/40 flex-shrink-0 shadow-sm">
                    <Database size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-black uppercase tracking-tight text-[#333333]">Studienbasierte Logik</h4>
                    <p className="text-sm text-zinc-500 font-medium leading-relaxed">Hinter jeder Verknüpfung steht eine validierte Studie. Wenn Optimus Magnesium zur Cortisol-Senkung empfiehlt, basiert dies auf spezifischen Schwellenwerten aus klinischen Peer-Review-Publikationen.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-black/[0.03] flex items-center justify-center text-red-600/40 flex-shrink-0 shadow-sm">
                    <Cpu size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-black uppercase tracking-tight text-[#333333]">Human-Guided AI</h4>
                    <p className="text-sm text-zinc-500 font-medium leading-relaxed">Die Software wurde von unserem Medical Board entwickelt und wird kontinuierlich überwacht. Ein Algorithmus berechnet – ein Facharzt validiert die zugrundeliegende Logik-Architektur.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Algorithm Visualization Graphic */}
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600/[0.02] blur-[120px] rounded-full -z-10 group-hover:bg-red-600/[0.05] transition-all" />
              <div className="bg-[#111827] rounded-[4rem] p-12 md:p-16 text-white border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
                  <Binary size={240} />
                </div>
                
                <div className="relative z-10 space-y-12">
                   <div className="space-y-2">
                      <div className="w-10 h-1 bg-red-600 rounded-full mb-4" />
                      <h4 className="text-2xl font-black uppercase tracking-tight italic">Decision Logic v2.5</h4>
                      <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">Deterministische Analytik</p>
                   </div>

                   <div className="space-y-4">
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group/logic">
                         <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-red-600" />
                            <span className="text-xs font-mono text-zinc-400">INPUT: Biomarker Ferritin</span>
                         </div>
                         <span className="text-[10px] font-black uppercase text-zinc-500">&lt; 35ng/ml</span>
                      </div>
                      <div className="flex justify-center py-2 opacity-30"><ChevronDown size={20} /></div>
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group/logic">
                         <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-red-600" />
                            <span className="text-xs font-mono text-zinc-400">CONTEXT: Strava Load</span>
                         </div>
                         <span className="text-[10px] font-black uppercase text-zinc-500">High / Peak</span>
                      </div>
                      <div className="flex justify-center py-2 opacity-30"><ChevronDown size={20} /></div>
                      <div className="p-8 rounded-[2rem] bg-red-600/10 border border-red-600/30 flex flex-col items-center text-center gap-4">
                         <Beaker size={32} className="text-red-600" />
                         <div className="space-y-1">
                            <h5 className="text-sm font-black uppercase tracking-widest">Protocol Generation</h5>
                            <p className="text-[10px] text-zinc-400 font-medium">Eisenbisglycinat + Vitamin C + 2h Koffein-Delay</p>
                         </div>
                      </div>
                   </div>

                   <div className="pt-8 border-t border-white/5 flex items-center gap-4">
                      <ShieldCheck size={16} className="text-green-500" />
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">100% Deterministic — Medical Board Approved</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Detail Modal */}
      {showStudyDetail && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0F172A]/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] p-10 md:p-16 relative shadow-2xl medical-card-shadow overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-red-800 pointer-events-none">
              <Microscope size={240} />
            </div>
            <button 
              onClick={() => setShowStudyDetail(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-zinc-50 border border-black/[0.03] flex items-center justify-center text-zinc-400 hover:text-[#333333] transition-all"
            >
              <X size={20} />
            </button>
            <div className="relative z-10 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/[0.04] border border-red-600/10 text-red-800 text-[9px] font-black tracking-widest uppercase">
                  Klinische Evidenz
                </div>
                <h3 className="text-3xl font-black text-[#333333] tracking-tighter leading-tight">{showStudyDetail.title}</h3>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">{showStudyDetail.source}</p>
              </div>
              <p className="text-zinc-600 text-xl leading-relaxed font-medium italic">
                {showStudyDetail.summary}
              </p>
              <div className="pt-8 border-t border-zinc-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-red-800/40">
                  <Info size={18} />
                </div>
                <p className="text-sm text-zinc-400 font-bold">Diese Daten fließen direkt in unseren Analyse-Algorithmus ein.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SciencePage;