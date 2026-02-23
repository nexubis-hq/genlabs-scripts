import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsapModule from 'gsap'
import Lenis from 'lenis'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import GUI from 'lil-gui'
import { ScrollTrigger as ScrollTriggerModule } from 'gsap/ScrollTrigger'
import { tabDefinitions, defaultTabId } from './tabs.js'
import { setupTeamSectionAnimations } from './team.js'
import { setupFeaturesSectionAnimation } from '../features.js'

const isWebflowPreviewHost = location.hostname.includes('.webflow.io') || location.hostname.endsWith('webflow.io')
if (!isWebflowPreviewHost) {
  import('./style.css')
}

const gsap = window.gsap || gsapModule
const ScrollTrigger = window.ScrollTrigger || ScrollTriggerModule

if (window.__GENLABS_MAIN_BOOTED__) {
  throw new Error('GEN Labs main.js initialized more than once')
}
window.__GENLABS_MAIN_BOOTED__ = true

if (ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger)
}

let lenis = null

function setupLenis() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  lenis = new Lenis({
    duration: 1.0,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 1,
  })

  lenis.on('scroll', () => {
    ScrollTrigger?.update()
  })

  const raf = (time) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  window.__GENLABS_LENIS__ = lenis
}

setupLenis()

const moduleUrl = new URL(import.meta.url)

function resolveAssetUrl(path) {
  return new URL(path, moduleUrl).href
}

function pick(...selectors) {
  return document.querySelector(selectors.join(', '))
}

const dom = {
  panelHero: pick('.cc-hero', '.panel-hero'),
  panelUnder: pick('.cc-about', '.panel-under'),
  panelConverge: pick('.cc-benefits', '.cc-system', '.panel-converge'),
}

dom.underCopy = pick('[data-text="about-intro"]', '[data-text="about-into"]', '.under-copy', '.cc-about .h3.u-text-center:not(.u-text-primary)')
dom.underHighlight = pick('[data-text="about-outro"]', '.under-highlight', '.cc-about .u-text-primary')

const selectors = {
  heroTitle: '[data-text="hero-title"], .hero-title',
  panelHero: '.cc-hero, .panel-hero',
  panelUnder: '.cc-about, .panel-under',
  panelConverge: '.cc-benefits, .cc-system, .panel-converge',
  underCopy: '[data-text="about-intro"], [data-text="about-into"], .under-copy, .cc-about .h3.u-text-center:not(.u-text-primary)',
  underHighlight: '[data-text="about-outro"], .under-highlight, .cc-about .u-text-primary',
}

const stageTrigger = document.querySelector('#grid-stage') || document.querySelector('#grid-stage-scroll') || document.querySelector('#scroll-spacer') || document.body

if (isWebflowPreviewHost) {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  window.scrollTo(0, 0)
  window.addEventListener('load', () => {
    window.scrollTo(0, 0)
    requestAnimationFrame(() => window.scrollTo(0, 0))
  }, { once: true })
}



let asciiEnabled = true
console.log('ASCII enabled:', asciiEnabled)
let logoMaterial = null

let pivot = null
let logoLeft = null
let logoRight = null

const tabModelCache = new Map()
const tabModelRoot = new THREE.Group()
let activeTabModel = null
let activeTabId = null
let activeTabRotationSpeed = 0.16
let tabModelRequestToken = 0


/**
 * ASCII SETTINGS (client-facing knobs)
 */
const ASCII = {
  ramp: " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
  invert: false,

  cellSize: 5,        // "PIXELATION" (bigger = more pixelated)
  aspectComp: 0.55,   // keep this

  fontFamily: 'monospace',
  fontScale: 1.0,     // "FONT SIZE" multiplier

  contrast: 1.15,
  gamma: 0.9,


  bg: '#ffffff',
  fg: '#125fee',      // your blue ASCII look
}



/// -----------------------------
// GUI (ASCII controls)
// -----------------------------
const gui = new GUI({ title: 'ASCII' })
gui.hide()
let isGuiVisible = false

window.addEventListener('keydown', (event) => {
  if (event.repeat) return
  if (event.key.toLowerCase() !== 'g') return
  if (event.ctrlKey || event.metaKey || event.altKey) return

  const activeTag = document.activeElement?.tagName
  const isTyping = activeTag === 'INPUT' || activeTag === 'TEXTAREA' || document.activeElement?.isContentEditable
  if (isTyping) return

  isGuiVisible = !isGuiVisible
  if (isGuiVisible) gui.show()
  else gui.hide()
})

const guiParams = {
  pixelation: ASCII.cellSize,
  matrix: false,
  characters: ASCII.ramp,
  fontSize: Math.round(ASCII.fontScale * 58),
  invert: ASCII.invert,

  asciiColor: ASCII.fg,
  noiseTint: '#5491FF',
  logoColor: '#ffffff'
}

gui.addColor(guiParams, 'asciiColor')
  .name('ASCII COLOR')
  .onChange((v) => {
    ASCII.fg = v
  })


gui.add(guiParams, 'pixelation', 4, 24, 1).name('PIXELATION').onChange((v) => {
  ASCII.cellSize = v
  rebuildRenderTarget()
})



gui.add(guiParams, 'characters').name('CHARACTERS').onFinishChange((v) => {
  // Keep as-is (user can type any ramp)
  guiParams.characters = v
  ASCII.ramp = v
})


const viewParams = { ascii: true }

gui.add(viewParams, 'ascii')
  .name('ASCII MODE')
  .onChange((v) => {
    asciiEnabled = v

    // Show/hide the correct elements for YOUR pipeline
    asciiCanvas.style.display = v ? 'block' : 'none'
    glCanvas.style.display = v ? 'none' : 'block'
  })



/**
 * Base sizes
 */
const sizes = { width: window.innerWidth, height: window.innerHeight }

/**
 * ASCII Canvas (2D)
 */
const asciiCanvas = document.querySelector('#ascii')
if (!asciiCanvas) {
  throw new Error('Missing #ascii canvas in DOM')
}
const ctx = asciiCanvas.getContext('2d', { alpha: false })

function setCanvasSize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  // Backing buffer in REAL pixels
  asciiCanvas.width = Math.floor(sizes.width * dpr)
  asciiCanvas.height = Math.floor(sizes.height * dpr)

  // Layout size in CSS pixels
  asciiCanvas.style.width = `${sizes.width}px`
  asciiCanvas.style.height = `${sizes.height}px`

  // Draw in CSS pixel coords
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  ctx.fillStyle = ASCII.bg
  ctx.fillRect(0, 0, sizes.width, sizes.height)
  ctx.textBaseline = 'top'
}


