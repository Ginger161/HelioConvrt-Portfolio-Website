import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGS = [
  "> [SYS] Initializing core modules...",
  "> [SYS] n8n webhook verified...",
  "> [SYS] Gemini API initialized...",
  "> [SYS] routing payload...",
  "> [SEC] Handshake complete...",
  "> [DB] Connection pool active...",
  "> [CRON] Triggering batch sync...",
  "> [API] 200 OK - Response Time: 42ms"
];

export default function TerminalAccent() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    
    // Add initial lines fast
    while (index < 3) {
      setLines(prev => [...prev, LOGS[index]]);
      index++;
    }

    const interval = setInterval(() => {
      setLines((prev) => {
        const newLines = [...prev, LOGS[index % LOGS.length]];
        // Keep the last 6 lines to simulate scrolling
        if (newLines.length > 6) {
          newLines.shift();
        }
        return newLines;
      });
      index++;
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 -z-10 opacity-[0.15] pointer-events-none select-none h-[400px] w-full max-w-xl overflow-hidden mask-image:linear-gradient(to_bottom,black,transparent)">
      <div className="font-mono text-xs sm:text-sm text-accentGreen-text flex flex-col space-y-3 p-6 blur-[0.5px]">
        <AnimatePresence mode="popLayout">
          {lines.map((line, idx) => (
            <motion.div
              // Combine the line text and an incrementing index to ensure unique keys for Framer Motion AnimatePresence
              key={`${line}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
