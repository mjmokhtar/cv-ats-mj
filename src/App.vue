<script setup>
import { RouterView } from 'vue-router'
import { useTheme } from './composables/useTheme.js'

const { isDark, initTheme } = useTheme()
initTheme()
</script>

<template>
  <div
    class="min-h-screen transition-colors duration-300"
    :style="{
      backgroundColor: isDark ? '#191919' : '#ffffff',
      color: isDark ? '#ebebeb' : '#37352f',
    }"
  >
    <RouterView />
  </div>
</template>
