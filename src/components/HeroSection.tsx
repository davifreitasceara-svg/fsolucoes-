import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import heroBg from "@/assets/camara_fria_real_1.jpg";
import heroBg2 from "@/assets/estrutura_real_1.jpg";

const slides = [
  { bg: heroBg, title: "LÍDERES EM", subtitle: "REFRIGERAÇÃO COMERCIAL" },
  { bg: heroBg2, title: "EFICIÊNCIA", subtitle: "ENERGÉTICA E PERFORMANCE" }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 overflow-hidden bg-gray-100">
      
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 z-0'}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          {/* Eletrofrio Style overlay: gradient azul por cima da imagem */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full py-20 flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <motion.div
            key={`tag-${currentSlide}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-0.5 w-10 bg-accent"></div>
            <span className="font-body font-bold text-sm tracking-widest text-[#e2e8f0] uppercase">
              F. Soluções Instalações Comerciais
            </span>
          </motion.div>

          <motion.h1 
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 uppercase"
          >
            {slides[currentSlide].title} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#ff4d4d]">
              {slides[currentSlide].subtitle}
            </span>
          </motion.h1>

          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-body text-gray-200 mb-10 max-w-xl leading-relaxed"
          >
            Sistemas frigoríficos e vitrines refrigeradas com a tecnologia que o seu supermercado ou indústria exigem.
          </motion.p>

          <motion.div
            key={`btn-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
            <a 
              href="#servicos" 
              className="bg-accent hover:bg-[#cc0000] text-white px-8 py-4 rounded font-heading font-bold uppercase tracking-wide transition-colors flex items-center gap-2"
            >
              Conheça os Produtos
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls corporativos */}
      <div className="absolute bottom-10 left-6 md:left-auto md:right-10 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 transition-all duration-300 ${i === currentSlide ? 'w-8 bg-accent' : 'w-2 bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>

      {/* Onda inferior branca para separar a seção hero como no site corporativo */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform translate-y-[2px]">
        <svg fill="#ffffff" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[40px] md:h-[80px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
