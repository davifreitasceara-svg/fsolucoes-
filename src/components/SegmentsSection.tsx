import { ScrollAnimation } from "@/components/ScrollAnimation";
import { TiltCard } from "@/components/TiltCard";
import { ShoppingCart, Croissant, Store, Snowflake } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import project_supermarket from "@/assets/Instagram21_files/503302760_693422413682586_1668889886455766648_n.jpg";
import project_bakery from "@/assets/Instagram video_files/485771840_18314872924202395_272744802950690594_n.jpg";
import project_market from "@/assets/Instagram21_files/623993451_18109663492659054_3677613959478220949_n.jpg";

const segments = [
  { 
    icon: ShoppingCart, 
    label: "Supermercados", 
    image: project_supermarket,
    gridClass: "md:col-span-2 md:row-span-2",
    tech: "Large_Scale_Storage"
  },
  { 
    icon: Croissant, 
    label: "Padarias", 
    image: project_bakery,
    gridClass: "md:col-span-1 md:row-span-1",
    tech: "Humidity_Control"
  },
  { 
    icon: Store, 
    label: "Mercados", 
    image: project_market,
    gridClass: "md:col-span-1 md:row-span-1",
    tech: "Variable_Load"
  },
];

export function SegmentsSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="segmentos" 
      className="section-padding bg-background relative overflow-hidden group/section"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{
            maskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/20" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:160px_160px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight">
              Soluções por <span className="text-gradient">Indústria</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-sm uppercase font-heading font-bold tracking-widest max-w-xl mx-auto opacity-50">
              Projetos personalizados para as necessidades específicas de cada modelo de negócio.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {segments.map((s, i) => (
            <ScrollAnimation key={s.label} variant="scaleIn" delay={i * 0.1} className={s.gridClass}>
              <TiltCard className="h-full w-full" tiltAmount={8}>
                <div className="relative h-full w-full rounded-3xl overflow-hidden group border border-white/5 bg-card/30 backdrop-blur-sm">
                  {/* Background Image with Overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${s.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                        <s.icon size={24} />
                      </div>
                      <div className="flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[10px] font-heading font-black text-primary uppercase tracking-widest">Tech_Stack</span>
                        <span className="text-[8px] font-heading font-bold text-white/70 uppercase">{s.tech}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-[2px] w-8 bg-primary translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                        <h3 className="font-heading text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                          {s.label}
                        </h3>
                      </div>
                      <p className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-[0.2em] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        Visualizar Detalhes
                      </p>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 p-4 transform translate-x-full translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                    <Snowflake size={16} className="text-primary/30" />
                  </div>
                </div>
              </TiltCard>
            </ScrollAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}
