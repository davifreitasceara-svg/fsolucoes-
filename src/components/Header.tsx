import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import eletrofrioLogo from "https://eletrofrio.com.br/wp-content/themes/eletrofrio/assets/images/logo-eletrofrio.svg";

const navItems = [
  { label: "Soluções e Produtos", href: "#servicos" },
  { label: "Setores de Atuação", href: "#segmentos" },
  { label: "Obras Realizadas", href: "#projetos" },
  { label: "Institucional", href: "#por-que-nos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Eletrofrio Blue */}
      <div className="hidden md:flex bg-primary text-white py-2 px-6 justify-between items-center text-xs font-semibold z-50 relative">
        <div className="flex gap-6 items-center">
          <a href="mailto:contato@fsolucoes.com.br" className="flex items-center gap-2 hover:text-white/80 transition-colors">
            <Mail size={14} /> contato@fsolucoes.com.br
          </a>
          <span className="text-white/40">|</span>
          <a href="tel:558530673114" className="flex items-center gap-2 hover:text-white/80 transition-colors">
            <Phone size={14} /> (85) 3067-3114
          </a>
        </div>
        <div className="flex items-center gap-3 font-bold text-sm tracking-wide">
          <span>PARCEIRO TÉCNICO AUTORIZADO</span>
        </div>
      </div>

      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-white shadow-md py-4"
            : "top-0 md:top-[36px] bg-white border-b border-gray-100 py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#inicio" className="flex items-center gap-4 group">
            {/* Logo agora sem ser "brightness-0 invert", no seu natural ou forçado pro azul/cor */}
            <img 
              src={logo} 
              alt="F. Soluções" 
              className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'} object-contain`} 
            />
            <div className="hidden lg:flex flex-col border-l border-gray-300 pl-4 h-full py-1">
              <span className="text-secondary font-heading font-black text-sm uppercase tracking-wide leading-none">Refrigeração</span>
              <span className="text-gray-500 font-body font-bold text-[10px] uppercase tracking-widest mt-1">Comercial & Industrial</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm font-bold text-secondary hover:text-accent transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <a
              href="https://wa.me/5585988543450"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-accent hover:bg-[#cc0000] text-white px-6 py-2.5 rounded shadow-sm font-heading text-sm font-bold tracking-wide transition-colors"
            >
              Fale com um Especialista
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-secondary hover:text-accent transition-colors"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl xl:hidden overflow-hidden"
            >
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-sm font-bold text-secondary hover:text-accent py-4 px-6 border-b border-gray-100 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="p-6">
                  <a
                    href="https://wa.me/5585988543450"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center bg-accent text-white py-3 rounded font-heading text-sm font-bold"
                  >
                    Fale com um Especialista
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
