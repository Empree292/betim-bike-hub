import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import bikeMountain from "@/assets/bike-mountain.jpg";
import bikeUrban from "@/assets/bike-urban.jpg";
import bikeRoad from "@/assets/bike-road.jpg";
import bikeElectric from "@/assets/bike-electric.jpg";
import bikeKids from "@/assets/bike-kids.jpg";
import bikeBmx from "@/assets/bike-bmx.jpg";
import productHelmet from "@/assets/product-helmet.jpg";
import productGloves from "@/assets/product-gloves.jpg";
import productToolkit from "@/assets/product-toolkit.jpg";
import productLock from "@/assets/product-lock.jpg";
import productPump from "@/assets/product-pump.jpg";
import productBottle from "@/assets/product-bottle.jpg";

const products = [
  {
    id: 1,
    name: "Mountain Bike Pro",
    description: "Perfeita para trilhas e aventuras off-road",
    price: "R$ 2.499,00",
    image: bikeMountain,
    available: true,
    stock: 3,
    category: "Bicicletas"
  },
  {
    id: 2,
    name: "Urbana Comfort",
    description: "Ideal para o dia a dia na cidade",
    price: "R$ 1.299,00",
    image: bikeUrban,
    available: true,
    stock: 5,
    category: "Bicicletas"
  },
  {
    id: 3,
    name: "Speed Racing",
    description: "Alta performance para estradas",
    price: "R$ 3.799,00",
    image: bikeRoad,
    available: false,
    stock: 0,
    category: "Bicicletas"
  },
  {
    id: 4,
    name: "E-Bike Tech",
    description: "Tecnologia elétrica para maior conforto",
    price: "R$ 4.999,00",
    image: bikeElectric,
    available: true,
    stock: 2,
    category: "Bicicletas"
  },
  {
    id: 5,
    name: "Kids Adventure",
    description: "Diversão e segurança para crianças",
    price: "R$ 599,00",
    image: bikeKids,
    available: true,
    stock: 8,
    category: "Bicicletas"
  },
  {
    id: 6,
    name: "BMX Extreme",
    description: "Para manobras e estilo radical",
    price: "R$ 1.899,00",
    image: bikeBmx,
    available: false,
    stock: 0,
    category: "Bicicletas"
  },
  {
    id: 7,
    name: "Capacete Aerodinâmico",
    description: "Proteção máxima com design moderno",
    price: "R$ 289,00",
    image: productHelmet,
    available: true,
    stock: 12,
    category: "Acessórios"
  },
  {
    id: 8,
    name: "Luvas Gel Premium",
    description: "Conforto e aderência para longos pedais",
    price: "R$ 119,00",
    image: productGloves,
    available: true,
    stock: 15,
    category: "Acessórios"
  },
  {
    id: 9,
    name: "Kit Ferramentas Completo",
    description: "Tudo que você precisa para manutenção",
    price: "R$ 349,00",
    image: productToolkit,
    available: true,
    stock: 6,
    category: "Peças e Manutenção"
  },
  {
    id: 10,
    name: "Trava de Segurança U-Lock",
    description: "Máxima segurança contra furtos",
    price: "R$ 159,00",
    image: productLock,
    available: true,
    stock: 10,
    category: "Acessórios"
  },
  {
    id: 11,
    name: "Bomba de Ar com Manômetro",
    description: "Calibragem precisa e fácil",
    price: "R$ 89,00",
    image: productPump,
    available: false,
    stock: 0,
    category: "Peças e Manutenção"
  },
  {
    id: 12,
    name: "Garrafa Térmica 750ml",
    description: "Mantém a temperatura ideal por horas",
    price: "R$ 49,00",
    image: productBottle,
    available: true,
    stock: 20,
    category: "Acessórios"
  },
];

export const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");

  const handleWhatsApp = (productName: string) => {
    const message = `Olá! Tenho interesse no(a) ${productName}. Poderia me dar mais informações?`;
    window.open(`https://wa.me/5531971824188?text=${encodeURIComponent(message)}`, "_blank");
  };

  const filteredProducts = products.filter((product) => {
    // Filtro de categoria
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }

    // Filtro de preço
    if (selectedPriceRange !== "all") {
      const price = parseFloat(product.price.replace("R$ ", "").replace(".", "").replace(",", "."));
      
      switch (selectedPriceRange) {
        case "0-500":
          return price <= 500;
        case "500-1500":
          return price > 500 && price <= 1500;
        case "1500-3000":
          return price > 1500 && price <= 3000;
        case "3000+":
          return price > 3000;
        default:
          return true;
      }
    }

    return true;
  });

  return (
    <section id="catalogo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso Catálogo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore nossa seleção de bicicletas para todos os estilos e necessidades
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto">
          <div className="flex-1">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full bg-background">
                <SelectValue placeholder="Filtrar por categoria" />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                <SelectItem value="all">Todas as categorias</SelectItem>
                <SelectItem value="Bicicletas">Bicicletas</SelectItem>
                <SelectItem value="Acessórios">Acessórios</SelectItem>
                <SelectItem value="Peças e Manutenção">Peças e Manutenção</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex-1">
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger className="w-full bg-background">
                <SelectValue placeholder="Filtrar por preço" />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                <SelectItem value="all">Todos os preços</SelectItem>
                <SelectItem value="0-500">Até R$ 500</SelectItem>
                <SelectItem value="500-1500">R$ 500 - R$ 1.500</SelectItem>
                <SelectItem value="1500-3000">R$ 1.500 - R$ 3.000</SelectItem>
                <SelectItem value="3000+">Acima de R$ 3.000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              Nenhum produto encontrado com os filtros selecionados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in overflow-hidden ${
                !product.available ? 'opacity-75' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 ${
                    !product.available ? 'grayscale' : ''
                  }`}
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Badge 
                    variant={product.available ? "default" : "secondary"}
                    className="text-sm font-semibold"
                  >
                    {product.available ? "Disponível" : "Indisponível"}
                  </Badge>
                  <Badge 
                    variant="outline"
                    className="text-xs"
                  >
                    {product.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                </div>
                <CardDescription className="text-base">{product.description}</CardDescription>
                {product.available && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {product.stock} {product.stock === 1 ? 'unidade disponível' : 'unidades disponíveis'}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-4">{product.price}</p>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => handleWhatsApp(product.name)}
                  disabled={!product.available}
                >
                  {product.available ? 'Tenho Interesse' : 'Produto Indisponível'}
                </Button>
              </CardContent>
            </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
