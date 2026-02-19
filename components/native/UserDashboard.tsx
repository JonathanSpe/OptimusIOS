
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { Zap, Heart, Activity, TrendingUp, TrendingDown, Bot } from 'lucide-react-native';
import AIChat from './AIChat';

const { width } = Dimensions.get('window');

const biomarkers = [
  { name: 'Ferritin', value: '142', unit: 'ng/ml', status: 'Optimal', trend: 'up' },
  { name: 'Vitamin D', value: '65', unit: 'ng/ml', status: 'Stabil', trend: 'up' },
  { name: 'Magnesium', value: '0.94', unit: 'mmol/l', status: 'Stabil', trend: 'up' },
  { name: 'Cortisol', value: '14', unit: 'ng/ml', status: 'Optimal', trend: 'down' },
];

export default function UserDashboard({ onNavigate }: any) {
  const [selectedCategory, setSelectedCategory] = useState('Sports');

  return (
    <ScrollView 
      style={styles.container} 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollPadding}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Status</Text>
          <Text style={styles.headerSubtitle}>Protocol v5.2_ENT</Text>
        </View>
        <View style={styles.profileCircle}>
          <Image 
            source={{ uri: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/05eb146bea4dbb2e2597fc672e0aea7d6995f76a/optimus---personalisierte-blutanalyse/assets/Jonathan%20Pic.png' }}
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Metrics Row */}
      <View style={styles.metricsRow}>
        <View style={styles.indexCard}>
          <Zap size={20} color="rgba(255,255,255,0.2)" style={styles.cardIcon} />
          <Text style={styles.metricLabel}>OVERALL INDEX</Text>
          <View style={styles.metricValueContainer}>
            <Text style={styles.metricValue}>91</Text>
            <Text style={styles.metricUnit}>%</Text>
          </View>
        </View>

        <View style={styles.ageCard}>
          <Heart size={20} color="rgba(15,23,42,0.1)" style={styles.cardIcon} />
          <Text style={[styles.metricLabel, { color: '#94A3B8' }]}>BIO-AGE</Text>
          <View style={styles.metricValueContainer}>
            <Text style={[styles.metricValue, { color: '#0F172A' }]}>29</Text>
            <Text style={styles.ageDelta}>-3.2Y</Text>
          </View>
        </View>
      </View>

      {/* Category Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {['Sports', 'Recovery', 'Dermis', 'Cognition', 'Hormones'].map(cat => (
          <TouchableOpacity 
            key={cat}
            onPress={() => setSelectedCategory(cat)}
            style={[styles.categoryPill, selectedCategory === cat && styles.categoryPillActive]}
          >
            <Text style={[styles.categoryText, selectedCategory === cat && styles.categoryTextActive]}>
              {cat.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Biomarker Grid */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>BIOMETRIC SNAPSHOT</Text>
        <View style={styles.liveIndicator}>
          <Activity size={10} color="#991B1B" />
          <Text style={styles.liveText}>LIVE PANEL</Text>
        </View>
      </View>

      <View style={styles.grid}>
        {biomarkers.map((m, i) => (
          <View key={i} style={styles.markerCard}>
            <View style={styles.markerTop}>
              <Text style={styles.markerName}>{m.name.toUpperCase()}</Text>
              {m.trend === 'up' ? <TrendingUp size={12} color="#10B981" /> : <TrendingDown size={12} color="#991B1B" />}
            </View>
            <View style={styles.markerValueRow}>
              <Text style={styles.markerValue}>{m.value}</Text>
              <Text style={styles.markerUnit}>{m.unit}</Text>
            </View>
            <View style={[styles.statusBadge, m.status === 'Optimal' ? styles.statusOptimal : styles.statusStable]}>
              <Text style={[styles.statusText, m.status === 'Optimal' ? styles.statusTextOptimal : styles.statusTextStable]}>
                {m.status.toUpperCase()}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* AI Chat Preview */}
      <View style={styles.aiHeader}>
        <View style={styles.aiBotIcon}>
          <Bot size={16} color="#0F172A" />
        </View>
        <View>
          <Text style={styles.aiTitle}>AI BIO-ADVISOR</Text>
          <Text style={styles.aiStatus}>Analyzing markers...</Text>
        </View>
      </View>
      <AIChat />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollPadding: {
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#FFF',
    textTransform: 'uppercase',
  },
  headerSubtitle: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  profileCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#334155',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  indexCard: {
    flex: 1,
    backgroundColor: '#0F172A',
    borderRadius: 24,
    padding: 20,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  ageCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  cardIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  metricLabel: {
    fontSize: 8,
    fontWeight: '900',
    color: '#64748B',
    letterSpacing: 1,
  },
  metricValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 4,
    gap: 4,
  },
  metricValue: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFF',
  },
  metricUnit: {
    fontSize: 12,
    fontWeight: '900',
    color: '#991B1B',
  },
  ageDelta: {
    fontSize: 10,
    fontWeight: '900',
    color: '#10B981',
  },
  categoryScroll: {
    marginBottom: 24,
  },
  categoryPill: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E293B',
    backgroundColor: '#0F172A',
    marginRight: 8,
  },
  categoryPillActive: {
    backgroundColor: '#991B1B',
    borderColor: '#991B1B',
  },
  categoryText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 1,
  },
  categoryTextActive: {
    color: '#FFF',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 2,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  liveText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#991B1B',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  markerCard: {
    width: (width - 52) / 2,
    backgroundColor: '#0F172A',
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  markerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  markerName: {
    fontSize: 8,
    fontWeight: '900',
    color: '#64748B',
    letterSpacing: 1,
  },
  markerValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 2,
    marginVertical: 4,
  },
  markerValue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFF',
  },
  markerUnit: {
    fontSize: 8,
    fontWeight: '800',
    color: '#475569',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  statusOptimal: { backgroundColor: 'rgba(16, 185, 129, 0.1)' },
  statusStable: { backgroundColor: 'rgba(245, 158, 11, 0.1)' },
  statusText: { fontSize: 7, fontWeight: '900', letterSpacing: 0.5 },
  statusTextOptimal: { color: '#10B981' },
  statusTextStable: { color: '#F59E0B' },
  aiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  aiBotIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: 2,
  },
  aiStatus: {
    fontSize: 8,
    fontWeight: '800',
    color: '#64748B',
    fontStyle: 'italic',
  },
});
