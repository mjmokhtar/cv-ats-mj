<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const navLinks = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/projects', label: 'Projects', icon: '🎨' },
  { to: '/service', label: 'Service', icon: '🔧' },
  { to: '/about', label: 'About Me', icon: '👤' },
]

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 z-50 border-t border-notion-border bg-notion-bg/95 backdrop-blur-sm xl:hidden">
    <div class="flex items-center justify-around px-2 py-2">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="flex flex-col items-center gap-0.5 rounded-lg px-3 py-1.5 text-xs transition-colors"
        :class="isActive(link.to) ? 'text-notion-text' : 'text-notion-muted'"
      >
        <span class="text-base">{{ link.icon }}</span>
        <span>{{ link.label }}</span>
      </RouterLink>
    </div>
  </nav>
</template>
