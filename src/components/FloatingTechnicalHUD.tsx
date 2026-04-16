import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import videoHero from "@/assets/fsolucoes-hero.mp4";
import videoField from "@/assets/whatsapp-video.mp4";
import img1 from "@/assets/camara_fria_real_1.jpg";
import img2 from "@/assets/estrutura_real_4.jpg";

export function FloatingTechnicalHUD() {
  const { scrollYProgress } = useScroll();

  // Versão estável com arquivos locais - Garantindo carregamento e cores originais
  const frames = [
    { 
      id: 1, 
      side: "right", 
      type: "video", 
      src: videoField, 
      range: [0.05, 0.12, 0.25, 0.32], 
      label: "REGISTRO_OBRA_01", 
      top: "20%" 
    },
    { 
      id: 2, 
      side: "left", 
      type: "video", 
      src: videoHero, 
      range: [0.35, 0.42, 0.55, 0.62], 
      label: "OPERACIONAL_LIVE", 
      top: "25%" 
    },
    { 
      id: 3, 
      side: "right", 
      type: "image", 
      src: img1, 
      range: [0.65, 0.72, 0.90, 0.98], 
      label: "DETALHE_TECNICO", 
      top: "30%" 
    },
  ];

  return (
    <>
      {frames.map((frame) => (
        <TechFrame key={frame.id} frame={frame} scrollProgress={scrollYProgress} />
      ))}
    </>
  );
}

function TechFrame({ frame, scrollProgress }: { frame: any, scrollProgress: any }) {
  const opacity = useTransform(scrollProgress, frame.range, [0, 1, 1, 0]);
  const y = useTransform(scrollProgress, [frame.range[0], frame.range[3]], [20, -20]);

  return (
    <motion.div
      style={{ 
        opacity,
        y,
        [frame.side]: "var(--hud-side-offset)",
        top: frame.top
      }}
      className="fixed w-40 3xl:w-56 hidden xl:flex flex-col z-40 pointer-events-none [--hud-side-offset:0.5rem] 3xl:[--hud-side-offset:2.5rem]"
    >
      {/* Side Label */}
      <div className={`absolute top-0 text-[10px] font-mono text-primary font-bold uppercase tracking-[0.3em] ${frame.side === 'right' ? '-left-10' : '-right-10'}`} style={{ writingMode: 'vertical-rl' }}>
        {frame.label}
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/5 shadow-2xl backdrop-blur-[2px] p-3 ring-1 ring-white/10">
        <div className="relative aspect-[3/5] w-full rounded-xl overflow-hidden shadow-lg border border-white/20 bg-black">
          {frame.type === "video" ? (
            <video 
              src={frame.src} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover opacity-100" 
            />
          ) : (
            <img 
              src={frame.src} 
              className="w-full h-full object-cover opacity-100" 
              alt={frame.label}
            />
          )}

          {/* Sutil Scanline Overlay */}
          <motion.div 
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-primary/20 z-10 opacity-30"
          />

          <div className="absolute bottom-2 left-3 text-[8px] font-mono text-white font-bold uppercase bg-primary/80 px-2 py-0.5 rounded shadow-sm">
            {frame.side === 'right' ? 'Sector_B' : 'Sector_A'}
          </div>
        </div>
      </div>
      
      {/* HUD Brackets */}
      <div className={`absolute -top-2 ${frame.side === 'right' ? '-right-2' : '-left-2'} w-6 h-6 border-t-2 ${frame.side === 'right' ? 'border-r-2' : 'border-l-2'} border-primary`} />
      <div className={`absolute -bottom-2 ${frame.side === 'right' ? '-left-2' : '-right-2'} w-6 h-6 border-b-2 ${frame.side === 'right' ? 'border-l-2' : 'border-r-2'} border-primary`} />
    </motion.div>
  );
}

// Helper CSS for vertical text if needed, or I'll just use inline rotation
const verticalTextStyle = {
  writingMode: "vertical-rl",
  textOrientation: "mixed"
} as any;
