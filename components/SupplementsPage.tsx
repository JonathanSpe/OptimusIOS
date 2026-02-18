
import React from 'react';
import { ShoppingCart, ShieldCheck, Box, Truck, RefreshCw, ArrowRight, Zap, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  benefits: string[];
}

const products: Product[] = [
  { id: 'p1', name: "Ferritin Elite", category: 'Performance', price: 34.90, image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/pill.jpeg", benefits: ["Max Eisen", "Energy"] },
  { id: 'p2', name: "Vitamin D3", category: 'Vitality', price: 24.50, image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/pill2.jpeg", benefits: ["Immunsystem"] },
  { id: 'p3', name: "Alpha GPC", category: 'Focus', price: 39.00, image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/pill3.jpeg", benefits: ["Focus"] },
  { id: 'p4', name: "Magnesium", category: 'Hormonal', price: 28.00, image: "https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/pill4.jpeg", benefits: ["Relaxation"] },
];

const SupplementsPage: React.FC = () => {
  return (
    <div className="pt-12 px-5 pb-24 space-y-10">
      {/* Page Header */}
      <header className="space-y-1">
        <h1 className="text-4xl font-black tracking-tighter text-[#0F172A] uppercase italic leading-none">
          Pure <span className="text-slate-300">Elements</span>
        </h1>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Wissenschaftlich fundierte Einzelstoffe</p>
      </header>

      {/* Product Catalog Section - NOW AT THE TOP */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Single Nutrients</h3>
          <div className="flex items-center gap-2 text-[8px] font-black uppercase text-red-800">
            <RefreshCw size={10} className="animate-spin" style={{ animationDuration: '4s' }} /> Auto-Ship available
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {products.map(product => (
            <div key={product.id} className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm flex flex-col p-4 space-y-3 hover:border-slate-200 transition-all active:scale-[0.98]">
              <div className="aspect-square w-full rounded-[1.5rem] bg-slate-50/50 p-3 flex items-center justify-center relative group">
                <img src={product.image} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" alt={product.name} />
                <div className="absolute top-2 right-2">
                  <div className="w-5 h-5 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center border border-slate-100">
                    <Star size={8} className="text-slate-200" />
                  </div>
                </div>
              </div>
              <div className="space-y-0.5">
                <p className="text-[7px] font-black text-slate-300 uppercase tracking-widest">{product.category}</p>
                <h3 className="text-xs font-black text-[#0F172A] uppercase leading-tight tracking-tight">{product.name}</h3>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-50 mt-auto">
                <span className="text-sm font-black tracking-tighter">{product.price.toFixed(2)}€</span>
                <button className="bg-[#0F172A] text-white w-8 h-8 rounded-lg shadow-lg active:scale-90 transition-transform flex items-center justify-center">
                  <ShoppingCart size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Daily Ratio Section - MOVED BELOW */}
      <div className="bg-[#0F172A] rounded-[3rem] p-8 md:p-12 text-white space-y-8 relative overflow-hidden shadow-2xl border border-white/5">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-white pointer-events-none">
          <Zap size={200} />
        </div>
        
        <div className="space-y-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 rounded-lg">
               <Star size={10} className="text-red-800" />
               <span className="text-[8px] font-black text-red-800 uppercase tracking-widest">Recommended Choice</span>
            </div>
            <h2 className="text-3xl font-black tracking-tighter leading-[0.9] uppercase">
              Dein <br /><span className="text-white/30 italic">Optimus-Pack</span>
            </h2>
            <p className="text-[11px] text-slate-400 font-bold leading-relaxed max-w-[240px]">
              Vollständig personalisierte Tages-Sachets, basierend auf deiner neuesten Blutanalyse.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <ShieldCheck size={14} />, label: "Geprüft", sub: "Clinical Std." },
              { icon: <Box size={14} />, label: "30 Tage", sub: "Full Supply" },
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-3 rounded-2xl space-y-1">
                <div className="text-red-800 mb-0.5">{f.icon}</div>
                <p className="text-[8px] font-black uppercase tracking-widest leading-none">{f.label}</p>
                <p className="text-[7px] font-bold text-white/30">{f.sub}</p>
              </div>
            ))}
          </div>

          <div className="relative rounded-[1.8rem] overflow-hidden border border-white/5 aspect-video bg-white/5">
            <img 
              src="https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Tagesrationen%20Supplements.png" 
              alt="Daily Sachet Pack" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>

          <button className="w-full bg-white text-[#0F172A] py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all">
            Pack Konfigurieren <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Trust Badges for Store */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
        {[
          { icon: <Truck size={12} />, text: "Fast Ship" },
          { icon: <ShieldCheck size={12} />, text: "Bio-Audit" },
          { icon: <RefreshCw size={12} />, text: "Flex-Plan" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2 text-center">
            <div className="text-slate-200">{item.icon}</div>
            <span className="text-[7px] font-black uppercase tracking-widest text-slate-300">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplementsPage;
