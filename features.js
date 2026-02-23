import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const ASCII_DEFAULTS = {
  ramp: " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
  invert: false,
  cellSize: 5,
  aspectComp: 0.55,
  fontFamily: 'monospace',
  fontScale: 1,
  contrast: 1.15,
  gamma: 0.9,
  bg: '#ffffff',
  fg: '#125fee',
}

const FEATURE_PHASE = {
  enterEnd: 0.4,
  holdEnd: 0.44,
  mergeEnd: 0.92,
  rotateEnd: 0.975,
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function mix(from, to, progress) {
  return from + (to - from) * progress
}

function mapRange(value, start, end) {
  if (end <= start) return 0
  return clamp((value - start) / (end - start), 0, 1)
}

function normalizeRange(value, start, end) {
  if (end <= start) return 0
  return (value - start) / (end - start)
}

function easeOutCubic(value) {
  const inv = 1 - value
  return 1 - inv * inv * inv
}

function easeInCubic(value) {
  return value * value * value
}

function easeInOutCubic(value) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) * 0.5
}

function applyContrast(value, contrast) {
  return clamp((value - 0.5) * contrast + 0.5, 0, 1)
}

function applyGamma(value, gamma) {
  return clamp(Math.pow(value, gamma), 0, 1)
}

function luminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function getFrustumHalfWidthAtWorldZ(camera, worldZ = 0) {
  const fovRad = THREE.MathUtils.degToRad(camera.fov)
  const distance = Math.max(0.001, Math.abs(camera.position.z - worldZ))
  const halfHeight = Math.tan(fovRad * 0.5) * distance
  return halfHeight * camera.aspect
}

