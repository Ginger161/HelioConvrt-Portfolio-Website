import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Copy, 
  Check,
  ChevronDown,
  ChevronUp,
  Database,
  MapPin,
  RefreshCw,
  Zap,
  Code
} from 'lucide-react';
import '@n8n_io/n8n-demo-component';
import frontDoorCapture from '../data/workflows/FrontDoorCapture.json';
import stateChangeFollowUp from '../data/workflows/StateChangeFollowUp.json';

const CARDS = [
  {
    title: "The Problem",
    description: "Prior to deployment, visitor management relied on high-friction, disconnected processes. First-time guests were captured via fragmented methods, causing manual data entry, delayed follow-ups, and a severe gap between first interactions and long-term community integration.",
    icon: Database
  },
  {
    title: "The Solution",
    description: "Engineered a fully automated CRM pipeline utilizing n8n, Airtable, and Tally to eliminate manual data entry. Shifting from reactive spreadsheets to a dynamic Kanban board transformed workflows into a drag-and-drop management engine that scales effortlessly.",
    icon: Zap
  },
  {
    title: "The Impact",
    description: "The organization transitioned to a fully automated retention engine. Administrators now execute complex follow-up sequences simply by moving cards across a screen, ensuring zero visitors fall through the cracks while maintaining a highly personalized touch.",
    icon: RefreshCw
  }
];

const WORKFLOW_STEPS = [
  {
    icon: MapPin,
    title: "Phase 1: Location-Based Routing (Front-End)",
    description: "A custom capture form triggers an n8n webhook upon submission. The system logs raw lead data into a centralized database, evaluates the selected branch (Abuja, Lagos, or Calabar), and dynamically fires a hyper-personalized HTML welcome email detailing the exact physical address and service schedule of the chosen branch."
  },
  {
    icon: RefreshCw,
    title: "Phase 2: Drag-and-Drop Nurture (Back-End)",
    description: "The pipeline relies on state-change polling to track administrative actions. When a team member drags a contact card into the 'Follow-Up 1' status column, the system detects the movement via timestamp validation. This physical action silently triggers the next sequence, dispatching a tailored HTML nurture email."
  }
];

