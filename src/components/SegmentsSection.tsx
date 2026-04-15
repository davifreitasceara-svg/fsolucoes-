import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Store, Factory, ShoppingCart } from "lucide-react";
import project_supermarket from "@/assets/camara_fria_real_1.jpg";
import project_bakery from "@/assets/estrutura_real_2.jpg";
import project_market from "@/assets/camara_fria_real_3.jpg";

const segments = [
  { 
    icon: ShoppingCart, 
    label: "Supermercados & Atacarejos", 
    image: project_supermarket,
    gridClass: "md:col-span-2 md:row-span-2",
    tech: "Rack Systems / Expositoras"
  },
  { 
    icon: Store, 
    label: "Pequeno Varejo & Padarias", 
    image: project_bakery,
    gridClass: "md:col-span-1 md:row-span-1",
    tech: "Plug-in / Balcões"
  },
  { 
    icon: Factory, 
    label: "Indústria & Centros de Distribuição", 
    image: project_market,
    gridClass: "md:col-span-1 md:row-span-1",
    tech: "Câmaras Modulares HD"
  },
];

export function SegmentsSection() {
  return (
    <section id="segmentos" className="section-padding bg-white relative">
      <div className="container mx-auto">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="section-tag justify-center">
              Aplicações
            </span>
            <h2 className="heading-display text-4xl md:text-6xl text-[#0d1520] mb-6">
              SOLUÇÕES PARA CADA <br/>
              MODELO DE <span className="text-primary italic">NEGÓCIO</span>
            </h2>
            <p className="text-[#64748b] text-base md:text-lg">
              Dimensionamos os equipamentos e a infraestrutura térmica de acordo com as exigências da sua operação. Do pequeno varejo aos grandes centros de distribuição.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {segments.map((s, i) => (
            <ScrollAnimation key={s.label} variant="scaleIn" delay={i * 0.1} className={s.gridClass}>
              <div className="relative h-full w-full rounded-2xl overflow-hidden group bg-[#0d1520]">
                {/* Imagem de Fundo (Escurecida com hover p/ clarear sutilmente) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
                
                {/* Gradient corporativo (teal blending) */}
                <div className="absolute inset-0 bg-[#0d1520]/80 mix-blend-multiply group-hover:bg-[#0d1520]/60 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520] via-transparent to-transparent opacity-90" />
                
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                      <s.icon size={22} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div>
                    <span className="text-primary font-heading font-black text-[10px] uppercase tracking-widest mb-2 block">
                      {s.tech}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none mb-3 group-hover:text-primary transition-colors">
                      {s.label}
                    </h3>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
