
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Modal, Dimensions } from 'react-native';
import { Target, Pill, Coffee, Activity, ArrowLeft, ShoppingCart, X, ChevronDown, ChevronUp, CheckCircle, AlertCircle } from 'lucide-react-native';
import { supplementsData } from './SupplementsData';

const { width } = Dimensions.get('window');

export default function RecommendationsPage({ onNavigate }: any) {
  const [selectedSupplement, setSelectedSupplement] = useState<any>(null);
  const [expandedSection, setExpandedSection] = useState<'essential' | 'optional' | null>('essential');

  const cartCount = supplementsData.essential.length + supplementsData.optional.length;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => onNavigate('dashboard')} style={styles.backBtn}>
        <ArrowLeft size={16} stroke="#94A3B8" />
        <Text style={styles.backText}>DASHBOARD</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Q3 <Text style={styles.titleFaded}>STRATEGIE</Text></Text>

      {/* Daily Ration Card */}
      <View style={styles.mainCard}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.cardTag}>ELITE PROTOCOL V5.2</Text>
            <Text style={styles.cardTitle}>Deine <Text style={styles.cardTitleItalic}>Daily-Ration</Text></Text>
          </View>
          <View style={styles.cartBadge}>
            <ShoppingCart size={16} stroke="#FFF" />
            <View style={styles.cartCount}>
              <Text style={styles.cartCountText}>{cartCount}</Text>
            </View>
          </View>
        </View>

        {/* Supplements Image */}
        <View style={styles.rationPreview}>
          <Image
            source={require('../../assets/daily-supplements.png')}
            style={styles.supplementsImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.rationStats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{supplementsData.essential.length}</Text>
            <Text style={styles.statLabel}>ESSENTIAL</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{supplementsData.optional.length}</Text>
            <Text style={styles.statLabel}>OPTIONAL</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>100%</Text>
            <Text style={styles.statLabel}>PERSONALIZED</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>PACK KONFIGURIEREN</Text>
        </TouchableOpacity>
      </View>

      {/* Molecular Strategy Section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>MOLEKULARE STRATEGIE</Text>
        <Text style={styles.sectionDesc}>
          Basierend auf deinen Blutwerten Q3 2025
        </Text>

        {/* Essential Supplements */}
        <TouchableOpacity 
          style={styles.categoryHeader}
          onPress={() => setExpandedSection(expandedSection === 'essential' ? null : 'essential')}
        >
          <View style={styles.categoryLeft}>
            <CheckCircle size={20} stroke="#10B981" />
            <Text style={styles.categoryTitle}>Essential Supplements</Text>
          </View>
          {expandedSection === 'essential' ? <ChevronUp size={20} stroke="#64748B" /> : <ChevronDown size={20} stroke="#64748B" />}
        </TouchableOpacity>

        {expandedSection === 'essential' && supplementsData.essential.map((supplement, i) => (
          <TouchableOpacity 
            key={i} 
            style={styles.supplementCard}
            onPress={() => setSelectedSupplement(supplement)}
          >
            <View style={styles.supplementHeader}>
              <View style={styles.supplementLeft}>
                <Pill size={18} stroke="#0F172A" />
                <View>
                  <Text style={styles.supplementName}>{supplement.name}</Text>
                  <Text style={styles.supplementDosage}>{supplement.dosage} • {supplement.timing}</Text>
                </View>
              </View>
              <View style={[styles.statusBadge, styles.statusOptimal]}>
                <Text style={styles.statusText}>
                  {supplement.status.toUpperCase()}
                </Text>
              </View>
            </View>
            <Text style={styles.bloodMarkerText}>{supplement.bloodMarker}</Text>
          </TouchableOpacity>
        ))}

        {/* Optional Supplements */}
        <TouchableOpacity 
          style={[styles.categoryHeader, { marginTop: 20 }]}
          onPress={() => setExpandedSection(expandedSection === 'optional' ? null : 'optional')}
        >
          <View style={styles.categoryLeft}>
            <AlertCircle size={20} stroke="#F59E0B" />
            <Text style={styles.categoryTitle}>Optional Supplements</Text>
          </View>
          {expandedSection === 'optional' ? <ChevronUp size={20} stroke="#64748B" /> : <ChevronDown size={20} stroke="#64748B" />}
        </TouchableOpacity>

        {expandedSection === 'optional' && supplementsData.optional.map((supplement, i) => (
          <TouchableOpacity 
            key={i} 
            style={styles.supplementCard}
            onPress={() => setSelectedSupplement(supplement)}
          >
            <View style={styles.supplementHeader}>
              <View style={styles.supplementLeft}>
                <Pill size={18} stroke="#0F172A" />
                <View>
                  <Text style={styles.supplementName}>{supplement.name}</Text>
                  <Text style={styles.supplementDosage}>{supplement.dosage} • {supplement.timing}</Text>
                </View>
              </View>
              <View style={[styles.statusBadge, styles.statusEnhancement]}>
                <Text style={[styles.statusText, { color: '#F59E0B' }]}>
                  ENHANCE
                </Text>
              </View>
            </View>
            <Text style={styles.bloodMarkerText}>{supplement.bloodMarker}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lifestyle Optimization */}
      <View style={[styles.section, { marginTop: 40 }]}>
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

      {/* Supplement Detail Modal */}
      <Modal
        visible={!!selectedSupplement}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSelectedSupplement(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setSelectedSupplement(null)}
            >
              <X size={24} stroke="#64748B" />
            </TouchableOpacity>

            {selectedSupplement && (
              <>
                <View style={styles.modalHeader}>
                  <Pill size={32} stroke="#991B1B" />
                  <Text style={styles.modalTitle}>{selectedSupplement.name}</Text>
                </View>

                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionLabel}>DOSIERUNG & TIMING</Text>
                  <Text style={styles.modalSectionText}>
                    {selectedSupplement.dosage} • {selectedSupplement.timing}
                  </Text>
                </View>

                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionLabel}>DEINE BLUTWERTE</Text>
                  <View style={styles.bloodMarkerBadge}>
                    <Text style={styles.bloodMarkerBadgeText}>
                      {selectedSupplement.bloodMarker}
                    </Text>
                  </View>
                </View>

                <View style={styles.modalSection}>
                  <Text style={styles.modalSectionLabel}>WARUM EMPFOHLEN?</Text>
                  <Text style={styles.modalReasonText}>
                    {selectedSupplement.reason}
                  </Text>
                </View>

                <TouchableOpacity 
                  style={styles.modalButton}
                  onPress={() => setSelectedSupplement(null)}
                >
                  <Text style={styles.modalButtonText}>VERSTANDEN</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  backBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12, marginTop: 20 },
  backText: { fontSize: 9, fontWeight: '900', color: '#94A3B8', letterSpacing: 1.5 },
  title: { fontSize: 32, fontWeight: '900', color: '#0F172A', textTransform: 'uppercase' },
  titleFaded: { color: '#E2E8F0', fontStyle: 'italic' },
  
  mainCard: { 
    backgroundColor: '#FFF', 
    borderRadius: 32, 
    padding: 24, 
    marginTop: 24, 
    borderWidth: 1, 
    borderColor: '#F1F5F9',
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardHeader: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20 
  },
  cardTag: { fontSize: 8, fontWeight: '900', color: '#991B1B', letterSpacing: 2, marginBottom: 4 },
  cardTitle: { fontSize: 24, fontWeight: '900', color: '#0F172A' },
  cardTitleItalic: { color: '#94A3B8', fontStyle: 'italic' },
  
  cartBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cartCount: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#991B1B',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  cartCountText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#FFF',
  },

  rationPreview: { 
    height: 180, 
    backgroundColor: '#F8FAFC', 
    borderRadius: 20, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 20,
    overflow: 'hidden',
  },
  supplementsImage: {
    width: '100%',
    height: '100%',
  },

  rationStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingVertical: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0F172A',
  },
  statLabel: {
    fontSize: 8,
    fontWeight: '900',
    color: '#64748B',
    letterSpacing: 1,
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E2E8F0',
  },

  primaryBtn: { 
    backgroundColor: '#0F172A', 
    paddingVertical: 16, 
    borderRadius: 16, 
    alignItems: 'center' 
  },
  primaryBtnText: { 
    color: '#FFF', 
    fontSize: 10, 
    fontWeight: '900', 
    letterSpacing: 2 
  },

  section: { marginTop: 32 },
  sectionLabel: { 
    fontSize: 9, 
    fontWeight: '900', 
    color: '#94A3B8', 
    letterSpacing: 2, 
    marginBottom: 8 
  },
  sectionDesc: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 16,
  },

  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  categoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0F172A',
  },

  supplementCard: { 
    backgroundColor: '#FFF', 
    borderRadius: 20, 
    padding: 16, 
    marginBottom: 12, 
    borderWidth: 1, 
    borderColor: '#F1F5F9',
  },
  supplementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  supplementLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  supplementName: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0F172A',
  },
  supplementDosage: {
    fontSize: 10,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusOptimal: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
  },
  statusEnhancement: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
  },
  statusText: {
    fontSize: 8,
    fontWeight: '900',
    color: '#10B981',
    letterSpacing: 0.5,
  },
  bloodMarkerText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#991B1B',
  },

  recCard: { 
    backgroundColor: '#FFF', 
    borderRadius: 24, 
    padding: 20, 
    marginBottom: 12, 
    borderWidth: 1, 
    borderColor: '#F1F5F9', 
    flexDirection: 'row', 
    gap: 16 
  },
  recIconWrap: { 
    width: 44, 
    height: 44, 
    borderRadius: 12, 
    backgroundColor: '#F8FAFC', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  recContent: { flex: 1 },
  recTop: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 6 
  },
  recTitle: { fontSize: 10, fontWeight: '900', color: '#0F172A' },
  recBadge: { fontSize: 7, fontWeight: '900', color: '#991B1B' },
  recDesc: { fontSize: 12, fontWeight: '600', color: '#64748B', lineHeight: 18 },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    minHeight: 500,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 32,
    paddingTop: 8,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0F172A',
    marginTop: 12,
  },
  modalSection: {
    marginBottom: 24,
  },
  modalSectionLabel: {
    fontSize: 9,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 2,
    marginBottom: 8,
  },
  modalSectionText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  bloodMarkerBadge: {
    backgroundColor: '#FEF2F2',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  bloodMarkerBadgeText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#991B1B',
  },
  modalReasonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    lineHeight: 22,
  },
  modalButton: {
    backgroundColor: '#0F172A',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  modalButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
  },
});
