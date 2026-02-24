import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const SKY_BOURNE = '#5491ff'

const FEATURE_MODEL_MAP = {
  trading: 'trading.glb',
  payments: 'payements.glb',
  'financial rails': 'railways.glb',
  messaging: 'messaging.glb',
  privacy: 'security.glb',
  'social coordination': 'social.glb',
}

const ASCII = {
  ramp: " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
  cellSize: 6,
  aspectComp: 0.55,
  fontScale: 1,
  contrast: 1.2,
  gamma: 0.9,
  color: SKY_BOURNE,
  backgroundCutoff: 0.08,
  modelAlphaCutoff: 0.02,
}

const SHOW_BACKGROUND_NOISE = false

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function normalizeLabel(label) {
  return label
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

function resolveFeatureModelUrl(fileName) {
  const moduleOrigin = new URL(import.meta.url).origin
  return `${moduleOrigin}/models/features/${fileName}`
}

function fitModelToTarget(model, targetSize = 3.2) {
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

export function setupFeaturesTabs() {
  const canvas = document.querySelector('canvas[data-component="features-canvas"]')
  const list = document.querySelector('[data-component="features"]')
  if (!canvas || !list) return null

  const ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return null

  const buttons = Array.from(list.querySelectorAll('.system-tabs_btn'))
  if (!buttons.length) return null

  const glCanvas = document.createElement('canvas')
  const renderer = new THREE.WebGLRenderer({
    canvas: glCanvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setClearColor(0x000000, 0)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100)
  camera.position.set(0, 0.15, 6)

  const ambient = new THREE.AmbientLight(0xffffff, 0.45)
  const key = new THREE.DirectionalLight(0xffffff, 1.25)
  key.position.set(3.5, 3, 4.5)
  const rim = new THREE.DirectionalLight(0xffffff, 0.55)
  rim.position.set(-3, 2, -4)
  scene.add(ambient, key, rim)

  const bgUniforms = {
    uTime: { value: 0 },
    uScale: { value: 2.5 },
    uIntensity: { value: 0.88 },
    uBase: { value: 0 },
    uAmp: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) },
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
      uniform float uTime;
      uniform float uScale;
      uniform float uIntensity;
      uniform float uBase;
      uniform float uAmp;
      uniform vec2 uResolution;
      uniform vec3 uTint;

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

        float n = fbm((uv + 0.30 * warp + 0.18 * warp2) * uScale + vec2(t * 0.04, -t * 0.03));
        n = pow(n, 1.35) * uIntensity;
        float v = uBase + n * uAmp;

        gl_FragColor = vec4(vec3(v) * uTint, 1.0);
      }
    `,
  })

  if (SHOW_BACKGROUND_NOISE) {
    const bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMaterial)
    bgMesh.frustumCulled = false
    bgMesh.renderOrder = -1000
    scene.add(bgMesh)
  }

  const modelRoot = new THREE.Group()
  scene.add(modelRoot)

  const loader = new GLTFLoader()
  const modelCache = new Map()

  let activeModel = null
  let requestToken = 0
  let target = null
  let pixelBuffer = null
  let width = 1
  let height = 1
  let cols = 1
  let rows = 1
  let cellW = 1
  let cellH = 1

  const resize = () => {
    const rect = canvas.getBoundingClientRect()
    width = Math.max(1, Math.floor(rect.width))
    height = Math.max(1, Math.floor(rect.height))

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.max(1, Math.floor(width * dpr))
    canvas.height = Math.max(1, Math.floor(height * dpr))
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.textBaseline = 'top'

    camera.aspect = width / height
    camera.updateProjectionMatrix()

    cols = clamp(Math.floor(width / ASCII.cellSize), 28, 220)
    cellW = width / cols
    cellH = cellW / ASCII.aspectComp
    rows = clamp(Math.floor(height / cellH), 16, 140)

    if (target) target.dispose()
    target = new THREE.WebGLRenderTarget(cols, rows, {
      depthBuffer: true,
      stencilBuffer: false,
    })
    pixelBuffer = new Uint8Array(cols * rows * 4)

    renderer.setSize(cols, rows, false)
    bgUniforms.uResolution.value.set(width, height)
  }

  resize()
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvas)
  window.addEventListener('resize', resize)

  const loadModel = (url) => new Promise((resolve, reject) => {
    loader.load(url, (gltf) => resolve(gltf.scene), undefined, reject)
  })

  const setActiveModel = async (button) => {
    const label = normalizeLabel(button.textContent || '')
    const fileName = FEATURE_MODEL_MAP[label]
    if (!fileName) return

    buttons.forEach((btn) => btn.classList.toggle('is-active', btn === button))

    const token = ++requestToken
    const modelUrl = resolveFeatureModelUrl(fileName)

    try {
      if (!modelCache.has(modelUrl)) {
        const loaded = await loadModel(modelUrl)
        modelCache.set(modelUrl, loaded)
      }

      if (token !== requestToken) return

      const clone = modelCache.get(modelUrl).clone(true)
      clone.traverse((child) => {
        if (!child.isMesh) return
        child.castShadow = false
        child.receiveShadow = false
        child.material = child.material.clone()
        if (child.material.color) child.material.color.set('#ffffff')
      })

      fitModelToTarget(clone)
      modelRoot.clear()
      modelRoot.add(clone)
      activeModel = clone
    } catch (error) {
      console.error(`Failed to load feature model: ${fileName}`, error)
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      void setActiveModel(button)
    })
  })

  const defaultButton = buttons.find((button) => normalizeLabel(button.textContent || '') === 'trading') || buttons[0]
  void setActiveModel(defaultButton)

  const clock = new THREE.Clock()

  const renderAscii = () => {
    if (!pixelBuffer) return

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = ASCII.color

    const fontPx = Math.max(8, Math.floor(cellH * ASCII.fontScale))
    ctx.font = `${fontPx}px monospace`
    const glyphW = Math.max(1, ctx.measureText('M').width)
    const scaleX = cellW / glyphW

    ctx.save()
    ctx.scale(scaleX, 1)

    for (let y = 0; y < rows; y++) {
      let row = ''

      for (let x = 0; x < cols; x++) {
        const yy = rows - 1 - y
        const i = (yy * cols + x) * 4

        const r = pixelBuffer[i] / 255
        const g = pixelBuffer[i + 1] / 255
        const b = pixelBuffer[i + 2] / 255
        const a = pixelBuffer[i + 3] / 255

        if (a < ASCII.modelAlphaCutoff) {
          row += ' '
          continue
        }

        let v = luminance(r, g, b)
        v = applyContrast(v, ASCII.contrast)
        v = applyGamma(v, ASCII.gamma)

        if (v < ASCII.backgroundCutoff) {
          row += ' '
          continue
        }

        const idx = Math.floor(v * (ASCII.ramp.length - 1))
        row += ASCII.ramp[idx]
      }

      const lineH = Math.max(cellH, fontPx * 1.04)
      ctx.fillText(row, 0, y * lineH)
    }

    ctx.restore()
  }

  const tick = () => {
    if (!document.body.contains(canvas)) {
      resizeObserver.disconnect()
      window.removeEventListener('resize', resize)
      target?.dispose()
      renderer.dispose()
      return
    }

    if (SHOW_BACKGROUND_NOISE) {
      bgUniforms.uTime.value = clock.getElapsedTime()
    }
    renderer.setRenderTarget(target)
    renderer.render(scene, camera)
    renderer.setRenderTarget(null)
    renderer.readRenderTargetPixels(target, 0, 0, cols, rows, pixelBuffer)
    renderAscii()

    requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
  return {
    destroy() {
      resizeObserver.disconnect()
      window.removeEventListener('resize', resize)
      target?.dispose()
      renderer.dispose()
    },
  }
}
