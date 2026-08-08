import { motion } from 'framer-motion';

export default function AboutArchitect() {
  return (
    <section id="about" className="max-w-[1400px] w-full mx-auto px-6 py-24 sm:py-32 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4 flex flex-col items-center"
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
          className="space-y-6 text-slate-400 font-light leading-relaxed sm:text-lg max-w-3xl"
        >
          <p>
            I am <span className="text-white font-medium">Ginger-Eke Chienyegom (Ginger)</span>. For the past three years, I have engineered production-grade business automations, AI integrations, and outbound infrastructures.
          </p>
          <p>
            My foundation is built on heavy, real-world execution. I developed CogniBase, an AI application driven by complex Gemini and NotebookLM API routing. I don't just string basic triggers together; I build resilient engines that solve operational bottlenecks.
          </p>
          <p className="text-white/90 font-medium">
            After years of deploying private, in-house systems for agencies and high-volume e-commerce brands, I am bringing my infrastructure services to Upwork to partner directly with growth-focused founders.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
