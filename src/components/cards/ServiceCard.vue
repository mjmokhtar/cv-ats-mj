<script setup>
defineProps({
  service: { type: Object, required: true },
})
</script>

<template>
  <article class="rounded-lg border border-notion-border bg-notion-card p-5 transition-colors hover:border-notion-muted/30">
    <h3 class="mb-3 font-mono text-base font-semibold">{{ service.title }}</h3>
    <p class="text-sm leading-relaxed text-notion-muted">{{ service.description }}</p>
  </article>
</template>
