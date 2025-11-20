import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import { useIsMobile } from "@/hooks/use-mobile";

export const Hero = () => {
    const isMobile = useIsMobile();

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div
                className="absolute inset-0 z-0"
                style={{
                    // CORREÇÃO: Lógica condicional para remover completamente o gradiente (sombra) no mobile
                    backgroundImage: isMobile
                        ? `url(${heroBg})`
                        : `linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0) 100%), url(${heroBg})`,

                    backgroundSize: 'cover',

                    // CORREÇÃO: Posição vertical em 0% (topo) no mobile para remover qualquer "margem" visual superior
                    backgroundPosition: isMobile ? '80% 0%' : 'right center',
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
                        className="bg-gradient-to-r from-zinc-900 to-black text-white hover:from-zinc-800 hover:to-zinc-900 border border-zinc-800/50 font-semibold px-8 py-6 text-lg shadow-lg transition-all duration-300"
                        asChild
                    >
                        <a href="#method">
                            Fale com um especialista
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};