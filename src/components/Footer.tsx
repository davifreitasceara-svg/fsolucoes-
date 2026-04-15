import logo from "@/assets/logo.png";
import { Instagram, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1 - Brand */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-3xl inline-block shadow-md">
              <img src={logo} alt="F. Soluções" className="h-10 w-auto" />
            </div>
            <p className="text-white/80 text-sm font-body leading-relaxed pr-4">
              A inteligência em frio industrial que o seu varejo precisa e a eficiência que você sempre buscou.
            </p>
          </div>

          {/* Coluna 2 - Navegação */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-widest text-accent mb-6">Navegação</h4>
            <ul className="space-y-3 font-body">
              {['Início', 'Produtos', 'Obras', 'Institucional'].map(link => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-white hover:text-accent transition-colors text-sm font-semibold uppercase tracking-wide">
                    <ChevronRight size={14} className="text-accent"/> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Produtos */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-widest text-accent mb-6">Categorias</h4>
            <ul className="space-y-3 font-body">
              {['Vitrines e Expositor', 'Câmara de Congelados', 'Projetos Rack', 'Isolamento Térmico'].map(link => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-white hover:text-accent transition-colors text-sm font-semibold uppercase tracking-wide">
                    <ChevronRight size={14} className="text-accent"/> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Contato Corporativo */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-widest text-accent mb-6">Atendimento</h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <span className="text-white/80 leading-relaxed pt-1">Rua Teofredo Goiana, 763A<br />Fortaleza – CE</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-accent" />
                </div>
                <a href="tel:558530673114" className="text-white hover:text-accent transition-colors font-bold tracking-wide pt-1">(85) 3067-3114</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <a href="mailto:contato@fsolucoes.com.br" className="text-white hover:text-accent transition-colors pt-1">contato@fsolucoes.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Branco Simples Textual */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-body">
          <p className="text-white/60 text-xs uppercase tracking-wide font-bold">
            © {new Date().getFullYear()} F. Soluções. Todos os direitos reservados. CNPJ 16.880.401/0001-13
          </p>
          <a
            href="https://instagram.com/fsolucoes_instalacoes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-white hover:bg-white hover:text-primary transition-colors rounded-xl px-6 py-3 text-xs font-heading font-black uppercase tracking-widest"
          >
            <Instagram size={16} />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
