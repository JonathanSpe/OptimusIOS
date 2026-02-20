
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Activity, Target, ShoppingBag, User, Plus } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function BottomNav({ activeTab, setActiveTab, onStartTest }: any) {
  const tabs = [
    { id: 'dashboard', label: 'Home', icon: Activity },
    { id: 'strategy', label: 'Strategie', icon: Target },
    { id: 'start-test', label: '', icon: null },
    { id: 'shop', label: 'Shop', icon: ShoppingBag },
    { id: 'profile', label: 'Account', icon: User },
  ];

  return (
    <View style={styles.navContainer}>
      <View style={styles.navInner}>
        {tabs.map((tab, idx) => {
          if (tab.id === 'start-test') {
            return (
              <TouchableOpacity 
                key="fab" 
                onPress={onStartTest}
                style={styles.fabContainer}
                activeOpacity={0.9}
              >
                <View style={styles.fab}>
                  <Plus stroke="#FFF" size={28} strokeWidth={3} />
                </View>
              </TouchableOpacity>
            );
          }

          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <TouchableOpacity 
              key={tab.id} 
              onPress={() => setActiveTab(tab.id)}
              style={styles.tab}
            >
              <View style={[styles.iconWrap, isActive && styles.iconWrapActive]}>
                <Icon size={22} stroke={isActive ? '#991B1B' : '#94A3B8'} />
              </View>
              <Text style={[styles.label, isActive && styles.labelActive]}>
                {tab.label.toUpperCase()}
              </Text>
              {isActive && <View style={styles.activeDot} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    paddingBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  navInner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 5,
  },
  iconWrap: {
    padding: 2,
  },
  iconWrapActive: {
    transform: [{ scale: 1.1 }],
  },
  label: {
    fontSize: 10,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 1.5,
    marginTop: 4,
  },
  labelActive: {
    color: '#991B1B',
  },
  activeDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#991B1B',
    marginTop: 2,
  },
  fabContainer: {
    top: -20,
    zIndex: 10,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#FFF',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
});
