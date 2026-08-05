<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import site from '../../data/site.js'

defineProps({
  breadcrumb: { type: String, default: '' },
})

const route = useRoute()
const mobileOpen = ref(false)

const navLinks = [
  { to: '/projects', label: 'Projects', icon: '🎨' },
  { to: '/service', label: 'Service', icon: '🔧' },
  { to: '/about', label: 'About Me', icon: '👤' },
]

function isActive(path) {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-notion-border bg-notion-bg/95 backdrop-blur-sm">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:px-8">
      <div class="flex min-w-0 items-center gap-2 text-sm">
        <RouterLink to="/" class="truncate font-medium hover:opacity-80">
          {{ site.name }}
        </RouterLink>
        <template v-if="breadcrumb">
          <span class="text-notion-muted">/</span>
          <span class="truncate text-notion-muted">{{ breadcrumb }}</span>
        </template>
      </div>

      <nav class="hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm transition-colors hover:bg-notion-card"
          :class="isActive(link.to) ? 'bg-notion-card text-notion-text' : 'text-notion-muted'"
        >
          <span>{{ link.icon }}</span>
          <span>{{ link.label }}</span>
        </RouterLink>
      </nav>

      <button
        class="rounded p-2 text-notion-muted hover:bg-notion-card md:hidden"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <nav
      v-if="mobileOpen"
      class="border-t border-notion-border bg-notion-bg px-4 py-3 md:hidden"
    >
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm hover:bg-notion-card"
        :class="isActive(link.to) ? 'bg-notion-card' : ''"
        @click="mobileOpen = false"
      >
        <span>{{ link.icon }}</span>
        <span>{{ link.label }}</span>
      </RouterLink>
    </nav>
  </header>
</template>
