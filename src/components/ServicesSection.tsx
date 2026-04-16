import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ArrowRight, PackageOpen, Download } from "lucide-react";
import imgExpositores from "@/assets/camara_fria_real_1.jpg";
import imgCamaras from "@/assets/camara_fria_real_2.jpg";
import imgSistemasFrio from "@/assets/estrutura_real_3.jpg";
import imgPaineis from "@/assets/estrutura_real_5.jpg";

const produtos = [
  {
    title: "Expositores Refrigerados",
    desc: "Ilhas, balcões e gôndolas com controle de umidade e alta vazão para supermercados, maximizando o desejo de compra.",
    img: imgExpositores,
    link: "#",
    tagline: "Varejo & Padarias"
  },
  {
    title: "Câmaras Frigoríficas",
    desc: "Estruturas dimensionadas para congelamento e resfriamento contínuo em grandes centros de distribuição e fábricas.",
    img: imgCamaras,
    link: "#",
    tagline: "Armazenagem"
  },
  {
    title: "Sistemas de Frio",
    desc: "Racks frigoríficos, centrais de água gelada (Chillers) e automação total com sistemas paralelos.",
    img: imgSistemasFrio,
    link: "#",
    tagline: "Engenharia"
  },
  {
    title: "Painéis Industriais",
    desc: "Fechamentos termoisolantes em EPS e PUR para montagem rápida e contenção segura contra variação térmica.",
    img: imgPaineis,
    link: "#",
    tagline: "Infraestrutura"
  }
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-background relative border-t border-gray-100">
      
      {/* Decorative large circle left */}
      <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        
        {/* Cabecalho da Secao estilo Eletrofrio Produtos */}
        <ScrollAnimation variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <PackageOpen className="text-accent" size={24} />
                <span className="font-heading font-black text-accent uppercase tracking-widest text-sm block">
                  Catálogo
                </span>
              </div>
              <h2 className="heading-display text-4xl md:text-5xl uppercase mb-6">
                Produtos <a href="https://jj.ind.br/" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-4 underline-offset-4 hover:opacity-80 transition-opacity">JJ</a>
              </h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed">
                Soluções completas para exposição e conservação de alimentos com design, eficiência e tecnologia de ponta.
                Navegue pelas principais verticais projetadas e instaladas pela F. Soluções.
              </p>
            </div>
            
            <a href="https://wa.me/5585988543450" target="_blank" rel="noopener noreferrer" className="btn-outline-cyan shrink-0">
              Solicitar Catálogo Técnico
              <Download size={18} />
            </a>
          </div>
        </ScrollAnimation>

        {/* Grade de Produtos Estilo Pagina Produtos Eletrofrio */}
        <div className="grid md:grid-cols-2 gap-8">
          {produtos.map((p, i) => (
            <ScrollAnimation key={i} variant="fadeUp" delay={i * 0.1}>
              <div className="card-eletro overflow-hidden group flex flex-col sm:flex-row h-full">
                
                {/* Imagem Cover Esquerda ou Top */}
                <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wide text-primary">
                      {p.tagline}
                    </span>
                  </div>
                </div>

                {/* Conteudo Card */}
                <div className="p-8 flex flex-col flex-1 bg-white">
                  <h3 className="font-heading font-black text-2xl text-primary mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  
                  <div className="w-12 h-1 bg-accent/20 mb-4 rounded-full group-hover:w-24 transition-all duration-500"></div>

                  <p className="font-body text-gray-500 text-sm mb-8 flex-1 leading-relaxed">
                    {p.desc}
                  </p>

                  <a href={p.link} className="inline-flex items-center gap-2 font-heading font-black text-accent hover:text-primary transition-colors text-sm uppercase tracking-widest bg-gray-50 hover:bg-gray-100 self-start px-6 py-3 rounded-xl">
                    Ver Detalhes
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
