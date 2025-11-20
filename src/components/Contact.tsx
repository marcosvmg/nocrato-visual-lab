import { Button } from "@/components/ui/button";
import texturaBg from "@/assets/texturaduvidas.png";

export const Contact = () => {
    return (
        <section
            id="contact"
            // Mantém a cor de fundo primária (amarelo) e posicionamento relativo para o overlay
            className="py-20 bg-primary relative overflow-hidden"
        >
            {/* Overlay da Textura */}
            <div
                className="absolute inset-0 z-0 opacity-10" // Opacidade baixa (10%) para a textura ser sutil
                style={{
                    backgroundImage: `url("${texturaBg}")`,
                    backgroundSize: 'repeat', // O ideal para padrões é o repeat
                    backgroundPosition: 'center',
                }}
            />

            <div className="container text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                    Tire suas dúvidas,
                </h2>
                {/* Retornando as cores do texto para o padrão Dark on Primary */}
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-medium">
                    Qual foi marcamos uma reunião para esclarecermos suas dúvidas e
                    falarmos mais sobre os resultados que podemos alcançar juntos?
                </p>
                <Button
                    className="w-full sm:w-auto bg-gradient-to-r from-zinc-900 to-black text-white hover:from-zinc-800 hover:to-zinc-900 border border-zinc-800/50 font-semibold px-6 py-4 text-base sm:px-8 sm:py-6 sm:text-lg shadow-lg transition-all duration-300 !whitespace-normal flex-col h-auto"
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