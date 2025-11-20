import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcela de Amorim",
      role: "DIRETORA",
      company: "Nutrição e Saúde",
      text: "Começamos a usar o Instagram há 6 meses, crescendo 100% em vendas em 5 meses. Isso representa uma verdadeira reviravolta para nós.",
      image: "/api/placeholder/300/200",
    },
    {
      name: "Julia Martins",
      role: "VENDEDORA",
      company: "Bella Donna",
      text: "Muito satisfeita e feliz! Foram criados campanhas em múltiplas redes sociais. Ótima experiência ao longo de todo o trabalho!",
      image: "/api/placeholder/300/200",
    },
    {
      name: "Renata Cunha",
      role: "CEO - GROWTH",
      company: "C&A",
      text: "Esta campanha foi uma ruptura completa do meu fluxo anterior. Ótima ideia, confio 100% no trabalho e recomendo 100%.",
      image: "/api/placeholder/300/200",
    },
  ];

  return (
    <section className="py-20 bg-primary/10">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-muted-foreground mb-2 tracking-wider">
            Veja Alguns
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">DEPOIMENTOS</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden">
              <div className="h-40 bg-muted overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className="bg-primary text-primary-foreground mb-2">
                    {testimonial.role}
                  </Badge>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
