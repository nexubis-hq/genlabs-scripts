import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const WHITE = '#ffffff'

const ASCII_SETTINGS = {
  ramp: " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
  cellSize: 7,
  aspectComp: 0.55,
  fontScale: 1,
  contrast: 1.25,
  gamma: 0.86,
  color: WHITE,
  opacity: 0.92,
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

function fitModelToTarget(model, targetSize = 2.8) {
  model.updateMatrixWorld(true)
  const box = new THREE.Box3().setFromObject(model)
  const size = box.getSize(new THREE.Vector3())
  const maxDim = Math.max(size.x, size.y, size.z)
  if (maxDim > 0) {
    model.scale.setScalar(targetSize / maxDim)
  }

  model.updateMatrixWorld(true)
  const centeredBox = new THREE.Box3().setFromObject(model)
  const center = centeredBox.getCenter(new THREE.Vector3())
  model.position.sub(center)
}

function getResponsiveConfig(width) {
  const isMobile = width <= 767
  return {
    targetSize: isMobile ? 2.2 : 2.8,
    cameraZ: isMobile ? 6.8 : 6,
    cameraY: isMobile ? 0.08 : 0.14,
    cellSize: isMobile ? ASCII_SETTINGS.cellSize + 1 : ASCII_SETTINGS.cellSize,
  }
}

export function setupFooterAscii() {
  const asciiCanvas = document.querySelector('.section.cc-footer canvas[data-component="footer-canvas"]')
    || document.querySelector('canvas[data-component="footer-canvas"]')
  if (!asciiCanvas) return null

  const footerSection = asciiCanvas.closest('.section.cc-footer')
  const ctx = asciiCanvas.getContext('2d', { alpha: true })
  if (!ctx) return null

  const offscreen = document.createElement('canvas')
  const renderer = new THREE.WebGLRenderer({
    canvas: offscreen,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(1)
  renderer.setClearColor(0x000000, 0)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)

  const ambient = new THREE.AmbientLight(0xffffff, 0.44)
  const key = new THREE.DirectionalLight(0xffffff, 1.12)
  key.position.set(3.6, 2.8, 4.2)
  const rim = new THREE.DirectionalLight(0xffffff, 0.6)
  rim.position.set(-2.5, 1.8, -3.8)
  scene.add(ambient, key, rim)

  const smokeUniforms = {
    uTime: { value: 0 },
    uScale: { value: 2.5 },
    uIntensity: { value: 0.9 },
    uBase: { value: 0.08 },
    uAmp: { value: 0.115 },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uTint: { value: new THREE.Vector3(1, 1, 1) },
  }

  const smokeMaterial = new THREE.ShaderMaterial({
    uniforms: smokeUniforms,
    depthWrite: false,
    depthTest: false,
    transparent: true,
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

  const smokeMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), smokeMaterial)
  smokeMesh.frustumCulled = false
  smokeMesh.renderOrder = -1000
  scene.add(smokeMesh)

  const modelRoot = new THREE.Group()
  scene.add(modelRoot)

  const loader = new GLTFLoader()
  loader.load(
    (() => {
      const self = new URL(import.meta.url)
      const m = self.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//)
      return m ? `${m[1]}/models/logo_split.glb` : `${self.origin}/models/logo_split.glb`
    })(),
    (gltf) => {
      const model = gltf.scene.clone(true)
      model.traverse((child) => {
        if (!child.isMesh) return
        child.castShadow = false
        child.receiveShadow = false
        const mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(WHITE),
          metalness: 0.08,
          roughness: 0.62,
        })
        child.material = mat
      })

      fitModelToTarget(model)
      modelRoot.clear()
      modelRoot.add(model)
    },
    undefined,
    (error) => console.error('Failed to load footer GLB:', error),
  )

  let target = null
  let pixelBuffer = null
  let width = 1
  let height = 1
  let cols = 1
  let rows = 1
  let cellW = 1
  let cellH = 1

  const resize = () => {
    const canvasRect = asciiCanvas.getBoundingClientRect()
    const sectionRect = footerSection?.getBoundingClientRect()
    width = Math.max(1, Math.floor(canvasRect.width || sectionRect?.width || 1))
    height = Math.max(1, Math.floor(canvasRect.height || sectionRect?.height || 1))

    const responsive = getResponsiveConfig(width)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    asciiCanvas.width = Math.max(1, Math.floor(width * dpr))
    asciiCanvas.height = Math.max(1, Math.floor(height * dpr))
    asciiCanvas.style.width = `${width}px`
    asciiCanvas.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.textBaseline = 'top'

    camera.aspect = width / height
    camera.position.set(0, responsive.cameraY, responsive.cameraZ)
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()

    cols = clamp(Math.floor(width / responsive.cellSize), 24, 220)
    cellW = width / cols
    cellH = cellW / ASCII_SETTINGS.aspectComp
    rows = clamp(Math.floor(height / cellH), 18, 140)

    if (target) target.dispose()
    target = new THREE.WebGLRenderTarget(cols, rows, {
      depthBuffer: true,
      stencilBuffer: false,
    })
    pixelBuffer = new Uint8Array(cols * rows * 4)

    renderer.setSize(cols, rows, false)
    smokeUniforms.uResolution.value.set(width, height)

    if (modelRoot.children[0]) {
      fitModelToTarget(modelRoot.children[0], responsive.targetSize)
    }
  }

  resize()

  const observer = new ResizeObserver(resize)
  observer.observe(asciiCanvas)
  window.addEventListener('resize', resize)

  const clock = new THREE.Clock()

  const frame = () => {
    if (!document.body.contains(asciiCanvas)) {
      observer.disconnect()
      window.removeEventListener('resize', resize)
      target?.dispose()
      smokeMaterial.dispose()
      smokeMesh.geometry.dispose()
      renderer.dispose()
      return
    }

    const elapsed = clock.getElapsedTime()
    smokeUniforms.uTime.value = elapsed

    if (modelRoot.children[0]) {
      modelRoot.rotation.y = elapsed * 0.16
      modelRoot.rotation.x = Math.sin(elapsed * 0.35) * 0.08
    }

    renderer.setRenderTarget(target)
    renderer.render(scene, camera)
    renderer.setRenderTarget(null)
    renderer.readRenderTargetPixels(target, 0, 0, cols, rows, pixelBuffer)

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
    requestAnimationFrame(frame)
  }

  requestAnimationFrame(frame)
  return { resize }
}
