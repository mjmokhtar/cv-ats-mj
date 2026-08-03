<script setup>
import Navbar from '../components/layout/Navbar.vue'
import MobileNav from '../components/layout/MobileNav.vue'
import SocialButtons from '../components/ui/SocialButtons.vue'
import SkillsGrid from '../components/ui/SkillsGrid.vue'
import career from '../data/career.js'
import education from '../data/education.js'
import site from '../data/site.js'
</script>

<template>
  <div>
    <Navbar breadcrumb="👤 About Me" />

    <div class="mx-auto max-w-3xl px-4 pb-24 pt-8 md:px-8 lg:pb-8">
      <div class="mb-8">
        <div class="mb-4 h-16 w-16 overflow-hidden rounded-full bg-notion-card">
          <img :src="site.avatar" :alt="site.fullName" class="h-full w-full object-cover" />
        </div>
        <h1 class="font-mono text-3xl font-bold md:text-4xl">About Me</h1>
        <p class="mt-4 font-mono text-sm leading-relaxed text-notion-muted">
          {{ site.about }}
        </p>
        <p class="mt-2 text-sm leading-relaxed text-notion-muted">
          {{ site.fullName }} — {{ site.tagline }}
        </p>
      </div>

      <section class="mb-10">
        <h2 class="mb-6 font-mono text-xl font-bold">Career Story</h2>

        <div class="notion-callout mb-8">
          <div class="mb-2 flex items-center gap-2">
            <span>✨</span>
            <strong class="font-mono text-sm">TL;DR</strong>
          </div>
          <p class="font-mono text-sm leading-relaxed text-notion-muted">
            {{ site.summary }}
          </p>
        </div>

        <div v-for="(entry, i) in career" :key="i" class="mb-8">
          <h3 class="font-mono text-base font-bold">
            <a
              v-if="entry.link"
              :href="entry.link"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline"
            >
              {{ entry.role }} — {{ entry.company }}
            </a>
            <template v-else>{{ entry.role }} — {{ entry.company }}</template>
          </h3>
          <p class="mt-1 text-xs text-notion-muted">
            [{{ entry.type }} | {{ entry.period }}]
            <span v-if="entry.badges?.length" class="ml-2">
              <span
                v-for="badge in entry.badges"
                :key="badge"
                class="mr-1 inline-block rounded bg-notion-border px-1.5 py-0.5 text-[10px]"
              >
                {{ badge }}
              </span>
            </span>
          </p>

          <ul v-if="entry.bullets?.length" class="mt-3 list-disc space-y-1.5 pl-5 text-sm text-notion-muted">
            <li v-for="(bullet, j) in entry.bullets" :key="j">{{ bullet }}</li>
          </ul>

          <p v-if="entry.description" class="mt-3 text-sm leading-relaxed text-notion-muted">
            {{ entry.description }}
          </p>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="mb-4 font-mono text-xl font-bold">Skills</h2>
        <SkillsGrid />
      </section>

      <section class="mb-10">
        <h2 class="mb-4 font-mono text-xl font-bold">Education</h2>

        <div v-for="(edu, i) in education" :key="i" class="mb-4">
          <h3 class="font-mono text-base font-bold">
            {{ edu.degree }} — {{ edu.institution }}
          </h3>
          <p class="mt-1 text-xs text-notion-muted">
            [{{ edu.period }} | {{ edu.status }}]
          </p>
        </div>
      </section>

      <hr class="my-8 border-notion-border" />

      <section>
        <h2 class="mb-4 font-mono text-xl font-bold">Let's Connect!</h2>
        <p class="mb-6 text-sm text-notion-muted">
          Feel free to reach out if you're curious about my work or want to connect.
        </p>

        <SocialButtons />

        <p class="mt-8 text-sm text-notion-muted">
          View my portfolio:
          <a
            :href="site.resume.url"
            class="ml-1 text-notion-text underline hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ site.personalWebsiteUrl }}
          </a>
        </p>
      </section>
    </div>

    <MobileNav />
  </div>
</template>
