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
    <section id="contato" className="section-padding bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Lado Institucional */}
          <ScrollAnimation variant="fadeRight">
            <div>
              <span className="font-heading font-black text-accent uppercase tracking-widest text-sm mb-2 block">
                Fale Conosco
              </span>
              <h2 className="font-heading font-black text-secondary text-3xl md:text-5xl mb-6 uppercase">
                Vamos desenhar a sua nova <span className="text-primary">Instalação?</span>
              </h2>
              <div className="w-16 h-1 bg-accent mb-8"></div>
              
              <p className="text-gray-600 font-body text-lg mb-10 leading-relaxed max-w-md">
                De refrigeração comercial a soluções de engenharia, nossa equipe de suporte e vendas técnicas está preparada para o atendimento imediato da sua demanda.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-4 border border-transparent hover:border-gray-200 hover:bg-white rounded transition-colors group"
                  >
                    <div className="w-14 h-14 bg-white border border-gray-100 rounded shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-secondary text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 font-body text-sm font-semibold">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white border border-gray-200 shadow-sm rounded flex items-start gap-4 max-w-md">
                <MapPin className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-heading font-bold text-secondary mb-2">Endereço da Sede</h4>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">
                    Rua Teofredo Goiana, 763 – A<br />
                    Cidade dos Funcionários<br />
                    Fortaleza – CE, 60822-630
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Lado Formulário */}
          <ScrollAnimation variant="fadeLeft">
            <div className="bg-white border top-0 border-gray-200 shadow-xl rounded-lg p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              
              <h3 className="font-heading font-bold text-secondary text-2xl mb-2">
                Solicitação Comercial
              </h3>
              <p className="text-gray-500 text-sm mb-8 font-body">
                Preencha os dados e entramos em contato em até um dia útil.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Nome Completo</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Empresa</label>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Telefone (Whatsapp)</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Resumo da Demanda</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none font-body"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-[#cc0000] text-white py-4 rounded font-heading font-bold uppercase tracking-wide text-sm transition-colors mt-4"
                >
                  {sent ? "Obrigado! Solicitação enviada." : "Enviar Solicitação"}
                </button>
              </form>
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}
