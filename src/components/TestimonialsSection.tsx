import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dra. Laura Pérez",
    role: "Neuróloga infantil · Hospital La Paz",
    text: "Derivo casos complejos a Genomic Genetics por la calidad de sus informes. La interpretación clínica marca la diferencia frente a otros laboratorios.",
    stars: 5,
  },
  {
    name: "Carlos y Ana R.",
    role: "Padres · Barcelona",
    text: "Nuestro hijo llevaba 3 años sin diagnóstico. El exoma clínico nos dio la respuesta en 2 semanas. El equipo fue excepcional en todo momento.",
    stars: 5,
  },
  {
    name: "Dr. Miguel Santos",
    role: "Cardiólogo · Clínica Universitaria",
    text: "Para mis pacientes con sospecha de cardiopatía hereditaria, confío en Genomic Genetics. Resultados rigurosos y comunicación impecable.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary font-body uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground">
            La confianza de familias y profesionales
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground font-body italic leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="font-semibold font-body text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground font-body">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
