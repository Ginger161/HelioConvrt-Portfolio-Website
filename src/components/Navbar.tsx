import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 border-b border-white/[0.04] bg-[#0a0a0a]/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo/Branding */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="HelioConvert Logo" 
            className="h-6 w-auto object-contain brightness-95 group-hover:brightness-100 transition-all duration-300"
            onError={(e) => {
              // Hide image if failed to load, show text fallback
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="font-mono text-sm tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
            HelioConvert
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentGreen-text opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accentGreen-text"></span>
          </span>
        </a>

        {/* Navigation links & CTA */}
        <div className="flex items-center gap-6 md:gap-8">
          <a 
            href="#portfolio" 
            className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-300"
          >
            Builds
          </a>
          <a 
            href="#philosophy" 
            className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-300"
          >
            Philosophy
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01a9e8c29b672fc4d5?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 bg-white hover:bg-white/90 text-black px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
