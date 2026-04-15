import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Users, Zap, Shield, Briefcase, HeadphonesIcon, Settings2 } from "lucide-react";

const reasons = [
  { 
    icon: Users, 
    title: "Equipe Capacitada", 
    desc: "Profissionais técnicos treinados continuamente pelas principais fábricas do mercado (Embraco, Danfoss).",
  },
  { 
    icon: Zap, 
    title: "Operação Ágil", 
    desc: "Processos padronizados que garantem cronogramas de implantação menores sem perda de qualidade.",
  },
  { 
    icon: Shield, 
    title: "Confiança", 
    desc: "Garantia atestada e uso exclusivo de componentes certificados de alta performance e durabilidade.",
  },
  { 
    icon: Briefcase, 
    title: "Experiência", 
    desc: "Extenso know-how técnico, com centenas de sistemas estabilizados no Ceará e regiões.",
  },
  { 
    icon: HeadphonesIcon, 
    title: "Contratos O&M", 
    desc: "Serviço contínuo de operação, manutenção preditiva e corretiva com SLA rigoroso.",
  },
  {
    icon: Settings2,
    title: "Automação e Controle",
    desc: "Uso de sistemas de controle lógico modernos para economia de energia garantida.",
  }
];

export function WhyUsSection() {
  return (
    <section id="por-que-nos" className="section-padding bg-primary relative overflow-hidden">
      
      {/* Background corporativo da Eletrofrio com grid leve branco no fundo azul */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/80 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-16">
            <span className="font-heading font-bold text-white/70 uppercase tracking-[0.3em] text-sm mb-2 block">
              Garantia de Qualidade
            </span>
            <h2 className="font-heading font-black text-white text-3xl md:text-5xl mb-6">
              POR QUE ESCOLHER A F. SOLUÇÕES?
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((r, i) => (
            <ScrollAnimation key={r.title} variant="fadeUp" delay={i * 0.1}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg hover:bg-white transition-colors duration-500 group h-full flex flex-col">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <r.icon size={22} className="group-hover:scale-110 transition-transform"/>
                </div>
                
                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-3 group-hover:text-secondary transition-colors">
                  {r.title}
                </h3>
                
                <p className="text-white/80 text-sm leading-relaxed font-body group-hover:text-gray-600 transition-colors flex-1">
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
