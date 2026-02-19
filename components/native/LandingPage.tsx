
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  ImageBackground
} from 'react-native';
import { ArrowRight, Play, Activity, Microscope, Zap, ShieldCheck } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <View style={styles.safeContainer}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HERO SECTION */}
        <View style={styles.heroSection}>
          <View style={styles.badgeRow}>
            <View style={styles.protocolBadge}>
              <Text style={styles.protocolText}>PROTOCOL V5.2_ENT</Text>
            </View>
            <View style={styles.statusBadge}>
              <View style={styles.pulseDot} />
              <Text style={styles.statusText}>LIVE</Text>
            </View>
          </View>

          <Text style={styles.heroTitle}>
            Was steckt{"\n"}
            <Text style={styles.titleAccent}>wirklich</Text>{"\n"}
            <Text style={styles.titleFaded}>in dir?</Text>
          </Text>

          <Text style={styles.heroDescription}>
            Hole das Maximum aus Alltag, Job und Sport heraus. Schmerzfrei, digital und von Zuhause.
          </Text>

          <View style={styles.ctaRow}>
            <TouchableOpacity 
              style={styles.mainButton} 
              onPress={onGetStarted}
              activeOpacity={0.8}
            >
              <Text style={styles.mainButtonText}>ANALYSE STARTEN</Text>
              <ArrowRight size={18} color="#FFF" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.demoButton}>
              <Play size={16} color="#991B1B" />
              <Text style={styles.demoButtonText}>DEMO</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.visualFrame}>
            <ImageBackground
              source={{ uri: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/main/optimus---personalisierte-blutanalyse/assets/athlete%20sports.png' }}
              style={styles.heroImage}
              imageStyle={{ borderRadius: 40, opacity: 0.5 }}
            >
              <View style={styles.imageOverlay}>
                <View style={styles.scanLine} />
                <View style={styles.telemetryBox}>
                  <Activity size={14} color="#991B1B" />
                  <Text style={styles.telemetryText}>MOLECULAR SCANNING...</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>

        {/* FACTS SECTION */}
        <View style={styles.factsSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.accentLine} />
            <Text style={styles.sectionLabel}>MOLEKULARE ANALYSE</Text>
          </View>
          
          <Text style={styles.sectionTitle}>Zahlen lügen nicht.</Text>
          
          <View style={styles.factCard}>
            <View style={styles.factTop}>
              <Text style={styles.factValue}>30%</Text>
              <Text style={styles.factStatLabel}>GLOBALER SCHNITT</Text>
            </View>
            <Text style={styles.factTitle}>UNERKANNTER EISENMANGEL</Text>
            <Text style={styles.factDesc}>Ein Großteil lebt mit einem Defizit, das oft als Müdigkeit abgetan wird.</Text>
          </View>

          <View style={[styles.factCard, styles.factCardDark]}>
            <View style={styles.factTop}>
              <Text style={[styles.factValue, { color: '#FFF' }]}>-25%</Text>
              <Text style={styles.factStatLabel}>LEISTUNG</Text>
            </View>
            <Text style={[styles.factTitle, { color: '#FFF' }]}>SAUERSTOFF-LIMITIERUNG</Text>
            <Text style={[styles.factDesc, { color: 'rgba(255,255,255,0.4)' }]}>Niedrige Ferritin-Werte reduzieren den Sauerstofftransport massiv.</Text>
          </View>
        </View>

        <View style={styles.footerSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroSection: {
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  protocolBadge: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  protocolText: {
    color: '#94A3B8',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 2,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(153, 27, 27, 0.1)',
    paddingHorizontal: 10,
    borderRadius: 8,
    gap: 6,
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#991B1B',
  },
  statusText: {
    color: '#991B1B',
    fontSize: 8,
    fontWeight: '900',
  },
  heroTitle: {
    fontSize: 54,
    fontWeight: '900',
    color: '#FFF',
    lineHeight: 52,
    letterSpacing: -2,
  },
  titleAccent: {
    color: '#991B1B',
    fontStyle: 'italic',
  },
  titleFaded: {
    color: 'rgba(255,255,255,0.1)',
  },
  heroDescription: {
    fontSize: 15,
    color: '#94A3B8',
    fontWeight: '500',
    lineHeight: 24,
    marginTop: 24,
  },
  ctaRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 32,
  },
  mainButton: {
    flex: 2,
    backgroundColor: '#991B1B',
    height: 64,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  mainButtonText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  demoButton: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  demoButtonText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
  },
  visualFrame: {
    marginTop: 48,
    width: '100%',
    aspectRatio: 1,
    borderRadius: 40,
    overflow: 'hidden',
  },
  heroImage: {
    flex: 1,
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanLine: {
    position: 'absolute',
    top: '40%',
    width: '100%',
    height: 2,
    backgroundColor: 'rgba(153, 27, 27, 0.3)',
  },
  telemetryBox: {
    position: 'absolute',
    top: 24,
    left: 24,
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  telemetryText: {
    color: '#FFF',
    fontSize: 8,
    fontWeight: '900',
  },
  factsSection: {
    padding: 24,
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
    fontSize: 10,
    fontWeight: '900',
    color: '#991B1B',
    letterSpacing: 2,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFF',
    marginBottom: 24,
  },
  factCard: {
    backgroundColor: '#FFF',
    borderRadius: 32,
    padding: 24,
    marginBottom: 16,
  },
  factCardDark: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  factTop: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
    marginBottom: 12,
  },
  factValue: {
    fontSize: 48,
    fontWeight: '900',
    color: '#0F172A',
  },
  factStatLabel: {
    fontSize: 8,
    fontWeight: '900',
    color: '#94A3B8',
  },
  factTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 8,
  },
  factDesc: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 20,
  },
  footerSpacer: {
    height: 120,
  },
});
