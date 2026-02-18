
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Send, Loader2 } from 'lucide-react-native';
import { GoogleGenAI } from "@google/genai";

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: 'model', text: 'Hallo Jonathan! Wie kann ich dir heute bei deiner Optimierung helfen?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMsg }].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: 'Du bist der Optimus Bio-Advisor. Jonathan ist Athlet. Hilf ihm bei seinen Werten.',
        }
      });
      setMessages(prev => [...prev, { role: 'model', text: response.text || '' }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'Technischer Fehler.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.chatWrap}>
      <ScrollView style={styles.msgScroll} contentContainerStyle={{ gap: 12 }}>
        {messages.map((m, i) => (
          <View key={i} style={[styles.bubble, m.role === 'user' ? styles.bubbleUser : styles.bubbleBot]}>
            <Text style={[styles.msgText, m.role === 'user' && styles.textUser]}>{m.text}</Text>
          </View>
        ))}
        {loading && <Text style={styles.typing}>Thinking...</Text>}
      </ScrollView>
      
      <View style={styles.inputRow}>
        <TextInput 
          style={styles.input} 
          placeholder="Frag Optimus AI..." 
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Send size={18} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatWrap: {
    height: 400,
    backgroundColor: '#FFF',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.02,
    shadowRadius: 10,
  },
  msgScroll: { flex: 1, marginBottom: 12 },
  bubble: { padding: 16, borderRadius: 20, maxWidth: '85%' },
  bubbleBot: { backgroundColor: '#F8FAFC', alignSelf: 'flex-start' },
  bubbleUser: { backgroundColor: '#0F172A', alignSelf: 'flex-end' },
  msgText: { fontSize: 13, fontWeight: '600', color: '#475569' },
  textUser: { color: '#FFF' },
  typing: { fontSize: 9, fontWeight: '900', color: '#94A3B8', textTransform: 'uppercase' },
  inputRow: { flexDirection: 'row', gap: 8 },
  input: { flex: 1, backgroundColor: '#F8FAFC', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 12, fontSize: 14 },
  sendBtn: { width: 44, height: 44, borderRadius: 16, backgroundColor: '#0F172A', alignItems: 'center', justifyContent: 'center' }
});
