import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary/20">
            <div className="container py-4 flex items-center justify-between">
                <img
                    src={logo}
                    alt="Nocrato Marketing"
                    className="h-8"
                />
                <Button
                    className="bg-gradient-to-r from-zinc-900 to-black text-white hover:from-zinc-800 hover:to-zinc-900 border border-zinc-800/50 font-semibold shadow-lg transition-all duration-300"
                    asChild
                >
                    <a href="#contact">
                        Mais Informações
                    </a>
                </Button>
            </div>
        </header>
    );
};