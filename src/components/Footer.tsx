import logo from "@/assets/logo.png";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";
import embracoLogo from "https://www.embraco.com/wp-content/themes/embraco/assets/images/logo.svg";

export function Footer() {
  return (
    <footer className="bg-[#050A0C] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1 - Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="F. Soluções" className="h-10 w-auto brightness-0 invert" />
              <div className="flex flex-col border-l border-white/20 pl-3">
                <span className="text-white font-heading font-black text-sm uppercase tracking-widest leading-none">Soluções</span>
                <span className="text-primary font-heading font-bold text-[10px] uppercase tracking-[0.3em] mt-1">Refrigeração</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Engenharia especializada em sistemas de frio alimentar e conservação comercial de alto desempenho.
            </p>
            {/* Logos parceiros (mock) */}
            <div className="pt-4 border-t border-white/5">
              <span className="block text-[10px] font-heading font-black uppercase tracking-widest text-white/30 mb-3">Parceiros Tecnológicos</span>
              <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <span className="text-white font-black tracking-widest text-sm">EMBRACO</span>
                <span className="text-white font-black tracking-widest text-sm">DANFOSS</span>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="font-heading font-black text-xs uppercase tracking-widest text-white mb-6">Navegação</h4>
            <ul className="space-y-3">
              {['Início', 'Sobre a Empresa', 'Soluções Técnicas', 'Obras Executadas'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-primary text-sm font-medium transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Soluções */}
          <div>
            <h4 className="font-heading font-black text-xs uppercase tracking-widest text-white mb-6">Áreas de Atuação</h4>
            <ul className="space-y-3">
              {['Supermercados e Atacarejos', 'Câmaras Frigoríficas', 'Painéis Isolantes', 'Sistemas de Refrigeração', 'Manutenção Preventiva'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-primary text-sm font-medium transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h4 className="font-heading font-black text-xs uppercase tracking-widest text-white mb-6">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm leading-relaxed">Rua Teofredo Goiana, 763 – A<br />Cidade dos Funcionários<br />Fortaleza – CE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:558530673114" className="text-white/50 hover:text-primary text-sm transition-colors">(85) 3067-3114</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:contato@fsolucoes.com.br" className="text-white/50 hover:text-primary text-sm transition-colors">contato@fsolucoes.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[11px] uppercase tracking-wider font-bold">
            © {new Date().getFullYear()} F. Soluções Instalações Comerciais LTDA. CNPJ: 16.880.401/0001-13.
          </p>
          <a
            href="https://instagram.com/fsolucoes_instalacoes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors border border-white/10 px-4 py-2"
          >
            <Instagram size={14} />
            <span className="text-[10px] font-heading font-black uppercase tracking-widest">Siga nossa Engenharia</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
