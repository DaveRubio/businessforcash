/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020b1fff", // blue-600
        secondary: "#1e40af" // blue-800
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
};
