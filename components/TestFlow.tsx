
import React, { useState, useRef, useEffect } from 'react';
import { X, Camera, ArrowRight, CheckCircle2, Droplets, Info, Timer, ShieldCheck, Heart, Zap, Moon } from 'lucide-react';

type FlowStep = 'SCAN' | 'INSTRUCTIONS' | 'QUESTIONNAIRE' | 'SUCCESS';

const TestFlow: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [step, setStep] = useState<FlowStep>('SCAN');
  const [instructionIdx, setInstructionIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // QR Scanning Logic
  useEffect(() => {
    if (step === 'SCAN') {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => console.error("Camera access error:", err));
    }
  }, [step]);

  const handleScanSuccess = () => {
    const stream = videoRef.current?.srcObject as MediaStream;
    stream?.getTracks().forEach(track => track.stop());
    setStep('INSTRUCTIONS');
  };

  const instructions = [
    {
      title: "Vorbereitung",
      desc: "Reinige deinen Oberarm mit dem beigelegten Alkoholtupfer. Warte 10 Sekunden bis die Haut trocken ist.",
      icon: <CheckCircle2 className="text-emerald-500" />
    },
    {
      title: "Platzierung",
      desc: "Ziehe die Schutzfolie vom Tasso+ Device ab und drücke es fest auf die gereinigte Stelle am Oberarm.",
      icon: <Droplets className="text-blue-500" />
    },
    {
      title: "Aktivierung",
      desc: "Drücke den roten Knopf kräftig durch. Du hörst ein leichtes Klicken. Der Vorgang startet.",
      icon: <Zap className="text-red-800" />
    },
    {
      title: "Kollektion",
      desc: "Bleibe 5 Minuten ruhig sitzen. Wenn das Sichtfenster vollständig rot ist, kannst du das Device vorsichtig abnehmen.",
      icon: <Timer className="text-slate-400" />
    }
  ];

  return (
    <div className="fixed inset-0 z-[200] bg-white animate-in slide-in-from-bottom duration-500 flex flex-col">
      {/* Top Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-slate-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#0F172A] rounded-xl flex items-center justify-center text-white font-black text-xs">O</div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Lab Procedure</span>
        </div>
        <button onClick={onClose} className="p-2 bg-slate-50 rounded-full text-slate-400">
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center">
        
        {step === 'SCAN' && (
          <div className="w-full space-y-10 flex flex-col items-center">
             <div className="text-center space-y-2">
               <h2 className="text-3xl font-black tracking-tighter uppercase italic">Scan <span className="text-slate-200">Test-Kit</span></h2>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Scanne den QR-Code auf deinem Tasso+ Pack</p>
             </div>
             
             <div className="relative w-full aspect-square max-w-[320px] rounded-[3rem] overflow-hidden border-8 border-slate-50 bg-black shadow-2xl">
               <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover grayscale opacity-60" />
               <div className="absolute inset-10 border-2 border-white/30 rounded-2xl border-dashed animate-pulse" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
               <button 
                  onClick={handleScanSuccess}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-[#0F172A] px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-2"
                >
                 <Camera size={14} /> Scan simulieren
               </button>
             </div>
             
             <div className="bg-slate-50 p-6 rounded-[2.5rem] w-full flex items-start gap-4 max-w-[320px]">
                <Info size={16} className="text-slate-300 mt-1 shrink-0" />
                <p className="text-[10px] text-slate-400 font-bold leading-relaxed">Der QR-Code verbindet deine physische Probe sicher mit deinem digitalen Account.</p>
             </div>
          </div>
        )}

        {step === 'INSTRUCTIONS' && (
          <div className="w-full space-y-10 flex flex-col items-center">
            <div className="text-center space-y-2">
               <h2 className="text-3xl font-black tracking-tighter uppercase italic">Schritt <span className="text-red-800">{instructionIdx + 1}</span><span className="text-slate-200">/4</span></h2>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Folge den Anweisungen für ein optimales Ergebnis</p>
            </div>

            <div className="w-full aspect-square max-w-[320px] bg-slate-50 rounded-[3.5rem] flex items-center justify-center p-12 relative overflow-hidden group">
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                 <Droplets size={200} />
               </div>
               <div className="w-32 h-32 rounded-[2.5rem] bg-white shadow-xl flex items-center justify-center text-[#0F172A] scale-125">
                 {React.cloneElement(instructions[instructionIdx].icon as React.ReactElement, { size: 48 })}
               </div>
            </div>

            <div className="space-y-6 text-center max-w-[320px]">
               <h3 className="text-xl font-black uppercase tracking-tight">{instructions[instructionIdx].title}</h3>
               <p className="text-sm font-bold text-slate-500 leading-relaxed italic">"{instructions[instructionIdx].desc}"</p>
            </div>

            <div className="mt-auto w-full max-w-[320px] space-y-4">
               <div className="flex gap-2">
                 {[0, 1, 2, 3].map(i => (
                   <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${i <= instructionIdx ? 'bg-red-800' : 'bg-slate-100'}`} />
                 ))}
               </div>
               <button 
                onClick={() => {
                  if (instructionIdx < 3) setInstructionIdx(instructionIdx + 1);
                  else setStep('QUESTIONNAIRE');
                }}
                className="w-full bg-[#0F172A] text-white py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all"
               >
                 {instructionIdx === 3 ? 'Zum Fragebogen' : 'Nächster Schritt'} <ArrowRight size={14} />
               </button>
            </div>
          </div>
        )}

        {step === 'QUESTIONNAIRE' && (
          <div className="w-full space-y-10 flex flex-col items-center pb-12">
             <div className="text-center space-y-2">
               <h2 className="text-3xl font-black tracking-tighter uppercase italic">Biometrischer <span className="text-slate-200">Kontext</span></h2>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Gib uns Kontext für deine Werte</p>
             </div>

             <div className="w-full space-y-4 max-w-[350px]">
                {[
                  { icon: <Droplets size={16} />, q: "Bist du aktuell nüchtern?", options: ["Ja", "Nein"] },
                  { icon: <Moon size={16} />, q: "Wie war dein Schlaf?", options: ["Gut", "Neutral", "Schlecht"] },
                  { icon: <Zap size={16} />, q: "Aktuelle Belastung?", options: ["Hoch", "Normal", "Recovery"] },
                  { icon: <Heart size={16} />, q: "Wie fühlst du dich?", options: ["Top", "Stabil", "Erschöpft"] },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white border border-slate-100 rounded-[2rem] space-y-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="text-slate-200">{item.icon}</div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">{item.q}</p>
                    </div>
                    <div className="flex gap-2">
                      {item.options.map(opt => (
                        <button key={opt} className="flex-1 py-3 rounded-xl border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 active:bg-slate-900 active:text-white transition-all">
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
             </div>

             <button 
              onClick={() => setStep('SUCCESS')}
              className="w-full max-w-[350px] bg-red-800 text-white py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all"
             >
               Daten Übermitteln <ShieldCheck size={16} />
             </button>
          </div>
        )}

        {step === 'SUCCESS' && (
          <div className="w-full h-full flex flex-col items-center justify-center space-y-10 text-center animate-in zoom-in duration-500">
             <div className="w-32 h-32 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shadow-inner">
               <ShieldCheck size={64} strokeWidth={1.5} />
             </div>
             <div className="space-y-4">
               <h2 className="text-4xl font-black tracking-tighter uppercase leading-none italic">Analyse <br/><span className="text-slate-200">Gestartet</span></h2>
               <p className="text-sm font-bold text-slate-500 leading-relaxed max-w-[280px]">Deine Probe ist registriert. Sobald sie im Labor eintrifft, erhältst du eine Benachrichtigung.</p>
             </div>
             <div className="p-6 bg-slate-50 rounded-3xl w-full max-w-[300px]">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Geschätztes Resultat</p>
                <p className="text-lg font-black text-[#0F172A] uppercase">In ca. 48 Stunden</p>
             </div>
             <button 
              onClick={onClose}
              className="w-full max-w-[300px] border border-slate-200 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest active:scale-95 transition-all"
             >
               Zum Dashboard
             </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default TestFlow;
