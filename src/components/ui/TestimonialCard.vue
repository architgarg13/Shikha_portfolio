<template>
  <div class="testimonial-card p-8">
    <!-- Avatar + Name Row -->
    <div class="flex items-center gap-3 mb-5">
      <div class="w-12 h-12 rounded-full overflow-hidden bg-surface-card flex-shrink-0">
        <img
          v-if="hasImage"
          :src="testimonial.avatar"
          :alt="testimonial.name"
          class="w-full h-full object-cover"
          loading="lazy"
          @error="hasImage = false"
        />
        <div
          v-else
          class="w-full h-full flex items-center justify-center text-white font-sans font-bold text-sm bg-surface-nav"
        >
          {{ initials }}
        </div>
      </div>
      <div>
        <h4 class="text-white font-sans font-bold text-base leading-tight">{{ testimonial.name }}</h4>
        <p class="text-muted font-sans text-[13px] leading-tight mt-0.5">{{ testimonial.company }}</p>
      </div>
    </div>
    <!-- Body -->
    <p class="text-body font-sans text-[15px] leading-relaxed">{{ testimonial.body }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  testimonial: { type: Object, required: true },
})

const hasImage = ref(true)

const initials = computed(() => {
  return props.testimonial.name
    ?.split(' ')
    .map((w) => w?.[0])
    .filter(Boolean)
    .join('')
    .toUpperCase() ?? ''
})
</script>
