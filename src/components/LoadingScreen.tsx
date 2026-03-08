import { motion, AnimatePresence } from "framer-motion";
import { Snowflake } from "lucide-react";
import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  const technicalSteps = [
    "THERMAL_SYNC",
    "CORE_FLUID_CHECK",
    "PUMP_PRESSURE",
    "ENERGY_OPTIMIZER",
    "INTERFACE_READY"
  ];

  const currentStep = technicalSteps[Math.floor((progress / 100) * (technicalSteps.length - 1))];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Sophisticated background: Deep gradient & subtle grid */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#020617] to-[#0f172a]" />
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`, backgroundSize: '60px 60px' }} 
          />

          {/* Central Logo/Text Area */}
          <div className="relative flex flex-col items-center">
            {/* Minimalist Logo - Letter F with 3D feel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 relative"
            >
              <div className="text-6xl font-black font-heading text-primary tracking-tighter neon-shadow select-none">
                F.
              </div>
              <motion.div 
                className="absolute -inset-4 border border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Scanning Line Animation */}
            <div className="h-[1px] w-64 bg-white/5 relative overflow-hidden mb-4">
              <motion.div
                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{ x: [-100, 300] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Technical Subtext */}
            <div className="flex flex-col items-center gap-1">
              <motion.span 
                key={currentStep}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[9px] font-heading font-black uppercase tracking-[0.5em] text-primary/80"
              >
                {currentStep}
              </motion.span>
              <div className="h-[1px] w-12 bg-primary/30" />
            </div>
          </div>

          {/* Footer Status */}
          <div className="absolute bottom-16 w-full max-w-[400px] px-8">
            <div className="flex justify-between items-end mb-2">
              <div className="flex flex-col">
                <span className="text-[8px] font-heading font-bold text-muted-foreground uppercase tracking-widest mb-1">
                  System Boot Sequence
                </span>
                <span className="text-xs font-heading font-black text-foreground uppercase tracking-tight">
                  F. Soluções <span className="text-primary">Instalações</span>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-lg font-heading font-black text-primary tabular-nums leading-none">
                  {Math.round(progress)}
                </span>
                <span className="text-[8px] font-heading font-bold text-muted-foreground uppercase tracking-widest mt-1">
                  Percent_Load
                </span>
              </div>
            </div>
            
            {/* Progress line */}
            <div className="h-[2px] w-full bg-white/5 relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_15px_var(--primary)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Corner Elements */}
          <div className="absolute top-8 left-8 flex gap-4 opacity-20">
            <div className="h-6 w-[1px] bg-primary" />
            <span className="text-[8px] font-heading font-bold text-primary uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
              Reliability.First
            </span>
          </div>
          <div className="absolute bottom-8 right-8 flex gap-4 opacity-20 items-end text-right">
            <span className="text-[8px] font-heading font-bold text-primary uppercase tracking-[0.3em]">
              Precision.v2.0
            </span>
            <div className="h-6 w-[1px] bg-primary" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
