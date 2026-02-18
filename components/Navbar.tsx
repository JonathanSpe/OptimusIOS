import React from 'react';
import { LogOut, LogIn, Target, ArrowRight, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: any) => void;
  onLogout: () => void;
  currentPage: string;
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onLogout, currentPage, isLoggedIn }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl px-8 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.03)] premium-border">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-9 h-9 bg-[#0F172A] rounded-xl flex items-center justify-center font-[900] text-xl group-hover:scale-105 transition-transform text-white shadow-lg">O</div>
          <span className="text-2xl font-[900] tracking-[-0.05em] uppercase text-[#0F172A]">Optimus</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[13px] font-[800] uppercase tracking-[0.2em]">
          {!isLoggedIn ? (
            <>
              <button 
                onClick={() => onNavigate('home')}
                className={`${currentPage === 'home' ? 'text-slate-900' : 'text-slate-400'} hover:text-slate-900 transition-all`}
              >
                Startseite
              </button>
              <button 
                onClick={() => onNavigate('science')}
                className={`${currentPage === 'science' ? 'text-slate-900' : 'text-slate-400'} hover:text-slate-900 transition-all`}
              >
                Wissenschaft
              </button>
              <button 
                onClick={() => onNavigate('how-it-works')}
                className={`${currentPage === 'how-it-works' ? 'text-slate-900' : 'text-slate-400'} hover:text-slate-900 transition-all`}
              >
                Funktion
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className={`${currentPage === 'about' ? 'text-slate-900' : 'text-slate-400'} hover:text-slate-900 transition-all`}
              >
                Über uns
              </button>
              <button 
                onClick={() => onNavigate('supplements')}
                className={`${currentPage === 'supplements' ? 'text-slate-900 font-black' : 'text-slate-400'} hover:text-slate-900 transition-all flex items-center gap-2`}
              >
                Shop
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => onNavigate('user-dashboard')}
                className={`${currentPage === 'user-dashboard' ? 'text-slate-900' : 'text-slate-400'} hover:text-slate-900 transition-all`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => onNavigate('recommendations')}
                className={`${currentPage === 'recommendations' ? 'text-slate-900' : 'text-slate-400'} hover:text-slate-900 transition-all flex items-center gap-2.5`}
              >
                <Target size={14} className={currentPage === 'recommendations' ? 'text-red-800' : 'text-slate-400'} />
                Strategie
              </button>
              <button 
                onClick={() => onNavigate('user-profile')}
                className={`${currentPage === 'user-profile' ? 'text-slate-900' : 'text-slate-400'} hover:text-slate-900 transition-all`}
              >
                Profil
              </button>
              <button 
                onClick={() => onNavigate('supplements')}
                className={`${currentPage === 'supplements' ? 'text-slate-900 font-black' : 'text-slate-400'} hover:text-slate-900 transition-all flex items-center gap-2`}
              >
                Shop
              </button>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <button 
              onClick={onLogout}
              className="group flex items-center gap-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 text-[#0F172A] px-6 py-2.5 rounded-2xl text-[10px] font-[800] uppercase tracking-[0.15em] transition-all"
            >
              <LogOut size={14} className="text-slate-400 group-hover:text-red-800 transition-colors" />
              Abmelden
            </button>
          ) : (
            <>
              <button 
                onClick={() => onNavigate('login')}
                className="group flex items-center gap-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 text-[#0F172A] px-6 py-2.5 rounded-2xl text-[10px] font-[800] uppercase tracking-[0.15em] transition-all hidden sm:flex"
              >
                <LogIn size={14} className="text-slate-400 group-hover:text-red-800 transition-colors" />
                Anmelden
              </button>
              <button 
                onClick={() => onNavigate('home')}
                className="group flex items-center gap-2.5 bg-[#0F172A] hover:bg-black text-white px-7 py-3 rounded-2xl text-[11px] font-[800] uppercase tracking-[0.15em] transition-all shadow-xl active:scale-95 btn-medical"
              >
                Jetzt Starten
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;