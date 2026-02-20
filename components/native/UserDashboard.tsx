
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { Zap, Heart, Activity, TrendingUp, TrendingDown, Bot, MessageCircle, CheckCircle } from 'lucide-react-native';
import AIChat from './AIChat';
import { biomarkersByCategory } from './BiomarkerData';
import BiomarkerChart from './BiomarkerChart';

const { width } = Dimensions.get('window');

type Category = 'Sports' | 'Recovery' | 'Dermis' | 'Cognition' | 'Hormones';

const CATEGORIES: Category[] = ['Sports', 'Recovery', 'Dermis', 'Cognition', 'Hormones'];

export default function UserDashboard({ onNavigate }: any) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Sports');
  const [showAIChat, setShowAIChat] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const currentBiomarkers = biomarkersByCategory[selectedCategory];
  const categoryIndex = CATEGORIES.indexOf(selectedCategory);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    if (index >= 0 && index < CATEGORIES.length) {
      setSelectedCategory(CATEGORIES[index]);
    }
  };

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
          <View style={styles.timestampContainer}>
            <Text style={styles.timestampLabel}>Test Results: </Text>
            <Text style={styles.timestampValue}>Q3 2024 • Nov 15</Text>
          </View>
        </View>
        <View style={styles.profileCircle}>
          <Image 
            source={{ uri: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/05eb146bea4dbb2e2597fc672e0aea7d6995f76a/optimus---personalisierte-blutanalyse/assets/Jonathan%20Pic.png' }}
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Wearable Integrations - Compact */}
      <View style={styles.wearablesSection}>
        <View style={styles.wearableItem}>
          <CheckCircle size={14} stroke="#10B981" fill="#10B981" />
          <Text style={styles.wearableText}>Strava connected</Text>
        </View>
        <View style={styles.wearableItem}>
          <CheckCircle size={14} stroke="#10B981" fill="#10B981" />
          <Text style={styles.wearableText}>Apple Health connected</Text>
        </View>
      </View>

      {/* Metrics Row */}
      <View style={styles.metricsRow}>
        <View style={styles.indexCard}>
          <Zap size={20} stroke="rgba(15,23,42,0.1)" style={styles.cardIcon} />
          <Text style={styles.metricLabel}>OVERALL INDEX</Text>
          <View style={styles.metricValueContainer}>
            <Text style={styles.metricValue}>91</Text>
            <Text style={styles.metricUnit}>%</Text>
          </View>
        </View>

        <View style={styles.ageCard}>
          <Heart size={20} stroke="rgba(15,23,42,0.1)" style={styles.cardIcon} />
          <Text style={styles.metricLabel}>BIO-AGE</Text>
          <View style={styles.metricValueContainer}>
            <Text style={styles.metricValue}>29</Text>
            <Text style={styles.ageDelta}>-3.2Y</Text>
          </View>
        </View>
      </View>

      {/* Category Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {CATEGORIES.map(cat => (
          <TouchableOpacity 
            key={cat}
            onPress={() => {
              handleCategoryChange(cat);
              const index = CATEGORIES.indexOf(cat);
              scrollViewRef.current?.scrollTo({ x: index * width, animated: true });
            }}
            style={[styles.categoryPill, selectedCategory === cat && styles.categoryPillActive]}
          >
            <Text style={[styles.categoryText, selectedCategory === cat && styles.categoryTextActive]}>
              {cat.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Swipeable Content */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
      >
        {CATEGORIES.map((cat) => (
          <View key={cat} style={{ width: width - 40 }}>
            {/* Biomarker Grid */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {cat.toUpperCase()} BIOMARKERS
              </Text>
              <View style={styles.liveIndicator}>
                <Activity size={11} stroke="#991B1B" />
                <Text style={styles.liveText}>LIVE PANEL</Text>
              </View>
            </View>

            <View style={styles.grid}>
              {biomarkersByCategory[cat].map((m, i) => (
                <View key={i} style={styles.markerCard}>
                  <View style={styles.markerTop}>
                    <Text style={styles.markerName}>{m.name.toUpperCase()}</Text>
                    {m.trend === 'up' ? <TrendingUp size={12} stroke="#10B981" /> : <TrendingDown size={12} stroke="#991B1B" />}
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

            {/* Biomarker Trend Charts */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>QUARTERLY TRENDS</Text>
            </View>

            {biomarkersByCategory[cat].map((marker, i) => (
              <BiomarkerChart
                key={i}
                data={marker.history}
                markerName={marker.name}
                unit={marker.unit}
              />
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Wearable Fitness Metrics */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>WEARABLE METRICS</Text>
        <View style={styles.liveIndicator}>
          <Activity size={10} stroke="#10B981" />
          <Text style={[styles.liveText, { color: '#10B981' }]}>LIVE SYNC</Text>
        </View>
      </View>

      <View style={styles.fitnessGrid}>
        <View style={styles.fitnessCard}>
          <Text style={styles.fitnessLabel}>AVG HRV</Text>
          <View style={styles.fitnessValueRow}>
            <Text style={styles.fitnessValue}>68</Text>
            <Text style={styles.fitnessUnit}>ms</Text>
          </View>
          <View style={styles.fitnessTrend}>
            <TrendingUp size={10} stroke="#10B981" />
            <Text style={styles.fitnessTrendText}>+8% vs last week</Text>
          </View>
        </View>

        <View style={styles.fitnessCard}>
          <Text style={styles.fitnessLabel}>DAILY STEPS</Text>
          <View style={styles.fitnessValueRow}>
            <Text style={styles.fitnessValue}>12.4</Text>
            <Text style={styles.fitnessUnit}>k</Text>
          </View>
          <View style={styles.fitnessTrend}>
            <TrendingUp size={10} stroke="#10B981" />
            <Text style={styles.fitnessTrendText}>Target met 6/7 days</Text>
          </View>
        </View>

        <View style={styles.fitnessCard}>
          <Text style={styles.fitnessLabel}>SLEEP</Text>
          <View style={styles.fitnessValueRow}>
            <Text style={styles.fitnessValue}>7.8</Text>
            <Text style={styles.fitnessUnit}>hrs</Text>
          </View>
          <View style={styles.fitnessTrend}>
            <Activity size={10} stroke="#F59E0B" />
            <Text style={styles.fitnessTrendText}>Average quality</Text>
          </View>
        </View>

        <View style={styles.fitnessCard}>
          <Text style={styles.fitnessLabel}>RESTING HR</Text>
          <View style={styles.fitnessValueRow}>
            <Text style={styles.fitnessValue}>52</Text>
            <Text style={styles.fitnessUnit}>bpm</Text>
          </View>
          <View style={styles.fitnessTrend}>
            <TrendingDown size={10} stroke="#10B981" />
            <Text style={styles.fitnessTrendText}>Excellent range</Text>
          </View>
        </View>
      </View>

      {/* AI Chat - Always Visible */}
      <View style={styles.aiSection}>
        <View style={styles.aiHeader}>
          <View style={styles.aiBotIcon}>
            <Bot size={20} stroke="#FFF" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.aiTitle}>AI BIO-ADVISOR</Text>
            <Text style={styles.aiSubtitle}>
              Ask me anything about your biomarkers and health data
            </Text>
          </View>
        </View>
        <AIChat />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
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
    color: '#0F172A',
    textTransform: 'uppercase',
  },
  headerSubtitle: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  timestampContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: 'rgba(153, 27, 27, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  timestampLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
  },
  timestampValue: {
    fontSize: 11,
    fontWeight: '900',
    color: '#991B1B',
  },
  wearablesSection: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
    paddingVertical: 8,
  },
  wearableItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  wearableText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#10B981',
  },
  fitnessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  fitnessCard: {
    width: (width - 52) / 2,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  fitnessLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: '#64748B',
    letterSpacing: 1,
    marginBottom: 8,
  },
  fitnessValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
    marginBottom: 8,
  },
  fitnessValue: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0F172A',
  },
  fitnessUnit: {
    fontSize: 14,
    fontWeight: '800',
    color: '#64748B',
  },
  fitnessTrend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  fitnessTrendText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
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
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 4 },
  },
  ageCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 4 },
  },
  cardIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  metricLabel: {
    fontSize: 10,
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
    color: '#0F172A',
  },
  metricUnit: {
    fontSize: 16,
    fontWeight: '900',
    color: '#991B1B',
  },
  ageDelta: {
    fontSize: 14,
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
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
    marginRight: 8,
  },
  categoryPillActive: {
    backgroundColor: '#991B1B',
    borderColor: '#991B1B',
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#64748B',
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
    fontSize: 11,
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
    fontSize: 11,
    fontWeight: '900',
    color: '#991B1B',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  markerCard: {
    width: (width - 52) / 2,
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  markerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  markerName: {
    fontSize: 10,
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
    color: '#0F172A',
  },
  markerUnit: {
    fontSize: 11,
    fontWeight: '800',
    color: '#64748B',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  statusOptimal: { backgroundColor: 'rgba(16, 185, 129, 0.1)' },
  statusStable: { backgroundColor: 'rgba(245, 158, 11, 0.1)' },
  statusText: { fontSize: 11, fontWeight: '900', letterSpacing: 0.5 },
  statusTextOptimal: { color: '#10B981' },
  statusTextStable: { color: '#F59E0B' },
  aiSection: {
    marginTop: 32,
    marginBottom: 20,
  },
  aiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
    backgroundColor: '#0F172A',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  aiBotIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#991B1B',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#991B1B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  aiTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: 2,
  },
  aiSubtitle: {
    fontSize: 10,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 4,
    lineHeight: 16,
  },
});
