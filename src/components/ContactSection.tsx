import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ClipboardList, Instagram } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Orçamento Comercial - Nome: ${form.name}. Empresa: ${form.company}. Tel: ${form.phone}. Projeto: ${form.message}`;
    window.open(`https://wa.me/5585988543450?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactInfo = [
    { icon: Phone, title: "Central de Vendas", value: "(85) 3067-3114", href: "tel:558530673114" },
    { icon: ClipboardList, title: "Engenharia (WhatsApp)", value: "(85) 98854-3450", href: "https://wa.me/5585988543450" },
    { icon: Mail, title: "Projetos Corporativos", value: "contato@fsolucoes.com.br", href: "mailto:contato@fsolucoes.com.br" },
    { icon: Instagram, title: "Obras em Andamento", value: "@fsolucoes_instalacoes", href: "https://instagram.com/fsolucoes_instalacoes" },
  ];

  return (
    <section id="contato" className="section-padding bg-white relative border-t border-[#e2e8f0]">
      <div className="container mx-auto">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="section-tag justify-center">
              Fale com a Engenharia
            </span>
            <h2 className="heading-display text-4xl md:text-5xl text-[#0d1520] mb-4">
              SOLICITE UM <span className="text-primary italic">ORÇAMENTO</span>
            </h2>
            <p className="text-[#64748b] text-base">
              Nossa equipe técnica está pronta para dimensionar e propor a solução financeira e técnica mais adequada para o seu projeto.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollAnimation variant="fadeLeft">
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-6 border border-[#e2e8f0] bg-[#f8fafc] hover:border-primary/40 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white border border-[#e2e8f0] rounded flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <h3 className="font-heading font-black text-[11px] uppercase tracking-widest text-[#64748b] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm font-bold text-[#0d1520]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Endereço */}
              <div className="p-8 border border-[#e2e8f0] bg-white mt-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                <h3 className="font-heading font-black text-sm uppercase tracking-widest text-[#0d1520] mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  Sede Operacional
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Rua Teofredo Goiana, 763 – A<br />
                  Cidade dos Funcionários<br />
                  Fortaleza – CE, 60822-630
                </p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Formulário Corporativo */}
          <div className="lg:col-span-7">
            <ScrollAnimation variant="fadeRight">
              <div className="bg-[#050A0C] border border-[#0A1218] p-8 md:p-12 relative overflow-hidden shadow-2xl">
                
                {/* Detalhes de design */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />
                <div className="absolute top-0 right-0 p-4 font-heading text-[10px] uppercase tracking-widest text-white/20">
                  REF. #FS-FRM-01
                </div>

                <div className="mb-10">
                  <h3 className="font-heading text-2xl font-black text-white uppercase tracking-tight mb-2">
                    Portal do Cliente
                  </h3>
                  <p className="text-white/50 text-sm">
                    Forneça os detalhes da sua demanda para análise técnica prévia.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-heading font-black uppercase tracking-widest text-primary">
                        Nome / Responsável
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#0A1218] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 rounded-none"
                        placeholder="Nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-heading font-black uppercase tracking-widest text-primary">
                        Empresa
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-[#0A1218] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 rounded-none"
                        placeholder="Nome fantasia ou Razão Social"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-heading font-black uppercase tracking-widest text-primary">
                      Telefone (com DDD)
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#0A1218] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 rounded-none"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-heading font-black uppercase tracking-widest text-primary">
                      Escopo do Projeto
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#0A1218] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 rounded-none resize-none"
                      placeholder="Descreva brevemente as necessidades de refrigeração da sua empresa..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 text-sm font-heading font-black uppercase tracking-[0.2em] bg-primary hover:bg-primary-light text-white transition-all duration-300"
                  >
                    {sent ? "Processando Solicitação ✓" : "Solicitar Análise Técnica"}
                  </button>
                  <p className="text-[10px] text-white/30 text-center uppercase tracking-widest">
                    Um consultor técnico entrará em contato em até 4h úteis.
                  </p>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
