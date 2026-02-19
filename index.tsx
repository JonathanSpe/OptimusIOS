
import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import React from 'react';
import App from './App';

if (Platform.OS === 'web') {
  // Use dynamic import for web-only dependencies to prevent native resolution errors
  const runWeb = async () => {
    try {
      // @ts-ignore
      const { createRoot } = await import('react-dom/client');
      const rootElement = document.getElementById('root');
      if (rootElement) {
        const root = createRoot(rootElement);
        root.render(<App />);
      }
    } catch (e) {
      console.error('Web initialization failed', e);
    }
  };
  runWeb();
} else {
  // Native entry point for Expo Go
  registerRootComponent(App);
}
