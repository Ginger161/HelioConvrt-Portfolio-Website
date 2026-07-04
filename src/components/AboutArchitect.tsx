import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function AboutArchitect() {
  return (
    <section id="about" className="max-w-[1400px] w-full mx-auto px-6 py-24 sm:py-32 border-t border-white/[0.04]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Introduction Copy */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Meet the Architect.
            </h2>
            <div className="h-1 w-12 bg-accentGreen-text/50 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-slate-400 font-light leading-relaxed sm:text-lg"
          >
            <p>
              I am <span className="text-white font-medium">Ginger-Eke Chienyegom (Ginger)</span>. For the past two years, I have engineered production-grade business automations, AI integrations, and outbound infrastructures.
            </p>
            <p>
              My foundation is built on heavy, real-world execution. I previously scaled HelioConvert, a B2B cold email agency powered by 98-seat M365 infrastructures, and developed CogniBase, an AI application driven by complex Gemini and NotebookLM API routing. I don't just string basic triggers together; I build resilient engines that solve operational bottlenecks.
            </p>
            <p className="text-white/90 font-medium">
              After years of deploying private, in-house systems for agencies and high-volume e-commerce brands, I am bringing my infrastructure services to Upwork to partner directly with growth-focused founders.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Off-Platform Testimonial Card */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative z-10 bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/50"
          >
            {/* Decorative Quote Icon */}
            <div className="absolute top-8 right-8 text-white/5 pointer-events-none">
              <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            <div className="space-y-8 relative z-10">
              {/* 5-Star Rating */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-accentOrange-text text-accentOrange-text" />
                ))}
              </div>

              {/* The Quote */}
              <p className="text-lg sm:text-xl text-white font-medium leading-snug">
                "Ginger completely re-engineered our backend. The automation flow he built for our support and inventory systems eliminated hours of daily manual admin. Highly technical."
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#1a1c23] border border-white/10 flex items-center justify-center">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">D</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white">Dusan</span>
                  <span className="text-sm text-slate-400">Operations Director, Purely Nutrient</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accentOrange-text/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        </div>

      </div>
    </section>
  );
}
