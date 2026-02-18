
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { ShoppingBag, Star, Zap, ShoppingCart } from 'lucide-react-native';

const products = [
  { id: 'p1', name: "Ferritin Elite", cat: 'Performance', price: '34.90', img: 'pill' },
  { id: 'p2', name: "Vitamin D3", cat: 'Vitality', price: '24.50', img: 'pill2' },
  { id: 'p3', name: "Alpha GPC", cat: 'Focus', price: '39.00', img: 'pill3' },
  { id: 'p4', name: "Magnesium", cat: 'Relax', price: '28.00', img: 'pill4' },
];

export default function SupplementsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PURE <Text style={styles.titleFaded}>ELEMENTS</Text></Text>
      <Text style={styles.subtitle}>Einzelsubstanzen in Klinik-Qualität</Text>

      <View style={styles.promoCard}>
        <View style={styles.promoContent}>
          <View style={styles.promoBadge}><Star size={10} color="#991B1B" /><Text style={styles.promoBadgeText}>PREMIUM CHOICE</Text></View>
          <Text style={styles.promoTitle}>DEIN{"\n"}OPTIMUS-PACK</Text>
          <Text style={styles.promoDesc}>Personalisierte Tages-Sachets basierend auf deinen Werten.</Text>
          <TouchableOpacity style={styles.promoBtn}>
            <Text style={styles.promoBtnText}>KONFIGURIEREN</Text>
          </TouchableOpacity>
        </View>
        <Zap size={100} color="rgba(255,255,255,0.05)" style={styles.promoZap} />
      </View>

      <View style={styles.grid}>
        {products.map((p, i) => (
          <View key={i} style={styles.productCard}>
            <View style={styles.productImgWrap}>
              <View style={styles.placeholderImg} />
            </View>
            <Text style={styles.productCat}>{p.cat.toUpperCase()}</Text>
            <Text style={styles.productName}>{p.name}</Text>
            <View style={styles.productBottom}>
              <Text style={styles.productPrice}>{p.price}€</Text>
              <TouchableOpacity style={styles.addBtn}>
                <ShoppingCart size={12} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  title: { fontSize: 32, fontWeight: '900', color: '#0F172A', textTransform: 'uppercase' },
  titleFaded: { color: '#E2E8F0', fontStyle: 'italic' },
  subtitle: { fontSize: 10, fontWeight: '900', color: '#94A3B8', letterSpacing: 2, marginTop: 4 },
  promoCard: { backgroundColor: '#0F172A', borderRadius: 32, padding: 32, marginTop: 32, position: 'relative', overflow: 'hidden' },
  promoContent: { zIndex: 1, gap: 12 },
  promoBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'rgba(255,255,255,0.05)', alignSelf: 'flex-start', padding: 8, borderRadius: 8 },
  promoBadgeText: { fontSize: 8, fontWeight: '900', color: '#991B1B' },
  promoTitle: { fontSize: 24, fontWeight: '900', color: '#FFF' },
  promoDesc: { fontSize: 12, fontWeight: '600', color: 'rgba(255,255,255,0.4)', lineHeight: 18 },
  promoBtn: { backgroundColor: '#FFF', paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginTop: 12 },
  promoBtnText: { fontSize: 10, fontWeight: '900', color: '#0F172A', letterSpacing: 1 },
  promoZap: { position: 'absolute', top: -20, right: -20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 32 },
  productCard: { width: '48%', backgroundColor: '#FFF', borderRadius: 24, padding: 16, borderWidth: 1, borderColor: '#F1F5F9' },
  productImgWrap: { height: 100, backgroundColor: '#F8FAFC', borderRadius: 16, marginBottom: 12 },
  placeholderImg: { flex: 1 },
  productCat: { fontSize: 8, fontWeight: '900', color: '#CBD5E1', marginBottom: 4 },
  productName: { fontSize: 12, fontWeight: '900', color: '#0F172A', marginBottom: 12 },
  productBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productPrice: { fontSize: 14, fontWeight: '900', color: '#0F172A' },
  addBtn: { width: 32, height: 32, borderRadius: 10, backgroundColor: '#0F172A', alignItems: 'center', justifyContent: 'center' }
});
