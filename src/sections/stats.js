import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

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
  cellSize: 6,
  aspectComp: 0.55,
  fontScale: 1,
  contrast: 1.25,
  gamma: 0.85,
  color: '#fafafa',
  opacity: 0.9,
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

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.0)
  keyLight.position.set(5, 5, 5)
  const rimLight = new THREE.DirectionalLight(0xffffff, 0.5)
  rimLight.position.set(-2, 3, -4)
  scene.add(ambientLight, keyLight, rimLight)

  const resize = () => {
    const canvasRect = asciiCanvas.getBoundingClientRect()
    const sectionRect = statsSection?.getBoundingClientRect()
    width = Math.max(1, Math.floor(canvasRect.width || sectionRect?.width || 1))
    height = Math.max(1, Math.floor(canvasRect.height || sectionRect?.height || 1))

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
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

    // Adjust camera and model for responsive
    if (isMobile()) {
      camera.position.set(0, 0, 6)
    } else {
      camera.position.set(0, 0, 5)
    }
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

        // Center and scale
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const targetSize = isMobile() ? 2.2 : 3.0
        const scale = targetSize / maxDim

        model.position.sub(center)
        model.scale.setScalar(scale)

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
      observer.disconnect()
      window.removeEventListener('resize', resize)
      target?.dispose()
      renderer.dispose()
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

    // Read pixels
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

    for (let y = 0; y < rows; y++) {
      let line = ''

      for (let x = 0; x < cols; x++) {
        const yy = rows - 1 - y
        const i = (yy * cols + x) * 4
        const r = pixelBuffer[i] / 255
        const g = pixelBuffer[i + 1] / 255
        const b = pixelBuffer[i + 2] / 255

        let v = luminance(r, g, b)
        v = applyContrast(v, ASCII_SETTINGS.contrast)
        v = applyGamma(v, ASCII_SETTINGS.gamma)
        const idx = Math.floor(v * (ASCII_SETTINGS.ramp.length - 1))
        line += ASCII_SETTINGS.ramp[idx]
      }

      const lineH = Math.max(cellH, fontPx * 1.04)
      ctx.fillText(line, 0, y * lineH)
    }

    ctx.restore()
    ctx.globalAlpha = 1

    requestAnimationFrame(animate)
  }

  // Use Intersection Observer to load when section comes into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoaded) {
          console.log('[Stats ASCII] Section in view - loading model')
          loadModel()
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
    }
  )

  observer.observe(statsSection)
  console.log('[Stats ASCII] Intersection Observer attached to stats section')

  // Handle resize
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(asciiCanvas)
  window.addEventListener('resize', resize)

  return { observer, resize }
}
