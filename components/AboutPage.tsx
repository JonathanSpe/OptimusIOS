import React from 'react';
import { CheckCircle2, Lock, Eye } from 'lucide-react';

const AboutPage: React.FC = () => {
  const doctors = [
    {
      name: "Prof. Dr. med. Julian Hering",
      role: "Leitender Labormediziner & Molekulargenetiker",
      desc: "Spezialist für komplexe Biomarker-Interaktionen. Er überwacht die wissenschaftliche Validität unserer Algorithmen und stellt sicher, dass jede Analyse klinischen Goldstandards entspricht.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Dr. med. Katharina von Arnim",
      role: "FÄ für Innere Medizin & Sportkardiologie",
      desc: "Expertin für mitochondriale Gesundheit und hormonelle Steuerung. Sie berät das Team bei der Entwicklung unserer Supplement-Synergien für maximale Bioverfügbarkeit.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Dr. rer. nat. Sebastian Falk",
      role: "Biochemiker & Ernährungsphysiologe",
      desc: "Führender Experte für Mikronährstoff-Therapie. Er leitet die Qualitätssicherung unserer Rohstoffe und die Entwicklung der 'No-Filler' Rezepturen.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const values = [
    {
      icon: <Eye className="text-red-700/60" size={28} />,
      title: "Radikale Transparenz",
      desc: "In einer Industrie voller Intransparenz wählen wir die totale Offenheit. Wir analysieren zuerst, was dein Körper wirklich braucht, anstatt dir zu verkaufen, was unser Lager füllt."
    },
    {
      icon: <Lock className="text-red-700/60" size={28} />,
      title: "Souveräne Datensicherheit",
      desc: "Deine Gesundheitsdaten verlassen Deutschland niemals. Wir nutzen bankenübliche Ende-zu-Ende-Verschlüsselung und erfüllen strengste DSGVO-Anforderungen."
    },
    {
      icon: <CheckCircle2 className="text-red-700/60" size={28} />,
      title: "Human-in-the-Loop",
      desc: "Technologie ist unser Werkzeug, der Mensch unsere Verantwortung. Bei kritischen Werten werden unsere Experten persönlich aktiv. Wir lassen dich nicht allein."
    }
  ];

  return (
    <div className="bg-[#fcfcfc] text-[#111827]">
      {/* Premium Hero Section */}
      <section className="relative pt-48 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-red-600/[0.02] blur-[150px] rounded-full -z-10" />
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            The Optimus Standard
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-[#111827]">
            Präzision statt <br /> <span className="text-zinc-900/40 italic">Vermutung.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#374151] max-w-3xl mx-auto leading-relaxed font-bold pt-4">
            Wir haben Optimus gegründet, um die Lücke zwischen High-End-Technologie und menschlicher Biologie zu schließen.
          </p>
        </div>
      </section>

      {/* Optimus Kodex Section - Horizontal Pillars */}
      <section className="py-24 px-6 bg-white border-y border-zinc-100 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.01] pointer-events-none" 
          style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/carbon-fibre.png)' }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-10 h-0.5 bg-red-800"></div>
              <span className="text-red-800 font-black uppercase tracking-[0.3em] text-[10px]">Unser Kodex</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#111827] leading-none">
              Infrastruktur für deine <span className="text-zinc-900/30 italic">Gesundheit.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col gap-6 p-10 bg-zinc-50/50 border border-zinc-100 rounded-[3rem] group hover:bg-white hover:border-red-800/20 transition-all duration-500 shadow-sm medical-card-shadow">
                <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  {v.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-black tracking-tight text-[#111827] uppercase">{v.title}</h3>
                  <p className="text-[#374151] leading-relaxed font-semibold text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section - Reduced Image Sizes */}
      <section className="py-32 px-6 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="text-center space-y-4 mb-20">
            <span className="text-red-800 font-black uppercase tracking-[0.3em] text-[10px]">Die Gründer</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#111827]">Zwei Athleten, <br /><span className="text-zinc-900/30 italic">eine Mission.</span></h2>
          </div>

          {/* Jonathan */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 relative group">
              <div className="absolute -inset-4 bg-red-600/[0.05] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-zinc-200 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl bg-white max-w-[340px] mx-auto">
                <img 
                  src="https://raw.githubusercontent.com/JonathanSpe/Optimus/05eb146bea4dbb2e2597fc672e0aea7d6995f76a/optimus---personalisierte-blutanalyse/assets/Jonathan%20Pic.png" 
                  alt="Jonathan Specking" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-2">
                <span className="text-red-700 font-black uppercase tracking-[0.3em] text-[10px]">Der Visionär</span>
                <h3 className="text-5xl md:text-6xl font-black text-[#111827]">Jonathan Specking</h3>
              </div>
              <div className="space-y-6 text-xl text-[#374151] leading-relaxed font-bold">
                <p>
                  Als Ironman-Triathlet und ehemaliger IT-Infrastruktur-Spezialist für globale Technologieführer ist Jonathan von einer Sache überzeugt: 
                  <span className="text-[#111827] font-black"> Innovative Technik ist nicht nur ein Hilfsmittel, sondern die Voraussetzung für evolutionäre Gesundheit.</span>
                </p>
                <p>
                  Er sah in der IT-Welt, wie präzise Algorithmen Fehler minimieren und Effizienz maximieren. Jonathan transferiert diese Logik auf den menschlichen Körper – für eine Supplementierung ohne Raten.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                 {["Data Infrastructure", "Ironman Athlete", "AI Logic", "Entrepreneur"].map(tag => (
                   <span key={tag} className="px-5 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-[9px] font-black text-zinc-800 uppercase tracking-widest">{tag}</span>
                 ))}
              </div>
            </div>
          </div>

          {/* Nicolas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center lg:flex-row-reverse">
            <div className="lg:col-span-8 lg:order-1 space-y-8">
              <div className="space-y-2">
                <span className="text-red-700 font-black uppercase tracking-[0.3em] text-[10px]">Der Optimizer</span>
                <h3 className="text-5xl md:text-6xl font-black text-[#111827]">Nicolas Kiesel</h3>
              </div>
              <div className="space-y-6 text-xl text-[#374151] leading-relaxed font-bold">
                <p>
                  Ob beim Kitesurfen, Motocross oder nach 1.500 Kilometern im Race Around Austria – Nicolas weiß, dass der Körper im Grenzbereich keine Fehler verzeiht. 
                  Seine sportlichen Erfolge sind das Resultat unermüdlicher <span className="text-[#111827] font-black">Leistungsdiagnostik und akribischer Feinabstimmung.</span>
                </p>
                <p>
                  Er bringt die unerbittliche Praxiserfahrung aus dem Extremsport in Optimus ein. Für ihn ist Blut nicht nur eine Flüssigkeit, sondern der ultimative Statusbericht.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                 {["Ultra-Distanz Radsport", "Performance Expert", "Bio-Optimization", "Ironman"].map(tag => (
                   <span key={tag} className="px-5 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-[9px] font-black text-zinc-800 uppercase tracking-widest">{tag}</span>
                 ))}
              </div>
            </div>
            <div className="lg:col-span-4 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-red-600/[0.05] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-zinc-200 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl bg-white max-w-[340px] mx-auto">
                <img 
                  src="https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Nico%20Bild.jpeg" 
                  alt="Nicolas Kiesel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-32 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div className="space-y-4">
              <span className="text-red-700 font-black uppercase tracking-[0.3em] text-[10px]">Wissenschaftliche Expertise</span>
              <h2 className="text-4xl md:text-7xl font-black text-[#111827] tracking-tighter">Medizinisches <br /> <span className="text-zinc-900/40">Competence Center</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {doctors.map((doc, i) => (
              <div key={i} className="p-12 bg-[#fcfcfc] rounded-[3rem] border border-zinc-100 flex flex-col items-center text-center space-y-10 hover:shadow-xl transition-all duration-500 group medical-card-shadow">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-red-600/[0.04] blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white grayscale group-hover:grayscale-0 transition-all duration-700 shadow-sm">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-black text-[#111827] tracking-tight">{doc.name}</h4>
                  <p className="text-red-700 font-black uppercase tracking-[0.2em] text-[9px]">{doc.role}</p>
                </div>
                <p className="text-[#374151] leading-relaxed text-sm font-extrabold">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;