"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group, Mesh } from "three";

function SignalCore() {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.x += delta * 0.12;
    g.rotation.y += delta * 0.18;
  });

  return (
    <group ref={group}>
      <Float speed={1.75} rotationIntensity={0.35} floatIntensity={0.45}>
        <mesh>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshStandardMaterial
            color="#a5b4fc"
            emissive="#22d3ee"
            emissiveIntensity={0.22}
            metalness={0.92}
            roughness={0.12}
            wireframe
          />
        </mesh>
        <mesh scale={0.42}>
          <icosahedronGeometry args={[1.05, 0]} />
          <meshPhysicalMaterial
            color="#4f46e5"
            metalness={0.88}
            roughness={0.12}
            clearcoat={1}
            clearcoatRoughness={0.18}
            transmission={0.12}
            thickness={0.6}
          />
        </mesh>
      </Float>
    </group>
  );
}

function OrbitFrame() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    const m = mesh.current;
    if (!m) return;
    m.rotation.z += delta * 0.07;
  });

  return (
    <mesh ref={mesh} rotation={[1.05, 0.25, 0]}>
      <torusGeometry args={[1.78, 0.018, 16, 140]} />
      <meshBasicMaterial color="#7dd3fc" transparent opacity={0.42} depthWrite={false} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 3.5, 2.5]} intensity={1.25} color="#e2e8f0" />
      <pointLight position={[-3.2, -1.2, 2.4]} intensity={0.85} color="#22d3ee" />
      <SignalCore />
      <OrbitFrame />
    </>
  );
}

function Fallback() {
  return (
    <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,0.10),rgba(0,0,0,0.35))]" />
  );
}

function StaticTechVisual() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,0.10),rgba(0,0,0,0.35))]">
      <div className="relative h-28 w-28 rounded-3xl border border-white/15 bg-white/10 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.85)] ring-1 ring-white/10 backdrop-blur-xl">
        <div className="absolute inset-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/20 to-white/5" />
        <div className="absolute inset-0 grid place-items-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-200/75">
          Reduced motion
        </div>
      </div>
    </div>
  );
}

export function HeroWebGL() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="relative h-[240px] w-full overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-b from-white/10 to-black/35 ring-1 ring-white/10 lg:h-[300px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_55%)]" />
      {reducedMotion ? (
        <StaticTechVisual />
      ) : (
        <Suspense fallback={<Fallback />}>
          <Canvas
            className="absolute inset-0"
            dpr={[1, 1.75]}
            gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            camera={{ position: [0, 0, 5.6], fov: 42 }}
          >
            <Scene />
          </Canvas>
        </Suspense>
      )}
      <div className="pointer-events-none absolute inset-x-5 bottom-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-200/70">
        <span>{reducedMotion ? "Static" : "WebGL"}</span>
        <span>Signal mesh</span>
      </div>
    </div>
  );
}
