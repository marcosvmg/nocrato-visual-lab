import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Tire suas dúvidas,
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Qual foi marcamos uma reunião para esclarecermos suas dúvidas e 
          falarmos mais sobre os resultados que podemos alcançar juntos?
        </p>
        <Button 
          size="lg"
          className="bg-background hover:bg-background/90 text-primary font-semibold px-8 py-6 text-lg"
          asChild
        >
          <a href="http://wa.me/5513991187759" target="_blank" rel="noopener noreferrer">
            CLIQUE AQUI E AGENDE AGORA MESMO A NOSSA REUNIÃO
          </a>
        </Button>
      </div>
    </section>
  );
};
