<script setup>
import { RouterLink, useRoute } from 'vue-router'
import SocialButtons from '../ui/SocialButtons.vue'

const route = useRoute()

const navLinks = [
  { to: '/projects', label: 'Projects', icon: '🎨' },
  { to: '/service', label: 'Service', icon: '🔧' },
  { to: '/about', label: 'About Me', icon: '👤' },
]

function isActive(path) {
  return route.path === path
}
</script>

<template>
  <aside class="hidden w-56 shrink-0 xl:block">
    <div class="sticky top-20 flex flex-col gap-6">
      <nav class="space-y-0.5 rounded-lg border border-notion-border bg-notion-bg p-2">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="flex items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors hover:bg-notion-card"
          :class="isActive(link.to) ? 'bg-notion-card font-medium text-notion-text' : 'text-notion-muted'"
        >
          <span class="w-5 shrink-0 text-center">{{ link.icon }}</span>
          <span class="truncate">{{ link.label }}</span>
        </RouterLink>
      </nav>

      <div>
        <h3 class="mb-3 text-sm font-semibold text-notion-text">Connect with me</h3>
        <SocialButtons />
      </div>
    </div>
  </aside>
</template>
