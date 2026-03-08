import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  desc: string;
  emoji: string;
  color: string;
  from: "left" | "right";
}

const stats: StatItem[] = [
  {
    value: 10,
    suffix: "+",
    label: "Anos de Experiência",
    desc: "Uma década transformando espaços comerciais em todo o Brasil.",
    emoji: "🏆",
    color: "#38bdf8",
    from: "left",
  },
  {
    value: 500,
    suffix: "+",
    label: "Projetos Realizados",
    desc: "Supermercados, açougues, padarias e muito mais já equipados.",
    emoji: "🏗️",
    color: "#0ea5e9",
    from: "right",
  },
  {
    value: 300,
    suffix: "+",
    label: "Clientes Atendidos",
    desc: "Relações de confiança construídas projeto a projeto.",
    emoji: "🤝",
    color: "#22d3ee",
    from: "left",
  },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2200;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <>{display}{suffix}</>;
}

function StatRow({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = stat.from === "left";

  return (
    <div ref={ref} className="py-20 md:py-28 border-b border-white/5 last:border-0 relative overflow-hidden">
      {/* Big ghost number background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.04 } : { opacity: 0 }}
        transition={{ delay: 0.1, duration: 1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ color: stat.color }}
      >
        <span className="font-heading font-black text-[20vw] leading-none tracking-tighter">
          {stat.value}{stat.suffix}
        </span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-20`}>

          {/* Emoji + Number block */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", bounce: 0.35 }}
            className="flex flex-col items-center md:items-start min-w-fit"
          >
            {/* Emoji */}
            <motion.span
              initial={{ scale: 0, rotate: -20 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
              className="text-6xl mb-4 block"
            >
              {stat.emoji}
            </motion.span>

            {/* Number */}
            <div
              className="font-heading font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(5rem, 12vw, 9rem)", color: stat.color }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
            </div>
          </motion.div>

          {/* Label + description */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 80 : -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.2 }}
            className="flex flex-col gap-3 max-w-md"
          >
            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-1 w-16 rounded-full origin-left"
              style={{ backgroundColor: stat.color }}
            />

            <h3
              className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight"
            >
              {stat.label}
            </h3>

            <p className="text-white/50 font-heading text-base uppercase tracking-widest leading-relaxed">
              {stat.desc}
            </p>

            {/* Index badge */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="text-xs font-heading font-black tracking-[0.4em] uppercase mt-2"
              style={{ color: stat.color }}
            >
              #{String(index + 1).padStart(2, "0")}
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-[#020617]">
      {/* Section header */}
      <div className="container mx-auto px-6 pt-24 pb-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-heading font-black text-primary uppercase tracking-[0.4em] mb-2"
        >
          Nossos Números
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
        >
          Resultados que <span className="text-primary italic">Falam</span>
        </motion.h2>
      </div>

      {/* Individual stats */}
      {stats.map((stat, i) => (
        <StatRow key={stat.label} stat={stat} index={i} />
      ))}
    </section>
  );
}
