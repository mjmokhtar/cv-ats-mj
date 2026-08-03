<script setup>
import skills from '../../data/skills.js'
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <span
      v-for="skill in skills"
      :key="skill"
      class="rounded-md border border-notion-border bg-notion-card px-3 py-1.5 font-mono text-xs text-notion-text transition-colors hover:bg-notion-cardHover"
    >
      {{ skill }}
    </span>
  </div>
</template>
