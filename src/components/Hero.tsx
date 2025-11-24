import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-bikes.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5531971824188?text=Olá! Gostaria de saber mais sobre as bicicletas.", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Sua Jornada Sobre
            <span className="block text-primary"> Duas Rodas</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Encontre a bicicleta perfeita para você em Betim. Qualidade, variedade e atendimento especializado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="hero"
              onClick={scrollToContact}
              className="text-lg"
            >
              Ver Catálogo
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleWhatsApp}
              className="text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
