import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Award, Zap, ShieldCheck, Clock, Users } from "lucide-react";
import heroBg1 from "@/assets/camara_fria_real_1.jpg";
import heroBg2 from "@/assets/estrutura_real_1.jpg";
import heroBg3 from "@/assets/estrutura_real_2.jpg";
import heroBg4 from "@/assets/camara_fria_real_3.jpg";
import heroBg5 from "@/assets/camara_fria_real_6.jpg";

const slides = [
  { img: heroBg1, title: "Especialista em", subtitle: "Refrigeração Comercial" },
  { img: heroBg2, title: "Expositores e", subtitle: "Sistemas Inteligentes" },
  { img: heroBg3, title: "Qualidade de Ponta", subtitle: "Para Supermercados" },
  { img: heroBg4, title: "Soluções Térmicas", subtitle: "Para Indústrias" },
  { img: heroBg5, title: "Engenharia de Frio", subtitle: "Alta Performance" }
];

const pillars = [
  { icon: Award, label: "Produtos Otimizados" },
  { icon: Zap, label: "Alta Eficiência Térmica" },
  { icon: ShieldCheck, label: "Confiança Total" },
  { icon: Clock, label: "Instalação Ágil" },
  { icon: Users, label: "Assitência Diferenciada" }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Passa mais rapido (5 segundos)
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative pt-[120px] bg-background">
      
      <div className="container mx-auto px-4 pb-20 max-w-[1400px]">
        
        {/* Painel do Slide Principal */}
        <div className="relative h-[65vh] min-h-[500px] md:h-[75vh] w-full rounded-2xl overflow-hidden shadow-2xl">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Painel de Texto de Alta Definicao */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              {/* Badge Super Clean Eletrofrio */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded border border-white/20 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                <span className="font-body font-medium text-[11px] text-white uppercase tracking-[0.2em]">
                  Operando em todo o Brasil
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl text-white font-black leading-[1.05] tracking-tighter uppercase mb-8">
                {slides[currentSlide].title} <br/>
                <span className="text-accent">{slides[currentSlide].subtitle}</span>
              </h1>
              
              <div className="max-w-2xl mb-12">
                <p className="font-body text-lg md:text-xl text-white/90 font-medium leading-relaxed">
                  Soluções completas para exposição e conservação de alimentos com design, eficiência e tecnologia de ponta. Engenharia de precisão para o mercado varejista e logístico.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="#servicos" className="bg-[#004B87] hover:bg-[#003a6a] text-white px-10 py-4 rounded-md font-body font-bold text-sm uppercase tracking-widest transition-all shadow-xl inline-flex items-center gap-3">
                  Catálogo de Soluções
                  <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Controle de Dots Modernos (Barrinhas) */}
          <div className="absolute bottom-8 left-0 w-full flex justify-center gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-500 rounded-full h-1.5 cursor-pointer ${i === currentSlide ? 'w-16 bg-accent' : 'w-6 bg-white/40 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>

        {/* Pilares Estratégicos */}
        <div className="mt-8 w-full opacity-0 animate-[fade-in-up_0.8s_ease-out_1s_forwards] relative z-20 -top-12 px-2 md:px-0">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300">
                  <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center text-primary mb-6 group-hover:bg-[#004B87] group-hover:text-white group-hover:-translate-y-1 transition-all duration-500 shadow-sm">
                    <pillar.icon size={28} strokeWidth={1.2} />
                  </div>
                  <h3 className="font-body font-bold text-[12px] text-gray-500 group-hover:text-primary uppercase tracking-[0.15em] transition-colors">
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
