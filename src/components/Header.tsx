import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import embracoLogo from "https://www.embraco.com/wp-content/themes/embraco/assets/images/logo.svg"; // Fallback ou um asset local se tivesse
import { Magnetic } from "@/components/Magnetic";

const navItems = [
  { label: "Soluções", href: "#servicos" },
  { label: "Indústrias", href: "#segmentos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Autoridade", href: "#por-que-nos" },
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
      {/* Top Bar - Very Professional touch like Embraco */}
      <div className="hidden md:flex bg-[#050A0C] text-white/70 py-1.5 px-6 justify-between items-center text-[10px] uppercase font-bold tracking-[0.2em] z-50 relative border-b border-white/5">
        <div className="flex gap-6">
          <a href="#contato" className="hover:text-primary transition-colors">Contate o Suporte</a>
          <span className="text-white/20">|</span>
          <a href="tel:558530673114" className="hover:text-primary transition-colors">Tel: (85) 3067-3114</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="opacity-50">Parceiro Estratégico:</span>
          {/* Mock Embraco partnership mention */}
          <span className="text-white font-black tracking-widest">EMBRACO</span>
        </div>
      </div>

      <header
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-[#0d1520]/95 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
            : "top-0 md:top-[34px] bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#inicio" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="F. Soluções" 
              className={`transition-all duration-500 ${scrolled ? 'h-10' : 'h-12'} brightness-0 invert opacity-90 group-hover:opacity-100`} 
            />
            <div className={`flex flex-col border-l border-white/20 pl-3 transition-all duration-500 ${scrolled ? 'scale-90 opacity-100' : 'opacity-0 md:opacity-100'}`}>
              <span className="text-white font-heading font-black text-sm uppercase tracking-widest leading-none">Soluções</span>
              <span className="text-primary font-heading font-bold text-[10px] uppercase tracking-[0.3em] mt-1">Refrigeração</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <Magnetic strength={0.15}>
              <a
                href="https://wa.me/5585988543450"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-sm font-heading text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(0,129,138,0.3)] hover:shadow-[0_0_25px_rgba(0,129,138,0.5)]"
              >
                Orçamento Técnico
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#0d1520] border-b border-white/10 shadow-2xl md:hidden"
            >
              <nav className="flex flex-col py-6 px-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary py-4 border-b border-white/5 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/5585988543450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 bg-primary text-white p-4 rounded-sm font-heading text-sm font-black uppercase tracking-widest text-center"
                >
                  Orçamento Técnico
                  <ArrowRight size={16} />
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
