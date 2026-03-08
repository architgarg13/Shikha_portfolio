<template>
  <teleport to="body">
    <transition name="modal">
      <div
        v-if="show"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/75" @click="$emit('close')"></div>

        <!-- Card -->
        <div class="modal-card relative w-full max-w-[400px] bg-[#2a2a2a] rounded-lg overflow-hidden shadow-2xl">
          <!-- Header -->
          <div class="flex items-center justify-between px-6 pt-5 pb-4">
            <span class="text-white font-sans text-base">Compose new email with</span>
            <button
              class="text-body hover:text-white transition-colors text-xl leading-none"
              @click="$emit('close')"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          <!-- Options -->
          <div class="px-4 flex flex-col gap-2">
            <!-- Gmail (highlighted) -->
            <button
              class="flex items-center gap-3 w-full px-5 py-4 rounded-md bg-accent-gold text-surface font-sans text-[15px] hover:opacity-90 transition-opacity"
              @click="openEmail('gmail')"
            >
              <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Gmail in browser
            </button>

            <!-- Outlook -->
            <button
              class="flex items-center gap-3 w-full px-5 py-4 rounded-md bg-[#363636] text-white font-sans text-[15px] hover:bg-[#404040] transition-colors"
              @click="openEmail('outlook')"
            >
              <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Outlook in browser
            </button>

            <!-- Yahoo -->
            <button
              class="flex items-center gap-3 w-full px-5 py-4 rounded-md bg-[#363636] text-white font-sans text-[15px] hover:bg-[#404040] transition-colors"
              @click="openEmail('yahoo')"
            >
              <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Yahoo in browser
            </button>

            <!-- Default email -->
            <button
              class="flex items-center gap-3 w-full px-5 py-4 rounded-md bg-[#363636] text-white font-sans text-[15px] hover:bg-[#404040] transition-colors"
              @click="openEmail('default')"
            >
              <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 20h8M12 18v2" />
              </svg>
              Default email app
            </button>
          </div>

          <!-- Copy Row -->
          <div class="mx-4 mt-4 flex rounded-md overflow-hidden">
            <button
              class="flex items-center gap-2 px-5 py-4 bg-[#363636] text-white font-sans text-sm font-medium hover:bg-[#404040] transition-colors"
              @click="copyEmail"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              {{ copied ? 'Copied!' : 'Copy' }}
            </button>
            <div class="flex-1 flex items-center px-5 py-4 bg-[#2e2e2e] text-body font-sans text-sm">
              {{ email }}
            </div>
          </div>

          <!-- Footer -->
          <p class="text-center text-muted font-sans text-xs py-4">Powered by MailtoUI</p>

          <!-- Bottom gold accent line -->
          <div class="h-[3px] w-full bg-accent-gold"></div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  show: { type: Boolean, default: false },
})
defineEmits(['close'])

const email = 'sumitmishra0110@gmail.com'
const copied = ref(false)

function openEmail(provider) {
  const urls = {
    gmail: `https://mail.google.com/mail/?view=cm&to=${email}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`,
    yahoo: `https://compose.mail.yahoo.com/?to=${email}`,
    default: `mailto:${email}`,
  }
  if (provider === 'default') {
    window.location.href = urls.default
  } else {
    window.open(urls[provider], '_blank', 'noopener,noreferrer')
  }
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    console.warn('Clipboard not available')
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-active .modal-card,
.modal-leave-active .modal-card {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-card {
  transform: scale(0.95);
  opacity: 0;
}
.modal-leave-to .modal-card {
  transform: scale(0.95);
  opacity: 0;
}
</style>
