<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: '' },
  categories: { type: Array, default: () => ['all'] },
  sortLabel: { type: String, default: '' },
  showControls: { type: Boolean, default: false },
})

const searchQuery = defineModel('searchQuery', { type: String, default: '' })
const selectedCategory = defineModel('selectedCategory', { type: String, default: 'all' })

const emit = defineEmits(['toggle-sort'])

const showSearch = ref(false)
const showFilter = ref(false)
const rootEl = ref(null)

function toggleSearch() {
  showSearch.value = !showSearch.value
  if (showSearch.value) showFilter.value = false
}

function toggleFilter() {
  showFilter.value = !showFilter.value
  if (showFilter.value) showSearch.value = false
}

function pickCategory(cat) {
  selectedCategory.value = cat
  showFilter.value = false
}

function onClickOutside(e) {
  if (rootEl.value && !rootEl.value.contains(e.target)) {
    showFilter.value = false
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
  <div ref="rootEl" class="relative mb-4 overflow-visible">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <div class="flex items-center gap-2">
        <span v-if="icon" class="text-sm">{{ icon }}</span>
        <h2 class="font-mono text-sm font-medium">{{ title }}</h2>
        <span v-if="sortLabel" class="text-xs text-notion-muted">· {{ sortLabel }}</span>
      </div>

      <div v-if="showControls" class="flex items-center gap-1">
        <!-- Filter -->
        <div class="relative">
          <button
            type="button"
            class="rounded p-1.5 transition-colors hover:bg-notion-card"
            :class="showFilter || selectedCategory !== 'all' ? 'bg-notion-card text-notion-text' : 'text-notion-muted'"
            aria-label="Filter by category"
            @click.stop="toggleFilter"
          >
            <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>

          <div
            v-if="showFilter"
            class="absolute right-0 top-full z-50 mt-1 min-w-[180px] rounded-lg border border-notion-border bg-notion-card py-1 shadow-xl"
            @click.stop
          >
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              class="block w-full px-3 py-2 text-left text-sm transition-colors hover:bg-notion-cardHover"
              :class="selectedCategory === cat ? 'font-medium text-notion-text' : 'text-notion-muted'"
              @click="pickCategory(cat)"
            >
              {{ cat === 'all' ? 'All categories' : cat }}
            </button>
          </div>
        </div>

        <!-- Sort -->
        <button
          type="button"
          class="rounded p-1.5 transition-colors hover:bg-notion-card"
          :class="sortLabel ? 'bg-notion-card text-notion-text' : 'text-notion-muted'"
          aria-label="Toggle sort order"
          @click="emit('toggle-sort')"
        >
          <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </button>

        <!-- Search -->
        <button
          type="button"
          class="rounded p-1.5 transition-colors hover:bg-notion-card"
          :class="showSearch || searchQuery ? 'bg-notion-card text-notion-text' : 'text-notion-muted'"
          aria-label="Toggle search"
          @click="toggleSearch"
        >
          <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="showControls && showSearch" class="mt-3">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search projects..."
        class="w-full rounded-md border border-notion-border bg-notion-card px-3 py-2 text-sm text-notion-text placeholder:text-notion-muted focus:outline-none focus:ring-1 focus:ring-notion-muted"
        autofocus
      />
    </div>

    <p v-if="showControls && (searchQuery || selectedCategory !== 'all')" class="mt-2 text-xs text-notion-muted">
      <span v-if="searchQuery">Search: "{{ searchQuery }}"</span>
      <span v-if="searchQuery && selectedCategory !== 'all'"> · </span>
      <span v-if="selectedCategory !== 'all'">Category: {{ selectedCategory }}</span>
    </p>
  </div>
</template>
