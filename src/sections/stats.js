import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { frameObjectToView, createFramingResizeHandler } from '../utils/three-framing.js'

gsap.registerPlugin(ScrollTrigger)

const MOBILE_BREAKPOINT = 768

function isMobile() {
  return window.innerWidth <= MOBILE_BREAKPOINT
}

function resolveAssetUrl(url) {
  if (!url) return url
  if (/^https?:\/\//i.test(url)) return url
  const self = new URL(import.meta.url)
  const jsdelivrMatch = self.href.match(
    /^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//
  )
  const base = jsdelivrMatch ? jsdelivrMatch[1] : self.origin
  const normalized = url.startsWith('/') ? url : `/${url}`
  return `${base}${normalized}`
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function luminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function applyContrast(v, contrast) {
  return clamp((v - 0.5) * contrast + 0.5, 0, 1)
}

function applyGamma(v, gamma) {
  return clamp(Math.pow(v, gamma), 0, 1)
}

const ASCII_SETTINGS = {
  ramp: " .'`^\",:;Il!i<>~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
  cellSize: 8,
  aspectComp: 0.55,
  fontScale: 1,
  contrast: 1.25,
  gamma: 0.85,
  color: '#ffffff',
  opacity: 0.75,
}

export function setupStatsGLB() {
  const asciiCanvas = document.querySelector('[data-component="stats-canvas"]')
  if (!asciiCanvas) {
    console.log('[Stats ASCII] Canvas not found')
    return null
  }

  const statsSection = document.querySelector('.cc-stats')
  if (!statsSection) {
    console.log('[Stats ASCII] Stats section not found')
    return null
  }

  const ctx = asciiCanvas.getContext('2d', { alpha: true })
  if (!ctx) return null

  let isLoaded = false
  let isVisible = false
  let model = null
  let target = null
  let pixelBuffer = null
  let cols = 1
  let rows = 1
  let cellW = 1
  let cellH = 1
  let width = 1
  let height = 1

  // Offscreen WebGL renderer
  const offscreen = document.createElement('canvas')
  const renderer = new THREE.WebGLRenderer({
    canvas: offscreen,
    antialias: false,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(1)
  renderer.setClearColor(0x000000, 0)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)

  // Camera looks slightly downward so the top arc of the globe fills the frame.
  // Position is updated on resize to account for aspect ratio changes.
  camera.position.set(0, 6, 14)
  camera.lookAt(0, 0, 0)

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.0)
  keyLight.position.set(5, 5, 5)
  const rimLight = new THREE.DirectionalLight(0xffffff, 0.5)
  rimLight.position.set(-2, 3, -4)
  scene.add(ambientLight, keyLight, rimLight)

  // Measure size — walk up the DOM until we find a non-zero rect, then fall
  // back to window dimensions. The canvas and section may both have 0 height
  // when inside an opacity:0 sticky container (layout still computed, but
  // getBoundingClientRect can return 0 for elements with visibility:hidden or
  // inside a collapsed ancestor). offsetWidth/Height are reliable for layout.
  const getMeasuredSize = () => {
    // offsetWidth/Height ignore CSS transforms but respect layout — safe here
    let el = asciiCanvas
    let w = 0
    let h = 0
    while (el && el !== document.body) {
      if (el.offsetWidth > 1 && el.offsetHeight > 1) {
        w = el.offsetWidth
        h = el.offsetHeight
        break
      }
      el = el.parentElement
    }
    if (w < 2) w = window.innerWidth
    if (h < 2) h = window.innerHeight
    return { w: Math.max(1, Math.floor(w)), h: Math.max(1, Math.floor(h)) }
  }

  const resize = () => {
    const { w, h } = getMeasuredSize()
    width = w
    height = h

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    // Only write canvas backing-store attributes — do NOT observe this canvas
    asciiCanvas.width = Math.max(1, Math.floor(width * dpr))
    asciiCanvas.height = Math.max(1, Math.floor(height * dpr))
    asciiCanvas.style.width = `${width}px`
    asciiCanvas.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.textBaseline = 'top'

    cols = clamp(Math.floor(width / ASCII_SETTINGS.cellSize), 32, 180)
    cellW = width / cols
    cellH = cellW / ASCII_SETTINGS.aspectComp
    rows = clamp(Math.floor(height / cellH), 20, 120)

    if (target) target.dispose()
    target = new THREE.WebGLRenderTarget(cols, rows, {
      depthBuffer: true,
      stencilBuffer: false,
    })
    pixelBuffer = new Uint8Array(cols * rows * 4)

    renderer.setSize(cols, rows, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()

    // Camera sits above and behind, looking well downward so the arc
    // appears only at the very bottom of the frame.
    const aspect = width / height
    const camZ = 6 + aspect * 2
    const camY = 1 + aspect * 0.3
    camera.position.set(0, camY, camZ)
    camera.lookAt(0, -12, 0)
  }

  const loadModel = () => {
    if (isLoaded) return
    isLoaded = true

    console.log('[Stats ASCII] Loading earth model...')
    resize()

    const loader = new GLTFLoader()
    loader.load(
      resolveAssetUrl('/models/earth.glb'),
      (gltf) => {
        model = gltf.scene

        // Center the model at origin then scale so its diameter is wider than
        // the camera frustum — only the top arc will be visible at the bottom
        // of the frame, spanning edge-to-edge like the lottie arc.
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        // Scale wide enough to bleed well off both sides of the frame
        const targetSize = isMobile() ? 14 : 28
        const scale = targetSize / maxDim

        model.position.sub(center)
        model.scale.setScalar(scale)

        // Sink the model so only the very top sliver of the arc shows
        model.position.y = -(targetSize * 0.78)

        // Apply bright material for ASCII visibility
        model.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xffffff,
              metalness: 0.1,
              roughness: 0.3,
            })
          }
        })

        scene.add(model)
        console.log('[Stats ASCII] Model loaded, starting animation')

        // Start ASCII render loop
        animate()
      },
      undefined,
      (error) => {
        console.error('[Stats ASCII] Failed to load model:', error)
      }
    )
  }

  const clock = new THREE.Clock()

  const animate = () => {
    if (!document.body.contains(asciiCanvas)) {
      visibilityObserver.disconnect()
      window.removeEventListener('resize', onWindowResize)
      target?.dispose()
      renderer.dispose()
      return
    }

    // Pause rendering when section is not visible to save GPU
    if (!isVisible) {
      requestAnimationFrame(animate)
      return
    }

    const elapsed = clock.getElapsedTime()

    if (model) {
      model.rotation.y = elapsed * 0.15
    }

    // Render to offscreen target
    renderer.setRenderTarget(target)
    renderer.render(scene, camera)
    renderer.setRenderTarget(null)

    // Read pixels (WebGL buffer is Y-flipped: row 0 = bottom of viewport)
    renderer.readRenderTargetPixels(target, 0, 0, cols, rows, pixelBuffer)

    // Clear and draw ASCII
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = ASCII_SETTINGS.color
    ctx.globalAlpha = ASCII_SETTINGS.opacity

    const fontPx = Math.max(8, Math.floor(cellH * ASCII_SETTINGS.fontScale))
    ctx.font = `${fontPx}px monospace`
    const glyphW = Math.max(1, ctx.measureText('M').width)
    const scaleX = cellW / glyphW

    ctx.save()
    ctx.scale(scaleX, 1)

    // Draw all rows — the 3D camera framing keeps the arc at the bottom of frame
    // WebGL pixel buffer is Y-flipped: buffer row 0 = bottom of the render
    const lineH = Math.max(cellH, fontPx * 1.04)
    for (let drawY = 0; drawY < rows; drawY++) {
      // drawY 0 = top of canvas → buffer row (rows - 1) = top of render
      const bufferRow = rows - 1 - drawY
      let line = ''

      for (let x = 0; x < cols; x++) {
        const i = (bufferRow * cols + x) * 4
        const r = pixelBuffer[i] / 255
        const g = pixelBuffer[i + 1] / 255
        const b = pixelBuffer[i + 2] / 255

        let v = luminance(r, g, b)
        v = applyContrast(v, ASCII_SETTINGS.contrast)
        v = applyGamma(v, ASCII_SETTINGS.gamma)
        const idx = Math.floor(v * (ASCII_SETTINGS.ramp.length - 1))
        line += ASCII_SETTINGS.ramp[idx]
      }

      ctx.fillText(line, 0, drawY * lineH)
    }

    ctx.restore()
    ctx.globalAlpha = 1

    requestAnimationFrame(animate)
  }

  // Track visibility to pause/resume rendering and trigger initial load
  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting
        if (isVisible && !isLoaded) {
          console.log('[Stats ASCII] Section in view - loading model')
          loadModel()
        }
      })
    },
    {
      threshold: 0.05,
    }
  )

  visibilityObserver.observe(statsSection)
  console.log('[Stats ASCII] Intersection Observer attached to stats section')

  // Resize on window resize only — do NOT observe the canvas element itself
  // (that caused an infinite loop since we set canvas.width inside resize())
  const onWindowResize = () => {
    resize()
  }
  window.addEventListener('resize', onWindowResize)

  return { observer: visibilityObserver, resize }
}

