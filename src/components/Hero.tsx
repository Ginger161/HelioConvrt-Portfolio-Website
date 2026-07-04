import { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { OrbitControls, Text, Billboard } from '@react-three/drei';
import TerminalAccent from './TerminalAccent';

const TECH_STACK = ['Zapier', 'n8n', 'Stripe', 'AWS', 'Instantly', 'Apollo.io', 'Claude', 'Gemini', 'Python', 'Make.com'];

const TOOL_COLORS: Record<string, string> = {
  'Zapier': '#FF4A00',
  'n8n': '#EA4335',
  'Stripe': '#635BFF',
  'AWS': '#FF9900',
  'Instantly': '#3B82F6',
  'Apollo.io': '#FBBF24',
  'Claude': '#D97757',
  'Gemini': '#8B5CF6',
  'Python': '#EAB308',
  'Make.com': '#A855F7'
};

function TechNode({ pos, label }: { pos: THREE.Vector3, label: string }) {
  const [hovered, setHovered] = useState(false);
  const nodeColor = TOOL_COLORS[label] || '#94a3b8';

  return (
    <group position={pos}>
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial 
          transparent 
          opacity={hovered ? 1 : 0.8} 
          color={nodeColor}
          emissive={nodeColor}
          emissiveIntensity={0.6}
        />
      </mesh>

      {hovered && (
        <Billboard>
          <Text
            position={[0, 0.2, 0]}
            fontSize={0.25}
            anchorX="center"
            anchorY="middle"
            color="#ea580c"
            outlineWidth={0.015}
            outlineColor="#000000"
          >
            {label}
          </Text>
        </Billboard>
      )}
    </group>
  );
}

function NodeGraph() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const temp = [];
    const count = TECH_STACK.length;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const r = 1.7;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      temp.push({ pos: new THREE.Vector3(x, y, z), label: TECH_STACK[i] });
    }
    return temp;
  }, []);

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.5} />
      <group ref={groupRef}>
        {nodes.map((node, idx) => (
          <TechNode key={idx} pos={node.pos} label={node.label} />
        ))}

        {/* Connective lines */}
        {nodes.map((nodeA, idxA) =>
          nodes.slice(idxA + 1).map((nodeB, idxB) => {
            const distance = nodeA.pos.distanceTo(nodeB.pos);
            if (distance < 2.5) {
              const points = [nodeA.pos, nodeB.pos];
              const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
              return (
                // @ts-ignore
                <line key={`${idxA}-${idxB}`} geometry={lineGeometry}>
                  <lineBasicMaterial 
                    color="#ffffff" 
                    transparent 
                    opacity={0.1} 
                    linewidth={1} 
                  />
                </line>
              );
            }
            return null;
          })
        )}
      </group>
    </>
  );
}

function MagneticButton({ children, href }: { children: React.ReactNode, href: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="w-full md:w-auto z-20"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto bg-[#14a800] hover:bg-[#128f00] text-white px-8 py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg shadow-[#14a800]/10 active:scale-[0.98]"
      >
        {children}
      </a>
    </motion.div>
  );
}

export default function Hero() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [localTime, setLocalTime] = useState(() => 
    new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit' })
  );

  useEffect(() => {
    const handleScroll = () => {
      const mainCta = document.getElementById('main-cta');
      if (mainCta) {
        const rect = mainCta.getBoundingClientRect();
        setShowStickyCTA(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Terminal Accent Background */}
      <TerminalAccent />

      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-accentGreen-text/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse duration-[10s]" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-accentOrange-text/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Main Hero grid layout */}
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center z-10 my-auto pt-10 lg:pt-0">
        
        {/* Left column: Text & CTA */}
        <div className="w-full lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-8 z-10">
          
          {/* Profile & Live Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 self-center lg:self-start"
          >
            {/* Profile Avatar */}
            <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 cursor-pointer shadow-lg shadow-white/5 bg-[#1a1a1a] group">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
              />
            </div>

            {/* Live Status Pill */}
            <div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono tracking-wide text-slate-300">
                Abuja — {localTime} • Available for new builds
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Intelligent Automation <br className="hidden sm:block" />
              <span className="text-slate-400">& AI Infrastructure.</span>
            </motion.h1>
          </div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            I design and deploy custom business automation, AI integrations, and high-volume data pipelines.{' '}
            <span className="text-white font-medium">You own the system. I just engineer it.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center lg:items-start gap-4 pt-2"
          >
            <div id="main-cta" className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto relative">
              <MagneticButton href="https://www.upwork.com/freelancers/~01a9e8c29b672fc4d5?mp_source=share">
                <span>Hire Me on Upwork</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
              
              <a
                href="#portfolio"
                onClick={scrollToPortfolio}
                className="w-full md:w-auto border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.02] text-slate-300 hover:text-white px-8 py-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98]"
              >
                <span>View Portfolio</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#14a800]" />
              <span>Secure contracts & escrow protection via Upwork.</span>
            </div>
          </motion.div>
        </div>

        {/* Right column: R3F Canvas */}
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none lg:relative lg:opacity-100 lg:z-10 lg:pointer-events-auto lg:col-span-5 h-full lg:h-[450px] w-full flex items-center justify-center">
          <Canvas
            camera={{ position: [0, 0, 4.5], fov: 60 }}
            gl={{ alpha: true, antialias: true }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <NodeGraph />
          </Canvas>
          {/* Subtle indicator to show interactive R3F mesh */}
          <div className="hidden lg:block absolute bottom-2 right-6 bg-white/[0.02] border border-white/[0.04] px-2.5 py-1 rounded-md text-[9px] font-mono text-slate-500 pointer-events-none">
            3D interactive node lattice
          </div>
        </div>
      </div>

      {/* Down arrow indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">Scroll to View</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-slate-500" />
      </motion.div>

      {/* Sticky Bottom CTA for Apple-Style floating scroll-to-action */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#0a0a0a]/85 backdrop-blur-md border border-white/[0.08] rounded-2xl px-5 py-3.5 flex items-center justify-between gap-6 shadow-2xl shadow-black/90 max-w-[90vw] w-[340px] sm:w-[380px]"
          >
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-accentGreen-text font-semibold uppercase tracking-wider">
                Contracts Open
              </span>
              <span className="text-xs text-white/90 font-medium whitespace-nowrap">
                Hire Automation Specialist
              </span>
            </div>
            <a
              href="https://www.upwork.com/freelancers/~01a9e8c29b672fc4d5?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#14a800] hover:bg-[#128f00] text-white px-4 py-2 rounded-full font-semibold text-xs flex items-center gap-1.5 transition-colors duration-200 active:scale-[0.98]"
            >
              <span>Hire on Upwork</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
