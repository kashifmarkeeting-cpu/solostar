import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.solo.digitalidentity',
  appName: 'SOLO',
  webDir: 'dist',
  backgroundColor: '#07050c',
  android: { allowMixedContent: false },
  plugins: {
    SplashScreen: { launchShowDuration: 0, backgroundColor: '#07050c' },
    StatusBar: { style: 'DARK', backgroundColor: '#07050c' },
  },
};

export default config;
