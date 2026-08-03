<script setup>
import TagBadge from '../ui/TagBadge.vue'

defineProps({
  note: { type: Object, required: true },
})

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

<template>
  <article class="group overflow-hidden rounded-lg border border-notion-border bg-notion-card transition-colors hover:border-notion-muted/30">
    <div class="aspect-[16/10] overflow-hidden bg-notion-border">
      <img
        :src="note.thumbnail"
        :alt="note.title"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        @error="($event.target.src = '/images/placeholder.svg')"
      />
    </div>
    <div class="space-y-2 p-4">
      <div class="flex items-start gap-2">
        <span class="mt-0.5 text-sm">📝</span>
        <h3 class="font-mono text-sm font-semibold leading-snug">{{ note.title }}</h3>
      </div>
      <p class="line-clamp-2 text-xs text-notion-muted">{{ note.excerpt }}</p>
      <div class="flex items-center justify-between pt-1">
        <TagBadge :tags="note.tags" />
        <time class="text-xs text-notion-muted">{{ formatDate(note.date) }}</time>
      </div>
    </div>
  </article>
</template>
