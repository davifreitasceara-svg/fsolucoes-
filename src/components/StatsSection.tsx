import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  emoji: string;
  color: string;
}

const stats: StatItem[] = [
  {
    value: 10,
    suffix: "+",
    label: "Anos de Experiência",
    emoji: "🏆",
    color: "#38bdf8",
  },
  {
    value: 500,
    suffix: "+",
    label: "Projetos Realizados",
    emoji: "🏗️",
    color: "#0ea5e9",
  },
  {
    value: 300,
    suffix: "+",
    label: "Clientes Atendidos",
    emoji: "🤝",
    color: "#0284c7",
  },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 bg-[#020617] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-32">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60, scale: 0.85 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: i * 0.22,
                duration: 0.7,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{ scale: 1.08, rotate: [-1, 1, -1][i] }}
              className="relative flex flex-col items-center group cursor-default select-none"
            >
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: stat.color }}
              />

              {/* Emoji bounce */}
              <motion.div
                animate={inView ? { y: [0, -10, 0] } : {}}
                transition={{ delay: i * 0.22 + 0.4, duration: 0.6, ease: "easeOut" }}
                className="text-5xl mb-4"
              >
                {stat.emoji}
              </motion.div>

              {/* Number */}
              <div
                className="font-heading text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
                style={{ color: stat.color }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: i * 0.22 + 0.5, duration: 0.5 }}
                className="w-16 h-[2px] my-4 rounded-full origin-left"
                style={{ backgroundColor: stat.color }}
              />

              {/* Label */}
              <p className="font-heading text-sm font-black text-white/60 uppercase tracking-[0.25em] text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
