import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Panel Dirigido",
    price: "490",
    description: "Estudio de genes específicos para una patología concreta.",
    features: [
      "Panel de 10-50 genes",
      "Interpretación clínica",
      "Informe en 10 días",
      "Consulta de resultados",
      "Soporte por email",
    ],
    cta: "Solicitar panel",
    popular: false,
  },
  {
    name: "Exoma Clínico",
    price: "990",
    description: "La prueba más completa para casos sin diagnóstico previo.",
    features: [
      "Secuenciación de exoma completo",
      "Análisis de +20.000 genes",
      "Interpretación por genetista senior",
      "Informe detallado en 15 días",
      "Consulta 1h de resultados",
      "Re-análisis gratuito en 12 meses",
      "Asesoramiento familiar incluido",
    ],
    cta: "Solicitar exoma",
    popular: true,
  },
  {
    name: "Genética Familiar",
    price: "1.290",
    description: "Estudio del caso índice + familiares directos.",
    features: [
      "Exoma del paciente principal",
      "Estudio de segregación familiar",
      "Hasta 3 familiares incluidos",
      "Asesoramiento genético familiar",
      "Informe en 20 días",
      "Seguimiento a 6 meses",
    ],
    cta: "Solicitar estudio familiar",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary font-body uppercase tracking-widest">
            Precios Transparentes
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground">
            Invierte en respuestas, no en incertidumbre
          </h2>
          <p className="mt-4 text-muted-foreground font-body">
            Todos los planes incluyen interpretación clínica y consulta de resultados.
            Sin costes ocultos. Posibilidad de pago fraccionado.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col relative overflow-hidden ${
                  plan.popular
                    ? "border-2 border-primary shadow-xl shadow-primary/10"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-xs font-bold font-body text-center py-1.5">
                    MÁS ELEGIDO
                  </div>
                )}
                <CardHeader className={plan.popular ? "pt-10" : ""}>
                  <CardTitle className="text-xl font-display">{plan.name}</CardTitle>
                  <CardDescription className="font-body">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold font-display text-foreground">{plan.price}€</span>
                    <span className="text-sm text-muted-foreground font-body ml-1">/ estudio</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm font-body text-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-6 w-full font-body gap-2 ${
                      plan.popular ? "" : "variant-outline"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-muted-foreground font-body"
        >
          💬 ¿No estás seguro qué estudio necesitas?{" "}
          <a href="#" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">
            Agenda una consulta gratuita
          </a>{" "}
          y te asesoramos sin compromiso.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
