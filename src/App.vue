<template>
  <div class="app min-h-screen bg-surface text-white font-sans">
    <!-- Navbar -->
    <TheNavbar
      :active-section="activeSection"
      @navigate="handleNavigate"
    />

    <!-- Sections -->
    <main>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <WorksSection />
      <TestimonialsSection />
      <ContactSection @openModal="showEmailModal = true" />
    </main>

    <!-- Email Modal -->
    <EmailModal :show="showEmailModal" @close="showEmailModal = false" />

    <!-- Scroll to Top -->
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TheNavbar from './components/layout/TheNavbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ExpertiseSection from './components/sections/ExpertiseSection.vue'
import WorksSection from './components/sections/WorksSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import EmailModal from './components/modals/EmailModal.vue'
import ScrollToTop from './components/ui/ScrollToTop.vue'
import { useActiveSection } from './composables/useActiveSection.js'
import { useLenis } from './composables/useLenis.js'

const { activeSection } = useActiveSection()
const { init: initLenis, scrollTo, destroy: destroyLenis } = useLenis()

const showEmailModal = ref(false)

function handleNavigate(href) {
  scrollTo(href)
}

onMounted(() => {
  initLenis()
})

onUnmounted(() => {
  destroyLenis()
})
</script>
