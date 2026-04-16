import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Instagram, MapPin, Heart, Plus } from "lucide-react";
import img1 from "@/assets/camara_fria_real_1.jpg";
import img2 from "@/assets/estrutura_real_2.jpg";
import img3 from "@/assets/camara_fria_real_3.jpg";

export function AboutSection() {
  // Configuração para interatividade 3D sensível ao toque
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mapeia o movimento do mouse/dedo para ângulos de rotação 3D
  const rotateX = useTransform(y, [100, -100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // Aplica suavização (mola) nas rotações
  const springConfig = { damping: 20, stiffness: 150 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  return (
    <section id="sobre" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Lado Esquerdo: 3D Interactive Collage */}
          <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center perspective-[1200px]">
            <ScrollAnimation variant="scaleIn" className="absolute w-full h-full flex items-center justify-center">
              
              <motion.div 
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.6}
                whileTap={{ scale: 0.98, cursor: "grabbing" }}
                style={{ 
                  x, 
                  y, 
                  rotateX: springRotateX, 
                  rotateY: springRotateY,
                  transformStyle: "preserve-3d"
                }}
                className="relative w-full max-w-md aspect-[4/5] cursor-grab"
              >
                {/* Card 1 (Back Right) */}
                <div className="absolute top-10 -right-12 sm:-right-20 w-64 aspect-square bg-white border border-gray-100 p-2 rounded-xl shadow-2xl transform translate-z-[-100px] rotate-6">
                  <img src={img2} className="w-full h-full object-cover rounded-lg" alt="Instalação Técnica 2" />
                </div>

                {/* Card 2 (Back Left) */}
                <div className="absolute bottom-10 -left-12 sm:-left-20 w-56 aspect-square bg-white border border-gray-100 p-2 rounded-xl shadow-2xl transform translate-z-[-50px] -rotate-3">
                  <img src={img3} className="w-full h-full object-cover rounded-lg" alt="Instalação Técnica 3" />
                </div>

                {/* Card 3 (Main Front) */}
                <div className="absolute inset-0 m-auto w-full h-full max-h-[480px] bg-white p-3 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-gray-100 transform translate-z-[50px] flex flex-col">
                  {/* Technical identification header */}
                  <div className="flex items-center justify-between mb-4 px-3 py-1">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-primary"></div>
                       <span className="font-body font-bold text-[10px] text-gray-400 uppercase tracking-widest">Field Report // 024</span>
                    </div>
                    <span className="font-body font-bold text-[10px] text-primary uppercase">Ceará.BR</span>
                  </div>

                  <div className="flex-1 rounded-xl overflow-hidden relative group">
                    <img src={img1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Instalação Técnica 1" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-40"></div>
                  </div>
                  
                  <div className="mt-4 px-2 pb-2">
                    <h4 className="font-heading font-black text-primary text-sm uppercase tracking-tight">F. SOLUÇÕES ENGENHARIA</h4>
                    <p className="text-[10px] text-gray-400 font-medium">Excelência em Refrigeração Industrial</p>
                  </div>
                </div>

              </motion.div>
            </ScrollAnimation>
          </div>

          {/* Lado Direito: Texto Reduzido, Dinâmico e "Fun" */}
          <ScrollAnimation variant="fadeLeft">
            <div className="max-w-xl">
              
              <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded border border-gray-100 mb-8">
                <span className="font-body font-bold text-[10px] uppercase tracking-[0.2em] text-primary">
                  Institucional
                </span>
              </div>

              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-primary uppercase leading-[1.05] tracking-tighter mb-8">
                A Engenharia que <br/>
                <span className="text-accent">Molda o Futuro</span>.
              </h2>
              
              <p className="font-body text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                Na F. Soluções, a teoria encontra a prática com precisão industrial. Nossa especialidade é transformar projetos complexos em infraestruturas térmicas de alto desempenho, garantindo a continuidade e a eficiência do seu negócio.
              </p>

              <p className="font-body text-gray-600 text-lg leading-relaxed mb-12">
                Com um histórico de <strong className="text-primary font-bold">centenas de instalações de alto nível</strong>, somos parceiros estratégicos da <a href="https://jj.ind.br/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">JJ</a>, entregando tecnologia de ponta em refrigeração comercial e industrial por todo o Brasil.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href="https://wa.me/5585988543450" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#004B87] hover:bg-primary text-white px-8 py-3.5 rounded-md font-body font-bold text-sm uppercase tracking-widest transition-all text-center"
                >
                  Consultar Engenharia
                </a>
              </div>

            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}
