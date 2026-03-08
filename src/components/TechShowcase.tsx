import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export function TechShowcase() {
  return (
    <section className="bg-[#020617] relative overflow-hidden">
      {/* Decorative high-tech background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <ScrollAnimation variant="fadeUp">
              <span className="text-primary font-heading text-xs font-black uppercase tracking-[0.6em] mb-4 block">
                Tecnologia de Precisão
              </span>
              <h2 className="text-4xl md:text-7xl font-black font-heading text-white uppercase tracking-tighter leading-none mb-8">
                Sistemas <br />
                <span className="text-primary italic">Termodinâmicos</span>
              </h2>
            </ScrollAnimation>
          </div>
        }
      >
        <div className="w-full h-full relative p-1">
          {/* Main Showcase Image - Using a high-quality industrial refrigeration image from Unsplash */}
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070"
            alt="Industrial Refrigeration System"
            className="mx-auto rounded-2xl object-cover h-full w-full object-center shadow-inner"
            draggable={false}
          />
          
          {/* Overlay elements for a tech feel */}
          <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
          
          {/* Internal stats overlay */}
          <div className="absolute bottom-10 left-10 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-heading font-black text-primary uppercase tracking-widest">Efficiency_Rating</span>
              <span className="text-3xl font-heading font-black text-white tabular-nums">99.8%</span>
            </div>
            <div className="h-[2px] w-24 bg-primary/30" />
            <div className="flex flex-col">
              <span className="text-[10px] font-heading font-black text-primary uppercase tracking-widest">Status</span>
              <span className="text-xs font-heading font-bold text-white/70 uppercase">Optimum_Performance</span>
            </div>
          </div>

          <div className="absolute top-10 right-10 text-right">
            <div className="bg-black/50 backdrop-blur-md border border-white/10 p-4 rounded-xl">
              <span className="text-[10px] font-heading font-black text-primary uppercase tracking-[0.2em] mb-1 block">Component_ID</span>
              <span className="text-sm font-heading font-bold text-white uppercase">HX-900L SERIES</span>
            </div>
          </div>

          {/* Glass reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none rounded-2xl" />
        </div>
      </ContainerScroll>
    </section>
  );
}
