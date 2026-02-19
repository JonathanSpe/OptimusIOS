
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
      
      {/* Decorative Glows */}
      <View style={styles.bgGlow} />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER BADGES */}
        <View style={styles.navHeader}>
          <View style={styles.protocolBadge}>
            <Text style={styles.protocolText}>OPTIMUS_B1O_V5.2</Text>
          </View>
          <View style={styles.liveIndicator}>
            <View style={styles.liveDot} />
            <Text style={styles.liveText}>SYSTEM_ACTIVE</Text>
          </View>
        </View>

        {/* HERO TITLE */}
        <View style={styles.heroSection}>
          <View style={styles.titleContainer}>
            <Text style={styles.heroTitle}>
              Evolve Your{"\n"}
              <Text style={styles.heroTitleAccent}>Biology.</Text>
            </Text>
            <View style={styles.accentBar} />
          </View>

          <Text style={styles.heroDescription}>
            Hochpräzise Blutanalytik für maximale Performance. Schmerzfrei. Digital. Evidenzbasiert.
          </Text>

          <View style={styles.actionRow}>
            <TouchableOpacity 
              style={styles.primaryBtn} 
              onPress={onGetStarted}
              activeOpacity={0.8}
            >
              <Text style={styles.primaryBtnText}>INITIALISIEREN</Text>
              <ArrowRight size={18} color="#FFF" strokeWidth={3} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.secondaryBtn}>
              <Play size={14} color="#FFF" fill="#FFF" />
              <Text style={styles.secondaryBtnText}>DEMO</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* BIOMETRIC VISUALIZER */}
        <View style={styles.visualWrapper}>
          <ImageBackground
            source={{ uri: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/athlete%20sports.png' }}
            style={styles.heroImage}
            imageStyle={styles.imageOpacity}
          >
            <View style={styles.biometricOverlay}>
              <View style={styles.scanline} />
              
              <View style={[styles.dataTag, { top: 40, left: 30 }]}>
                 <Activity size={10} color="#991B1B" />
                 <Text style={styles.tagText}>HEART_VAR: 68MS</Text>
              </View>
              
              <View style={[styles.dataTag, { bottom: 60, right: 30 }]}>
                 <Cpu size={10} color="#991B1B" />
                 <Text style={styles.tagText}>METABOLIC_CORE: ON</Text>
              </View>

              <View style={styles.gridOverlay}>
                <View style={styles.gridH} />
                <View style={styles.gridV} />
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* FACTS MODULE */}
        <View style={styles.factsContainer}>
          <View style={styles.sectionHeading}>
            <View style={styles.headingLine} />
            <Text style={styles.headingTag}>ANALYSE_PROFIL</Text>
          </View>

          <Text style={styles.sectionTitle}>Fakten statt Raten.</Text>

          <View style={styles.factModule}>
            <View style={styles.factHead}>
              <Text style={styles.factValue}>30%</Text>
              <Text style={styles.factLabel}>GLOBALER_DEFIZIT_SCHNITT</Text>
            </View>
            <Text style={styles.factBody}>
              Ein Großteil der Bevölkerung lebt mit unentdeckten Mängeln, die als chronische Müdigkeit missverstanden werden.
            </Text>
          </View>

          <View style={[styles.factModule, styles.factModuleActive]}>
            <View style={styles.factHead}>
              <Text style={[styles.factValue, { color: '#FFF' }]}>-25%</Text>
              <Text style={[styles.factLabel, { color: 'rgba(255,255,255,0.4)' }]}>EFFIZIENZ_LOSS</Text>
            </View>
            <Text style={[styles.factBody, { color: 'rgba(255,255,255,0.6)' }]}>
              Suboptimale Ferritin-Werte limitieren den Sauerstofftransport in die Zellen und blockieren deine Performance.
            </Text>
          </View>
        </View>

        <View style={styles.spacer} />
      </ScrollView>

      {/* FOOTER BADGE */}
      <View style={styles.footerSticky}>
        <ShieldCheck size={12} color="rgba(255,255,255,0.3)" />
        <Text style={styles.footerText}>SECURED BY OPTIMUS_ENCRYPTION</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617', // Midnight Obsidian
  },
  scrollContent: {
    paddingBottom: 100,
  },
  bgGlow: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(153, 27, 27, 0.05)',
  },
  navHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingTop: 60,
    marginBottom: 40,
  },
  protocolBadge: {
    backgroundColor: 'rgba(153, 27, 27, 0.1)',
    paddingHorizontal: 10,
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
    color: 'rgba(255,255,255,0.2)',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
  },
  heroSection: {
    paddingHorizontal: 32,
  },
  titleContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 54,
    fontWeight: '900',
    color: '#FFF',
    lineHeight: 52,
    letterSpacing: -2,
  },
  heroTitleAccent: {
    color: '#991B1B',
    fontStyle: 'italic',
  },
  accentBar: {
    position: 'absolute',
    left: -16,
    top: 10,
    bottom: 10,
    width: 2,
    backgroundColor: '#991B1B',
  },
  heroDescription: {
    fontSize: 16,
    color: '#94A3B8',
    fontWeight: '600',
    lineHeight: 26,
    maxWidth: '90%',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 40,
  },
  primaryBtn: {
    flex: 2,
    backgroundColor: '#991B1B',
    height: 70,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: '#991B1B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },
  primaryBtnText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
  },
  secondaryBtn: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  secondaryBtnText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
  },
  visualWrapper: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  heroImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 48,
    overflow: 'hidden',
    backgroundColor: '#0F172A',
  },
  imageOpacity: {
    opacity: 0.3,
    grayscale: 1,
  },
  biometricOverlay: {
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
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  tagText: {
    color: '#FFF',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
  },
  gridOverlay: {
    width: 160,
    height: 160,
    borderWidth: 1,
    borderColor: 'rgba(153, 27, 27, 0.1)',
    position: 'absolute',
  },
  gridH: { position: 'absolute', top: '50%', width: '100%', height: 1, backgroundColor: 'rgba(153, 27, 27, 0.1)' },
  gridV: { position: 'absolute', left: '50%', height: '100%', width: 1, backgroundColor: 'rgba(153, 27, 27, 0.1)' },
  factsContainer: {
    padding: 32,
    marginTop: 40,
  },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  headingLine: {
    width: 30,
    height: 2,
    backgroundColor: '#991B1B',
  },
  headingTag: {
    fontSize: 9,
    fontWeight: '900',
    color: '#991B1B',
    letterSpacing: 3,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFF',
    marginBottom: 32,
    letterSpacing: -1,
  },
  factModule: {
    backgroundColor: 'rgba(255,255,255,0.02)',
    padding: 24,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    marginBottom: 16,
  },
  factModuleActive: {
    backgroundColor: 'rgba(153, 27, 27, 0.1)',
    borderColor: 'rgba(153, 27, 27, 0.15)',
  },
  factHead: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
    marginBottom: 12,
  },
  factValue: {
    fontSize: 48,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: -2,
  },
  factLabel: {
    fontSize: 8,
    fontWeight: '900',
    color: '#991B1B',
    letterSpacing: 1,
  },
  factBody: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
    fontWeight: '600',
  },
  spacer: {
    height: 60,
  },
  footerSticky: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    color: 'rgba(255,255,255,0.2)',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 2,
  },
});