setCanvasSize()

/**
 * Hidden WebGL canvas (offscreen rendering)
 * We render to a WebGLRenderTarget, not to the visible screen.
 */
const glCanvas = document.createElement('canvas')
const renderer = new THREE.WebGLRenderer({
  canvas: glCanvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance'
})

glCanvas.className = 'webgl'
document.body.appendChild(glCanvas)

glCanvas.style.position = 'fixed'
glCanvas.style.inset = '0'
glCanvas.style.width = '100%'
glCanvas.style.height = '100%'
glCanvas.style.display = 'none' // start hidden (ASCII starts on)


renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(sizes.width, sizes.height)
renderer.shadowMap.enabled = false
renderer.shadowMap.type = THREE.PCFSoftShadowMap


// -----------------------------
// Cursor + Coordinates overlay (HTML)
// -----------------------------
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
`

const cursorLabel = document.createElement('div')
cursorLabel.id = 'cursorLabel'
cursorLabel.style.cssText = `
  position: fixed;
  left: 0; top: 0;
  padding: 0;
  border-radius: 0;
  background: transparent;
  color: #1a1a1a;
  font: 12px/1 Consolas, "Courier New", monospace;
  letter-spacing: 0.2px;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  white-space: nowrap;
  text-shadow: 0 px 0 #1a1a1a;
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

const updateMouse = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
  mouse.active = true

  cursor.style.opacity = '1'
  cursorLabel.style.opacity = '1'
}

window.addEventListener('pointermove', updateMouse, { passive: true })
window.addEventListener('pointerdown', updateMouse, { passive: true })
window.addEventListener('pointerleave', () => {
  mouse.active = false
  cursor.style.opacity = '0'
  cursorLabel.style.opacity = '0'
})

// Damping / offsets
const cursorOffset = { x: 10, y: -24 } // label position relative to dot
const dotOffset = { x: 0, y: -14 }     // dot sits above the real cursor
let smoothX = window.innerWidth * 0.5
let smoothY = window.innerHeight * 0.5
const damping = 0.12 // 0.08–0.2 (higher = snappier)

const NAV_SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const navScrambleState = new WeakMap()

function runNavScramble(link) {
  const original = link.dataset.scrambleText || link.textContent.trim()
  link.dataset.scrambleText = original

  const previous = navScrambleState.get(link)
  if (previous?.tween) previous.tween.kill()

  const state = { progress: 0 }
  const revealStart = 0.32

  const tween = gsap.to(state, {
    progress: 1,
    duration: 0.55,
    ease: 'power2.out',
    onUpdate: () => {
      const normalized = Math.max(0, (state.progress - revealStart) / (1 - revealStart))
      const revealCount = Math.floor(original.length * normalized)
      let scrambled = ''

      for (let i = 0; i < original.length; i++) {
        const char = original[i]
        if (char === ' ') {
          scrambled += ' '
          continue
        }

        if (i < revealCount) {
          scrambled += char
          continue
        }

        const randomIndex = Math.floor(Math.random() * NAV_SCRAMBLE_CHARS.length)
        scrambled += NAV_SCRAMBLE_CHARS[randomIndex]
      }

      link.textContent = scrambled
    },
    onComplete: () => {
      link.textContent = original
      navScrambleState.set(link, { tween: null })
    },
  })

  navScrambleState.set(link, { tween })
}

function setupNavScramble() {
  const links = document.querySelectorAll('.nav-links a, .nav-link.w-nav-link')
  links.forEach((link) => {
    link.dataset.scrambleText = link.textContent.trim()

    const activate = () => {
      runNavScramble(link)
    }

    link.addEventListener('pointerenter', activate)
    link.addEventListener('focus', activate)
  })
}

setupNavScramble()

function setupConvergeHoverCards() {
  const panel = document.querySelector(selectors.panelConverge)
  const leftLabel = panel?.querySelector('.converge-label-left')
  const rightLabel = panel?.querySelector('.converge-label-right')
  const leftCard = panel?.querySelector('.converge-hover-card-left')
  const rightCard = panel?.querySelector('.converge-hover-card-right')

  if (!panel || !leftLabel || !rightLabel || !leftCard || !rightCard) return

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

  const configs = [
    { label: leftLabel, card: leftCard, side: 'left' },
    { label: rightLabel, card: rightCard, side: 'right' },
  ]

  configs.forEach(({ label, card, side }) => {
    const state = {
      active: false,
      pointerX: window.innerWidth * 0.5,
      pointerY: window.innerHeight * 0.5,
    }

    const moveX = gsap.quickTo(card, 'x', {
      duration: 0.3,
      ease: 'power3.out',
    })
    const moveY = gsap.quickTo(card, 'y', {
      duration: 0.3,
      ease: 'power3.out',
    })

    const isLabelVisible = () => {
      const rect = label.getBoundingClientRect()
      if (rect.width < 8 || rect.height < 8) return false

      const panelOpacity = Number(gsap.getProperty(panel, 'opacity')) || 0
      const labelOpacity = Number(gsap.getProperty(label, 'opacity')) || 0
      return panelOpacity > 0.12 && labelOpacity > 0.12
    }

    const isPointerInsideLabelZone = (x, y) => {
      const rect = label.getBoundingClientRect()
      const paddingX = Math.max(24, rect.width * 0.3)
      const paddingY = Math.max(14, rect.height * 0.8)

      return (
        x >= rect.left - paddingX
        && x <= rect.right + paddingX
        && y >= rect.top - paddingY
        && y <= rect.bottom + paddingY
      )
    }

    const updatePosition = (immediate = false) => {
      const rect = label.getBoundingClientRect()
      const cardWidth = card.offsetWidth
      const cardHeight = card.offsetHeight

      const baseX = rect.left + rect.width * 0.5 - cardWidth * 0.5
      const baseY = rect.bottom + 18

      const normalizedX = rect.width > 0
        ? ((state.pointerX - rect.left) / rect.width) - 0.5
        : 0
      const normalizedY = rect.height > 0
        ? ((state.pointerY - rect.top) / rect.height) - 0.5
        : 0

      const driftX = normalizedX * 54
      const driftY = normalizedY * 20

      const edgePadding = 18
      const centerGap = 14
      const minX = side === 'left'
        ? edgePadding
        : window.innerWidth * 0.5 + centerGap
      const maxX = side === 'left'
        ? window.innerWidth * 0.5 - cardWidth - centerGap
        : window.innerWidth - cardWidth - edgePadding

      const targetX = clamp(baseX + driftX, minX, Math.max(minX, maxX))
      const targetY = clamp(
        baseY + driftY,
        rect.bottom + 8,
        window.innerHeight - cardHeight - edgePadding,
      )

      if (immediate) {
        gsap.set(card, { x: targetX, y: targetY })
        return
      }

      moveX(targetX)
      moveY(targetY)
    }

    const show = () => {
      if (state.active) return
      state.active = true
      gsap.to(card, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: true,
      })
      updatePosition(true)
    }

    const hide = () => {
      if (!state.active) return
      state.active = false
      gsap.to(card, {
        autoAlpha: 0,
        scale: 0.96,
        duration: 0.16,
        ease: 'power2.out',
        overwrite: true,
      })
    }

    window.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return
      state.pointerX = event.clientX
      state.pointerY = event.clientY

      if (!isLabelVisible() || !isPointerInsideLabelZone(state.pointerX, state.pointerY)) {
        hide()
        return
      }

      show()
      updatePosition()
    }, { passive: true })

    window.addEventListener('scroll', () => {
      if (!state.active) return
      if (!isLabelVisible() || !isPointerInsideLabelZone(state.pointerX, state.pointerY)) {
        hide()
        return
      }
      updatePosition(true)
    }, { passive: true })

    window.addEventListener('pointerleave', hide)

    window.addEventListener('resize', () => {
      if (!state.active) return
      updatePosition(true)
    })
  })

  gsap.set('.converge-hover-card', {
    autoAlpha: 0,
    scale: 0.96,
  })
}

