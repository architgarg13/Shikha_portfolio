<template>
  <a
    :href="project.link"
    :target="project.link !== '#' ? '_blank' : undefined"
    :rel="project.link !== '#' ? 'noopener noreferrer' : undefined"
    class="project-card flex bg-surface-card overflow-hidden group cursor-pointer"
  >
    <!-- Thumbnail -->
    <div class="w-[40%] min-h-[160px] overflow-hidden relative">
      <div
        class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
        :style="{ backgroundColor: project.color }"
      >
        <img
          v-if="hasImage"
          :src="project.thumbnail"
          :alt="project.title"
          class="w-full h-full object-cover"
          loading="lazy"
          @error="hasImage = false"
        />
      </div>
    </div>
    <!-- Text Content -->
    <div class="w-[60%] p-6 flex flex-col justify-center relative">
      <span class="text-accent-gold text-xs font-sans font-medium tracking-[0.05em] mb-2">
        {{ project.category }}
      </span>
      <h3 class="text-white font-sans font-bold text-lg leading-snug pr-8">
        {{ project.title }}
      </h3>
      <!-- Arrow -->
      <svg
        class="absolute top-6 right-6 w-4 h-4 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M4 12 L12 4 L5 4 M12 4 L12 11" />
      </svg>
    </div>
  </a>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const hasImage = ref(true)
</script>
