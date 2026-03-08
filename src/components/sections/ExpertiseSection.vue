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
        Visual Design, UX Research, UI Design, Product Design, Prototyping, Illustration
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
              <h4 class="text-white font-sans font-bold text-lg leading-tight">Crimsons Systems</h4>
              <p class="text-body font-sans text-sm mt-1">UI/UX Designer</p>
              <p class="text-muted font-sans text-[11px] uppercase tracking-[0.15em] mt-1.5">AUGUST 2024 · PRESENT</p>
              <p class="text-body font-sans text-sm leading-relaxed mt-3">
                I learned concept of UI/UX like wireframing and laws with hands on experience on various projects like ERP,CRM and many Saas website.
              </p>
            </div>
          </div>

          <!-- Entry 2 -->
          <div class="exp-entry flex gap-4">
            <div class="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
            <div>
              <h4 class="text-white font-sans font-bold text-lg leading-tight">Zomit (Product Based)</h4>
              <p class="text-body font-sans text-sm mt-1">Frontend Developer</p>
              <p class="text-muted font-sans text-[11px] uppercase tracking-[0.15em] mt-1.5">JANUARY 2024 · JULY 2024</p>
              <p class="text-body font-sans text-sm leading-relaxed mt-3">
                Worked on building scalable frontend solutions using modern frameworks and collaborated with the design team to implement pixel-perfect interfaces.
              </p>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div ref="eduColRef">
          <h3 class="text-white font-sans font-medium text-xs uppercase tracking-[0.2em] mb-8">EDUCATION</h3>

          <div class="exp-entry flex gap-4">
            <div class="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2.5 flex-shrink-0"></div>
            <div>
              <h4 class="text-white font-sans font-bold text-lg leading-tight">Gyan ganga Institute of technology and science</h4>
              <p class="text-body font-sans text-sm mt-1">B.tech (Computer Science)</p>
              <p class="text-muted font-sans text-[11px] uppercase tracking-[0.15em] mt-1.5">APRIL 2020-AUGUST 2024A</p>
              <p class="text-body font-sans text-sm leading-relaxed mt-3">
                Completed Bachelor of Technology in Computer Science with focus on software engineering, data structures, and human-computer interaction. Participated in various hackathons and design competitions.
              </p>
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
  ;[expColRef, eduColRef].forEach((colRef) => {
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
