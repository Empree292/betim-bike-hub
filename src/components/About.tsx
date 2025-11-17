import { Award, Users, Wrench } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Trabalhamos apenas com marcas reconhecidas e produtos certificados",
  },
  {
    icon: Users,
    title: "Atendimento Especializado",
    description: "Nossa equipe está pronta para ajudar você a encontrar a bike ideal",
  },
  {
    icon: Wrench,
    title: "Manutenção Completa",
    description: "Oficina equipada para revisões e reparos com garantia",
  },
];

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre Nós
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de 10 anos levando mobilidade e saúde para Betim. Nossa missão é conectar pessoas 
            ao prazer de pedalar, oferecendo as melhores bicicletas e serviços da região.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-lg bg-card shadow-soft hover:shadow-hover transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
