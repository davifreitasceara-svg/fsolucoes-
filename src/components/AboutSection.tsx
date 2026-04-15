import { ScrollAnimation, useCounter } from "@/components/ScrollAnimation";
import { Award, Clock, Zap, Headphones } from "lucide-react";

export function AboutSection() {
  const stats = [
    { value: 500, suffix: "+", label: "Obras Entregues" },
    { value: 12, suffix: " anos", label: "de Experiência" },
    { value: 100, suffix: "%", label: "Projetos Otimizados" },
  ];

  return (
    <section id="sobre" className="section-padding bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <ScrollAnimation variant="fadeRight">
            <div>
              <span className="font-heading font-black text-accent uppercase tracking-widest text-sm mb-2 block">
                Sobre a F. Soluções
              </span>
              <h2 className="font-heading font-black text-secondary text-4xl md:text-5xl lg:text-6xl mb-6">
                TECNOLOGIA EM <br/>REFRIGERAÇÃO COMERCIAL E INDUSTRIAL
              </h2>
              
              <div className="w-20 h-1 bg-accent mb-8"></div>
              
              <div className="space-y-6 text-gray-600 font-body text-lg leading-relaxed">
                <p>
                  Atuamos há mais de uma década desenvolvendo projetos estruturados de refrigeração para supermercados, 
                  centros de distribuição e pequenos varejos. 
                </p>
                <p>
                  Nossos sistemas são dimensionados para garantir o <strong>menor consumo energético</strong> e a 
                  <strong> maior eficiência térmica</strong>, utilizando componentes das principais fabricantes mundiais 
                  para assegurar estabilidade operacional 24 horas por dia.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12 pt-10 border-t border-gray-100">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="flex items-baseline gap-1 mb-1 text-secondary">
                      <span className="font-heading font-black text-4xl">
                        <AnimatedCount value={s.value} />
                      </span>
                      <span className="font-heading font-bold text-xl">{s.suffix}</span>
                    </div>
                    <p className="font-body text-sm text-gray-500 font-bold uppercase tracking-wide">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeLeft" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* Background accent block */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gray-50 rounded-lg -z-10 scale-110"></div>
              
              {[
                { icon: Award, label: "Excelência", desc: "Qualidade de montagem superior em tubulações e painéis." },
                { icon: Zap, label: "Sustentabilidade", desc: "Uso consciente de fluidos e energia." },
                { icon: Clock, label: "Cumprimento de Prazos", desc: "Obras finalizadas sempre dentro do cronograma." },
                { icon: Headphones, label: "Assistência", desc: "Equipe técnica disponível para pós-venda." }
              ].map((f, i) => (
                <div key={i} className="bg-white p-8 shadow-[0_10px_40px_rgba(0,40,80,0.05)] border border-gray-100 rounded-lg hover:shadow-xl hover:border-primary/20 transition-all group">
                  <div className="w-14 h-14 bg-gray-50 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <f.icon size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-secondary text-lg mb-2">{f.label}</h3>
                  <p className="font-body text-gray-500 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}

function AnimatedCount({ value }: { value: number }) {
  const { count, ref } = useCounter(value);
  return <span ref={ref}>{count}</span>;
}
