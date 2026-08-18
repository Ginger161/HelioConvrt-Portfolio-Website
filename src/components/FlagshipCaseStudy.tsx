import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Copy, 
  Check,
  ChevronDown,
  ChevronUp,
  Zap,
  Image as ImageIcon,
  Bot,
  FileCode2,
  Send,
  Code
} from 'lucide-react';
import '@n8n_io/n8n-demo-component';
import proposalGeneratorWorkflow from '../data/workflows/Proposal Generator System.json';

const STATS = [
  { value: "95%", label: "Reduction in Drafting Time" },
  { value: "<3 min", label: "Automated Turnaround" },
  { value: "100%", label: "Brand-Asset Extraction Accuracy" },
  { value: "Safe", label: "Human-in-the-Loop Staging" }
];

const WORKFLOW_STEPS = [
  {
    icon: Zap,
    title: "1. Trigger",
    description: "Contact hits 'Proposal Requested' deal stage in CRM."
  },
  {
    icon: ImageIcon,
    title: "2. Brand Enrichment",
    description: "Brandfetch API extracts logos, color palette, and company metadata."
  },
  {
    icon: Bot,
    title: "3. Context Extraction",
    description: "OpenAI API parses discovery call transcript for pain points, scope, and customized solutions."
  },
  {
    icon: FileCode2,
    title: "4. Document Compilation",
    description: "Print-optimized dynamic HTML template converted into an executive PDF via rendering node."
  },
  {
    icon: Send,
    title: "5. Delivery / Review",
    description: "Draft created directly in Gmail with PDF attached for 1-click human verification and dispatch."
  }
];

export default function FlagshipCaseStudy() {
  const [showJson, setShowJson] = useState(false);
  const [copied, setCopied] = useState(false);

  const jsonString = JSON.stringify(proposalGeneratorWorkflow, null, 2);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="flagship-case-study" className="relative w-full py-24 sm:py-32 border-t border-white/[0.04] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accentOrange-text/10 rounded-full blur-[120px] pointer-events-none -z-10 -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-accentGreen-text/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 space-y-20">
        
        {/* Header / Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-end">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accentOrange-text/10 border border-accentOrange-text/20"
            >
              <Zap className="w-3.5 h-3.5 text-accentOrange-text" />
              <span className="text-xs font-mono text-accentOrange-text font-semibold uppercase tracking-wider">
                Case Study: Enterprise RevOps & Automation
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Automated B2B Proposal Pipeline for a $6M/Year Strategy Firm
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl"
            >
              How we engineered a programmatic, context-aware proposal generator that cuts delivery turnaround from 48 hours to under 3 minutes.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Workflow Visualizer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          <div className="w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0f1115] shadow-2xl relative flex flex-col group">
            <div className="px-6 py-4 border-b border-white/[0.05] flex items-center justify-between shrink-0 bg-[#0a0a0a]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Interactive Node Map</span>
            </div>
            
            <div className="w-full flex-1 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent">
              {/* @ts-ignore */}
              <n8n-demo className="block w-full min-h-[500px]" workflow={JSON.stringify(proposalGeneratorWorkflow)} style={{ width: '100%', height: '100%', display: 'block' }}></n8n-demo>
            </div>
          </div>
        </motion.div>

        {/* Architecture Breakdown & JSON Codeblock */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Architecture Breakdown</h3>
              <p className="text-sm text-slate-400">Step-by-step telemetry of the proposal delivery process.</p>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/[0.05] before:to-transparent">
              {WORKFLOW_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.1] bg-[#0a0a0a] text-slate-400 group-hover:text-white group-hover:border-accentOrange-text/50 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-all z-10">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                      <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#0a0a0a] rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col"
          >
            <button 
              onClick={() => setShowJson(!showJson)}
              className="flex items-center justify-between w-full p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors border-b border-white/[0.05]"
            >
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-accentOrange-text" />
                <div className="text-left">
                  <span className="block text-sm font-medium text-white">View Raw Workflow JSON</span>
                  <span className="block text-[11px] font-mono text-slate-500 mt-0.5">Explore the actual payload schemas and nodes</span>
                </div>
              </div>
              {showJson ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>
            
            <AnimatePresence>
              {showJson && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden"
                >
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2 group"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-xs text-green-400 font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                        <span className="text-xs text-slate-400 group-hover:text-white font-medium transition-colors">Copy JSON</span>
                      </>
                    )}
                  </button>
                  <div className="p-6 max-h-[500px] overflow-y-auto bg-[#050505]">
                    <pre className="text-[11px] font-mono leading-relaxed text-slate-300">
                      <code 
                        className="text-emerald-400/90"
                        dangerouslySetInnerHTML={{ __html: jsonString.replace(/"([^"]+)":/g, '<span class="text-sky-400">"$1"</span>:') }}
                      />
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-12 pb-4 flex flex-col items-center justify-center text-center space-y-6 border-t border-white/[0.04]"
        >
          <div className="max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl font-bold text-white">Want to cut your delivery time by 95%?</h3>
            <p className="text-slate-400 text-sm font-light">Stop losing momentum after sales calls. Let's engineer a custom automation pipeline tailored to your CRM.</p>
          </div>
          <a
            href="https://calendly.com/list-inn130/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-[#14a800] hover:bg-[#128f00] text-white px-8 py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg shadow-[#14a800]/10 active:scale-[0.98]"
          >
            <span>Book an Audit Discovery</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
