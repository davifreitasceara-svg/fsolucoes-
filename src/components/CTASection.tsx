import { ScrollAnimation } from "@/components/ScrollAnimation";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";
import ctaBg from "@/assets/cta-bg.jpg";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <FloatingParticles />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <ScrollAnimation variant="fadeUp">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-[hsla(207,100%,50%,1)] glow-text uppercase tracking-wide max-w-4xl mx-auto leading-tight" style={{ textShadow: "0 0 20px rgba(0, 102, 255, 0.5)"}}>
            Transformamos ideias em instalações comerciais eficientes.
          </h2>
          <p className="mt-6 text-xl text-white font-heading font-black uppercase tracking-[0.2em] max-w-2xl mx-auto opacity-80 decoration-primary/50 underline-offset-8">
            Entre em contato com nossa equipe e solicite um projeto para o seu negócio.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Magnetic strength={0.3}>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Button variant="hero" size="lg" className="text-lg px-10 py-8 bg-primary hover:bg-primary-light text-primary-foreground shadow-[0_0_20px_hsla(195,100%,50%,0.6)] border border-accent/50" asChild>
                  <a href="#contato">Solicitar Projeto</a>
                </Button>
              </motion.div>
            </Magnetic>
            <Magnetic strength={0.3}>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Button variant="whatsapp" size="lg" className="text-base px-8 py-6" asChild>
                  <a href="https://wa.me/5585988543450" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </motion.div>
            </Magnetic>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
