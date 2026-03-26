import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/34600000000?text=Hola%2C%20me%20gustaría%20información%20sobre%20los%20estudios%20genéticos"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg hover:bg-[#1ebe57] transition-all hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm font-semibold font-body">
        ¿Hablamos?
      </span>
    </a>
  );
};

export default WhatsAppButton;
