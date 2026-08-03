<script setup>
import Navbar from '../components/layout/Navbar.vue'
import MobileNav from '../components/layout/MobileNav.vue'
import ServiceCard from '../components/cards/ServiceCard.vue'
import services from '../data/services.js'
</script>

<template>
  <div>
    <Navbar breadcrumb="🔧 Service" />

    <div class="mx-auto max-w-4xl px-4 pb-24 pt-8 md:px-8 lg:pb-8">
      <!-- Page header -->
      <div class="mb-8 text-center">
        <div class="mb-2 text-4xl">🔧</div>
        <h1 class="font-mono text-3xl font-bold md:text-4xl">Service</h1>

        <div class="mt-4 flex items-center justify-center gap-3">
          <a href="#" class="text-sm text-notion-muted hover:text-white">
            ⚠️ Terms and Conditions
          </a>
          <button class="rounded-md bg-notion-card px-3 py-1.5 text-sm">
            📋 All Services
          </button>
        </div>
      </div>

      <!-- Service grid -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ServiceCard v-for="service in services" :key="service.id" :service="service" />
      </div>
    </div>

    <MobileNav />
  </div>
</template>
