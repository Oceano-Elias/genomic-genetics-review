import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary font-body uppercase tracking-widest">
            Caso Real
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground">
            Un diagnóstico que cambió una vida
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Story */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warm-light text-warm text-xs font-semibold font-body w-fit">
                  Diagnóstico de TEA
                </div>
                <h3 className="mt-4 text-2xl font-bold font-display text-foreground">
                  La historia de Marco
                </h3>
                <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                  Marco tenía 4 años y llevaba dos sin un diagnóstico claro. Múltiples visitas
                  a especialistas, pruebas inconcluyentes y una familia agotada. Un estudio de
                  exoma clínico reveló una variante patogénica que explicaba sus síntomas de
                  trastorno del espectro autista.
                </p>
                <p className="mt-3 text-muted-foreground font-body leading-relaxed">
                  Con el diagnóstico genético, sus médicos pudieron diseñar un plan de
                  intervención temprana personalizado. Hoy Marco está progresando significativamente
                  en su desarrollo.
                </p>
              </div>

              {/* Testimonial */}
              <div className="bg-primary/5 p-8 md:p-10 flex flex-col justify-center">
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <blockquote className="text-foreground font-body italic leading-relaxed text-lg">
                  "Después de dos años sin respuestas, Genomic Genetics nos dio el diagnóstico
                  que cambió todo. Por fin pudimos actuar con un plan claro. Estamos eternamente
                  agradecidos."
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold font-body text-foreground">
                    María G.
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    Madre de Marco · Madrid
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-bold font-display text-primary">2 años</p>
                      <p className="text-xs text-muted-foreground font-body">Sin diagnóstico</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold font-display text-primary">15 días</p>
                      <p className="text-xs text-muted-foreground font-body">Con nuestro estudio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
