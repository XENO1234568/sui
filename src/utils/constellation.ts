import { COLORS, CONSTELLATION } from './constants';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  connections: number;
}

export function drawConstellations(ctx: CanvasRenderingContext2D) {
  const points: Point[] = [];
  const { 
    numPoints, 
    connectionDistance, 
    pointSize, 
    speed,
    repelStrength,
    rotationFactor,
    friction,
    bounceReduction,
    cursorRadius,
    maxConnections,
    glowIntensity,
    connectionOpacity
  } = CONSTELLATION;
  
  let mouseX = 0;
  let mouseY = 0;
  let isMouseMoving = false;
  let mouseTimeout: number;
  let hueRotation = 0;

  // Initialize points with varying sizes and colors
  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: Math.random() * ctx.canvas.width,
      y: Math.random() * ctx.canvas.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      size: Math.random() * pointSize + 1.5,
      hue: Math.random() * 60 - 30,
      connections: 0
    });
  }

  function handleMouseMove(e: MouseEvent) {
    const rect = ctx.canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    isMouseMoving = true;
    
    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(() => {
      isMouseMoving = false;
    }, 100);
  }

  ctx.canvas.addEventListener('mousemove', handleMouseMove);

  function animate() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    hueRotation = (hueRotation + 0.1) % 360;
    
    // Reset connections count
    points.forEach(point => {
      point.connections = 0;
    });

    // Draw connections first (behind points)
    ctx.lineCap = 'round';
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].connections >= maxConnections || points[j].connections >= maxConnections) continue;
        
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const opacity = Math.pow(1 - distance / connectionDistance, 2) * connectionOpacity;
          ctx.strokeStyle = `rgba(209, 209, 209, ${opacity})`;
          ctx.lineWidth = opacity * 1.5;
          
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();

          points[i].connections++;
          points[j].connections++;
        }
      }
    }
    
    // Update and draw points
    points.forEach(point => {
      if (isMouseMoving) {
        const dx = mouseX - point.x;
        const dy = mouseY - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < cursorRadius) {
          const force = (cursorRadius - distance) / cursorRadius;
          point.vx -= (dx / distance) * force * speed * repelStrength;
          point.vy -= (dy / distance) * force * speed * repelStrength;
          
          const rotatedVx = point.vx * Math.cos(rotationFactor) - point.vy * Math.sin(rotationFactor);
          const rotatedVy = point.vx * Math.sin(rotationFactor) + point.vy * Math.cos(rotationFactor);
          point.vx = rotatedVx;
          point.vy = rotatedVy;
        }
      }

      // Natural movement
      point.x += point.vx;
      point.y += point.vy;

      // Dynamic friction
      const currentSpeed = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
      const currentFriction = friction - Math.min(currentSpeed * 0.001, 0.02);
      point.vx *= currentFriction;
      point.vy *= currentFriction;

      // Edge behavior with smooth bounce
      const margin = point.size * 2;
      if (point.x < margin) { point.x = margin; point.vx *= -bounceReduction; }
      if (point.x > ctx.canvas.width - margin) { point.x = ctx.canvas.width - margin; point.vx *= -bounceReduction; }
      if (point.y < margin) { point.y = margin; point.vy *= -bounceReduction; }
      if (point.y > ctx.canvas.height - margin) { point.y = ctx.canvas.height - margin; point.vy *= -bounceReduction; }

      // Enhanced point rendering with dynamic glow
      const glowSize = point.size * (2 + Math.sin(Date.now() * 0.003 + point.x * 0.01) * 0.5);
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, glowSize * 2
      );
      const baseColor = `hsla(${point.hue + hueRotation}, 70%, 70%, ${glowIntensity})`;
      gradient.addColorStop(0, baseColor);
      gradient.addColorStop(1, 'transparent');
      
      ctx.beginPath();
      ctx.arc(point.x, point.y, glowSize * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    });

    // Draw cursor interaction area
    if (isMouseMoving) {
      const pulseSize = (Math.sin(Date.now() * 0.005) + 1) * 0.5;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, cursorRadius * (0.8 + pulseSize * 0.2), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(209, 209, 209, ${0.1 + pulseSize * 0.1})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    requestAnimationFrame(animate);
  }

  animate();

  return () => {
    ctx.canvas.removeEventListener('mousemove', handleMouseMove);
    clearTimeout(mouseTimeout);
  };
}