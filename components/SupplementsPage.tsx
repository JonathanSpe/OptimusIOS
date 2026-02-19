
import React, { useState } from 'react';
import { ShoppingCart, Star, ShieldCheck, Zap, HeartPulse, Info, ChevronRight, Filter, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'Performance' | 'Vitality' | 'Focus' | 'Hormonal';
  price: number;
  rating: number;
  reviews: number;
  image: string;
  benefits: string[];
  scientificBacking: string;
  isPopular?: boolean;
}

const products: Product[] = [
  {
    id: 'p1',
    name: "Optimus Ferritin Elite",
    category: 'Performance',
    price: 34.90,
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1584017947476-c3f1b3baae7b?q=80&w=800&auto=format&fit=crop",
    benefits: ["Optimale Eisenaufnahme", "Unterstützt Sauerstofftransport", "Erhöht Energielevel"],
    scientificBacking: "Formuliert mit bioverfügbarem Eisenbisglycinat für maximale Magenverträglichkeit.",
    isPopular: true
  },
  {
    id: 'p2',
    name: "Vitamin D3 + K2 Complex",
    category: 'Vitality',
    price: 24.50,
    rating: 5.0,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1471864190281-ad5fe9bb0724?q=80&w=800&auto=format&fit=crop",
    benefits: ["Stärkt Immunsystem", "Knochengesundheit", "Hormon-Vorstufe"],
    scientificBacking: "Synergetische Kombination für korrekte Calcium-Verteilung im Gewebe."
  },
  {
    id: 'p3',
    name: "Alpha GPC Focus",
    category: 'Focus',
    price: 39.00,
    rating: 4.8,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1611634560978-23d27247bc41?q=80&w=800&auto=format&fit=crop",
    benefits: ["Kognitive Schärfe", "Verbesserte Gedächtnisleistung", "Mentale Ausdauer"],
    scientificBacking: "Direkter Cholin-Präkursor für gesteigerte Acetylcholin-Synthese im Zerebrum.",
    isPopular: true
  },
  {
    id: 'p4',
    name: "Magnesium Glycinat ZM",
    category: 'Hormonal',
    price: 28.00,
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=800&auto=format&fit=crop",
    benefits: ["Reduziert Cortisol", "Tieferer Schlaf", "Muskelrelaxation"],
    scientificBacking: "Chelat-Form für höchste Bioverfügbarkeit ohne abführende Wirkung."
  },
  {
    id: 'p5',
    name: "Omega-3 Ultra Pure",
    category: 'Performance',
    price: 32.90,
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1550573105-18074d09252c?q=80&w=800&auto=format&fit=crop",
    benefits: ["Herzgesundheit", "Entzündungshemmung", "Gelenkfunktion"],
    scientificBacking: "IFOS-zertifiziertes Fischöl mit extrem hohem EPA/DHA Gehalt."
  },
  {
    id: 'p6',
    name: "Testo-Boost Synergie",
    category: 'Hormonal',
    price: 49.00,
    rating: 4.7,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=800&auto=format&fit=crop",
    benefits: ["Natürliche Testosteron-Unterstützung", "Verbesserte Libido", "Vitalität"],
    scientificBacking: "Kombination aus Zink, Bor und Ashwagandha (KSM-66) basierend auf Studien zur Stress-Reduktion."
  }
];

const SupplementsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Performance', 'Vitality', 'Focus', 'Hormonal'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="bg-[#fcfcfc] text-[#333333] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Shop Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-black/[0.03] text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
              High-End Supplements
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#333333]">
              Upgrade Deine <br /> <span className="text-zinc-400 italic">Molekulare</span> Basis.
            </h1>
            <p className="text-zinc-500 text-xl font-medium max-w-xl leading-relaxed">
              Evidenzbasierte Nährstoffe, perfekt abgestimmt auf deine Blutanalyse.
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-black/[0.03] shadow-sm">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-[#333333] text-white shadow-md' 
                    : 'text-zinc-400 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="group relative bg-white border border-black/[0.03] rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-all duration-500 medical-card-shadow card-medical"
            >
              {product.isPopular && (
                <div className="absolute top-6 right-6 z-10 bg-white border border-black/[0.03] text-red-600 text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                  Popular Choice
                </div>
              )}
              
              {/* Product Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale brightness-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1000ms] opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
              </div>

              {/* Product Content */}
              <div className="p-10 space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    <Zap size={12} className="text-red-600/40" /> {product.category}
                  </div>
                  <h3 className="text-2xl font-black text-[#333333] tracking-tight">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex text-zinc-300">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className={i < 5 ? "fill-red-600/20 text-red-600/10" : ""} />
                      ))}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {product.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-500 font-medium">
                      <div className="w-1 h-1 rounded-full bg-red-600/30" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-black/[0.03] flex items-center justify-between">
                  <div className="text-3xl font-black text-[#333333]">{product.price.toFixed(2)}€</div>
                  <button className="flex items-center gap-2 bg-[#333333] text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-md active:scale-95 btn-medical">
                    Add to Pack <ShoppingCart size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Pack CTA - UPDATED WITH IMAGE & THEME */}
        <section className="mt-40 relative rounded-[4rem] bg-white border border-black/[0.03] p-12 md:p-24 overflow-hidden medical-card-shadow group">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/[0.01] blur-[150px] rounded-full -z-10" />
          
          <div className="flex flex-col lg:flex-row items-center gap-20 relative z-10">
            <div className="flex-1 space-y-10 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/[0.03] border border-red-600/10 text-red-600 text-[10px] font-bold tracking-[0.2em] uppercase">
                  <HeartPulse size={14} className="opacity-60" /> All-in-One Solution
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-[#333333]">
                  Dein <br /> <span className="text-zinc-400 italic">Optimus-Pack</span>
                </h2>
              </div>
              <p className="text-xl text-zinc-500 font-medium leading-relaxed max-w-xl">
                Keine Kompromisse mehr. Wir stellen dir basierend auf deinen individuellen Werten ein monatliches Pack zusammen — GMP-zertifiziert und exakt dosiert.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                <button className="group flex items-center justify-center gap-3 px-12 py-5 bg-[#333333] text-white rounded-2xl font-bold text-xl hover:bg-black transition-all shadow-lg active:scale-95 btn-medical">
                  Analyse starten <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white border border-black/[0.05] rounded-2xl font-bold text-xl text-zinc-400 hover:text-black hover:bg-zinc-50 transition-all btn-medical shadow-sm">
                  Lerne mehr
                </button>
              </div>
            </div>
            
            <div className="flex-1 relative w-full max-w-md lg:max-w-none">
              <div className="relative rounded-[3.5rem] overflow-hidden border border-black/[0.03] shadow-lg group-hover:scale-[1.01] transition-transform duration-1000 medical-card-shadow bg-zinc-50">
                <img 
                  src="https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/Tagesrationen%20Supplements.png" 
                  alt="Optimus Daily Sachet Packs" 
                  className="w-full h-auto object-cover grayscale brightness-[1.05] group-hover:grayscale-0 transition-all duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/60 backdrop-blur-xl border border-black/[0.03] rounded-[2rem] shadow-sm">
                   <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Inhalt</p>
                   <p className="text-sm font-bold text-[#333333] uppercase tracking-wider">30x Personalisierte Sachets</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupplementsPage;
