<template>
  <div class="flex items-center justify-center gap-3">
    <button
      v-for="i in total"
      :key="i"
      class="w-2 h-2 rounded-full transition-colors duration-300"
      :class="active === i - 1 ? 'bg-accent-gold' : 'bg-muted'"
      :aria-label="`Go to slide ${i}`"
      @click="$emit('change', i - 1)"
    ></button>
  </div>
</template>

<script setup>
defineProps({
  total: { type: Number, required: true },
  active: { type: Number, default: 0 },
})
defineEmits(['change'])
</script>
