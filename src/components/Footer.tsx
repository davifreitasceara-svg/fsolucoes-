import logo from "@/assets/logo.png";
import { Instagram, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t-4 border-accent pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1 - Brand */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded inline-block">
              <img src={logo} alt="F. Soluções" className="h-10 w-auto" />
            </div>
            <p className="text-white/70 text-sm font-body leading-relaxed max-w-xs">
              Líder em refrigeração comercial e industrial. Soluções térmicas de alta eficiência e engenharia de precisão para o seu negócio.
            </p>
          </div>

          {/* Coluna 2 - Navegação */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white mb-6 border-l-2 border-accent pl-2">Links Diretos</h4>
            <ul className="space-y-3 font-body">
              {['Início', 'Institucional', 'Equipamentos', 'Projetos Realizados'].map(link => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                    <ChevronRight size={14} className="text-accent"/> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Produtos */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white mb-6 border-l-2 border-accent pl-2">Segmentos</h4>
            <ul className="space-y-3 font-body">
              {['Supermercados', 'Indústria de Alimentos', 'CDs Logísticos', 'Açougues e Padarias', 'Projetos Específicos Gerais'].map(link => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                    <ChevronRight size={14} className="text-accent"/> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Contato Corporativo */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white mb-6 border-l-2 border-accent pl-2">Central Única</h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-white/70 leading-relaxed">Rua Teofredo Goiana, 763 – A<br />Cep 60822-630<br />Fortaleza – CE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:558530673114" className="text-white/70 hover:text-white transition-colors font-bold">(85) 3067-3114</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:contato@fsolucoes.com.br" className="text-white/70 hover:text-white transition-colors">contato@fsolucoes.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Branco Simples Textual */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-body">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} F. Soluções Instalações Comerciais. Todos os direitos reservados.
          </p>
          <a
            href="https://instagram.com/fsolucoes_instalacoes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors border border-white/20 rounded px-4 py-2 text-xs font-bold"
          >
            <Instagram size={14} />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
