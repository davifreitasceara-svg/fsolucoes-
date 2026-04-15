import { ScrollAnimation } from "@/components/ScrollAnimation";
import bgPattern from "@/assets/camara_fria_real_1.jpg";
import { CheckCircle2 } from "lucide-react";

export function WhyUsSection() {
  return (
    <section id="por-que-nos" className="section-padding bg-eletro-pattern relative overflow-hidden">
      
      {/* Decorative large circle (Eletrofrio aesthetic touch) */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <ScrollAnimation variant="fadeRight">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <img 
                src={bgPattern} 
                alt="Instalações" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
              {/* Eletrofrio typical overlay box */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                <p className="font-heading font-black text-primary text-xl uppercase tracking-wide text-center">
                  Mais de <span className="text-accent underline decoration-4 underline-offset-4">500 sistemas</span> operando.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeLeft">
            <div>
              <h2 className="heading-display text-4xl md:text-5xl text-white uppercase mb-6">
                EXCELÊNCIA EM CADA <span className="text-accent">DETALHE</span>
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
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <CheckCircle2 size={24} className="text-accent shrink-0" />
                    <span className="font-heading font-bold text-sm text-white uppercase tracking-wide mt-1">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <a href="#contato" className="btn-cyan inline-flex">
                  Fale com a nossa equipe
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