setupConvergeHoverCards()

function splitElementWords(root) {
  if (!root || root.dataset.splitReady === 'true') {
    return root?.querySelectorAll('.split-word') || []
  }

  const words = []

  const splitTextNode = (node) => {
    const text = node.textContent
    if (!text) return

    const tokens = text.split(/(\s+)/)
    const fragment = document.createDocumentFragment()

    tokens.forEach((token) => {
      if (!token) return

      if (/^\s+$/.test(token)) {
        fragment.appendChild(document.createTextNode(token))
        return
      }

      const mask = document.createElement('span')
      mask.className = 'split-word-mask'

      const word = document.createElement('span')
      word.className = 'split-word'
      word.textContent = token

      mask.appendChild(word)
      fragment.appendChild(mask)
      words.push(word)
    })

    node.parentNode.replaceChild(fragment, node)
  }

  const walk = (node) => {
    if (!node) return
    if (node.nodeType === Node.TEXT_NODE) {
      splitTextNode(node)
      return
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return
    if (node.tagName === 'BR' || node.classList.contains('split-word-mask')) return

    const children = Array.from(node.childNodes)
    children.forEach(walk)
  }

  walk(root)
  root.dataset.splitReady = 'true'
  return words
}

const textWords = {
  hero: splitElementWords(document.querySelector(selectors.heroTitle)),
  underCopy: splitElementWords(dom.underCopy),
  underHighlight: splitElementWords(dom.underHighlight),
  convergeFinal: splitElementWords(document.querySelector('.converge-final')),
}

if (textWords.hero.length) {
  gsap.set(textWords.hero, { y: 50, opacity: 0 })
  gsap.to(textWords.hero, {
    y: 0,
    opacity: 1,
    duration: 0.9,
    ease: 'power3.out',
    delay: 0.12,
    stagger: 0.035,
  })
}

if (textWords.underCopy.length) {
  gsap.set(textWords.underCopy, { y: 50, opacity: 0 })
}
if (textWords.underHighlight.length) {
  gsap.set(textWords.underHighlight, { y: 50, opacity: 0 })
}
if (textWords.convergeFinal.length) {
  gsap.set(textWords.convergeFinal, { y: 42, opacity: 0 })
}

function setupExploreButton() {
  const exploreButton = document.querySelector('.explore-btn')
  if (!exploreButton) return

  const showThreshold = 24
  let isVisible = true

  const setExploreVisibility = (shouldShow, immediate = false) => {
    if (shouldShow === isVisible) return
    isVisible = shouldShow

    gsap.to(exploreButton, {
      autoAlpha: shouldShow ? 1 : 0,
      y: shouldShow ? 0 : 18,
      duration: immediate ? 0 : 0.24,
      ease: 'power2.out',
      overwrite: true,
    })

    exploreButton.classList.toggle('is-hidden', !shouldShow)
  }

  window.addEventListener('scroll', () => {
    setExploreVisibility(window.scrollY <= showThreshold)
  }, { passive: true })

  exploreButton.addEventListener('click', () => {
    setExploreVisibility(false)
    window.scrollTo({
      top: Math.round(window.innerHeight * 0.5),
      behavior: 'smooth',
    })
  })

  setExploreVisibility(window.scrollY <= showThreshold, true)
}

setupExploreButton()
setupTeamSectionAnimations({ gsap, ScrollTrigger })
setupFeaturesSectionAnimation({
  gsap,
  stageProgressRange: [0, 1],
  getStageProgress: () => {
    const stageProgress = window.__pageTL?.progress()
    if (typeof stageProgress !== 'number' || !Number.isFinite(stageProgress)) {
      return null
    }

    return stageProgress
  },
  getVisibilityProgress: () => {
    const stageProgress = window.__pageTL?.progress()
    if (typeof stageProgress !== 'number' || !Number.isFinite(stageProgress)) {
      return null
    }

    const underOutStart = window.__GENLABS_STAGE_TIMING__?.underOut ?? 0.58
    return (stageProgress - underOutStart) / Math.max(0.0001, 1 - underOutStart)
  },
})


/**
 * Scene
 */
const scene = new THREE.Scene()
scene.add(tabModelRoot)
tabModelRoot.position.set(5.2, -0.4, 0)

// Lights for shading depth (ASCII needs luminance variation)
const ambient = new THREE.AmbientLight(0xffffff, 0.25)
scene.add(ambient)

const keyLight = new THREE.DirectionalLight(0xffffff, 1.25)
keyLight.position.set(6, 4, 6) // right/top/front
keyLight.castShadow = false
keyLight.shadow.mapSize.set(1024, 1024)
keyLight.shadow.camera.near = 0.1
keyLight.shadow.camera.far = 50
keyLight.shadow.camera.left = -15
keyLight.shadow.camera.right = 15
keyLight.shadow.camera.top = 15
keyLight.shadow.camera.bottom = -15
scene.add(keyLight)

const fillLight = new THREE.DirectionalLight(0xffffff, 0.35)
fillLight.position.set(-6, 2, 4) // left fill
scene.add(fillLight)

const rimLight = new THREE.DirectionalLight(0xffffff, 0.6)
rimLight.position.set(0, 6, -6) // back/top rim
scene.add(rimLight)


// -----------------------------
// Fractal noise background (WebGL) — evolving/pulsing, aspect-correct
// -----------------------------
const bgClock = new THREE.Clock()

const bgUniforms = {
  uTime: { value: 0 },
  uScale: { value: 2.4 },
  uIntensity: { value: 0.85 },
  uBase: { value: 0.025 },
  uAmp: { value: 0.015 },
  uResolution: { value: new THREE.Vector2(sizes.width, sizes.height) },
  uTint: { value: new THREE.Vector3(1, 1, 1) }
}


const bgMaterial = new THREE.ShaderMaterial({
  uniforms: bgUniforms,
  depthWrite: false,
  depthTest: false,
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  fragmentShader: `
  uniform vec3 uTint;
    varying vec2 vUv;

    uniform float uTime;
    uniform float uScale;
    uniform float uIntensity;
    uniform float uBase;
    uniform float uAmp;
    uniform vec2 uResolution;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);

      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));

      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      // Aspect-correct UV (prevents "borders"/stretching on wide screens)
      vec2 uv = vUv - 0.5;
      uv.x *= uResolution.x / uResolution.y;

      float t = uTime;

      // Evolving (domain-warped) noise: changes in place, not panning
      vec2 warp = vec2(
        fbm(uv * (uScale * 0.75) + vec2(0.0, t * 0.10)),
        fbm(uv * (uScale * 0.75) + vec2(t * 0.10, 0.0))
      );

     // Second warp layer (breaks up repetition & removes "breathing" feel)
vec2 warp2 = vec2(
  fbm((uv + warp) * (uScale * 0.55) + vec2(t * 0.07, 0.0)),
  fbm((uv + warp) * (uScale * 0.55) + vec2(0.0, t * 0.09))
);

// Evolving field (no sinusoidal brightness pulsing)
float n = fbm((uv + 0.30 * warp + 0.18 * warp2) * uScale
              + vec2(t * 0.04, -t * 0.03));

// Keep your shaping/contrast
n = pow(n, 1.35) * uIntensity;


      // "Opacity" control (really brightness compression before ASCII)
      float v = uBase + n * uAmp;

      gl_FragColor = vec4(vec3(v) * uTint, 1.0);

    }
  `
})

// -----------------------------
// GUI: Noise strength (must be AFTER bgUniforms exists)
// -----------------------------
guiParams.noise = bgUniforms.uAmp.value

gui.add(guiParams, 'noise', 0.06, 0.3, 0.005)
  .name('NOISE')
  .onChange((v) => {
    bgUniforms.uAmp.value = v
  })


const bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMaterial)
bgMesh.frustumCulled = false
bgMesh.renderOrder = -1000
scene.add(bgMesh)


