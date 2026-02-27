/**
 * Three.js Camera Framing Utilities
 * 
 * Functions for framing GLB objects in camera view with composition offsets.
 * Designed for the stats section globe positioned under an arc overlay.
 */

import * as THREE from 'three'

/**
 * Computes the ideal camera distance to fit an object in view
 * 
 * @param {THREE.Camera} camera - PerspectiveCamera
 * @param {THREE.Object3D} object - The object to frame
 * @param {number} padding - Padding factor (1.0 = tight fit, 1.2 = 20% padding)
 * @returns {number} Distance from camera to object center
 */
export function computeCameraDistance(camera, object, padding = 1.15) {
  // Get object bounding box
  const box = new THREE.Box3().setFromObject(object)
  const size = box.getSize(new THREE.Vector3())
  const center = box.getCenter(new THREE.Vector3())
  
  // Get the maximum dimension
  const maxDim = Math.max(size.x, size.y, size.z)
  
  // Calculate distance based on FOV
  // For PerspectiveCamera: distance = (maxDim / 2) / tan(FOV / 2)
  const fovRad = (camera.fov * Math.PI) / 180
  const distance = (maxDim / 2) / Math.tan(fovRad / 2) * padding
  
  return { distance, center, size, maxDim }
}

/**
 * Applies vertical composition offset to position object lower in viewport
 * 
 * @param {THREE.Camera} camera - The camera to position
 * @param {THREE.OrbitControls} controls - OrbitControls instance
 * @param {THREE.Vector3} targetCenter - Center of the object
 * @param {number} distance - Distance from camera to object
 * @param {number} offsetPercent - How much to offset (0.25 = 25% down)
 * @param {number} aspect - Screen aspect ratio
 */
export function applyVerticalCompositionOffset(
  camera, 
  controls, 
  targetCenter, 
  distance, 
  offsetPercent = 0.28,
  aspect = window.innerWidth / window.innerHeight
) {
  // Calculate the visible height at the target distance
  const fovRad = (camera.fov * Math.PI) / 180
  const visibleHeight = 2 * Math.tan(fovRad / 2) * distance
  
  // Calculate offset (positive Y moves object down in viewport)
  const offsetY = visibleHeight * offsetPercent
  
  // Position camera above and back from target
  // We offset the target point, not the camera, to maintain view direction
  camera.position.set(
    targetCenter.x,
    targetCenter.y + offsetY,
    targetCenter.z + distance
  )
  
  // Look at the target center (this keeps the object centered horizontally)
  camera.lookAt(targetCenter)
  
  // Update OrbitControls target to match
  if (controls) {
    controls.target.copy(targetCenter)
    controls.update()
  }
  
  return { offsetY, visibleHeight }
}

/**
 * Main framing function - positions camera to frame object with composition offset
 * 
 * @param {THREE.PerspectiveCamera} camera 
 * @param {THREE.Object3D} object - The GLB/GLTF object to frame
 * @param {THREE.OrbitControls} controls 
 * @param {Object} options
 * @param {number} options.padding - Fit padding (default 1.15)
 * @param {number} options.verticalOffset - Vertical offset percent (default 0.28)
 * @param {boolean} options.updateNearFar - Update near/far planes (default true)
 * @returns {Object} Framing data { distance, center, offsetY }
 */
export function frameObjectToView(
  camera, 
  object, 
  controls = null,
  options = {}
) {
  const {
    padding = 1.15,
    verticalOffset = 0.28,
    updateNearFar = true
  } = options
  
  // Step 1: Compute ideal distance based on object size and FOV
  const { distance, center, size, maxDim } = computeCameraDistance(
    camera, 
    object, 
    padding
  )
  
  // Step 2: Apply vertical composition offset
  const { offsetY, visibleHeight } = applyVerticalCompositionOffset(
    camera,
    controls,
    center,
    distance,
    verticalOffset,
    camera.aspect
  )
  
  // Step 3: Update near/far planes for optimal depth precision
  if (updateNearFar && camera.isPerspectiveCamera) {
    // Near plane: small fraction of distance to avoid clipping
    camera.near = Math.max(0.01, distance * 0.1)
    
    // Far plane: enough to contain object plus margin
    camera.far = Math.max(100, distance * 3 + maxDim)
    
    camera.updateProjectionMatrix()
  }
  
  console.log('[FrameObject] Object framed:', {
    distance: distance.toFixed(2),
    offsetY: offsetY.toFixed(2),
    center: center.toArray().map(v => v.toFixed(2)),
    size: size.toArray().map(v => v.toFixed(2))
  })
  
  return {
    distance,
    center,
    offsetY,
    size,
    maxDim,
    visibleHeight
  }
}

/**
 * Creates a resize handler that maintains framing on window resize
 * 
 * @param {THREE.PerspectiveCamera} camera 
 * @param {THREE.Object3D} object 
 * @param {THREE.OrbitControls} controls 
 * @param {Object} options - Same options as frameObjectToView
 * @returns {Function} Resize handler function
 */
export function createFramingResizeHandler(camera, object, controls, options = {}) {
  let resizeTimeout
  
  return function handleResize() {
    // Debounce resize events
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      // Update camera aspect ratio
      camera.aspect = window.innerWidth / window.innerHeight
      
      // Re-frame the object with new aspect ratio
      frameObjectToView(camera, object, controls, options)
      
      console.log('[FrameObject] Resized and reframed')
    }, 100)
  }
}

/**
 * Example usage for stats section globe:
 * 
 * // After loading GLB:
 * loader.load('/models/logo.glb', (gltf) => {
 *   const globe = gltf.scene
 *   scene.add(globe)
 *   
 *   // Frame it with 28% vertical offset (sits under arc)
 *   frameObjectToView(camera, globe, controls, {
 *     padding: 1.2,        // 20% padding around object
 *     verticalOffset: 0.28 // Position 28% down from top
 *   })
 *   
 *   // Handle resize
 *   const handleResize = createFramingResizeHandler(
 *     camera, globe, controls, { padding: 1.2, verticalOffset: 0.28 }
 *   )
 *   window.addEventListener('resize', handleResize)
 * })
 */
