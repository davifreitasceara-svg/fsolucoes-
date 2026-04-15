import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ArrowRight, Wrench } from "lucide-react";
import ctaBg from "@/assets/camara_fria_real_1.jpg";

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden bg-secondary">
      {/* Background corporativo */}
      <div
        className="absolute inset-0 bg-cover bg-center object-cover opacity-20"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
      
      {/* Pattern de marca d'água técnica Eletrofrio (grade) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <ScrollAnimation variant="fadeUp">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Wrench className="text-accent" size={24} />
              <span className="text-white font-heading font-bold text-xs uppercase tracking-[0.3em]">
                Assistência e Projeto Especializado
              </span>
            </div>
            
            <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-white mb-6 uppercase">
              POTENCIALIZE SUAS <span className="text-accent">VENDAS</span> COM A REFRIGERAÇÃO IDEAL
            </h2>
            
            <p className="text-lg text-white/80 font-body mb-10 max-w-2xl mx-auto leading-relaxed">
              Consulte nossos engenheiros para dimensionamento e aplicação de expositores, racks paralelos e centrais térmicas com tecnologia de ponta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contato"
                className="bg-accent hover:bg-[#cc0000] text-white px-8 py-4 rounded flex items-center justify-center gap-3 font-heading font-bold uppercase tracking-wide text-sm transition-colors shadow-lg"
              >
                Solicitar Cotação
                <ArrowRight size={18} />
              </a>
              <a 
                href="https://wa.me/5585988543450"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-secondary px-8 py-4 rounded flex items-center justify-center gap-3 font-heading font-bold uppercase tracking-wide text-sm transition-colors"
              >
                Atendimento Rápido
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
