import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ShieldCheck, ThermometerSnowflake, Settings2 } from "lucide-react";
import heroBg from "@/assets/camara_fria_real_1.jpg"; // Usando foto real do projeto como fundo

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Efeito parallax mais sutil
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="inicio"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#050A0C]"
      ref={containerRef}
    >
      {/* Background Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center object-cover scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Overlays corporativos escuros (teal escuro) */}
        <div className="absolute inset-0 bg-[#001015]/80 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001015] via-[#001015]/90 to-transparent z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] z-0 mix-blend-overlay" />
      </motion.div>

      {/* Grid Pattern sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-6 pt-32 pb-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Copy */}
        <motion.div 
          className="flex-1 max-w-3xl"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-heading font-bold text-xs uppercase tracking-[0.3em]">
              Excelência em Instalações Comerciais
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl text-white mb-6"
          >
            TECNOLOGIA EM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              REFRIGERAÇÃO
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl font-body leading-relaxed mb-10"
          >
            Sistemas completos de câmaras frigoríficas, expositores e engenharia de refrigeração para supermercados e a indústria de alimentos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a 
              href="https://wa.me/5585988543450" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-white px-8 py-4 flex items-center justify-center gap-3 font-heading font-bold uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,129,138,0.4)]"
            >
              Falar com Engenharia
              <Settings2 size={16} />
            </a>
            <a 
              href="#projetos"
              className="px-8 py-4 flex items-center justify-center gap-3 font-heading font-bold uppercase tracking-[0.15em] text-sm text-white/80 border border-white/20 hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              Conhecer Projetos
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Info Panel (Módulo corporativo) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="hidden lg:flex flex-col gap-4 w-72 mt-20 lg:mt-0"
        >
          {/* Card Indicador 1 */}
          <div className="bg-[#0A1218]/80 backdrop-blur-md border border-white/10 p-5 shrink-0 flex items-start gap-4">
            <ThermometerSnowflake className="text-primary mt-1" size={24} />
            <div>
              <p className="text-primary font-heading font-black text-[10px] uppercase tracking-widest mb-1">Controle Preciso</p>
              <p className="text-white/70 text-xs leading-relaxed">Alta eficiência energética para grandes volumes.</p>
            </div>
          </div>
          
          {/* Card Indicador 2 */}
          <div className="bg-[#0A1218]/80 backdrop-blur-md border border-white/10 p-5 shrink-0 flex items-start gap-4">
            <ShieldCheck className="text-primary mt-1" size={24} />
            <div>
              <p className="text-primary font-heading font-black text-[10px] uppercase tracking-widest mb-1">Garantia Ativa</p>
              <p className="text-white/70 text-xs leading-relaxed">Suporte técnico especializado 24/7 para sua indústria.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-6 md:left-12 flex items-center gap-4 z-10"
      >
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-primary animate-scan" />
        </div>
        <span className="text-white/40 text-[10px] font-heading font-bold uppercase tracking-[0.4em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
