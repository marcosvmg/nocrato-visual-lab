import { Hero } from "@/components/Hero";
import { Method } from "@/components/Method";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen dark">
      <Hero />
      <Method />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
