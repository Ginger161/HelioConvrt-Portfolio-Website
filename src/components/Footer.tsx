export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-white/[0.04] text-xs font-mono text-slate-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright & Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <span>&copy; {currentYear} HelioConvert. All rights reserved.</span>
          <span className="hidden sm:inline text-white/[0.08]">|</span>
          <span>Designed & Engineered for Autonomy.</span>
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
