
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
import { ArrowRight, Play, Activity, Microscope, Zap, ShieldCheck, Cpu } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        {/* INNOVATIVE HERO SECTION */}
        <View style={styles.heroSection}>
          <View style={styles.headerRow}>
            <View style={styles.protocolBadge}>
              <Text style={styles.protocolText}>OPTIMUS_SYSTEM_v5.2</Text>
            </View>
            <View style={styles.encryptionBadge}>
              <ShieldCheck size={10} color="#991B1B" />
              <Text style={styles.encryptionText}>AES-256</Text>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.heroTitle}>
              Was steckt{"\n"}
              <Text style={styles.heroTitleAccent}>wirklich</Text>{"\n"}
              <Text style={styles.heroTitleFaded}>in dir?</Text>
            </Text>
            <View style={styles.verticalTitleBar} />
          </View>

          <Text style={styles.heroSub}>
            Entschlüssele deine Biologie. Hochpräzise Blutanalytik für maximale Performance in Alltag, Job und Sport.
          </Text>

          <View style={styles.actionContainer}>
            <TouchableOpacity 
              style={styles.primaryBtn} 
              onPress={onGetStarted}
              activeOpacity={0.8}
            >
              <Text style={styles.primaryBtnText}>INITIALISIEREN</Text>
              <ArrowRight size={18} color="#FFF" strokeWidth={3} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.secondaryBtn}>
              <View style={styles.playIconBox}>
                <Play size={12} color="#FFF" fill="#FFF" />
              </View>
              <Text style={styles.secondaryBtnText}>DEMO</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* BIO-VISUAL MODULE */}
        <View style={styles.visualModule}>
          <ImageBackground
            source={{ uri: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/athlete%20sports.png' }}
            style={styles.heroImage}
            imageStyle={styles.heroImageStyle}
          >
            <View style={styles.imageOverlay}>
              <View style={styles.scanline} />
              
              {/* Floating Telemetry Badges */}
              <View style={[styles.telemetryTag, { top: 30, left: 20 }]}>
                <Activity size={12} color="#991B1B" />
                <Text style={styles.telemetryText}>HEART_RATE: 48BPM</Text>
              </View>

              <View style={[styles.telemetryTag, { bottom: 30, right: 20 }]}>
                <Cpu size={12} color="#991B1B" />
                <Text style={styles.telemetryText}>META_SYNC: ACTIVE</Text>
              </View>

              <View style={styles.biometricGrid}>
                <View style={styles.gridLineH} />
                <View style={styles.gridLineV} />
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* CLINICAL FACTS MODULES */}
        <View style={styles.factsSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.accentLine} />
            <Text style={styles.sectionTag}>MOLEKULARE_ANALYSE</Text>
          </View>

          <Text style={styles.sectionTitle}>Fakten statt Vermutungen.</Text>

          <View style={styles.factModule}>
            <View style={styles.factHead}>
              <Text style={styles.factValue}>30%</Text>
              <Text style={styles.factLabel}>EISENMANGEL_GLOBAL</Text>
            </View>
            <Text style={styles.factDesc}>
              Ein Großteil der Bevölkerung lebt mit einem unerkannten Defizit, das als chronische Müdigkeit missverstanden wird.
            </Text>
          </View>

          <View style={[styles.factModule, styles.factModuleCrimson]}>
            <View style={styles.factHead}>
              <Text style={[styles.factValue, { color: '#FFF' }]}>-25%</Text>
              <Text style={[styles.factLabel, { color: 'rgba(255,255,255,0.5)' }]}>LEISTUNGS_DROP</Text>
            </View>
            <Text style={[styles.factDesc, { color: 'rgba(255,255,255,0.7)' }]}>
              Suboptimale Ferritin-Werte limitieren den Sauerstofftransport in die Zellen und blockieren deine Regeneration.
            </Text>
          </View>
        </View>

        {/* INNOVATION FEATURES */}
        <View style={styles.featureSection}>
          <View style={styles.featureGrid}>
            <View style={styles.featureCard}>
              <View style={styles.iconCircle}>
                <Microscope size={20} color="#991B1B" />
              </View>
              <Text style={styles.featureTitle}>LABOR_STANDARDS</Text>
              <Text style={styles.featureText}>Akkreditierte klinische Diagnostik.</Text>
            </View>
            
            <View style={styles.featureCard}>
              <View style={styles.iconCircle}>
                <Zap size={20} color="#991B1B" />
              </View>
              <Text style={styles.featureTitle}>BIO_INTELLIGENCE</Text>
              <Text style={styles.featureText}>KI-gestützte Strategien.</Text>
            </View>
          </View>
        </View>

        <View style={styles.footerSpacer} />
      </ScrollView>

      {/* Background Decorative Gradient Elements (simulated with Views) */}
      <View style={styles.bgGlow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617', // Deep Dark Navy
  },
  scrollContent: {
    paddingBottom: 60,
  },
  heroSection: {
    paddingTop: 60,
    paddingHorizontal: 32,
  },
  headerRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  protocolBadge: {
    backgroundColor: 'rgba(153, 27, 27, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(153, 27, 27, 0.2)',
  },
  protocolText: {
    color: '#991B1B',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 2,
  },
  encryptionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.03)',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  encryptionText: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
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
  heroTitleFaded: {
    color: 'rgba(255,255,255,0.05)',
  },
  verticalTitleBar: {
    position: 'absolute',
    left: -16,
    top: 10,
    bottom: 10,
    width: 2,
    backgroundColor: '#991B1B',
  },
  heroSub: {
    fontSize: 16,
    color: '#94A3B8',
    fontWeight: '600',
    lineHeight: 26,
    maxWidth: '90%',
  },
  actionContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 40,
  },
  primaryBtn: {
    flex: 2,
    backgroundColor: '#991B1B',
    height: 70,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: '#991B1B',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  primaryBtnText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
  },
  secondaryBtn: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  playIconBox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    backgroundColor: 'rgba(153, 27, 27, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryBtnText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
  visualModule: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  heroImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 48,
    overflow: 'hidden',
  },
  heroImageStyle: {
    opacity: 0.4,
    grayscale: 1,
  },
  imageOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanline: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(153, 27, 27, 0.3)',
    position: 'absolute',
    top: '45%',
  },
  telemetryTag: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(2, 6, 23, 0.8)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  telemetryText: {
    color: '#FFF',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
  },
  biometricGrid: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderWidth: 1,
    borderColor: 'rgba(153, 27, 27, 0.1)',
  },
  gridLineH: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(153, 27, 27, 0.2)',
  },
  gridLineV: {
    position: 'absolute',
    left: '50%',
    height: '100%',
    width: 1,
    backgroundColor: 'rgba(153, 27, 27, 0.2)',
  },
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
    width: 40,
    height: 2,
    backgroundColor: '#991B1B',
  },
  sectionTag: {
    fontSize: 10,
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
    borderRadius: 32,
    padding: 32,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  factModuleCrimson: {
    backgroundColor: 'rgba(153, 27, 27, 0.1)',
    borderColor: 'rgba(153, 27, 27, 0.2)',
  },
  factHead: {
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
  factLabel: {
    fontSize: 9,
    fontWeight: '900',
    color: '#991B1B',
    letterSpacing: 2,
  },
  factDesc: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
    fontWeight: '600',
  },
  featureSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  featureGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  featureCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.02)',
    padding: 24,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(153, 27, 27, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: 1,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 18,
    fontWeight: '600',
  },
  footerSpacer: {
    height: 100,
  },
  bgGlow: {
    position: 'absolute',
    top: height * 0.1,
    right: -width * 0.3,
    width: width,
    height: width,
    borderRadius: width / 2,
    backgroundColor: 'rgba(153, 27, 27, 0.05)',
  },
});
