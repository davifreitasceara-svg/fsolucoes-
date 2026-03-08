import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Snowflake, LayoutGrid, Wrench, Settings, ArrowLeft } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import donoImage from "@/assets/fsolucoes_dono.jpg";
const services = [
  {
    icon: Snowflake,
    title: "Câmaras Frias",
    ref: "REF-101",
    status: "Active_Cooling",
    desc: "Projetos e montagem de câmaras frigoríficas de alto desempenho.",
    color: "#38bdf8",
    href: "/camaras-frias",
  },
  {
    icon: LayoutGrid,
    title: "Estruturas",
    ref: "STR-202",
    status: "Load_Optimal",
    desc: "Equipamentos e gôndolas para máxima eficiência energética.",
    color: "#0ea5e9",
    href: "/estruturas",
  },
  {
    icon: Wrench,
    title: "Suporte Técnico",
    ref: "MNT-303",
    status: "System_Ready",
    desc: "Manutenção ágil para continuidade operacional absoluta.",
    color: "#0284c7",
    href: null,
  },
  {
    icon: Settings,
    title: "Projetos",
    ref: "PRJ-404",
    status: "Verified",
    desc: "Engenharia voltada para economia e performance industrial.",
    color: "#075985",
    href: null,
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  onClick?: () => void;
  isFocused?: boolean;
}

function ServiceCard({ service, index, onClick, isFocused }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);

    cardRef.current?.style.setProperty("--mouse-x", `${mouseX}px`);
    cardRef.current?.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glareBg = useTransform(
    [mouseXSpring, mouseYSpring],
    ([mx, my]) =>
      `radial-gradient(circle at ${(mx as number + 0.5) * 100}% ${(my as number + 0.5) * 100}%, rgba(56,189,248,0.1) 0%, transparent 60%)`
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className={`${isFocused ? "max-w-2xl mx-auto w-full" : "h-full"}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateY: isFocused ? 0 : rotateY,
          rotateX: isFocused ? 0 : rotateX,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        className={`relative ${isFocused ? "min-h-[400px]" : "h-full"} bg-[#0a0f1d] rounded-2xl p-8 border border-white/5 overflow-hidden group transition-all duration-500 hover:border-primary/50 cursor-pointer shadow-2xl`}
      >
        <motion.div
          style={{ background: glareBg }}
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div 
          style={{ transform: "translateZ(30px)" }}
          className="flex justify-between items-start mb-16 relative z-10"
        >

          <service.icon className={`text-primary ${isFocused ? "opacity-100 scale-125" : "opacity-40 group-hover:opacity-100"} transition-all duration-500`} size={isFocused ? 40 : 28} />
        </div>

        <div 
          style={{ transform: "translateZ(50px)" }}
          className="relative z-10"
        >
          <h3 className={`${isFocused ? "text-2xl sm:text-4xl" : "text-lg sm:text-2xl"} font-heading font-black text-white uppercase tracking-tight mb-6 group-hover:text-primary transition-colors duration-300 break-words hyphens-auto`}>
            {service.title}
          </h3>
          <div className={`h-[2px] ${isFocused ? "w-24" : "w-12"} bg-primary/30 group-hover:w-32 group-hover:bg-primary transition-all duration-700 mb-8`} />
          <p className={`${isFocused ? "text-lg max-w-xl" : "text-xs"} text-white/50 group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-heading font-bold uppercase tracking-[0.15em]`}>
            {service.desc}
          </p>
          
          {isFocused && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12"
            >
              <a 
                href={`https://wa.me/5585988543450?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-black uppercase tracking-widest text-sm hover:bg-primary-light transition-all shadow-button"
              >
                Solicitar Orçamento Especializado
              </a>
            </motion.div>
          )}
        </div>

        <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-5 group-hover:opacity-20 transition-opacity duration-700">
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-white" />
          <div className="absolute bottom-0 right-0 w-[1px] h-full bg-white" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white" />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 -translate-y-full group-hover:translate-y-[600px] transition-transform duration-[3s] ease-in-out" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleSectionMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  // Smooth springs for background parallax
  const bgRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["3deg", "-3deg"]), { stiffness: 40, damping: 30 });
  const bgRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-4deg", "4deg"]), { stiffness: 40, damping: 30 });
  const bgTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-2%", "2%"]), { stiffness: 40, damping: 30 });
  const bgTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["-2%", "2%"]), { stiffness: 40, damping: 30 });

  const filteredServices = selectedService 
    ? services.filter(s => s.title === selectedService)
    : services;

  const handleCardClick = (s: typeof services[0]) => {
    if (s.href) {
      navigate(s.href);
    } else if (!selectedService) {
      setSelectedService(s.title);
    }
  };

  return (
    <section 
      id="servicos" 
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      className="section-padding bg-[#020617] relative min-h-[900px] overflow-hidden"
      style={{ perspective: 1200 }}
    >
      {/* Intense 3D Background Element */}
      <motion.div 
        className="absolute inset-x-0 top-0 h-[120%] z-0 pointer-events-none origin-center flex items-center justify-center opacity-60"
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          rotateX: bgRotateX,
          rotateY: bgRotateY,
          x: bgTranslateX,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div 
          animate={{ rotateZ: [-1, 1, -1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[110%] h-full"
          style={{ transform: "translateZ(-200px) scale(1.1)" }}
        >
          {/* Main Photo with intense depth */}
          <img
            src={donoImage}
            alt="Equipe F. Soluções"
            className="absolute inset-0 w-full h-full object-cover object-top rounded-[100px] shadow-[0_0_100px_rgba(56,189,248,0.2)]"
          />
          {/* 3D Glass overlay floating above the photo */}
          <div 
            style={{ transform: "translateZ(150px)" }}
            className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-40 mix-blend-overlay" 
          />
          {/* Dynamic lighting layer floating even higher */}
          <div 
            style={{ transform: "translateZ(300px)" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1)_0%,transparent_60%)]"
          />
        </motion.div>
      </motion.div>

      {/* Vignette & darken gradient overlay so text remains readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-[#020617] pointer-events-none z-0" />

      <div className="container mx-auto relative z-10 pt-10">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-20">
            <h2 className="font-heading text-2xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6 drop-shadow-2xl break-words hyphens-auto">
              {selectedService ? "Solução em" : "Nossas"} <span className="text-primary italic">{selectedService || "Soluções"}</span>
            </h2>
            
            {selectedService && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedService(null)}
                className="flex items-center gap-2 mx-auto text-primary/60 hover:text-primary transition-colors font-heading font-black uppercase tracking-widest text-xs drop-shadow-xl"
              >
                <ArrowLeft size={16} />
                Voltar para todas as soluções
              </motion.button>
            )}
          </div>
        </ScrollAnimation>

        <motion.div 
          layout
          className={`grid ${selectedService ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-4"} gap-6`}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((s, i) => (
              <ServiceCard 
                key={s.title} 
                service={s} 
                index={i} 
                onClick={() => handleCardClick(s)}
                isFocused={!!selectedService}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
