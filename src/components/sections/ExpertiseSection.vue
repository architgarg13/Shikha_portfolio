<template>
  <section
    id="expertise"
    data-section="expertise"
    class="px-[8vw] pb-[120px]"
  >
    <div class="max-w-[1400px] mx-auto">
      <SectionLabel text="EXPERTISE" class="mb-8" />

      <!-- Skills Headline -->
      <h2
        ref="skillsRef"
        class="font-serif font-bold text-white leading-[1.2] mb-12"
        style="font-size: clamp(1.8rem, 3.5vw, 3rem);"
      >
        UI Design, UX Research, Product Design, Prototyping, Usability Testing
      </h2>

      <!-- Divider -->
      <div ref="dividerRef" class="h-px bg-divider w-full origin-left scale-x-0 mb-12"></div>

      <!-- Experience & Education Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <!-- Experience -->
        <div ref="expColRef">
          <h3 class="text-white font-sans font-medium text-xs uppercase tracking-[0.2em] mb-8">EXPERIENCE</h3>

          <!-- Entry 1 -->
          <div class="exp-entry flex gap-4 mb-9">
            <div class="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
            <div>
              <h4 class="text-white font-sans font-bold text-lg leading-tight">Magic Edtech</h4>
              <p class="text-body font-sans text-sm mt-1">Senior UX Designer</p>
              <p class="text-muted font-sans text-[11px] uppercase tracking-[0.15em] mt-1.5">MAY 2025 · PRESENT</p>
              <p class="text-body font-sans text-sm leading-relaxed mt-3">
                Leading UX design initiatives for educational technology products, driving design strategy and delivering scalable solutions for complex learning platforms.
              </p>
            </div>
          </div>

          <!-- Entry 2 -->
          <div class="exp-entry flex gap-4 mb-9">
            <div class="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
            <div>
              <h4 class="text-white font-sans font-bold text-lg leading-tight">Samajh.ai</h4>
              <p class="text-body font-sans text-sm mt-1">UX Design Engineer</p>
              <p class="text-muted font-sans text-[11px] uppercase tracking-[0.15em] mt-1.5">MAY 2024 · MAY 2025</p>
              <p class="text-body font-sans text-sm leading-relaxed mt-3">
                Designed data-driven digital experiences for AI-powered platforms, collaborating cross-functionally to translate complex requirements into intuitive, production-ready interfaces.
              </p>
            </div>
          </div>

          <!-- Entry 3 -->
          <div class="exp-entry flex gap-4">
            <div class="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
            <div>
              <h4 class="text-white font-sans font-bold text-lg leading-tight">Apps AIT</h4>
              <p class="text-body font-sans text-sm mt-1">UI/UX Designer</p>
              <p class="text-muted font-sans text-[11px] uppercase tracking-[0.15em] mt-1.5">JANUARY 2022 · APRIL 2024</p>
              <p class="text-body font-sans text-sm leading-relaxed mt-3">
                Created user-centered designs for mobile and web applications, including wireframing, prototyping, and usability testing to improve product adoption and user satisfaction.
              </p>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div ref="eduColRef">
          <h3 class="text-white font-sans font-medium text-xs uppercase tracking-[0.2em] mb-8">EDUCATION</h3>

          <div class="exp-entry flex gap-4 mb-9">
            <div class="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
            <div>
              <h4 class="text-white font-sans font-bold text-lg leading-tight">Meerut Institute of Engineering and Technology</h4>
              <p class="text-body font-sans text-sm mt-1">B.Tech in Biotech</p>
              <p class="text-muted font-sans text-[11px] uppercase tracking-[0.15em] mt-1.5">2019 · 2023</p>
            </div>
          </div>

          <div class="exp-entry flex gap-4">
            <div class="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
            <div>
              <h4 class="text-white font-sans font-bold text-lg leading-tight">D.A.V. Public Sr. Sec. School</h4>
              <p class="text-body font-sans text-sm mt-1">Intermediate</p>
              <p class="text-muted font-sans text-[11px] uppercase tracking-[0.15em] mt-1.5">2016 · 2017</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div ref="certColRef" class="mt-16">
        <h3 class="text-white font-sans font-medium text-xs uppercase tracking-[0.2em] mb-8">CERTIFICATIONS</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="exp-entry flex gap-4">
            <div class="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
            <div>
              <h4 class="text-white font-sans font-bold text-lg leading-tight">UX Design Certificate</h4>
              <p class="text-body font-sans text-sm mt-1">Google</p>
              <p class="text-muted font-sans text-[11px] uppercase tracking-[0.15em] mt-1.5">2023</p>
            </div>
          </div>
          <div class="exp-entry flex gap-4">
            <div class="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
            <div>
              <h4 class="text-white font-sans font-bold text-lg leading-tight">Complete Figma Web & Mobile Designer</h4>
              <p class="text-body font-sans text-sm mt-1">Udemy</p>
              <p class="text-muted font-sans text-[11px] uppercase tracking-[0.15em] mt-1.5">2023</p>
            </div>
          </div>
          <div class="exp-entry flex gap-4">
            <div class="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
            <div>
              <h4 class="text-white font-sans font-bold text-lg leading-tight">Complete Adobe UI/UX Designer</h4>
              <p class="text-body font-sans text-sm mt-1">Udemy</p>
              <p class="text-muted font-sans text-[11px] uppercase tracking-[0.15em] mt-1.5">2023</p>
            </div>
          </div>
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

const skillsRef = ref(null)
const dividerRef = ref(null)
const expColRef = ref(null)
const eduColRef = ref(null)
const certColRef = ref(null)
const scrollTriggers = []

useTextReveal(skillsRef, { start: 'top 80%', stagger: 0.06 })

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    if (dividerRef.value) dividerRef.value.style.transform = 'scaleX(1)'
    return
  }

  // Divider animation
  if (dividerRef.value) {
    const t1 = gsap.to(dividerRef.value, {
      scaleX: 1,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: dividerRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
    scrollTriggers.push(t1.scrollTrigger)
  }

  // Experience entries stagger
  ;[expColRef, eduColRef, certColRef].forEach((colRef) => {
    if (colRef.value) {
      const entries = colRef.value.querySelectorAll('.exp-entry')
      const t = gsap.from(entries, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: colRef.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
      scrollTriggers.push(t.scrollTrigger)
    }
  })
})

onUnmounted(() => {
  scrollTriggers.forEach((st) => st?.kill())
})
</script>