/**
 * Mobile stats grid animation
 * Animates stats cards with blur + opacity stagger when entering viewport
 */
export function setupMobileStatsGridAnimation() {
  // Only run on mobile
  if (!isMobile()) return null

  const statsGrid = document.querySelector('[data-component="stats-grid"]')
  if (!statsGrid) {
    console.log('[Mobile Stats Grid] Grid element not found')
    return null
  }

  const statItems = statsGrid.querySelectorAll('.col')
  if (!statItems.length) {
    console.log('[Mobile Stats Grid] No stat items found')
    return null
  }

  console.log(`[Mobile Stats Grid] Found ${statItems.length} items`)

  // Set initial state: blur + invisible
  gsap.set(statItems, {
    filter: 'blur(10px)',
    opacity: 0,
    y: 20,
  })

  // Use Intersection Observer to trigger animation when in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('[Mobile Stats Grid] In view — animating items')

          // Animate all items with stagger
          gsap.to(statItems, {
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1,
          })

          // Disconnect after triggering
          observer.disconnect()
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -10% 0px',
    }
  )

  observer.observe(statsGrid)
  console.log('[Mobile Stats Grid] Intersection Observer attached')

  return {
    items: statItems,
    observer,
    destroy() {
      observer.disconnect()
    },
  }
}

