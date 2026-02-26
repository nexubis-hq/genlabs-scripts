/**
 * Navbar scroll state - adds 'scrolled' class when page is scrolled
 */

export function setupNavScroll() {
  const nav = document.querySelector('.nav')
  if (!nav) return

  const SCROLL_THRESHOLD = 20

  const updateScrollState = () => {
    const isScrolled = window.scrollY > SCROLL_THRESHOLD
    nav.classList.toggle('scrolled', isScrolled)
  }

  // Initial check
  updateScrollState()

  // Listen for scroll events
  window.addEventListener('scroll', updateScrollState, { passive: true })

  return { nav, threshold: SCROLL_THRESHOLD }
}