/**
 * Test object (we’ll swap this for GLB logo later)
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshNormalMaterial()
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

/**
 * GLTF Loader (for logo model)
 */

// Container for imported logo (so we can animate/scale easily)
const logoGroup = new THREE.Group()
scene.add(logoGroup)

// Temporary fallback while model loads (optional)
const fallback = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
)
logoGroup.add(fallback)

/**
 * Camera (MUST exist before GLTF load callback uses it)
 */
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 5000)
scene.add(camera)

// Safe initial camera position (prevents rendering from inside the origin)
camera.position.set(0, 0, 20)
camera.lookAt(0, 0, 0)


/**
 * Controls (MUST exist before GLTF load callback uses it)
 */
const controls = new OrbitControls(camera, asciiCanvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.enableRotate = false
controls.target.set(0, 0, 0)
controls.update()


/**
 * GLTF Loader (for logo model)
 */
const gltfLoader = new GLTFLoader()

function createTabPrimitive(primitive) {
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#ffffff'),
    metalness: 0.08,
    roughness: 0.62,
  })
  const group = new THREE.Group()

  if (primitive === 'stack-cylinders') {
    const cylinder = new THREE.CylinderGeometry(0.55, 0.55, 1.7, 32)
    const disk = new THREE.CylinderGeometry(0.75, 0.75, 0.12, 40)
    const bodyA = new THREE.Mesh(cylinder, material)
    const bodyB = new THREE.Mesh(cylinder, material)
    const cap = new THREE.Mesh(disk, material)
    bodyA.position.set(-0.75, 0.2, 0)
    bodyB.position.set(0.75, -0.2, 0)
    cap.position.set(0, 1.1, 0)
    group.add(bodyA, bodyB, cap)
    return group
  }

  if (primitive === 'slab-grid') {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        const slab = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.36, 0.9), material)
        slab.position.set(x * 0.95, y * 0.45, (x + y) * 0.06)
        group.add(slab)
      }
    }
    return group
  }

  if (primitive === 'diamond-cluster') {
    const gem = new THREE.OctahedronGeometry(0.66, 0)
    const a = new THREE.Mesh(gem, material)
    const b = new THREE.Mesh(gem, material)
    const c = new THREE.Mesh(gem, material)
    a.position.set(-0.9, -0.15, 0)
    b.position.set(0.85, -0.05, -0.05)
    c.position.set(0, 0.9, 0)
    group.add(a, b, c)
    return group
  }

  if (primitive === 'ring-array') {
    const ring = new THREE.TorusGeometry(0.55, 0.18, 18, 72)
    for (let i = 0; i < 4; i++) {
      const mesh = new THREE.Mesh(ring, material)
      mesh.position.set((i - 1.5) * 0.85, (i % 2 ? -0.35 : 0.35), i * -0.12)
      mesh.rotation.x = Math.PI * 0.5
      mesh.rotation.y = i * 0.45
      group.add(mesh)
    }
    return group
  }

  const fallback = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material)
  group.add(fallback)
  return group
}

function fitModelToTarget(model, targetSize = 5.5) {
  model.updateMatrixWorld(true)
  const box = new THREE.Box3().setFromObject(model)
  const size = box.getSize(new THREE.Vector3())
  const maxDim = Math.max(size.x, size.y, size.z)
  if (maxDim > 0) {
    const scale = targetSize / maxDim
    model.scale.setScalar(scale)
  }
  model.updateMatrixWorld(true)
  const centeredBox = new THREE.Box3().setFromObject(model)
  const center = centeredBox.getCenter(new THREE.Vector3())
  model.position.sub(center)
  model.updateMatrixWorld(true)
}

function getFrustumHalfWidthAtWorldZ(cameraRef, worldZ = 0) {
  const vFov = THREE.MathUtils.degToRad(cameraRef.fov)
  const distance = Math.max(0.001, Math.abs(cameraRef.position.z - worldZ))
  const halfHeight = Math.tan(vFov * 0.5) * distance
  return halfHeight * cameraRef.aspect
}

