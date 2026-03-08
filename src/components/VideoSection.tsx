import { useRef } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useScroll, useTransform, motion } from "framer-motion";
import videoSrc from "@/assets/whatsapp-video.mp4";

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Inner scroll movement
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={sectionRef} className="bg-[#020617] relative overflow-hidden py-2 border-y border-white/5">
      <div className="container mx-auto">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center">
              
              <ScrollAnimation variant="fadeUp" delay={0.2}>
                <h2 className="text-4xl md:text-7xl font-black font-heading text-white uppercase tracking-tighter leading-none mb-4">
                  Excelência em <br />
                  <span className="text-primary italic">Alta Definição</span>
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation variant="fadeUp" delay={0.4}>
                <p className="text-white/40 text-[10px] md:text-sm max-w-2xl mx-auto uppercase tracking-[0.3em] font-heading font-bold">
                  Monitoramento e precisão técnica em tempo real.
                </p>
              </ScrollAnimation>
            </div>
          }
        >
          {/* Tablet Inner Content (Interactive Scroll) */}
          <div className="relative w-full h-[150%] bg-[#050505] overflow-hidden">
            <motion.div 
              style={{ y: contentY }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Fake Browser/App UI Header */}
              <div className="sticky top-0 w-full h-12 bg-[#0a0f1d] border-b border-white/10 z-30 flex items-center px-6 justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <div className="px-6 py-1 bg-[#1e293b] rounded-md border border-white/5">
                  <span className="text-[7px] font-heading font-bold text-white/30 uppercase tracking-widest leading-none">fsolucoes.com.br/projects/video_feed</span>
                </div>
                <div className="w-4 h-4 rounded-sm border border-white/10" />
              </div>

              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover grayscale-[0.3] brightness-75 group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Technical Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />
              
              <div className="absolute top-16 left-8 flex flex-col gap-1 pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <span className="text-[9px] font-heading font-black text-white uppercase tracking-[0.4em]">LIVE_FEED_01</span>
                </div>
                <div className="text-[8px] font-heading font-bold text-primary/70 uppercase">LATENCY: 12ms // BUFFER: OPTIMAL</div>
              </div>

              <div className="absolute bottom-8 right-8 flex flex-col items-end pointer-events-none">
                <span className="text-[10px] font-heading font-black text-white/50 uppercase tracking-[0.5em]">INDUSTRIAL_OPS</span>
                <div className="h-[2px] w-12 bg-primary mt-2" />
              </div>
            </motion.div>

            {/* Scanning Line (Fixed to tablet screen) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/20 animate-scan shadow-[0_0_15px_rgba(56,189,248,0.3)]" />
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
