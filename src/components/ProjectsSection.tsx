import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import project1 from "@/assets/camara_fria_real_5.jpg";
import project2 from "@/assets/camara_fria_real_2.jpg";
import project3 from "@/assets/estrutura_real_3.jpg";
import project4 from "@/assets/camara_fria_real_4.jpg";
import project5 from "@/assets/estrutura_real_5.jpg";
import project6 from "@/assets/camara_fria_real_6.jpg";

const projects = [
  { img: project1, title: "Câmara de Congelados", cat: "Centro de Distribuição" },
  { img: project2, title: "Câmara Fria Modular", cat: "Açougue" },
  { img: project3, title: "Expositores Verticais", cat: "Supermercado" },
  { img: project4, title: "Cozinha Industrial", cat: "Restaurante" },
  { img: project5, title: "Walk-in Cooler", cat: "Loja de Conveniência" },
  { img: project6, title: "Sistema Central", cat: "Atacadista" },
];

export function ProjectsSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="projetos" className="section-padding bg-[#f8fafc] relative">
      <div className="container mx-auto">
        <ScrollAnimation variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-tag">Nossas Obras</span>
              <h2 className="heading-display text-4xl md:text-6xl text-[#0d1520]">
                PROJETOS <br/>
                <span className="text-primary italic">EXECUTADOS</span>
              </h2>
            </div>
            <a href="https://instagram.com/fsolucoes_instalacoes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-heading font-black uppercase tracking-widest text-sm hover:text-[#0d1520] transition-colors pb-2">
              Ver portfólio completo
              <ArrowUpRight size={18} />
            </a>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ScrollAnimation key={i} variant="fadeUp" delay={i * 0.1}>
              <motion.div
                className="group cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-[#e2e8f0] mb-4">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
                  
                  {/* Ícone de zoom */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="text-primary" size={20} />
                  </div>

                  <div className="absolute top-3 right-3 bg-white px-3 py-1 text-[10px] font-heading font-black uppercase tracking-widest text-[#0d1520]">
                    {p.cat}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading font-black text-lg text-[#0d1520] uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0d1520]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="bg-white p-2 shadow-2xl">
                <img
                  src={projects[lightbox].img}
                  alt={projects[lightbox].title}
                  className="w-full object-contain max-h-[75vh]"
                />
                <div className="p-4 flex justify-between items-center bg-white border-t border-gray-100">
                  <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-[#0d1520]">{projects[lightbox].title}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#64748b] bg-gray-100 px-3 py-1">{projects[lightbox].cat}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
