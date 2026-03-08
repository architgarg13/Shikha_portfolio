<template>
  <section
    id="testimonials"
    data-section="testimonials"
    class="px-[8vw] pb-[120px]"
  >
    <div class="max-w-[1400px] mx-auto">
      <!-- Section divider bars -->
      <div class="flex flex-col items-center gap-2 mb-16">
        <div class="w-20 h-[3px] bg-white/50"></div>
        <div class="w-20 h-[3px] bg-white/50"></div>
      </div>

      <!-- Carousel Container -->
      <div class="overflow-hidden" ref="carouselRef" @mouseenter="pauseAutoPlay" @mouseleave="resumeAutoPlay">
        <div
          ref="trackRef"
          class="flex transition-none"
        >
          <!-- Slide Pages (2 cards per slide on desktop, 1 on mobile) -->
          <div
            v-for="(page, pageIdx) in pages"
            :key="pageIdx"
            class="w-full flex-shrink-0"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <TestimonialCard
                v-for="testimonial in page"
                :key="testimonial.id"
                :testimonial="testimonial"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="mt-10">
        <PaginationDots
          :total="pages.length"
          :active="currentSlide"
          @change="goToSlide"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import TestimonialCard from '../ui/TestimonialCard.vue'
import PaginationDots from '../ui/PaginationDots.vue'
import { testimonials } from '../../data/testimonials.js'

const trackRef = ref(null)
const carouselRef = ref(null)
const currentSlide = ref(0)
let autoPlayTimer = null

const pages = computed(() => {
  const result = []
  for (let i = 0; i < testimonials.length; i += 2) {
    result.push(testimonials.slice(i, i + 2))
  }
  return result
})

function goToSlide(index) {
  if (trackRef.value) {
    gsap.to(trackRef.value, {
      x: `-${index * 100}%`,
      duration: 0.5,
      ease: 'power2.inOut',
    })
  }
  currentSlide.value = index
}

function nextSlide() {
  const next = (currentSlide.value + 1) % pages.value.length
  goToSlide(next)
}

function startAutoPlay() {
  autoPlayTimer = setInterval(nextSlide, 5000)
}

function pauseAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

function resumeAutoPlay() {
  pauseAutoPlay()
  startAutoPlay()
}

onMounted(() => {
  if (trackRef.value) {
    gsap.set(trackRef.value, { x: 0 })
  }
  startAutoPlay()
})

onUnmounted(() => {
  pauseAutoPlay()
})
</script>
