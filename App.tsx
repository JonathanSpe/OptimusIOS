
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity, 
  StatusBar,
  Dimensions,
  Platform
} from 'react-native';
import LoginPage from './components/native/LoginPage';
import UserDashboard from './components/native/UserDashboard';
import RecommendationsPage from './components/native/RecommendationsPage';
import SupplementsPage from './components/native/SupplementsPage';
import UserProfile from './components/native/UserProfile';
import BottomNav from './components/native/BottomNav';
import TestFlow from './components/native/TestFlow';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isTestFlowOpen, setIsTestFlowOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Background Decorative Elements */}
      <View style={styles.backgroundOrb1} />
      <View style={styles.backgroundOrb2} />

      <SafeAreaView style={styles.main}>
        {!isLoggedIn ? (
          <LoginPage onLogin={handleLogin} />
        ) : (
          <View style={styles.contentContainer}>
            <ScrollView 
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              {activeTab === 'dashboard' && <UserDashboard onNavigate={setActiveTab} />}
              {activeTab === 'strategy' && <RecommendationsPage onNavigate={setActiveTab} />}
              {activeTab === 'shop' && <SupplementsPage />}
              {activeTab === 'profile' && <UserProfile onLogout={handleLogout} />}
            </ScrollView>
          </View>
        )}
      </SafeAreaView>

      {isLoggedIn && (
        <BottomNav 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onStartTest={() => setIsTestFlowOpen(true)}
        />
      )}

      {isTestFlowOpen && (
        <TestFlow onClose={() => setIsTestFlowOpen(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  main: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Space for BottomNav
  },
  backgroundOrb1: {
    position: 'absolute',
    top: -height * 0.1,
    right: -width * 0.2,
    width: width,
    height: width,
    borderRadius: width / 2,
    backgroundColor: 'rgba(153, 27, 27, 0.04)',
  },
  backgroundOrb2: {
    position: 'absolute',
    bottom: -height * 0.1,
    left: -width * 0.2,
    width: width,
    height: width,
    borderRadius: width / 2,
    backgroundColor: 'rgba(15, 23, 42, 0.03)',
  },
});
