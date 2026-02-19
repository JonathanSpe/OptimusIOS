import React from 'react';
import { User, Shield, CreditCard, Bell, LogOut, Package, MapPin, ChevronRight, Settings, Smartphone, Activity } from 'lucide-react';

interface UserProfileProps {
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onLogout }) => {
  const menuItems = [
    { icon: <User size={20} />, label: "Persönliche Daten", desc: "Name, Geburtsdatum, Geschlecht" },
    { icon: <Shield size={20} />, label: "Sicherheit", desc: "Passwort, 2FA, Datenschutz" },
    { icon: <CreditCard size={20} />, label: "Abonnement", desc: "Elite 3-Monat (Aktiv)", status: "Aktiv" },
    { icon: <MapPin size={20} />, label: "Lieferadresse", desc: "Wichtig für Kit-Zustellung" },
    { icon: <Bell size={20} />, label: "Benachrichtigungen", desc: "Email, Push-Benachrichtigungen" },
    { icon: <Settings size={20} />, label: "Präferenzen", desc: "Analyse-Ziele, Sportart" },
  ];

  const integrations = [
    { name: "Strava", icon: <Activity className="text-orange-500" />, status: "Verbunden", color: "border-orange-500/20" },
    { name: "Apple Health", icon: <Smartphone className="text-red-500" />, status: "Verbunden", color: "border-red-500/20" },
    { name: "Garmin Connect", icon: <Activity className="text-blue-500" />, status: "Nicht verbunden", color: "border-zinc-200" },
    { name: "Oura", icon: <Smartphone className="text-zinc-400" />, status: "Nicht verbunden", color: "border-zinc-200" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-32 pb-24 px-6 text-[#333333]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-8 p-10 bg-white rounded-[3rem] border border-black/[0.03] medical-card-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/[0.01] blur-[80px] rounded-full -z-10" />
          <div className="w-28 h-28 rounded-full bg-zinc-50 border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
            <img 
              src="https://raw.githubusercontent.com/JonathanSpe/Optimus/05eb146bea4dbb2e2597fc672e0aea7d6995f76a/optimus---personalisierte-blutanalyse/assets/Jonathan%20Pic.png" 
              alt="User" 
              className="w-full h-full object-cover grayscale brightness-105"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-4xl font-black tracking-tighter text-[#333333]">Jonathan Specking</h2>
            <p className="text-zinc-600 font-medium">jonathan@optimus-health.de</p>
            <div className="flex justify-center sm:justify-start gap-3 mt-4">
              <span className="px-3 py-1 rounded-lg bg-red-600/[0.04] border border-red-600/10 text-red-600 text-[10px] font-bold uppercase tracking-widest">Elite Member</span>
              <span className="px-3 py-1 rounded-lg bg-zinc-50 border border-black/[0.03] text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Seit Jan 2024</span>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-bold text-[#333333] uppercase tracking-tight">Ecosystem Sync</h3>
            <span className="text-[10px] text-zinc-400 uppercase font-black tracking-widest">Live Bio-Feed</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {integrations.map((app) => (
              <div key={app.name} className={`p-6 rounded-[2rem] bg-white border ${app.color} flex items-center justify-between hover:bg-zinc-50 transition-all medical-card-shadow group`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-black/[0.02] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {app.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] text-sm tracking-tight uppercase">{app.name}</h4>
                    <p className={`text-[9px] font-bold uppercase tracking-widest ${app.status === 'Verbunden' ? 'text-green-600' : 'text-zinc-500'}`}>{app.status}</p>
                  </div>
                </div>
                <button className="text-[9px] font-black uppercase tracking-widest text-zinc-500 hover:text-[#333333] transition-colors px-3 py-1 bg-zinc-50 rounded-lg">
                  {app.status === 'Verbunden' ? 'Trennen' : 'Connect'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Settings List */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#333333] mb-2 px-2 uppercase tracking-tight">Account Settings</h3>
          <div className="grid grid-cols-1 gap-4">
            {menuItems.map((item, i) => (
              <div 
                key={i}
                className="group flex items-center justify-between p-6 bg-white border border-black/[0.03] rounded-[2rem] hover:border-black/[0.1] hover:bg-zinc-50 transition-all cursor-pointer medical-card-shadow"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-black/[0.02] flex items-center justify-center text-zinc-400 group-hover:text-red-600/60 transition-colors shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold text-[#333333] text-lg tracking-tight uppercase">{item.label}</h4>
                      {item.status && <span className="px-2 py-0.5 rounded-md bg-green-500/10 text-green-600 text-[8px] font-black uppercase tracking-widest">{item.status}</span>}
                    </div>
                    <p className="text-sm text-zinc-600 font-medium">{item.desc}</p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-zinc-300 group-hover:text-[#333333] transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Kit Order Section */}
        <div className="p-10 bg-white border border-black/[0.03] rounded-[3rem] flex flex-col md:flex-row items-center gap-10 medical-card-shadow">
           <div className="w-20 h-20 rounded-3xl bg-red-600/[0.04] border border-red-600/10 flex items-center justify-center text-red-600 shadow-inner">
             <Package size={32} />
           </div>
           <div className="flex-1 space-y-2 text-center md:text-left">
             <h3 className="text-2xl font-black text-[#333333] tracking-tight uppercase italic">Next Supply Dispatch</h3>
             <p className="text-zinc-600 font-medium">Dein personalisierter Teebeutel-Vorrat wird am <span className="text-[#333333] font-bold">01. April 2024</span> automatisch versendet.</p>
           </div>
           <button className="px-8 py-4 rounded-xl bg-[#333333] text-white font-bold text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-md active:scale-95">
             Versand vorziehen
           </button>
        </div>

        {/* Logout */}
        <div className="pt-12 border-t border-black/[0.03] flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Optimus Member ID: #782-991-002</p>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 text-red-600/60 hover:text-red-700 font-black text-[10px] uppercase tracking-widest transition-all px-6 py-2 rounded-full border border-red-600/10 hover:bg-red-50"
          >
            <LogOut size={16} /> Session beenden
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;