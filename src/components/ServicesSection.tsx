import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Snowflake, LayoutGrid, Wrench, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "Câmaras Frigoríficas",
    desc: "Câmaras frias modulares sob medida para armazenamento em médias e baixas temperaturas com alta eficiência térmica.",
    href: "/camaras-frias",
  },
  {
    icon: LayoutGrid,
    title: "Mobiliário Refrigerado",
    desc: "Expositores, ilhas e gôndolas de alta performance que valorizam o produto e economizam energia na loja.",
    href: "/estruturas",
  },
  {
    icon: Wrench,
    title: "Instalação e Manutenção",
    desc: "Equipe técnica própria especializada em startup ágil, manutenção corretiva e preventiva para operações críticas.",
    href: null,
  },
  {
    icon: Settings,
    title: "Projetos Especiais",
    desc: "Sistemas Rack (compressor paralelo), cálculo de carga térmica e plantas inteligentes integradas à sua planta.",
    href: null,
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-[#f4f7f9] relative">
      <div className="container mx-auto px-6">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-heading font-black text-accent uppercase tracking-widest text-sm mb-2 block">
              Nosso Portfólio
            </span>
            <h2 className="font-heading font-black text-secondary text-3xl md:text-5xl mb-6">
              SOLUÇÕES COMPLETAS EM <span className="text-primary">REFRIGERAÇÃO</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 font-body text-lg">
              Integramos os melhores equipamentos e tecnologias do mercado para garantir a integridade térmica dos seus produtos com o menor custo de operação.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <ScrollAnimation key={s.title} variant="fadeUp" delay={0.1 * i} className="h-full">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 group flex flex-col h-full overflow-hidden">
                {/* Linha superior colorida */}
                <div className="h-1 w-full bg-gray-200 group-hover:bg-primary transition-colors"></div>
                
                <div className="p-8 flex-1 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-[#f4f7f9] flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <s.icon size={36} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-secondary mb-4">
                    {s.title}
                  </h3>
                  
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-6 flex-1">
                    {s.desc}
                  </p>
                  
                  {s.href ? (
                    <a href={s.href} className="inline-flex items-center justify-center gap-2 text-primary font-heading font-bold uppercase text-xs hover:text-secondary hover:gap-3 transition-all mt-auto py-2 px-6 border border-primary rounded-full hover:bg-primary/5">
                      Saber Mais
                      <ArrowRight size={14} />
                    </a>
                  ) : (
                    <a href="https://wa.me/5585988543450" className="inline-flex items-center justify-center gap-2 text-gray-400 font-heading font-bold uppercase text-xs hover:text-primary transition-all mt-auto py-2">
                      Consultar Especialista
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
