/**
 * GLSL for the preloader reveal — a brushstroke that blooms.
 *
 * A single dark sumi brushstroke sweeps left-to-right across the beige
 * page; a beat behind the brush, ink wicks outward from the stroke with a
 * fractal, tendrilled front, clearing the beige cover to reveal the hero.
 * The stroke dissolves into its own bloom. The cover is the same beige as
 * the hero throughout, so there is no colour seam at the handoff.
 * `u_progress` (0..1) drives both the sweep and the bloom.
 */

export const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

export const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2  u_resolution;
uniform float u_progress;

varying vec2 v_uv;

const vec3  BEIGE = vec3(0.886, 0.843, 0.733); // #E2D7BB — the hero background
const vec3  INK   = vec3(0.170, 0.155, 0.140); // dark sumi ink
const float PI    = 3.14159;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
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

// The brushstroke path — y as a gentle function of x across the screen.
float strokeY(float x) {
  return 0.5 + 0.12 * sin(x * PI) - 0.05 * x;
}

void main() {
  vec2  uv     = v_uv;
  float aspect = u_resolution.x / max(u_resolution.y, 1.0);
  float p      = clamp(u_progress, 0.0, 1.0);

  // --- Brush sweep, left to right ---
  float tipX  = clamp((p - 0.03) / 0.52, 0.0, 1.0);  // brush-head x
  float passP = 0.03 + uv.x * 0.52;                  // progress when the brush reached this column
  float drawn = step(uv.x, tipX);
  float sy    = strokeY(uv.x);
  float dc    = abs(uv.y - sy);                      // distance from pixel to the stroke

  // --- Ink bloom: wicks outward from the stroke, a beat behind the brush ---
  vec2  warp    = (vec2(fbm(uv * 2.2), fbm(uv * 2.2 + 19.0)) - 0.5) * 1.2;
  float n       = smoothstep(0.2, 0.8, fbm(uv * 3.4 + warp));
  float wickAge = max(p - passP - 0.12, 0.0);
  float wickR   = wickAge * 2.2;
  float bloom   = smoothstep(wickR, wickR - 0.05, dc + (n - 0.5) * 0.34)
                  * step(0.001, wickR);
  bloom = clamp(max(bloom, smoothstep(0.9, 1.0, p)), 0.0, 1.0);

  // --- The visible brushstroke ---
  // half-width, tapered to nothing at both ends (brush touch + lift)
  float sw = 0.042 * smoothstep(0.0, 0.07, uv.x) * smoothstep(1.0, 0.9, uv.x);
  sw *= 0.82 + 0.18 * sin(uv.x * 22.0);              // faint dry-brush wobble
  float strokeMark = smoothstep(sw, sw * 0.35, dc) * drawn;

  // concentrated wet head at the brush tip
  vec2  tipUv   = vec2((uv.x - tipX) * aspect, uv.y - strokeY(tipX));
  float tipBlob = smoothstep(0.05, 0.0, length(tipUv)) * (1.0 - step(1.0, tipX));

  // ink is darkest fresh, then is absorbed as the bloom wicks over it
  float ink = max(strokeMark, tipBlob) * (1.0 - bloom);

  // --- Compose ---
  float grain = (hash21(floor(uv * u_resolution / 3.0)) - 0.5) * 0.035;
  float wash  = bloom * (1.0 - bloom) * 4.0;         // damp wash front
  vec3  paper = (BEIGE + grain) * (1.0 - wash * 0.12);
  paper = mix(paper, INK, ink);

  float alpha = max(1.0 - bloom, ink);
  gl_FragColor = vec4(paper, alpha);
}
`;
