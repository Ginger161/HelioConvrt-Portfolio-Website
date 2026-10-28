import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import Pipeline3DScene from '../components/case-studies/Pipeline3DScene';
import '@n8n_io/n8n-demo-component';
import autonomousContentEngineWorkflow from '../data/workflows/AutonomousContentEngine.json';

export default function AutonomousContentEngine() {
  const flowSteps = [
    {
      title: "Knowledge Ingestion",
      desc: "The workflow initiates by querying a central Airtable database, pulling raw technical concepts to ground the AI in factual infrastructure mechanics."
    },
    {
      title: "The Copywriter Node",
      desc: "A primary LLM drafts the post using a randomized selection of distinct marketing angles, ranging from hard metric tear-downs to contrarian industry comparisons."
    },
    {
      title: "The Router Node",
      desc: "A secondary LLM analyzes the draft. Acting strictly as a UI logic processor, it outputs a pristine JSON payload that categorizes the text into specific visual variables (e.g., visual_type, node_1, node_2)."
    },
    {
      title: "Conditional Logic (The Traffic Cop)",
      desc: "An IF node evaluates the post_format key within the JSON payload. Text-only philosophical takes are bypassed directly to the publishing API."
    },
    {
      title: "Dynamic Image Generation",
      desc: "If the router requests a visual asset, the JSON is injected into a custom HTML engine. An HTTP request to a headless browser API instantly renders the CSS into a branded, glassmorphism-styled PNG."
    },
    {
      title: "Automated Deployment",
      desc: "The finalized payload is pushed live to the LinkedIn API, and a permanent historical record is written back to the Airtable archive."
    }
  ];

  return (
    <section className="relative w-full bg-[#121214] text-white overflow-hidden py-24 border-y border-white/[0.05]">
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-accentGreen-DEFAULT/5 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />

      {/* Hero Section with 3D Canvas */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center z-10 mb-24">
        <div className="absolute inset-0">
          <Pipeline3DScene />
        </div>
        <div className="relative z-10 text-center px-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accentGreen-DEFAULT/30 bg-accentGreen-DEFAULT/10 text-accentGreen-text text-xs font-mono mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accentGreen-DEFAULT animate-pulse" />
              SYSTEMS ARCHITECTURE
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl">
              Autonomous Content Engine
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
              Zero-touch RevOps content infrastructure.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-32">
        
        {/* Architecture Blueprint Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#18181b]/60 backdrop-blur-xl border border-white/[0.05] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accentGreen-DEFAULT/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-white/90">
            Architecture Blueprint
          </h3>
          <p className="text-slate-300 leading-relaxed text-lg">
            This document outlines the internal RevOps content infrastructure deployed for HelioConvert. Built to eliminate manual social media management, this zero-touch pipeline leverages chained Large Language Models (LLMs) and headless browser rendering to autonomously generate, design, and publish enterprise-grade B2B assets.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="space-y-12">
          <h3 className="text-2xl font-bold tracking-tight text-white/90 border-l-2 border-cyan-400 pl-4">Core Infrastructure Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { comp: "Orchestration", tech: "n8n Cloud", func: "Central workflow automation and API routing.", color: "from-cyan-500/10 to-transparent", borderColor: "group-hover:border-cyan-500/30" },
              { comp: "AI Engine 1", tech: "Google Gemini", func: "Dynamic copywriting and strategic angle rotation.", color: "from-accentGreen-DEFAULT/10 to-transparent", borderColor: "group-hover:border-accentGreen-DEFAULT/30" },
              { comp: "AI Engine 2", tech: "Google Gemini", func: "UI logic parsing and structured JSON formatting.", color: "from-accentGreen-DEFAULT/10 to-transparent", borderColor: "group-hover:border-accentGreen-DEFAULT/30" },
              { comp: "Rendering", tech: "Custom HTML/CSS", func: "Dynamic 1080x1080 high-fidelity graphic generation.", color: "from-cyan-500/10 to-transparent", borderColor: "group-hover:border-cyan-500/30" },
              { comp: "Database", tech: "Airtable", func: "Knowledge base ingestion and deployment archiving.", color: "from-accentGreen-DEFAULT/10 to-transparent", borderColor: "group-hover:border-accentGreen-DEFAULT/30", colSpan: "lg:col-span-4" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative bg-[#18181b]/50 backdrop-blur-md border border-white/[0.05] p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${item.borderColor} ${item.colSpan || ''} overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">{item.comp}</div>
                <div className="text-xl font-semibold text-white/90 mb-3">{item.tech}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.func}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pipeline Execution Flow */}
        <div className="space-y-12">
          <h3 className="text-2xl font-bold tracking-tight text-white/90 border-l-2 border-accentGreen-DEFAULT pl-4">Pipeline Execution Flow</h3>
          <p className="text-slate-400 text-lg">The system operates on a scheduled cron trigger, requiring absolute zero human intervention. The execution follows a strict multi-stage validation path:</p>
          
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {flowSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#121214] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg shadow-black/50 z-10 group-hover:border-accentGreen-DEFAULT/50 group-hover:bg-accentGreen-DEFAULT/10 transition-colors duration-300">
                  <span className="text-xs font-mono text-slate-400 group-hover:text-accentGreen-text transition-colors duration-300">0{i+1}</span>
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#18181b]/50 backdrop-blur-md p-6 rounded-2xl border border-white/[0.05] group-hover:border-white/[0.1] transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accentGreen-DEFAULT/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <h4 className="text-lg font-bold text-white/90 mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              <span className="text-xs font-mono text-slate-500">Autonomous Content Engine</span>
            </div>
            
            <div className="w-full flex-1 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent">
              {/* @ts-ignore */}
              <n8n-demo className="block w-full min-h-[500px]" workflow={JSON.stringify(autonomousContentEngineWorkflow)} style={{ width: '100%', height: '100%', display: 'block' }}></n8n-demo>
            </div>
          </div>
        </motion.div>

        {/* Architectural Impact & Note */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#18181b]/60 backdrop-blur-xl border border-white/[0.05] p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold mb-4 text-white/90">Architectural Impact</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              By chaining specialized AI agents and dynamic visual rendering, this architecture ensures a consistent, high-ticket brand presence. It completely decouples content production from operational time, allowing focus to remain entirely on client engineering and core infrastructure scaling.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-accentGreen-DEFAULT/5 backdrop-blur-xl border border-accentGreen-DEFAULT/20 p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ExternalLink size={64} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-accentGreen-text flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accentGreen-DEFAULT" />
              Architect's Note
            </h3>
            <p className="text-accentGreen-text/80 leading-relaxed text-sm font-medium">
              The pipeline is designed for enterprise-grade fault tolerance. By physically separating the copywriting AI from the JSON-formatting AI, the system guarantees 100% downstream code stability, eliminating the risk of malformed API payloads.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
