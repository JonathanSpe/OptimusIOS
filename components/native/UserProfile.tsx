
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { User, Shield, CreditCard, Bell, MapPin, ChevronRight, LogOut, Settings } from 'lucide-react-native';

export default function UserProfile({ onLogout }: { onLogout: () => void }) {
  const menu = [
    { icon: User, label: "Persönliche Daten" },
    { icon: Shield, label: "Sicherheit" },
    { icon: CreditCard, label: "Abonnement" },
    { icon: MapPin, label: "Lieferadresse" },
    { icon: Bell, label: "Mitteilungen" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <Image 
              source={{ uri: 'https://raw.githubusercontent.com/JonathanSpe/Optimus/05eb146bea4dbb2e2597fc672e0aea7d6995f76a/optimus---personalisierte-blutanalyse/assets/Jonathan%20Pic.png' }}
              style={styles.img}
            />
          </View>
          <View style={styles.settingsBtn}>
            <Settings size={14} stroke="#FFF" />
          </View>
        </View>
        <Text style={styles.userName}>Jonathan Specking</Text>
        <Text style={styles.userTier}>ELITE MEMBER | ID: #782-991</Text>
      </View>

      <View style={styles.menu}>
        {menu.map((item, i) => (
          <TouchableOpacity key={i} style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <View style={styles.iconBox}><item.icon size={18} stroke="#94A3B8" /></View>
              <Text style={styles.menuLabel}>{item.label}</Text>
            </View>
            <ChevronRight size={16} stroke="#F1F5F9" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
        <LogOut size={16} stroke="#991B1B" />
        <Text style={styles.logoutText}>SESSION BEENDEN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  header: { alignItems: 'center', marginBottom: 40 },
  avatarWrap: { position: 'relative', marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWide: 4, borderColor: '#FFF', overflow: 'hidden', backgroundColor: '#F8FAFC' },
  img: { width: '100%', height: '100%', grayscale: 1 },
  settingsBtn: { position: 'absolute', bottom: 0, right: 0, width: 32, height: 32, borderRadius: 16, backgroundColor: '#0F172A', alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: '#FFF' },
  userName: { fontSize: 24, fontWeight: '900', color: '#0F172A', textTransform: 'uppercase' },
  userTier: { fontSize: 9, fontWeight: '900', color: '#94A3B8', letterSpacing: 2, marginTop: 4 },
  menu: { gap: 12 },
  menuItem: { backgroundColor: '#FFF', borderRadius: 24, padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#F1F5F9' },
  menuLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  iconBox: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center' },
  menuLabel: { fontSize: 12, fontWeight: '900', color: '#0F172A' },
  logoutBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 40, paddingVertical: 18, borderWide: 1, borderColor: 'rgba(153,27,27,0.1)', borderRadius: 24 },
  logoutText: { fontSize: 10, fontWeight: '900', color: '#991B1B', letterSpacing: 2 }
});
