import { ScrollAnimation } from "@/components/ScrollAnimation";
import bgPattern from "@/assets/camara_fria_real_1.jpg";
import { CheckCircle2 } from "lucide-react";

export function WhyUsSection() {
  return (
    <section id="por-que-nos" className="section-padding bg-eletro-pattern relative overflow-hidden mt-10">
      
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <ScrollAnimation variant="fadeRight">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] sm:h-[600px]">
              <img 
                src={bgPattern} 
                alt="Instalações" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-lg">
                <p className="font-heading font-black text-primary text-xl uppercase tracking-wide text-center">
                  Garantia Operacional F. Soluções
                </p>
                <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeLeft">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">✓</div>
                <span className="font-heading font-black text-white/80 uppercase tracking-[0.2em] text-sm">
                  Diferenciais Técnicos
                </span>
              </div>

              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-8 leading-[1.1]">
                EXCELÊNCIA EM CADA <br/><span className="text-accent underline decoration-4 underline-offset-8">DETALHE</span>
              </h2>
              
              <p className="font-body text-white/90 text-lg mb-10 leading-relaxed max-w-xl">
                Nossa matriz técnica atua em toda as fases, desde a elaboração da planta frigorífica até o startup da máquina e assistência contratual.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Equipe Plenamente Certificada",
                  "Garantia Exclusiva de Equipamento",
                  "Softwares de Controle Paralelo",
                  "Cronogramas Milimétricos"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                    <CheckCircle2 size={24} className="text-accent shrink-0" />
                    <span className="font-heading font-bold text-sm text-white uppercase tracking-wide mt-1">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
