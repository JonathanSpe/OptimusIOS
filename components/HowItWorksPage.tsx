
import React, { useState, useEffect } from 'react';
import { Droplets, Send, BarChart3, ChevronDown, CheckCircle2, ArrowRight, Sparkles, Smartphone, Cpu, Activity, Zap } from 'lucide-react';

const steps = [
  {
    title: "Schmerzfreier Bluttest von zuhause",
    description: "Vergiss Nadeln. Das Tasso+ Device nutzt innovative Vakuum-Technologie. Einfach auf den Oberarm setzen, Knopf drücken und 5 Minuten entspannen. Fast unspürbar.",
    icon: <Droplets className="w-10 h-10" />,
    image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Blood%20Draw%20Pic.png",
    tags: ["Patentiert", "In 5 Min."],
    color: "bg-red-50/50",
    highlight: "100% schmerzfrei & sicher"
  },
  {
    title: "Lifestyle-Check & Bio-Sync",
    description: "Fülle einen kurzen Fragebogen zu deinen Zielen, deiner Ernährung und deinem Training aus. Synchronisiere deine Wearables (Apple Health, Strava, Garmin), damit wir deine Blutwerte im Kontext deiner realen Belastung interpretieren können.",
    icon: <Smartphone className="w-10 h-10" />,
    image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Schritt%20Fragebogen.png",
    tags: ["KI-Kontext", "Bio-Sync"],
    color: "bg-zinc-100/50",
    highlight: "Präzision durch Kontext-Daten"
  },
  {
    title: "Probe Registrierung und Versand",
    description: "Scanne den QR-Code auf deinem Kit mit der Optimus App. So verknüpfen wir deine Probe sicher mit deinem Profil. Dann einfach kostenfrei zurückschicken.",
    icon: <Send className="w-10 h-10" />,
    image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Letter%20Handover.jpg",
    tags: ["App-Sync", "Verschlüsselt"],
    color: "bg-red-50/50",
    highlight: "Ende-zu-Ende Verschlüsselung"
  },
  {
    title: "Deine Analyse",
    description: "Innerhalb von 4 Tagen nach Laboreingang erhältst du deinen digitalen Report. Wir übersetzen komplexe Daten in handfeste Empfehlungen für dein Leben.",
    icon: <BarChart3 className="w-10 h-10" />,
    image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Iphone.png",
    tags: ["KI-Expertise", "Detailliert"],
    color: "bg-zinc-100/50",
    highlight: "Von Ärzten validierte Daten"
  },
  {
    title: "Empfehlungen",
    description: "Bestelle deine individuell zusammengestellten Supplements und setze unsere Lifestyle-Empfehlungen um. Für optimale Ergebnisse ist die Einhaltung der spezifischen Verzehrempfehlungen essenziell.",
    icon: <Sparkles className="w-10 h-10" />,
    image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Laptop.png",
    tags: ["Personalisierung", "Dosierung", "Lifestyle"],
    color: "bg-red-50/50",
    highlight: "Optimale Dosierung & Ergebnisse"
  }
];

const softwareSlides = [
  "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Dashboard%201.png",
  "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Dashboard%20View%202.png",
  "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Strategie%201.png"
];

const faqs = [
  {
    question: "Ist die Blutabnahme wirklich schmerzfrei?",
    answer: "Absolut. Im Gegensatz zur venösen Blutabnahme mit einer Nadel nutzt das Tasso Device ein leichtes Vakuum und mikrofeine Lanzetten, die nur die oberste Hautschicht berühren. Die meisten Nutzer beschreiben es als ein leichtes Kribbeln."
  },
  {
    question: "Wie sicher sind meine Gesundheitsdaten?",
    answer: "Datenschutz steht bei uns an erster Stelle. Deine Probe wird unter einer anonymen ID verarbeitet. Alle medizinischen Daten werden nach deutschen DSGVO-Standards auf hochsicheren Servern verschlüsselt gespeichert."
  },
  {
    question: "Wann ist der beste Zeitpunkt für den Test?",
    answer: "Für die aussagekräftigsten Ergebnisse empfehlen wir die Abnahme morgens direkt nach dem Aufstehen, bevor du gefrühstückt hast (nüchtern)."
  },
  {
    question: "Was passiert, wenn der Test nicht funktioniert?",
    answer: "Sollte bei der Abnahme etwas schiefgehen, schicken wir dir umgehend und kostenlos ein neues Ersatz-Kit zu. Unser Support ist jederzeit für dich da."
  }
];

