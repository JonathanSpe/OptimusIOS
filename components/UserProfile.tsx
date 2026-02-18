
import React from 'react';
import { User, Shield, CreditCard, Bell, LogOut, Package, MapPin, ChevronRight, Settings, Smartphone, Activity } from 'lucide-react';

interface UserProfileProps {
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onLogout }) => {
  const menuItems = [
    { icon: <User size={18} />, label: "Persönliche Daten", desc: "Profil anpassen" },
    { icon: <Shield size={18} />, label: "Sicherheit", desc: "Passwort & 2FA" },
    { icon: <CreditCard size={18} />, label: "Abonnement", desc: "Elite Plan (Aktiv)", status: "Aktiv" },
    { icon: <MapPin size={18} />, label: "Lieferadresse", desc: "Versand-Details" },
    { icon: <Bell size={18} />, label: "Mitteilungen", desc: "Email & Push" },
  ];

  return (
    <div className="pt-12 px-6 pb-24 space-y-10">
      <header className="space-y-4 text-center sm:text-left">
        <div className="relative inline-block mx-auto sm:mx-0">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden grayscale">
            <img src="https://raw.githubusercontent.com/JonathanSpe/Optimus/05eb146bea4dbb2e2597fc672e0aea7d6995f76a/optimus---personalisierte-blutanalyse/assets/Jonathan%20Pic.png" alt="Profile" />
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#0F172A] rounded-full border-4 border-white flex items-center justify-center text-white">
            <Settings size={14} />
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-3xl font-black tracking-tighter text-[#0F172A] uppercase">Jonathan Specking</h2>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Elite Member | ID: #782-991</p>
        </div>
      </header>

      <div className="space-y-3">
        {menuItems.map((item, i) => (
          <button 
            key={i}
            className="w-full flex items-center justify-between p-5 bg-white border border-slate-100 rounded-[2rem] shadow-sm active:scale-95 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                {item.icon}
              </div>
              <div className="text-left">
                <h4 className="text-xs font-black text-[#0F172A] uppercase tracking-tight">{item.label}</h4>
                <p className="text-[10px] text-slate-400 font-bold">{item.desc}</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-slate-200" />
          </button>
        ))}
      </div>

      <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-red-800">
          <Package size={24} />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-black text-[#0F172A] uppercase tracking-tight">Supply Dispatch</h3>
          <p className="text-[11px] text-slate-500 font-bold">Nächster Versand am 01. April 2024</p>
        </div>
      </div>

      <button 
        onClick={onLogout}
        className="w-full flex items-center justify-center gap-2 text-red-800/60 font-black text-xs uppercase tracking-widest py-4 rounded-2xl border border-red-800/10 hover:bg-red-50 active:scale-95 transition-all"
      >
        <LogOut size={16} /> Session beenden
      </button>
    </div>
  );
};

export default UserProfile;
