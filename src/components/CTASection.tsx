import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ArrowRight, HardHat } from "lucide-react";
import ctaBg from "@/assets/camara_fria_real_1.jpg"; // Using a real photo instead of abstract bg

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0A1218]">
      {/* Background corporativo */}
      <div
        className="absolute inset-0 bg-cover bg-center object-cover opacity-30"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050A0C] via-[#050A0C]/90 to-transparent" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

      <div className="relative z-10 container mx-auto px-6">
        <ScrollAnimation variant="fadeRight">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <HardHat className="text-primary" size={24} />
              <span className="text-primary font-heading font-bold text-xs uppercase tracking-[0.3em]">
                Pronto para expandir sua operação?
              </span>
            </div>
            
            <h2 className="heading-display text-4xl md:text-5xl lg:text-7xl text-white mb-6">
              TRANSFORME SEU <br />
              SISTEMA DE <span className="text-primary italic">FRIO</span>
            </h2>
            
            <p className="text-xl text-white/60 font-body mb-10 max-w-xl">
              Fale com nossos engenheiros e descubra como otimizar sua refrigeração comercial com menores custos e maior rentabilidade a longo prazo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#contato"
                className="bg-primary hover:bg-primary-light text-white px-8 py-4 flex items-center justify-center gap-3 font-heading font-black uppercase tracking-[0.15em] text-sm transition-all duration-300"
              >
                Solicitar Cotação
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className="absolute bottom-0 right-0 p-8 hidden md:block opacity-10 pointer-events-none">
        <div className="text-8xl font-heading font-black text-white mix-blend-overlay">INDUSTRIAL</div>
      </div>
    </section>
  );
}
