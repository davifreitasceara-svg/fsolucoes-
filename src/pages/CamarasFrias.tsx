import { motion } from "framer-motion";
import heroVideo from "@/assets/fsolucoes-hero.mp4";
import { Link } from "react-router-dom";
import { ArrowLeft, Snowflake, CheckCircle } from "lucide-react";
import camaraFria1 from "@/assets/camara_fria_real_1.jpg";
import camaraFria2 from "@/assets/camara_fria_real_2.jpg";
import camaraFria3 from "@/assets/camara_fria_real_3.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const features = [
  "Projetos sob medida para qualquer volume",
  "Instalação com isolamento de alta performance",
  "Sistemas de refrigeração industrial e comercial",
  "Monitoramento de temperatura 24h",
  "Manutenção preventiva e corretiva",
  "Câmaras para hortifrutigranjeiros, carnes, frios e laticínios",
];

const photos = [
  { src: camaraFria1, alt: "Câmaras frigoríficas de hortifruti instaladas" },
  { src: camaraFria2, alt: "Câmara fria de resfriados com portas de vidro" },
  { src: camaraFria3, alt: "Equipamento ilha fria Snow Island instalado" },
];

export default function CamarasFrias() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          src={heroVideo}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/60 to-[#020617] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-heading font-black uppercase tracking-widest text-xs mb-12"
            >
              <ArrowLeft size={14} />
              Voltar para Início
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-5 mb-6"
          >
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <Snowflake className="text-primary" size={40} />
            </div>
            <div>

              <h1 className="font-heading text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                Câmaras <span className="text-primary italic">Frias</span>
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl font-heading uppercase tracking-widest leading-relaxed mb-10"
          >
            Projetos e montagem de câmaras frigoríficas de alto desempenho para supermercados, açougues, restaurantes e indústrias.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="https://wa.me/5585988543450?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20C%C3%A2mara%20Fria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-heading font-black uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Solicitar Orçamento
          </motion.a>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#030b18]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative overflow-hidden rounded-2xl border border-white/5 group ${
                  i === photos.length - 1 && photos.length % 2 !== 0
                    ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                    : ""
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 text-white/70 text-xs font-heading uppercase tracking-widest">{photo.alt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-black text-white uppercase tracking-tighter mb-10"
          >
            O que <span className="text-primary italic">Oferecemos</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-5 rounded-xl bg-[#0a0f1d] border border-white/5"
              >
                <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                <span className="text-white/70 font-heading text-sm uppercase tracking-wider">{feat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
