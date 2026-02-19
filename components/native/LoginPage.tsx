
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { ArrowRight, Mail, Lock, Fingerprint, Shield } from 'lucide-react-native';

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.screen}>
      <View style={styles.branding}>
        <View style={styles.logo}><Text style={styles.logoText}>O</Text></View>
        <Text style={styles.brandTitle}>OPTIMUS</Text>
        <Text style={styles.brandSub}>Clinical Intelligence</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.inputWrap}>
          <Text style={styles.label}>ID / EMAIL</Text>
          <View style={styles.inputContainer}>
            <Mail size={16} stroke="#CBD5E1" style={styles.fieldIcon} />
            <TextInput 
              style={styles.input} 
              placeholder="name@optimus.com" 
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={styles.inputWrap}>
          <Text style={styles.label}>ACCESS KEY</Text>
          <View style={styles.inputContainer}>
            <Lock size={16} stroke="#CBD5E1" style={styles.fieldIcon} />
            <TextInput 
              style={styles.input} 
              secureTextEntry 
              placeholder="••••••••" 
              value={pass}
              onChangeText={setPass}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
          <Text style={styles.loginText}>SIGN IN</Text>
          <ArrowRight size={16} stroke="#FFF" />
        </TouchableOpacity>

        <View style={styles.bioPrompt}>
          <TouchableOpacity style={styles.bioIconBox}>
            <Fingerprint size={32} stroke="#CBD5E1" />
          </TouchableOpacity>
          <Text style={styles.bioNote}>Tap to use Biometric ID</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.shieldRow}>
          <Shield size={12} stroke="#10B981" />
          <Text style={styles.shieldText}>DE-AES 256 ENCRYPTED TUNNEL</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 32, justifyContent: 'center' },
  branding: { alignItems: 'center', marginBottom: 48 },
  logo: { width: 80, height: 80, backgroundColor: '#0F172A', borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 24, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 20 },
  logoText: { color: '#FFF', fontSize: 40, fontWeight: '900' },
  brandTitle: { fontSize: 40, fontWeight: '900', fontStyle: 'italic', color: '#0F172A', letterSpacing: -2 },
  brandSub: { fontSize: 10, fontWeight: '900', color: '#94A3B8', letterSpacing: 4 },
  card: { backgroundColor: '#FFF', borderRadius: 48, padding: 32, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 40, elevation: 10 },
  inputWrap: { marginBottom: 20 },
  label: { fontSize: 8, fontWeight: '900', color: '#94A3B8', letterSpacing: 2, marginBottom: 8, marginLeft: 20 },
  inputContainer: { backgroundColor: '#F8FAFC', borderRadius: 20, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 },
  fieldIcon: { marginRight: 12 },
  input: { flex: 1, paddingVertical: 18, fontSize: 14, fontWeight: '700', color: '#0F172A' },
  loginBtn: { backgroundColor: '#0F172A', borderRadius: 24, paddingVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 12 },
  loginText: { color: '#FFF', fontSize: 11, fontWeight: '900', letterSpacing: 2 },
  bioPrompt: { alignItems: 'center', marginTop: 32, gap: 12, borderTopWidth: 1, borderTopColor: '#F1F5F9', paddingTop: 24 },
  bioIconBox: { width: 64, height: 64, borderRadius: 20, backgroundColor: '#F8FAFC', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F1F5F9' },
  bioNote: { fontSize: 8, fontWeight: '900', color: '#CBD5E1', letterSpacing: 1 },
  footer: { marginTop: 40, alignItems: 'center' },
  shieldRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  shieldText: { fontSize: 9, fontWeight: '900', color: '#94A3B8', letterSpacing: 1 }
});
