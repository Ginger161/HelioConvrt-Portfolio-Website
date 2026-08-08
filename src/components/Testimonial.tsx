import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="max-w-[1400px] w-full mx-auto px-6 py-12 sm:py-24 relative">
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative z-10 bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 sm:p-12 shadow-2xl shadow-black/50"
        >
          {/* Decorative Quote Icon */}
          <div className="absolute top-8 right-8 text-white/5 pointer-events-none">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="space-y-8 relative z-10">
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-accentOrange-text fill-current" />
              ))}
            </div>

            {/* The Quote */}
            <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed">
              "Ginger completely re-engineered our backend. The automation flow he built for our support and inventory systems eliminated hours of daily manual admin. Highly technical."
            </p>

            {/* Attribution */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#1a1c23] border border-white/10 flex items-center justify-center">
                <span className="text-sm font-mono text-slate-400 uppercase tracking-widest">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg">Dusan</span>
                <span className="text-sm text-slate-400">Operations Director, Purely Nutrient</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[120%] bg-accentOrange-text/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      </div>
    </section>
  );
}
