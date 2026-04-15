import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const projects = [
  { img: project1, title: "Câmara Frigorífica", cat: "Supermercado" },
  { img: project2, title: "Vitrine Refrigerada", cat: "Padaria" },
  { img: project3, title: "Balcão de Carnes", cat: "Açougue" },
  { img: project4, title: "Cozinha Industrial", cat: "Restaurante" },
  { img: project5, title: "Sistema de Refrigeração", cat: "Supermercado" },
  { img: project6, title: "Mercado São Luiz", cat: "Mercado" },
];

export function ProjectsSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="projetos" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-[0.03] bg-accent blur-3xl" />

      <div className="container mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-16">
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-bold text-foreground">
              Projetos <span className="text-gradient">Realizados</span>
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ScrollAnimation key={i} variant="scaleIn" delay={i * 0.1}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-card border border-border/30"
                onClick={() => setLightbox(i)}
                whileHover={{
                  y: -25,
                  rotateX: 15,
                  rotateY: -15,
                  scale: 1.05,
                  boxShadow: "0 30px 60px -15px hsla(195,100%,50%,0.6)",
                  zIndex: 20,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                style={{ perspective: 1200, transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="w-full h-64 relative"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ translateZ: 60 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover origin-center"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    loading="lazy"
                  />
                  
                  {/* Neon border effect on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/80 transition-all duration-500 rounded-2xl z-20 pointer-events-none shadow-[inset_0_0_20px_hsla(195,100%,50%,0.5)] opacity-0 group-hover:opacity-100" />
                </motion.div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-primary-foreground/10 to-transparent" style={{ transform: "translateZ(100px)" }} />
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
            className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotateX: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
              style={{ perspective: 1200 }}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={projects[lightbox].img}
                alt={projects[lightbox].title}
                className="w-full rounded-2xl object-cover max-h-[80vh]"
              />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
