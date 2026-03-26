import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "2.500+", label: "Familias ayudadas" },
  { value: "98%", label: "Tasa de satisfacción" },
  { value: "15", label: "Años de experiencia" },
  { value: "40+", label: "Patologías cubiertas" },
];

const SocialProof = () => {
  return (
    <section className="py-12 bg-trust border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold font-display text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground font-body">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Star rating */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground font-body">
            4.9/5 basado en 320+ valoraciones de familias
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
