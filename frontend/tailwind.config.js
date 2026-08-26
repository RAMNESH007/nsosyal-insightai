/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F19',
        surface: '#1A2234',
        primary: '#3B82F6',
        text: '#F3F4F6',
        muted: '#9CA3AF'
      }
    },
  },
  plugins: [],
}