/**
 * Stats Logo Globe - Three.js setup with framing
 * Loads logo.glb and positions it under the arc overlay
 */
export function setupStatsLogoGlobe() {
  const canvas = document.querySelector('.cc-stats canvas[data-component="stats-globe"]')
  if (!canvas) {
    console.log('[Stats Logo Globe] Canvas not found')
    return null
  }

  // Setup renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setClearColor(0x000000, 0)

  // Setup scene
  const scene = new THREE.Scene()

  // Setup camera
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  // Setup lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.0)
  keyLight.position.set(5, 5, 5)
  const rimLight = new THREE.DirectionalLight(0xffffff, 0.5)
  rimLight.position.set(-5, 3, -5)
  scene.add(ambientLight, keyLight, rimLight)

  // Load and frame the globe
  let globe = null
  let controls = null
  let resizeHandler = null

  const loader = new GLTFLoader()
  loader.load(
    resolveAssetUrl('/models/logo.glb'),
    (gltf) => {
      globe = gltf.scene

      // Apply white material
      globe.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.1,
            roughness: 0.4,
          })
        }
      })

      scene.add(globe)

      // Frame the object with 30% vertical offset (sits under arc)
      const framingData = frameObjectToView(camera, globe, controls, {
        padding: 1.2,        // 20% padding
        verticalOffset: 0.30, // 30% down from top (under arc)
        updateNearFar: true
      })

      console.log('[Stats Logo Globe] Framed:', framingData)

      // Setup resize handler
      resizeHandler = createFramingResizeHandler(camera, globe, controls, {
        padding: 1.2,
        verticalOffset: 0.30
      })
      window.addEventListener('resize', resizeHandler)

      // Start animation loop
      animate()
    },
    undefined,
    (error) => {
      console.error('[Stats Logo Globe] Failed to load:', error)
    }
  )

  // Animation loop
  const clock = new THREE.Clock()
  const animate = () => {
    if (!canvas.isConnected) {
      if (resizeHandler) window.removeEventListener('resize', resizeHandler)
      renderer.dispose()
      return
    }

    const elapsed = clock.getElapsedTime()

    // Gentle rotation
    if (globe) {
      globe.rotation.y = elapsed * 0.1
    }

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  return {
    scene,
    camera,
    renderer,
    destroy() {
      if (resizeHandler) window.removeEventListener('resize', resizeHandler)
      renderer.dispose()
    }
  }
}
