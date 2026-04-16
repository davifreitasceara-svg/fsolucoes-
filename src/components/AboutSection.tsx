import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MoveRight } from "lucide-react";
import img1 from "@/assets/camara_fria_real_1.jpg";
import img2 from "@/assets/estrutura_real_2.jpg";
import img3 from "@/assets/camara_fria_real_3.jpg";

export function AboutSection() {
  const [cards, setCards] = useState([
    { id: 1, img: img1, label: "Field Report // 024", loc: "Ceará.BR", title: "INSTALAÇÃO TÉCNICA 1" },
    { id: 2, img: img2, label: "Field Report // 025", loc: "Fortaleza.CE", title: "CONTROLE DE QUALIDADE" },
    { id: 3, img: img3, label: "Field Report // 026", loc: "Eusébio.BR", title: "MONTAGEM INDUSTRIAL" },
  ]);

  const moveToEnd = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const firstCard = newCards.shift()!;
      newCards.push(firstCard);
      return newCards;
    });
  };

  return (
    <section id="sobre" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Lado Esquerdo: 3D Swipeable Stack */}
          <div className="relative h-[550px] md:h-[650px] w-full flex items-center justify-center perspective-[1500px]">
            <div className="relative w-full max-w-[380px] h-[480px]">
              <AnimatePresence initial={false}>
                {cards.map((card, index) => {
                  const isFront = index === 0;
                  
                  return (
                    <motion.div
                      key={card.id}
                      style={{ 
                        zIndex: cards.length - index,
                        transformStyle: "preserve-3d"
                      }}
                      initial={{ scale: 0.8, opacity: 0, y: 40 }}
                      animate={{ 
                        scale: 1 - index * 0.08, 
                        y: index * -35,
                        opacity: 1 - index * 0.2,
                        rotateX: index * -2,
                        rotateZ: index === 1 ? 2 : index === 2 ? -2 : 0
                      }}
                      exit={{ 
                        x: 300, 
                        opacity: 0, 
                        scale: 0.8,
                        rotate: 20,
                        transition: { duration: 0.4 } 
                      }}
                      drag={isFront ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(_, info) => {
                        if (Math.abs(info.offset.x) > 100) moveToEnd();
                      }}
                      className={`absolute inset-0 m-auto w-full h-full bg-white p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col ${isFront ? 'cursor-grab active:cursor-grabbing shadow-[0_30px_60px_rgba(0,0,0,0.15)]' : ''}`}
                    >
                      {/* Technical header */}
                      <div className="flex items-center justify-between mb-4 px-3 py-1">
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-primary"></div>
                           <span className="font-body font-bold text-[10px] text-gray-400 uppercase tracking-widest">{card.label}</span>
                        </div>
                        <span className="font-body font-bold text-[10px] text-primary uppercase">{card.loc}</span>
                      </div>

                      <div className="flex-1 rounded-xl overflow-hidden relative">
                        <img src={card.img} className="w-full h-full object-cover" alt={card.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-40"></div>
                        
                        {isFront && (
                          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 shadow-lg animate-pulse">
                            <MoveRight size={16} className="text-primary" />
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4 px-2 pb-2">
                        <h4 className="font-heading font-black text-primary text-sm uppercase tracking-tight">{card.title}</h4>
                        <p className="text-[10px] text-gray-400 font-medium">REGISTRO F. SOLUÇÕES // {new Date().getFullYear()}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
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
