import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Instagram, MapPin, Heart, Plus } from "lucide-react";
import img1 from "@/assets/camara_fria_real_1.jpg";
import img2 from "@/assets/estrutura_real_2.jpg";
import img3 from "@/assets/camara_fria_real_3.jpg";

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Lado Esquerdo: 3D Instagram Collage */}
          <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center perspective-[1200px]">
            <ScrollAnimation variant="scaleIn" className="absolute w-full h-full flex items-center justify-center">
              
              <motion.div 
                animate={{ 
                  y: [-10, 10, -10],
                  rotateX: [10, 15, 10], 
                  rotateY: [-20, -15, -20] 
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-full max-w-md aspect-[4/5] preserve-3d"
              >
                {/* 3D Card Insta 1 (Trás Direita) */}
                <div className="absolute top-10 -right-12 sm:-right-20 w-64 aspect-square bg-white p-3 pb-12 rounded-[2rem] shadow-2xl transform translate-z-[-100px] rotate-12 rotate-y-12">
                  <img src={img2} className="w-full h-full object-cover rounded-xl" alt="Obra 2" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <Heart size={16} className="text-gray-400 fill-gray-400" />
                  </div>
                </div>

                {/* 3D Card Insta 2 (Trás Esquerda) */}
                <div className="absolute bottom-10 -left-12 sm:-left-20 w-56 aspect-square bg-white p-3 pb-12 rounded-[2rem] shadow-2xl transform translate-z-[-50px] -rotate-6 -rotate-y-12">
                  <img src={img3} className="w-full h-full object-cover rounded-xl" alt="Obra 3" />
                  <div className="absolute bottom-4 left-4 flex gap-2 text-primary font-bold text-xs">
                    <MapPin size={14}/> Ceará
                  </div>
                </div>

                {/* 3D Card Insta 3 (O Principal da frente) */}
                <div className="absolute inset-0 m-auto w-full h-full max-h-[450px] bg-white p-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,159,227,0.2)] transform translate-z-[50px] flex flex-col">
                  
                  {/* Top bar insta fake */}
                  <div className="flex items-center gap-3 mb-4 px-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center p-[2px]">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <Instagram size={18} className="text-gray-800" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-sm text-primary">@fsolucoes_instalacoes</h4>
                      <p className="text-[10px] text-gray-400">Rotina de Obra</p>
                    </div>
                  </div>

                  {/* Foto Grandona */}
                  <div className="flex-1 rounded-[1.5rem] overflow-hidden relative group">
                    <img src={img1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Obra 1" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Heart size={48} className="text-white drop-shadow-xl" strokeWidth={1} fill="white" />
                    </div>
                  </div>

                </div>

              </motion.div>
            </ScrollAnimation>
          </div>

          {/* Lado Direito: Texto Reduzido, Dinâmico e "Fun" */}
          <ScrollAnimation variant="fadeLeft">
            <div className="max-w-xl">
              
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-primary">
                  Nós Somos a F. Soluções
                </span>
              </div>

              <h2 className="heading-display text-4xl md:text-5xl uppercase leading-[1.1] mb-6">
                ENGENHARIA REAL. <br/>
                <span className="text-accent">DIRETO DA OBRA</span>.
              </h2>
              
              <p className="font-body text-gray-500 text-lg leading-relaxed mb-8">
                Esqueça paredes cheias de letras chatas. Nosso negócio acontece no campo, sujando a bota e garantindo que o seu supermercado ou indústria não pare um segundo.
              </p>

              <p className="font-body text-gray-500 text-lg leading-relaxed mb-10">
                Instalamos <strong className="text-primary font-black">centenas de câmaras e rack s</strong> com excelência térmica máxima. Não apenas vendemos equipamentos Eletrofrio: somos os especialistas que fazem tudo ganhar vida.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://instagram.com/fsolucoes_instalacoes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-cyan bg-gradient-to-tr from-pink-500 to-accent text-white flex-1"
                >
                  <Instagram size={20} />
                  Acompanhar no Insta
                </a>
                
                <a href="#servicos" className="btn-outline-cyan flex-1 bg-white">
                  <Plus size={20} />
                  Catálogo
                </a>
              </div>

            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}
