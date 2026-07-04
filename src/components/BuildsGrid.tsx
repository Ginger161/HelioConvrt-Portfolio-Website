import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CLIENT_BUILDS } from '../data/builds';
import type { ClientBuild } from '../data/builds';

function BuildCard({ build }: { build: ClientBuild }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.15] rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl shadow-black/50 flex flex-col"
    >
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        {/* Category, Client & Title */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-[10px] font-mono tracking-widest text-slate-500 border border-white/10 px-2.5 py-1 rounded-md uppercase inline-block">
              {build.category}
            </span>
            <span className="text-[10px] font-mono font-semibold tracking-wide text-white bg-white/5 px-2.5 py-1 rounded-md border border-white/5 inline-block">
              Client: {build.client}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
            {build.title}
          </h3>
        </div>

        <div className="mt-auto pt-6 border-t border-white/[0.05]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between text-sm text-slate-300 hover:text-white transition-colors py-2"
          >
            <span className="font-medium font-mono uppercase tracking-wider text-xs">View Architecture</span>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>

        {/* Expandable Accordion Architecture Info */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="pt-8 space-y-8">
                {/* Business Bottleneck */}
                <div className="space-y-3">
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-accentOrange-text flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accentOrange-text" />
                    Business Bottleneck
                  </h4>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {build.businessBottleneck}
                  </p>
                </div>
                
                {/* The Flow */}
                <div className="space-y-3">
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    The Flow
                  </h4>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {build.theFlow}
                  </p>
                </div>

                {/* The Steps */}
                <div className="space-y-4">
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    The Steps
                  </h4>
                  <ul className="space-y-3">
                    {build.steps.map((step, idx) => {
                      // Extract the bold word (e.g., "Ingest:") if formatted that way in data
                      const splitIndex = step.indexOf(':');
                      const hasPrefix = splitIndex > 0 && splitIndex < 15;
                      
                      return (
                        <li key={idx} className="flex gap-3 text-sm text-slate-400 font-light leading-relaxed items-start">
                          <span className="text-accentGreen-text font-mono mt-0.5 min-w-[1.2rem]">{idx + 1}.</span>
                          <span>
                            {hasPrefix ? (
                              <>
                                <span className="font-semibold text-white/90">{step.slice(0, splitIndex + 1)}</span>
                                {step.slice(splitIndex + 1)}
                              </>
                            ) : (
                              step
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* The Progress */}
                <div className="p-5 bg-accentGreen-text/5 border border-accentGreen-text/10 rounded-xl space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accentGreen-text/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-accentGreen-text relative z-10">
                    The Progress
                  </h4>
                  <p className="text-sm text-white/90 font-light leading-relaxed relative z-10">
                    {build.progress}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function BuildsGrid() {
  return (
    <section id="portfolio" className="max-w-[1400px] w-full mx-auto px-6 py-24 sm:py-32 space-y-12 border-t border-white/[0.04]">
      {/* Section Header */}
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Builds/Past work
        </h2>
        <div className="h-1 w-12 bg-accentGreen-text/50 rounded-full" />
      </div>

      {/* Grid of 13 Builds */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-start">
        {CLIENT_BUILDS.map((build) => (
          <BuildCard key={build.id} build={build} />
        ))}
      </div>
    </section>
  );
}
