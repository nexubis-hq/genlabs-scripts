/**
 * Features tabs - simplified version without GLB models
 * Only handles button state management
 */

const SKY_BOURNE = '#5491ff'

function normalizeLabel(label) {
  return label
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

export function setupFeaturesTabs() {
  const list = document.querySelector('[data-component="features"]')
  if (!list) return null

  const buttons = Array.from(list.querySelectorAll('.system-tabs_btn'))
  if (!buttons.length) return null

  console.log(`[Features Tabs] Found ${buttons.length} buttons`)

  const setActiveButton = (activeButton) => {
    buttons.forEach((btn) => {
      const isActive = btn === activeButton
      btn.classList.toggle('is-active', isActive)
      btn.setAttribute('aria-pressed', String(isActive))
      btn.dataset.active = isActive ? 'true' : 'false'

      const item = btn.closest('.system-tabs_list-item')
      if (item) {
        item.classList.toggle('is-active', isActive)
        item.dataset.active = isActive ? 'true' : 'false'
      }
    })
  }

  // Set up button click handlers (just toggle state, no GLB loading)
  buttons.forEach((button) => {
    button.setAttribute('aria-pressed', 'false')
    button.dataset.active = 'false'
    button.addEventListener('click', () => {
      setActiveButton(button)
      console.log(`[Features Tabs] Activated: ${button.textContent}`)
    })
  })

  // Set default active button
  const defaultButton = buttons.find((button) => 
    normalizeLabel(button.textContent || '') === 'trading'
  ) || buttons[0]
  
  if (defaultButton) {
    setActiveButton(defaultButton)
  }

  // Sync Webflow tab state to our buttons (handles autoplay and tab clicks)
  const syncWithWebflowTabs = () => {
    const tabs = document.querySelectorAll('.tabs-link')
    if (!tabs.length) {
      console.log('[Features Tabs] No Webflow tabs found to sync')
      return
    }

    // Find button by tab name (matching text content)
    const findButtonByTabName = (tabName) => {
      const normalizedTabName = normalizeLabel(tabName)
      return buttons.find((btn) => {
        const btnText = normalizeLabel(btn.textContent || '')
        return btnText === normalizedTabName
      })
    }

    // Watch for Webflow tab changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'aria-selected') {
          const tab = mutation.target
          const isActive = tab.getAttribute('aria-selected') === 'true'
          const tabName = tab.dataset.tabLinkName || tab.textContent

          const matchingButton = findButtonByTabName(tabName)
          if (matchingButton && isActive) {
            // Only update if this button isn't already active
            if (!matchingButton.classList.contains('is-active')) {
              setActiveButton(matchingButton)
              console.log(`[Features Tabs] Synced from Webflow: ${tabName}`)
            }
          }
        }
      })
    })

    tabs.forEach((tab) => {
      observer.observe(tab, { attributes: true })
    })

    console.log(`[Features Tabs] Syncing with ${tabs.length} Webflow tabs`)

    return observer
  }

  const tabObserver = syncWithWebflowTabs()

  console.log('[Features Tabs] Setup complete (GLB loading removed)')

  return {
    buttons,
    setActiveButton,
    destroy() {
      tabObserver?.disconnect()
    },
  }
}
