import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Building, Package, GraduationCap, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Institucional", href: "#sobre", icon: Building },
  { label: "Produtos JJ", href: "#servicos", icon: Package },
  { label: "Atendimento", href: "#contato", icon: Phone },
  { label: "Portfólio", href: "#projetos", icon: GraduationCap },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg rounded-b-[2rem] py-3"
          : "bg-white py-5 shadow-sm rounded-b-[2rem]"
      }`}
    >
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="F. Soluções" 
              className={`transition-all duration-300 object-contain ${scrolled ? 'h-10' : 'h-14'}`} 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 font-heading font-bold text-sm text-primary hover:text-accent transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <item.icon size={14} />
                </div>
                {item.label}
              </a>
            ))}
            
            <a
              href="https://wa.me/5585988543450"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-accent hover:bg-[#008bc7] text-white px-6 py-3 rounded-full font-heading font-bold text-sm uppercase tracking-wide transition-all shadow-md hover:shadow-lg"
            >
              Falar com Engenharia
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-3 bg-gray-50 text-primary rounded-full hover:bg-accent hover:text-white transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scaleY: 0.9 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0.9 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-2xl lg:hidden overflow-hidden origin-top border border-gray-100"
          >
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-4 font-heading font-bold text-base text-primary hover:bg-gray-50 hover:text-accent py-4 px-4 rounded-xl transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent">
                    <item.icon size={18} />
                  </div>
                  {item.label}
                </a>
              ))}
              <div className="p-4 border-t border-gray-100 mt-2">
                <a
                  href="https://wa.me/5585988543450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center h-14 w-full bg-accent text-white rounded-xl font-heading text-sm font-bold shadow-md hover:bg-[#008bc7]"
                >
                  Falar com Engenharia
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