function cloneTabModel(sourceModel) {
  const clone = sourceModel.clone(true)
  clone.traverse((child) => {
    if (!child.isMesh) return
    child.castShadow = false
    child.receiveShadow = false
    child.material = child.material.clone()
    child.material.color = new THREE.Color('#ffffff')
    child.material.needsUpdate = true
  })
  return clone
}

function loadGLBScene(url) {
  return new Promise((resolve, reject) => {
    gltfLoader.load(
      url,
      (gltf) => resolve(gltf.scene),
      undefined,
      (error) => reject(error),
    )
  })
}

function getTabById(tabId) {
  return tabDefinitions.find((tab) => tab.id === tabId) || tabDefinitions[0]
}

async function buildTabModel(tab) {
  const { model } = tab
  if (model.type === 'primitive') {
    const primitive = createTabPrimitive(model.primitive)
    fitModelToTarget(primitive, model.targetSize)
    return primitive
  }

  const modelUrl = resolveAssetUrl(model.url)

  if (!tabModelCache.has(modelUrl)) {
    const loaded = await loadGLBScene(modelUrl)
    tabModelCache.set(modelUrl, loaded)
  }

  const cloned = cloneTabModel(tabModelCache.get(modelUrl))
  fitModelToTarget(cloned, model.targetSize)
  return cloned
}

function renderTabButtons() {
  const container = document.querySelector('#tab-buttons')
  if (!container) return

  container.innerHTML = ''

  tabDefinitions.forEach((tab) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'tab-button'
    button.dataset.tabId = tab.id
    button.textContent = tab.label

    const onActivate = () => {
      void setActiveTab(tab.id)
    }

    button.addEventListener('pointerenter', onActivate)
    button.addEventListener('focus', onActivate)
    button.addEventListener('click', onActivate)
    container.appendChild(button)
  })
}

function updateActiveTabButton(tabId) {
  document.querySelectorAll('.tab-button').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.tabId === tabId)
  })
}

async function setActiveTab(tabId) {
  const tab = getTabById(tabId)
  tabModelRequestToken += 1
  const currentToken = tabModelRequestToken

  try {
    const model = await buildTabModel(tab)
    if (currentToken !== tabModelRequestToken) return

    tabModelRoot.clear()
    tabModelRoot.position.fromArray(tab.model.position || [5.2, -0.4, 0])
    tabModelRoot.add(model)

    activeTabModel = model
    activeTabId = tab.id
    activeTabRotationSpeed = tab.rotationSpeed || 0.16

    controls.target.copy(tabModelRoot.position)
    controls.update()
    updateActiveTabButton(activeTabId)
  } catch (error) {
    console.error(`Failed to load tab model for ${tab.id}:`, error)
  }
}

const hasTabSwitcher = Boolean(document.querySelector('#tab-buttons'))

if (hasTabSwitcher) {
  renderTabButtons()
  void setActiveTab(defaultTabId)
}

