
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Modal, Dimensions } from 'react-native';
import { ShoppingBag, Star, Zap, ShoppingCart, X } from 'lucide-react-native';

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

      <View style={styles.promoCard}>
        <View style={styles.promoContent}>
          <View style={styles.promoBadge}>
            <Star size={10} stroke="#991B1B" fill="#991B1B" />
            <Text style={styles.promoBadgeText}>PREMIUM CHOICE</Text>
          </View>
          <Text style={styles.promoTitle}>DEIN{"\n"}OPTIMUS-PACK</Text>
          <Text style={styles.promoDesc}>Personalisierte Tages-Sachets basierend auf deinen Werten.</Text>
          <TouchableOpacity style={styles.promoBtn}>
            <Text style={styles.promoBtnText}>JETZT KONFIGURIEREN</Text>
          </TouchableOpacity>
        </View>
        <Zap size={120} stroke="rgba(255,255,255,0.03)" style={styles.promoZap} />
      </View>

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
  
  promoCard: { 
    backgroundColor: '#0F172A', 
    borderRadius: 32, 
    padding: 32, 
    marginTop: 32, 
    position: 'relative', 
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
  },
  promoContent: { zIndex: 1, gap: 12 },
  promoBadge: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 6, 
    backgroundColor: 'rgba(255,255,255,0.1)', 
    alignSelf: 'flex-start', 
    paddingHorizontal: 12,
    paddingVertical: 8, 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  promoBadgeText: { fontSize: 9, fontWeight: '900', color: '#FFF', letterSpacing: 1 },
  promoTitle: { fontSize: 28, fontWeight: '900', color: '#FFF', lineHeight: 32 },
  promoDesc: { fontSize: 13, fontWeight: '600', color: 'rgba(255,255,255,0.6)', lineHeight: 20 },
  promoBtn: { 
    backgroundColor: '#991B1B', 
    paddingVertical: 16, 
    borderRadius: 16, 
    alignItems: 'center', 
    marginTop: 8,
    shadowColor: '#991B1B',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  promoBtnText: { fontSize: 11, fontWeight: '900', color: '#FFF', letterSpacing: 2 },
  promoZap: { position: 'absolute', top: -30, right: -30 },
  
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
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
