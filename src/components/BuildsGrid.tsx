import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CLIENT_BUILDS } from '../data/builds';
import type { ClientBuild } from '../data/builds';

const CONCEPT_CLIENTS = [
  'Global Retail Corp',
  'TechFlow Solutions',
  'Crestwood Financial',
  'CloudScale Inc',
  'Apex Outbound',
  'MetricGrowth SaaS',
  'Acme Health Partners',
  'St. Catherine’s Wellness Retreat'
];

const REAL_BUILDS = CLIENT_BUILDS.filter(b => !CONCEPT_CLIENTS.includes(b.client));
const CONCEPT_BUILDS = CLIENT_BUILDS.filter(b => CONCEPT_CLIENTS.includes(b.client));

function BuildCard({ build, isConcept }: { build: ClientBuild; isConcept?: boolean }) {
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
            {isConcept ? (
              <span className="text-[10px] font-mono font-semibold tracking-wide text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 inline-block">
                Concept Build
              </span>
            ) : (
              <span className="text-[10px] font-mono font-semibold tracking-wide text-white bg-white/5 px-2.5 py-1 rounded-md border border-white/5 inline-block">
                Client: {build.client}
              </span>
            )}
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
              <div className="pt-8">
                <ul className="space-y-5 text-sm text-slate-300 font-light leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span className="text-accentGreen-text mt-0.5 text-lg leading-none">•</span>
                    <div>
                      <span className="font-semibold text-white/90">Who the client was:</span> {build.client}
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accentGreen-text mt-0.5 text-lg leading-none">•</span>
                    <div>
                      <span className="font-semibold text-white/90">What problem they had:</span> {build.businessBottleneck}
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accentGreen-text mt-0.5 text-lg leading-none">•</span>
                    <div>
                      <span className="font-semibold text-white/90">What you implemented:</span> {build.theFlow}
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accentGreen-text mt-0.5 text-lg leading-none">•</span>
                    <div>
                      <span className="font-semibold text-white/90">How long it took:</span> {build.timeframe}
                    </div>
                  </li>
                  <li className="flex gap-3 items-start relative">
                    <span className="text-accentGreen-text mt-0.5 text-lg leading-none relative z-10">•</span>
                    <div className="relative z-10">
                      <span className="font-semibold text-accentGreen-text">What measurable result occurred:</span> <span className="text-white/90">{build.progress}</span>
                    </div>
                    {/* Subtle glow for the result */}
                    <div className="absolute top-1/2 left-0 w-24 h-24 bg-accentGreen-text/10 rounded-full blur-xl -translate-y-1/2 pointer-events-none" />
                  </li>
                </ul>
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

      {/* Real Client Work */}
      <div className="space-y-6">
        <h3 className="text-[10px] font-mono tracking-widest text-accentOrange-text uppercase font-semibold">
          CLIENT WORK
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-start">
          {REAL_BUILDS.map((build) => (
            <BuildCard key={build.id} build={build} />
          ))}
        </div>
      </div>

      {/* Concept Builds */}
      <div className="space-y-6 pt-12">
        <h3 className="text-[10px] font-mono tracking-widest text-accentOrange-text uppercase font-semibold">
          REFERENCE BUILDS
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-start">
          {CONCEPT_BUILDS.map((build) => (
            <BuildCard key={build.id} build={build} isConcept />
          ))}
        </div>
      </div>
    </section>
  );
}
