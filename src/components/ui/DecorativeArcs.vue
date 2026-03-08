<template>
  <svg
    ref="svgRef"
    class="decorative-arcs"
    width="400"
    height="400"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-for="(r, i) in radii"
      :key="i"
      :d="`M ${r},400 A ${r},${r} 0 0 0 400,${400 - r}`"
      stroke="white"
      :stroke-opacity="0.12"
      stroke-width="1"
      class="arc-path"
    />
  </svg>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const svgRef = ref(null)
const radii = [120, 190, 260, 330]

function animate(delay = 1.2) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  const paths = svgRef.value?.querySelectorAll('.arc-path')
  if (!paths) return

  paths.forEach((path, i) => {
    const length = path.getTotalLength()
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    })
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.0,
      delay: delay + i * 0.15,
      ease: 'power2.out',
    })
  })
}

defineExpose({ animate })
</script>
