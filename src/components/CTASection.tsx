import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ArrowRight, MessageCircle, Wrench, ShieldCheck } from "lucide-react";
import ctaBg from "@/assets/estrutura_real_1.jpg";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function CTASection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-24 bg-background relative z-10 perspective-[2000px]">
      <div className="container mx-auto px-4 xl:px-56 max-w-[1400px]">
        <ScrollAnimation variant="fadeUp">
          
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-[3rem] shadow-2xl bg-primary flex flex-col lg:flex-row min-h-[400px] cursor-pointer"
          >
            
            {/* Lado Esquerdo - Fundo com Imagem em 3D */}
            <div className="lg:w-1/2 relative min-h-[300px] lg:h-auto overflow-hidden rounded-t-[3rem] lg:rounded-tr-none lg:rounded-l-[3rem]" style={{ transform: "translateZ(0px)" }}>
              <img 
                src={ctaBg} 
                alt="Projetos" 
                className="absolute inset-0 w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
              
              <div className="absolute inset-0 p-8 lg:p-16 flex flex-col justify-center" style={{ transform: "translateZ(30px)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="text-accent" size={28} />
                  <span className="font-heading font-black text-accent uppercase tracking-widest text-sm">
                    Assistência Comercial
                  </span>
                </div>
                <h2 className="heading-display text-4xl lg:text-5xl text-white uppercase leading-[1.1] mb-6 drop-shadow-xl">
                  Transformamos ideias em instalações <br/>
                  <span className="text-accent underline decoration-4 underline-offset-4">Eficientes</span>.
                </h2>
                <div className="flex flex-col mt-auto">
                  <div className="flex items-center gap-2 text-white/80 font-heading font-bold text-sm uppercase">
                    <ShieldCheck size={18} className="text-accent"/> Garantia de Qualidade Máxima
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito - Glass Card Interativo que flutua alto no 3D */}
            <div className="lg:w-1/2 bg-eletro-pattern relative rounded-b-[3rem] lg:rounded-bl-none lg:rounded-r-[3rem] flex flex-col justify-center p-8 lg:p-16">
              
              <div className="absolute -top-[20%] -left-[10%] w-[300px] h-[300px] rounded-full bg-accent/30 blur-[80px]" />
              
              {/* O Card Descola do eixo z fortemente (translateZ +80px) */}
              <div 
                className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/30 rounded-[2rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
                style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
              >
                <p className="text-white text-lg font-body font-semibold mb-8 tracking-wide drop-shadow-md leading-relaxed" style={{ transform: "translateZ(20px)" }}>
                  Entre em contato com nossa equipe técnica de orçamentação e solicite um projeto dimensionado para o seu negócio.
                </p>

                <div className="flex flex-col sm:flex-row gap-5" style={{ transform: "translateZ(50px)" }}>
                  <a 
                    href="#contato"
                    className="flex-1 bg-white text-primary hover:bg-gray-100 transition-colors duration-300 font-heading font-black px-6 py-4 rounded-[1.25rem] uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl"
                  >
                    Solicitar Projeto
                    <ArrowRight size={18} />
                  </a>
                  
                  <a 
                    href="https://wa.me/5585988543450"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-[#25D366] to-[#1ebd5a] hover:from-[#1ebd5a] hover:to-[#179c4a] text-white transition-colors duration-300 font-heading font-black px-6 py-4 rounded-[1.25rem] uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl"
                  >
                    WhatsApp
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>

            </div>

          </motion.div>

        </ScrollAnimation>
      </div>
    </section>
  );
}
