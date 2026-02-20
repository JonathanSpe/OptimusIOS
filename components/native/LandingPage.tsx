
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  StatusBar
} from 'react-native';
import { ArrowRight, Activity } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Subtle background orbs */}
      <View style={styles.bgOrb1} />
      <View style={styles.bgOrb2} />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>O</Text>
          </View>
          <Text style={styles.brandName}>OPTIMUS</Text>
          <Text style={styles.brandTagline}>Clinical Intelligence</Text>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.titleContainer}>
            <Text style={styles.heroTitle}>
              Evolve Your{"\n"}
              <Text style={styles.heroTitleAccent}>Biology.</Text>
            </Text>
            <View style={styles.accentBar} />
          </View>

          <Text style={styles.heroDescription}>
            Precision blood analysis meets AI-powered optimization. 
            Understand your biomarkers, optimize your supplements, 
            and unlock your biological potential.
          </Text>

          {/* Key Benefits */}
          <View style={styles.benefitsContainer}>
            {[
              { label: 'Biomarker Analysis', value: '50+' },
              { label: 'AI Recommendations', value: 'Smart' },
              { label: 'Results Ready', value: '48h' },
            ].map((item, i) => (
              <View key={i} style={styles.benefitCard}>
                <Text style={styles.benefitValue}>{item.value}</Text>
                <Text style={styles.benefitLabel}>{item.label}</Text>
              </View>
            ))}
          </View>

          {/* CTA Button */}
          <TouchableOpacity 
            style={styles.ctaButton} 
            onPress={onGetStarted}
            activeOpacity={0.9}
          >
            <View style={styles.ctaContent}>
              <Text style={styles.ctaText}>GET STARTED NOW</Text>
              <ArrowRight size={20} stroke="#FFF" strokeWidth={3} />
            </View>
          </TouchableOpacity>

          {/* Status Indicator */}
          <View style={styles.statusIndicator}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>SYSTEM ACTIVE • BERLIN LAB</Text>
          </View>
        </View>

        {/* Trust Indicators */}
        <View style={styles.trustSection}>
          <View style={styles.trustItem}>
            <View style={styles.trustIcon}>
              <Activity size={16} stroke="#991B1B" />
            </View>
            <View>
              <Text style={styles.trustTitle}>Clinical Grade</Text>
              <Text style={styles.trustDesc}>Lab-certified analysis</Text>
            </View>
          </View>
          <View style={styles.trustItem}>
            <View style={styles.trustIcon}>
              <Activity size={16} stroke="#991B1B" />
            </View>
            <View>
              <Text style={styles.trustTitle}>Data Security</Text>
              <Text style={styles.trustDesc}>AES-256 encrypted</Text>
            </View>
          </View>
          <View style={styles.trustItem}>
            <View style={styles.trustIcon}>
              <Activity size={16} stroke="#991B1B" />
            </View>
            <View>
              <Text style={styles.trustTitle}>Fast Results</Text>
              <Text style={styles.trustDesc}>48-hour turnaround</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 60,
  },
  bgOrb1: {
    position: 'absolute',
    top: -height * 0.15,
    right: -width * 0.3,
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: 'rgba(153, 27, 27, 0.03)',
  },
  bgOrb2: {
    position: 'absolute',
    bottom: -height * 0.1,
    left: -width * 0.2,
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 0.35,
    backgroundColor: 'rgba(15, 23, 42, 0.02)',
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 60,
    marginBottom: 60,
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: '#991B1B',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#991B1B',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  logoText: {
    color: '#FFF',
    fontSize: 42,
    fontWeight: '900',
  },
  brandName: {
    fontSize: 32,
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#0F172A',
    letterSpacing: -1,
  },
  brandTagline: {
    fontSize: 11,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 3,
    marginTop: 4,
  },
  heroSection: {
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    lineHeight: 54,
  },
  heroTitleAccent: {
    color: '#991B1B',
    fontStyle: 'italic',
  },
  accentBar: {
    width: 60,
    height: 4,
    backgroundColor: '#991B1B',
    marginTop: 16,
    borderRadius: 2,
  },
  heroDescription: {
    fontSize: 15,
    fontWeight: '600',
    color: '#475569',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  benefitsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 40,
    width: '100%',
  },
  benefitCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  benefitValue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#991B1B',
    marginBottom: 4,
  },
  benefitLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  ctaButton: {
    width: '100%',
    backgroundColor: '#991B1B',
    borderRadius: 24,
    paddingVertical: 22,
    paddingHorizontal: 32,
    shadowColor: '#991B1B',
    shadowOpacity: 0.35,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  ctaContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  ctaText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: 2,
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
  },
  statusText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#64748B',
    letterSpacing: 1.5,
  },
  trustSection: {
    marginTop: 60,
    paddingHorizontal: 32,
    gap: 20,
  },
  trustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  trustIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trustTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 2,
  },
  trustDesc: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
  },
});
