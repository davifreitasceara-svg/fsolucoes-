"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20 overflow-hidden"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Combine scroll rotation with mouse tilt
  const mouseRotateX = useTransform(rotate, (v) => v + (isHovered ? mousePos.y * -15 : 0));
  const mouseRotateY = isHovered ? mousePos.x * 15 : 0;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      style={{
        rotateX: mouseRotateX,
        rotateY: mouseRotateY,
        scale,
        boxShadow: isHovered 
          ? "0 0 #0000004d, 0 30px 60px rgba(56, 189, 248, 0.2), 0 60px 120px rgba(0, 0, 0, 0.5)"
          : "0 0 #0000004d, 0 20px 50px #00000080, 0 50px 100px #00000040",
      }}
      className="max-w-6xl -mt-12 mx-auto h-[35rem] md:h-[45rem] w-full border-[8px] border-[#1a1a1a] p-1 bg-[#050505] rounded-[40px] shadow-2xl relative transition-shadow duration-500"
    >
      {/* Tablet Camera Hole */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#111] rounded-full z-20 border border-white/5" />
      
      {/* Glare Effect */}
      {isHovered && (
        <div 
          className="absolute inset-0 z-30 pointer-events-none opacity-40 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(255,255,255,0.1) 0%, transparent 60%)`
          }}
        />
      )}

      {/* Inner Screen */}
      <div className="h-full w-full overflow-hidden rounded-[32px] bg-[#020617] relative border border-white/5">
        {children}
      </div>

      {/* Control Indicator (Bottom) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/10 rounded-full z-20" />
    </motion.div>
  );
};
