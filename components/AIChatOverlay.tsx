
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, X, MessageCircle, ChevronDown } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChatOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: 'Hallo Jonathan! Ich habe deine aktuellen Daten analysiert. Wir haben eine suboptimale Eisen-Einnahme identifiziert: Du nimmst dein Supplement aktuell zu nah an deinem morgendlichen Kaffee ein. Die enthaltenen Polyphenole hemmen die Resorption massiv.\n\n**Wichtige Anweisung:** Nimm dein Eisenpräparat mindestens 45 Minuten VOR dem ersten Kaffee ein, um die Bioverfügbarkeit um ca. 40% zu steigern. Hast du dazu Fragen?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, userMessage].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `Du bist der Optimus KI-Performance-Assistent. Dein Fokus liegt auf der Optimierung von Blutwerten. Jonathan ist Ironman-Triathlet. Dein aktueller Fokus: Er hat bisher sein Eisen falsch eingenommen (zu nah am Kaffee). Hilf ihm dabei, dies und andere Werte zu verbessern. Antworte auf Deutsch, präzise und motivierend.`,
          temperature: 0.7,
        },
      });

      const modelText = response.text || 'Entschuldigung, ich konnte keine Antwort generieren.';
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error('AI Chat Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Fehler. Bitte später erneut versuchen.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-[380px] h-[500px] bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 bg-[#0F172A] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot size={20} className="text-white/80" />
              <div>
                <h4 className="font-black text-sm uppercase tracking-tight">Optimus AI</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">Active Engine</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide bg-slate-50/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-xs leading-relaxed font-semibold shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-[#0F172A] text-white' 
                    : 'bg-white border border-slate-100 text-slate-700'
                }`}>
                  {m.text.split('\n').map((line, idx) => (
                    <p key={idx} className={idx > 0 ? 'mt-2' : ''}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-4 rounded-3xl flex items-center gap-2 text-slate-400">
                  <Loader2 size={14} className="animate-spin" />
                  <span className="text-[8px] font-black uppercase tracking-widest">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 bg-white border-t border-slate-100">
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Frag Optimus AI..."
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 pl-5 pr-12 text-xs text-[#0F172A] focus:outline-none focus:border-[#0F172A] transition-all font-semibold"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-[#0F172A] text-white flex items-center justify-center disabled:opacity-30 transition-all active:scale-90"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 group ${
          isOpen ? 'bg-red-800 text-white' : 'bg-[#0F172A] text-white'
        }`}
      >
        {isOpen ? <ChevronDown size={24} /> : (
          <div className="relative">
            <MessageCircle size={24} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-800 rounded-full border-2 border-[#0F172A]" />
          </div>
        )}
      </button>
    </div>
  );
};

export default AIChatOverlay;
