import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Instagram, Play, Heart, MessageCircle } from "lucide-react";
import img1 from "@/assets/camara_fria_real_1.jpg";
import img2 from "@/assets/estrutura_real_2.jpg";
import img3 from "@/assets/camara_fria_real_3.jpg";
import img4 from "@/assets/camara_fria_real_4.jpg";
import img5 from "@/assets/camara_fria_real_5.jpg";
import img6 from "@/assets/camara_fria_real_6.jpg";

const instaPosts = [
  { img: img1, likes: "124", comments: "12", type: "video" },
  { img: img2, likes: "89", comments: "4", type: "photo" },
  { img: img3, likes: "205", comments: "21", type: "photo" },
  { img: img4, likes: "156", comments: "8", type: "carousel" },
  { img: img5, likes: "342", comments: "45", type: "video" },
  { img: img6, likes: "112", comments: "3", type: "photo" },
];

export function StatsSection() {
  return (
    <section className="section-padding bg-white relative border-t border-gray-100">
      
      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Superior: Título Direto e Reto */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-8 gap-6">
          <ScrollAnimation variant="fadeRight">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-md">
                <Instagram className="text-white" size={24} />
              </div>
              <div>
                <a href="https://instagram.com/fsolucoes_instalacoes" target="_blank" rel="noopener noreferrer" className="font-heading font-black text-xl text-primary hover:text-accent transition-colors">
                  @fsolucoes_instalacoes
                </a>
                <p className="font-body text-sm text-gray-500 font-semibold mt-1">Acompanhe nossa rotina de obras em tempo real.</p>
              </div>
            </div>
            
            <h2 className="heading-display text-4xl uppercase mt-4">
              O Frio Operando na <span className="text-accent underline decoration-4 underline-offset-4">Prática</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeLeft">
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex items-center gap-8 max-w-sm">
              <div>
                <p className="font-heading font-black text-3xl text-primary leading-none">500+</p>
                <p className="font-body text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Obras Finalizadas</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <a 
                  href="https://instagram.com/fsolucoes_instalacoes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-[#003b6d] text-white px-6 py-3 rounded-xl font-heading font-bold text-sm uppercase tracking-wide transition-colors shadow-md block text-center"
                >
                  Seguir
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Grade do Instagram */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaPosts.map((post, i) => (
            <ScrollAnimation key={i} variant="fadeUp" delay={i * 0.1}>
              <a 
                href="https://instagram.com/fsolucoes_instalacoes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block w-full aspect-square bg-gray-100 rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={post.img} 
                  alt="Rotina de Obra F Soluções" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay do Insta On Hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
                  <div className="flex gap-4 text-white font-heading font-bold">
                    <span className="flex items-center gap-1"><Heart size={18} className="fill-white"/> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle size={18} className="fill-white"/> {post.comments}</span>
                  </div>
                </div>

                {/* Íconezinho de Video/Carousel no top right */}
                {post.type === 'video' && (
                  <div className="absolute top-3 right-3 text-white drop-shadow-md">
                    <Play size={20} className="fill-white" />
                  </div>
                )}
              </a>
            </ScrollAnimation>
          ))}
        </div>
      </div>

    </section>
  );
}
