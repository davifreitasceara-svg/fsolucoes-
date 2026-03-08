import { ScrollAnimation, useCounter } from "@/components/ScrollAnimation";
import { TiltCard } from "@/components/TiltCard";
import { Award, Clock, Zap, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Award, label: "Qualidade", desc: "Excelência em cada projeto" },
  { icon: Clock, label: "Experiência", desc: "+12 anos no mercado" },
  { icon: Zap, label: "Eficiência", desc: "Prazos cumpridos" },
  { icon: Headphones, label: "Suporte", desc: "Atendimento dedicado" },
];

const stats = [
  { value: 500, suffix: "+", label: "Projetos Realizados" },
  { value: 12, suffix: "+", label: "Anos de Experiência" },
  { value: 300, suffix: "+", label: "Clientes Atendidos" },
  { value: 50, suffix: "+", label: "Parceiros Comerciais" },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <motion.div
      ref={ref}
      className="text-center"
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="font-heading text-4xl md:text-5xl font-bold text-gradient">
        {count}{suffix}
      </span>
      <p className="mt-2 text-sm text-muted-foreground font-body">{label}</p>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] bg-primary blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-heading text-sm font-bold tracking-widest uppercase">
              Quem Somos
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-bold text-foreground">
              Sobre a <span className="text-gradient">F. Soluções</span>
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation variant="fadeLeft">
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed text-lg">
                A <strong className="text-foreground">F. Soluções Instalações Comerciais</strong> é
                especializada em projetos, instalação e manutenção de equipamentos de refrigeração
                comercial. Trabalhamos com foco em qualidade, eficiência e atendimento personalizado,
                oferecendo soluções completas para empresas que precisam de sistemas de refrigeração
                confiáveis e eficientes.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Nossa equipe possui experiência na instalação de câmaras frigoríficas, balcões
                refrigerados, vitrines expositivas e diversos equipamentos utilizados em
                supermercados, padarias, açougues e restaurantes.
              </p>
              <p className="text-sm text-muted-foreground">
                CNPJ: 16.880.401/0001-13 · Desde 2012 · Fortaleza – CE
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeRight">
            <div className="grid grid-cols-2 gap-6">
              {features.map((f, i) => (
                <TiltCard key={f.label} className="group" tiltAmount={12}>
                  <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-primary blur-2xl" />
                    <motion.div
                      className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4"
                      whileHover={{ rotateY: 180, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <f.icon className="text-primary-foreground" size={24} />
                    </motion.div>
                    <h3 className="font-heading font-bold text-foreground">{f.label}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        {/* Counters with glass effect */}
        <ScrollAnimation variant="fadeUp" delay={0.2}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-card/80 backdrop-blur-sm rounded-2xl p-10 shadow-card border border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-primary to-accent rounded-2xl" />
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
