/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx", // Keep this if you still have/use an App.tsx at the root
    "./components/**/*.{js,jsx,ts,tsx}", // Keep this if you have root-level components
    "./app/**/*.{js,jsx,ts,tsx}", // Add this line for your Expo Router 'app' directory
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}