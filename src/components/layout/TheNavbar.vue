<template>
  <nav
    ref="navRef"
    class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
    :class="scrolled ? 'bg-surface' : 'bg-transparent'"
  >
    <!-- Top accent line -->
    <div class="h-[2px] w-full bg-[#6b2d2d]"></div>

    <div class="flex items-center justify-between px-[8vw] h-14 max-w-[1400px] mx-auto">
      <!-- Logo -->
      <a
        href="#intro"
        class="text-white font-sans font-bold text-sm uppercase tracking-[0.15em]"
        @click.prevent="mobileOpen = false; $emit('navigate', '#intro')"
      >
        SUMIT.
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-10">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          class="nav-item relative text-xs font-sans font-medium uppercase tracking-[0.2em] transition-colors duration-200 px-5 py-2.5 rounded"
          :class="
            activeSection === item.id
              ? 'text-white bg-surface-nav border border-divider'
              : 'text-body hover:text-white'
          "
          @click.prevent="$emit('navigate', item.href)"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <span class="block w-6 h-0.5 bg-white transition-transform duration-300" :class="mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''"></span>
        <span class="block w-6 h-0.5 bg-white transition-opacity duration-300" :class="mobileOpen ? 'opacity-0' : ''"></span>
        <span class="block w-6 h-0.5 bg-white transition-transform duration-300" :class="mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div
        v-if="mobileOpen"
        class="md:hidden fixed inset-0 top-[58px] bg-surface z-40 flex flex-col items-center pt-16 gap-8"
      >
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          class="text-sm font-sans font-medium uppercase tracking-[0.2em] transition-colors duration-200 px-6 py-3 rounded"
          :class="
            activeSection === item.id
              ? 'text-white bg-surface-nav border border-divider'
              : 'text-body hover:text-white'
          "
          @click.prevent="handleMobileNav(item.href)"
        >
          {{ item.label }}
        </a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navItems } from '../../data/navigation.js'

const props = defineProps({
  activeSection: { type: String, default: 'intro' },
})

const emit = defineEmits(['navigate'])

const scrolled = ref(false)
const mobileOpen = ref(false)
const navRef = ref(null)

function handleScroll() {
  scrolled.value = window.scrollY > 100
}

function handleMobileNav(href) {
  mobileOpen.value = false
  emit('navigate', href)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
