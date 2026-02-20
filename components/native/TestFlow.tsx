
import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { X, Camera, ArrowRight, CheckCircle, Droplets, Info, Timer, ShieldCheck, Zap, Moon, Heart, Coffee, Activity, Package, MapPin, Clipboard } from 'lucide-react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type FlowStep = 'PROCESS' | 'QUESTIONNAIRE' | 'SCAN' | 'INSTRUCTIONS' | 'SHIPPING' | 'SUCCESS';

const STEPS = [
  { id: 'PROCESS', label: 'Prozess', number: 1 },
  { id: 'QUESTIONNAIRE', label: 'Fragebogen', number: 2 },
  { id: 'SCAN', label: 'Scan', number: 3 },
  { id: 'INSTRUCTIONS', label: 'Anleitung', number: 4 },
  { id: 'SHIPPING', label: 'Versand', number: 5 },
  { id: 'SUCCESS', label: 'Fertig', number: 6 },
];

// Reordered: Process → Questionnaire → Scan → Instructions → Shipping → Success

export default function TestFlow({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<FlowStep>('PROCESS');
  const [instructionIdx, setInstructionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const instructions = [
    { title: "Vorbereitung", desc: "Reinige deinen Oberarm mit dem beigelegten Alkoholtupfer.", icon: CheckCircle, color: "#10B981" },
    { title: "Platzierung", desc: "Ziehe die Schutzfolie vom Tasso+ Device ab.", icon: Droplets, color: "#3B82F6" },
    { title: "Aktivierung", desc: "Drücke den roten Knopf kräftig durch.", icon: Zap, color: "#991B1B" },
    { title: "Kollektion", desc: "Bleibe 5 Minuten ruhig sitzen.", icon: Timer, color: "#94A3B8" }
  ];

  const questions = [
    { id: 1, icon: Droplets, q: "Bist du nüchtern?", opts: ["Ja, 8+ Stunden", "Ja, 4-8 Stunden", "Nein"] },
    { id: 2, icon: Moon, q: "Wie war dein Schlaf?", opts: ["Gut (7-9h)", "Normal (6-7h)", "Schlecht (<6h)"] },
    { id: 3, icon: Zap, q: "Aktuelle Belastung?", opts: ["Hoch", "Normal", "Recovery"] },
    { id: 4, icon: Droplets, q: "Hydration heute?", opts: ["Gut (>2L)", "Normal (1-2L)", "Wenig (<1L)"] },
    { id: 5, icon: Heart, q: "Stress-Level?", opts: ["Niedrig", "Mittel", "Hoch"] },
    { id: 6, icon: Coffee, q: "Koffein heute?", opts: ["Keins", "1-2 Kaffee", "3+ Kaffee"] },
    { id: 7, icon: Activity, q: "Training gestern?", opts: ["Ja, intensiv", "Ja, leicht", "Nein"] },
    { id: 8, icon: ShieldCheck, q: "Medikamente?", opts: ["Keine", "Regelmäßig", "Aktuell"] },
    { id: 9, icon: Moon, q: "Alkoholkonsum?", opts: ["Keiner", "Gelegentlich", "Regelmäßig"] },
    { id: 10, icon: Activity, q: "Rauchen?", opts: ["Nein", "Gelegentlich", "Ja"] },
  ];

  const currentStepIndex = STEPS.findIndex(s => s.id === step);
  const progressWidth = SCREEN_WIDTH * (currentStepIndex / (STEPS.length - 1));

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

        {/* Step Progress Indicator - Hidden on Process step */}
        {step !== 'PROCESS' && (
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: progressWidth }]} />
            <Text style={styles.progressText}>
              Schritt {currentStepIndex + 1} von {STEPS.length}
            </Text>
          </View>
        )}

        <View style={styles.content}>
          {/* STEP 1: PROCESS OVERVIEW */}
          {step === 'PROCESS' && (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollFlow}>
              <Text style={styles.stepTitle}>PROZESS <Text style={styles.fadedText}>ÜBERSICHT</Text></Text>
              <Text style={styles.stepSub}>Was passiert als Nächstes?</Text>
              
              <View style={styles.processCard}>
                <View style={styles.processStep}>
                  <View style={styles.processNumber}><Text style={styles.processNumberText}>1</Text></View>
                  <View style={styles.processContent}>
                    <Text style={styles.processTitle}>FRAGEBOGEN AUSFÜLLEN</Text>
                    <Text style={styles.processDesc}>Beantworte kurze Fragen zu deinem aktuellen Zustand für bessere Analyse.</Text>
                  </View>
                </View>

                <View style={styles.processStep}>
                  <View style={styles.processNumber}><Text style={styles.processNumberText}>2</Text></View>
                  <View style={styles.processContent}>
                    <Text style={styles.processTitle}>TEST-KIT SCANNEN</Text>
                    <Text style={styles.processDesc}>Scanne den QR-Code auf deinem Tasso+ Device zur Identifikation.</Text>
                  </View>
                </View>

                <View style={styles.processStep}>
                  <View style={styles.processNumber}><Text style={styles.processNumberText}>3</Text></View>
                  <View style={styles.processContent}>
                    <Text style={styles.processTitle}>ANLEITUNG BEFOLGEN</Text>
                    <Text style={styles.processDesc}>Schritt-für-Schritt Anleitung für die korrekte Blutentnahme.</Text>
                  </View>
                </View>

                <View style={styles.processStep}>
                  <View style={styles.processNumber}><Text style={styles.processNumberText}>4</Text></View>
                  <View style={styles.processContent}>
                    <Text style={styles.processTitle}>PROBE VERSENDEN</Text>
                    <Text style={styles.processDesc}>Versende deine Probe noch heute an unser Labor in Berlin.</Text>
                  </View>
                </View>

                <View style={styles.processStep}>
                  <View style={[styles.processNumber, { backgroundColor: '#10B981' }]}><CheckCircle size={16} stroke="#FFF" /></View>
                  <View style={styles.processContent}>
                    <Text style={styles.processTitle}>ERGEBNISSE IN 48H</Text>
                    <Text style={styles.processDesc}>Deine personalisierten Ergebnisse sind in ca. 2 Tagen verfügbar.</Text>
                  </View>
                </View>
              </View>

              <View style={styles.timeEstimate}>
                <Timer size={16} stroke="#991B1B" />
                <Text style={styles.timeEstimateText}>Geschätzte Dauer: 15-20 Minuten</Text>
              </View>

              <TouchableOpacity 
                style={styles.primaryBtn} 
                onPress={() => setStep('QUESTIONNAIRE')}
              >
                <Text style={styles.primaryBtnText}>LOS GEHT'S</Text>
                <ArrowRight size={16} stroke="#FFF" />
              </TouchableOpacity>
            </ScrollView>
          )}

          {/* STEP 2: QUESTIONNAIRE */}
          {step === 'QUESTIONNAIRE' && (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollFlow}>
              <Text style={styles.stepTitle}>BIOMETRISCHER <Text style={styles.fadedText}>KONTEXT</Text></Text>
              <Text style={styles.stepSub}>Für präzisere Analyse • {Object.keys(answers).length}/{questions.length}</Text>
              
              {questions.map((item, i) => (
                <View key={i} style={styles.qCard}>
                  <View style={styles.qHead}>
                    <item.icon size={16} stroke="#CBD5E1" />
                    <Text style={styles.qText}>{item.q.toUpperCase()}</Text>
                  </View>
                  <View style={styles.optRow}>
                    {item.opts.map(o => (
                      <TouchableOpacity 
                        key={o} 
                        style={[
                          styles.optBtn,
                          answers[item.id] === o && styles.optBtnActive
                        ]}
                        onPress={() => setAnswers({...answers, [item.id]: o})}
                      >
                        <Text style={[
                          styles.optBtnText,
                          answers[item.id] === o && styles.optBtnTextActive
                        ]}>{o}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ))}

              <TouchableOpacity 
                style={[styles.primaryBtn, { backgroundColor: '#991B1B', marginTop: 20 }]} 
                onPress={() => setStep('SCAN')}
                disabled={Object.keys(answers).length < questions.length}
                opacity={Object.keys(answers).length < questions.length ? 0.5 : 1}
              >
                <Text style={styles.primaryBtnText}>WEITER ZUM SCAN</Text>
                <ArrowRight size={16} stroke="#FFF" />
              </TouchableOpacity>
            </ScrollView>
          )}

          {/* STEP 3: SCAN */}
          {step === 'SCAN' && (
            <View style={styles.centerFlow}>
              <Text style={styles.stepTitle}>SCAN <Text style={styles.fadedText}>TEST-KIT</Text></Text>
              <Text style={styles.stepSub}>Scanne den QR-Code auf deinem Tasso+ Pack</Text>
              
              <View style={styles.cameraBox}>
                <View style={styles.scanSim}>
                  <View style={styles.scanTarget} />
                  <TouchableOpacity style={styles.scanBtn} onPress={() => setStep('INSTRUCTIONS')}>
                    <Camera size={20} stroke="#FFF" />
                    <Text style={styles.scanBtnText}>SCAN STARTEN</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.infoBox}>
                <Info size={16} stroke="#CBD5E1" />
                <Text style={styles.infoText}>Der QR-Code verbindet deine physische Probe sicher mit deinem Profil.</Text>
              </View>
            </View>
          )}

          {/* STEP 4: INSTRUCTIONS */}
          {step === 'INSTRUCTIONS' && (
            <View style={styles.centerFlow}>
              <Text style={styles.stepTitle}>SCHRITT <Text style={styles.accentText}>{instructionIdx + 1}</Text><Text style={styles.fadedText}>/4</Text></Text>
              
              <View style={styles.visualBox}>
                {React.createElement(instructions[instructionIdx].icon, { size: 64, stroke: instructions[instructionIdx].color })}
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
                    else setStep('SHIPPING');
                  }}
                >
                  <Text style={styles.primaryBtnText}>
                    {instructionIdx === 3 ? 'ZUM VERSAND' : 'NÄCHSTER SCHRITT'}
                  </Text>
                  <ArrowRight size={16} stroke="#FFF" />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* STEP 5: SHIPPING */}
          {step === 'SHIPPING' && (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollFlow}>
              <Text style={styles.stepTitle}>VERSAND <Text style={styles.fadedText}>VORBEREITEN</Text></Text>
              
              <View style={styles.shippingCard}>
                <View style={styles.shippingHeader}>
                  <Package size={24} stroke="#991B1B" />
                  <Text style={styles.shippingTitle}>WICHTIG: HEUTE VERSENDEN!</Text>
                </View>
                <Text style={styles.shippingText}>
                  Versende deine Probe noch heute für optimale Ergebnisse. Die Blutwerte können sich über Nacht ändern.
                </Text>
              </View>

              <View style={styles.addressCard}>
                <View style={styles.addressHeader}>
                  <MapPin size={20} stroke="#64748B" />
                  <Text style={styles.addressTitle}>VERSANDADRESSE</Text>
                </View>
                <View style={styles.addressBox}>
                  <Text style={styles.addressText}>OPTIMUS CLINICAL LAB</Text>
                  <Text style={styles.addressText}>Laborstraße 42</Text>
                  <Text style={styles.addressText}>10115 Berlin</Text>
                  <Text style={styles.addressText}>Deutschland</Text>
                </View>
              </View>

              <View style={styles.instructionsCard}>
                <Text style={styles.instructionsTitle}>VERSAND-CHECKLISTE</Text>
                {[
                  "Probe in mitgelieferter Box verstauen",
                  "Box fest verschließen",
                  "Versandetikett aufkleben (bereits frankiert)",
                  "In nächsten Briefkasten/Post einwerfen",
                  "Tracking-Code: Wird per Email gesendet"
                ].map((item, i) => (
                  <View key={i} style={styles.checklistItem}>
                    <View style={styles.checklistBullet}>
                      <Text style={styles.checklistNumber}>{i + 1}</Text>
                    </View>
                    <Text style={styles.checklistText}>{item}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.trackingInfo}>
                <Info size={16} stroke="#3B82F6" />
                <Text style={styles.trackingText}>
                  Tracking-Nummer und Status-Updates erhältst du per Email sobald deine Probe unser Labor erreicht.
                </Text>
              </View>

              <TouchableOpacity 
                style={[styles.primaryBtn, { backgroundColor: '#10B981', marginTop: 20 }]} 
                onPress={() => setStep('SUCCESS')}
              >
                <Text style={styles.primaryBtnText}>VERSAND BESTÄTIGEN</Text>
                <CheckCircle size={16} stroke="#FFF" />
              </TouchableOpacity>
            </ScrollView>
          )}

          {/* STEP 6: SUCCESS */}
          {step === 'SUCCESS' && (
            <View style={styles.centerFlow}>
              <View style={styles.successCircle}>
                <ShieldCheck size={48} stroke="#10B981" />
              </View>
              <Text style={styles.stepTitle}>ANALYSE <Text style={styles.fadedText}>GESTARTET</Text></Text>
              <Text style={styles.successSub}>Deine Probe ist unterwegs. Ergebnisse in ca. 48 Stunden.</Text>
              
              <View style={styles.timelineCard}>
                <View style={styles.timelineItem}>
                  <View style={[styles.timelineDot, styles.timelineDotCompleted]} />
                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineTitle}>HEUTE</Text>
                    <Text style={styles.timelineDesc}>Probe versenden</Text>
                  </View>
                </View>
                <View style={styles.timelineItem}>
                  <View style={styles.timelineDot} />
                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineTitle}>TAG 1-2</Text>
                    <Text style={styles.timelineDesc}>Labor-Analyse</Text>
                  </View>
                </View>
                <View style={styles.timelineItem}>
                  <View style={[styles.timelineDot, styles.timelineDotActive]} />
                  <View style={styles.timelineContent}>
                    <Text style={[styles.timelineTitle, styles.timelineTitleActive]}>TAG 2-3</Text>
                    <Text style={styles.timelineDesc}>Ergebnisse verfügbar</Text>
                  </View>
                </View>
              </View>

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
  safe: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#F1F5F9' 
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logoBox: { width: 32, height: 32, backgroundColor: '#991B1B', borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  logoText: { color: '#FFF', fontWeight: '900', fontSize: 12 },
  headerTitle: { fontSize: 9, fontWeight: '900', color: '#94A3B8', letterSpacing: 2 },
  closeBtn: { padding: 4 },

  // Compact Progress Bar
  progressBar: {
    height: 32,
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    justifyContent: 'center',
    paddingHorizontal: 20,
    position: 'relative',
  },
  progressFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#991B1B',
    opacity: 0.1,
  },
  progressText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#64748B',
    textAlign: 'center',
    letterSpacing: 1,
  },

  // Old Progress Styles (kept for reference but not used)
  progressContainer: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  progressStepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  progressStep: {
    alignItems: 'center',
    gap: 6,
  },
  progressCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressCircleCompleted: {
    backgroundColor: '#10B981',
  },
  progressCircleActive: {
    backgroundColor: '#991B1B',
    borderWidth: 3,
    borderColor: '#FEE2E2',
  },
  progressNumber: {
    fontSize: 12,
    fontWeight: '900',
    color: '#94A3B8',
  },
  progressNumberActive: {
    color: '#FFF',
  },
  progressLabel: {
    fontSize: 8,
    fontWeight: '800',
    color: '#94A3B8',
  },
  progressLabelActive: {
    color: '#991B1B',
    fontWeight: '900',
  },
  progressLine: {
    width: 20,
    height: 2,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 4,
  },
  progressLineCompleted: {
    backgroundColor: '#10B981',
  },

  content: { flex: 1, padding: 24 },
  centerFlow: { flex: 1, alignItems: 'center', gap: 24, justifyContent: 'center' },
  scrollFlow: { flex: 1 },
  stepTitle: { fontSize: 32, fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center' },
  fadedText: { color: '#E2E8F0' },
  accentText: { color: '#991B1B' },
  stepSub: { fontSize: 10, fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: 1.5, textAlign: 'center', marginBottom: 32 },

  // Process Overview
  processCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    gap: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  processStep: {
    flexDirection: 'row',
    gap: 16,
  },
  processNumber: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  processNumberText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFF',
  },
  processContent: {
    flex: 1,
  },
  processTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  processDesc: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    lineHeight: 18,
  },
  timeEstimate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  timeEstimateText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#991B1B',
  },

  // Scan
  cameraBox: { width: '100%', aspectRatio: 1, backgroundColor: '#000', borderRadius: 48, overflow: 'hidden' },
  scanSim: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  scanTarget: { width: '60%', height: '60%', borderWidth: 2, borderColor: 'rgba(255,255,255,0.3)', borderStyle: 'dashed', borderRadius: 24 },
  scanBtn: { 
    position: 'absolute', 
    bottom: 24, 
    backgroundColor: '#991B1B', 
    paddingHorizontal: 24, 
    paddingVertical: 16, 
    borderRadius: 16, 
    flexDirection: 'row', 
    gap: 8, 
    alignItems: 'center',
    shadowColor: '#991B1B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  scanBtnText: { fontSize: 11, fontWeight: '900', letterSpacing: 1.5, color: '#FFF' },
  infoBox: { backgroundColor: '#F8FAFC', padding: 20, borderRadius: 24, flexDirection: 'row', gap: 12, width: '100%' },
  infoText: { flex: 1, fontSize: 10, color: '#94A3B8', fontWeight: '700' },

  // Instructions
  visualBox: { width: 240, height: 240, backgroundColor: '#F8FAFC', borderRadius: 120, alignItems: 'center', justifyContent: 'center' },
  instrTitle: { fontSize: 20, fontWeight: '900', letterSpacing: 0.5 },
  instrDesc: { fontSize: 14, color: '#64748B', fontWeight: '700', fontStyle: 'italic', textAlign: 'center' },
  footerActions: { width: '100%', gap: 16 },
  progressRow: { flexDirection: 'row', gap: 8 },
  progressBar: { flex: 1, height: 4, backgroundColor: '#F1F5F9', borderRadius: 2 },
  progressBarActive: { backgroundColor: '#991B1B' },
  primaryBtn: { backgroundColor: '#0F172A', paddingVertical: 20, borderRadius: 24, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12 },
  primaryBtnText: { color: '#FFF', fontSize: 11, fontWeight: '900', letterSpacing: 2 },

  // Questionnaire
  qCard: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#F1F5F9', padding: 20, borderRadius: 32, marginBottom: 12 },
  qHead: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 },
  qText: { fontSize: 10, fontWeight: '900', color: '#0F172A', letterSpacing: 1.5 },
  optRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  optBtn: { 
    flex: 1, 
    minWidth: '30%',
    paddingVertical: 12, 
    paddingHorizontal: 8,
    borderWidth: 2, 
    borderColor: '#F1F5F9', 
    borderRadius: 12, 
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  optBtnActive: {
    borderColor: '#991B1B',
    backgroundColor: '#FEF2F2',
  },
  optBtnText: { fontSize: 9, fontWeight: '900', color: '#94A3B8' },
  optBtnTextActive: {
    color: '#991B1B',
  },

  // Shipping
  shippingCard: {
    backgroundColor: '#FEF2F2',
    padding: 20,
    borderRadius: 24,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FEE2E2',
  },
  shippingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  shippingTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#991B1B',
    letterSpacing: 1,
  },
  shippingText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#991B1B',
    lineHeight: 20,
  },
  addressCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 20,
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  addressTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#64748B',
    letterSpacing: 2,
  },
  addressBox: {
    backgroundColor: '#F8FAFC',
    padding: 16,
    borderRadius: 16,
  },
  addressText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  instructionsCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 20,
  },
  instructionsTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 16,
    letterSpacing: 1,
  },
  checklistItem: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  checklistBullet: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#991B1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checklistNumber: {
    fontSize: 12,
    fontWeight: '900',
    color: '#FFF',
  },
  checklistText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
    lineHeight: 20,
  },
  trackingInfo: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#EFF6FF',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  trackingText: {
    flex: 1,
    fontSize: 11,
    fontWeight: '700',
    color: '#3B82F6',
    lineHeight: 18,
  },

  // Success
  successCircle: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#ECFDF5', alignItems: 'center', justifyContent: 'center' },
  successSub: { fontSize: 14, fontWeight: '700', color: '#64748B', textAlign: 'center', paddingHorizontal: 24 },
  timelineCard: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    padding: 20,
    borderRadius: 24,
    gap: 16,
    marginVertical: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#CBD5E1',
  },
  timelineDotCompleted: {
    backgroundColor: '#10B981',
  },
  timelineDotActive: {
    backgroundColor: '#10B981',
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  timelineContent: {
    flex: 1,
  },
  timelineTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 1,
  },
  timelineTitleActive: {
    color: '#10B981',
  },
  timelineDesc: {
    fontSize: 13,
    fontWeight: '700',
    color: '#64748B',
    marginTop: 2,
  },
  outlineBtn: { paddingVertical: 20, borderRadius: 32, borderWidth: 2, borderColor: '#E2E8F0', width: '100%', alignItems: 'center' },
  outlineBtnText: { fontSize: 11, fontWeight: '900', letterSpacing: 2, color: '#0F172A' }
});
