
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Target, Pill, Coffee, Activity, ArrowLeft } from 'lucide-react-native';

export default function RecommendationsPage({ onNavigate }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onNavigate('dashboard')} style={styles.backBtn}>
        <ArrowLeft size={16} stroke="#94A3B8" />
        <Text style={styles.backText}>DASHBOARD</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Q2 <Text style={styles.titleFaded}>STRATEGIE</Text></Text>

      <View style={styles.mainCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTag}>ELITE PROTOCOL V4</Text>
          <Text style={styles.cardTitle}>Deine <Text style={styles.cardTitleItalic}>Daily-Ration</Text></Text>
        </View>
        <View style={styles.rationPreview}>
          <Text style={styles.rationStatus}>MOLEKULAR AKTIV</Text>
        </View>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>PACK KONFIGURIEREN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>LIFESTYLE OPTIMIERUNG</Text>
        
        {[
          { icon: Coffee, title: "Kaffee-Timing", desc: "Halte 60 Min. Abstand zwischen Kaffee und Mahlzeiten.", data: "EISEN-RESORPTION +40%" },
          { icon: Pill, title: "Magnesium", desc: "Integriere täglich magnesiumreiche Lebensmittel am Abend.", data: "HRV STABILITÄT" },
          { icon: Activity, title: "Sauerstoff", desc: "Fokussiere dich auf eisenreiche Kost kombiniert mit Vitamin C.", data: "FERRITIN FOCUS" }
        ].map((item, i) => (
          <View key={i} style={styles.recCard}>
            <View style={styles.recIconWrap}>
              <item.icon size={20} stroke="#0F172A" />
            </View>
            <View style={styles.recContent}>
              <View style={styles.recTop}>
                <Text style={styles.recTitle}>{item.title.toUpperCase()}</Text>
                <Text style={styles.recBadge}>{item.data}</Text>
              </View>
              <Text style={styles.recDesc}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  backBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  backText: { fontSize: 9, fontWeight: '900', color: '#94A3B8', letterSpacing: 1.5 },
  title: { fontSize: 32, fontWeight: '900', color: '#0F172A', textTransform: 'uppercase' },
  titleFaded: { color: '#E2E8F0', fontStyle: 'italic' },
  mainCard: { backgroundColor: '#FFF', borderRadius: 32, padding: 24, marginTop: 24, borderWidth: 1, borderColor: '#F1F5F9', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 15 },
  cardHeader: { marginBottom: 20 },
  cardTag: { fontSize: 8, fontWeight: '900', color: '#991B1B', letterSpacing: 2, marginBottom: 4 },
  cardTitle: { fontSize: 24, fontWeight: '900', color: '#0F172A' },
  cardTitleItalic: { color: '#94A3B8', fontStyle: 'italic' },
  rationPreview: { height: 120, backgroundColor: '#F8FAFC', borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
  rationStatus: { fontSize: 8, fontWeight: '900', color: '#CBD5E1', letterSpacing: 3 },
  primaryBtn: { backgroundColor: '#0F172A', paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  primaryBtnText: { color: '#FFF', fontSize: 10, fontWeight: '900', letterSpacing: 2 },
  section: { marginTop: 40 },
  sectionLabel: { fontSize: 9, fontWeight: '900', color: '#94A3B8', letterSpacing: 2, marginBottom: 16 },
  recCard: { backgroundColor: '#FFF', borderRadius: 24, padding: 20, marginBottom: 12, borderWidth: 1, borderColor: '#F1F5F9', flexDirection: 'row', gap: 16 },
  recIconWrap: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center' },
  recContent: { flex: 1 },
  recTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  recTitle: { fontSize: 10, fontWeight: '900', color: '#0F172A' },
  recBadge: { fontSize: 7, fontWeight: '900', color: '#991B1B' },
  recDesc: { fontSize: 12, fontWeight: '600', color: '#64748B', lineHeight: 18 }
});
