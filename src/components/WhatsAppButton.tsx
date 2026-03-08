import { MessageCircle } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Magnetic strength={0.4}>
        <a
          href="https://wa.me/5585988543450?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow"
          aria-label="Fale pelo WhatsApp"
        >
          <MessageCircle className="text-primary-foreground" size={28} />
        </a>
      </Magnetic>
    </div>
  );
}
