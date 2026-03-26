import { Dna } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Dna className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-background">
                Genomic<span className="text-primary">Genetics</span>
              </span>
            </div>
            <p className="text-sm font-body text-background/60 leading-relaxed">
              Estudios genéticos clínicos interpretados por expertos.
              Diagnóstico, asesoramiento y acompañamiento genético en toda España.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm font-body text-background/60">
              <li><a href="#" className="hover:text-primary transition-colors">Genética Pediátrica</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cardiogenética</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Neurogenética</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Oncogenética</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Exoma Completo</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm font-body text-background/60">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Equipo médico</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Publicaciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-2 text-sm font-body text-background/60">
              <li><a href="#" className="hover:text-primary transition-colors">Aviso legal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Protección de datos (RGPD)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-background/40">
            © {new Date().getFullYear()} Genomic Genetics. Todos los derechos reservados. Laboratorio acreditado ISO 15189.
          </p>
          <div className="flex items-center gap-4 text-xs font-body text-background/40">
            <span>CIF: B-XXXXXXXX</span>
            <span>Nº Registro Sanitario: XXXXX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
