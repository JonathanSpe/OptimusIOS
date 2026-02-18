
import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'science' | 'how-it-works' | 'about' | 'supplements') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-24 px-6 border-t border-black/[0.03] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-4">
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="w-8 h-8 bg-[#333333] rounded-lg flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform text-white">O</div>
              <span className="text-xl font-bold tracking-tighter uppercase text-[#333333]">Optimus</span>
            </div>
            <p className="text-zinc-400 max-w-xs font-medium leading-relaxed">Dein Weg zu einer optimierten Gesundheit. Schmerzfrei, schnell und wissenschaftlich fundiert.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold text-[#333333] text-sm uppercase tracking-widest">Unternehmen</h4>
              <ul className="space-y-2 text-zinc-400 text-sm font-medium">
                <li><button onClick={() => onNavigate('about')} className="hover:text-red-600 transition-colors">Über uns</button></li>
                <li><button onClick={() => onNavigate('supplements')} className="hover:text-red-600 transition-colors">Supplements</button></li>
                <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-red-600 transition-colors">Wie es funktioniert</button></li>
                <li><button onClick={() => onNavigate('science')} className="hover:text-red-600 transition-colors">Wissenschaft</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#333333] text-sm uppercase tracking-widest">Rechtliches</h4>
              <ul className="space-y-2 text-zinc-400 text-sm font-medium">
                <li><a href="#" className="hover:text-red-600 transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">AGB</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#333333] text-sm uppercase tracking-widest">Support</h4>
              <ul className="space-y-2 text-zinc-400 text-sm font-medium">
                <li><a href="#" className="hover:text-red-600 transition-colors">Hilfe-Center</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Kontakt</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
          <p>© 2024 Optimus Health Solutions GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
