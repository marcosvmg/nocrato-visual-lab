import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import pedroImg from "@/assets/pedro.png";
import sophiaImg from "@/assets/sophia.png";
import saraImg from "@/assets/sara.png";

export const Team = () => {
  const team = [
    {
      name: "BRÍCIO",
      role: "ANALISTA",
      description: "Fotógrafo, social media e gestor do Nocrato Marketing. Formado em Publicidade e Propaganda.",
      image: pedroImg,
      badge: "FOTOGRAFIA",
    },
    {
      name: "PEDRO",
      role: "DESIGNER",
      description: "Desenvolvedor Web, Engenheiro de IA. Mais Engenheiro do que IA, mas é o cara certo para o trabalho!",
      image: pedroImg,
      badge: "DESIGNER",
    },
    {
      name: "SOPHIA",
      role: "REDATORA",
      description: "Designer Sênior, Publicitária. Licencia de Arte, Especialista em Publicidade e Marketing. Tem mais ilustrações que a gente.",
      image: sophiaImg,
      badge: "PUBLICIDADE",
    },
    {
      name: "SARA SANTOS",
      role: "ESTRATEGISTA",
      description: "Gerente de Tráfego, Especialista em Web Design. Amante de Performance. Mais de 8 anos implementando estratégias para Amazônia.",
      image: saraImg,
      badge: "TRÁFEGO",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat 
            scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                  />
                  <Badge className="bg-primary text-primary-foreground mb-2">
                    {member.badge}
                  </Badge>
                </div>
                <h4 className="font-bold text-lg text-foreground mb-1">{member.name}</h4>
                <p className="text-primary font-semibold mb-3 text-sm">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
