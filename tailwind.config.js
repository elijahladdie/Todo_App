/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-light-dark":"#2e2e2e",
        "custom-chocolate":"#e6c2a1",
        "custom-bg-chocolate":"#f9f4ed",
        "custom-light-blue":"#f6f8fa",
        "custom-sky-blue":"#71b5e5",
        "custom-light-green":"#eaf8f4",
        "custom-green":"#8bc8b5",
      },
      screens: {
        sm: { max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1580px" },
        "2xl": { min: "1581px" },
      },
    },
  },
  plugins: [],
}

