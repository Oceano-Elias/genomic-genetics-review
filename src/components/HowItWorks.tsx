import { motion } from "framer-motion";
import { FileText, TestTube, Search, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Consulta inicial gratuita",
    description: "Hablamos contigo para entender tu caso, resolver dudas y recomendarte el estudio más adecuado. Sin compromiso.",
  },
  {
    icon: TestTube,
    step: "02",
    title: "Toma de muestra",
    description: "Recogida de muestra de sangre o saliva. Puedes hacerlo en tu centro médico o en nuestra red de puntos de extracción.",
  },
  {
    icon: Search,
    step: "03",
    title: "Análisis e interpretación",
    description: "Nuestro laboratorio acreditado analiza tu ADN. Un genetista clínico interpreta los resultados con rigor científico.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Informe + consulta de resultados",
    description: "Recibes un informe clínico completo y una consulta personalizada donde te explicamos todo con claridad.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary font-body uppercase tracking-widest">
            Proceso Simple
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground">
            4 pasos hacia las respuestas que necesitas
          </h2>
          <p className="mt-4 text-muted-foreground font-body">
            Un proceso claro, guiado y sin complicaciones.
            Te acompañamos en cada etapa.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
              )}

              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center shadow-sm">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold font-body flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold font-display text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
