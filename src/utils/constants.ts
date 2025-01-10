export const COLORS = {
  primary: '#D1D1D1', // Changed from #E3B341 to light grey
  secondary: '#D1D1D1', // Light grey for buttons
  background: '#000000',
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.8)',
    muted: 'rgba(255, 255, 255, 0.6)',
  }
} as const;

export const CONSTELLATION = {
  numPoints: 250, // Significantly increased number of points
  connectionDistance: 250, // Increased connection distance for more connections
  pointSize: 2.5, // Slightly adjusted point size
  speed: 0.7,
  repelStrength: 0.12,
  rotationFactor: 0.015,
  friction: 0.99,
  bounceReduction: 0.8,
  cursorRadius: 80,
  maxConnections: 5, // New: limit connections per point for better performance
  glowIntensity: 0.8, // New: control the glow effect
  connectionOpacity: 0.4 // New: base opacity for connections
} as const;