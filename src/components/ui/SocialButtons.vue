<script setup>
import site from '../../data/site.js'
</script>

<template>
  <div class="space-y-2">
    <a
      v-for="(social, key) in site.socials"
      :key="key"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      :class="social.color"
    >
      <span class="flex h-8 w-8 items-center justify-center rounded bg-black/20 text-base">
        <template v-if="key === 'linkedin'">in</template>
        <template v-else-if="key === 'email'">✉</template>
        <template v-else-if="key === 'github'">{ }</template>
      </span>
      <span class="truncate">{{ social.label }}</span>
    </a>
  </div>
</template>
