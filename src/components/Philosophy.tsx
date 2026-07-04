import { motion } from 'framer-motion';
import { ShieldCheck, Key, RefreshCw, ArrowUpRight } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="max-w-6xl mx-auto px-6 py-24 sm:py-32 border-t border-white/[0.04]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        {/* Left Side: Philosophy Text & CTA */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[10px] font-mono tracking-widest text-accentOrange-text uppercase font-semibold">
            System Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            No Rented Systems. <br />
            <span className="text-slate-400">Total Ownership.</span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed font-light">
            You are not paying for an endless retainer. I build custom apps, AI agents, and infrastructure directly into your existing software stack, provide full documentation, and hand over the keys.
          </p>

          <div className="pt-4 space-y-4">
            <a
              href="https://www.upwork.com/freelancers/~01a9e8c29b672fc4d5?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black px-6 py-3 rounded-full font-medium text-xs transition-all duration-300 active:scale-[0.98] shadow-md shadow-white/5"
            >
              <span>Start Your Build on Upwork</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-accentGreen-text" />
              <span>Secure contracts & escrow protection via Upwork.</span>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Comparison Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Rented Model */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/[0.01] border border-white/[0.03] rounded-2xl p-6 space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accentOrange-text/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="p-2.5 bg-accentOrange-bg/20 rounded-lg text-accentOrange-text">
                <RefreshCw className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-accentOrange-text border border-accentOrange-text/20 bg-accentOrange-bg/10 px-2.5 py-0.5 rounded-full">
                Rent Model
              </span>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">Traditional Agency</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Agencies keep code on their private servers, forcing you into expensive, multi-thousand dollar monthly retainers.
              </p>
            </div>

            <ul className="space-y-2 text-[11px] text-slate-500 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accentOrange-text" />
                <span>Endless Monthly Retainers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accentOrange-text" />
                <span>Vendor Platform Lock-in</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accentOrange-text" />
                <span>Hidden Markup & API Costs</span>
              </li>
            </ul>
          </motion.div>

          {/* Owned Model */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl p-6 space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accentGreen-text/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="p-2.5 bg-accentGreen-bg/30 rounded-lg text-accentGreen-text">
                <Key className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-accentGreen-text border border-accentGreen-text/20 bg-accentGreen-bg/20 px-2.5 py-0.5 rounded-full">
                Full Ownership
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">Independent Specialist</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Your systems run on your accounts. I hand over the code repositories, configurations, and API credentials.
              </p>
            </div>

            <ul className="space-y-2 text-[11px] text-slate-400 font-mono">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accentGreen-text" />
                <span>Single Project Fee</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accentGreen-text" />
                <span>100% Owned Infrastructure</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accentGreen-text" />
                <span>Free to Self-Host & Edit</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
