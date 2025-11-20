import { Search, Target, User, ShoppingBag, BookOpen } from "lucide-react";

export const Method = () => {
    return (
        <section className="py-20 bg-[#0f0f10] relative overflow-hidden">
            {/* Background Pattern imitation (subtle lines) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                 style={{
                     backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                     backgroundSize: '40px 40px'
                 }}
            />

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Conheça nosso <span className="text-primary italic">método</span>
                    </h2>

                    <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        A Nocrato Marketing transforma sua presença digital em resultados reais!
                        Com o método PAEV, criamos estratégias inovadoras para aumentar o engajamento
                        da sua empresa e impulsionar suas vendas online. Nossa equipe especializada
                        desenvolve soluções personalizadas para atrair mais leads qualificados e
                        fortalecer sua marca no digital.
                    </p>
                </div>

                {/* Diagrama Desktop/Tablet */}
                <div className="hidden md:flex flex-col items-center justify-center relative max-w-4xl mx-auto min-h-[400px]">

                    {/* Linhas de conexão CURVAS com SETAS (SVG Background) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <defs>
                            {/* Definição da ponta da seta padrão */}
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#52525b" /> {/* Cor zinc-600 para destaque sutil */}
                            </marker>
                            {/* Definição da ponta da seta invertida para o início */}
                            <marker id="arrowhead-start" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto">
                                <polygon points="10 0, 0 3.5, 10 7" fill="#52525b" />
                            </marker>
                        </defs>

                        <g stroke="#52525b" strokeWidth="1.5" fill="none">
                            {/* Curva: Análise -> Posicionamento */}
                            <path d="M50% 65 Q 30% 80 25% 145" markerEnd="url(#arrowhead)" />

                            {/* Curva: Análise -> Estratégia */}
                            <path d="M50% 65 Q 70% 80 75% 145" markerEnd="url(#arrowhead)" />

                            {/* Curva: Posicionamento -> Seu Perfil */}
                            <path d="M25% 215 Q 25% 260 34% 285" markerEnd="url(#arrowhead)" />

                            {/* Curva: Estratégia -> Venda */}
                            <path d="M75% 215 Q 75% 260 66% 285" markerEnd="url(#arrowhead)" />

                            {/* Curva dupla entre Perfil e Venda */}
                            <path d="M43% 305 Q 50% 295 57% 305" markerStart="url(#arrowhead-start)" markerEnd="url(#arrowhead)" />
                        </g>
                    </svg>

                    {/* Nível 1: Análise de Mercado */}
                    <div className="z-10 mb-16">
                        <div className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-800/50 px-8 py-4 rounded-full shadow-xl backdrop-blur-md relative transition-transform hover:scale-105">
                            <Search className="w-6 h-6 text-primary" />
                            <span className="text-lg font-medium text-white">Análise de Mercado</span>
                        </div>
                    </div>

                    {/* Nível 2: Posicionamento - Logo - Estratégia */}
                    <div className="grid grid-cols-3 gap-8 w-full items-center z-10 mb-16">
                        <div className="flex justify-center pl-8">
                            <div className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-800/50 px-6 py-4 rounded-full shadow-xl backdrop-blur-md transition-transform hover:scale-105">
                                <Target className="w-6 h-6 text-primary" />
                                <span className="text-lg font-medium text-white">Posicionamento</span>
                            </div>
                        </div>

                        <div className="flex justify-center relative">
                            {/* Efeito de brilho atrás do logo */}
                            <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full z-0"></div>
                            <div className="relative w-24 h-24 flex items-center justify-center z-10">
                                <svg width="90" height="90" viewBox="0 0 112 112" className="absolute drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                                    <polygon
                                        points="56,8 92,28 92,68 56,88 20,68 20,28"
                                        fill="#0f0f10"
                                        stroke="hsl(var(--primary))"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <span className="text-4xl font-bold text-primary relative z-10 font-mono">N</span>
                            </div>
                        </div>

                        <div className="flex justify-center pr-8">
                            <div className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-800/50 px-6 py-4 rounded-full shadow-xl backdrop-blur-md transition-transform hover:scale-105">
                                <BookOpen className="w-6 h-6 text-primary" />
                                <span className="text-lg font-medium text-white">Estratégia</span>
                            </div>
                        </div>
                    </div>

                    {/* Nível 3: Seu Perfil - Venda */}
                    <div className="flex justify-center gap-24 w-full z-10 relative left-1">
                        <div className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-800/50 px-8 py-4 rounded-full shadow-xl backdrop-blur-md transition-transform hover:scale-105">
                            <div className="bg-primary rounded-full p-1">
                                <User className="w-4 h-4 text-black fill-current" />
                            </div>
                            <span className="text-lg font-medium text-white">Seu Perfil</span>
                        </div>

                        <div className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-800/50 px-8 py-4 rounded-full shadow-xl backdrop-blur-md transition-transform hover:scale-105">
                            <div className="bg-primary rounded-full p-1">
                                <ShoppingBag className="w-4 h-4 text-black fill-current" />
                            </div>
                            <span className="text-lg font-medium text-white">Venda</span>
                        </div>
                    </div>
                </div>

                {/* Versão Mobile (Lista Linear - mantida para telas pequenas) */}
                <div className="md:hidden flex flex-col gap-4 max-w-sm mx-auto">
                    <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 p-4 rounded-lg">
                        <Search className="w-5 h-5 text-primary" />
                        <span className="text-white">Análise de Mercado</span>
                    </div>
                    <div className="flex justify-center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></div>

                    <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 p-4 rounded-lg">
                        <Target className="w-5 h-5 text-primary" />
                        <span className="text-white">Posicionamento</span>
                    </div>
                    <div className="flex justify-center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></div>

                    <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 p-4 rounded-lg">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <span className="text-white">Estratégia</span>
                    </div>
                    <div className="flex justify-center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></div>

                    <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 p-4 rounded-lg">
                        <User className="w-5 h-5 text-primary" />
                        <span className="text-white">Seu Perfil</span>
                    </div>
                    <div className="flex justify-center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></div>

                    <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 p-4 rounded-lg">
                        <ShoppingBag className="w-5 h-5 text-primary" />
                        <span className="text-white">Venda</span>
                    </div>
                </div>
            </div>
        </section>
    );
};