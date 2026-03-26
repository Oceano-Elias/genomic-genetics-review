import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué es un estudio genético clínico?",
    a: "Es un análisis de tu ADN que busca variantes (cambios) en tus genes que puedan estar causando una enfermedad o aumentar tu riesgo de desarrollarla. A diferencia de tests comerciales de ancestría, nuestros estudios tienen validez clínica y son interpretados por genetistas especializados.",
  },
  {
    q: "¿Cómo se toma la muestra?",
    a: "Normalmente mediante una extracción de sangre sencilla o, en algunos casos, una muestra de saliva. Puedes acudir a cualquier centro de extracción colaborador en toda España, o podemos enviarte un kit a tu domicilio.",
  },
  {
    q: "¿Cuánto tardan los resultados?",
    a: "Los paneles dirigidos se entregan en unos 10 días laborables. El exoma clínico en aproximadamente 15 días. Los estudios familiares pueden tardar hasta 20 días. Siempre te mantenemos informado del estado de tu análisis.",
  },
  {
    q: "¿Necesito prescripción médica?",
    a: "No es obligatorio, pero recomendamos que compartas los resultados con tu médico tratante. Nosotros incluimos siempre una consulta con nuestro genetista para explicarte los resultados y recomendaciones.",
  },
  {
    q: "¿Mis datos genéticos están seguros?",
    a: "Absolutamente. Cumplimos con el RGPD y la normativa española de protección de datos sanitarios. Tus datos genéticos están cifrados, almacenados en servidores seguros en la UE, y nunca se comparten con terceros sin tu consentimiento expreso.",
  },
  {
    q: "¿Qué pasa si no encuentran nada?",
    a: "Un resultado negativo también es información valiosa. Además, con el exoma clínico ofrecemos re-análisis gratuito en 12 meses, ya que la ciencia genómica avanza constantemente y nuevas variantes se descubren cada año.",
  },
  {
    q: "¿Ofrecen financiación o pago fraccionado?",
    a: "Sí. Ofrecemos pago en hasta 3 cuotas sin intereses para todos nuestros servicios. También trabajamos con algunas aseguradoras privadas. Consúltanos tu caso particular.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary font-body uppercase tracking-widest">
            Preguntas Frecuentes
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display text-foreground">
            Resolvemos tus dudas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="font-body font-semibold text-left text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
