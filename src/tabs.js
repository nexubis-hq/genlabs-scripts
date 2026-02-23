export const tabDefinitions = [
  {
    id: 'trading',
    label: 'Trading',
    rotationSpeed: 0.28,
    model: {
      type: 'glb',
      url: '/models/logo.glb',
      targetSize: 6.2,
      position: [4.8, -0.3, 0],
    },
  },
  {
    id: 'payments',
    label: 'Payments',
    rotationSpeed: 0.2,
    model: {
      type: 'primitive',
      primitive: 'stack-cylinders',
      targetSize: 5.4,
      position: [4.8, -0.3, 0],
    },
  },
  {
    id: 'financial-rails',
    label: 'Financial rails',
    rotationSpeed: 0.16,
    model: {
      type: 'primitive',
      primitive: 'slab-grid',
      targetSize: 5.8,
      position: [4.8, -0.3, 0],
    },
  },
  {
    id: 'messaging',
    label: 'Messaging',
    rotationSpeed: 0.22,
    model: {
      type: 'glb',
      url: '/models/logo_separate.glb',
      targetSize: 6.1,
      position: [4.8, -0.3, 0],
    },
  },
  {
    id: 'privacy',
    label: 'Privacy',
    rotationSpeed: 0.14,
    model: {
      type: 'primitive',
      primitive: 'diamond-cluster',
      targetSize: 5.3,
      position: [4.8, -0.3, 0],
    },
  },
  {
    id: 'social-coordination',
    label: 'Social Coordination',
    rotationSpeed: 0.18,
    model: {
      type: 'primitive',
      primitive: 'ring-array',
      targetSize: 5.6,
      position: [4.8, -0.3, 0],
    },
  },
]

export const defaultTabId = tabDefinitions[0].id

export default tabDefinitions
