# Optimus iOS/Mobile App Setup

## ✅ Setup Complete!

Your React Native app is now ready to run with Expo Go.

## 🚀 How to Run

### 1. Start the Development Server
```bash
npm start
# or
npx expo start
```

### 2. Open on Your Device

#### iPhone/iPad:
1. Install **Expo Go** from the App Store
2. Open the Camera app
3. Scan the QR code shown in the terminal
4. Tap the notification to open in Expo Go

#### Android:
1. Install **Expo Go** from Google Play Store
2. Open Expo Go app
3. Scan the QR code using the "Scan QR Code" option

### 3. Development in VS Code

Open this project in VS Code:
```bash
code /home/user/OptimusIOS
```

## 📁 Project Structure

```
OptimusIOS/
├── App.tsx                      # Main app component
├── components/
│   ├── native/                  # React Native components (iOS/Android)
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── UserDashboard.tsx
│   │   ├── BottomNav.tsx
│   │   └── ...
│   └── [old web components]     # Original web components (not used)
├── index.tsx                    # Entry point
├── package.json
└── app.json                     # Expo configuration
```

## 🔧 What Was Fixed

1. **React Version**: Updated from React 18.3.1 to React 19 (required by React Native 0.78.2)
2. **Package Scripts**: Added start/ios/android/web scripts
3. **Assets**: Created placeholder icon files
4. **Dependencies**: Installed all required packages with `--legacy-peer-deps`

## 📱 Current Features

- Landing page with hero section
- Login/authentication flow
- User dashboard
- Recommendations page
- Supplements shop
- User profile
- Bottom navigation
- Test flow overlay
- AI chat integration

## 🛠️ Common Commands

```bash
# Start development server
npm start

# Start with specific platform
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser

# Clear cache and restart
npx expo start --clear

# Install new packages
npm install <package-name> --legacy-peer-deps
```

## 🐛 Troubleshooting

### "Unable to resolve module"
```bash
npx expo start --clear
```

### Metro bundler issues
1. Stop the server (Ctrl+C)
2. Delete `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install --legacy-peer-deps
```

### Expo Go won't connect
- Make sure your phone and computer are on the same WiFi network
- Try the tunnel mode: `npx expo start --tunnel`

## 📝 Notes

- All components in `components/native/` are React Native compatible
- The old web components in `components/` are from the original React web app
- Currently using Expo Go (development build)
- For production, you'll need to build with EAS Build

## 🎨 Customization

### Change App Name/Icon
Edit `app.json`:
```json
{
  "expo": {
    "name": "Your App Name",
    "icon": "./assets/icon.png"
  }
}
```

### Add New Screens
1. Create component in `components/native/`
2. Add to navigation in `App.tsx`
3. Update BottomNav if needed

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev)
- [React Native Documentation](https://reactnative.dev)
- [Lucide React Native Icons](https://lucide.dev)
