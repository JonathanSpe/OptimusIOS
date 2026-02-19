
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  ImageBackground,
  StatusBar
} from 'react-native';
import { ArrowRight, Play, Activity, Microscope, Zap, ShieldCheck, Cpu, Fingerprint } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Abstract Background Mesh Elements */}
      <View style={styles.bgMesh1} />
      <View style={styles.bgMesh2} />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        {/* TOP NAVIGATION / STATUS BAR */}
        <View style={styles.navHeader}>
          <View style={styles.protocolBadge}>
            <Text style={styles.protocolText}>OPTIMUS_B1O_V5</Text>
          </View>
          <View style={styles.liveIndicator}>
            <View style={styles.liveDot} />
            <Text style={styles.liveText}>SYSTEM_ONLINE</Text>
          </View>
        </View>

        {/* HERO SECTION */}
        <View style={styles.heroSection}>
          <View style={styles.heroTitleContainer}>
            <Text style={styles.heroTitle}>
              Evolve Your{"\n"}
              <Text style={styles.heroTitleAccent}>Biology.</Text>
            </Text>
            <View style={styles.titleLine} />
          </View>

          <Text style={styles.heroDescription}>
            Hocheffiziente Blutanalytik für das nächste Level deiner Performance. Schmerzfrei. Digital. Evidenzbasiert.
          </Text>

          <View style={styles.actionRow}>
            <TouchableOpacity 
              style={styles.mainCta} 
              onPress={onGetStarted}
              activeOpacity={0.9}
            >
              <Text style={styles.mainCtaText}>INITIALISIEREN</Text>
              <ArrowRight size={18} color="#FFF" strokeWidth={3} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.demoCta}>
              <Play size={14} color="#FFF" fill="#FFF" />
              <Text style={styles.demoCtaText}>DEMO</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* BIOMETRIC VISUAL MODULE */}
        <View style={styles.visualContainer}>
          <View style={styles.imageFrame}>
            <ImageBackground
              source={{ uri: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/athlete%20sports.png' }}
              style={styles.heroImage}
              imageStyle={{ opacity: 0.35, grayscale: 1 }}
            >
              <View style={styles.scanOverlay}>
                <View style={styles.scanline} />
                <View style={[styles.dataTag, { top: 40, left: 30 }]}>
                   <Activity size={10} color="#991B1B" />
                   <Text style={styles.tagText}>VO2MAX_SYNC</Text>
                </View>
                <View style={[styles.dataTag, { bottom: 60, right: 30 }]}>
                   <Cpu size={10} color="#991B1B" />
                   <Text style={styles.tagText}>ATP_OPTIMIZED</Text>
                </View>
                
                {/* Visual Bio-Grid */}
                <View style={styles.bioGrid}>
                  <View style={styles.gridH} />
                  <View style={styles.gridV} />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>

        {/* CLINICAL FACTS MODULES */}
        <View style={styles.factsSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.accentLine} />
            <Text style={styles.sectionLabel}>MOLEKULARE_INSIGHTS</Text>
          </View>

          <Text style={styles.sectionTitle}>Kein Raten mehr.</Text>

          <View style={styles.factCard}>
            <View style={styles.factHeader}>
              <Text style={styles.factValue}>30%</Text>
              <Text style={styles.factUnit}>GLOBALER_SCHNITT</Text>
            </View>
            <Text style={styles.factTitle}>EISENMANGEL_PRÄVENTIV</Text>
            <Text style={styles.factText}>
              Wir identifizieren Defizite, bevor sie deine Performance limitieren.
            </Text>
          </View>

          <View style={[styles.factCard, styles.factCardHighlight]}>
            <View style={styles.factHeader}>
              <Text style={[styles.factValue, { color: '#FFF' }]}>-25%</Text>
              <Text style={[styles.factUnit, { color: 'rgba(255,255,255,0.4)' }]}>EFFIZIENZ_LOSS</Text>
            </View>
            <Text style={[styles.factTitle, { color: '#FFF' }]}>SAUERSTOFF_LIMITIERUNG</Text>
            <Text style={[styles.factText, { color: 'rgba(255,255,255,0.6)' }]}>
              Optimierte Ferritin-Werte steigern die aerobe Kapazität massiv.
            </Text>
          </View>
        </View>

        {/* INNOVATION PILLARS */}
        <View style={styles.pillarsGrid}>
          <View style={styles.pillar}>
            <View style={styles.pillarIcon}>
              <Microscope size={18} color="#991B1B" />
            </View>
            <Text style={styles.pillarLabel}>CLINICAL_GRADE</Text>
          </View>
          <View style={styles.pillar}>
            <View style={styles.pillarIcon}>
              <Fingerprint size={18} color="#991B1B" />
            </View>
            <Text style={styles.pillarLabel}>BIO_UNIQUE_ID</Text>
          </View>
        </View>

        <View style={styles.footerSpacer} />
      </ScrollView>

      {/* Footer Static Badge */}
      <View style={styles.footerBadge}>
        <ShieldCheck size={12} color="rgba(255,255,255,0.3)" />
        <Text style={styles.footerBadgeText}>SECURED BY OPTIMUS_CORE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617', // Deeper Obsidian
  },
  scrollContent: {
    paddingBottom: 120,
  },
  bgMesh1: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'rgba(153, 27, 27, 0.03)',
  },
  bgMesh2: {
    position: 'absolute',
    bottom: 200,
    left: -150,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
  },
  navHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingTop: 60,
    marginBottom: 48,
  },
  protocolBadge: {
    backgroundColor: 'rgba(153, 27, 27, 0.08)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(153, 27, 27, 0.2)',
  },
  protocolText: {
    color: '#991B1B',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 2,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10B981',
  },
  liveText: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
  },
  heroSection: {
    paddingHorizontal: 32,
  },
  heroTitleContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 60,
    fontWeight: '900',
    color: '#FFF',
    lineHeight: 58,
    letterSpacing: -3,
  },
  heroTitleAccent: {
    color: '#991B1B',
    fontStyle: 'italic',
  },
  titleLine: {
    position: 'absolute',
    left: -20,
    top: 10,
    bottom: 10,
    width: 2,
    backgroundColor: '#991B1B',
  },
  heroDescription: {
    fontSize: 16,
    color: '#94A3B8',
    fontWeight: '600',
    lineHeight: 28,
    maxWidth: '85%',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 48,
  },
  mainCta: {
    flex: 2,
    backgroundColor: '#991B1B',
    height: 70,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: '#991B1B',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  mainCtaText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
  },
  demoCta: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  demoCtaText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '900',
  },
  visualContainer: {
    marginTop: 64,
    paddingHorizontal: 20,
  },
  imageFrame: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 48,
    overflow: 'hidden',
    backgroundColor: '#0F172A',
  },
  heroImage: {
    flex: 1,
  },
  scanOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanline: {
    position: 'absolute',
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(153, 27, 27, 0.4)',
    top: '48%',
  },
  dataTag: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  tagText: {
    color: '#FFF',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
  },
  bioGrid: {
    width: 180,
    height: 180,
    borderWidth: 1,
    borderColor: 'rgba(153, 27, 27, 0.1)',
    position: 'absolute',
  },
  gridH: { position: 'absolute', top: '50%', width: '100%', height: 1, backgroundColor: 'rgba(153, 27, 27, 0.1)' },
  gridV: { position: 'absolute', left: '50%', height: '100%', width: 1, backgroundColor: 'rgba(153, 27, 27, 0.1)' },
  factsSection: {
    padding: 32,
    marginTop: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  accentLine: {
    width: 32,
    height: 2,
    backgroundColor: '#991B1B',
  },
  sectionLabel: {
    fontSize: 9,
    fontWeight: '900',
    color: '#991B1B',
    letterSpacing: 2,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: '900',
    color: '#FFF',
    marginBottom: 32,
    letterSpacing: -1,
  },
  factCard: {
    backgroundColor: 'rgba(255,255,255,0.02)',
    padding: 32,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    marginBottom: 16,
  },
  factCardHighlight: {
    backgroundColor: 'rgba(153, 27, 27, 0.1)',
    borderColor: 'rgba(153, 27, 27, 0.15)',
  },
  factHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 12,
    marginBottom: 16,
  },
  factValue: {
    fontSize: 52,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: -3,
  },
  factUnit: {
    fontSize: 8,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 1,
  },
  factTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 1,
    marginBottom: 8,
  },
  factText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
    fontWeight: '600',
  },
  pillarsGrid: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginTop: 12,
  },
  pillar: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  pillarIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(153, 27, 27, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  pillarLabel: {
    fontSize: 8,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: 1,
  },
  footerSpacer: {
    height: 100,
  },
  footerBadge: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  footerBadgeText: {
    color: 'rgba(255,255,255,0.2)',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 2,
  },
});
