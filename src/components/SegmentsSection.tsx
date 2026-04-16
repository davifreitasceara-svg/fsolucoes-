import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Store, Factory, ShoppingCart } from "lucide-react";
import project_supermarket from "@/assets/camara_fria_real_1.jpg";
import project_bakery from "@/assets/estrutura_real_2.jpg";
import project_market from "@/assets/camara_fria_real_3.jpg";

const segments = [
  { 
    icon: ShoppingCart, 
    label: "Supermercados", 
    image: project_supermarket,
  },
  { 
    icon: Store, 
    label: "Pequeno Varejo", 
    image: project_bakery,
  },
  { 
    icon: Factory, 
    label: "Centros Logísticos", 
    image: project_market,
  },
];

export function SegmentsSection() {
  return (
    <section id="segmentos" className="section-padding bg-background relative">
      <div className="container mx-auto px-4 xl:px-40 max-w-[1400px]">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-16">
            <h2 className="heading-display text-4xl md:text-5xl uppercase mb-6 text-primary">
              Categorias de <span className="text-accent underline decoration-4 underline-offset-4">Aplicação</span>
            </h2>
            <p className="font-body text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Equipamos os ambientes mais exigentes do varejo e logística, provendo robustez do pequeno mercadinho às grandes malhas industriais.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((s, i) => (
            <ScrollAnimation key={s.label} variant="scaleIn" delay={i * 0.1}>
              <div className="card-eletro overflow-hidden group">
                <div className="h-64 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${s.image})` }}
                  />
                  <div className="absolute inset-0 bg-secondary/60 group-hover:bg-primary/80 transition-colors duration-500 opacity-60 mix-blend-multiply" />
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-accent shadow-xl group-hover:-translate-y-6 transition-transform duration-300">
                    <s.icon size={32} />
                  </div>
                </div>
                
                <div className="p-8 text-center bg-white group-hover:bg-gray-50 transition-colors duration-500 relative z-10 border-t-4 border-accent">
                  <h3 className="font-heading text-xl font-black text-secondary group-hover:text-primary uppercase tracking-wide transition-colors m-0">
                    {s.label}
                  </h3>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
