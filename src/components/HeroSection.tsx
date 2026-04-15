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
        <div className="relative h-[65vh] min-h-[500px] md:h-[75vh] w-full rounded-3xl overflow-hidden shadow-2xl">
          
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
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="font-heading font-bold text-[10px] text-white uppercase tracking-widest leading-none pt-0.5">
                  Operando em todo o Brasil
                </span>
              </div>

              <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white uppercase mb-6 drop-shadow-xl" style={{ textShadow: "0 4px 30px rgba(0,75,135,0.5)"}}>
                {slides[currentSlide].title} <br/>
                <span className="text-accent underline decoration-4 underline-offset-8 decoration-accent/50">{slides[currentSlide].subtitle}</span>
              </h1>
              
              <div className="bg-primary/20 backdrop-blur-sm border-l-4 border-accent p-6 rounded-r-2xl max-w-2xl mb-10 shadow-lg">
                <p className="font-body text-lg text-white font-semibold leading-relaxed">
                  Soluções completas para exposição e conservação de alimentos com design, eficiência e tecnologia de ponta. Desenvolvidos lado a lado com a indústria.
                </p>
              </div>
              
              <div className="flex gap-4">
                <a href="#servicos" className="btn-cyan shadow-[0_10px_30px_rgba(0,159,227,0.4)] hover:-translate-y-1 transition-all">
                  Conheça a Linha
                  <ChevronRight size={20} />
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

        {/* Pilares Eletrofrio / Sub-Hero Melhorado */}
        <div className="mt-8 w-full opacity-0 animate-[fade-in-up_0.8s_ease-out_1s_forwards] relative z-20 -top-16 px-4 md:px-12">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,75,135,0.1)] border border-gray-100 flex items-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 flex-1 md:divide-x divide-gray-100">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center px-2 group cursor-pointer">
                  <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-accent group-hover:text-white group-hover:-translate-y-2 transition-all duration-300 shadow-sm">
                    <pillar.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-black text-[11px] text-gray-400 group-hover:text-primary uppercase tracking-widest transition-colors">
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
