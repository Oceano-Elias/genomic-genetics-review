import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground text-balance">
            Cada día sin respuestas es un día perdido para tu salud
          </h2>
          <p className="mt-6 text-lg text-muted-foreground font-body max-w-xl mx-auto">
            El diagnóstico genético correcto puede transformar tu tratamiento,
            tu pronóstico y tu calidad de vida. Da el primer paso hoy.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="font-body text-base px-8 gap-2 shadow-lg shadow-primary/25">
              Solicitar mi estudio genético
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="font-body text-base px-8 gap-2">
              <Phone className="w-4 h-4" />
              Llamar ahora
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground font-body">
            ✅ Consulta inicial gratuita · ✅ Sin compromiso · ✅ Pago fraccionado disponible
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
