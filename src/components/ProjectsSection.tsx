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
  { img: project1, title: "Câmara de Congelados", cat: "Obras Ceará" },
  { img: project2, title: "Sistema Modular", cat: "Obras Ceará" },
  { img: project3, title: "Mobiliário Expositor", cat: "Obras Piauí" },
  { img: project4, title: "Painéis e Tubulação", cat: "Obras Ceará" },
  { img: project5, title: "Walk-in Cooler", cat: "Obras Rio G. Norte" },
  { img: project6, title: "Central Termoelétrica", cat: "Obras Ceará" },
];

export function ProjectsSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="projetos" className="section-padding bg-gray-50 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollAnimation variant="fadeUp">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-6">
            <div>
              <h2 className="heading-display text-3xl md:text-5xl uppercase text-primary">
                Obras <span className="text-accent">Realizadas</span>
              </h2>
            </div>
            <a href="https://instagram.com/fsolucoes_instalacoes" target="_blank" rel="noopener noreferrer" className="btn-outline-cyan mt-6 md:mt-0">
              Ver Galeria
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
                  <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                      <Search className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-body font-bold uppercase tracking-widest text-accent block mb-2">
                    {p.cat}
                  </span>
                  <h3 className="font-heading font-bold text-secondary text-lg leading-snug group-hover:text-primary transition-colors uppercase">
                    {p.title}
                  </h3>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Lightbox Corporal */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white">
                <div>
                  <h3 className="font-heading font-black text-xl text-primary uppercase">{projects[lightbox].title}</h3>
                  <span className="text-xs text-accent font-bold uppercase tracking-wide">{projects[lightbox].cat}</span>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-100 hover:bg-accent hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-4 bg-gray-100">
                <img
                  src={projects[lightbox].img}
                  alt={projects[lightbox].title}
                  className="w-full object-contain max-h-[70vh] rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
