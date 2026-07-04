import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useMotionValueEvent } from 'framer-motion';

const techStack = [
  { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/white" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/white" },
  { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/white" },
  { name: "Instantly", textLogo: true },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/white" },
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/white" },
  { name: "Make.com", icon: "https://cdn.simpleicons.org/make/white" },
  { name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/white" },
  { name: "Calendly", icon: "https://cdn.simpleicons.org/calendly/white" },
  { name: "Apollo", textLogo: true },
  { name: "Claude Code", icon: "https://cdn.simpleicons.org/anthropic/white" },
  { name: "Antigravity", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/DeepMind_logo.svg" }
];

export default function TechStackMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Measure the width of one original set of logos to know where to loop
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        // scrollWidth gives the full width. We rendered 2 sets, so divide by 2.
        setWidth(containerRef.current.scrollWidth / 2);
      }
    };
    
    // Slight delay to ensure fonts/images are rendered before measuring
    const timeoutId = setTimeout(measure, 100);
    window.addEventListener('resize', measure);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', measure);
    };
  }, []);

  // Handle automatic scrolling
  useAnimationFrame((t, delta) => {
    void t;
    if (!isDragging && width > 0) {
      let newX = x.get() - 0.5 * (delta / 16);
      if (newX <= -width) {
        newX += width;
      }
      x.set(newX);
    }
  });

  // Handle wrapping when user drags manually
  useMotionValueEvent(x, "change", (latest) => {
    if (width > 0 && isDragging) {
      if (latest > 0) {
        x.set(latest - width);
      } else if (latest <= -width) {
        x.set(latest + width);
      }
    }
  });

  return (
    <section className="w-full py-12 border-b border-white/[0.04] bg-[#0a0a0a] overflow-hidden relative flex flex-col items-center cursor-grab active:cursor-grabbing">
      
      {/* Helper Text */}
      <div className="absolute top-4 w-full flex justify-center z-20 pointer-events-none opacity-40">
        <span className="text-[9px] font-mono tracking-widest text-white uppercase flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
          ← Drag to scroll →
        </span>
      </div>

      {/* Left/Right Fade Gradients */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <motion.div 
        ref={containerRef}
        style={{ x }}
        drag="x"
        // Omitting dragConstraints allows infinite dragging, which we wrap via useMotionValueEvent
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="flex w-max items-center"
      >
        {/* Double the array for seamless looping */}
        {[...techStack, ...techStack].map((tech, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-center gap-3 px-8 sm:px-12 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          >
            {/* SVG Logo from CDN */}
            {tech.icon && (
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="h-6 w-auto object-contain pointer-events-none" 
                draggable="false" 
              />
            )}
            
            {/* Custom Typography Fallbacks */}
            {tech.textLogo && tech.name === 'Instantly' && (
              <div className="flex items-baseline pointer-events-none">
                <span className="text-xl font-serif italic font-bold tracking-tighter text-white">I</span>
                <span className="text-lg font-sans font-bold tracking-tight text-white/90">nstantly</span>
              </div>
            )}
            
            {tech.textLogo && tech.name === 'Apollo' && (
              <span className="text-lg font-sans font-black tracking-tighter uppercase text-white pointer-events-none">
                APOLLO
              </span>
            )}

            {tech.textLogo && tech.name === 'Antigravity' && (
              <div className="flex items-center gap-2 pointer-events-none">
                <span className="text-xl">🚀</span>
                <span className="text-lg font-mono font-bold tracking-tight text-white">Antigravity</span>
              </div>
            )}
            
            {/* If it has an icon, we optionally don't need text, but simple icons are just logos without text. We should probably include the text name next to the logo for clarity since they are white silhouettes. Wait, Zapier/n8n/Shopify logos are recognizable, but text next to them looks nice. */}
            {tech.icon && (
               <span className="text-sm font-semibold tracking-wide text-white font-sans hidden lg:block pointer-events-none">
                 {tech.name}
               </span>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
