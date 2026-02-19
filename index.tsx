
import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import React from 'react';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
if (Platform.OS === 'web') {
  const runWeb = async () => {
    try {
      // Dynamic import prevents native Metro bundler from failing on 'react-dom'
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
  registerRootComponent(App);
}
