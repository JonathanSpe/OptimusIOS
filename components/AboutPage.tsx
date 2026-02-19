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
      desc: "Führender Expert für Mikronährstoff-Therapie. Er leitet die Qualitätssicherung unserer Rohstoffe und die Entwicklung der 'No-Filler' Rezepturen.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const values = [
    {
      icon: <Eye className="text-red-800" size={32} />,
      title: "Radikale Transparenz",
      desc: "In einer Industrie voller Intransparenz wählen wir die totale Offenheit. Wir analysieren zuerst, was dein Körper wirklich braucht."
    },
    {
      icon: <Lock className="text-red-800" size={32} />,
      title: "Souveräne Datensicherheit",
      desc: "Deine Gesundheitsdaten verlassen Deutschland niemals. Wir nutzen bankenübliche Ende-zu-Ende-Verschlüsselung."
    },
    {
      icon: <CheckCircle2 className="text-red-800" size={32} />,
      title: "Human-in-the-Loop",
      desc: "Technologie ist unser Werkzeug, der Mensch unsere Verantwortung. Bei kritischen Werten werden unsere Experten persönlich aktiv."
    }
  ];

  return (
    <div className="bg-[#fcfcfc] text-[#111827]">
      {/* MASSIVE HERO: Der Optimus Kodex */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-white border-b border-zinc-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-red-600/[0.02] blur-[150px] rounded-full -z-10" />
        
        {/* Large Decorative Text Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] lg:text-[18rem] font-black text-slate-50 select-none pointer-events-none z-0 tracking-tighter opacity-40">
          VALUES
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 space-y-4">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-[9px] font-black tracking-[0.2em] uppercase mb-2">
              The Optimus Standard
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-[#111827] leading-[0.8] mb-4">
              Der Optimus <br /> <span className="text-red-800/20 italic font-[800]">Kodex.</span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-px bg-red-800/20"></div>
              <span className="text-red-800 font-black uppercase tracking-[0.4em] text-[10px]">Infrastruktur für deine Evolution</span>
              <div className="w-10 h-px bg-red-800/20"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col gap-6 p-8 bg-white border border-slate-100 rounded-[2.5rem] group hover:border-red-800/30 hover:shadow-[0_40px_100px_-20px_rgba(153,27,27,0.08)] transition-all duration-700 medical-card-shadow">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-red-800 group-hover:text-white transition-all duration-700 shadow-sm">
                  <div className="group-hover:text-white transition-colors duration-700">
                    {v.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-[900] tracking-tight text-[#111827] uppercase leading-tight">{v.title}</h3>
                  <p className="text-[#374151] leading-relaxed font-bold text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Statement - Reduced Padding */}
      <section className="py-10 px-6 bg-[#fcfcfc]">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111827]">
            Präzision statt <span className="text-zinc-900/30 italic">Vermutung.</span>
          </h2>
          <p className="text-base text-[#374151] leading-relaxed font-bold opacity-70">
            Wir schließen die Lücke zwischen High-End-Technologie und menschlicher Biologie.
          </p>
        </div>
      </section>

      {/* Founders Section - More compact gaps */}
      <section className="py-12 lg:py-16 px-6 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
          {/* Jonathan */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-zinc-200 grayscale hover:grayscale-0 transition-all duration-700 shadow-lg bg-white max-w-[260px] mx-auto lg:mx-0">
                <img 
                  src="https://raw.githubusercontent.com/JonathanSpe/Optimus/05eb146bea4dbb2e2597fc672e0aea7d6995f76a/optimus---personalisierte-blutanalyse/assets/Jonathan%20Pic.png" 
                  alt="Jonathan Specking" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-0.5">
                <span className="text-red-700 font-black uppercase tracking-[0.3em] text-[8px]">Der Visionär</span>
                <h3 className="text-3xl md:text-4xl font-black text-[#111827]">Jonathan Specking</h3>
              </div>
              <div className="space-y-2 text-base text-[#374151] leading-relaxed font-bold">
                <p>
                  Als Ironman-Triathlet und IT-Spezialist ist Jonathan überzeugt: 
                  <span className="text-[#111827] font-black"> Innovative Technik ist die Voraussetzung für evolutionäre Gesundheit.</span>
                </p>
                <p>
                  Er transferiert IT-Präzision auf den menschlichen Körper – für eine Supplementierung ohne Raten.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                 {["Data Infrastructure", "Ironman Athlete", "AI Logic"].map(tag => (
                   <span key={tag} className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-[8px] font-black text-zinc-800 uppercase tracking-widest">{tag}</span>
                 ))}
              </div>
            </div>
          </div>

          {/* Nicolas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:flex-row-reverse">
            <div className="lg:col-span-8 lg:order-1 space-y-4">
              <div className="space-y-0.5 text-right lg:text-left">
                <span className="text-red-700 font-black uppercase tracking-[0.3em] text-[8px]">Der Optimizer</span>
                <h3 className="text-3xl md:text-4xl font-black text-[#111827]">Nicolas Kiesel</h3>
              </div>
              <div className="space-y-2 text-base text-[#374151] leading-relaxed font-bold text-right lg:text-left">
                <p>
                  Nicolas weiß, dass der Körper im Grenzbereich keine Fehler verzeiht. Seine Erfolge beim Ultra-Radsport sind das Resultat <span className="text-[#111827] font-black">akribischer Feinabstimmung.</span>
                </p>
                <p>
                  Er bringt die unerbittliche Praxiserfahrung aus dem Extremsport ein. Für ihn ist Blut der ultimative Statusbericht.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-end lg:justify-start pt-2">
                 {["Ultra-Distanz", "Performance", "Bio-Optimization"].map(tag => (
                   <span key={tag} className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-[8px] font-black text-zinc-800 uppercase tracking-widest">{tag}</span>
                 ))}
              </div>
            </div>
            <div className="lg:col-span-4 lg:order-2">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-zinc-200 grayscale hover:grayscale-0 transition-all duration-700 shadow-lg bg-white max-w-[260px] mx-auto lg:ml-auto lg:mr-0">
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

      {/* Advisory Board - Tightened padding */}
      <section className="py-12 lg:py-16 px-6 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-1">
            <span className="text-red-700 font-black uppercase tracking-[0.3em] text-[9px]">Wissenschaftliche Expertise</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#111827] tracking-tighter leading-none">Medizinisches Competence Center</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((doc, i) => (
              <div key={i} className="p-8 bg-white rounded-[2rem] border border-zinc-100 flex flex-col items-center text-center space-y-6 hover:shadow-xl transition-all duration-500 group medical-card-shadow">
                <div className="relative w-24 h-24">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-slate-50 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-sm">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-lg font-black text-[#111827] tracking-tight">{doc.name}</h4>
                  <p className="text-red-700 font-black uppercase tracking-[0.2em] text-[8px]">{doc.role}</p>
                </div>
                <p className="text-[#374151] leading-relaxed text-xs font-extrabold">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;