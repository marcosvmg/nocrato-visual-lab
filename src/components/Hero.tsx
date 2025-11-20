import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(24, 20, 16, 0.95) 0%, rgba(24, 20, 16, 0.7) 50%, rgba(24, 20, 16, 0.3) 100%), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />
      
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            A equipe de marketing{" "}
            <span className="text-primary">certa</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Para aumentar seu engajamento e número de vendas
          </p>
          
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
          >
            Fale com um especialista
          </Button>
        </div>
      </div>
    </section>
  );
};
