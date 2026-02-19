
import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { X, Camera, ArrowRight, CheckCircle, Droplets, Info, Timer, ShieldCheck, Heart, Zap, Moon } from 'lucide-react-native';

type FlowStep = 'SCAN' | 'INSTRUCTIONS' | 'QUESTIONNAIRE' | 'SUCCESS';

export default function TestFlow({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<FlowStep>('SCAN');
  const [instructionIdx, setInstructionIdx] = useState(0);

  const instructions = [
    { title: "Vorbereitung", desc: "Reinige deinen Oberarm mit dem beigelegten Alkoholtupfer.", icon: CheckCircle, color: "#10B981" },
    { title: "Platzierung", desc: "Ziehe die Schutzfolie vom Tasso+ Device ab.", icon: Droplets, color: "#3B82F6" },
    { title: "Aktivierung", desc: "Drücke den roten Knopf kräftig durch.", icon: Zap, color: "#991B1B" },
    { title: "Kollektion", desc: "Bleibe 5 Minuten ruhig sitzen.", icon: Timer, color: "#94A3B8" }
  ];

  return (
    <Modal animationType="slide" transparent={false} visible={true}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.logoBox}><Text style={styles.logoText}>O</Text></View>
            <Text style={styles.headerTitle}>LAB PROCEDURE</Text>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <X size={20} stroke="#94A3B8" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {step === 'SCAN' && (
            <View style={styles.centerFlow}>
              <Text style={styles.stepTitle}>SCAN <Text style={styles.fadedText}>TEST-KIT</Text></Text>
              <Text style={styles.stepSub}>Scanne den QR-Code auf deinem Tasso+ Pack</Text>
              
              <View style={styles.cameraBox}>
                <View style={styles.scanSim}>
                  <View style={styles.scanTarget} />
                  <TouchableOpacity style={styles.simBtn} onPress={() => setStep('INSTRUCTIONS')}>
                    <Camera size={16} stroke="#0F172A" />
                    <Text style={styles.simBtnText}>SCAN SIMULIEREN</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.infoBox}>
                <Info size={16} stroke="#CBD5E1" />
                <Text style={styles.infoText}>Der QR-Code verbindet deine physische Probe sicher mit deinem Profil.</Text>
              </View>
            </View>
          )}

          {step === 'INSTRUCTIONS' && (
            <View style={styles.centerFlow}>
              <Text style={styles.stepTitle}>SCHRITT <Text style={styles.accentText}>{instructionIdx + 1}</Text><Text style={styles.fadedText}>/4</Text></Text>
              
              <View style={styles.visualBox}>
                {React.createElement(instructions[instructionIdx].icon, { size: 64, color: instructions[instructionIdx].color })}
              </View>

              <Text style={styles.instrTitle}>{instructions[instructionIdx].title.toUpperCase()}</Text>
              <Text style={styles.instrDesc}>"{instructions[instructionIdx].desc}"</Text>

              <View style={styles.footerActions}>
                <View style={styles.progressRow}>
                  {[0,1,2,3].map(i => (
                    <View key={i} style={[styles.progressBar, i <= instructionIdx && styles.progressBarActive]} />
                  ))}
                </View>
                <TouchableOpacity 
                  style={styles.primaryBtn} 
                  onPress={() => {
                    if (instructionIdx < 3) setInstructionIdx(instructionIdx + 1);
                    else setStep('QUESTIONNAIRE');
                  }}
                >
                  <Text style={styles.primaryBtnText}>
                    {instructionIdx === 3 ? 'ZUM FRAGEBOGEN' : 'NÄCHSTER SCHRITT'}
                  </Text>
                  <ArrowRight size={16} stroke="#FFF" />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {step === 'QUESTIONNAIRE' && (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollFlow}>
              <Text style={styles.stepTitle}>BIOMETRISCHER <Text style={styles.fadedText}>KONTEXT</Text></Text>
              
              {[
                { icon: Droplets, q: "Bist du nüchtern?", opts: ["Ja", "Nein"] },
                { icon: Moon, q: "Dein Schlaf?", opts: ["Gut", "Neutral", "Schlecht"] },
                { icon: Zap, q: "Aktuelle Belastung?", opts: ["Hoch", "Normal", "Recovery"] },
              ].map((item, i) => (
                <View key={i} style={styles.qCard}>
                  <View style={styles.qHead}>
                    <item.icon size={16} stroke="#CBD5E1" />
                    <Text style={styles.qText}>{item.q.toUpperCase()}</Text>
                  </View>
                  <View style={styles.optRow}>
                    {item.opts.map(o => (
                      <TouchableOpacity key={o} style={styles.optBtn}>
                        <Text style={styles.optBtnText}>{o.toUpperCase()}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ))}

              <TouchableOpacity style={[styles.primaryBtn, { backgroundColor: '#991B1B', marginTop: 20 }]} onPress={() => setStep('SUCCESS')}>
                <Text style={styles.primaryBtnText}>DATEN ÜBERMITTELN</Text>
                <ShieldCheck size={16} stroke="#FFF" />
              </TouchableOpacity>
            </ScrollView>
          )}

          {step === 'SUCCESS' && (
            <View style={styles.centerFlow}>
              <View style={styles.successCircle}>
                <ShieldCheck size={48} stroke="#10B981" />
              </View>
              <Text style={styles.stepTitle}>ANALYSE <Text style={styles.fadedText}>GESTARTET</Text></Text>
              <Text style={styles.successSub}>In ca. 48 Stunden sind deine Ergebnisse verfügbar.</Text>
              <TouchableOpacity style={styles.outlineBtn} onPress={onClose}>
                <Text style={styles.outlineBtnText}>ZUM DASHBOARD</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#F1F5F9' 
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logoBox: { width: 32, height: 32, backgroundColor: '#0F172A', borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  logoText: { color: '#FFF', fontWeight: '900', fontSize: 12 },
  headerTitle: { fontSize: 9, fontWeight: '900', color: '#94A3B8', letterSpacing: 2 },
  closeBtn: { padding: 4 },
  content: { flex: 1, padding: 24 },
  centerFlow: { flex: 1, alignItems: 'center', gap: 32, justifyContent: 'center' },
  scrollFlow: { flex: 1 },
  stepTitle: { fontSize: 32, fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase' },
  fadedText: { color: '#E2E8F0' },
  accentText: { color: '#991B1B' },
  stepSub: { fontSize: 10, fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: 1.5, textAlign: 'center' },
  cameraBox: { width: '100%', aspectRatio: 1, backgroundColor: '#000', borderRadius: 48, overflow: 'hidden' },
  scanSim: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  scanTarget: { width: '60%', height: '60%', borderWidth: 2, borderColor: 'rgba(255,255,255,0.3)', borderStyle: 'dashed', borderRadius: 24 },
  simBtn: { position: 'absolute', bottom: 24, backgroundColor: '#FFF', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 16, flexDirection: 'row', gap: 8, alignItems: 'center' },
  simBtnText: { fontSize: 9, fontWeight: '900', letterSpacing: 1 },
  infoBox: { backgroundColor: '#F8FAFC', padding: 20, borderRadius: 24, flexDirection: 'row', gap: 12, width: '100%' },
  infoText: { flex: 1, fontSize: 10, color: '#94A3B8', fontWeight: '700' },
  visualBox: { width: 240, height: 240, backgroundColor: '#F8FAFC', borderRadius: 120, alignItems: 'center', justifyContent: 'center' },
  instrTitle: { fontSize: 20, fontWeight: '900', letterSpacing: 0.5 },
  instrDesc: { fontSize: 14, color: '#64748B', fontWeight: '700', fontStyle: 'italic', textAlign: 'center' },
  footerActions: { width: '100%', gap: 16 },
  progressRow: { flexDirection: 'row', gap: 8 },
  progressBar: { flex: 1, height: 4, backgroundColor: '#F1F5F9', borderRadius: 2 },
  progressBarActive: { backgroundColor: '#991B1B' },
  primaryBtn: { backgroundColor: '#0F172A', paddingVertical: 20, borderRadius: 24, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12 },
  primaryBtnText: { color: '#FFF', fontSize: 11, fontWeight: '900', letterSpacing: 2 },
  qCard: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#F1F5F9', padding: 20, borderRadius: 32, marginBottom: 12 },
  qHead: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 },
  qText: { fontSize: 9, fontWeight: '900', color: '#0F172A', letterSpacing: 1.5 },
  optRow: { flexDirection: 'row', gap: 8 },
  optBtn: { flex: 1, paddingVertical: 12, borderWidth: 1, borderColor: '#F1F5F9', borderRadius: 12, alignItems: 'center' },
  optBtnText: { fontSize: 9, fontWeight: '900', color: '#94A3B8' },
  successCircle: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#ECFDF5', alignItems: 'center', justifyContent: 'center' },
  successSub: { fontSize: 14, fontWeight: '700', color: '#64748B', textAlign: 'center' },
  outlineBtn: { paddingVertical: 20, borderRadius: 32, borderWidth: 1, borderColor: '#E2E8F0', width: '100%', alignItems: 'center' },
  outlineBtnText: { fontSize: 11, fontWeight: '900', letterSpacing: 2, color: '#0F172A' }
});
