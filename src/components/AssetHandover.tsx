import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function AssetHandover() {
  return (
    <section id="handover" className="w-full bg-[#0a0a0a] py-32 sm:py-48 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
        {/* Typography-Heavy Header & Paragraph */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-10"
        >
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white leading-none">
            No Rented Systems.<br />
            <span className="text-slate-500">Total Ownership.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
            You are not paying for an endless retainer. I build custom apps, AI agents, and lead generation infrastructure directly into your existing software stack, provide full documentation, and hand over the keys.
          </p>
        </motion.div>

        {/* CTA Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="pt-8 flex flex-col items-center gap-6"
        >
          <a
            href="https://www.upwork.com/freelancers/~01a9e8c29b672fc4d5?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[#14a800] hover:bg-[#14a800]/90 text-white px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[#14a800]/20"
          >
            <span>Start Your Build on Upwork</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <ShieldCheck className="w-4 h-4 text-accentGreen-text" />
            <span>Secure contracts & escrow protection via Upwork.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
