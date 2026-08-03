<script setup>
import site from '../../data/site.js'
</script>

<template>
  <div>
    <!-- Full-width banner -->
    <div
      class="h-32 w-full bg-gradient-to-r sm:h-40"
      :class="site.bannerGradient"
    />

    <!-- Avatar aligned with page content (same max-w-6xl container) -->
    <div class="mx-auto max-w-6xl px-4 md:px-8">
      <div class="-mt-8 sm:-mt-10">
        <div class="h-16 w-16 overflow-hidden rounded-full border-4 border-notion-bg sm:h-20 sm:w-20">
          <img
            :src="site.avatar"
            :alt="site.fullName"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
