import { Search, Target, TrendingUp, User, ShoppingCart } from "lucide-react";

export const Method = () => {
  const steps = [
    {
      icon: Target,
      label: "Posicionamento",
    },
    {
      icon: Search,
      label: "Análise de Mercado",
    },
    {
      icon: TrendingUp,
      label: "Estratégia",
    },
    {
      icon: User,
      label: "Seu Perfil",
    },
    {
      icon: ShoppingCart,
      label: "Venda",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conheça nosso <span className="text-primary italic">método</span>
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Nocrato Marketing transforma sua presença digital em resultados reais. Com o método DAILY, 
            criamos estratégias inovadoras para aumentar o engajamento da sua empresa e impulsionar suas 
            vendas online. Nossa equipe especializada desenvolve soluções personalizadas para atrair mais 
            leads qualificados e fortalecer sua marca no digital.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-card border-2 border-border flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-foreground" />
                </div>
                {index === 2 && (
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">N</span>
                  </div>
                )}
              </div>
              
              <span className="text-sm font-medium text-foreground">{step.label}</span>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute w-24 h-0.5 bg-border" 
                     style={{ left: `${(index + 1) * 140}px`, top: '50%' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