gltfLoader.load(
  resolveAssetUrl('/models/logo_separate.glb'),
  (gltf) => {
    // Clear fallback / previous content
    logoGroup.clear()

    // Build hierarchy using the GLOBAL refs (no shadowing)
    pivot = new THREE.Group()
    logoLeft = new THREE.Group()
    logoRight = new THREE.Group()

    logoGroup.add(pivot)
    pivot.add(logoLeft, logoRight)

    const root = gltf.scene
    root.updateMatrixWorld(true)

    // Grab named objects (match these names to Blender)
    const leftObj = root.getObjectByName('Logo_L')
    const rightObj = root.getObjectByName('Logo_R')

    if (!leftObj || !rightObj) {
      console.log('Could not find Logo_L / Logo_R. Available objects:')
      root.traverse(o => { if (o.name) console.log(o.name) })
      return
    }

    // Detach from previous parent cleanly
    leftObj.removeFromParent()
    rightObj.removeFromParent()

    // Add into split groups
    logoLeft.add(leftObj)
    logoRight.add(rightObj)

    // Make sure transforms are current
    pivot.updateMatrixWorld(true)

    // ----- Center & scale the whole pivot -----
    const box = new THREE.Box3().setFromObject(pivot)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())

    // Center pivot contents at origin
    pivot.position.sub(center)

    // Scale to target size
    const maxDim = Math.max(size.x, size.y, size.z)
    const targetSize = 10
    const s = targetSize / maxDim
    pivot.scale.setScalar(s)

    pivot.updateMatrixWorld(true)

    // ----- Frame camera to the scaled pivot -----
    const box2 = new THREE.Box3().setFromObject(pivot)
    const size2 = box2.getSize(new THREE.Vector3())
    const maxDim2 = Math.max(size2.x, size2.y, size2.z)

    const fov = camera.fov * (Math.PI / 180)
    const distance = (maxDim2 / 2) / Math.tan(fov / 2)

    camera.position.set(0, maxDim2 * 0.2, distance * 1.4)
    camera.near = Math.max(0.01, distance / 100)
    camera.far = distance * 100
    camera.updateProjectionMatrix()

    controls.target.set(0, 0, 0)
    controls.update()

    // ----- Materials: ensure lighting affects both halves -----
    logoMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ffffff'),
      metalness: 0.1,
      roughness: 0.6
    })

    pivot.traverse((child) => {
      if (!child.isMesh) return
      child.castShadow = false
      child.receiveShadow = false

      const old = child.material
      child.material = logoMaterial

      // preserve maps if any
      if (old?.map) child.material.map = old.map
      if (old?.normalMap) child.material.normalMap = old.normalMap
      if (old?.roughnessMap) child.material.roughnessMap = old.roughnessMap
      if (old?.metalnessMap) child.material.metalnessMap = old.metalnessMap

      child.material.needsUpdate = true
    })

    const heroRotateTween = gsap.to(pivot.rotation, {
      y: `+=${Math.PI * 2}`,
      duration: 12,
      repeat: -1,
      ease: 'none',
    })

    // === CONVERGENCE LOGO (separate GLB) ===
    const convergePivot = new THREE.Group()
    const convergeLeft = new THREE.Group()
    const convergeRight = new THREE.Group()
    const convergeMaterials = []
    const convergeOpacity = { value: 0 }
    const applyConvergeOpacity = () => {
      for (const material of convergeMaterials) {
        material.opacity = convergeOpacity.value
      }
    }

    const CONVERGE_VIEWPORT_COVERAGE = 0.88
    const CONVERGE_SCALE_BOOST = 3.6
    const CONVERGE_MIN_SCALE_MULTIPLIER = 5.0
    const CONVERGE_ENTRY_SCALE_FACTOR = 0.42
    const CONVERGE_GROW_SCALE_FACTOR = 7.2
    const convergeBaseSize = new THREE.Vector3(1, 1, 1)
    let hasConvergeGeometry = false

    let convergeScale = s * 2.8

    const convergeScaleState = { value: CONVERGE_ENTRY_SCALE_FACTOR }
    const applyConvergeScale = () => {
      convergePivot.scale.setScalar(convergeScale * convergeScaleState.value)
    }

    const refreshConvergeScale = () => {
      if (!hasConvergeGeometry) return
      const frustumHalfWidth = getFrustumHalfWidthAtWorldZ(camera, 0)
      const frustumHalfHeight = frustumHalfWidth / Math.max(camera.aspect, 0.001)
      const fitByWidth = (frustumHalfWidth * 2 * CONVERGE_VIEWPORT_COVERAGE) / Math.max(convergeBaseSize.x, 0.001)
      const fitByHeight = (frustumHalfHeight * 2 * CONVERGE_VIEWPORT_COVERAGE) / Math.max(convergeBaseSize.y, 0.001)
      const fitScale = Math.min(fitByWidth, fitByHeight)
      convergeScale = Math.max(fitScale * CONVERGE_SCALE_BOOST, s * CONVERGE_MIN_SCALE_MULTIPLIER)
      applyConvergeScale()
    }
    window.__refreshConvergeScale = refreshConvergeScale

    logoGroup.add(convergePivot)
    convergePivot.add(convergeLeft, convergeRight)
    convergePivot.visible = false

    gltfLoader.load(
      resolveAssetUrl('/models/logo_split.glb'),
      (splitGltf) => {
        const splitRoot = splitGltf.scene
        splitRoot.updateMatrixWorld(true)

        const splitLeftObj = splitRoot.getObjectByName('clogo_L')
        const splitRightObj = splitRoot.getObjectByName('clogo_R')

        if (!splitLeftObj || !splitRightObj) {
          console.log('Could not find clogo_L / clogo_R. Available:')
          splitRoot.traverse(o => { if (o.name) console.log(o.name) })
          return
        }

        splitLeftObj.removeFromParent()
        splitRightObj.removeFromParent()
        convergeLeft.add(splitLeftObj)
        convergeRight.add(splitRightObj)

        convergePivot.updateMatrixWorld(true)
        const cBox = new THREE.Box3().setFromObject(convergePivot)
        const cSize = cBox.getSize(new THREE.Vector3())
        const cCenter = cBox.getCenter(new THREE.Vector3())
        convergePivot.position.sub(cCenter)
        convergeBaseSize.copy(cSize)
        hasConvergeGeometry = true
        refreshConvergeScale()

        convergePivot.traverse((child) => {
          if (!child.isMesh) return
          child.castShadow = false
          child.receiveShadow = false
          const material = logoMaterial.clone()
          material.transparent = true
          material.opacity = convergeOpacity.value
          material.needsUpdate = true
          convergeMaterials.push(material)
          child.material = material
        })

        convergeLeft.position.set(0, 0, 0)
        convergeRight.position.set(0, 0, 0)
        convergePivot.rotation.set(0, 0, 0)
        applyConvergeOpacity()
        convergePivot.visible = false

        // If this GLB resolves after scrolling, sync to current timeline position.
        if (window.__pageTL) {
          const p = window.__pageTL.progress()
          window.__pageTL.progress(0)
          window.__pageTL.progress(p)
        }
      },
      undefined,
      (err) => console.error('Failed to load convergence logo:', err)
    )

    // -----------------------------
    // MASTER scroll timeline
    // -----------------------------
    if (window.__pageTL) {
      window.__pageTL.scrollTrigger?.kill()
      window.__pageTL.kill()
      window.__pageTL = null
    }

    // IMPORTANT: reset positions explicitly
    logoLeft.position.set(0, 0, 0)
    logoRight.position.set(0, 0, 0)
    logoLeft.scale.set(1, 1, 1)
    logoRight.scale.set(1, 1, 1)
    convergeLeft.position.set(0, 0, 0)
    convergeRight.position.set(0, 0, 0)
    convergePivot.rotation.set(0, 0, 0)
    convergeScaleState.value = CONVERGE_ENTRY_SCALE_FACTOR
    applyConvergeScale()
    convergeOpacity.value = 0
    applyConvergeOpacity()
    convergePivot.visible = false
    pivot.visible = true
    pivot.rotation.set(0, 0, 0)
    pivot.scale.setScalar(s)

    pivot.updateMatrixWorld(true)
    const leftBounds = new THREE.Box3().setFromObject(logoLeft)
    const rightBounds = new THREE.Box3().setFromObject(logoRight)

    const leftSize = leftBounds.getSize(new THREE.Vector3())
    const rightSize = rightBounds.getSize(new THREE.Vector3())
    const averageHalfWidth = Math.max((leftSize.x + rightSize.x) * 0.5, size2.x * 0.35)

    const heroSplitLimitX = THREE.MathUtils.clamp(averageHalfWidth * 0.18, 0.38, 1.25)
    const heroSplitLimitY = THREE.MathUtils.clamp(heroSplitLimitX * 0.2, 0.05, 0.22)

    const heroOffscreenL = new THREE.Vector3(-heroSplitLimitX, -heroSplitLimitY, 0)
    const heroOffscreenR = new THREE.Vector3(heroSplitLimitX, heroSplitLimitY, 0)

    const TIMING = {
      heroSplitOut: 0.40,
      copySwapStart: 0.32,
      underOut: 0.58,
      convergeIn: 0.64,
      centralizedIn: 0.72,
      convergeFadeIn: 0.10,
      convergeGrowStart: 0.74,
      labelOut: 0.87,
      modelFadeOutStart: 0.955,
      modelFadeOut: 0.035,
      finalTextIn: 0.972,
    }

    window.__GENLABS_STAGE_TIMING__ = TIMING

    let heroSpinPaused = false

    const timelineConfig = ScrollTrigger
      ? {
        scrollTrigger: {
          trigger: stageTrigger,
          start: 'top top',
          end: () => `+=${window.innerHeight * 8}`,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const shouldPause = self.progress >= TIMING.convergeIn
            if (shouldPause === heroSpinPaused) return
            heroSpinPaused = shouldPause
            if (heroSpinPaused) heroRotateTween.pause()
            else heroRotateTween.resume()
          },
        }
      }
      : {}

    const tl = gsap.timeline(timelineConfig)


    // -----------------------------
    // TEXT TIMING (0–30% in, 50% switch, >50% out)
    // -----------------------------

    const hasConvergeLabels = Boolean(document.querySelector('.converge-label-left') && document.querySelector('.converge-label-right'))
    const hasConvergeCards = Boolean(document.querySelector('.converge-hover-card'))
    const hasConvergeFinalLine = Boolean(document.querySelector('.converge-final'))

    // --- initial states (bulletproof) ---
    gsap.set(selectors.panelHero, { autoAlpha: 1, y: 0 })
    gsap.set(selectors.panelUnder, { autoAlpha: 0, y: 40 })
    gsap.set(selectors.underCopy, { autoAlpha: 1 })
    gsap.set(selectors.underHighlight, { autoAlpha: 1 })
    gsap.set(selectors.panelConverge, { autoAlpha: 0 })
    if (hasConvergeLabels) gsap.set('.converge-label', { autoAlpha: 0, y: 18 })
    if (hasConvergeCards) gsap.set('.converge-hover-card', { autoAlpha: 0, scale: 0.96 })
    if (hasConvergeFinalLine) gsap.set('.converge-final', { autoAlpha: 0 })

    // 0% -> 15% : hero OUT (fully gone by 15%)
    tl.to(selectors.panelHero, {
      autoAlpha: 0,
      y: -50,
      ease: 'none',
      duration: 0.12
    }, 0.00)

    // 0% -> 30% : under panel IN + grid text readable
    tl.to(selectors.panelUnder, {
      autoAlpha: 1,
      y: 0,
      ease: 'none',
      duration: 0.22
    }, 0.00)

    if (textWords.underCopy.length) {
      tl.to(textWords.underCopy, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        duration: 0.16,
        stagger: 0.004,
      }, 0.01)
    }

    // 30% -> 50% : HOLD (do nothing)
    // (we create “hold” by simply not animating anything in this window)

    // Mid-scroll: highlight line appears beneath the main copy

    if (textWords.underHighlight.length) {
      tl.to(textWords.underHighlight, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        duration: 0.14,
        stagger: 0.01,
      }, TIMING.copySwapStart)
    }

    // Under panel exits before convergence sequence
    tl.to(selectors.panelUnder, {
      autoAlpha: 0,
      y: -40,
      ease: 'none',
      duration: 0.06
    }, TIMING.underOut)

    tl.set(selectors.panelUnder, {
      autoAlpha: 0,
    }, TIMING.convergeIn)

    // Convergence labels appear
    tl.to(selectors.panelConverge, {
      autoAlpha: 1,
      ease: 'none',
      duration: 0.02,
    }, TIMING.convergeIn)

    if (hasConvergeLabels) {
      tl.to('.converge-label', {
        autoAlpha: 0,
        y: 18,
        ease: 'none',
        duration: 0.001,
      }, TIMING.convergeIn)

      tl.to('.converge-label-left', {
        autoAlpha: 1,
        y: 0,
        ease: 'power2.out',
        duration: 0.08,
      }, TIMING.convergeIn)

      tl.to('.converge-label-right', {
        autoAlpha: 1,
        y: 0,
        ease: 'power2.out',
        duration: 0.08,
      }, TIMING.centralizedIn)
    }


    // Logo halves split outward during the hero phase
    tl.to(logoLeft.position, {
      x: heroOffscreenL.x, y: heroOffscreenL.y, z: heroOffscreenL.z,
      ease: 'none',
      duration: TIMING.heroSplitOut
    }, 0.0)

    tl.to(logoRight.position, {
      x: heroOffscreenR.x, y: heroOffscreenR.y, z: heroOffscreenR.z,
      ease: 'none',
      duration: TIMING.heroSplitOut
    }, 0.0)

    // Hero logo rotates 45deg as it goes off-frame
    tl.to(pivot.rotation, {
      z: Math.PI * 0.25,
      ease: 'power2.out',
      duration: 0.08,
    }, TIMING.underOut)

    // === CONVERGENCE LOGO: static split model fades in with labels ===
    const phaseHandoff = { value: 0 }
    tl.to(phaseHandoff, {
      value: 1,
      duration: 0.001,
      ease: 'none',
      onUpdate: () => {
        const useConvergenceLogo = phaseHandoff.value > 0.5
        pivot.visible = !useConvergenceLogo
        convergePivot.visible = useConvergenceLogo
      },
    }, TIMING.convergeIn)

    tl.to(convergeOpacity, {
      value: 1,
      ease: 'none',
      duration: TIMING.convergeFadeIn,
      onUpdate: applyConvergeOpacity,
    }, TIMING.convergeIn)

    const convergeGrowToFadeDuration = Math.max(0.001, TIMING.modelFadeOutStart - TIMING.convergeGrowStart)
    const convergeFadeScaleTarget = CONVERGE_GROW_SCALE_FACTOR * 1.35

    tl.to(convergeScaleState, {
      value: CONVERGE_GROW_SCALE_FACTOR,
      ease: 'power3.in',
      duration: convergeGrowToFadeDuration,
      onUpdate: applyConvergeScale,
    }, TIMING.convergeGrowStart)

    tl.to(convergeScaleState, {
      value: convergeFadeScaleTarget,
      ease: 'none',
      duration: Math.max(0.001, TIMING.modelFadeOut),
      onUpdate: applyConvergeScale,
    }, TIMING.modelFadeOutStart)

    tl.to({}, {
      duration: 0.001,
      onStart: () => {
        controls.target.set(0, 0, 0)
        controls.update()
        camera.lookAt(0, 0, 0)
      },
      onReverseComplete: () => {
        controls.target.set(0, 0, 0)
        controls.update()
        camera.lookAt(0, 0, 0)
      },
    }, TIMING.convergeIn)

    if (hasConvergeCards) {
      tl.to('.converge-hover-card', {
        autoAlpha: 0,
        scale: 0.96,
        ease: 'none',
        duration: 0.03,
        overwrite: true,
      }, TIMING.labelOut)
    }

    tl.to(convergeOpacity, {
      value: 0,
      ease: 'power2.out',
      duration: TIMING.modelFadeOut,
      onUpdate: applyConvergeOpacity,
    }, TIMING.modelFadeOutStart)

    // Final message reveal
    if (hasConvergeFinalLine) {
      tl.to('.converge-final', {
        autoAlpha: 1,
        ease: 'none',
        duration: 0.05,
      }, TIMING.finalTextIn)
    }

    if (textWords.convergeFinal.length) {
      tl.to(textWords.convergeFinal, {
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        duration: 0.08,
        stagger: 0.02,
      }, TIMING.finalTextIn)
    }

    window.__pageTL = tl
    ScrollTrigger?.refresh()

    if (activeTabId) {
      controls.target.copy(tabModelRoot.position)
      controls.update()
    }



  },
  undefined,
  (error) => console.error('Failed to load GLB:', error)
)