export default function MinistryCaseStudy() {
  const [showJson1, setShowJson1] = useState(false);
  const [copied1, setCopied1] = useState(false);
  
  const [showJson2, setShowJson2] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const [activeVisualizer, setActiveVisualizer] = useState<'workflow-1' | 'workflow-2'>('workflow-1');

  const jsonString1 = JSON.stringify(frontDoorCapture, null, 2);
  const jsonString2 = JSON.stringify(stateChangeFollowUp, null, 2);

  const copyToClipboard1 = async () => {
    try {
      await navigator.clipboard.writeText(jsonString1);
      setCopied1(true);
      setTimeout(() => setCopied1(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const copyToClipboard2 = async () => {
    try {
      await navigator.clipboard.writeText(jsonString2);
      setCopied2(true);
      setTimeout(() => setCopied2(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="ministry-case-study" className="relative w-full py-24 sm:py-32 border-t border-white/[0.04] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accentGreen-text/10 rounded-full blur-[120px] pointer-events-none -z-10 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-accentOrange-text/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 space-y-20">
        
        {/* Header / Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-end">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accentGreen-text/10 border border-accentGreen-text/20"
            >
              <Zap className="w-3.5 h-3.5 text-accentGreen-text" />
              <span className="text-xs font-mono text-accentGreen-text font-semibold uppercase tracking-wider">
                Case Study: Ministry Automation
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Automated RevOps & CRM Infrastructure for Multi-Branch Ministry
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl"
            >
              Zero-Friction Pipeline Architecture
            </motion.p>
          </div>
        </div>

        {/* Content Grid (3-Column) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden group hover:border-white/[0.15] transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.05] flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{card.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Interactive Workflow Visualizer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          <div className="w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0f1115] shadow-2xl relative flex flex-col group">
            <div className="px-6 py-4 border-b border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between shrink-0 bg-[#0a0a0a] gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              
              <div className="flex bg-[#0f1115] border border-white/[0.08] rounded-lg p-1">
                <button
                  onClick={() => setActiveVisualizer('workflow-1')}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono tracking-wide transition-all ${
                    activeVisualizer === 'workflow-1' 
                      ? 'bg-white/[0.08] text-white shadow-sm' 
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Workflow 1: Routing
                </button>
                <button
                  onClick={() => setActiveVisualizer('workflow-2')}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono tracking-wide transition-all ${
                    activeVisualizer === 'workflow-2' 
                      ? 'bg-white/[0.08] text-white shadow-sm' 
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Workflow 2: Nurture
                </button>
              </div>
            </div>
            
            <div className="w-full flex-1 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent">
              {/* @ts-ignore */}
              <n8n-demo key={activeVisualizer} className="block w-full min-h-[500px]" workflow={activeVisualizer === 'workflow-1' ? jsonString1 : jsonString2} style={{ width: '100%', height: '100%', display: 'block' }}></n8n-demo>
            </div>
          </div>
        </motion.div>

        {/* Process Flow & JSON Codeblocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Process Flow */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">The Architecture</h3>
              <p className="text-sm text-slate-400">How the automation works</p>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 md:before:ml-6 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/[0.05] before:to-transparent">
              {WORKFLOW_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative flex gap-6 items-start group is-active">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/[0.1] bg-[#0a0a0a] text-slate-400 group-hover:text-white group-hover:border-accentGreen-text/50 group-hover:shadow-[0_0_15px_rgba(20,168,0,0.2)] shrink-0 shadow-sm transition-all z-10 mt-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 p-6 rounded-xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                      <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Terminal Components */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Terminal 1 */}
            <div className="bg-[#0a0a0a] rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col shadow-2xl">
              <button 
                onClick={() => setShowJson1(!showJson1)}
                className="flex items-center justify-between w-full p-5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors border-b border-white/[0.05]"
              >
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-accentGreen-text" />
                  <div className="text-left">
                    <span className="block text-sm font-medium text-white">Workflow 1: Front-Door Capture.json</span>
                  </div>
                </div>
                {showJson1 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              
              <AnimatePresence>
                {showJson1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden"
                  >
                    <button
                      onClick={copyToClipboard1}
                      className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2 group shadow-sm"
                    >
                      {copied1 ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-xs text-green-400 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                          <span className="text-xs text-slate-400 group-hover:text-white font-medium transition-colors">Copy to Clipboard</span>
                        </>
                      )}
                    </button>
                    <div className="p-6 max-h-[400px] overflow-y-auto bg-[#050505]">
                      <pre className="text-[11px] font-mono leading-relaxed text-slate-300">
                        <code 
                          className="text-emerald-400/90"
                          dangerouslySetInnerHTML={{ __html: jsonString1.replace(/"([^"]+)":/g, '<span class="text-sky-400">"$1"</span>:') }}
                        />
                      </pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Terminal 2 */}
            <div className="bg-[#0a0a0a] rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col shadow-2xl">
              <button 
                onClick={() => setShowJson2(!showJson2)}
                className="flex items-center justify-between w-full p-5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors border-b border-white/[0.05]"
              >
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-accentGreen-text" />
                  <div className="text-left">
                    <span className="block text-sm font-medium text-white">Workflow 2: State-Change Follow-Up.json</span>
                  </div>
                </div>
                {showJson2 ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              
              <AnimatePresence>
                {showJson2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden"
                  >
                    <button
                      onClick={copyToClipboard2}
                      className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2 group shadow-sm"
                    >
                      {copied2 ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-xs text-green-400 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                          <span className="text-xs text-slate-400 group-hover:text-white font-medium transition-colors">Copy to Clipboard</span>
                        </>
                      )}
                    </button>
                    <div className="p-6 max-h-[400px] overflow-y-auto bg-[#050505]">
                      <pre className="text-[11px] font-mono leading-relaxed text-slate-300">
                        <code 
                          className="text-emerald-400/90"
                          dangerouslySetInnerHTML={{ __html: jsonString2.replace(/"([^"]+)":/g, '<span class="text-sky-400">"$1"</span>:') }}
                        />
                      </pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
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
            <h3 className="text-2xl font-bold text-white">Ready to automate your operations?</h3>
            <p className="text-slate-400 text-sm font-light">Stop losing momentum with manual data entry. Let's engineer a custom automation pipeline tailored to your needs.</p>
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
