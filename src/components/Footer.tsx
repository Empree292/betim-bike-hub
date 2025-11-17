import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Bicicletaria Betim</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Sua parceira em mobilidade urbana e aventuras sobre duas rodas.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#catalogo" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  Rua das Bicicletas, 123<br />
                  Centro - Betim/MG
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">(31) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">contato@bicicletariabetim.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Bicicletaria Betim. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
