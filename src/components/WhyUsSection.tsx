import { ScrollAnimation } from "@/components/ScrollAnimation";
import { TiltCard } from "@/components/TiltCard";
import { Users, Zap, Shield, Briefcase, HeadphonesIcon, Cpu, Activity, ShieldCheck, Gauge } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { 
    icon: Users, 
    title: "Equipe Especializada", 
    ref: "HUMAN_RES-01",
    status: "Verified_Cert",
    desc: "Profissionais certificados e experientes em refrigeração comercial.",
    color: "#38bdf8"
  },
  { 
    icon: Zap, 
    title: "Instalação Rápida", 
    ref: "DEPLOY-02",
    status: "Priority_High",
    desc: "Cumprimos prazos para que seu negócio funcione sem interrupções.",
    color: "#0ea5e9"
  },
  { 
    icon: Shield, 
    title: "Equipamentos de Qualidade", 
    ref: "HARDWARE-03",
    status: "Industrial_Grade",
    desc: "Trabalhamos com as melhores marcas e equipamentos do mercado.",
    color: "#0284c7"
  },
  { 
    icon: Briefcase, 
    title: "Experiência Comercial", 
    ref: "LEGACY-04",
    status: "12_Years_Active",
    desc: "Mais de 12 anos atendendo supermercados, padarias e restaurantes.",
    color: "#075985"
  },
  { 
    icon: HeadphonesIcon, 
    title: "Suporte Técnico", 
    ref: "SUPPORT-05",
    status: "Ready_24/7",
    desc: "Assistência confiável para manutenção preventiva e corretiva.",
    color: "#0369a1"
  },
];

export function WhyUsSection() {
  return (
    <section id="por-que-nos" className="section-padding bg-[#020617] relative overflow-hidden">
      {/* Schematic Grid Background */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              Por Que Escolher a <br />
              <span className="text-primary italic">F. Soluções</span>
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {reasons.map((r, i) => (
            <ScrollAnimation key={r.title} variant="fadeUp" delay={i * 0.1}>
              <TiltCard className="h-full" tiltAmount={10}>
                <div className="relative h-full bg-[#0a0f1d] rounded-2xl p-6 border border-white/5 overflow-hidden group transition-all duration-500 hover:border-primary/40">
                  {/* Glowing Edge Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(300px circle at center, ${r.color}15, transparent 70%)` }}
                  />

                  {/* Tech Header */}
                  <div className="flex justify-between items-start mb-10 relative z-10">

                    <r.icon className="text-primary opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" size={20} />
                  </div>
                  
                  {/* Body Content */}
                  <div className="relative z-10">
                    <h3 className="font-heading text-lg font-black text-white uppercase tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                      {r.title}
                    </h3>
                    <div className="h-[1px] w-6 bg-white/10 group-hover:w-12 group-hover:bg-primary transition-all duration-500 mb-4" />
                    <p className="text-[11px] font-heading font-bold text-white/40 group-hover:text-white/70 transition-colors duration-500 leading-relaxed uppercase tracking-wider">
                      {r.desc}
                    </p>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute top-0 right-0 p-2 opacity-20">
                    <div className="w-4 h-4 border-t border-r border-white/20" />
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
