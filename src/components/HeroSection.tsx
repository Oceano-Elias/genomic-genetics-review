import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  { icon: ShieldCheck, text: "Acreditado ISO 15189" },
  { icon: Clock, text: "Resultados en 15 días" },
  { icon: Award, text: "+2.500 familias atendidas" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Madre con bebé y deportista representando genética y salud"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warm-light text-warm text-sm font-semibold font-body border border-warm/20">
              🧬 El diagnóstico genético que cambia vidas
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl md:text-6xl font-bold font-display leading-tight text-foreground text-balance"
          >
            Descubre las respuestas que tu{" "}
            <span className="gradient-text">ADN</span> tiene para ti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto text-balance"
          >
            Estudios genéticos clínicos interpretados por genetistas expertos.
            Obtén un diagnóstico preciso, un plan de acción personalizado
            y la tranquilidad que tu familia merece.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="font-body text-base px-8 gap-2 shadow-lg shadow-primary/25">
              Solicitar mi estudio genético
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="font-body text-base px-8">
              Consulta gratuita
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            {badges.map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                <b.icon className="w-4 h-4 text-primary" />
                {b.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
