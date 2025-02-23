/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#818cf8'
        },
        secondary: {
          DEFAULT: '#a855f7',
          dark: '#c084fc'
        },
        accent: {
          DEFAULT: '#ec4899',
          dark: '#f472b6'
        },
        background: {
          DEFAULT: '#f8fafc',
          dark: '#0f172a'
        }
      }
    }
  },
  plugins: [],
}
