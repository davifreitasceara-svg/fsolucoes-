import { ScrollAnimation } from "@/components/ScrollAnimation";
import videoSrc from "@/assets/whatsapp-video.mp4";
import imgPrat1 from "@/assets/estrutura_real_4.jpg"; // Substituir essas imgs conforme necessario
import imgPrat2 from "@/assets/camara_fria_real_5.jpg";
import { PlayCircle } from "lucide-react";

export function VideoSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        {/* Cabecalho Simples Eletrofrio */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <ScrollAnimation variant="fadeRight">
            <div>
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <PlayCircle size={24} />
                  </div>
                  <span className="font-heading font-black text-accent uppercase tracking-[0.2em] text-sm">
                    Engenharia em Prática
                  </span>
                </div>
              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl uppercase">
                A <span className="text-primary">F. Soluções</span> <br/>
                <span className="text-accent underline decoration-4 underline-offset-4">Em Ação</span>
              </h2>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation variant="fadeLeft">
            <p className="font-body text-gray-500 text-lg leading-relaxed max-w-lg">
              Sem animações complicadas e sem renderizações de computador. O nosso negócio é projetar, fornecer e montar sistemas robustos no campo. Assista um pouco do nosso dia a dia.
            </p>
          </ScrollAnimation>
        </div>

        {/* Bento Grid Simples e Elegante com Bordas Enormes (Estilo Eletrofrio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* O Video Grandão */}
          <ScrollAnimation variant="fadeUp" className="lg:col-span-8">
            <div className="card-eletro relative h-[400px] lg:h-[600px] bg-gray-100 overflow-hidden group">
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
              
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-3 rounded-2xl shadow-lg border border-gray-100">
                <span className="font-heading font-black text-primary uppercase tracking-widest text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Registro Direto da Obra
                </span>
              </div>
            </div>
          </ScrollAnimation>

          {/* As Fotos de Lateral (Stack) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <ScrollAnimation variant="scaleIn" delay={0.2} className="h-full">
              <div className="card-eletro h-[200px] lg:h-[288px] relative overflow-hidden group p-0">
                <img 
                  src={imgPrat1} 
                  alt="Rotina F. Solucoes" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="scaleIn" delay={0.3} className="h-full">
              <div className="card-eletro h-[200px] lg:h-[288px] relative overflow-hidden group p-0">
                <img 
                  src={imgPrat2} 
                  alt="Obras F. Solucoes" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </ScrollAnimation>
          </div>

        </div>

      </div>
    </section>
  );
}
