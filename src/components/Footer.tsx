export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-white/[0.04] text-xs font-mono text-slate-500">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Copyright & Info */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2 sm:gap-6 text-center sm:text-left justify-center">
          <span>&copy; {currentYear} HelioConvert. All rights reserved.</span>
          <span className="hidden sm:inline text-white/[0.08]">|</span>
          <span>Designed & Engineered for Autonomy.</span>
        </div>
        
        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="https://store.helioconvrt.com" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.2] hover:text-white transition-all duration-300">
            <span>HelioConvert Store: courses &amp; books</span>
          </a>
          <a href="https://www.linkedin.com/in/chienyegom-ginger-eke-677b6a2a6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.2] hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span>Ginger-Eke Chienyegom on LinkedIn</span>
          </a>
          <a href="https://github.com/Ginger161" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.2] hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            <span>Ginger-Eke Chienyegom on GitHub</span>
          </a>
        </div>

        {/* Operational Status */}
        <div className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.04] rounded-full px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentGreen-text opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accentGreen-text"></span>
          </span>
          <span className="text-[10px] text-slate-400">All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
