
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Modal, Dimensions } from 'react-native';
import { ShoppingBag, Star, Zap, ShoppingCart, X, ArrowRight } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const products = [
  { id: 'p1', name: "Ferritin Elite", cat: 'Performance', price: '34.90', img: require('../../assets/pill1.jpeg') },
  { id: 'p2', name: "Vitamin D3+K2", cat: 'Vitality', price: '24.50', img: require('../../assets/pill2.jpeg') },
  { id: 'p3', name: "Alpha GPC", cat: 'Focus', price: '39.00', img: require('../../assets/pill3.jpeg') },
  { id: 'p4', name: "Magnesium Glycinate", cat: 'Recovery', price: '28.00', img: require('../../assets/pill4.jpeg') },
];

export default function SupplementsPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>PURE <Text style={styles.titleFaded}>ELEMENTS</Text></Text>
      <Text style={styles.subtitle}>Einzelsubstanzen in Klinik-Qualität</Text>

      {/* Individual Products Grid */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>EINZELSUBSTANZEN</Text>
        <Text style={styles.sectionCount}>{products.length} Produkte</Text>
      </View>

      <View style={styles.grid}>
        {products.map((p, i) => (
          <TouchableOpacity 
            key={i} 
            style={styles.productCard}
            onPress={() => setSelectedProduct(p)}
            activeOpacity={0.7}
          >
            <View style={styles.productImgWrap}>
              <Image source={p.img} style={styles.productImg} resizeMode="cover" />
            </View>
            <Text style={styles.productCat}>{p.cat.toUpperCase()}</Text>
            <Text style={styles.productName}>{p.name}</Text>
            <View style={styles.productBottom}>
              <Text style={styles.productPrice}>€{p.price}</Text>
              <TouchableOpacity style={styles.addBtn}>
                <ShoppingCart size={14} stroke="#FFF" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Optimus Pack - NOW BELOW Pills with daily-supplements.png */}
      <View style={styles.packSection}>
        <View style={styles.packCard}>
          <View style={styles.packHeader}>
            <View style={styles.packBadge}>
              <Star size={10} stroke="#991B1B" fill="#991B1B" />
              <Text style={styles.packBadgeText}>ELITE PROTOCOL V5.2</Text>
            </View>
            <View style={styles.packCartBadge}>
              <ShoppingCart size={16} stroke="#FFF" />
              <View style={styles.packCartCount}>
                <Text style={styles.packCartCountText}>8</Text>
              </View>
            </View>
          </View>

          <Text style={styles.packTitle}>
            Dein <Text style={styles.packTitleItalic}>OPTIMUS-PACK</Text>
          </Text>
          
          <Text style={styles.packDesc}>
            Personalisierte Tages-Sachets basierend auf deinen Blutwerten. 
            Alle Essential und Optional Supplements in täglichen Portionen.
          </Text>

          {/* Pack Preview Image */}
          <View style={styles.packPreview}>
            <Image
              source={require('../../assets/daily-supplements.png')}
              style={styles.packImage}
              resizeMode="contain"
            />
          </View>

          {/* Pack Stats */}
          <View style={styles.packStats}>
            <View style={styles.packStatItem}>
              <Text style={styles.packStatValue}>4</Text>
              <Text style={styles.packStatLabel}>ESSENTIAL</Text>
            </View>
            <View style={styles.packStatDivider} />
            <View style={styles.packStatItem}>
              <Text style={styles.packStatValue}>4</Text>
              <Text style={styles.packStatLabel}>OPTIONAL</Text>
            </View>
            <View style={styles.packStatDivider} />
            <View style={styles.packStatItem}>
              <Text style={styles.packStatValue}>100%</Text>
              <Text style={styles.packStatLabel}>PERSONALIZED</Text>
            </View>
          </View>

          <View style={styles.packPriceRow}>
            <View>
              <Text style={styles.packPriceLabel}>MONATSPREIS</Text>
              <Text style={styles.packPrice}>€239.90</Text>
            </View>
            <TouchableOpacity style={styles.packBtn}>
              <Text style={styles.packBtnText}>KONFIGURIEREN</Text>
              <ArrowRight size={16} stroke="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Product Detail Modal */}
      <Modal
        visible={!!selectedProduct}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSelectedProduct(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setSelectedProduct(null)}
            >
              <X size={24} stroke="#64748B" />
            </TouchableOpacity>

            {selectedProduct && (
              <>
                <View style={styles.modalImageContainer}>
                  <Image 
                    source={selectedProduct.img} 
                    style={styles.modalImage} 
                    resizeMode="cover"
                  />
                </View>

                <View style={styles.modalCategoryBadge}>
                  <Text style={styles.modalCategoryText}>{selectedProduct.cat.toUpperCase()}</Text>
                </View>

                <Text style={styles.modalProductName}>{selectedProduct.name}</Text>

                <View style={styles.modalFeatures}>
                  <View style={styles.modalFeature}>
                    <View style={styles.modalFeatureDot} />
                    <Text style={styles.modalFeatureText}>Pharmazeutische Qualität</Text>
                  </View>
                  <View style={styles.modalFeature}>
                    <View style={styles.modalFeatureDot} />
                    <Text style={styles.modalFeatureText}>Laborgeprüfte Reinheit</Text>
                  </View>
                  <View style={styles.modalFeature}>
                    <View style={styles.modalFeatureDot} />
                    <Text style={styles.modalFeatureText}>Optimale Bioverfügbarkeit</Text>
                  </View>
                  <View style={styles.modalFeature}>
                    <View style={styles.modalFeatureDot} />
                    <Text style={styles.modalFeatureText}>60 Kapseln pro Packung</Text>
                  </View>
                </View>

                <View style={styles.modalPriceRow}>
                  <View>
                    <Text style={styles.modalPriceLabel}>PREIS</Text>
                    <Text style={styles.modalPrice}>€{selectedProduct.price}</Text>
                  </View>
                  <TouchableOpacity style={styles.modalAddBtn}>
                    <ShoppingCart size={20} stroke="#FFF" />
                    <Text style={styles.modalAddBtnText}>IN DEN WARENKORB</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

      <View style={{ height: 120 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 32, fontWeight: '900', color: '#0F172A', textTransform: 'uppercase' },
  titleFaded: { color: '#E2E8F0', fontStyle: 'italic' },
  subtitle: { fontSize: 11, fontWeight: '800', color: '#64748B', letterSpacing: 2, marginTop: 4 },
  
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 2,
  },
  sectionCount: {
    fontSize: 10,
    fontWeight: '800',
    color: '#CBD5E1',
  },

  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 12,
    marginBottom: 40,
  },
  productCard: { 
    width: (width - 60) / 2, 
    backgroundColor: '#FFF', 
    borderRadius: 24, 
    padding: 16, 
    borderWidth: 1, 
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  productImgWrap: { 
    height: 140, 
    backgroundColor: '#F8FAFC', 
    borderRadius: 16, 
    marginBottom: 12,
    overflow: 'hidden',
  },
  productImg: {
    width: '100%',
    height: '100%',
  },
  productCat: { 
    fontSize: 8, 
    fontWeight: '900', 
    color: '#CBD5E1', 
    letterSpacing: 1,
    marginBottom: 4 
  },
  productName: { 
    fontSize: 13, 
    fontWeight: '900', 
    color: '#0F172A', 
    marginBottom: 12,
    lineHeight: 18,
  },
  productBottom: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  productPrice: { 
    fontSize: 16, 
    fontWeight: '900', 
    color: '#0F172A' 
  },
  addBtn: { 
    width: 36, 
    height: 36, 
    borderRadius: 12, 
    backgroundColor: '#991B1B', 
    alignItems: 'center', 
    justifyContent: 'center',
    shadowColor: '#991B1B',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  // Optimus Pack Section
  packSection: {
    marginTop: 20,
    marginBottom: 40,
  },
  packCard: {
    backgroundColor: '#FFF',
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 4 },
  },
  packHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  packBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  packBadgeText: {
    fontSize: 8,
    fontWeight: '900',
    color: '#991B1B',
    letterSpacing: 1,
  },
  packCartBadge: {
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
  packCartCount: {
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
  packCartCountText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#FFF',
  },
  packTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 8,
  },
  packTitleItalic: {
    color: '#94A3B8',
    fontStyle: 'italic',
  },
  packDesc: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
    lineHeight: 20,
    marginBottom: 20,
  },
  packPreview: {
    height: 180,
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  packImage: {
    width: '100%',
    height: '100%',
  },
  packStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingVertical: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
  },
  packStatItem: {
    alignItems: 'center',
  },
  packStatValue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0F172A',
  },
  packStatLabel: {
    fontSize: 8,
    fontWeight: '900',
    color: '#64748B',
    letterSpacing: 1,
    marginTop: 4,
  },
  packStatDivider: {
    width: 1,
    backgroundColor: '#E2E8F0',
  },
  packPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  packPriceLabel: {
    fontSize: 9,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  packPrice: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0F172A',
  },
  packBtn: {
    backgroundColor: '#991B1B',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#991B1B',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  packBtnText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: 1.5,
  },

  // Modal
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
    paddingBottom: 40,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
    marginBottom: 8,
  },
  modalImageContainer: {
    height: 280,
    backgroundColor: '#F8FAFC',
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 20,
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
  modalCategoryBadge: {
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  modalCategoryText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#991B1B',
    letterSpacing: 1,
  },
  modalProductName: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 24,
  },
  modalFeatures: {
    gap: 12,
    marginBottom: 32,
  },
  modalFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  modalFeatureDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10B981',
  },
  modalFeatureText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#475569',
  },
  modalPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  modalPriceLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 2,
    marginBottom: 4,
  },
  modalPrice: {
    fontSize: 32,
    fontWeight: '900',
    color: '#0F172A',
  },
  modalAddBtn: {
    backgroundColor: '#991B1B',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#991B1B',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  modalAddBtnText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: 1.5,
  },
});
