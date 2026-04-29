/**
 * Navbar scroll state - adds 'scrolled' class when page is scrolled
 * and color classes when over colored sections (blue, dark, green)
 */

const SECTION_CONFIG = {
  blue: {
    selectors: ['.section.cc-stats', '.section.cc-resources'],
    className: 'is-on-blue'
  },
  dark: {
    selectors: ['.section.cc-on-grid', '.section.cc-team', '.section.cc-footer'],
    className: 'is-on-dark'
  },
  green: {
    selectors: ['.section.cc-roadmap'],
    className: 'is-on-green'
  }
}

function isOverSectionType(nav, selectors) {
  if (!nav) return false
  const navRect = nav.getBoundingClientRect()
  const navBottom = navRect.bottom

  return selectors.some(selector => {
    const sections = document.querySelectorAll(selector)
    return Array.from(sections).some(section => {
      const rect = section.getBoundingClientRect()
      // Check if nav overlaps with this section
      return navBottom > rect.top && navRect.top < rect.bottom
    })
  })
}

function findNav() {
  return document.querySelector('.nav')
    || document.querySelector('.navbar')
    || document.querySelector('.w-nav')
    || document.querySelector('[role="navigation"]')
}

export function setupNavScroll() {
  const nav = findNav()
  if (!nav) {
    console.warn('[nav-scroll] No nav found. Tried: .nav, .navbar, .w-nav, [role="navigation"]')
    return
  }

  console.log('[nav-scroll] Found nav:', nav.className)

  const SCROLL_THRESHOLD = 20

  const updateScrollState = () => {
    const isScrolled = window.scrollY > SCROLL_THRESHOLD
    nav.classList.toggle('scrolled', isScrolled)

    // Check each section type and toggle appropriate class
    Object.entries(SECTION_CONFIG).forEach(([type, config]) => {
      const isOverSection = isOverSectionType(nav, config.selectors)
      nav.classList.toggle(config.className, isOverSection)
    })
  }

  // Initial check — delay slightly so Webflow/CMS layout is settled
  requestAnimationFrame(() => {
    updateScrollState()
    // Double-check after a short delay for any late-rendered CMS content
    setTimeout(updateScrollState, 100)
  })

  // Listen for scroll events
  window.addEventListener('scroll', updateScrollState, { passive: true })

  // Also check on resize
  window.addEventListener('resize', updateScrollState, { passive: true })

  return { nav, threshold: SCROLL_THRESHOLD }
}
