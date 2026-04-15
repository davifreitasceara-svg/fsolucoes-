import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ArrowRight } from "lucide-react";
import imgCamara from "@/assets/camara_fria_real_2.jpg";
import imgGondola from "@/assets/estrutura_real_3.jpg";
import imgCentral from "@/assets/camara_fria_real_6.jpg";

const products = [
  {
    title: "Câmaras Frias",
    desc: "Câmaras frigoríficas para conservação em baixas e médias temperaturas com alta resistência térmica.",
    img: imgCamara,
    link: "#"
  },
  {
    title: "Vitrines & Expositor",
    desc: "A melhor apresentação para o seu produto, garantindo performance e isolamento nas lojas.",
    img: imgGondola,
    link: "#"
  },
  {
    title: "Centrais e Racks Água",
    desc: "Confiabilidade para grandes centrais térmicas com painéis de automação avançados.",
    img: imgCentral,
    link: "#"
  }
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-16">
            <h2 className="heading-display text-4xl md:text-5xl uppercase mb-6">
              Principais <span className="text-accent">Produtos</span>
            </h2>
            <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto">
              Sistemas inteligentes construídos com rigor e tecnologia sob medida para o tamanho da sua necessidade.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ScrollAnimation key={i} variant="fadeUp" delay={i * 0.1}>
              <div className="card-eletro overflow-hidden group flex flex-col h-full cursor-pointer">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-heading font-black text-2xl text-primary mb-4 uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="font-body text-gray-600 mb-8 flex-1 leading-relaxed">
                    {p.desc}
                  </p>
                  <a href={p.link} className="flex items-center gap-2 font-heading font-bold text-accent group-hover:text-primary transition-colors text-sm uppercase tracking-wide">
                    Acessar Linha Completa
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
