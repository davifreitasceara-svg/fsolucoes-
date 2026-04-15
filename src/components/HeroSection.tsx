import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Award, Zap, ShieldCheck, Clock, Users } from "lucide-react";
import heroBg1 from "@/assets/camara_fria_real_1.jpg";
import heroBg2 from "@/assets/estrutura_real_1.jpg";

const slides = [
  { img: heroBg1, title: "Especialista em", subtitle: "Equipamentos de Refrigeração Comercial" },
  { img: heroBg2, title: "Sistemas Racks e", subtitle: "Estruturas de Congelamento Extremo" }
];

const pillars = [
  { icon: Award, label: "Qualidade Comprovada" },
  { icon: Zap, label: "Alta Tecnologia" },
  { icon: ShieldCheck, label: "Garantia Estendida" },
  { icon: Clock, label: "Suporte 24h" },
  { icon: Users, label: "Equipe Qualificada" }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative pt-[120px] bg-background">
      
      {/* Container Principal do Slider (Eletrofrio Curve Radius) */}
      <div className="container mx-auto px-4 pb-20">
        <div className="relative h-[65vh] md:h-[75vh] w-full rounded-3xl overflow-hidden shadow-xl">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].img})` }}
            >
              {/* Degradê Azul Escuro Corporativo Eletrofrio em cima da foto */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Text Content inside the sliding box */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-3xl"
            >
              <h1 className="heading-display text-4xl md:text-6xl lg:text-[5rem] text-white uppercase mb-4">
                {slides[currentSlide].title} <br/>
                <span className="text-accent">{slides[currentSlide].subtitle}</span>
              </h1>
              <p className="font-body text-xl text-white/90 mb-10 max-w-lg">
                Projetos e instalações otimizadas para supermercados, pequenos varejos e CD's logísticos.
              </p>
              
              <div className="flex gap-4">
                <a href="#servicos" className="btn-cyan shadow-lg">
                  Nossos Produtos
                  <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Dots Controls */}
          <div className="absolute bottom-8 left-0 w-full flex justify-center gap-3 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-300 rounded-full h-3 ${i === currentSlide ? 'w-10 bg-accent' : 'w-3 bg-white/50 hover:bg-white'}`}
              />
            ))}
          </div>
        </div>

        {/* Pilares Eletrofrio Sub-Hero */}
        <div className="mt-16 w-full opacity-0 animate-[fade-in-up_0.8s_ease-out_1s_forwards]">
          <div className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,75,135,0.05)] border border-gray-100/50">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-x divide-gray-100">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center px-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-50/80 rounded-[1.25rem] flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                    <pillar.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-primary uppercase tracking-wide">
                    {pillar.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
