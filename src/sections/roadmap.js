import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Roadmap section animations
 * Animates roadmap items from blur + scale to normal on scroll
 */

export function setupRoadmapAnimations() {
  const roadmapGrid = document.querySelector('.roadmap_grid')
  if (!roadmapGrid) {
    console.log('[Roadmap] Grid not found')
    return null
  }

  const items = roadmapGrid.querySelectorAll('.roadmap_item')
  if (!items.length) {
    console.log('[Roadmap] No items found')
    return null
  }

  console.log(`[Roadmap] Found ${items.length} items, setting up animations`)

  // Set initial state
  gsap.set(items, {
    filter: 'blur(8px)',
    scale: 1.125,
    opacity: 0.8,
  })

  // Create animations for each item with stagger
  const triggers = []

  items.forEach((item, index) => {
    const trigger = ScrollTrigger.create({
      trigger: item,
      start: 'top 85%',
      end: 'top 50%',
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress
        gsap.to(item, {
          filter: `blur(${8 * (1 - progress)}px)`,
          scale: 1.125 - (0.125 * progress),
          opacity: 0.8 + (0.2 * progress),
          duration: 0.1,
          ease: 'none',
          overwrite: true,
        })
      },
    })
    triggers.push(trigger)
  })

  console.log('[Roadmap] Animations setup complete')

  return {
    items,
    triggers,
    destroy() {
      triggers.forEach(t => t.kill())
    }
  }
}
