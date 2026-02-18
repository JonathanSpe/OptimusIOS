
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, X, MessageSquareQuote } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hallo Jonathan! Ich bin dein Optimus KI-Assistent. Wie kann ich dir heute helfen, dein Potenzial auszuschöpfen?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
          systemInstruction: `Du bist der Optimus KI-Performance-Assistent. Deine Aufgabe ist es, Jonathan bei der Interpretation seiner Biomarker-Daten (wie Ferritin, Testosteron, Vitamin D) zu helfen und praktische Tipps zur Optimierung von Schlaf, Training und Supplementierung zu geben. Jonathan ist ein Elite-Mitglied und Ironman-Triathlet. Antworte auf Deutsch, bleibe professionell, evidenzbasiert und motivierend. Halte Antworten prägnant aber wertvoll.`,
          temperature: 0.7,
        },
      });

      const modelText = response.text || 'Entschuldigung, ich konnte keine Antwort generieren.';
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error('AI Chat Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Es gab ein technisches Problem. Bitte versuche es später erneut.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    "Schlaf verbessern?",
    "Ferritin Trend?",
    "Trainingstipps Q2",
  ];

  return (
    <div className="flex flex-col h-[600px] bg-white border border-black/[0.03] rounded-[2.5rem] overflow-hidden shadow-sm medical-card-shadow">
      {/* Chat Header */}
      <div className="p-6 border-b border-black/[0.02] bg-zinc-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.03] flex items-center justify-center text-zinc-400 shadow-sm">
            <Bot size={20} />
          </div>
          <div>
            <h4 className="font-bold text-[#333333] text-sm tracking-tight uppercase">Optimus AI</h4>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-sm animate-pulse"></span>
              <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Active Engine</span>
            </div>
          </div>
        </div>
        <Sparkles size={14} className="text-red-600/20" />
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-[#333333] text-white shadow-md' 
                : 'bg-zinc-50 border border-black/[0.02] text-zinc-600 font-medium'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-zinc-50 border border-black/[0.02] p-5 rounded-3xl flex items-center gap-3 text-zinc-400">
              <Loader2 size={16} className="animate-spin" />
              <span className="text-[9px] font-bold uppercase tracking-widest">Processing...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions */}
      <div className="px-6 pb-2 flex flex-wrap gap-2">
        {quickQuestions.map((q, i) => (
          <button 
            key={i}
            onClick={() => handleSendMessage(q)}
            className="px-3 py-1.5 rounded-full bg-zinc-50 border border-black/[0.03] text-[9px] font-bold text-zinc-400 hover:text-[#333333] hover:border-black/[0.1] transition-all uppercase tracking-widest"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-6">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
          className="relative"
        >
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Frag Optimus AI..."
            className="w-full bg-zinc-50 border border-black/[0.03] rounded-2xl py-4 pl-6 pr-14 text-sm text-[#333333] focus:border-black/[0.1] focus:outline-none transition-all placeholder:text-zinc-300 font-medium"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#333333] text-white flex items-center justify-center hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm btn-medical"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChat;
