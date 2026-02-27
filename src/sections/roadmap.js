import gsap from 'gsap'

/**
 * Roadmap section animations
 * Animates roadmap items with blur on viewport entry
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

  console.log(`[Roadmap] Found ${items.length} items`)

  // Find timestamp containers to animate (parent of h4 and text)
  const timestampElements = roadmapGrid.querySelectorAll('[data-component="time-stamp"]')

  console.log(`[Roadmap] Found ${timestampElements.length} timestamp elements`)

  // Set initial state for items (blur only, no scale)
  gsap.set(items, {
    filter: 'blur(10px)',
    opacity: 0,
  })

  // Set initial state for timestamp containers (translate Y + fade)
  gsap.set(timestampElements, {
    y: 30,
    opacity: 0,
  })

  // Determine which custom property to animate based on viewport
  const isMobile = window.innerWidth <= 768
  const customProp = isMobile ? '--before-height' : '--before-width'
  
  // Set initial state for the line
  gsap.set(roadmapGrid, {
    [customProp]: '0%'
  })

  // Use Intersection Observer to trigger when grid enters viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('[Roadmap] Grid in view - starting animations')

          // Animate items with blur (1.5x duration: 0.9s)
          gsap.to(items, {
            filter: 'blur(0px)',
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
            stagger: 0.15,
          })

          // Animate timestamp containers (slide up + fade) (1.5x duration: 0.9s)
          gsap.to(timestampElements, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.15,
          })

          // Animate the line (1.5x duration: 1.8s)
          gsap.to(roadmapGrid, {
            [customProp]: '100%',
            duration: 1.8,
            ease: 'power2.inOut',
          })

          // Disconnect after triggering
          observer.disconnect()
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px',
    }
  )

  observer.observe(roadmapGrid)
  console.log('[Roadmap] Intersection Observer attached to grid')

  return {
    items,
    timestampElements,
    observer,
    destroy() {
      observer.disconnect()
    }
  }
}