const HowItWorksPage: React.FC = () => {
  const [activeSoftwareSlide, setActiveSoftwareSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSoftwareSlide((prev) => (prev + 1) % softwareSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#fcfcfc] text-[#111827]">
      {/* Dynamic Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden border-b border-black/[0.02]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-600/[0.02] blur-[150px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-black/[0.03] text-zinc-500 text-[10px] font-bold tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Der Optimus Weg
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-[#111827]">
            Einfach. Digital. <br /> <span className="text-zinc-900/40 italic">Revolutionär.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-semibold">
            Wir haben den klassischen Bluttest neu erfunden. In 5 Schritten zu deiner persönlichen Höchstform.
          </p>
        </div>
      </section>

      {/* The Steps Section */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-32">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <div className="flex-1 w-full relative">
                  <div className={`absolute -inset-6 ${step.color} rounded-[4rem] -z-10 blur-xl opacity-50`} />
                  <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-xl border border-black/[0.03] group bg-zinc-50">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover grayscale brightness-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-10 left-10 flex gap-2">
                      {step.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-white/90 text-[#111827] text-[9px] font-black uppercase tracking-wider shadow-sm backdrop-blur-sm border border-white/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-3xl bg-[#111827] flex items-center justify-center text-white shadow-xl shadow-zinc-900/10 rotate-3 hover:rotate-0 transition-all duration-500">
                      <span className="text-5xl font-black">{index + 1}</span>
                    </div>
                    <div className="p-4 bg-zinc-50 text-[#111827] rounded-2xl border border-black/[0.03] shadow-sm">
                      {React.cloneElement(step.icon as React.ReactElement<any>, { size: 24 })}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
                      {step.title}
                    </h2>
                    <p className="text-xl text-[#374151] leading-relaxed font-semibold">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-8 border-t border-zinc-100">
                    <div className="flex items-center gap-3 text-red-700 font-bold">
                      <CheckCircle2 size={22} className="opacity-90" />
                      <span className="text-lg uppercase tracking-tight">{step.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight: The Tasso Device */}
      <section className="py-32 px-6 bg-[#fcfcfc] relative overflow-hidden border-y border-black/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#111827] leading-none">
                Die Hardware: <br /><span className="text-zinc-900/40 italic">Tasso+ Elite</span>
              </h2>
              <p className="text-xl text-[#374151] leading-relaxed font-bold">
                In Zusammenarbeit mit Tasso Inc. nutzen wir die weltweit fortschrittlichste Technologie zur kapillaren Blutgewinnung. Die schmerzfreie Alternative zur Nadel.
              </p>
            </div>
            <ul className="space-y-6">
              {[
                "Vakuum-unterstützte Abnahme",
                "Nur wenige Tropfen nötig",
                "Klinisch validierte Genauigkeit",
                "Hygienisch versiegeltes Einweg-System"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-5 text-[#111827] font-extrabold text-lg">
                  <div className="w-8 h-8 rounded-xl bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="text-red-700" size={18} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full relative">
             <div className="absolute inset-0 bg-red-600/[0.02] blur-[120px] rounded-full -z-10" />
             <div className="bg-white rounded-[4rem] p-16 border border-black/[0.03] shadow-lg medical-card-shadow relative group">
                <div className="w-full aspect-square flex items-center justify-center p-8 bg-zinc-50 rounded-[3rem] shadow-inner overflow-hidden">
                   <img 
                    src="https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Tasso%20Advice.png" 
                    alt="Optimus Tasso Device" 
                    className="max-w-full h-auto object-contain grayscale brightness-[1.05] group-hover:grayscale-0 transition-all duration-[1200ms]"
                   />
                </div>
                <div className="mt-8 text-center space-y-2">
                  <p className="text-[10px] text-zinc-400 uppercase font-black tracking-[0.3em]">Patentierte Technologie</p>
                  <p className="text-[#111827] text-sm font-black">Klinische Präzision im Home-Format</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Software & Insights Section - REDESIGNED VERTICAL STACK FOR FULL SIZE */}
      <section className="py-32 px-6 bg-white overflow-hidden border-b border-black/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
          {/* Text content now at the top and centered */}
          <div className="w-full lg:w-3/4 space-y-10 text-center flex flex-col items-center">
            <div className="space-y-4">
              <span className="text-red-800 font-black uppercase tracking-[0.3em] text-[10px]">Digitaler Health Twin</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#111827] leading-none">
                Die Software: <br /><span className="text-zinc-900/40 italic">Daten mit Vision.</span>
              </h2>
              <p className="text-xl md:text-2xl text-[#374151] leading-relaxed font-bold max-w-4xl mx-auto">
                Ein Blutwert ohne Kontext ist nur eine Zahl. Unsere Software korreliert deine molekularen Daten mit deinem realen Lifestyle für maximale Insight-Tiefe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-8">
              {[
                { 
                  icon: <BarChart3 className="text-red-700" size={20} />, 
                  title: "Deep Biomarker Insights", 
                  desc: "Verstehe nicht nur das 'Was', sondern das 'Warum'. Wir visualisieren Trends." 
                },
                { 
                  icon: <Cpu className="text-red-700" size={20} />, 
                  title: "KI-gestützte Strategie", 
                  desc: "Echtzeit-Anpassung deines Supplement-Protokolls." 
                },
                { 
                  icon: <Activity className="text-red-700" size={20} />, 
                  title: "Bio-Sync Ecosystem", 
                  desc: "Nahtlose Integration von Apple Health, Garmin und Strava." 
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-zinc-50 border border-black/[0.02] hover:bg-white hover:border-zinc-200 transition-all duration-300 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-[#111827] uppercase text-sm tracking-tight">{item.title}</h4>
                    <p className="text-[#374151] text-xs font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOFTWARE SLIDESHOW BELOW THE TEXT - FULL WIDTH & FULL SIZE */}
          <div className="w-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/[0.01] blur-[150px] rounded-full -z-10" />
            
            <div className="relative p-2 md:p-4 rounded-[4rem] bg-zinc-50 border border-black/[0.05] shadow-2xl medical-card-shadow overflow-hidden group">
              {/* Aspect ratio set to video (16:9) to fit full dashboard width naturally */}
              <div className="bg-white rounded-[3.5rem] overflow-hidden border border-white relative w-full aspect-video">
                 
                 {/* Slideshow Content */}
                 {softwareSlides.map((url, idx) => (
                   <img 
                    key={url}
                    src={url} 
                    alt={`Optimus Software Slide ${idx + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      idx === activeSoftwareSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                   />
                 ))}
                 
                 {/* Slide Indicators - Premium minimal styling */}
                 <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                    {softwareSlides.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setActiveSoftwareSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${
                          idx === activeSoftwareSlide ? 'w-16 bg-[#0F172A]' : 'w-3 bg-[#0F172A]/20 hover:bg-[#0F172A]/40'
                        }`} 
                      />
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          .animate-bounce-slow {
            animation: bounce-slow 4s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-[#111827] tracking-tighter">Häufige Fragen</h2>
            <p className="text-zinc-500 text-xl font-bold">Wissenswertes rund um deinen Optimus Test.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <p className="text-zinc-400 mb-8 font-black uppercase tracking-widest text-[10px]">Noch weitere Fragen?</p>
            <button className="inline-flex items-center gap-3 text-[#111827] font-black text-xl border-b-4 border-red-600/30 pb-2 hover:border-red-600 transition-all group">
              Kontaktiere unseren Support <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#fcfcfc] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-16 md:p-32 rounded-[5rem] bg-[#111827] overflow-hidden shadow-2xl group text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-black to-zinc-800 opacity-90" />
            <div 
              className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-[5s]" 
              style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-dark.png)' }}
            />
            <div className="relative z-10 flex flex-col items-center space-y-12">
              <h2 className="text-6xl md:text-[7rem] font-black text-white tracking-tighter leading-[0.85]">
                Zeit für <br /> ein <span className="text-zinc-400 italic">Upgrade.</span>
              </h2>
              <p className="text-zinc-300 text-xl md:text-2xl max-w-xl font-medium leading-relaxed">
                Bestelle jetzt dein Kit und starte deine Reise zur persönlichen Höchstform.
              </p>
              <button className="bg-white text-black px-16 py-6 rounded-[1.5rem] font-black text-2xl hover:bg-zinc-50 transition-all shadow-xl hover:scale-105 active:scale-95 btn-medical">
                Kit jetzt bestellen
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-[2rem] border transition-all duration-500 ${isOpen ? 'bg-zinc-50 border-zinc-200 shadow-sm' : 'bg-white border-zinc-100 hover:border-zinc-200'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left group"
      >
        <span className={`font-black text-xl md:text-2xl tracking-tight transition-colors ${isOpen ? 'text-[#111827]' : 'text-zinc-600 group-hover:text-[#111827]'}`}>{question}</span>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${isOpen ? 'bg-[#111827] border-black text-white rotate-180' : 'bg-zinc-50 border-zinc-200 text-zinc-400'}`}>
          <ChevronDown size={24} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-10 pt-0 text-[#374151] text-lg md:text-xl leading-relaxed font-semibold">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
