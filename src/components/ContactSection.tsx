import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Phone, Mail, MapPin, HardHat } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Orçamento JJ - Nome: ${form.name}. Empresa: ${form.company}. Tel: ${form.phone}. Projeto: ${form.message}`;
    window.open(`https://wa.me/5585988543450?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactInfo = [
    { icon: Phone, title: "Central de Atendimento", value: "(85) 3067-3114", href: "tel:558530673114" },
    { icon: HardHat, title: "Engenharia (WhatsApp)", value: "(85) 98854-3450", href: "https://wa.me/5585988543450" },
    { icon: Mail, title: "Projetos e Plantas", value: "contato@fsolucoes.com.br", href: "mailto:contato@fsolucoes.com.br" },
  ];

  return (
    <section id="contato" className="section-padding bg-background relative overflow-hidden">
      
      {/* Detalhe de background Eletrofrio Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-eletro-pattern opacity-5 pointer-events-none rounded-l-[100px]" />

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-16">
          
          <ScrollAnimation variant="fadeRight">
            <div className="pr-0 md:pr-10">
              <span className="font-heading font-black text-accent uppercase tracking-wide text-xs mb-4 block flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div> Fale Conosco
              </span>
              <h2 className="heading-display text-4xl md:text-5xl mb-6 uppercase">
                Construa sua <br/><span className="text-accent underline decoration-4 underline-offset-4">Engenharia</span>
              </h2>
              
              <p className="text-gray-500 font-body text-lg mb-12 leading-relaxed">
                Toda instalação frigorífica eficiente começa num bom projeto. Contate nossa equipe técnica para levantamento de carga térmica e projeto de refrigeração.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-50 transition-colors group border border-transparent hover:border-gray-100"
                  >
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl shadow-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <item.icon size={26} />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-secondary text-lg mb-1 uppercase tracking-wide">
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

          <ScrollAnimation variant="fadeLeft">
            <div className="bg-gray-50 border border-gray-100 shadow-sm rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
              
              <h3 className="font-heading font-black text-primary text-2xl mb-2 uppercase tracking-wide">
                Solicitação Técnica
              </h3>
              <p className="text-gray-400 text-sm mb-8 font-body font-bold">
                Retorno de nossa equipe em até 1 dia útil.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">Nome Completo</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 font-body transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">Empresa</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 font-body transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">Telefone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 font-body transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">Necessidade</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 resize-none font-body transition-all"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full btn-cyan mt-6"
                >
                  {sent ? "Enviado com Sucesso" : "Solicitar Contato"}
                </button>
              </form>
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}
