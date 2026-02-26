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

export function setupStatsGLB() {
  const canvas = document.querySelector('[data-component="stats-canvas"]')
  if (!canvas) {
    console.log('[Stats GLB] Canvas not found')
    return null
  }

  const statsSection = document.querySelector('.cc-stats')
  if (!statsSection) {
    console.log('[Stats GLB] Stats section not found')
    return null
  }

  let isLoaded = false
  let scene, camera, renderer, model

  const initThree = () => {
    const width = canvas.clientWidth || window.innerWidth
    const height = canvas.clientHeight || window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    // Renderer
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(dpr)

    // Scene
    scene = new THREE.Scene()

    // Camera
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 5)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1)
    dirLight.position.set(5, 5, 5)
    scene.add(dirLight)

    // Handle resize
    const handleResize = () => {
      const newWidth = canvas.clientWidth || window.innerWidth
      const newHeight = canvas.clientHeight || window.innerHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }
    window.addEventListener('resize', handleResize)

    return { handleResize }
  }

  const loadModel = () => {
    if (isLoaded) return
    isLoaded = true

    console.log('[Stats GLB] Loading model...')
    const { handleResize } = initThree()

    const loader = new GLTFLoader()
    loader.load(
      resolveAssetUrl('/models/earth.glb'),
      (gltf) => {
        model = gltf.scene

        // Center and scale model
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = (isMobile() ? 3 : 4) / maxDim

        model.position.sub(center)
        model.scale.setScalar(scale)
        model.position.y = isMobile() ? -0.2 : 0

        // Apply white material
        model.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xffffff,
              metalness: 0.1,
              roughness: 0.4,
            })
          }
        })

        scene.add(model)
        console.log('[Stats GLB] Model loaded and added to scene')

        // Start animation loop
        animate()
      },
      undefined,
      (error) => {
        console.error('[Stats GLB] Failed to load model:', error)
      }
    )
  }

  const animate = () => {
    if (!renderer || !scene || !camera) return

    requestAnimationFrame(animate)

    // Gentle rotation
    if (model) {
      model.rotation.y += 0.005
    }

    renderer.render(scene, camera)
  }

  // Use Intersection Observer to load when section comes into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoaded) {
          console.log('[Stats GLB] Section in view - loading model')
          loadModel()
          observer.disconnect()
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
    }
  )

  observer.observe(statsSection)
  console.log('[Stats GLB] Intersection Observer attached to stats section')

  return { observer }
}
