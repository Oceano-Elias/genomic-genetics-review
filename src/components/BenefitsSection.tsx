import { motion } from "framer-motion";
import {
  CheckCircle2,
  HeartHandshake,
  GraduationCap,
  Lock,
  Zap,
  Globe,
} from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Genetistas clínicos expertos",
    description: "Tu estudio lo interpreta un equipo de genetistas con formación clínica avanzada, no un algoritmo.",
  },
  {
    icon: CheckCircle2,
    title: "Informe accionable",
    description: "No solo datos: recibes recomendaciones clínicas concretas que tu médico puede aplicar directamente.",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento humano",
    description: "Consulta de resultados incluida. Te explicamos todo con empatía y claridad, sin jerga técnica.",
  },
  {
    icon: Lock,
    title: "Máxima confidencialidad",
    description: "Tus datos genéticos están protegidos con los más altos estándares de seguridad y cumplimiento RGPD.",
  },
  {
    icon: Zap,
    title: "Resultados en 15 días",
    description: "Tiempos de entrega competitivos sin sacrificar la calidad del análisis ni la interpretación.",
  },
  {
    icon: Globe,
    title: "Servicio en toda España",
    description: "Enviamos el kit de recogida a tu domicilio o usa nuestra red de centros colaboradores.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary font-body uppercase tracking-widest">
            ¿Por qué elegirnos?
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground">
            No todos los estudios genéticos son iguales
          </h2>
          <p className="mt-4 text-muted-foreground font-body">
            La diferencia está en la interpretación clínica. Un dato sin contexto
            no sirve. Nosotros convertimos tu ADN en respuestas útiles.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold font-display text-foreground">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground font-body leading-relaxed">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
