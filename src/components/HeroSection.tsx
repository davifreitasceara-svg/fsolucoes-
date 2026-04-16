import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronRight, Award, Zap, ShieldCheck, Clock, Users, Cpu, Activity } from "lucide-react";
import heroBg1 from "@/assets/camara_fria_real_1.jpg";
import heroBg2 from "@/assets/estrutura_real_1.jpg";
import heroBg3 from "@/assets/estrutura_real_2.jpg";
import heroBg4 from "@/assets/camara_fria_real_3.jpg";
import heroBg5 from "@/assets/camara_fria_real_6.jpg";

const slides = [
  { img: heroBg1, title: "Especialista em", subtitle: "Refrigeração Comercial", code: "SYS_A1" },
  { img: heroBg2, title: "Expositores e", subtitle: "Sistemas Inteligentes", code: "SYS_B2" },
  { img: heroBg3, title: "Qualidade de Ponta", subtitle: "Para Supermercados", code: "SYS_C3" },
  { img: heroBg4, title: "Soluções Térmicas", subtitle: "Para Indústrias", code: "SYS_D4" },
  { img: heroBg5, title: "Engenharia de Frio", subtitle: "Alta Performance", code: "SYS_E5" }
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
  
  // Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative pt-[120px] bg-background perspective-[2000px]">
      
      <div className="container mx-auto px-4 xl:px-40 pb-20 max-w-[1400px]">
        
        {/* Painel do Slide Principal com Parallax */}
        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative h-[65vh] min-h-[550px] md:h-[75vh] w-full rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)] bg-black"
        >
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].img})`, transform: "translateZ(-10px)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* HUD Tech Overlays */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {/* Corner Brackets */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-white/30" />
            <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-white/30" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-white/30" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-white/30" />

            {/* Scanning Line */}
            <motion.div 
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />

            {/* Live Data Feed (Desktop Only) */}
            <div className="absolute top-10 right-10 hidden xl:flex flex-col items-end gap-2 font-mono text-[10px] text-white/40 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="text-accent">CORE_STATUS:</span>
                <span className="text-white/80">OPERATIONAL</span>
                <Activity size={10} className="text-accent animate-pulse" />
              </div>
              <div>UNIT_ID: F-SOL_{slides[currentSlide].code}</div>
              <div className="flex items-center gap-2">
                LAT_COORDS: 3.7319° S, 38.5267° W
              </div>
            </div>
          </div>

          {/* Painel de Texto de Alta Definicao */}
          <div className="absolute inset-0 z-30 flex flex-col justify-center px-6 md:px-16 lg:px-24" style={{ transform: "translateZ(50px)" }}>
            <div className="max-w-3xl">
              {/* Badge Dinâmica */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-lg border border-white/20 mb-8 shadow-xl"
              >
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                    />
                  ))}
                </div>
                <span className="font-heading font-black text-[11px] text-white uppercase tracking-[0.3em] flex items-center gap-2">
                  <Cpu size={14} className="text-accent" />
                  Sistemas JJ Ativos // 2026
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1 
                  key={`title-${currentSlide}`}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="font-heading text-5xl md:text-6xl lg:text-8xl text-white font-black leading-[1.0] tracking-tighter uppercase mb-6"
                >
                  {slides[currentSlide].title} <br/>
                  <span className="text-accent drop-shadow-[0_0_30px_rgba(0,159,227,0.4)]">{slides[currentSlide].subtitle}</span>
                </motion.h1>
              </div>
              
              <motion.div 
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-2xl mb-12"
              >
                <p className="font-body text-lg md:text-xl text-white/80 font-medium leading-relaxed border-l-2 border-accent pl-6">
                  Engenharia térmica de precisão. Transformamos tecnologia JJ em lucro e eficiência para o seu varejo logístico com montagem especializada.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <a href="#servicos" className="group bg-white text-primary hover:bg-accent hover:text-white px-10 py-5 rounded-xl font-heading font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.2)] inline-flex items-center gap-3">
                  Acessar Central
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Barra de Progresso do Slide e Dots */}
          <div className="absolute bottom-8 left-0 w-full flex flex-col items-center gap-4 z-40">
            <div className="flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className="group relative"
                >
                  <div className={`h-1.5 transition-all duration-700 rounded-full ${i === currentSlide ? 'w-12 bg-accent' : 'w-4 bg-white/20 group-hover:bg-white/50'}`} />
                  {i === currentSlide && (
                    <motion.div 
                      layoutId="activeSlide"
                      className="absolute -inset-1 border border-accent/50 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pilares Estratégicos com Efeito Hover 3D */}
        <div className="mt-8 w-full relative z-40 -top-12 px-2 md:px-0">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 w-full">
              {pillars.map((pillar, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100 group-hover:border-primary">
                    <pillar.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-black text-[10px] text-gray-400 group-hover:text-primary uppercase tracking-[0.2em] transition-colors leading-tight">
                    {pillar.label}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
