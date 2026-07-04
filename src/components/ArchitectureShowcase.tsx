import { motion } from 'framer-motion';

// Import the n8n demo component if it hasn't been imported globally
import '@n8n_io/n8n-demo-component';

// Import the real n8n workflow JSON files
import apolloWorkflow from '../data/workflows/Apollo Lead Verification and Instantly.ai Integration (1).json';
import brand24Workflow from '../data/workflows/Brand24 Critical Mention Alert with AI-Powered Crisis Detection (1).json';
import podcastWorkflow from '../data/workflows/Podcast to WordPress Blog Post Automation (1).json';
import zendeskWorkflow from '../data/workflows/Zendesk Ticket Auto-Resolution for Fulfilled Shopify Orders (3).json';
import l3EngineeringWorkflow from '../data/workflows/AI-Powered L3 Engineering Ticket Diagnosis and Analysis (1).json';
import legislativeImpactWorkflow from '../data/workflows/Predictive Legislative Impact Engine for Client Profiling (1).json';
import shopifyFraudWorkflow from '../data/workflows/Shopify Order Fraud Detection with Risk-Based Routing and 2FA Verification (1).json';
import tailorInventoryWorkflow from '../data/workflows/Tailor Measurements Fabric Inventory Auto-Replenishment System (1).json';

const workflowsData = [
  { title: "Apollo Lead Verification & Instantly.ai Sync", data: JSON.stringify(apolloWorkflow) },
  { title: "Brand24 AI Crisis Detection Router", data: JSON.stringify(brand24Workflow) },
  { title: "Podcast Audio to WordPress Blog Post", data: JSON.stringify(podcastWorkflow) },
  { title: "Zendesk Auto-Resolution for Shopify Orders", data: JSON.stringify(zendeskWorkflow) },
  { title: "AI L3 Engineering Ticket Diagnosis", data: JSON.stringify(l3EngineeringWorkflow) },
  { title: "Predictive Legislative Impact Engine", data: JSON.stringify(legislativeImpactWorkflow) },
  { title: "Shopify Fraud Detection & 2FA Routing", data: JSON.stringify(shopifyFraudWorkflow) },
  { title: "Tailor Fabric Inventory Auto-Replenishment", data: JSON.stringify(tailorInventoryWorkflow) }
];

export default function ArchitectureShowcase() {

  return (
    <section className="w-full py-24 sm:py-32 border-t border-white/[0.04] bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 space-y-16">

        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            The Infrastructure.
          </h2>
          <div className="h-1 w-12 bg-accentOrange-text/50 rounded-full" />
          <p className="text-slate-400 font-light mt-4 leading-relaxed">
            I don't rely on black-box tools. Below is an interactive demonstration of the complex routing architecture, APIs, and LLM payloads I build to scale your operations.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="flex flex-col space-y-6">

          {/* Interactive n8n Embeds */}
          <div className="space-y-12">
            {workflowsData.map((workflow, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                className="w-full h-auto rounded-2xl overflow-hidden border border-gray-800 bg-[#0f1115] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] relative flex flex-col"
              >
                <div className="px-6 py-4 border-b border-white/[0.05] flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{workflow.title}</span>
                </div>

                {/* Embed directly fills the remaining flex area */}
                <div className="w-full flex-1 relative">
                  {workflow.data && (
                    // @ts-ignore
                    <n8n-demo className="block w-full min-h-[400px]" workflow={workflow.data} style={{ width: '100%', height: '100%', display: 'block' }}></n8n-demo>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
