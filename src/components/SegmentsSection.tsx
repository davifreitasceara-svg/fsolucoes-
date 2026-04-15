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
    desc: "Câmaras frias, ilhas e centrais de grande porte para alta rotatividade."
  },
  { 
    icon: Store, 
    label: "Pequeno Varejo & Padarias", 
    image: project_bakery,
    desc: "Balcões, vitrines e refrigeração local com design atrativo."
  },
  { 
    icon: Factory, 
    label: "Indústria & Centros Distribuição", 
    image: project_market,
    desc: "Sistemas complexos com garantia de temperatura padronizada e TCO reduzido."
  },
];

export function SegmentsSection() {
  return (
    <section id="segmentos" className="section-padding bg-white relative">
      <div className="container mx-auto px-6">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-heading font-black text-accent uppercase tracking-widest text-sm mb-2 block">
              Setores Atendidos
            </span>
            <h2 className="font-heading font-black text-secondary text-3xl md:text-5xl mb-6">
              REFRIGERAÇÃO ESTRATÉGICA PARA O <span className="text-primary">SEU NEGÓCIO</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((s, i) => (
            <ScrollAnimation key={s.label} variant="scaleIn" delay={i * 0.1}>
              <div className="bg-white rounded overflow-hidden shadow-lg border border-gray-100 group">
                <div className="h-64 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${s.image})` }}
                  />
                  <div className="absolute inset-0 bg-secondary/80 group-hover:bg-primary/80 transition-colors duration-500 opacity-60 mix-blend-multiply" />
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform">
                    <s.icon size={28} />
                  </div>
                </div>
                
                <div className="p-8 text-center bg-gray-50 group-hover:bg-primary transition-colors duration-500">
                  <h3 className="font-heading text-xl font-bold text-secondary group-hover:text-white mb-3 transition-colors">
                    {s.label}
                  </h3>
                  <p className="font-body text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                    {s.desc}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
