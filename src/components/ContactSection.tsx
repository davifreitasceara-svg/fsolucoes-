import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}. Email: ${form.email}. Tel: ${form.phone}. Mensagem: ${form.message}`;
    window.open(`https://wa.me/5585988543450?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactInfo = [
    { icon: Phone, title: "Telefone", value: "(85) 3067-3114", href: "tel:558530673114" },
    { icon: MessageCircle, title: "WhatsApp", value: "(85) 98854-3450", href: "https://wa.me/5585988543450" },
    { icon: Mail, title: "Email", value: "rosangela@fsolucoes.com.br", href: "mailto:rosangela@fsolucoes.com.br" },
    { icon: Instagram, title: "Instagram", value: "@fsolucoes_instalacoes", href: "https://instagram.com/fsolucoes_instalacoes" },
  ];

  return (
    <section id="contato" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto relative z-10">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-heading text-sm font-bold tracking-[0.3em] uppercase">
              Conexão
            </span>
            <h2 className="mt-3 font-heading text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight">
              Fale <span className="text-primary">Conosco</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto mt-6" />
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact info side */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollAnimation variant="fadeLeft">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
                  >
                    <item.icon className="text-primary mb-3 group-hover:scale-110 transition-transform neon-shadow" size={24} />
                    <h3 className="font-heading font-black text-xs uppercase tracking-widest text-foreground/70 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-foreground truncate">
                      {item.value}
                    </p>
                  </a>
                ))}
              </div>

              {/* Address card */}
              <div className="glass-card p-8 rounded-2xl mb-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <MapPin className="text-primary mb-4 neon-shadow" size={32} />
                <h3 className="font-heading font-black text-lg uppercase tracking-tight text-foreground mb-3">
                  Nossa Sede
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rua Teofredo Goiana, 763 – A<br />
                  Cidade dos Funcionários<br />
                  Fortaleza – CE, 60822-630
                </p>
              </div>

              {/* Map container */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 h-64 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3!2d-38.49!3d-3.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDcnMjQuMCJTIDM4wrAyOSczNi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização F. Soluções"
                />
              </div>
            </ScrollAnimation>
          </div>

          {/* Form side */}
          <div className="lg:col-span-7">
            <ScrollAnimation variant="fadeRight">
              <TiltCard tiltAmount={5} glare={true} className="rounded-3xl">
                <form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-3xl p-10 md:p-12 space-y-6 relative overflow-hidden h-full"
                >
                  {/* Decorative glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[60px] rounded-full" />
                  
                  <div className="relative z-10">
                    <h3 className="font-heading text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-2">
                      Inicie seu <span className="text-primary">Projeto</span>
                    </h3>
                    <p className="text-muted-foreground mb-8 text-sm">
                      Preencha os campos abaixo e entraremos em contato o mais breve possível.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 relative z-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary ml-1">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/30"
                        placeholder="Ex: João Silva"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary ml-1">
                        Seu Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/30"
                        placeholder="email@dominio.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 relative z-10">
                    <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary ml-1">
                      Telefone de Contato
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/30"
                      placeholder="(85) 90000-0000"
                    />
                  </div>

                  <div className="space-y-2 relative z-10">
                    <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary ml-1">
                      Como podemos ajudar?
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none placeholder:text-muted-foreground/30"
                      placeholder="Conte-nos um pouco sobre sua necessidade..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full py-8 text-sm font-heading font-black uppercase tracking-[0.3em] bg-primary hover:bg-primary-light text-primary-foreground shadow-2xl hover:shadow-primary/20 transition-all duration-300 relative z-10"
                  >
                    {sent ? "Enviado com Sucesso ✓" : "Enviar Agora"}
                  </Button>
                </form>
              </TiltCard>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
