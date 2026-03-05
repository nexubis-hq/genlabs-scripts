export function setupNavAnimations(gsap) {
  if (!gsap) return null

  const navButton = document.querySelector('.navbar_menu-button.w-nav-button')
  const navMenu = document.querySelector('.navbar_menu.w-nav-menu')
  if (!navButton || !navMenu) return null

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let openTween = null
  let closeTween = null
  let wasOpen = null

  const getLinks = () => Array.from(document.querySelectorAll('.navbar_links-wrapper .navbar_link'))

  const clearLinks = () => {
    const links = getLinks()
    gsap.killTweensOf(navMenu)
    gsap.set(navMenu, { clearProps: 'opacity,visibility,transform,width,overflow,clipPath' })
    if (!links.length) return
    gsap.killTweensOf(links)
    gsap.set(links, { clearProps: 'opacity,visibility,transform' })
  }

  const isButtonVisible = () => {
    const style = window.getComputedStyle(navButton)
    return style.display !== 'none' && style.visibility !== 'hidden'
  }

  const shouldAnimate = () => isButtonVisible()

  const isOpen = () => {
    return navButton.classList.contains('w--open') || navMenu.classList.contains('w--open')
  }

  const animateOpen = () => {
    const links = getLinks()
    if (!links.length) return

    if (prefersReducedMotion.matches) {
      clearLinks()
      return
    }

    closeTween?.kill()
    openTween?.kill()
    gsap.set(links, { autoAlpha: 0, y: 18 })

    openTween = gsap.timeline({ defaults: { overwrite: true } })
      .to(links, {
        autoAlpha: 1,
        y: 0,
        delay: 0.1,
        duration: 1,
        ease: 'sine.out',
        stagger: 0.14,
      })
  }

  const animateClose = () => {
    const links = getLinks()
    if (!links.length) return

    if (prefersReducedMotion.matches) {
      clearLinks()
      return
    }

    openTween?.kill()
    closeTween?.kill()
    closeTween = gsap.timeline({ defaults: { overwrite: true } })
      .to(links, {
        autoAlpha: 0,
        y: 10,
        duration: 0.5,
        ease: 'sine.inOut',
        stagger: {
          each: 0.05,
          from: 'end',
        },
      })
  }

  const sync = (force = false) => {
    if (!shouldAnimate()) {
      wasOpen = isOpen()
      clearLinks()
      return
    }

    const open = isOpen()
    if (!force && open === wasOpen) return
    wasOpen = open

    if (open) animateOpen()
    else animateClose()
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'class') {
        sync()
        break
      }
    }
  })

  observer.observe(navButton, { attributes: true, attributeFilter: ['class'] })
  observer.observe(navMenu, { attributes: true, attributeFilter: ['class'] })

  const onResize = () => sync(true)
  const onPageShow = () => sync(true)
  window.addEventListener('resize', onResize, { passive: true })
  window.addEventListener('pageshow', onPageShow)

  sync(true)

  return {
    destroy() {
      observer.disconnect()
      openTween?.kill()
      closeTween?.kill()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pageshow', onPageShow)
      clearLinks()
    },
  }
}
