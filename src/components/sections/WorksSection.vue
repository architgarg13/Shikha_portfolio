<template>
  <section
    id="works"
    data-section="works"
    class="px-[8vw] py-[120px]"
  >
    <div class="max-w-[1400px] mx-auto">
      <SectionLabel text="RECENT WORKS" class="mb-8" />

      <h2
        ref="headlineRef"
        class="font-serif text-white leading-[1.15] mb-12 max-w-[800px]"
        style="font-size: clamp(2rem, 4vw, 3.5rem);"
      >
        Here are some of my favorite projects I have done lately. Feel free to check them out.
      </h2>

      <!-- Projects Grid -->
      <div ref="gridRef" class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="project-item"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useGsap } from '../../composables/useGsap.js'
import SectionLabel from '../layout/SectionLabel.vue'
import ProjectCard from '../ui/ProjectCard.vue'
import { projects } from '../../data/projects.js'
import { useTextReveal } from '../../composables/useTextReveal.js'

const { gsap, ScrollTrigger } = useGsap()

const headlineRef = ref(null)
const gridRef = ref(null)
let scrollTriggerInstance = null

useTextReveal(headlineRef, { start: 'top 80%', stagger: 0.06 })

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  if (gridRef.value) {
    const cards = gridRef.value.querySelectorAll('.project-item')
    const tween = gsap.from(cards, {
      y: 60,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: gridRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
    scrollTriggerInstance = tween.scrollTrigger
  }
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>
