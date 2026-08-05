/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        notion: {
          bg: '#191919',
          card: '#252525',
          cardHover: '#2a2a2a',
          border: '#373737',
          muted: '#9b9b9b',
          text: '#ebebeb',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
