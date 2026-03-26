import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (value: string) => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-fade-up">
      <div className="container mx-auto max-w-4xl rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex w-10 h-10 rounded-full bg-primary/10 items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-semibold text-foreground">
                Tu privacidad importa
              </h3>
              <button
                onClick={() => accept("essential")}
                className="text-muted-foreground hover:text-foreground transition-colors sm:hidden"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Usamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico 
              y personalizar contenido. Puedes aceptar todas o solo las esenciales. Consulta nuestra{" "}
              <a href="#" className="text-primary underline underline-offset-2 hover:text-primary/80">
                Política de Cookies
              </a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
              <Button size="sm" onClick={() => accept("all")} className="font-body">
                Aceptar todas
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => accept("essential")}
                className="font-body"
              >
                Solo esenciales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
