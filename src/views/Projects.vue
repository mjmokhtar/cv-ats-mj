<script setup>
import { computed } from 'vue'
import Navbar from '../components/layout/Navbar.vue'
import MobileNav from '../components/layout/MobileNav.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import ProjectCard from '../components/cards/ProjectCard.vue'
import { useListControls } from '../composables/useListControls.js'
import projects from '../data/projects.js'

const {
  state,
  categories,
  filteredItems,
  sortLabel,
  toggleSort,
} = useListControls(projects, { categoryField: 'category' })

const grouped = computed(() => {
  const groups = {}
  for (const project of filteredItems.value) {
    if (!groups[project.category]) {
      groups[project.category] = {
        name: project.category,
        color: project.categoryColor,
        items: [],
      }
    }
    groups[project.category].items.push(project)
  }
  return Object.values(groups)
})
</script>

<template>
  <div>
    <Navbar breadcrumb="🎨 Projects" />

    <div class="mx-auto max-w-6xl px-4 pb-24 pt-8 md:px-8 lg:pb-8">
      <div class="mb-8">
        <div class="mb-2 text-4xl">🎨</div>
        <h1 class="font-mono text-3xl font-bold md:text-4xl">Projects</h1>
      </div>

      <SectionHeader
        title="All Projects"
        icon="📋"
        show-controls
        :categories="categories"
        :sort-label="sortLabel"
        v-model:search-query="state.searchQuery"
        v-model:selected-category="state.selectedCategory"
        @toggle-sort="toggleSort"
      />

      <div v-if="grouped.length">
        <div v-for="group in grouped" :key="group.name" class="mb-10">
          <div
            class="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-white"
            :class="group.color"
          >
            <span>▾</span>
            {{ group.name }}
            <span class="opacity-70">({{ group.items.length }})</span>
          </div>

          <div
            class="grid grid-cols-1 gap-4 sm:grid-cols-2"
            :class="group.items.some((p) => p.featured) ? 'lg:grid-cols-2' : 'lg:grid-cols-3'"
          >
            <ProjectCard
              v-for="project in group.items"
              :key="project.id"
              :project="project"
              :compact="!project.featured && group.items.length > 2"
            />
          </div>
        </div>
      </div>
      <p v-else class="text-sm text-notion-muted">No projects match your search or filter.</p>
    </div>

    <MobileNav />
  </div>
</template>
