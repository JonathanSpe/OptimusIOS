
import React, { useState } from 'react';
import { ArrowRight, Lock, Mail, Fingerprint, Shield } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  onNavigate: (page: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 sm:px-12">
      <div className="w-full max-w-sm space-y-12 animate-in fade-in zoom-in-95 duration-700">
        
        {/* Branding Area */}
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <div className="w-20 h-20 bg-[#0F172A] rounded-[2rem] mx-auto flex items-center justify-center font-[900] text-4xl text-white shadow-2xl relative z-10">
              O
            </div>
            <div className="absolute -inset-4 bg-red-800/10 blur-2xl rounded-full -z-10 animate-pulse" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tighter text-[#0F172A] uppercase italic">
              Optimus
            </h1>
            <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">
              Clinical Intelligence
            </p>
          </div>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/40 backdrop-blur-3xl rounded-[3rem] p-10 border border-white/50 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.08)] space-y-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-5">ID / Email</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@optimus.com"
                  className="w-full bg-white/50 border border-slate-100 rounded-2xl py-4.5 pl-14 pr-6 text-sm text-[#0F172A] focus:bg-white focus:border-red-800/20 focus:outline-none transition-all placeholder:text-slate-200 font-bold"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-5">Access Key</label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/50 border border-slate-100 rounded-2xl py-4.5 pl-14 pr-6 text-sm text-[#0F172A] focus:bg-white focus:border-red-800/20 focus:outline-none transition-all placeholder:text-slate-200 font-bold"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#0F172A] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3 group active:scale-[0.97] mt-4"
            >
              Sign In <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Biometric Prompt */}
          <div className="flex flex-col items-center gap-4 pt-4 border-t border-slate-100">
            <button 
              type="button"
              className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 hover:text-red-800 hover:border-red-800/20 hover:bg-white transition-all group"
            >
              <Fingerprint size={32} className="group-hover:scale-110 transition-transform" />
            </button>
            <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Tap to use Biometric ID</p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Shield size={12} className="text-emerald-500" />
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">DE-AES 256 Encrypted Tunnel</p>
          </div>
          
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
            New to Optimus? <br />
            <button 
              onClick={() => onNavigate('home')} 
              className="text-[#0F172A] font-black underline decoration-red-800/20 underline-offset-4 hover:decoration-red-800 transition-all mt-1"
            >
              Request Access
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
