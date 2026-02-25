const DEFAULT_CONFIG = {
  lines: { duration: 0.8, stagger: 0.08 },
  words: { duration: 0.6, stagger: 0.06 },
  chars: { duration: 0.4, stagger: 0.008 },
}

function inferSplitType(element) {
  const explicit = (element.dataset.splitType || element.dataset.split || '').trim().toLowerCase()
  if (explicit === 'lines' || explicit === 'words' || explicit === 'chars' || explicit === 'letters') {
    return explicit === 'letters' ? 'chars' : explicit
  }

  const tag = element.tagName.toLowerCase()
  if (tag === 'p') return 'words'
  return 'lines'
}

function getNumericDatasetValue(element, key, fallback) {
  const raw = element.dataset[key]
  const parsed = Number.parseFloat(raw)
  return Number.isFinite(parsed) ? parsed : fallback
}

function buildSplitTargets(element, splitType, SplitText) {
  const split = SplitText.create(element, {
    type: 'lines, words, chars',
    mask: 'lines',
    linesClass: 'line',
    wordsClass: 'word',
    charsClass: 'letter',
  })

  if (splitType === 'words') return split.words || []
  if (splitType === 'chars') return split.chars || []
  return split.lines || []
}

function prepareLineHighlight(targets) {
  targets.forEach((line) => {
    line.style.position = 'relative'
    line.style.display = 'inline-block'
    line.style.backgroundImage = 'linear-gradient(var(--_color---neutral--gray-matter), var(--_color---neutral--gray-matter))'
    line.style.backgroundRepeat = 'no-repeat'
    line.style.backgroundPosition = '0 100%'
    line.style.backgroundSize = '0% 100%'
    line.style.boxDecorationBreak = 'clone'
    line.style.webkitBoxDecorationBreak = 'clone'
    line.style.padding = '0.03em 0.18em 0.07em'
    line.style.margin = '0 0 0.08em'
  })
}

export function setupViewportSplitTextReveal(options = {}) {
  const gsap = options.gsap || window.gsap
  const ScrollTrigger = options.ScrollTrigger || window.ScrollTrigger
  const SplitText = window.SplitText
  const CustomEase = window.CustomEase

  if (!gsap || !ScrollTrigger || !SplitText) {
    return false
  }

  gsap.registerPlugin(ScrollTrigger, SplitText)

  if (CustomEase?.create) {
    CustomEase.create('osmo-ease', '0.625, 0.05, 0, 1')
    gsap.registerPlugin(CustomEase)
  }

  const elements = document.querySelectorAll('[data-split]:not([data-split-ignore="true"])')
  if (!elements.length) return true

  elements.forEach((element) => {
    if (element.dataset.splitInitialized === 'true') return

    const splitType = inferSplitType(element)
    const config = DEFAULT_CONFIG[splitType] || DEFAULT_CONFIG.lines
    const duration = getNumericDatasetValue(element, 'splitDuration', config.duration)
    const stagger = getNumericDatasetValue(element, 'splitStagger', config.stagger)
    const start = element.dataset.splitStart || 'top 85%'
    const once = element.dataset.splitOnce !== 'false'

    const targets = buildSplitTargets(element, splitType, SplitText)
    if (!targets.length) {
      element.dataset.splitInitialized = 'true'
      return
    }

    const withHighlight = splitType === 'lines' && element.dataset.splitHighlight === 'true'
    if (withHighlight) {
      prepareLineHighlight(targets)
    }

    gsap.fromTo(
      targets,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration,
        stagger,
        ease: 'osmo-ease',
        onComplete: () => {
          if (!withHighlight) return
          const bgDelay = getNumericDatasetValue(element, 'splitHighlightDelay', 0.02)
          gsap.to(targets, {
            backgroundSize: '100% 100%',
            duration: 0.34,
            stagger: 0.08,
            delay: bgDelay,
            ease: 'power2.out',
          })
        },
        scrollTrigger: {
          trigger: element,
          start,
          once,
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
        },
      },
    )

    element.dataset.splitInitialized = 'true'
  })

  ScrollTrigger.refresh()
  return true
}
