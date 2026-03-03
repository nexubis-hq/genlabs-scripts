/**
 * Custom cursor with coordinate display and hover scaling.
 * Also wires GPU-smooth spotlight reveal for [data-spot] wrappers.
 * Desktop only - automatically disabled on mobile.
 */

const MOBILE_BREAKPOINT = 768

function isMobile() {
  return window.innerWidth <= MOBILE_BREAKPOINT
}

function computeCover(containerW, containerH, imgW, imgH) {
  const scale = Math.max(containerW / imgW, containerH / imgH)
  const bw = imgW * scale
  const bh = imgH * scale
  const offsetX = (containerW - bw) / 2
  const offsetY = (containerH - bh) / 2
  return { bw, bh, offsetX, offsetY }
}

function setupDesktopSpotlightReveal() {
  const wraps = Array.from(document.querySelectorAll('[data-spot]'))
  if (!wraps.length) return []

  const observers = []

  wraps.forEach((wrap) => {
    const img = wrap.querySelector('img')

    const radius = Number(wrap.dataset.radius ?? 160)
    const soft = Number(wrap.dataset.soft ?? 70)
    const hideOnLeave = (wrap.dataset.hideOnLeave ?? 'true') !== 'false'

    let spot = wrap.querySelector('.spotlight')
    if (!spot) {
      spot = document.createElement('div')
      spot.className = 'spotlight'
      spot.setAttribute('aria-hidden', 'true')
      wrap.appendChild(spot)
    }

    if (window.getComputedStyle(wrap).position === 'static') {
      wrap.style.position = 'relative'
    }

    wrap.style.overflow = wrap.style.overflow || 'hidden'
    wrap.style.touchAction = 'none'

    wrap.style.setProperty('--spot-soft', `${soft}%`)
    wrap.style.setProperty('--d', `${radius * 2}px`)

    spot.style.position = 'absolute'
    spot.style.left = '0'
    spot.style.top = '0'
    spot.style.width = 'var(--d)'
    spot.style.height = 'var(--d)'
    spot.style.pointerEvents = 'none'
    spot.style.willChange = 'transform'
    spot.style.transform = 'translate3d(var(--tx), var(--ty), 0)'
    spot.style.backgroundRepeat = 'no-repeat'
    spot.style.backgroundSize = 'var(--bw) var(--bh)'
    spot.style.backgroundPosition = 'var(--bpx) var(--bpy)'
    spot.style.webkitMaskImage = 'radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) calc(100% - var(--spot-soft)), rgba(255,255,255,0) 100%)'
    spot.style.maskImage = 'radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) calc(100% - var(--spot-soft)), rgba(255,255,255,0) 100%)'
    spot.style.webkitMaskRepeat = 'no-repeat'
    spot.style.maskRepeat = 'no-repeat'

    const setImgVar = () => {
      const url = img?.currentSrc || img?.src
      if (url) {
        spot.style.backgroundImage = `url("${url}")`
        return
      }

      const bg = window.getComputedStyle(wrap).backgroundImage
      if (bg && bg !== 'none') {
        spot.style.backgroundImage = bg
      }
    }

    if (img?.complete) {
      setImgVar()
    } else if (img) {
      img.addEventListener('load', setImgVar, { once: true })
    } else {
      setImgVar()
    }

    let cover = null
    const measure = () => {
      const rect = wrap.getBoundingClientRect()
      if (img?.naturalWidth && img?.naturalHeight) {
        cover = computeCover(rect.width, rect.height, img.naturalWidth, img.naturalHeight)
      } else {
        cover = {
          bw: rect.width,
          bh: rect.height,
          offsetX: 0,
          offsetY: 0,
        }
      }
      wrap.style.setProperty('--bw', `${cover.bw}px`)
      wrap.style.setProperty('--bh', `${cover.bh}px`)
    }

    const setActive = (on) => {
      wrap.dataset.active = on ? 'true' : 'false'
      if (on) {
        spot.style.opacity = '1'
        spot.style.transition = 'opacity 60ms ease'
      } else {
        spot.style.opacity = '0'
        spot.style.transition = 'opacity 160ms ease'
      }
    }

    let pending = false
    let px = 0
    let py = 0

    const apply = () => {
      pending = false
      if (!cover) return

      const tx = px - radius
      const ty = py - radius
      wrap.style.setProperty('--tx', `${tx}px`)
      wrap.style.setProperty('--ty', `${ty}px`)

      const bpx = cover.offsetX - tx
      const bpy = cover.offsetY - ty
      wrap.style.setProperty('--bpx', `${bpx}px`)
      wrap.style.setProperty('--bpy', `${bpy}px`)
    }

    const queue = () => {
      if (pending) return
      pending = true
      requestAnimationFrame(apply)
    }

    let lastClientX = null
    let lastClientY = null

    const updateFromPointer = (clientX, clientY) => {
      lastClientX = clientX
      lastClientY = clientY
      const rect = wrap.getBoundingClientRect()
      const inside = clientX >= rect.left
        && clientX <= rect.right
        && clientY >= rect.top
        && clientY <= rect.bottom

      if (!inside) {
        if (hideOnLeave) setActive(false)
        return
      }

      px = Math.min(rect.width, Math.max(0, clientX - rect.left))
      py = Math.min(rect.height, Math.max(0, clientY - rect.top))
      setActive(true)
      queue()
    }

    const onWindowMove = (ev) => {
      updateFromPointer(ev.clientX, ev.clientY)
    }

    const onWindowScroll = () => {
      if (lastClientX == null || lastClientY == null) return
      updateFromPointer(lastClientX, lastClientY)
    }

    window.addEventListener('pointermove', onWindowMove, { passive: true })
    window.addEventListener('mousemove', onWindowMove, { passive: true })
    window.addEventListener('scroll', onWindowScroll, { passive: true })

    setActive(!hideOnLeave)

    const onReady = () => {
      measure()
      const rect = wrap.getBoundingClientRect()
      px = rect.width / 2
      py = rect.height / 2
      queue()
    }

    if (img?.complete) {
      onReady()
    } else if (img) {
      img.addEventListener('load', onReady, { once: true })
    } else {
      onReady()
    }

    const ro = new ResizeObserver(() => {
      measure()
      queue()
      if (lastClientX != null && lastClientY != null) {
        updateFromPointer(lastClientX, lastClientY)
      }
    })
    ro.observe(wrap)
    observers.push(ro)
  })

  return observers
}

