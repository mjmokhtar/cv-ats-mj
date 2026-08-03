<script setup>
defineProps({
  project: { type: Object, required: true },
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <component
    :is="project.link ? 'a' : 'article'"
    :href="project.link || undefined"
    :target="project.link ? '_blank' : undefined"
    :rel="project.link ? 'noopener noreferrer' : undefined"
    class="group block overflow-hidden rounded-lg border border-notion-border bg-notion-card transition-colors hover:border-notion-muted/30"
    :class="project.featured ? 'md:col-span-2' : ''"
  >
    <div class="aspect-[16/10] overflow-hidden bg-notion-border">
      <img
        :src="project.thumbnail"
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        @error="($event.target.src = '/images/placeholder.svg')"
      />
    </div>
    <div class="space-y-2" :class="compact ? 'p-3' : 'p-4'">
      <div class="flex items-start gap-2">
        <span class="text-sm">{{ project.icon }}</span>
        <h3 class="font-mono text-sm font-semibold leading-snug">{{ project.title }}</h3>
      </div>
      <p v-if="!compact" class="line-clamp-3 text-xs text-notion-muted">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap items-center gap-1.5">
        <span
          v-for="tag in project.tags?.slice(0, 3)"
          :key="tag"
          class="rounded bg-notion-border px-1.5 py-0.5 text-[10px] text-notion-muted"
        >
          {{ tag }}
        </span>
        <span class="ml-auto text-xs text-notion-muted">{{ project.year }}</span>
      </div>
    </div>
  </component>
</template>
