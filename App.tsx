
import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  SafeAreaView, 
  StatusBar,
  Dimensions
} from 'react-native';
import LandingPage from './components/native/LandingPage';
import LoginPage from './components/native/LoginPage';
import UserDashboard from './components/native/UserDashboard';
import RecommendationsPage from './components/native/RecommendationsPage';
import SupplementsPage from './components/native/SupplementsPage';
import UserProfile from './components/native/UserProfile';
import BottomNav from './components/native/BottomNav';
import TestFlow from './components/native/TestFlow';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [view, setView] = useState<'landing' | 'login' | 'app'>('landing');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isTestFlowOpen, setIsTestFlowOpen] = useState(false);

  const handleLogin = () => {
    setView('app');
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setView('landing');
  };

  const renderAuthenticatedContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <UserDashboard onNavigate={setActiveTab} />;
      case 'strategy':
        return <RecommendationsPage onNavigate={setActiveTab} />;
      case 'shop':
        return <SupplementsPage />;
      case 'profile':
        return <UserProfile onLogout={handleLogout} />;
      default:
        return <UserDashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Background Decorative Elements */}
      <View style={styles.backgroundOrb1} />

      <SafeAreaView style={styles.main}>
        {view === 'landing' && (
          <LandingPage onGetStarted={() => setView('login')} />
        )}
        
        {view === 'login' && (
          <LoginPage onLogin={handleLogin} />
        )}

        {view === 'app' && (
          <View style={styles.contentContainer}>
            {renderAuthenticatedContent()}
          </View>
        )}
      </SafeAreaView>

      {view === 'app' && (
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
    backgroundColor: '#020617',
  },
  main: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
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
});
