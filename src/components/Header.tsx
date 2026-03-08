import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Magnetic } from "@/components/Magnetic";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="F. Soluções" className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-heading text-sm font-semibold tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Magnetic strength={0.2}>
            <a
              href="https://wa.me/5585988543450"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg font-heading text-sm font-semibold tracking-wide shadow-button hover:opacity-90 transition-all duration-300"
            >
              Fale Conosco
            </a>
          </Magnetic>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/98 backdrop-blur-md border-b border-border"
          >
            <nav className="flex flex-col px-4 py-4 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-sm font-semibold text-foreground hover:text-primary py-2 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5585988543450"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg font-heading text-sm font-semibold text-center shadow-button"
              >
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
