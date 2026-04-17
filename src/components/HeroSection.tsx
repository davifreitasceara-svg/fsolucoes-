import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronRight, Award, Zap, ShieldCheck, Clock, Users, Cpu, Activity, ArrowRight } from "lucide-react";
import heroBg1 from "@/assets/camara_fria_real_1.jpg";
import heroBg2 from "@/assets/estrutura_real_1.jpg";
import heroBg3 from "@/assets/estrutura_real_2.jpg";
import heroBg4 from "@/assets/camara_fria_real_3.jpg";
import heroBg5 from "@/assets/camara_fria_real_6.jpg";

const slides = [
  { img: heroBg1, code: "X-01", status: "THERMAL_OPT" },
  { img: heroBg2, code: "X-02", status: "STRUC_MAX" },
  { img: heroBg3, code: "X-03", status: "COOL_GEN" },
  { img: heroBg4, code: "X-04", status: "IND_FLOW" },
  { img: heroBg5, code: "X-05", status: "REF_CORE" }
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
  
  // Parallax for the whole hero
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative pt-[120px] bg-black overflow-hidden noise-bg perspective-[2000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <div className="container mx-auto px-4 xl:px-40 pb-32 max-w-[1400px] relative z-10">
        
        {/* WIS INSPIRED LAYOUT GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          
          {/* LADO ESQUERDO: Texto e Call to Action */}
          <div className="lg:col-span-6 z-30">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-accent"></div>
                <span className="font-heading font-black text-accent text-xs uppercase tracking-[0.4em]">
                  F. Soluções // Engenharia de Precisão
                </span>
              </div>

              <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] text-white font-black leading-[0.9] tracking-tighter uppercase mb-8">
                F. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white/40">SOLUÇÕES.</span>
              </h1>

              <div className="max-w-md mb-12">
                <p className="font-body text-lg text-white/50 leading-relaxed">
                  Redefinindo os padrões de refrigeração industrial com tecnologia embarcada de última geração. 
                  Sua carga protegida por engenharia milimétrica.
                </p>
              </div>

              <div className="flex items-center gap-8">
                <a 
                  href="#servicos" 
                  className="group bg-accent text-white px-10 py-5 rounded-full font-heading font-black text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-[0_20px_40px_rgba(0,159,227,0.3)] flex items-center gap-3"
                >
                  Ver Soluções
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
                
                <div className="hidden md:flex flex-col">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">System Status</span>
                  <span className="text-xs font-mono text-accent animate-pulse">● OPERATIONAL</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LADO DIREITO: O MESTRE "F" MASK (WIS STYLE) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-[600px]"
            >
              {/* Decorative Outlines que orbitam o F */}
              <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite] scale-125 pointer-events-none" />
              <div className="absolute inset-0 border border-accent/20 rounded-full animate-[spin_15s_linear_reverse_infinite] scale-110 pointer-events-none" />

              {/* O MESTRE "F" COM PROFUNDIDADE 3D */}
              <div className="absolute inset-0 z-20 overflow-hidden flex items-center justify-center pointer-events-none" style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}>
                
                {/* Camada de Profundidade (Sombra/Extrusão) */}
                <div className="absolute inset-0 letter-mask-f bg-primary/40 blur-[2px]" style={{ transform: "translateZ(-15px) translateX(10px) translateY(10px)" }} />
                <div className="absolute inset-0 letter-mask-f bg-primary/20 blur-[1px]" style={{ transform: "translateZ(-8px) translateX(5px) translateY(5px)" }} />
                
                {/* Camada Principal do Mask (Vídeo) */}
                <div className="absolute inset-0 letter-mask-f bg-black/20 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 1.2 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slides[currentSlide].img})` }}
                    >
                      <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Overlay Scanning Line dentro do F */}
                  <motion.div 
                    animate={{ top: ['-20%', '120%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[3px] bg-accent/60 shadow-[0_0_20px_rgba(0,159,227,0.8)] z-30"
                  />
                </div>
              </div>

              {/* Letter Border (Outro "F" só o contorno) - Efeito Glow Superior */}
              <div className="absolute inset-0 z-30 pointer-events-none" style={{ transform: "translateZ(100px)" }}>
                 <svg viewBox="0 0 100 100" className="w-full h-full opacity-60 drop-shadow-[0_0_20px_rgba(0,159,227,1)]">
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" font-family="Montserrat" fontWeight="900" fontSize="110" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-accent italic">F</text>
                 </svg>
              </div>

              {/* Data Floating Elements */}
              <div className="absolute -top-10 -right-10 z-40 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl hidden md:block">
                <p className="font-mono text-[9px] text-accent uppercase tracking-widest mb-1">Unit Tracking</p>
                <p className="font-heading font-black text-xs text-white uppercase">{slides[currentSlide].code}</p>
              </div>

              <div className="absolute -bottom-10 -left-10 z-40 bg-accent p-4 rounded-xl hidden md:block shadow-2xl">
                <p className="font-mono text-[9px] text-white/70 uppercase tracking-widest mb-1">Diagnostic</p>
                <p className="font-heading font-black text-xs text-white uppercase">{slides[currentSlide].status}</p>
              </div>

            </motion.div>

          </div>

        </div>

        {/* ELASTIC SLIDE INDICATORS AND PILLARS (BOTTOM) */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col gap-10">
           <div className="flex justify-between items-center">
              <div className="flex gap-4">
                 {slides.map((_, i) => (
                   <button
                     key={i}
                     onClick={() => setCurrentSlide(i)}
                     className={`h-1 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-16 bg-accent' : 'w-6 bg-white/20'}`}
                   />
                 ))}
              </div>
              
              <div className="hidden md:flex items-center gap-10">
                 <div className="flex flex-col">
                   <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-1">Location</span>
                   <span className="text-[11px] font-heading font-bold text-white uppercase italic">Fortaleza, CE // BR</span>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-1">Timezone</span>
                   <span className="text-[11px] font-heading font-bold text-white uppercase italic">UTC -3:00</span>
                 </div>
              </div>
           </div>

           {/* REINTEGRATED PILLARS: THE TECH STRIP */}
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {pillars.map((pillar, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  whileHover={{ backgroundColor: "rgba(0, 159, 227, 0.1)", borderColor: "rgba(0, 159, 227, 0.5)" }}
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-white/2 group transition-all"
                >
                  <pillar.icon size={20} className="text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-heading font-black text-white/40 group-hover:text-white uppercase tracking-widest text-center">
                    {pillar.label}
                  </span>
                </motion.div>
              ))}
           </div>
        </div>

      </div>

      {/* BACKGROUND GRAPHICS */}
      <div className="absolute top-[40%] left-[-5%] w-[400px] h-[400px] bg-accent/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-accent/10 blur-[150px] pointer-events-none" />

    </section>
  );
}
