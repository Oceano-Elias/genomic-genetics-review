import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Baby, Brain, Heart, Microscope, Dna, Users } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Genética Pediátrica",
    description: "Diagnóstico de enfermedades raras, retrasos del desarrollo, trastornos del espectro autista y síndromes genéticos en niños.",
    tag: "Más solicitado",
  },
  {
    icon: Heart,
    title: "Cardiogenética",
    description: "Estudio de miocardiopatías hereditarias, arritmias, muerte súbita familiar y riesgo cardiovascular genético.",
  },
  {
    icon: Brain,
    title: "Neurogenética",
    description: "Evaluación de epilepsias genéticas, discapacidad intelectual, enfermedades neurodegenerativas y trastornos del movimiento.",
  },
  {
    icon: Users,
    title: "Genética Reproductiva",
    description: "Test de portadores, diagnóstico preimplantacional, abortos de repetición y asesoramiento preconcepcional.",
  },
  {
    icon: Dna,
    title: "Exoma Completo",
    description: "Secuenciación del exoma completo para casos sin diagnóstico. La prueba más completa cuando otras fallan.",
  },
  {
    icon: Microscope,
    title: "Oncogenética",
    description: "Evaluación de predisposición hereditaria al cáncer: mama, ovario, colon, tiroides y síndromes asociados.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary font-body uppercase tracking-widest">
            Nuestros Servicios
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground">
            Estudios genéticos para cada necesidad clínica
          </h2>
          <p className="mt-4 text-muted-foreground font-body">
            Cada estudio incluye análisis de laboratorio, interpretación clínica
            por un genetista y una consulta personalizada para explicarte los resultados.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300 group relative overflow-hidden">
                {s.tag && (
                  <span className="absolute top-4 right-4 text-xs font-semibold font-body bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                    {s.tag}
                  </span>
                )}
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-display">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm font-body leading-relaxed">
                    {s.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
