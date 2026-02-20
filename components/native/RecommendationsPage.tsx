
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Modal, Dimensions } from 'react-native';
import { ArrowLeft, ShoppingCart, X, ChevronDown, ChevronUp, CheckCircle, AlertCircle, Coffee, Activity, Moon, Apple, Droplets, Heart, Check } from 'lucide-react-native';
import { supplementsData } from './SupplementsData';
import { lifestyleRecommendations } from './LifestyleData';

const { width } = Dimensions.get('window');

export default function RecommendationsPage({ onNavigate }: any) {
  const [selectedSupplement, setSelectedSupplement] = useState<any>(null);
  const [expandedSection, setExpandedSection] = useState<'essential' | 'optional' | null>('essential');
  const [showCart, setShowCart] = useState(false);

  const cartCount = supplementsData.essential.length + supplementsData.optional.length;
  const totalPrice = (supplementsData.essential.length * 19.90) + (supplementsData.optional.length * 12.90);

  const getIconComponent = (iconName: string) => {
    const icons: any = { Coffee, Activity, Moon, Apple, Droplets, Heart };
    return icons[iconName] || Coffee;
  };

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
          <TouchableOpacity style={styles.cartBadge} onPress={() => setShowCart(true)}>
            <ShoppingCart size={16} stroke="#FFF" />
            <View style={styles.cartCount}>
              <Text style={styles.cartCountText}>{cartCount}</Text>
            </View>
          </TouchableOpacity>
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

        <TouchableOpacity style={styles.primaryBtn} onPress={() => setShowCart(true)}>
          <Text style={styles.primaryBtnText}>PACK ANSEHEN</Text>
        </TouchableOpacity>
      </View>

      {/* Molecular Strategy Section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>MOLEKULARE STRATEGIE</Text>
        <Text style={styles.sectionDesc}>
          Basierend auf deinen Blutwerten Q3 2025
        </Text>

        {/* Essential Supplements - More Prominent */}
        <View style={styles.prominentSection}>
          <TouchableOpacity 
            style={styles.prominentHeader}
            onPress={() => setExpandedSection(expandedSection === 'essential' ? null : 'essential')}
          >
            <View style={styles.prominentHeaderLeft}>
              <View style={styles.essentialBadge}>
                <CheckCircle size={24} stroke="#10B981" strokeWidth={3} />
              </View>
              <View>
                <Text style={styles.prominentTitle}>Essential Supplements</Text>
                <Text style={styles.prominentSubtitle}>Optimiert für deine Biomarker</Text>
              </View>
            </View>
            {expandedSection === 'essential' ? <ChevronUp size={24} stroke="#64748B" /> : <ChevronDown size={24} stroke="#64748B" />}
          </TouchableOpacity>

          {expandedSection === 'essential' && (
            <View style={styles.supplementGrid}>
              {supplementsData.essential.map((supplement, i) => (
                <TouchableOpacity 
                  key={i} 
                  style={styles.prominentSupplementCard}
                  onPress={() => setSelectedSupplement(supplement)}
                >
                  <View style={styles.supplementCardHeader}>
                    <CheckCircle size={16} stroke="#10B981" />
                    <View style={[styles.statusBadge, styles.statusOptimal]}>
                      <Text style={styles.statusText}>OPTIMAL</Text>
                    </View>
                  </View>
                  <Text style={styles.prominentSupplementName}>{supplement.name}</Text>
                  <Text style={styles.prominentSupplementDosage}>{supplement.dosage}</Text>
                  <View style={styles.bloodMarkerBox}>
                    <Text style={styles.bloodMarkerText}>{supplement.bloodMarker}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Optional Supplements - More Prominent */}
        <View style={[styles.prominentSection, { marginTop: 16 }]}>
          <TouchableOpacity 
            style={styles.prominentHeader}
            onPress={() => setExpandedSection(expandedSection === 'optional' ? null : 'optional')}
          >
            <View style={styles.prominentHeaderLeft}>
              <View style={styles.optionalBadge}>
                <AlertCircle size={24} stroke="#F59E0B" strokeWidth={3} />
              </View>
              <View>
                <Text style={styles.prominentTitle}>Optional Supplements</Text>
                <Text style={styles.prominentSubtitle}>Für zusätzliche Performance</Text>
              </View>
            </View>
            {expandedSection === 'optional' ? <ChevronUp size={24} stroke="#64748B" /> : <ChevronDown size={24} stroke="#64748B" />}
          </TouchableOpacity>

          {expandedSection === 'optional' && (
            <View style={styles.supplementGrid}>
              {supplementsData.optional.map((supplement, i) => (
                <TouchableOpacity 
                  key={i} 
                  style={styles.prominentSupplementCard}
                  onPress={() => setSelectedSupplement(supplement)}
                >
                  <View style={styles.supplementCardHeader}>
                    <AlertCircle size={16} stroke="#F59E0B" />
                    <View style={[styles.statusBadge, styles.statusEnhancement]}>
                      <Text style={[styles.statusText, { color: '#F59E0B' }]}>ENHANCE</Text>
                    </View>
                  </View>
                  <Text style={styles.prominentSupplementName}>{supplement.name}</Text>
                  <Text style={styles.prominentSupplementDosage}>{supplement.dosage}</Text>
                  <View style={styles.bloodMarkerBox}>
                    <Text style={styles.bloodMarkerText}>{supplement.bloodMarker}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>

      {/* Expanded Lifestyle Optimization */}
      <View style={[styles.section, { marginTop: 40 }]}>
        <Text style={styles.sectionLabel}>LIFESTYLE OPTIMIERUNG</Text>
        <Text style={styles.sectionDesc}>Personalisierte Empfehlungen für maximale Wirkung</Text>
        
        {lifestyleRecommendations.map((category, catIndex) => {
          const IconComponent = getIconComponent(category.icon);
          return (
            <View key={catIndex} style={styles.lifestyleCategory}>
              <View style={styles.lifestyleCategoryHeader}>
                <View style={styles.lifestyleIconWrap}>
                  <IconComponent size={20} stroke="#0F172A" />
                </View>
                <Text style={styles.lifestyleCategoryTitle}>{category.category.toUpperCase()}</Text>
              </View>
              
              {category.items.map((item, itemIndex) => (
                <View key={itemIndex} style={styles.lifestyleCard}>
                  <View style={styles.lifestyleCardHeader}>
                    <Text style={styles.lifestyleTitle}>{item.title}</Text>
                    <View style={[styles.impactBadge, item.impact === 'high' ? styles.impactHigh : styles.impactMedium]}>
                      <Text style={styles.impactText}>{item.impact === 'high' ? 'HIGH' : 'MED'}</Text>
                    </View>
                  </View>
                  <Text style={styles.lifestyleDesc}>{item.description}</Text>
                  <View style={styles.metricTag}>
                    <Text style={styles.metricText}>{item.metric}</Text>
                  </View>
                </View>
              ))}
            </View>
          );
        })}
      </View>

      {/* Cart Modal */}
      <Modal
        visible={showCart}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowCart(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.cartModal}>
            <View style={styles.cartHeader}>
              <View>
                <Text style={styles.cartTitle}>DEIN PACK</Text>
                <Text style={styles.cartSubtitle}>{cartCount} Supplements</Text>
              </View>
              <TouchableOpacity onPress={() => setShowCart(false)}>
                <X size={24} stroke="#64748B" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.cartScroll} showsVerticalScrollIndicator={false}>
              <Text style={styles.cartSectionLabel}>ESSENTIAL ({supplementsData.essential.length})</Text>
              {supplementsData.essential.map((item, i) => (
                <View key={i} style={styles.cartItem}>
                  <Check size={16} stroke="#10B981" />
                  <View style={styles.cartItemInfo}>
                    <Text style={styles.cartItemName}>{item.name}</Text>
                    <Text style={styles.cartItemDosage}>{item.dosage}</Text>
                  </View>
                  <Text style={styles.cartItemPrice}>€29.90</Text>
                </View>
              ))}

              <Text style={[styles.cartSectionLabel, { marginTop: 20 }]}>OPTIONAL ({supplementsData.optional.length})</Text>
              {supplementsData.optional.map((item, i) => (
                <View key={i} style={styles.cartItem}>
                  <Check size={16} stroke="#F59E0B" />
                  <View style={styles.cartItemInfo}>
                    <Text style={styles.cartItemName}>{item.name}</Text>
                    <Text style={styles.cartItemDosage}>{item.dosage}</Text>
                  </View>
                  <Text style={styles.cartItemPrice}>€19.90</Text>
                </View>
              ))}

              <View style={styles.cartTotal}>
                <Text style={styles.cartTotalLabel}>GESAMT</Text>
                <Text style={styles.cartTotalPrice}>€{totalPrice.toFixed(2)}</Text>
              </View>
            </ScrollView>

            <TouchableOpacity style={styles.checkoutBtn}>
              <ShoppingCart size={20} stroke="#FFF" />
              <Text style={styles.checkoutBtnText}>JETZT BESTELLEN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
                  <CheckCircle size={32} stroke="#991B1B" />
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
  container: { flex: 1, padding: 24, backgroundColor: '#FFFFFF' },
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
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#991B1B',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    shadowColor: '#991B1B',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  cartCount: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#0F172A',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  cartCountText: {
    fontSize: 11,
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
    backgroundColor: '#991B1B', 
    paddingVertical: 16, 
    borderRadius: 16, 
    alignItems: 'center',
    shadowColor: '#991B1B',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  primaryBtnText: { 
    color: '#FFF', 
    fontSize: 11, 
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

  // Prominent Sections
  prominentSection: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 4 },
  },
  prominentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prominentHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  essentialBadge: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionalBadge: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prominentTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
  },
  prominentSubtitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    marginTop: 2,
  },

  supplementGrid: {
    marginTop: 20,
    gap: 12,
  },
  prominentSupplementCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  supplementCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  prominentSupplementName: {
    fontSize: 16,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 4,
  },
  prominentSupplementDosage: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
    marginBottom: 12,
  },
  bloodMarkerBox: {
    backgroundColor: '#FEF2F2',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  bloodMarkerText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#991B1B',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusOptimal: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
  },
  statusEnhancement: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
  },
  statusText: {
    fontSize: 8,
    fontWeight: '900',
    color: '#10B981',
    letterSpacing: 0.5,
  },

  // Lifestyle
  lifestyleCategory: {
    marginBottom: 24,
  },
  lifestyleCategoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#E2E8F0',
  },
  lifestyleIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lifestyleCategoryTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 1,
  },
  lifestyleCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  lifestyleCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  lifestyleTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0F172A',
    flex: 1,
  },
  impactBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  impactHigh: {
    backgroundColor: 'rgba(153, 27, 27, 0.1)',
  },
  impactMedium: {
    backgroundColor: 'rgba(100, 116, 139, 0.1)',
  },
  impactText: {
    fontSize: 8,
    fontWeight: '900',
    color: '#991B1B',
    letterSpacing: 0.5,
  },
  lifestyleDesc: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
    lineHeight: 18,
    marginBottom: 8,
  },
  metricTag: {
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  metricText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#991B1B',
    letterSpacing: 0.5,
  },

  // Cart Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },
  cartModal: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    height: '85%',
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#F1F5F9',
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0F172A',
  },
  cartSubtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
    marginTop: 4,
  },
  cartScroll: {
    flex: 1,
  },
  cartSectionLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 2,
    marginBottom: 12,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0F172A',
  },
  cartItemDosage: {
    fontSize: 11,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 2,
  },
  cartItemPrice: {
    fontSize: 14,
    fontWeight: '900',
    color: '#991B1B',
  },
  cartTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: 24,
    marginTop: 16,
    borderTopWidth: 2,
    borderTopColor: '#E2E8F0',
  },
  cartTotalLabel: {
    fontSize: 14,
    fontWeight: '900',
    color: '#64748B',
    letterSpacing: 2,
  },
  cartTotalPrice: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0F172A',
  },
  checkoutBtn: {
    backgroundColor: '#991B1B',
    paddingVertical: 18,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 16,
    shadowColor: '#991B1B',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  checkoutBtnText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2,
  },

  // Supplement Detail Modal
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