export function setupCustomCursor() {
  if (isMobile()) return null

  const cursor = document.createElement('div')
  cursor.id = 'cursor'
  cursor.style.cssText = `
    position: fixed;
    left: 0; top: 0;
    width: 10px; height: 10px;
    border-radius: 999px;
    background: #5491ff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 2147483647;
    opacity: 0;
    transition: transform 0.15s ease-out, background-color 0.15s ease-out;
  `

  const cursorLabel = document.createElement('div')
  cursorLabel.id = 'cursorLabel'
  cursorLabel.style.cssText = `
    position: fixed;
    left: 0; top: 0;
    padding: 0;
    color: #1a1a1a;
    font: 12px/1 Consolas, "Courier New", monospace;
    letter-spacing: 0.2px;
    pointer-events: none;
    z-index: 2147483647;
    opacity: 0;
    white-space: nowrap;
    text-shadow: 0 1px 0 #ffffff;
    transition: color 0.15s ease-out, text-shadow 0.15s ease-out;
  `

  document.body.appendChild(cursor)
  document.body.appendChild(cursorLabel)

  const mouse = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5,
    active: false,
  }

  const dotOffset = { x: 0, y: -14 }
  const labelOffset = { x: 14, y: -24 }

  let smoothX = mouse.x
  let smoothY = mouse.y
  let labelSmoothX = mouse.x + labelOffset.x
  let labelSmoothY = mouse.y + labelOffset.y
  const damping = 0.12

  const updateMouse = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
    mouse.active = true

    cursor.style.opacity = '1'
    cursorLabel.style.opacity = '1'
    cursorLabel.textContent = `${Math.round(mouse.x)}, ${Math.round(mouse.y)}`
  }

  window.addEventListener('pointermove', updateMouse, { passive: true })
  window.addEventListener('pointerdown', updateMouse, { passive: true })
  window.addEventListener('pointerleave', () => {
    mouse.active = false
    cursor.style.opacity = '0'
    cursorLabel.style.opacity = '0'
  })

  const animate = () => {
    if (mouse.active) {
      const targetX = mouse.x + dotOffset.x
      const targetY = mouse.y + dotOffset.y
      smoothX += (targetX - smoothX) * damping
      smoothY += (targetY - smoothY) * damping
      cursor.style.left = `${smoothX}px`
      cursor.style.top = `${smoothY}px`

      const targetLabelX = mouse.x + labelOffset.x
      const targetLabelY = mouse.y + labelOffset.y
      labelSmoothX += (targetLabelX - labelSmoothX) * damping
      labelSmoothY += (targetLabelY - labelSmoothY) * damping
      cursorLabel.style.left = `${labelSmoothX}px`
      cursorLabel.style.top = `${labelSmoothY}px`
    }
    requestAnimationFrame(animate)
  }
  requestAnimationFrame(animate)

  const isInteractive = (el) => {
    if (!el) return false
    const tag = el.tagName.toLowerCase()
    const role = el.getAttribute('role')
    const clickableRoles = ['button', 'link', 'menuitem', 'tab', 'option']

    return tag === 'button'
      || tag === 'a'
      || tag === 'input'
      || tag === 'textarea'
      || tag === 'select'
      || el.onclick
      || clickableRoles.includes(role)
      || el.style.cursor === 'pointer'
      || window.getComputedStyle(el).cursor === 'pointer'
  }

  const expandCursor = () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2)'
  }

  const shrinkCursor = () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)'
  }

  document.addEventListener('mouseover', (e) => {
    if (isInteractive(e.target)) expandCursor()
  })

  document.addEventListener('mouseout', (e) => {
    if (isInteractive(e.target)) shrinkCursor()
  })

  const BLUE_SECTIONS = ['.section.cc-stats', '.navbar_menu', '#navbar_menu', '.w-nav-menu', '.nav-menu', '[data-collapse="medium"]']

  const isOverBlueSection = (el) => {
    if (!el) return false
    return BLUE_SECTIONS.some((selector) => {
      const sections = document.querySelectorAll(selector)
      return Array.from(sections).some((section) => section.contains(el))
    })
  }

  const setBlueSectionColors = () => {
    cursor.style.background = '#ffffff'
    cursorLabel.style.color = '#ffffff'
    cursorLabel.style.textShadow = '0 1px 2px rgba(0,0,0,0.5)'
  }

  const setDefaultColors = () => {
    cursor.style.background = '#5491ff'
    cursorLabel.style.color = '#1a1a1a'
    cursorLabel.style.textShadow = '0 1px 0 #ffffff'
  }

  document.addEventListener('mouseover', (e) => {
    if (isOverBlueSection(e.target)) setBlueSectionColors()
  })

  document.addEventListener('mouseout', (e) => {
    if (isOverBlueSection(e.target)) setDefaultColors()
  })

  const spotlightObservers = setupDesktopSpotlightReveal()

  return { cursor, cursorLabel, spotlightObservers }
}
