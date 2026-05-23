'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './CinematicLayer.module.css';

const PARTICLE_COUNT = 260;
const DEPTH_RANGE = 6;

function buildGlowTexture(): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const half = size / 2;

  const g = ctx.createRadialGradient(half, half, 0, half, half, half);
  g.addColorStop(0.00, 'rgba(255,255,255,1.00)');
  g.addColorStop(0.15, 'rgba(255,210,140,0.90)');
  g.addColorStop(0.40, 'rgba(255,145,50,0.40)');
  g.addColorStop(0.70, 'rgba(255,100,20,0.10)');
  g.addColorStop(1.00, 'rgba(0,0,0,0.00)');

  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

export function CinematicLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') return;

    // ── Renderer ────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // ── Scene / Camera ───────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 7);

    // ── Particle geometry ────────────────────────────────────────────────────
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors    = new Float32Array(PARTICLE_COUNT * 3);
    const sizes     = new Float32Array(PARTICLE_COUNT);
    const phases    = new Float32Array(PARTICLE_COUNT);   // per-particle time phase
    const speeds    = new Float32Array(PARTICLE_COUNT);   // per-particle drift speed

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Spread particles across the frustum
      positions[i * 3 + 0] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * DEPTH_RANGE;

      // 60 % warm orange, 40 % soft blue-white
      const isWarm = Math.random() < 0.6;
      if (isWarm) {
        colors[i * 3 + 0] = 1.0;
        colors[i * 3 + 1] = 0.45 + Math.random() * 0.25;
        colors[i * 3 + 2] = 0.05 + Math.random() * 0.10;
      } else {
        colors[i * 3 + 0] = 0.72 + Math.random() * 0.18;
        colors[i * 3 + 1] = 0.82 + Math.random() * 0.13;
        colors[i * 3 + 2] = 1.0;
      }

      sizes[i]  = 0.04 + Math.random() * 0.18;   // varied bokeh size
      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.18 + Math.random() * 0.32;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(colors,    3));
    geo.setAttribute('size',     new THREE.BufferAttribute(sizes,     1));

    const originPos = positions.slice(); // immutable snapshot for oscillation

    // ── Material ─────────────────────────────────────────────────────────────
    const texture = buildGlowTexture();

    const mat = new THREE.PointsMaterial({
      map:          texture,
      vertexColors: true,
      blending:     THREE.AdditiveBlending,
      transparent:  true,
      depthWrite:   false,
      sizeAttenuation: true,
      // size is scaled per-attribute via a custom size buffer fallback;
      // PointsMaterial.size acts as global scale
      size: 0.22,
      opacity: 0.82,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // ── Mouse parallax ───────────────────────────────────────────────────────
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = ((e.clientX / window.innerWidth)  - 0.5) * 0.9;
      targetY = ((e.clientY / window.innerHeight) - 0.5) * 0.6;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // ── Resize ───────────────────────────────────────────────────────────────
    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize, { passive: true });

    // ── Animation loop ────────────────────────────────────────────────────────
    let rafId = 0;
    let t = 0;

    const posAttr = geo.attributes.position as THREE.BufferAttribute;

    function animate() {
      rafId = requestAnimationFrame(animate);
      t += 0.007;

      // Per-particle sine-wave drift
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const phi = phases[i];
        const spd = speeds[i];
        posAttr.array[i * 3 + 0] = originPos[i * 3 + 0] + Math.sin(t * spd + phi)       * 0.22;
        posAttr.array[i * 3 + 1] = originPos[i * 3 + 1] + Math.cos(t * spd * 0.7 + phi) * 0.16;
        posAttr.array[i * 3 + 2] = originPos[i * 3 + 2] + Math.sin(t * spd * 0.5 + phi) * 0.10;
      }
      posAttr.needsUpdate = true;

      // Smooth parallax lerp
      currentX += (targetX - currentX) * 0.028;
      currentY += (targetY - currentY) * 0.028;
      camera.position.x = currentX;
      camera.position.y = -currentY;

      renderer.render(scene, camera);
    }
    animate();

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      geo.dispose();
      mat.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
