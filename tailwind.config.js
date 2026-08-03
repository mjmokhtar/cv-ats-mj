/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        notion: {
          bg: 'var(--notion-bg)',
          card: 'var(--notion-card)',
          cardHover: 'var(--notion-card-hover)',
          border: 'var(--notion-border)',
          muted: 'var(--notion-muted)',
          text: 'var(--notion-text)',
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
