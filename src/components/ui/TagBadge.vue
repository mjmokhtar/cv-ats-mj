<script setup>
defineProps({
  tags: { type: Array, default: () => [] },
})

const tagColors = {
  math: 'bg-amber-900/60 text-amber-200',
  thoughts: 'bg-stone-700/60 text-stone-300',
  embedded: 'bg-blue-900/60 text-blue-200',
  tutorial: 'bg-green-900/60 text-green-200',
  firmware: 'bg-purple-900/60 text-purple-200',
  default: 'bg-notion-border text-notion-muted',
}
</script>

<template>
  <div v-if="tags.length" class="flex flex-wrap gap-1.5">
    <span
      v-for="tag in tags"
      :key="tag"
      class="rounded px-2 py-0.5 text-xs font-medium"
      :class="tagColors[tag] || tagColors.default"
    >
      {{ tag }}
    </span>
  </div>
</template>
