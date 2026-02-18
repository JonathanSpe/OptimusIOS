import React from 'react';
import { Shield, Lock, Server, CheckCircle, Microscope, UserCheck, ShieldCheck } from 'lucide-react';

const SecuritySection: React.FC = () => {
  return (
    <section className="bg-white overflow-hidden relative border-t border-slate-100">
      {/* Upper Content: Security Focus */}
      <div className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Side: Visual/Logos */}
            <div className="flex-1 w-full order-2 lg:order-1">
              <div className="relative p-1 rounded-[4rem] bg-gradient-to-br from-slate-50 to-transparent shadow-[0_32px_80px_-16px_rgba(0,0,0,0.06)] max-w-lg mx-auto lg:mx-0 border border-slate-100">
                <div className="bg-white rounded-[3.9rem] p-10 md:p-14 border border-white flex flex-col items-center justify-center text-center space-y-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-red-800/[0.03] border border-red-800/10 rounded-3xl flex items-center justify-center text-red-800 shadow-sm relative z-10">
                      <Shield size={42} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border border-slate-100 rounded-full flex items-center justify-center text-emerald-600 shadow-sm z-20">
                      <CheckCircle size={16} strokeWidth={3} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-[#0F172A] tracking-tight uppercase">Trusted Cloud</h4>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">End-to-End Encrypted</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full pt-4">
                    <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center gap-2">
                      <Server size={20} className="text-slate-400" />
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">DE Hosting</span>
                    </div>
                    <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center gap-2">
                      <Lock size={20} className="text-slate-400" />
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">AES-256</span>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-50 w-full">
                    <div className="flex items-center justify-center gap-5 opacity-40 grayscale">
                      <span className="text-[10px] font-black tracking-widest uppercase">DSGVO Compliant</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                      <span className="text-[10px] font-black tracking-widest uppercase">ISO 27001</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="flex-1 space-y-10 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="w-10 h-[1.5px] bg-slate-200"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Security & Privacy</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-[900] tracking-tighter leading-[0.9] text-[#0F172A]">
                  Deine Daten. <br /> 
                  <span className="text-slate-900/40 italic font-[800]">Deine Festung.</span>
                </h2>
                <p className="text-slate-500 text-lg lg:text-xl leading-relaxed font-medium max-w-xl">
                  Gesundheitsdaten sind das privateste Gut, das wir besitzen. Deshalb speichern wir absolut keine Daten außerhalb von Deutschland.
                </p>
              </div>

              <div className="space-y-8">
                <SecurityPoint title="Deutscher Serverstandort" desc="Alle Analysen werden ausschließlich auf ISO-zertifizierten Servern in Frankfurt am Main gehostet." />
                <SecurityPoint title="Vollständige Anonymisierung" desc="Laborproben werden nur unter einer anonymen Token-ID verarbeitet. Niemand im Labor kennt deine Identität." />
                <SecurityPoint title="Banken-Standard" desc="Datentransfer erfolgt über TLS 1.3 und AES-256 Bit Verschlüsselung – der globale Standard für Hochsicherheit." />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Trust Grid: Re-located from Pricing as requested */}
      <div className="bg-[#F8FAFC] py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <TrustBarPoint 
               icon={<Microscope className="text-red-800" size={24} />} 
               title="ISO 15189 Labore" 
               desc="Akkreditierte deutsche Fachlabore garantieren höchste Analysestandards." 
             />
             <TrustBarPoint 
               icon={<UserCheck className="text-red-800" size={24} />} 
               title="Ärztlicher Review" 
               desc="Unsere Methodik wird kontinuierlich von Fachärzten validiert." 
             />
             <TrustBarPoint 
               icon={<ShieldCheck className="text-red-800" size={24} />} 
               title="Banken-Sicherheit" 
               desc="Deine Daten sind nach strengsten Standards DSGVO-konform gesichert." 
             />
          </div>
        </div>
      </div>
    </section>
  );
};

const SecurityPoint: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="flex items-start gap-5">
    <div className="mt-1.5 w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
      <CheckCircle size={12} strokeWidth={3} />
    </div>
    <div>
      <h5 className="font-black text-[#0F172A] text-sm uppercase tracking-tight">{title}</h5>
      <p className="text-slate-500 text-sm font-medium leading-relaxed mt-1">{desc}</p>
    </div>
  </div>
);

const TrustBarPoint: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm group hover:border-red-800/20 transition-all duration-500">
    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="font-black text-[#0F172A] text-sm uppercase tracking-wider">{title}</h4>
      <p className="text-slate-500 text-[11px] font-medium leading-relaxed mt-1">{desc}</p>
    </div>
  </div>
);

export default SecuritySection;