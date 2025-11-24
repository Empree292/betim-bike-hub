import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone inválido"),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa"),
});

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = contactSchema.parse(formData);
      
      const whatsappMessage = `*Nova mensagem do site*%0A%0A*Nome:* ${encodeURIComponent(validatedData.name)}%0A*E-mail:* ${encodeURIComponent(validatedData.email)}%0A*Telefone:* ${encodeURIComponent(validatedData.phone)}%0A*Mensagem:* ${encodeURIComponent(validatedData.message)}`;
      
      window.open(`https://wa.me/55935931002?text=${whatsappMessage}`, "_blank");
      
      toast.success("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast.error("Por favor, corrija os erros no formulário");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas ou agende uma visita à nossa loja
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Endereço</h3>
                <p className="text-muted-foreground">
                  Av. Campo de Ourique, 1233 <br />
                   Jardim Alterosa, Betim<br />
                  CEP: 32660-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Telefone</h3>
                <p className="text-muted-foreground">
                  (31) 35931002<br />
                  
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">E-mail</h3>
                <p className="text-muted-foreground">
                  plasciclebetim@gmail.com.br
                </p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 14h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className={errors.name ? "border-destructive" : ""}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className={errors.email ? "border-destructive" : ""}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(31) 9999-9999"
                className={errors.phone ? "border-destructive" : ""}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-sm text-destructive">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Como podemos ajudar?"
                rows={5}
                className={errors.message ? "border-destructive" : ""}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-destructive">{errors.message}</p>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
