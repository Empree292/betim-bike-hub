import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bikeMountain from "@/assets/bike-mountain.jpg";
import bikeUrban from "@/assets/bike-urban.jpg";
import bikeRoad from "@/assets/bike-road.jpg";
import bikeElectric from "@/assets/bike-electric.jpg";
import bikeKids from "@/assets/bike-kids.jpg";
import bikeBmx from "@/assets/bike-bmx.jpg";

const bikes = [
  {
    id: 1,
    name: "Mountain Bike Pro",
    description: "Perfeita para trilhas e aventuras off-road",
    price: "R$ 2.499,00",
    image: bikeMountain,
  },
  {
    id: 2,
    name: "Urbana Comfort",
    description: "Ideal para o dia a dia na cidade",
    price: "R$ 1.299,00",
    image: bikeUrban,
  },
  {
    id: 3,
    name: "Speed Racing",
    description: "Alta performance para estradas",
    price: "R$ 3.799,00",
    image: bikeRoad,
  },
  {
    id: 4,
    name: "E-Bike Tech",
    description: "Tecnologia elétrica para maior conforto",
    price: "R$ 4.999,00",
    image: bikeElectric,
  },
  {
    id: 5,
    name: "Kids Adventure",
    description: "Diversão e segurança para crianças",
    price: "R$ 599,00",
    image: bikeKids,
  },
  {
    id: 6,
    name: "BMX Extreme",
    description: "Para manobras e estilo radical",
    price: "R$ 1.899,00",
    image: bikeBmx,
  },
];

export const Catalog = () => {
  const handleWhatsApp = (bikeName: string) => {
  const message = `Olá! Tenho interesse na ${bikeName}. Poderia me dar mais informações?`;
  window.open(`https://wa.me/5531971824188?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="catalogo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso Catálogo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore nossa seleção de bicicletas para todos os estilos e necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike, index) => (
            <Card 
              key={bike.id} 
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img 
                  src={bike.image} 
                  alt={bike.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{bike.name}</CardTitle>
                <CardDescription className="text-base">{bike.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-4">{bike.price}</p>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => handleWhatsApp(bike.name)}
                >
                  Tenho Interesse
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
