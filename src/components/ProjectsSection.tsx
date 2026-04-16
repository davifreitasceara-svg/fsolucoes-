import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { X, Search } from "lucide-react";
import project1 from "@/assets/camara_fria_real_5.jpg";
import project2 from "@/assets/camara_fria_real_2.jpg";
import project3 from "@/assets/estrutura_real_3.jpg";
import project4 from "@/assets/camara_fria_real_4.jpg";
import project5 from "@/assets/estrutura_real_5.jpg";
import project6 from "@/assets/camara_fria_real_6.jpg";

const projects = [
  { img: project1, title: "Câmara Modular de Frios", cat: "Expansão de Supermercado" },
  { img: project2, title: "Expositores Verticais", cat: "Rede de Atacarejo" },
  { img: project3, title: "Ilha de Congelados", cat: "Instalação Premium" },
  { img: project4, title: "Painéis e Tubulação Gás", cat: "Centro Distribuição" },
  { img: project5, title: "Walk-in Cooler Completo", cat: "Loja de Conveniência" },
  { img: project6, title: "Central Termoelétrica", cat: "Indústria" },
];

export function ProjectsSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="projetos" className="section-padding bg-background relative border-t border-gray-100">
      <div className="container mx-auto px-4 xl:px-40 max-w-[1400px]">
        <ScrollAnimation variant="fadeUp">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
            <div>
              <span className="font-heading font-black text-accent uppercase tracking-[0.2em] text-sm mb-4 block">
                Galeria de Cases
              </span>
              <h2 className="heading-display text-4xl md:text-5xl uppercase text-primary">
                Obras da <span className="text-accent underline decoration-4 underline-offset-8">F. Soluções</span>
              </h2>
            </div>
            <a href="https://instagram.com/fsolucoes_instalacoes" target="_blank" rel="noopener noreferrer" className="btn-outline-cyan bg-white mt-6 md:mt-0">
              Acompanhar Obras no Instagram
            </a>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ScrollAnimation key={i} variant="fadeUp" delay={i * 0.1}>
              <div 
                className="card-eletro group relative cursor-pointer overflow-hidden bg-white"
                onClick={() => setLightbox(i)}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_40px_rgba(0,159,227,0.6)]">
                      <Search className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white z-10 relative">
                  <span className="text-[10px] font-body font-bold uppercase tracking-widest text-accent block mb-2">
                    {p.cat}
                  </span>
                  <h3 className="font-heading font-black text-secondary text-lg leading-snug group-hover:text-primary transition-colors uppercase">
                    {p.title}
                  </h3>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Lightbox Corporal Eletrofrio */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 bg-white rounded-t-2xl">
                <div>
                  <h3 className="font-heading font-black text-2xl text-primary uppercase tracking-wide">{projects[lightbox].title}</h3>
                  <span className="text-sm text-gray-500 font-bold uppercase tracking-wide">{projects[lightbox].cat}</span>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="bg-gray-100 rounded-b-2xl overflow-hidden relative" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                 <img
                  src={projects[lightbox].img}
                  alt={projects[lightbox].title}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
