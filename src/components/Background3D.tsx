import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 200 }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate positions and colors for particles
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    // Tailwind slate gray, emerald, and copper orange
    const colorChoices = [
      new THREE.Color('#475569'), // slate-600
      new THREE.Color('#10b981'), // emerald accent
      new THREE.Color('#f97316'), // orange accent
    ];

    for (let i = 0; i < count; i++) {
      // Random coordinates inside a bounding box
      pos[i * 3] = (Math.random() - 0.5) * 12; // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12; // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12; // Z

      // Select random color
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return [pos, cols];
  }, [count]);

  // Subtle rotation and mouse-responsiveness
  useFrame((state) => {
    if (pointsRef.current) {
      // Slow constant drift
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;

      // Drift in reaction to the mouse/pointer
      const targetX = state.pointer.x * 0.6;
      const targetY = state.pointer.y * 0.6;
      pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.05;
      pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation={true}
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-50 w-screen h-screen pointer-events-none bg-background">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 70 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <Particles count={250} />
      </Canvas>
    </div>
  );
}
