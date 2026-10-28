import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Float, Line, Environment } from '@react-three/drei';
import * as THREE from 'three';

const GlassNode = ({ position, text, color = '#10b981' }: { position: [number, number, number], text: string, color?: string }) => {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1} position={position}>
      <mesh>
        <boxGeometry args={[2.5, 1.2, 0.2]} />
        <meshPhysicalMaterial
          color="#121214"
          emissive={color}
          emissiveIntensity={0.1}
          roughness={0.2}
          transmission={0.9}
          thickness={0.5}
          clearcoat={1}
        />
      </mesh>
      {/* Edge glow */}
      <mesh position={[0, 0, -0.11]}>
        <boxGeometry args={[2.6, 1.3, 0.05]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      <Text
        position={[0, 0, 0.15]}
        fontSize={0.25}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
      >
        {text}
      </Text>
    </Float>
  );
};

const ParticleStream = ({ start, end, color = '#10b981' }: { start: THREE.Vector3, end: THREE.Vector3, color?: string }) => {
  const pointsCount = 40;
  const particlesRef = useRef<THREE.Points>(null);
  
  const { positions, randomOffsets } = useMemo(() => {
    const positions = new Float32Array(pointsCount * 3);
    const randomOffsets = new Float32Array(pointsCount);
    for (let i = 0; i < pointsCount; i++) {
      randomOffsets[i] = Math.random();
      // initial pos
      positions[i * 3] = start.x;
      positions[i * 3 + 1] = start.y;
      positions[i * 3 + 2] = start.z;
    }
    return { positions, randomOffsets };
  }, [start]);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const time = state.clock.getElapsedTime();
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < pointsCount; i++) {
      // Progress from 0 to 1 based on time and random offset
      const progress = (time * 0.5 + randomOffsets[i]) % 1;
      
      const currentX = THREE.MathUtils.lerp(start.x, end.x, progress);
      const currentY = THREE.MathUtils.lerp(start.y, end.y, progress);
      const currentZ = THREE.MathUtils.lerp(start.z, end.z, progress);
      
      // Add slight sine wave disturbance
      const disturbance = Math.sin(progress * Math.PI * 4 + randomOffsets[i] * Math.PI * 2) * 0.2;
      
      positions[i * 3] = currentX;
      positions[i * 3 + 1] = currentY + disturbance;
      positions[i * 3 + 2] = currentZ;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      {/* Faint line connecting nodes */}
      <Line
        points={[start, end]}
        color={color}
        lineWidth={1}
        transparent
        opacity={0.15}
      />
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color={color}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
};

const SceneContent = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      // Subtle mouse tracking
      const targetRotationX = (mouse.y * viewport.height * 0.05);
      const targetRotationY = (mouse.x * viewport.width * 0.05);
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
    }
  });

  const node1Pos = new THREE.Vector3(-4, 0, 0);
  const node2Pos = new THREE.Vector3(0, 0, 0);
  const node3Pos = new THREE.Vector3(4, 0, 0);

  return (
    <group ref={groupRef}>
      <GlassNode position={[-4, 0, 0]} text="AI Writer" color="#38bdf8" />
      <GlassNode position={[0, 0, 0]} text="AI Router" color="#10b981" />
      <GlassNode position={[4, 0, 0]} text="Render Engine" color="#38bdf8" />

      <ParticleStream start={node1Pos} end={node2Pos} color="#38bdf8" />
      <ParticleStream start={node2Pos} end={node3Pos} color="#10b981" />
    </group>
  );
};

export default function Pipeline3DScene() {
  return (
    <div className="w-full h-full relative z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#121214']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38bdf8" />
        <pointLight position={[10, -10, -10]} intensity={0.5} color="#10b981" />
        <Environment preset="city" />
        <SceneContent />
      </Canvas>
      {/* Overlay gradient for blending */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-[#121214]" />
    </div>
  );
}