/**
 * GSAP test animation
 */
// gsap.to(logoGroup.rotation, {
//   y: Math.PI * 2,
//   duration: 6,
//   repeat: -1,
//   ease: 'none'
// })

/**
 * Offscreen render target (the “image” we convert to ASCII)
 */
let target = null
let pixelBuffer = null

function rebuildRenderTarget() {
  // Columns based on desired cell size (in CSS pixels)
  const cols = Math.max(20, Math.floor(sizes.width / ASCII.cellSize))

  // Cell width in CSS pixels
  const cellW = sizes.width / cols

  // Cell height compensates for tall characters
  // (aspectComp ~ glyphWidth/glyphHeight)
  const cellH = cellW / ASCII.aspectComp

  // Rows based on cell height
  const rows = Math.max(20, Math.floor(sizes.height / cellH))

  const w = cols
  const h = rows

  if (target) target.dispose()
  target = new THREE.WebGLRenderTarget(w, h, {
    depthBuffer: true,
    stencilBuffer: false
  })

  pixelBuffer = new Uint8Array(w * h * 4)

  // Store for renderASCII()
  rebuildRenderTarget.w = w
  rebuildRenderTarget.h = h
  rebuildRenderTarget.cellW = cellW
  rebuildRenderTarget.cellH = cellH
}
rebuildRenderTarget()

