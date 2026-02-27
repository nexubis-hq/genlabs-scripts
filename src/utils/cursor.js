/**
 * Custom cursor with coordinate display and hover scaling
 * Desktop only - automatically disabled on mobile
 */

const MOBILE_BREAKPOINT = 768

function isMobile() {
  return window.innerWidth <= MOBILE_BREAKPOINT
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
    z-index: 9999;
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
    z-index: 10000;
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
    nx: 0,
    ny: 0,
    active: false
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

  // Animation loop for smooth following
  const animate = () => {
    if (mouse.active) {
      // Dot position
      const targetX = mouse.x + dotOffset.x
      const targetY = mouse.y + dotOffset.y
      smoothX += (targetX - smoothX) * damping
      smoothY += (targetY - smoothY) * damping
      cursor.style.left = `${smoothX}px`
      cursor.style.top = `${smoothY}px`

      // Label position
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

  // Hover scaling on interactive elements
  const isInteractive = (el) => {
    if (!el) return false
    const tag = el.tagName.toLowerCase()
    const role = el.getAttribute('role')
    const clickableRoles = ['button', 'link', 'menuitem', 'tab', 'option']
    
    return tag === 'button' ||
           tag === 'a' ||
           tag === 'input' ||
           tag === 'textarea' ||
           tag === 'select' ||
           el.onclick ||
           clickableRoles.includes(role) ||
           el.style.cursor === 'pointer' ||
           window.getComputedStyle(el).cursor === 'pointer'
  }

  const expandCursor = () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2)'
  }

  const shrinkCursor = () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)'
  }

  document.addEventListener('mouseover', (e) => {
    if (isInteractive(e.target)) {
      expandCursor()
    }
  })

  document.addEventListener('mouseout', (e) => {
    if (isInteractive(e.target)) {
      shrinkCursor()
    }
  })

  // Change cursor color on blue sections and nav
  const BLUE_SECTIONS = ['.section.cc-stats', '.navbar_menu', '#navbar_menu', '.w-nav-menu', '.nav-menu', '[data-collapse="medium"]']
  
  const isOverBlueSection = (el) => {
    if (!el) return false
    // Check if element or any parent matches blue section selectors
    return BLUE_SECTIONS.some(selector => {
      const sections = document.querySelectorAll(selector)
      return Array.from(sections).some(section => section.contains(el))
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
    if (isOverBlueSection(e.target)) {
      setBlueSectionColors()
    }
  })

  document.addEventListener('mouseout', (e) => {
    if (isOverBlueSection(e.target)) {
      setDefaultColors()
    }
  })

  return { cursor, cursorLabel }
}
