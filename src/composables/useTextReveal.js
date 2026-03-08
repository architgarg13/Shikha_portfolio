import { onMounted, onUnmounted } from 'vue'
import { useGsap } from './useGsap.js'

const { gsap, ScrollTrigger } = useGsap()

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function useTextReveal(elementRef, options = {}) {
  const {
    trigger = null,
    start = 'top 80%',
    stagger = 0.08,
    duration = 0.6,
    delay = 0,
    isPageLoad = false,
  } = options

  let scrollTriggerInstance = null

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = elementRef.value
    if (!el) return

    const text = el.textContent
    const words = text.split(/\s+/).filter(Boolean)

    el.innerHTML = words
      .map(
        (word) =>
          `<span style="overflow:hidden;display:inline-block;"><span class="word-inner" style="display:inline-block;transform:translateY(100%);opacity:0;">${escapeHtml(word)}&nbsp;</span></span>`
      )
      .join('')

    const innerSpans = el.querySelectorAll('.word-inner')

    const animConfig = {
      y: 0,
      opacity: 1,
      stagger,
      duration,
      ease: 'power3.out',
      delay,
    }

    if (isPageLoad) {
      gsap.to(innerSpans, animConfig)
    } else {
      const tween = gsap.to(innerSpans, {
        ...animConfig,
        scrollTrigger: {
          trigger: trigger || el,
          start,
          toggleActions: 'play none none none',
        },
      })
      scrollTriggerInstance = tween.scrollTrigger
    }
  })

  onUnmounted(() => {
    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill()
      scrollTriggerInstance = null
    }
  })
}