/**
 * Helpers: brightness shaping
 */
function applyContrast(v, c) {
  // v in [0..1]
  // Contrast around midpoint 0.5
  return THREE.MathUtils.clamp((v - 0.5) * c + 0.5, 0, 1)
}

function applyGamma(v, g) {
  return THREE.MathUtils.clamp(Math.pow(v, g), 0, 1)
}

function luminance(r, g, b) {
  // Standard perceptual luminance
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/**
 * ASCII render
 */
function renderASCII() {
  const w = rebuildRenderTarget.w
  const h = rebuildRenderTarget.h
  const ramp = ASCII.ramp
  const rampLen = ramp.length

  // Draw background
  ctx.fillStyle = ASCII.bg
  ctx.fillRect(0, 0, sizes.width, sizes.height)

  ctx.fillStyle = ASCII.fg


  // Each sampled pixel becomes one character.
  // We render characters spaced by a “cell size” based on cols.
  const cellH = rebuildRenderTarget.cellH

  // Make the font size follow the cell height (prevents squish)
  const fontPx = Math.max(8, Math.floor(cellH * ASCII.fontScale))
  ctx.font = `${fontPx}px ${ASCII.fontFamily}`

  ctx.textAlign = 'left'

  // Measure glyph width and scale X so the ASCII grid fills the viewport exactly
  const glyphW = ctx.measureText('M').width
  const scaleX = rebuildRenderTarget.cellW / glyphW

  // IMPORTANT: background fill should be unscaled
  // so do it BEFORE scaling, then scale only the text drawing
  ctx.save()
  ctx.scale(scaleX, 1)

  // Draw row by row (x is in "unscaled" coords, but scaleX makes it fit)
  for (let y = 0; y < h; y++) {
    let row = ''
    for (let x = 0; x < w; x++) {
      const yy = (h - 1 - y) // flip vertically
      const i = (yy * w + x) * 4


      const r = pixelBuffer[i] / 255
      const g = pixelBuffer[i + 1] / 255
      const b = pixelBuffer[i + 2] / 255

      let v = luminance(r, g, b)
      v = applyContrast(v, ASCII.contrast)
      v = applyGamma(v, ASCII.gamma)

      if (ASCII.invert) v = 1 - v

      const idx = Math.floor(v * (rampLen - 1))
      row += ramp[idx]
    }

    const lineH = Math.max(rebuildRenderTarget.cellH, fontPx * 1.05)
    ctx.fillText(row, 0, y * lineH)
  }

  ctx.restore()
  return
}

/**
 * Resize
 */
window.addEventListener('resize', () => {
  const tl = window.__pageTL
  const st = tl?.scrollTrigger || null
  const progressBeforeResize = st ? st.progress : null

  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  setCanvasSize()
  rebuildRenderTarget()

  bgUniforms.uResolution.value.set(sizes.width, sizes.height)

  window.__refreshConvergeScale?.()

  ScrollTrigger?.refresh()

  if (st && progressBeforeResize !== null) {
    const targetScroll = st.start + (st.end - st.start) * progressBeforeResize
    st.scroll(targetScroll)

    const refreshedProgress = st.progress
    tl.progress(0)
    tl.progress(refreshedProgress)
  }

})

/**
 * Animate loop
 */
let previousElapsedTime = 0
const tick = () => {
  const elapsedTime = bgClock.getElapsedTime()
  const deltaTime = elapsedTime - previousElapsedTime
  previousElapsedTime = elapsedTime

  if (activeTabModel) {
    activeTabModel.rotation.y += deltaTime * activeTabRotationSpeed
  }

  controls.update()
  bgUniforms.uTime.value = elapsedTime

  // Cursor overlay update (damped)
  if (mouse.active) {
    // target position (dot sits slightly above the real cursor)
    const targetX = mouse.x + dotOffset.x
    const targetY = mouse.y + dotOffset.y

    // damping (lerp)
    smoothX += (targetX - smoothX) * damping
    smoothY += (targetY - smoothY) * damping

    // dot follows smoothed position
    cursor.style.left = `${smoothX}px`
    cursor.style.top = `${smoothY}px`

    // label sits slightly to the right + above the dot
    cursorLabel.style.left = `${smoothX + cursorOffset.x}px`
    cursorLabel.style.top = `${smoothY + cursorOffset.y}px`

    // only show x/y
    cursorLabel.textContent = `x:${smoothX.toFixed(3)}  y:${smoothY.toFixed(3)}`

  }



  if (asciiEnabled) {
    // --- ASCII pipeline ---
    renderer.setRenderTarget(target)
    renderer.render(scene, camera)
    renderer.setRenderTarget(null)

    renderer.readRenderTargetPixels(target, 0, 0, target.width, target.height, pixelBuffer)
    renderASCII()
  } else {
    // --- Normal WebGL preview ---
    renderer.setRenderTarget(null)
    renderer.render(scene, camera)
  }

  requestAnimationFrame(tick)
}

tick()
