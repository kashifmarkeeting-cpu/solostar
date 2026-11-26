# SOLO — Digital Identity

Interactive personal portfolio and digital identity built with React, TypeScript, Vite, Tailwind CSS, Motion, Web Audio API, and PWA support.

## Features

- **Four Dynamic Themes**: Royal Purple, Cyber Blue, Cinematic Red, and Matrix Green with instant manual switching, local persistence, and configurable 30–60s auto-rotation.
- **Original Portrait Integration**: Preserves exact proportions around the hero portrait with theme-reactive rim lighting, orbital rings, volumetric glow, and pointer parallax.
- **Procedural Sound Engine**: Gesture-gated Web Audio ambient synth and rate-limited interface SFX with independent ambient/SFX volume controls.
- **Responsive & PWA Ready**: Offline-capable service worker, web app manifest, install prompts, `prefers-reduced-motion` support, and Capacitor-compatible storage/audio architecture.

## Setup & Development

```bash
npm install
npm run dev
```

The development server runs on port `3000`.

## Type Check & Production Build

```bash
npm run lint
npm run build
npm run preview
```

## Build the Android app (Capacitor)

Requires Node 20+, JDK 21 and Android Studio (or the Android SDK).

```bash
npm install
npm run cap:sync     # builds the web app and copies it into android/
npm run cap:open     # opens Android Studio -> Run on a device/emulator
npm run apk          # debug APK: android/app/build/outputs/apk/debug/app-debug.apk
npm run aab          # release AAB (needs a signing config, see below)
```

Release signing: create a keystore with `keytool -genkey -v -keystore solo.jks -alias solo -keyalg RSA -keysize 2048 -validity 10000`,
then add a `signingConfigs` block to `android/app/build.gradle`, or use Android Studio > Build > Generate Signed Bundle.

App id: `com.solo.digitalidentity` (change in `capacitor.config.ts` before publishing).

## No Android Studio? Build the APK on GitHub

Push this project to a GitHub repo (branch `main`). The workflow in `.github/workflows/build-apk.yml`
builds the APK automatically. Open the repo's **Actions** tab, pick the latest run, and download the
**SOLO-debug-apk** artifact (a zip containing `app-debug.apk`). You can also trigger it manually with "Run workflow".
