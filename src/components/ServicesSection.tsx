import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Snowflake, LayoutGrid, Wrench, Settings } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Snowflake,
    title: "Câmaras Frias",
    ref: "REF-101",
    status: "Active_Cooling",
    desc: "Projetos e montagem de câmaras frigoríficas de alto desempenho.",
    color: "#38bdf8",
  },
  {
    icon: LayoutGrid,
    title: "Estruturas",
    ref: "STR-202",
    status: "Load_Optimal",
    desc: "Equipamentos e gôndolas para máxima eficiência energética.",
    color: "#0ea5e9",
  },
  {
    icon: Wrench,
    title: "Suporte Técnico",
    ref: "MNT-303",
    status: "System_Ready",
    desc: "Manutenção ágil para continuidade operacional absoluta.",
    color: "#0284c7",
  },
  {
    icon: Settings,
    title: "Projetos",
    ref: "PRJ-404",
    status: "Verified",
    desc: "Engenharia voltada para economia e performance industrial.",
    color: "#075985",
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
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

    // Update custom properties for CSS-based glare if needed
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
    <ScrollAnimation variant="fadeUp" delay={index * 0.1}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        className="relative h-full bg-[#0a0f1d] rounded-2xl p-6 border border-white/5 overflow-hidden group transition-all duration-500 hover:border-primary/50 cursor-pointer"
      >
        {/* Dynamic Glare */}
        <motion.div
          style={{ background: glareBg }}
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Technical Header (Parallax Layer 1) */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="flex justify-between items-start mb-12 relative z-10"
        >
          <div className="flex flex-col">
            <span className="text-[9px] font-heading font-black text-primary uppercase tracking-widest">{service.ref}</span>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
              <span className="text-[8px] font-heading font-bold text-white/40 uppercase">{service.status}</span>
            </div>
          </div>
          <service.icon className="text-primary opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" size={24} />
        </div>

        {/* Body Content (Parallax Layer 2) */}
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="relative z-10"
        >
          <h3 className="font-heading text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <div className="h-[2px] w-8 bg-white/10 group-hover:w-16 group-hover:bg-primary transition-all duration-500 mb-6" />
          <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-heading font-bold uppercase text-[11px] tracking-wider">
            {service.desc}
          </p>
        </div>

        {/* Geometric Decoration */}
        <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-white" />
          <div className="absolute bottom-0 right-0 w-[1px] h-full bg-white" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-white" />
        </div>

        {/* Hover Scan Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 -translate-y-full group-hover:translate-y-[400px] transition-transform duration-[2s] ease-in-out" />
        </div>
      </motion.div>
    </ScrollAnimation>
  );
}

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-[#020617] relative overflow-hidden">
      {/* Schematic Grid Background */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:128px_128px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Nossas <span className="text-primary italic">Soluções</span>
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
