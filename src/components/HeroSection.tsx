import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/FloatingParticles";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [0, 800], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1920], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* Background with parallax feel and blue tint */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/40 mix-blend-overlay z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-background/80 to-background z-0" />
      <div className="absolute inset-0 gradient-hero-overlay z-0" />
      
      {/* Floating particles background via tsParticles */}
      <FloatingParticles />

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ rotateX, rotateY, perspective: 1000 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight max-w-5xl mx-auto uppercase tracking-wide">
            Soluções inteligentes em <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              instalações comerciais e refrigeração industrial.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-primary max-w-3xl mx-auto font-body leading-relaxed font-bold"
          style={{ translateZ: 50 }}
        >
          Especialistas em performance e eficiência para o seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          style={{ translateZ: 30 }}
        >
          <motion.div whileHover={{ scale: 1.05, y: -3, translateZ: 20 }} whileTap={{ scale: 0.97 }}>
            <Button variant="hero" size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary-light text-primary-foreground shadow-[0_0_15px_hsla(195,100%,50%,0.5)] border border-accent/50" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -3, translateZ: 20 }} whileTap={{ scale: 0.97 }}>
            <Button variant="whatsapp" size="lg" className="text-base px-8 py-6" asChild>
              <a href="https://wa.me/5585988543450" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#sobre" className="flex flex-col items-center gap-2">
          <span className="text-primary-foreground/70 text-xs font-heading tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="text-primary-foreground/70 animate-bounce-slow" size={28} />
        </a>
      </motion.div>
    </section>
  );
}
