import * as THREE from 'three'

const FROST = '#fafafa'

const ASCII_SETTINGS = {
  ramp: ".'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
  cellSize: 6,
  aspectComp: 0.55,
  fontScale: 1,
  contrast: 1.25,
  gamma: 0.85,
  color: FROST,
  opacity: 0.5,
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

export function setupGridAscii() {
  const asciiCanvas = document.querySelector('canvas[data-component="grid-canvas"]')
  if (!asciiCanvas) return null

  const gridSection = asciiCanvas.closest('.section.cc-on-grid')

  const ctx = asciiCanvas.getContext('2d')
  if (!ctx) return null

  const offscreen = document.createElement('canvas')
  const renderer = new THREE.WebGLRenderer({
    canvas: offscreen,
    antialias: false,
    alpha: false,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(1)

  const scene = new THREE.Scene()
  const camera = new THREE.Camera()

  const uniforms = {
    uTime: { value: 0 },
    uScale: { value: 2.55 },
    uIntensity: { value: 0.88 },
    uBase: { value: 0.05 },
    uAmp: { value: 0.35 },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uTint: { value: new THREE.Vector3(1, 1, 1) },
  }

  const material = new THREE.ShaderMaterial({
    uniforms,
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

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
  mesh.frustumCulled = false
  scene.add(mesh)

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
    const sectionRect = gridSection?.getBoundingClientRect()
    width = Math.max(1, Math.floor(canvasRect.width || sectionRect?.width || 1))
    height = Math.max(1, Math.floor(canvasRect.height || sectionRect?.height || 1))

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    asciiCanvas.width = Math.max(1, Math.floor(width * dpr))
    asciiCanvas.height = Math.max(1, Math.floor(height * dpr))
    asciiCanvas.style.width = `${width}px`
    asciiCanvas.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.textBaseline = 'top'

    cols = clamp(Math.floor(width / ASCII_SETTINGS.cellSize), 32, 220)
    cellW = width / cols
    cellH = cellW / ASCII_SETTINGS.aspectComp
    rows = clamp(Math.floor(height / cellH), 18, 140)

    if (target) target.dispose()
    target = new THREE.WebGLRenderTarget(cols, rows, {
      depthBuffer: false,
      stencilBuffer: false,
    })
    pixelBuffer = new Uint8Array(cols * rows * 4)

    uniforms.uResolution.value.set(width, height)
    renderer.setSize(cols, rows, false)
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
      material.dispose()
      mesh.geometry.dispose()
      renderer.dispose()
      return
    }

    uniforms.uTime.value = clock.getElapsedTime()

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

export function setupGridStackMouseFollow() {
  const stack = document.querySelector('[data-component="grid-stack"]')
  if (!stack) return null

  const section = stack.closest('.section.cc-on-grid') || stack
  const items = Array.from(stack.querySelectorAll('img, .grid_icon-preview'))
  if (!items.length) return null

  const centerIndex = (items.length - 1) * 0.5
  const maxX = 34
  const maxY = 24
  const isMobileLike = window.matchMedia('(hover: none), (pointer: coarse)').matches || window.innerWidth <= 940
  const hasSingleItem = items.length === 1

  const state = {
    tx: 0,
    ty: 0,
    x: 0,
    y: 0,
    active: false,
  }

  const loop = {
    angle: Math.random() * Math.PI * 2,
    speed: Math.PI * 2 / 3500,
    radiusX: maxX * 0.82,
    radiusY: maxY * 0.78,
    inView: false,
  }

  let rafId = 0
  let observer = null

  items.forEach((item) => {
    item.style.willChange = 'transform'
  })

  const influences = items.map((_, i) => {
    if (hasSingleItem) return 1
    return (i - centerIndex) * 0.36
  })

  const apply = () => {
    if (isMobileLike) {
      const canLoop = loop.inView && document.visibilityState === 'visible'
      if (canLoop) {
        loop.angle += loop.speed
        state.tx = Math.cos(loop.angle) * loop.radiusX
        state.ty = Math.sin(loop.angle) * loop.radiusY
      } else {
        state.tx = 0
        state.ty = 0
      }
    }

    state.x += (state.tx - state.x) * 0.14
    state.y += (state.ty - state.y) * 0.14

    items.forEach((item, i) => {
      const influence = influences[i]
      const x = state.x * influence * 1.05
      const y = state.y * influence * 0.78
      item.style.transform = `translate3d(${x}px, ${y}px, 0)`
    })

    rafId = requestAnimationFrame(apply)
  }

  const onMove = (event) => {
    if (event.pointerType === 'touch') return
    const rect = section.getBoundingClientRect()
    const nx = clamp((event.clientX - rect.left) / Math.max(rect.width, 1), 0, 1)
    const ny = clamp((event.clientY - rect.top) / Math.max(rect.height, 1), 0, 1)

    // Opposite direction for stacked feel:
    // cursor right => stack drifts left.
    state.tx = -(nx - 0.5) * 2 * maxX
    state.ty = -(ny - 0.5) * 2 * maxY
    state.active = true
  }

  const onLeave = () => {
    state.active = false
    state.tx = 0
    state.ty = 0
  }

  if (!isMobileLike) {
    section.addEventListener('pointermove', onMove, { passive: true })
    section.addEventListener('pointerleave', onLeave)
    window.addEventListener('blur', onLeave)
  } else {
    const isNearViewportCenter = () => {
      const rect = section.getBoundingClientRect()
      const viewportCenterY = window.innerHeight * 0.5
      return rect.top <= viewportCenterY && rect.bottom >= viewportCenterY
    }

    const rect = section.getBoundingClientRect()
    loop.inView = rect.bottom > 0 && rect.top < window.innerHeight && isNearViewportCenter()

    observer = new IntersectionObserver((entries) => {
      loop.inView = Boolean(entries[0]?.isIntersecting)
    }, {
      threshold: 0,
      rootMargin: '-40% 0px -40% 0px',
    })

    observer.observe(section)
  }

  rafId = requestAnimationFrame(apply)

  return {
    destroy() {
      if (rafId) cancelAnimationFrame(rafId)
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('blur', onLeave)
      observer?.disconnect()
    },
  }
}
