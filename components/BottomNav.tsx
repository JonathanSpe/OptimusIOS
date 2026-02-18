
import React from 'react';
import { Activity, Target, ShoppingBag, User, Plus } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onStartTest: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab, onStartTest }) => {
  const tabs = [
    { id: 'dashboard', label: 'Home', icon: <Activity size={22} /> },
    { id: 'strategy', label: 'Strategie', icon: <Target size={22} /> },
    { id: 'start-test', label: '', icon: null }, // Spacer for center button
    { id: 'shop', label: 'Shop', icon: <ShoppingBag size={22} /> },
    { id: 'profile', label: 'Account', icon: <User size={22} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-8 pt-3 bg-white/90 backdrop-blur-3xl border-t border-slate-100/50 flex justify-around items-center shadow-[0_-10px_40px_rgba(0,0,0,0.04)]">
      {tabs.map((tab, idx) => {
        if (tab.id === 'start-test') {
          return (
            <div key="center-btn" className="relative -top-6">
              <button
                onClick={onStartTest}
                className="w-16 h-16 bg-[#0F172A] rounded-full flex items-center justify-center text-white shadow-[0_15px_30px_rgba(15,23,42,0.3)] active:scale-90 transition-all border-4 border-white"
              >
                <Plus size={28} strokeWidth={3} />
              </button>
            </div>
          );
        }

        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
              isActive ? 'text-red-800' : 'text-slate-400'
            }`}
          >
            <div className={`p-1 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
              {tab.icon}
            </div>
            <span className={`text-[9px] font-black uppercase tracking-widest ${isActive ? 'opacity-100' : 'opacity-40'}`}>
              {tab.label}
            </span>
            {isActive && <div className="w-1 h-1 rounded-full bg-red-800 animate-pulse mt-0.5" />}
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
