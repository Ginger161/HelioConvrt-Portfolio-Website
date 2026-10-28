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
            Who is Ginger-Eke Chienyegom?
          </h2>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-400 leading-tight">
            About HelioConvert
          </h2>
          <div className="h-1 w-12 bg-accentGreen-text/50 rounded-full mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-slate-400 font-light leading-relaxed sm:text-lg max-w-3xl"
        >
          <p>
            Ginger-Eke Chienyegom is a B2B digital systems architect, software developer, and the solo founder of HelioConvert, based in Abuja, Nigeria. Operating as a dedicated Revenue Operations (RevOps) consultant, Ginger-Eke engineers high-performance lead generation infrastructures, advanced AI automations, and seamless software integrations for professional services.
          </p>
          <p className="text-white/90 font-medium">
            Rather than functioning as a traditional agency, HelioConvert is an independent consulting practice focused on building the underlying engines that drive predictable growth. Through deep AI integration and custom system architecture, Ginger-Eke designs and deploys highly specific solutions—such as automated lead pipelines, context-aware proposal generators, and zero-friction CRM setups—that eliminate manual bottlenecks and scale outbound revenue.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
