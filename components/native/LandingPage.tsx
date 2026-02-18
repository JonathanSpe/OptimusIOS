
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { ArrowRight, Play, ShieldCheck, Activity, Microscope, Zap } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* HERO SECTION */}
      <View style={styles.hero}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>PROTOCOL V5.2_ENT</Text>
        </View>
        <Text style={styles.heroTitle}>
          Was steckt{"\n"}
          <Text style={styles.italicRed}>wirklich</Text>{"\n"}
          <Text style={styles.fadedText}>in dir?</Text>
        </Text>
        <Text style={styles.heroSub}>
          Hole das Maximum aus Alltag, Job und Sport heraus. Schmerzfrei, digital und von Zuhause.
        </Text>
        
        <View style={styles.heroActions}>
          <TouchableOpacity style={styles.primaryBtn} onPress={onGetStarted}>
            <Text style={styles.primaryBtnText}>ANALYSE STARTEN</Text>
            <ArrowRight size={16} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn}>
            <Play size={16} color="#991B1B" />
            <Text style={styles.secondaryBtnText}>DEMO ANSEHEN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.heroImageFrame}>
          <Image 
            source={{ uri: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/athlete%20sports.png' }} 
            style={styles.heroImage}
          />
          <View style={styles.imageOverlay}>
            <View style={styles.scanline} />
            <View style={styles.imageBadge}>
              <Activity size={12} color="#991B1B" />
              <Text style={styles.imageBadgeText}>LIVE TELEMETRY</Text>
            </View>
          </div>
        </View>
      </View>

      {/* FACTS SECTION */}
      <View style={styles.facts}>
        <View style={styles.sectionHeader}>
          <View style={styles.divider} />
          <Text style={styles.sectionTag}>MOLEKULARE ANALYSE</Text>
        </View>
        <Text style={styles.sectionTitle}>Zahlen lügen nicht.{"\n"}Messbare Gesundheit.</Text>
        
        <View style={styles.factCard}>
          <View style={styles.factHead}>
            <Text style={styles.factValue}>30%</Text>
            <Text style={styles.factUnit}>GLOBALER SCHNITT</Text>
          </View>
          <Text style={styles.factLabel}>UNERKANNTER EISENMANGEL</Text>
          <Text style={styles.factDesc}>Ein Großteil lebt mit einem Defizit, das als Müdigkeit abgetan wird.</Text>
        </View>

        <View style={[styles.factCard, { backgroundColor: '#0F172A' }]}>
          <View style={styles.factHead}>
            <Text style={[styles.factValue, { color: '#FFF' }]}>-25%</Text>
            <Text style={[styles.factUnit, { color: 'rgba(255,255,255,0.4)' }]}>LEISTUNGSVERLUST</Text>
          </View>
          <Text style={[styles.factLabel, { color: '#FFF' }]}>SAUERSTOFF-LIMITIERUNG</Text>
          <Text style={[styles.factDesc, { color: 'rgba(255,255,255,0.6)' }]}>Niedrige Ferritin-Werte reduzieren den Sauerstofftransport massiv.</Text>
        </View>
      </View>

      {/* POTENTIAL SECTION */}
      <View style={styles.potential}>
        <View style={styles.sectionHeader}>
          <View style={styles.divider} />
          <Text style={styles.sectionTag}>DEIN POTENTIAL</Text>
        </View>
        <Text style={styles.sectionTitle}>Deine Ziele.{"\n"}Dein Vorsprung.</Text>
        
        {[
          { icon: Microscope, title: "Lifestyle-Analyse", desc: "Individuelle Abstimmung auf deine Performance-Ziele." },
          { icon: Activity, title: "Wearable-Sync", desc: "Integration von Apple Health, Strava & Garmin." },
          { icon: Zap, title: "Daily-Rationen", desc: "Maßgeschneiderte Nährstoffe in praktischen Sachets." }
        ].map((item, i) => (
          <View key={i} style={styles.featureItem}>
            <View style={styles.featureIconBox}>
              <item.icon size={18} color="#991B1B" />
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>{item.title.toUpperCase()}</Text>
              <Text style={styles.featureDesc}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.footerSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: { padding: 24, paddingTop: 40 },
  tag: { 
    backgroundColor: '#F1F5F9', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 8, 
    alignSelf: 'flex-start',
    marginBottom: 20
  },
  tagText: { fontSize: 8, fontWeight: '900', color: '#94A3B8', letterSpacing: 2 },
  heroTitle: { fontSize: 44, fontWeight: '900', lineHeight: 44, tracking: -2 },
  italicRed: { color: '#991B1B', fontStyle: 'italic' },
  fadedText: { color: '#E2E8F0' },
  heroSub: { fontSize: 14, fontWeight: '600', color: '#64748B', marginTop: 20, lineHeight: 22 },
  heroActions: { flexDirection: 'row', gap: 12, marginTop: 32 },
  primaryBtn: { 
    flex: 1, 
    backgroundColor: '#0F172A', 
    paddingVertical: 18, 
    borderRadius: 20, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 8,
    shadowColor: '#0F172A',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5
  },
  primaryBtnText: { color: '#FFF', fontSize: 10, fontWeight: '900', letterSpacing: 1 },
  secondaryBtn: { 
    flex: 1, 
    backgroundColor: '#FFF', 
    borderWidth: 1, 
    borderColor: '#F1F5F9', 
    paddingVertical: 18, 
    borderRadius: 20, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 8 
  },
  secondaryBtnText: { color: '#0F172A', fontSize: 10, fontWeight: '900', letterSpacing: 1 },
  heroImageFrame: { marginTop: 40, width: '100%', aspectRatio: 1, borderRadius: 48, overflow: 'hidden', backgroundColor: '#F8FAFC' },
  heroImage: { width: '100%', height: '100%', grayscale: 1, opacity: 0.8 },
  imageOverlay: { position: 'absolute', inset: 0, justifyContent: 'center', alignItems: 'center' },
  scanline: { width: '100%', height: 1, backgroundColor: 'rgba(153, 27, 27, 0.2)', position: 'absolute', top: '50%' },
  imageBadge: { position: 'absolute', top: 20, left: 20, backgroundColor: 'rgba(255,255,255,0.9)', padding: 10, borderRadius: 12, flexDirection: 'row', alignItems: 'center', gap: 6 },
  imageBadgeText: { fontSize: 8, fontWeight: '900', color: '#0F172A' },
  facts: { padding: 24, marginTop: 40 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  divider: { width: 32, height: 1, backgroundColor: '#991B1B' },
  sectionTag: { fontSize: 9, fontWeight: '900', color: '#991B1B', letterSpacing: 2 },
  sectionTitle: { fontSize: 32, fontWeight: '900', color: '#0F172A', lineHeight: 36, tracking: -1, marginBottom: 24 },
  factCard: { backgroundColor: '#FFF', borderRadius: 32, padding: 24, marginBottom: 16, borderWidth: 1, borderColor: '#F1F5F9' },
  factHead: { flexDirection: 'row', alignItems: 'baseline', gap: 8, marginBottom: 12 },
  factValue: { fontSize: 40, fontWeight: '900', color: '#0F172A' },
  factUnit: { fontSize: 8, fontWeight: '900', color: '#94A3B8', letterSpacing: 1 },
  factLabel: { fontSize: 12, fontWeight: '900', color: '#0F172A', marginBottom: 8 },
  factDesc: { fontSize: 12, fontWeight: '600', color: '#64748B', lineHeight: 18 },
  potential: { padding: 24, marginTop: 40 },
  featureItem: { flexDirection: 'row', gap: 16, marginBottom: 24 },
  featureIconBox: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#F1F5F9', alignItems: 'center', justify: 'center', paddingTop: 12 },
  featureText: { flex: 1 },
  featureTitle: { fontSize: 10, fontWeight: '900', color: '#0F172A', letterSpacing: 1, marginBottom: 4 },
  featureDesc: { fontSize: 12, fontWeight: '600', color: '#64748B', lineHeight: 18 },
  footerSpacer: { height: 100 }
});
