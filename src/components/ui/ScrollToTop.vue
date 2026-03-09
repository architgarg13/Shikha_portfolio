<template>
  <transition name="bounce-in">
    <button
      v-if="visible"
      class="scroll-to-top fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
let scrollHandler = null

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  scrollHandler = () => {
    visible.value = window.scrollY > 400
  }
  window.addEventListener('scroll', scrollHandler, { passive: true })
})

onUnmounted(() => {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
  }
})
</script>

<style scoped>
.scroll-to-top {
  background: rgba(183, 142, 60, 0.15);
  border: 2px solid #b78e3c;
  color: #b78e3c;
  box-shadow: 0 0 12px rgba(183, 142, 60, 0.3);
  animation: pulse-ring 2s ease-in-out infinite;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

.scroll-to-top:hover {
  transform: scale(1.15);
  background: rgba(183, 142, 60, 0.3);
  box-shadow: 0 0 20px rgba(183, 142, 60, 0.5);
}

@keyframes pulse-ring {
  0%, 100% {
    box-shadow: 0 0 8px rgba(183, 142, 60, 0.3), 0 0 0 0 rgba(183, 142, 60, 0.4);
  }
  50% {
    box-shadow: 0 0 12px rgba(183, 142, 60, 0.4), 0 0 0 6px rgba(183, 142, 60, 0);
  }
}

.bounce-in-enter-active {
  animation: bounce-in 0.5s ease-out;
}

.bounce-in-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.bounce-in-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>
