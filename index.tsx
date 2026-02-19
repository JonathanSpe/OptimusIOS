
import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import React from 'react';
import { registerRootComponent } from 'expo";
import App from './App';

if (Platform.OS === 'web') {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
  }
} else {
  // This line is critical for Expo Go to display the app
  registerRootComponent(App);
}
