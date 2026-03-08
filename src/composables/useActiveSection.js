import { ref, onMounted, onUnmounted } from 'vue'

const sectionToNav = {
  intro: 'intro',
  about: 'about',
  expertise: 'about',
  works: 'works',
  testimonials: 'works',
  contact: 'contact',
}

export function useActiveSection() {
  const activeSection = ref('intro')
  let observer = null

  onMounted(() => {
    const sections = document.querySelectorAll('[data-section]')
    if (!sections.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section')
            if (id && sectionToNav[id]) {
              activeSection.value = sectionToNav[id]
            }
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '-56px 0px 0px 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { activeSection }
}
