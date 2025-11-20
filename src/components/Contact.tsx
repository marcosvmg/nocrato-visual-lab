import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section className="py-20 bg-primary/20">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Tire suas dúvidas,
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Qual foi marcamos uma reunião para esclarecermos suas dúvidas e 
          falarmos mais sobre os resultados que podemos alcançar juntos?
        </p>
        <Button 
          size="lg"
          className="bg-background hover:bg-background/90 text-foreground font-semibold px-8 py-6 text-lg"
        >
          CLIQUE AQUI E AGENDE AGORA MESMO A NOSSA REUNIÃO
        </Button>
      </div>
    </section>
  );
};
