import logo from "@/assets/logo.png";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="F. Soluções" className="h-10 w-auto brightness-0 invert" />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} F. Soluções Instalações Comerciais. Todos os direitos reservados.
          </p>
          <a
            href="https://instagram.com/fsolucoes_instalacoes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-background/80 hover:text-white transition-colors"
          >
            <Instagram size={20} />
            <span className="text-sm font-medium">@fsolucoes_instalacoes</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
