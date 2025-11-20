import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <img src={logo} alt="Nocrato Marketing" className="h-8 mb-4" />
            <p className="text-sm text-primary mb-2">📞 +55 11 97700-7791</p>
            <p className="text-sm text-primary">✉ nocrato@nocrato.com.br</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-4">Nos siga</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Instagram className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Linkedin className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Youtube className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/20 pt-8 text-center text-sm text-primary">
          <p>Copyright © 2025 Nocrato Marketing. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
