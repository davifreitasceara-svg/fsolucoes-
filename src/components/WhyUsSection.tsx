import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Users, Zap, Shield, Briefcase, HeadphonesIcon, Settings2 } from "lucide-react";

const reasons = [
  { 
    icon: Users, 
    title: "Engenharia Especializada", 
    desc: "Corpo técnico certificado e experiente em sistemas complexos.",
  },
  { 
    icon: Zap, 
    title: "Execução Ágil", 
    desc: "Cronogramas rigorosamente cumpridos para startup rápido.",
  },
  { 
    icon: Shield, 
    title: "Padrão Industrial", 
    desc: "Componentes homologados pelas principais montadoras como Embraco e Danfoss.",
  },
  { 
    icon: Briefcase, 
    title: "Portfólio Confiável", 
    desc: "Centenas de obras executadas em toda a região Nordeste.",
  },
  { 
    icon: HeadphonesIcon, 
    title: "Service O&M", 
    desc: "Contratos de manutenção preventiva e preditiva focados em TCO.",
  },
  {
    icon: Settings2,
    title: "Automação",
    desc: "Quadros de comando com telemetria para monitoramento 24h.",
  }
];

export function WhyUsSection() {
  return (
    <section id="por-que-nos" className="section-padding bg-[#151c25] border-y border-white/5 relative overflow-hidden">
      
      <div className="container mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="section-tag opacity-80">
                Performance Garantida
              </span>
              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white">
                DIFERENCIAIS DA <br />
                <span className="text-primary italic">F. SOLUÇÕES</span>
              </h2>
            </div>
            
            <p className="text-white/40 text-sm leading-relaxed max-w-sm uppercase tracking-widest font-bold">
              Cada etapa do projeto é desenhada visando máxima eficiência e durabilidade operacional.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 p-px rounded-xl overflow-hidden">
          {reasons.map((r, i) => (
            <ScrollAnimation key={r.title} variant="fadeUp" delay={i * 0.1} className="h-full bg-[#151c25]">
              <div className="h-full p-8 md:p-10 flex flex-col group hover:bg-[#1a232f] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="font-heading font-black text-6xl text-white">0{i+1}</span>
                </div>
                
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded items-center justify-center flex mb-8 text-primary group-hover:scale-110 transition-transform">
                  <r.icon size={22} />
                </div>
                
                <h3 className="font-heading text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                  {r.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
