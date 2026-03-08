<template>
  <div class="section-label flex items-center gap-4">
    <span class="label-line block w-10 h-px bg-accent-gold"></span>
    <span class="label-text text-accent-gold text-xs font-medium uppercase tracking-[0.2em] font-sans">
      {{ text }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  text: { type: String, required: true },
})
</script>
