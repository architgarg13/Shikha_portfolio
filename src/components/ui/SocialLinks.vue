<template>
  <div ref="containerRef" class="social-links hidden lg:flex flex-col items-center gap-10 fixed right-6 top-1/2 -translate-y-1/2 z-10 opacity-0">
    <a
      href="https://www.behance.net"
      target="_blank"
      rel="noopener noreferrer"
      class="text-muted text-[11px] font-sans font-medium uppercase tracking-[0.15em] -rotate-90 hover:text-white transition-colors duration-200"
    >
      Behance
    </a>
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      class="text-muted text-[11px] font-sans font-medium uppercase tracking-[0.15em] -rotate-90 hover:text-white transition-colors duration-200"
    >
      LinkedIn
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const containerRef = ref(null)

defineExpose({
  animate(delay = 1.5) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      if (containerRef.value) containerRef.value.style.opacity = '1'
      return
    }
    import('gsap').then(({ gsap }) => {
      if (!containerRef.value) return
      gsap.to(containerRef.value, {
        opacity: 1,
        duration: 0.4,
        delay,
        ease: 'power3.out',
      })
    })
  },
})
</script>
