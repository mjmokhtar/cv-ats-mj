<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Sidebar from '../components/layout/Sidebar.vue'
import MobileNav from '../components/layout/MobileNav.vue'
import GradientHero from '../components/ui/GradientHero.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import ProjectCard from '../components/cards/ProjectCard.vue'
import SkillsGrid from '../components/ui/SkillsGrid.vue'
import SocialButtons from '../components/ui/SocialButtons.vue'
import { useListControls } from '../composables/useListControls.js'
import site from '../data/site.js'
import projects from '../data/projects.js'

const {
  state: projectState,
  categories,
  filteredItems,
  sortLabel,
  toggleSort,
} = useListControls(projects, { categoryField: 'category' })
</script>

<template>
  <div>
    <Navbar />

    <GradientHero />

    <div class="mx-auto max-w-6xl px-4 pb-24 md:px-8 lg:pb-8">
      <div class="mb-10 pt-2">
        <h1 class="font-mono text-3xl font-bold md:text-4xl">{{ site.name }}</h1>
        <p class="mt-2 font-mono text-sm text-notion-muted">{{ site.about }}</p>
        <p class="mt-4 max-w-2xl text-sm leading-relaxed text-notion-muted">
          {{ site.tagline }}
        </p>
        <a
          :href="site.locationLink"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-2 inline-block text-xs text-notion-muted hover:text-notion-text"
        >
          📍 {{ site.location }}
        </a>
      </div>

      <div class="flex gap-8">
        <main class="min-w-0 flex-1 space-y-12 overflow-visible">
          <section>
            <SectionHeader title="Skills" icon="⚡" />
            <SkillsGrid />
          </section>

          <section class="overflow-visible">
            <SectionHeader
              title="Featured Projects"
              icon="⭐"
              show-controls
              :categories="categories"
              :sort-label="sortLabel"
              v-model:search-query="projectState.searchQuery"
              v-model:selected-category="projectState.selectedCategory"
              @toggle-sort="toggleSort"
            />
            <div v-if="filteredItems.length" class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ProjectCard
                v-for="project in filteredItems"
                :key="project.id"
                :project="project"
              />
            </div>
            <p v-else class="text-sm text-notion-muted">No projects match your search or filter.</p>
          </section>
        </main>

        <Sidebar />
      </div>

      <section class="mt-12 xl:hidden">
        <h3 class="mb-3 text-sm font-semibold">Connect with me</h3>
        <SocialButtons />
      </section>
    </div>

    <MobileNav />
  </div>
</template>
