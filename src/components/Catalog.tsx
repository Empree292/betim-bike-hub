import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    available: true,
    stock: 3,
  },
  {
    id: 2,
    name: "Urbana Comfort",
    description: "Ideal para o dia a dia na cidade",
    price: "R$ 1.299,00",
    image: bikeUrban,
    available: true,
    stock: 5,
  },
  {
    id: 3,
    name: "Speed Racing",
    description: "Alta performance para estradas",
    price: "R$ 3.799,00",
    image: bikeRoad,
    available: false,
    stock: 0,
  },
  {
    id: 4,
    name: "E-Bike Tech",
    description: "Tecnologia elétrica para maior conforto",
    price: "R$ 4.999,00",
    image: bikeElectric,
    available: true,
    stock: 2,
  },
  {
    id: 5,
    name: "Kids Adventure",
    description: "Diversão e segurança para crianças",
    price: "R$ 599,00",
    image: bikeKids,
    available: true,
    stock: 8,
  },
  {
    id: 6,
    name: "BMX Extreme",
    description: "Para manobras e estilo radical",
    price: "R$ 1.899,00",
    image: bikeBmx,
    available: false,
    stock: 0,
  },
];

export const Catalog = () => {
  const handleWhatsApp = (bikeName: string) => {
    const message = `Olá! Tenho interesse na ${bikeName}. Poderia me dar mais informações?`;
    window.open(`https://wa.me/5531999999999?text=${encodeURIComponent(message)}`, "_blank");
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
              className={`group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in overflow-hidden ${
                !bike.available ? 'opacity-75' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden relative">
                <img 
                  src={bike.image} 
                  alt={bike.name}
                  className={`w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 ${
                    !bike.available ? 'grayscale' : ''
                  }`}
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={bike.available ? "default" : "secondary"}
                    className="text-sm font-semibold"
                  >
                    {bike.available ? "Disponível" : "Indisponível"}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-2xl">{bike.name}</CardTitle>
                </div>
                <CardDescription className="text-base">{bike.description}</CardDescription>
                {bike.available && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {bike.stock} {bike.stock === 1 ? 'unidade disponível' : 'unidades disponíveis'}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-4">{bike.price}</p>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => handleWhatsApp(bike.name)}
                  disabled={!bike.available}
                >
                  {bike.available ? 'Tenho Interesse' : 'Produto Indisponível'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
