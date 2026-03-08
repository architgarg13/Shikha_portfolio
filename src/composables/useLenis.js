import { ref, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const lenisInstance = ref(null)
let tickerCallback = null

export function useLenis() {
  function init() {
    if (lenisInstance.value) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    })

    lenisInstance.value = lenis

    lenis.on('scroll', ScrollTrigger.update)

    tickerCallback = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)
  }

  function scrollTo(target, options = {}) {
    if (lenisInstance.value) {
      lenisInstance.value.scrollTo(target, {
        offset: -56,
        duration: 1.2,
        ...options,
      })
    }
  }

  function stop() {
    if (lenisInstance.value) lenisInstance.value.stop()
  }

  function start() {
    if (lenisInstance.value) lenisInstance.value.start()
  }

  function destroy() {
    if (lenisInstance.value) {
      if (tickerCallback) {
        gsap.ticker.remove(tickerCallback)
        tickerCallback = null
      }
      lenisInstance.value.off('scroll', ScrollTrigger.update)
      lenisInstance.value.destroy()
      lenisInstance.value = null
    }
  }

  return { lenis: lenisInstance, init, scrollTo, stop, start, destroy }
}
