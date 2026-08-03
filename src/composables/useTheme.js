import { ref } from 'vue'

export const THEMES = {
  light: {
    '--notion-bg': '#ffffff',
    '--notion-card': '#f7f7f5',
    '--notion-card-hover': '#efefef',
    '--notion-border': '#e3e3e0',
    '--notion-muted': '#787774',
    '--notion-text': '#37352f',
  },
  dark: {
    '--notion-bg': '#191919',
    '--notion-card': '#252525',
    '--notion-card-hover': '#2a2a2a',
    '--notion-border': '#373737',
    '--notion-muted': '#9b9b9b',
    '--notion-text': '#ebebeb',
  },
}

const isDark = ref(true)

function applyVars(mode) {
  const vars = THEMES[mode]
  const root = document.documentElement
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value)
  }
}

export function applyTheme(mode) {
  const dark = mode === 'dark'
  isDark.value = dark

  const root = document.documentElement
  root.classList.remove('dark', 'light')
  if (dark) {
    root.classList.add('dark')
  } else {
    root.classList.add('light')
  }

  root.dataset.theme = mode
  root.style.colorScheme = mode
  applyVars(mode)

  document.body.style.backgroundColor = THEMES[mode]['--notion-bg']
  document.body.style.color = THEMES[mode]['--notion-text']

  localStorage.setItem('theme', mode)
}

export function toggleTheme() {
  applyTheme(isDark.value ? 'light' : 'dark')
}

export function initTheme() {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(saved ?? (prefersDark ? 'dark' : 'light'))
}

export function useTheme() {
  return { isDark, toggleTheme, initTheme, applyTheme }
}
