import { Search, Target, ShoppingCart } from "lucide-react";

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
      icon: null,
      label: "Estratégia",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-muted-foreground">
            Conheça nosso <span className="text-primary italic">método</span>
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Nocrato Marketing transforma sua presença digital em resultados reais. Com o método DAILY, 
            criamos estratégias inovadoras para aumentar o engajamento da sua empresa e impulsionar suas 
            vendas online. Nossa equipe especializada desenvolve soluções personalizadas para atrair mais 
            leads qualificados e fortalecer sua marca no digital.
          </p>
        </div>

        <div className="flex justify-center items-center gap-0 max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-0">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center gap-3">
                  {step.label === "Estratégia" ? (
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <svg width="112" height="112" viewBox="0 0 112 112" className="absolute">
                        <polygon 
                          points="56,8 92,28 92,68 56,88 20,68 20,28" 
                          fill="hsl(var(--primary))"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="text-4xl font-bold text-primary-foreground relative z-10">N</span>
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-background border-2 border-border flex items-center justify-center">
                      {step.icon && <step.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />}
                    </div>
                  )}
                  
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">{step.label}</span>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-16 h-0.5 bg-border mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};