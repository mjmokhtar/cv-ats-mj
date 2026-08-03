import { ref, computed, reactive, toRefs } from 'vue'

export function useListControls(items, options = {}) {
  const {
    searchFields = ['title', 'description', 'tags'],
    categoryField = 'category',
  } = options

  const state = reactive({
    searchQuery: '',
    selectedCategory: 'all',
    sortAsc: false,
  })

  const categories = computed(() => {
    if (!categoryField) return ['all']
    const cats = [...new Set(items.map((item) => item[categoryField]).filter(Boolean))]
    return ['all', ...cats]
  })

  const filteredItems = computed(() => {
    let result = [...items]

    const q = state.searchQuery.trim().toLowerCase()
    if (q) {
      result = result.filter((item) =>
        searchFields.some((field) => {
          const val = item[field]
          if (Array.isArray(val)) return val.some((v) => String(v).toLowerCase().includes(q))
          return String(val ?? '').toLowerCase().includes(q)
        }),
      )
    }

    if (categoryField && state.selectedCategory !== 'all') {
      result = result.filter((item) => item[categoryField] === state.selectedCategory)
    }

    result.sort((a, b) => {
      const yearA = parseInt(a.year, 10) || 0
      const yearB = parseInt(b.year, 10) || 0
      if (yearA !== yearB) return state.sortAsc ? yearA - yearB : yearB - yearA
      return state.sortAsc
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    })

    return result
  })

  const sortLabel = computed(() =>
    state.sortAsc ? 'Oldest first ↑' : 'Newest first ↓',
  )

  function toggleSort() {
    state.sortAsc = !state.sortAsc
  }

  function resetFilters() {
    state.searchQuery = ''
    state.selectedCategory = 'all'
  }

  return {
    ...toRefs(state),
    state,
    categories,
    filteredItems,
    sortLabel,
    toggleSort,
    resetFilters,
  }
}
