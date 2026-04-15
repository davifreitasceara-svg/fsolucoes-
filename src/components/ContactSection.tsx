import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Phone, Mail, MapPin, HardHat } from "lucide-react";

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
    { icon: Phone, title: "Central de Atendimento", value: "(85) 3067-3114", href: "tel:558530673114" },
    { icon: HardHat, title: "Suporte Técnico (WhatsApp)", value: "(85) 98854-3450", href: "https://wa.me/5585988543450" },
    { icon: Mail, title: "Envio de Projetos", value: "contato@fsolucoes.com.br", href: "mailto:contato@fsolucoes.com.br" },
  ];

  return (
    <section id="contato" className="section-padding bg-[#f7f7f7] border-t border-gray-100 relative">
      {/* Detalhe de background sutil Eletrofrio Style */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-eletro-pattern opacity-5 pointer-events-none rounded-l-[100px]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-16">
          
          {/* Lado Institucional */}
          <ScrollAnimation variant="fadeRight">
            <div>
              <span className="font-heading font-bold text-accent uppercase tracking-[0.2em] text-sm mb-4 block">
                Fale Conosco
              </span>
              <h2 className="font-heading font-black text-secondary text-4xl md:text-5xl mb-6 uppercase leading-[1.1]">
                Vamos desenhar a sua nova <br/><span className="text-accent underline decoration-4 underline-offset-4">Instalação?</span>
              </h2>
              
              <p className="text-gray-500 font-body text-lg mb-12 leading-relaxed max-w-md">
                Preencha os dados e um engenheiro especializado entrará em contato rápido para o dimensionamento do seu projeto.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-4 rounded-3xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-16 h-16 bg-blue-50/80 rounded-[1.25rem] shadow-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <item.icon size={26} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-secondary text-lg mb-1 uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 font-body font-semibold">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </ScrollAnimation>

          {/* Lado Formulário (Estilo Card B2B) */}
          <ScrollAnimation variant="fadeLeft">
            <div className="bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,75,135,0.06)] rounded-[32px] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
              
              <h3 className="font-heading font-black text-primary text-2xl mb-2 uppercase tracking-wide">
                Solicitação Técnica
              </h3>
              <p className="text-gray-400 text-sm mb-8 font-body font-semibold">
                Tempo de resposta estimado: 15 minutos
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">Nome Completo</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-gray-50 border border-transparent rounded-[20px] px-6 py-4 text-sm focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 font-body transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">Empresa</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-gray-50 border border-transparent rounded-[20px] px-6 py-4 text-sm focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 font-body transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">Telefone (Whatsapp)</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-gray-50 border border-transparent rounded-[20px] px-6 py-4 text-sm focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 font-body transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">Escopo Principal</label>
                  <textarea
                    required
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-gray-50 border border-transparent rounded-[20px] px-6 py-4 text-sm focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 resize-none font-body transition-all"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-[#008bc7] text-white py-5 rounded-[20px] font-heading font-black uppercase tracking-widest text-sm transition-all shadow-md mt-6"
                >
                  {sent ? "Enviado com Sucesso!" : "Solicitar Engenharia"}
                </button>
              </form>
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}
