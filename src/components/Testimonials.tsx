import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import drMarcioImg from "@/assets/drmarcio.png";
import tradusambaImg from "@/assets/tradusamba.png";
import draFabianaImg from "@/assets/drafabiana.png";

export const Testimonials = () => {
    const testimonials = [
        {
            name: "DR MARCIO",
            role: "DR MARCIO",
            subtitle: "Ele lotou sua agenda por 2 meses",
            text: "Excelente trabalho! Minha empresa melhorou 100% com a parceria com a Nocrato. Nota 10!",
            image: drMarcioImg,
        },
        {
            name: "TRADUSAMBA",
            role: "TRADUSAMBA",
            subtitle: "Eles tiveram uma nova identidade visual",
            text: "Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.",
            image: tradusambaImg,
        },
        {
            name: "DRA FABIANA",
            role: "DRA FABIANA",
            subtitle: "",
            text: "Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.",
            image: draFabianaImg,
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-[#d4af37] via-[#f3e5ab] to-[#d4af37]">
            <div className="container">
                <div className="mb-12">
                    <h2 className="text-sm font-semibold text-primary-foreground/70 mb-2 tracking-wider">
                        Veja Alguns
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-primary-foreground">DEPOIMENTOS</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-background/95 border-none overflow-hidden shadow-lg">
                            <div className="h-40 bg-muted overflow-hidden">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <div className="mb-4">
                                    {testimonial.subtitle && (
                                        <p className="text-sm text-foreground italic mb-2">{testimonial.subtitle}</p>
                                    )}
                                    <Badge className="bg-primary text-primary-foreground mb-2">
                                        {testimonial.role}
                                    </Badge>
                                </div>
                                <p className="text-sm text-foreground leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};