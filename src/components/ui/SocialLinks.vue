<template>
  <div ref="containerRef" class="social-links hidden lg:flex flex-col items-center gap-10 fixed right-6 top-1/2 -translate-y-1/2 z-10 opacity-0">
    <a
      href="https://www.linkedin.com/in/shikha-singh-903695207/"
      target="_blank"
      rel="noopener noreferrer"
      class="text-muted hover:text-white transition-colors duration-200"
      aria-label="LinkedIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
      </svg>
    </a>
    <a
      href="https://www.behance.net/_singhshikha"
      target="_blank"
      rel="noopener noreferrer"
      class="text-muted hover:text-white transition-colors duration-200"
      aria-label="Behance"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.563-.285 2.8 2.8 0 0 1-1.137-.817 3.6 3.6 0 0 1-.676-1.278 5.7 5.7 0 0 1-.214-1.598c0-.566.07-1.067.214-1.528.145-.46.356-.86.641-1.207.286-.32.641-.566 1.067-.747.426-.176.887-.285 1.418-.285.606 0 1.137.105 1.563.356.426.25.782.566 1.032.997.25.426.426.887.532 1.418.07.496.105 1.032.07 1.563H11.18c0 .496.14.922.426 1.207zM13.2 8.39c-.215-.25-.566-.391-1.032-.391-.32 0-.566.07-.782.176a1.6 1.6 0 0 0-.461.356c-.106.14-.176.285-.21.46a2 2 0 0 0-.036.32h3.17c-.07-.46-.25-.852-.534-1.032zm-3.476-3.24H13.5V6.1H9.724z"/>
      </svg>
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
