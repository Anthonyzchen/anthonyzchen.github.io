import { useRef, useEffect } from "react";
import { VERT, FRAG } from "./rainShaders";

/**
 * Rain-on-glass preloader reveal.
 *
 * A full-screen WebGL canvas renders a frosted-beige glass cover; procedural
 * rain beads and streaks down it, clearing trails that reveal the page
 * behind. `u_progress` drives the reveal over `duration`; `onComplete` fires
 * once the pane is clear. Falls back to a plain fade when WebGL is
 * unavailable or the user prefers reduced motion.
 */
const WaterReveal = ({ onComplete, duration = 5000 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId = null;
    let done = false;
    const timers = [];

    const finish = () => {
      if (done) return;
      done = true;
      if (onComplete) onComplete();
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const sizeCanvas = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
    };
    sizeCanvas();

    // --- Fallback: a plain beige cover that fades out ---
    const runFallback = () => {
      canvas.style.background = "#E2D7BB";
      const hold = prefersReduced ? 150 : 450;
      timers.push(
        setTimeout(() => {
          canvas.style.transition = "opacity 700ms ease";
          canvas.style.opacity = "0";
        }, hold)
      );
      timers.push(setTimeout(finish, hold + 760));
    };

    const gl =
      !prefersReduced &&
      canvas.getContext("webgl", {
        alpha: true,
        premultipliedAlpha: false,
        antialias: true,
      });

    if (!gl) {
      runFallback();
      return () => timers.forEach(clearTimeout);
    }

    // --- Compile + link ---
    const compile = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error(
          "[WaterReveal] shader compile failed:",
          gl.getShaderInfoLog(sh) ||
            (gl.isContextLost() ? "(context lost)" : "(no info log)")
        );
        return null;
      }
      return sh;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    const program = vs && fs ? gl.createProgram() : null;
    if (program) {
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
    }
    if (!program || !gl.getProgramParameter(program, gl.LINK_STATUS)) {
      if (program) {
        console.error(
          "[WaterReveal] program link failed:",
          gl.getProgramInfoLog(program)
        );
      }
      runFallback();
      return () => timers.forEach(clearTimeout);
    }

    // --- Fullscreen quad ---
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(program, "a_pos");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uProg = gl.getUniformLocation(program, "u_progress");

    gl.useProgram(program);
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const onResize = () => {
      sizeCanvas();
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener("resize", onResize);
    gl.viewport(0, 0, canvas.width, canvas.height);

    // --- Render loop ---
    const start = performance.now();
    const render = (now) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, elapsed / 1000);
      gl.uniform1f(uProg, progress);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (progress >= 1) {
        finish();
        return;
      }
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    // Safety net — never let the site hang on the preloader.
    timers.push(setTimeout(finish, duration + 2500));

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", onResize);
      // Deliberately NOT calling WEBGL_lose_context.loseContext(): React
      // StrictMode double-invokes effects (mount -> cleanup -> mount), and
      // losing the context here leaves it permanently dead for the second
      // mount. The GPU context is released by GC on real unmount.
    };
  }, [duration, onComplete]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default WaterReveal;