export function setupFeaturesSectionAnimation({
  gsap,
  canvasSelector = '#features',
  meshNames = { left: 'clogo_L', right: 'clogo_R' },
  modelUrl = '/models/logo_split.glb',
  stageProgressRange = [0.5, 1],
  getStageProgress = () => window.__pageTL?.progress() ?? null,
  getVisibilityProgress = null,
  visibilityProgressRange = [0, 1],
  useAsciiCrossfade = true,
  asciiOverrides = {},
} = {}) {
  if (!gsap) return null

  const canvas = document.querySelector(canvasSelector)
  if (!canvas) return null

  const asciiCanvas = document.querySelector('#ascii')

  const ASCII = {
    ...ASCII_DEFAULTS,
    ...asciiOverrides,
  }

  const ctx = canvas.getContext('2d', { alpha: false })
  if (!ctx) return null

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  canvas.style.opacity = '0'
  canvas.style.display = 'block'

  function setAsciiCanvasSize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    canvas.width = Math.floor(sizes.width * dpr)
    canvas.height = Math.floor(sizes.height * dpr)
    canvas.style.width = `${sizes.width}px`
    canvas.style.height = `${sizes.height}px`

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = ASCII.bg
    ctx.fillRect(0, 0, sizes.width, sizes.height)
    ctx.textBaseline = 'top'
  }

  setAsciiCanvasSize()

  const glCanvas = document.createElement('canvas')
  const renderer = new THREE.WebGLRenderer({
    canvas: glCanvas,
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance',
  })

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setSize(sizes.width, sizes.height)

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.01, 10000)
  scene.add(camera)

  const ambient = new THREE.AmbientLight(0xffffff, 0.28)
  const key = new THREE.DirectionalLight(0xffffff, 1.2)
  key.position.set(6, 4, 5)
  const fill = new THREE.DirectionalLight(0xffffff, 0.45)
  fill.position.set(-5, 3, 4)
  const rim = new THREE.DirectionalLight(0xffffff, 0.55)
  rim.position.set(0, 5, -5)
  scene.add(ambient, key, fill, rim)

  const bgUniforms = {
    uTime: { value: 0 },
    uScale: { value: 2.3 },
    uIntensity: { value: 0.86 },
    uBase: { value: 0.025 },
    uAmp: { value: 0.015 },
    uResolution: { value: new THREE.Vector2(sizes.width, sizes.height) },
    uTint: { value: new THREE.Vector3(1, 1, 1) },
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
      varying vec2 vUv;

      uniform vec3 uTint;
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
        float value = 0.0;
        float amplitude = 0.5;

        for (int i = 0; i < 5; i++) {
          value += amplitude * noise(p);
          p *= 2.0;
          amplitude *= 0.5;
        }

        return value;
      }

      void main() {
        vec2 uv = vUv - 0.5;
        uv.x *= uResolution.x / uResolution.y;

        float t = uTime;
        vec2 warp = vec2(
          fbm(uv * (uScale * 0.75) + vec2(0.0, t * 0.10)),
          fbm(uv * (uScale * 0.75) + vec2(t * 0.10, 0.0))
        );

        vec2 warp2 = vec2(
          fbm((uv + warp) * (uScale * 0.55) + vec2(t * 0.07, 0.0)),
          fbm((uv + warp) * (uScale * 0.55) + vec2(0.0, t * 0.09))
        );

        float field = fbm((uv + 0.30 * warp + 0.18 * warp2) * uScale + vec2(t * 0.04, -t * 0.03));
        field = pow(field, 1.35) * uIntensity;

        float shade = uBase + field * uAmp;
        gl_FragColor = vec4(vec3(shade) * uTint, 1.0);
      }
    `,
  })

  const bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMaterial)
  bgMesh.frustumCulled = false
  bgMesh.renderOrder = -1000
  scene.add(bgMesh)

  const logoGroup = new THREE.Group()
  const pivot = new THREE.Group()
  const logoLeft = new THREE.Group()
  const logoRight = new THREE.Group()

  logoGroup.add(pivot)
  pivot.add(logoLeft, logoRight)
  scene.add(logoGroup)

  const layout = {
    baseScale: 1,
    holdLeftX: -1,
    holdRightX: 1,
    holdLeftY: 0,
    holdRightY: 0,
    startLeftX: -2,
    startRightX: 2,
    cameraStartZ: 16,
    cameraEndZ: -8,
  }

  const modelState = {
    ready: false,
  }

  const modelMetrics = {
    maxDim: 1,
    depth: 1,
    leftWidth: 1,
    rightWidth: 1,
  }

  const loader = new GLTFLoader()
  const modelMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#ffffff'),
    metalness: 0.1,
    roughness: 0.58,
  })

  function captureBaselineMetrics() {
    logoLeft.position.set(0, 0, 0)
    logoRight.position.set(0, 0, 0)
    pivot.rotation.set(0, 0, 0)
    pivot.scale.setScalar(layout.baseScale)
    pivot.updateMatrixWorld(true)

    const bounds = new THREE.Box3().setFromObject(pivot)
    const size = bounds.getSize(new THREE.Vector3())

    const leftBounds = new THREE.Box3().setFromObject(logoLeft)
    const rightBounds = new THREE.Box3().setFromObject(logoRight)
    const leftSize = leftBounds.getSize(new THREE.Vector3())
    const rightSize = rightBounds.getSize(new THREE.Vector3())

    modelMetrics.maxDim = Math.max(size.x, size.y, size.z, 0.001)
    modelMetrics.depth = Math.max(size.z, 0.001)
    modelMetrics.leftWidth = Math.max(leftSize.x, 0.001)
    modelMetrics.rightWidth = Math.max(rightSize.x, 0.001)
  }

  function recalcLayout() {
    if (!modelState.ready) return

    const fovRad = THREE.MathUtils.degToRad(camera.fov)
    const fitDistance = (modelMetrics.maxDim * 0.5) / Math.tan(fovRad * 0.5)

    layout.cameraStartZ = fitDistance * 1.45
    layout.cameraEndZ = -Math.max(modelMetrics.maxDim * 2.6, fitDistance * 1.4)

    camera.position.set(0, 0, layout.cameraStartZ)
    camera.rotation.set(0, 0, 0)
    camera.near = 0.01
    camera.far = Math.max(2000, Math.abs(layout.cameraEndZ) * 4)
    camera.updateProjectionMatrix()

    const frustumHalfWidth = getFrustumHalfWidthAtWorldZ(camera, 0)
    const edgeMargin = Math.max(0.01, Math.min(0.05, frustumHalfWidth * 0.004))

    layout.startLeftX = -frustumHalfWidth - modelMetrics.leftWidth * 0.5 - edgeMargin
    layout.startRightX = frustumHalfWidth + modelMetrics.rightWidth * 0.5 + edgeMargin

    const inViewOffset = Math.max((modelMetrics.leftWidth + modelMetrics.rightWidth) * 0.28, frustumHalfWidth * 0.22)
    const yOffset = clamp(modelMetrics.maxDim * 0.05, 0.06, 0.34)

    layout.holdLeftX = -inViewOffset
    layout.holdRightX = inViewOffset
    layout.holdLeftY = -yOffset
    layout.holdRightY = yOffset
  }

  loader.load(
    modelUrl,
    (gltf) => {
      const root = gltf.scene
      root.updateMatrixWorld(true)

      const leftObject = root.getObjectByName(meshNames.left)
      const rightObject = root.getObjectByName(meshNames.right)

      if (!leftObject || !rightObject) {
        console.error(`[features] Missing meshes ${meshNames.left} / ${meshNames.right} in`, modelUrl)
        return
      }

      leftObject.removeFromParent()
      rightObject.removeFromParent()

      logoLeft.clear()
      logoRight.clear()
      logoLeft.add(leftObject)
      logoRight.add(rightObject)

      pivot.updateMatrixWorld(true)
      const initialBounds = new THREE.Box3().setFromObject(pivot)
      const initialSize = initialBounds.getSize(new THREE.Vector3())
      const initialCenter = initialBounds.getCenter(new THREE.Vector3())

      pivot.position.sub(initialCenter)

      const maxInitialDim = Math.max(initialSize.x, initialSize.y, initialSize.z, 0.001)
      layout.baseScale = 7.8 / maxInitialDim
      pivot.scale.setScalar(layout.baseScale)

      pivot.traverse((child) => {
        if (!child.isMesh) return
        child.castShadow = false
        child.receiveShadow = false
        child.material = modelMaterial
        child.material.needsUpdate = true
      })

      captureBaselineMetrics()
      modelState.ready = true
      recalcLayout()
      const currentProgress = readMotionProgress()
      if (typeof currentProgress === 'number') {
        applyAnimation(currentProgress)
      }
    },
    undefined,
    (error) => {
      console.error('[features] Failed to load split logo:', error)
    },
  )

  let target = null
  let pixelBuffer = null

  function rebuildRenderTarget() {
    const cols = Math.max(20, Math.floor(sizes.width / ASCII.cellSize))
    const cellW = sizes.width / cols
    const cellH = cellW / ASCII.aspectComp
    const rows = Math.max(20, Math.floor(sizes.height / cellH))

    const width = cols
    const height = rows

    if (target) target.dispose()

    target = new THREE.WebGLRenderTarget(width, height, {
      depthBuffer: true,
      stencilBuffer: false,
    })

    pixelBuffer = new Uint8Array(width * height * 4)

    rebuildRenderTarget.width = width
    rebuildRenderTarget.height = height
    rebuildRenderTarget.cellW = cellW
    rebuildRenderTarget.cellH = cellH
  }

  rebuildRenderTarget()

  function renderAsciiFrame() {
    const width = rebuildRenderTarget.width
    const height = rebuildRenderTarget.height

    ctx.fillStyle = ASCII.bg
    ctx.fillRect(0, 0, sizes.width, sizes.height)
    ctx.fillStyle = ASCII.fg

    const fontPx = Math.max(8, Math.floor(rebuildRenderTarget.cellH * ASCII.fontScale))
    ctx.font = `${fontPx}px ${ASCII.fontFamily}`
    ctx.textAlign = 'left'

    const glyphW = ctx.measureText('M').width || 1
    const scaleX = rebuildRenderTarget.cellW / glyphW

    ctx.save()
    ctx.scale(scaleX, 1)

    const ramp = ASCII.ramp
    const rampLength = ramp.length
    const lineHeight = Math.max(rebuildRenderTarget.cellH, fontPx * 1.05)

    for (let y = 0; y < height; y += 1) {
      let row = ''
      for (let x = 0; x < width; x += 1) {
        const yy = height - 1 - y
        const i = (yy * width + x) * 4

        const r = pixelBuffer[i] / 255
        const g = pixelBuffer[i + 1] / 255
        const b = pixelBuffer[i + 2] / 255

        let value = luminance(r, g, b)
        value = applyContrast(value, ASCII.contrast)
        value = applyGamma(value, ASCII.gamma)

        if (ASCII.invert) value = 1 - value

        const rampIndex = Math.floor(value * (rampLength - 1))
        row += ramp[rampIndex]
      }

      ctx.fillText(row, 0, y * lineHeight)
    }

    ctx.restore()
  }

  const visibilityState = {
    alpha: 0,
  }

  function applyAnimation(progress) {
    if (!modelState.ready) return

    const p = clamp(progress, 0, 1)

    let leftX = layout.startLeftX
    let rightX = layout.startRightX
    let leftY = layout.holdLeftY
    let rightY = layout.holdRightY

    if (p <= FEATURE_PHASE.enterEnd) {
      const t = mapRange(p, 0, FEATURE_PHASE.enterEnd)
      leftX = mix(layout.startLeftX, layout.holdLeftX, t)
      rightX = mix(layout.startRightX, layout.holdRightX, t)
    } else if (p <= FEATURE_PHASE.holdEnd) {
      leftX = layout.holdLeftX
      rightX = layout.holdRightX
    } else {
      const t = easeInOutCubic(mapRange(p, FEATURE_PHASE.holdEnd, FEATURE_PHASE.mergeEnd))
      leftX = mix(layout.holdLeftX, 0, t)
      rightX = mix(layout.holdRightX, 0, t)
      leftY = mix(layout.holdLeftY, 0, t)
      rightY = mix(layout.holdRightY, 0, t)
    }

    const rotationT = easeInOutCubic(mapRange(p, FEATURE_PHASE.mergeEnd, FEATURE_PHASE.rotateEnd))
    const throughT = easeInCubic(mapRange(p, FEATURE_PHASE.rotateEnd, 1))

    logoLeft.position.set(leftX, leftY, 0)
    logoRight.position.set(rightX, rightY, 0)

    pivot.rotation.set(0, 0, mix(0, Math.PI * 0.25, rotationT))
    pivot.scale.setScalar(layout.baseScale * mix(1, 1.35, throughT))

    camera.position.set(0, 0, mix(layout.cameraStartZ, layout.cameraEndZ, throughT))
    camera.rotation.set(0, 0, 0)
  }

  function computeVisibility(progress) {
    const fadeIn = progress >= 0 ? 1 : 0
    const fadeOut = 1 - mapRange(progress, 0.985, 1)
    return clamp(fadeIn * fadeOut, 0, 1)
  }

  function readNormalizedProgress(reader, range) {
    const externalProgress = reader?.()
    if (typeof externalProgress === 'number' && Number.isFinite(externalProgress)) {
      return normalizeRange(externalProgress, range[0], range[1])
    }

    return null
  }

  function readMotionProgress() {
    return readNormalizedProgress(getStageProgress, stageProgressRange)
  }

  function readVisibilityProgress() {
    if (typeof getVisibilityProgress === 'function') {
      return readNormalizedProgress(getVisibilityProgress, visibilityProgressRange)
    }

    return readMotionProgress()
  }

  const clock = new THREE.Clock()

  function tick() {
    bgUniforms.uTime.value = clock.getElapsedTime()

    const motionProgress = readMotionProgress()
    const visibilityProgress = readVisibilityProgress()
    const visibility = modelState.ready && typeof visibilityProgress === 'number'
      ? computeVisibility(visibilityProgress)
      : 0

    if (Math.abs(visibility - visibilityState.alpha) > 0.001) {
      visibilityState.alpha = visibility
      canvas.style.opacity = `${visibility}`
      if (asciiCanvas && useAsciiCrossfade) {
        asciiCanvas.style.opacity = `${1 - visibility}`
      }
    }

    if (modelState.ready && visibility > 0.001 && typeof motionProgress === 'number') {
      applyAnimation(motionProgress)

      renderer.setRenderTarget(target)
      renderer.render(scene, camera)
      renderer.setRenderTarget(null)

      renderer.readRenderTargetPixels(target, 0, 0, target.width, target.height, pixelBuffer)
      renderAsciiFrame()
    }

    requestAnimationFrame(tick)
  }

  tick()

  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(sizes.width, sizes.height)

    setAsciiCanvasSize()
    rebuildRenderTarget()
    bgUniforms.uResolution.value.set(sizes.width, sizes.height)

    recalcLayout()

    if (modelState.ready) {
      const currentProgress = readMotionProgress()
      if (typeof currentProgress === 'number') {
        applyAnimation(currentProgress)
      }
    }
  })

  return {
    canvas,
  }
}

export default setupFeaturesSectionAnimation
