import { useState } from 'react';
import { DollarSign, Clock } from 'lucide-react';

export default function RoiCalculator() {
  const [manualHours, setManualHours] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);
  
  const weeksPerYear = 52;
  const annualManualCost = manualHours * hourlyRate * weeksPerYear;
  
  // Example "System Build" cost, could be a flat $5,000 for illustration
  const systemBuildCost = 5000;
  const annualSavings = annualManualCost - systemBuildCost;

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 sm:py-32 border-t border-white/[0.04]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        {/* Left Side: Text */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[10px] font-mono tracking-widest text-accentOrange-text uppercase font-semibold">
            Capital Efficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Stop Paying for <br />
            <span className="text-slate-400">Manual Data Entry.</span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed font-light">
            Every hour spent copy-pasting between systems, triaging tickets, or formatting spreadsheets is capital burned. Calculate your actual wasted spend below.
          </p>
        </div>

        {/* Right Side: Calculator */}
        <div className="lg:col-span-7 bg-[#0f1115] border border-white/[0.05] rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          {/* subtle background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accentOrange-text/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-10 relative z-10">
            {/* Inputs */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-accentOrange-text" />
                    Manual Hours / Week
                  </label>
                  <span className="text-lg font-semibold text-white">{manualHours} hrs</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  step="5"
                  value={manualHours}
                  onChange={(e) => setManualHours(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#f97316]"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <DollarSign className="w-3.5 h-3.5 text-accentOrange-text" />
                    Average Hourly Wage
                  </label>
                  <span className="text-lg font-semibold text-white">${hourlyRate}/hr</span>
                </div>
                <input 
                  type="range" 
                  min="15" 
                  max="150" 
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#f97316]"
                />
              </div>
            </div>

            <div className="h-px w-full bg-white/[0.05]" />

            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Yearly Wasted Capital</span>
                <div className="text-3xl font-bold text-accentOrange-text">
                  ${annualManualCost.toLocaleString()}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-accentGreen-text uppercase">System ROI (Year 1)</span>
                <div className="text-3xl font-bold text-accentGreen-text">
                  +${annualSavings.toLocaleString()}
                </div>
              </div>
            </div>
            
            <p className="text-[10px] text-slate-500 font-mono italic">
              *Assuming a one-time bespoke system build cost of $5,000. No ongoing retainers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
