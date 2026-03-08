import { ScrollAnimation } from "@/components/ScrollAnimation";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TiltCard } from "@/components/TiltCard";

const stats = [
  { value: 10, suffix: "+", label: "Anos de experiência" },
  { value: 300, suffix: "+", label: "Projetos realizados" },
  { value: 100, suffix: "+", label: "Clientes atendidos" },
];

export function AuthoritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Dark neon glow lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <ScrollAnimation key={stat.label} variant="fadeUp" delay={i * 0.2}>
              <TiltCard tiltAmount={20} glare={true} className="h-full">
                <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:border-primary/50 transition-all duration-300 relative group h-full">
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <h3 className="text-5xl md:text-6xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4 glow-text">
                    {isInView ? (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </h3>
                  
                  <p className="text-xl font-heading font-medium text-foreground text-center">
                    {stat.label}
                  </p>
                </div>
              </TiltCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
