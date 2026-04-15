import logo from "@/assets/logo.png";
import { Instagram, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo Brand Eletrofrio Style */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl inline-block shadow-lg border-b-4 border-accent">
              <img src={logo} alt="F. Soluções" className="h-10 w-auto" />
            </div>
            <p className="text-white/80 text-sm font-body leading-relaxed max-w-sm mt-6">
              A F. Soluções projeta, fornece e instala componentes de alta resiliência para supermercados, pequenos varejos e ambientes de frio industrial.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-heading font-black text-sm uppercase tracking-widest text-accent mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Institucional
            </h4>
            <ul className="space-y-4 font-body">
              {['Home', 'Empresa', 'Sustentabilidade', 'Cases de Sucesso'].map(link => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-white hover:text-accent transition-colors text-sm font-bold uppercase tracking-wide">
                    <ChevronRight size={14} className="text-accent/50 group-hover:text-accent"/> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading font-black text-sm uppercase tracking-widest text-accent mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Produtos Frio
            </h4>
            <ul className="space-y-4 font-body">
              {['Expositores Refrigerados', 'Centrais Termoelétricas', 'Mobiliário em Geral', 'Câmaras Frias Modulares'].map(link => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-white hover:text-accent transition-colors text-sm font-bold uppercase tracking-wide">
                    <ChevronRight size={14} className="text-accent/50"/> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading font-black text-sm uppercase tracking-widest text-accent mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Matriz Fortaleza
            </h4>
            <ul className="space-y-5 font-body text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin size={18} className="text-accent" />
                </div>
                <span className="text-white/80 leading-relaxed font-semibold">Rua Teofredo Goiana, 763A<br />Cidade dos Funcionários<br />Fortaleza – Ceará</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone size={18} className="text-accent" />
                </div>
                <a href="tel:558530673114" className="text-white hover:text-accent transition-colors font-bold tracking-wide">(85) 3067-3114</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Eletrofrio Copyright bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-body bg-primary">
          <p className="text-white/50 text-xs uppercase tracking-widest font-bold">
            F Soluções Instalações E Comercio © {new Date().getFullYear()} – Todos os direitos reservados. CNPJ: 16.880.401/0001-13
          </p>
          <a
            href="https://instagram.com/fsolucoes_instalacoes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-white hover:bg-white hover:text-primary transition-colors rounded-xl px-6 py-3 text-xs font-heading font-black uppercase tracking-widest shadow-md"
          >
            <Instagram size={16} />
            Siga-nos
          </a>
        </div>
      </div>
    </footer>
  );
}
