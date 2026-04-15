import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Snowflake, LayoutGrid, Wrench, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "Câmaras Frias",
    desc: "Projetos modulares e montagem de câmaras frigoríficas de alto desempenho.",
    features: ["Isolamento térmico EPS/PUR", "Portas industriais sob medida", "Quadros de comando inteligentes"],
    href: "/camaras-frias",
  },
  {
    icon: LayoutGrid,
    title: "Estruturas & Expositores",
    desc: "Equipamentos, ilhas e gôndolas para máxima eficiência energética.",
    features: ["Ilhas de congelados", "Vitrines refrigeradas", "Walk-in coolers"],
    href: "/estruturas",
  },
  {
    icon: Wrench,
    title: "Suporte Técnico O&M",
    desc: "Operação e Manutenção ágil para continuidade operacional absoluta.",
    features: ["Manutenção preventiva", "Reparo de compressores", "Troca de fluidos"],
    href: null,
  },
  {
    icon: Settings,
    title: "Engenharia de Projetos",
    desc: "Cálculo térmico voltado para economia e performance industrial.",
    features: ["Racks multicompressores", "Retrofit de sistemas", "Eficiência energética"],
    href: null,
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-[#050A0C] border-t border-white/5 relative">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="max-w-3xl mb-16">
            <span className="section-tag">
              Especialidades
            </span>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              SOLUÇÕES COMPLETAS EM <br/>
              <span className="text-primary italic">REFRIGERAÇÃO</span>
            </h2>
            <p className="text-white/50 text-lg">
              Integramos as melhores tecnologias do mercado para garantir a integridade dos seus produtos e o menor custo total de propriedade (TCO).
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ScrollAnimation key={s.title} variant="fadeUp" delay={0.1 * i} className="h-full">
              <div className="card-dark group h-full flex flex-col hover:border-primary/50 relative overflow-hidden">
                {/* Accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20 group-hover:bg-primary transition-colors" />
                
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded bg-[#0A1218] flex items-center justify-center border border-white/5 text-primary group-hover:scale-110 transition-transform">
                      <s.icon size={26} strokeWidth={1.5} />
                    </div>
                    {s.href && (
                      <span className="text-[10px] font-heading font-black text-white/20 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full group-hover:border-primary/50 group-hover:text-primary transition-colors">
                        Saiba Mais
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-heading text-2xl font-black text-white uppercase tracking-tight mb-4">
                    {s.title}
                  </h3>
                  
                  <p className="text-white/60 mb-8 flex-1 leading-relaxed text-sm">
                    {s.desc}
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-white/5 mb-8">
                    {s.features.map(feat => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-white/50 font-bold uppercase tracking-wider">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  {s.href ? (
                    <a href={s.href} className="inline-flex items-center gap-2 text-primary font-heading font-black uppercase tracking-widest text-xs hover:text-white transition-colors mt-auto">
                      Ver detalhes
                      <ArrowRight size={14} />
                    </a>
                  ) : (
                    <a href="https://wa.me/5585988543450" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors font-heading font-black uppercase tracking-widest text-xs mt-auto">
                      Solicitar cotação
                      <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
