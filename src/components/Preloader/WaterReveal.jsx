import { useRef, useEffect } from "react";

/**
 * Water ripple reveal effect for preloader
 * Raindrops hit the screen creating ripples that reveal content underneath
 */
const WaterReveal = ({ onComplete, duration = 5000 }) => {
  const canvasRef = useRef(null);
  const fadeOutDuration = 800; // Smooth fade at the end

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas to full screen size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    let isFadingOut = false;
    let fadeStartTime = null;

    // Ripple class for individual raindrops
    class Ripple {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 60 + Math.random() * 100;
        this.speed = 0.8 + Math.random() * 1.2; // Slower expansion
        this.opacity = 1;
        this.lineWidth = 2;
      }

      update() {
        this.radius += this.speed;
        this.opacity = 1 - this.radius / this.maxRadius;
        return this.radius < this.maxRadius;
      }

      draw(ctx) {
        if (this.opacity <= 0) return;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.6})`;
        ctx.lineWidth = this.lineWidth * this.opacity;
        ctx.stroke();

        // Inner ripple
        if (this.radius > 10) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 0.6, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.3})`;
          ctx.lineWidth = this.lineWidth * this.opacity * 0.5;
          ctx.stroke();
        }
      }
    }

    // Store active ripples
    const ripples = [];

    // Revealed areas (circle centers and radii)
    const revealedAreas = [];

    // Animation state
    let animationId = null;
    const startTime = Date.now();
    let lastDropTime = 0;

    // Create offscreen canvas for the reveal mask
    const maskCanvas = document.createElement("canvas");
    maskCanvas.width = width;
    maskCanvas.height = height;
    const maskCtx = maskCanvas.getContext("2d");

    // Start with fully opaque beige
    maskCtx.fillStyle = "#E2D7BB";
    maskCtx.fillRect(0, 0, width, height);

    // Animation loop
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Clear main canvas
      ctx.clearRect(0, 0, width, height);

      // Add new raindrops - start slow, speed up, then slow down
      const now = Date.now();

      // Calculate drop rate based on progress
      // Slow start (0-20%), fast middle (20-70%), slow end (70-95%)
      let dropInterval;
      let numDrops;

      if (progress < 0.2) {
        // Slow start - few drops, long intervals
        dropInterval = 300 - progress * 500; // 300ms -> 200ms
        numDrops = 1 + Math.floor(Math.random() * 2); // 1-2 drops
      } else if (progress < 0.7) {
        // Speed up in the middle
        const midProgress = (progress - 0.2) / 0.5; // 0 to 1 within middle phase
        dropInterval = 200 - midProgress * 140; // 200ms -> 60ms
        numDrops = 2 + Math.floor(midProgress * 4) + Math.floor(Math.random() * 3); // 2-8 drops
      } else if (progress < 0.95) {
        // Slow down at the end
        const endProgress = (progress - 0.7) / 0.25; // 0 to 1 within end phase
        dropInterval = 60 + endProgress * 300; // 60ms -> 360ms
        numDrops = Math.max(1, Math.floor((1 - endProgress) * 4) + Math.floor(Math.random() * 2)); // 4-1 drops
      } else {
        dropInterval = Infinity; // Stop drops
        numDrops = 0;
      }

      if (now - lastDropTime > dropInterval && numDrops > 0) {
        lastDropTime = now;

        for (let i = 0; i < numDrops; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          ripples.push(new Ripple(x, y));

          // Add to revealed areas with larger radius
          revealedAreas.push({
            x,
            y,
            radius: 0,
            maxRadius: 80 + Math.random() * 100,
            speed: 1 + Math.random() * 1.5 // Slower ripple expansion
          });
        }
      }

      // Update revealed areas on mask
      maskCtx.globalCompositeOperation = "destination-out";
      for (let i = revealedAreas.length - 1; i >= 0; i--) {
        const area = revealedAreas[i];
        area.radius += area.speed;

        if (area.radius < area.maxRadius) {
          // Stronger reveal effect
          const gradient = maskCtx.createRadialGradient(
            area.x, area.y, 0,
            area.x, area.y, area.radius
          );
          gradient.addColorStop(0, "rgba(0, 0, 0, 0.15)");
          gradient.addColorStop(0.7, "rgba(0, 0, 0, 0.05)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

          maskCtx.fillStyle = gradient;
          maskCtx.beginPath();
          maskCtx.arc(area.x, area.y, area.radius, 0, Math.PI * 2);
          maskCtx.fill();
        } else {
          revealedAreas.splice(i, 1);
        }
      }
      maskCtx.globalCompositeOperation = "source-over";

      // Handle fade out phase
      if (progress >= 1 && !isFadingOut) {
        isFadingOut = true;
        fadeStartTime = Date.now();
      }

      let globalAlpha = 1;
      if (isFadingOut) {
        const fadeElapsed = Date.now() - fadeStartTime;
        const fadeProgress = Math.min(1, fadeElapsed / fadeOutDuration);
        globalAlpha = 1 - fadeProgress;

        // Fade out completed
        if (fadeProgress >= 1) {
          if (onComplete) {
            onComplete();
          }
          return;
        }
      }

      // Apply global alpha for smooth fade
      ctx.globalAlpha = globalAlpha;

      // Draw the beige mask
      ctx.drawImage(maskCanvas, 0, 0);

      // Update and draw ripples on top
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.draw(ctx);
        if (!ripple.update()) {
          ripples.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [duration, onComplete]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default WaterReveal;
