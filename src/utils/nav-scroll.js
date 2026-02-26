/**
 * Navbar scroll state - adds 'scrolled' class when page is scrolled
 * and 'is-on-blue' class when over blue sections
 */

const BLUE_SECTIONS = ['.section.cc-stats']

function isOverBlueSection(nav) {
  if (!nav) return false
  const navRect = nav.getBoundingClientRect()
  const navBottom = navRect.bottom

  return BLUE_SECTIONS.some(selector => {
    const sections = document.querySelectorAll(selector)
    return Array.from(sections).some(section => {
      const rect = section.getBoundingClientRect()
      // Check if nav overlaps with this section
      return navBottom > rect.top && navRect.top < rect.bottom
    })
  })
}

export function setupNavScroll() {
  const nav = document.querySelector('.nav')
  if (!nav) return

  const SCROLL_THRESHOLD = 20

  const updateScrollState = () => {
    const isScrolled = window.scrollY > SCROLL_THRESHOLD
    nav.classList.toggle('scrolled', isScrolled)

    // Check if over blue sections
    const isOnBlue = isOverBlueSection(nav)
    nav.classList.toggle('is-on-blue', isOnBlue)
  }

  // Initial check
  updateScrollState()

  // Listen for scroll events
  window.addEventListener('scroll', updateScrollState, { passive: true })

  // Also check on resize
  window.addEventListener('resize', updateScrollState, { passive: true })

  return { nav, threshold: SCROLL_THRESHOLD }
}
