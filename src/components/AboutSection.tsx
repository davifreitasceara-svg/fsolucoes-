import { ScrollAnimation, useCounter } from "@/components/ScrollAnimation";
import { Award, Clock, Zap, Headphones, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Award, label: "Excelência Comprovada", desc: "Qualidade rigorosa em cada instalação, seguindo padrões da indústria." },
  { icon: Clock, label: "+12 Anos de Mercado", desc: "Sólida experiência em refrigeração de alta capacidade." },
  { icon: Zap, label: "Eficiência Energética", desc: "Projetos voltados para redução do consumo de energia." },
  { icon: Headphones, label: "Suporte Integrado", desc: "Assistência e manutenção preventiva contínua." },
];

const stats = [
  { value: 500, suffix: "+", label: "Projetos Entregues" },
  { value: 12, suffix: "+", label: "Anos de Engenharia" },
  { value: 300, suffix: "+", label: "Clientes Ativos" },
  { value: 50, suffix: "+", label: "Parceiros" },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-left border-l-2 border-primary/30 pl-4 py-1">
      <div className="flex items-baseline gap-1 mb-1">
        <span className="font-heading text-3xl md:text-4xl font-black text-foreground tracking-tighter">
          {count}
        </span>
        <span className="font-heading text-xl font-bold text-primary">{suffix}</span>
      </div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{label}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-white relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <ScrollAnimation variant="fadeRight">
            <div className="space-y-8">
              <div>
                <span className="section-tag">
                  Quem Somos
                </span>
                <h2 className="heading-display text-4xl md:text-5xl lg:text-7xl text-[#0d1520] mb-6">
                  ENGENHARIA QUE IMPULSIONA <br/>O SEU <span className="text-primary italic">NEGÓCIO</span>.
                </h2>
              </div>
              
              <div className="space-y-6 text-[#475569] leading-relaxed text-lg">
                <p>
                  A <strong className="text-[#0d1520]">F. Soluções Instalações Comerciais</strong> é
                  especializada em projetos, instalação e manutenção de equipamentos de refrigeração
                  comercial e industrial.
                </p>
                <p>
                  Nossa missão é entregar sistemas confiáveis, utilizando as melhores práticas globais de engenharia para
                  supermercados, redes de distribuição, açougues e restaurantes. Cada projeto é milimetricamente desenhado
                  para o máximo de conservação e o mínimo de desperdício energético.
                </p>
                
                <ul className="space-y-3 pt-4">
                  {['Sistemas de refrigeração paralela e racks', 'Câmaras frias modulares sob medida', 'Expositores e ilhas refrigeradas de alta performance'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#334155]">
                      <CheckCircle2 size={18} className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                <p className="text-xs text-muted-foreground font-semibold tracking-widest uppercase">
                  CNPJ: 16.880.401/0001-13
                </p>
                <p className="text-xs text-muted-foreground font-semibold tracking-widest uppercase">
                  Desde 2012 · Fortaleza – CE
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeLeft" delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={f.label} className="bg-[#f8fafc] border border-[#e2e8f0] p-8 transition-colors hover:border-primary/50 group">
                  <f.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="font-heading font-black text-[15px] uppercase tracking-wide text-[#0d1520] mb-3">{f.label}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-[#050A0C] p-10 flex flex-col md:flex-row gap-10 md:items-center justify-between dark">
              <div className="grid grid-cols-2 gap-8 w-full hidden dark">
                  {/* Isso não vai renderizar direito sem ajustar os componentes de StatCounter para dark theme explicitly se ele herdar global light.
                      Vamos forçar classes específicas. */}
              </div>
              <div className="grid grid-cols-2 gap-8 w-full">
                {stats.map((s) => (
                  <div key={s.label} className="text-left border-l-2 border-primary pl-4 py-1">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-heading text-3xl md:text-4xl font-black text-white tracking-tighter">
                         <AnimatedCount value={s.value} />
                      </span>
                      <span className="font-heading text-xl font-bold text-primary">{s.suffix}</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

// Temporary component for internal use
function AnimatedCount({ value }: { value: number }) {
  const { count, ref } = useCounter(value);
  return <span ref={ref}>{count}</span>;
}
