<template>
  <section
    id="about"
    data-section="about"
    class="px-[8vw] py-[120px]"
  >
    <div class="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
      <!-- Profile Photo -->
      <div ref="imageWrapRef" class="lg:w-[45%] w-full overflow-hidden">
        <div
          ref="imageRef"
          class="relative w-full aspect-[5/6] bg-surface-card overflow-hidden"
          style="clip-path: inset(0 100% 0 0);"
        >
          <img
            src="/images/profile.jpg"
            alt="Shikha — UI/UX Designer"
            class="w-full h-full object-cover scale-110"
            loading="lazy"
            @error="$event.target.style.display='none'"
          />
          <!-- Gradient fallback if no image -->
          <div class="absolute inset-0 bg-gradient-to-br from-surface-card to-surface opacity-80"></div>
        </div>
      </div>

      <!-- Text Content -->
      <div class="lg:w-[55%] w-full">
        <SectionLabel text="ABOUT" class="mb-6" />
        <p
          ref="textRef"
          class="text-body font-sans text-base leading-[1.7]"
        >
          Product-focused UX/UI Designer with 4.5 years of experience designing scalable, data-driven digital experiences for complex platforms. Expert in interaction design, design systems, and workflow optimisation, with proven impact on usability and adoption. Trusted cross-functional partner skilled at translating ambiguous requirements into high-quality, production-ready designs in fast-paced Agile environments.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useGsap } from '../../composables/useGsap.js'
import SectionLabel from '../layout/SectionLabel.vue'

const { gsap, ScrollTrigger } = useGsap()

const imageRef = ref(null)
const textRef = ref(null)
const scrollTriggers = []

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    if (imageRef.value) imageRef.value.style.clipPath = 'inset(0 0% 0 0)'
    if (imageRef.value) {
      const img = imageRef.value.querySelector('img')
      if (img) img.style.transform = 'scale(1)'
    }
    return
  }

  // Image reveal
  if (imageRef.value) {
    const t1 = gsap.to(imageRef.value, {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1.0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: imageRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
    scrollTriggers.push(t1.scrollTrigger)

    const img = imageRef.value.querySelector('img')
    if (img) {
      const t2 = gsap.to(img, {
        scale: 1,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
      scrollTriggers.push(t2.scrollTrigger)
    }
  }

  // Text fade up
  if (textRef.value) {
    const t3 = gsap.from(textRef.value, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textRef.value,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })
    scrollTriggers.push(t3.scrollTrigger)
  }
})

onUnmounted(() => {
  scrollTriggers.forEach((st) => st?.kill())
})
</script>
