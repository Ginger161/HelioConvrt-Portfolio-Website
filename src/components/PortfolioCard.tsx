import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, CheckCircle2, AlertTriangle, GitFork } from 'lucide-react';
import type { ClientBuild } from '../data/builds';

interface PortfolioCardProps {
  build: ClientBuild;
}

export default function PortfolioCard({ build }: PortfolioCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between"
    >
      <div className="space-y-6">
        {/* Category Tag & Title */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">
            {build.category}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accentGreen-text animate-pulse" />
            <span className="text-[9px] font-mono text-slate-400">active pipeline</span>
          </span>
        </div>

        <h3 className="text-lg font-semibold text-white group-hover:text-white/95 transition-colors duration-200">
          {build.title}
        </h3>

        {/* Animated Flow Visual */}
        <div className="bg-black/40 border border-white/[0.03] rounded-xl p-4 overflow-hidden relative">
          {/* Subtle moving grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
          
          <div className="relative flex items-center justify-between gap-1 w-full overflow-x-auto no-scrollbar py-2">
            {build.flow.map((node, index) => (
              <div key={index} className="flex items-center flex-1 min-w-[70px] sm:min-w-0 last:flex-initial">
                {/* Node Pill */}
                <div className="relative z-10 flex-1 bg-white/[0.02] border border-white/[0.06] rounded-lg px-2 py-1.5 text-center backdrop-blur-sm shadow-sm">
                  {/* Glassmorphism reflection */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/[0.01] to-white/[0.04] pointer-events-none" />
                  <p className="text-[8px] sm:text-[9px] font-mono text-slate-300 leading-tight truncate">
                    {node}
                  </p>
                </div>

                {/* Connector with moving glowing dot */}
                {index < build.flow.length - 1 && (
                  <div className="relative flex-1 h-[2px] min-w-[20px] sm:min-w-[30px] bg-white/[0.04] mx-1">
                    {/* Glowing pulse indicator traveling along the path */}
                    <motion.div
                      initial={{ left: '0%' }}
                      animate={{ left: '100%' }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                      className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accentOrange-text shadow-[0_0_8px_#f97316]"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion Dropdown for View Architecture */}
      <div className="mt-5 border-t border-white/[0.05] pt-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-xs text-slate-400 hover:text-white transition-colors duration-200 py-1"
        >
          <span className="font-mono tracking-wide uppercase text-[10px]">
            {isOpen ? 'Hide Architecture' : 'View Architecture'}
          </span>
          <ChevronDown 
            className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-white' : ''
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4 text-xs">
                {/* 1. Business Bottleneck */}
                <div className="space-y-1 bg-white/[0.01] border border-white/[0.02] rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accentOrange-text font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span className="font-mono text-[9px] uppercase tracking-wider">Business Bottleneck</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed font-light pl-5">
                    {build.businessBottleneck}
                  </p>
                </div>

                {/* 2. The Flow */}
                <div className="space-y-1 bg-white/[0.01] border border-white/[0.02] rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-mono text-[9px] uppercase tracking-wider">The Flow</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed font-light pl-5">
                    {build.theFlow}
                  </p>
                </div>

                {/* 3. The Steps */}
                <div className="space-y-1 bg-white/[0.01] border border-white/[0.02] rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-mono text-[9px] uppercase tracking-wider">The Steps</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-400 pl-5 leading-relaxed font-light">
                    {build.steps.map((step, idx) => {
                      const [label, desc] = step.split(': ');
                      return (
                        <li key={idx} className="list-decimal marker:text-slate-600">
                          <span className="text-white font-medium">{label}</span>
                          {desc ? `: ${desc}` : ''}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* 4. The Progress */}
                <div className="space-y-1 bg-accentGreen-bg/10 border border-accentGreen-text/10 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-accentGreen-text font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="font-mono text-[9px] uppercase tracking-wider">The Progress</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-light pl-5">
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
