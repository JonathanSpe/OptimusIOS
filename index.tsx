
import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import React from 'react';
import App from './App';

if (Platform.OS === 'web') {
  // Use dynamic import or check for browser environment to avoid breaking Metro (Native)
  const runWeb = async () => {
    // @ts-ignore - react-dom is only available in the web environment via index.html imports
    const { createRoot } = await import('react-dom/client');
    const rootElement = document.getElementById('root');
    if (rootElement) {
      const root = createRoot(rootElement);
      root.render(<App />);
    }
  };
  runWeb();
} else {
  // Native entry point for Expo Go
  registerRootComponent(App);
}
