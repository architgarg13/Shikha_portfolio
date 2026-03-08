<template>
  <section
    id="intro"
    data-section="intro"
    class="relative min-h-screen flex items-center px-[8vw] pt-14 overflow-hidden"
  >
    <!-- Content -->
    <div class="max-w-[1400px] w-full mx-auto">
      <SectionLabel ref="labelRef" text="HELLO WORLD" class="mb-8 opacity-0" />
      <h1
        ref="headlineRef"
        class="font-serif font-bold text-white leading-[1.05] max-w-full lg:max-w-[75%]"
        style="font-size: clamp(3rem, 7vw, 6.5rem);"
      >
        I am Sumit, a UI/UX designer &amp; frontend developer based in Somewhere.
      </h1>
    </div>

    <!-- Decorative Arcs (bottom-right) -->
    <div class="absolute bottom-0 right-0 hidden lg:block">
      <DecorativeArcs ref="arcsRef" />
    </div>

    <!-- Social Links -->
    <SocialLinks ref="socialRef" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import SectionLabel from '../layout/SectionLabel.vue'
import DecorativeArcs from '../ui/DecorativeArcs.vue'
import SocialLinks from '../ui/SocialLinks.vue'
import { useTextReveal } from '../../composables/useTextReveal.js'

const labelRef = ref(null)
const headlineRef = ref(null)
const arcsRef = ref(null)
const socialRef = ref(null)

useTextReveal(headlineRef, { isPageLoad: true, delay: 0.5, stagger: 0.06 })

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    if (labelRef.value?.$el) labelRef.value.$el.style.opacity = '1'
    return
  }

  // Label animation
  const labelEl = labelRef.value?.$el
  if (labelEl) {
    gsap.fromTo(labelEl, { opacity: 0, x: -20 }, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      delay: 0.3,
      ease: 'power3.out',
    })
  }

  // Arcs
  if (arcsRef.value?.animate) {
    arcsRef.value.animate(1.2)
  }

  // Social links
  if (socialRef.value?.animate) {
    socialRef.value.animate(1.5)
  }
})
</script>
