<template>
  <section
    id="contact"
    data-section="contact"
    class="px-[8vw] py-[120px]"
  >
    <div class="max-w-[1400px] mx-auto">
      <SectionLabel text="GET IN TOUCH" class="mb-8" />

      <h2
        ref="headlineRef"
        class="font-serif text-white leading-[1.15] mb-16 max-w-[900px]"
        style="font-size: clamp(2rem, 4vw, 3.5rem);"
      >
        I love to hear from you. Whether you have a question or just want to chat about design, tech &amp; art &#8212; shoot me a message.
      </h2>

      <!-- Footer Info Grid -->
      <div ref="footerRef" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
        <!-- Reach Me At -->
        <div class="footer-col">
          <h3 class="text-white font-sans font-medium text-xs uppercase tracking-[0.2em] mb-4">REACH ME AT</h3>
          <p class="text-body font-sans text-[15px] leading-relaxed">sumitmishra0110@gmail.com</p>
          <p class="text-body font-sans text-[15px] leading-relaxed mt-2">+91-7987315606</p>
        </div>

        <!-- Social -->
        <div class="footer-col">
          <h3 class="text-white font-sans font-medium text-xs uppercase tracking-[0.2em] mb-4">SOCIAL</h3>
          <p class="text-body font-sans text-[15px]">
            <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Behance</a>,
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Linkedin</a>
          </p>
        </div>

        <!-- Say Hello Button -->
        <div class="footer-col flex lg:justify-end">
          <button
            class="px-10 py-4 border border-[#555] text-white font-sans font-semibold text-[13px] uppercase tracking-[0.15em] hover:border-white transition-colors duration-200"
            @click="$emit('openModal')"
          >
            SAY HELLO.
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useGsap } from '../../composables/useGsap.js'
import SectionLabel from '../layout/SectionLabel.vue'
import { useTextReveal } from '../../composables/useTextReveal.js'

const { gsap, ScrollTrigger } = useGsap()

defineEmits(['openModal'])

const headlineRef = ref(null)
const footerRef = ref(null)
let scrollTriggerInstance = null

useTextReveal(headlineRef, { start: 'top 80%', stagger: 0.06 })

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  if (footerRef.value) {
    const cols = footerRef.value.querySelectorAll('.footer-col')
    const tween = gsap.from(cols, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.value,
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
