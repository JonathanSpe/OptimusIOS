
import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import React from 'react';
import App from './App';

// For Web builds
if (Platform.OS === 'web') {
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
      console.error('Web boot failed', e);
    }
  };
  runWeb();
} else {
  // For Native builds (iOS/Android/Expo Go)
  registerRootComponent(App);
}
