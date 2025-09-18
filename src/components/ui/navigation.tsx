import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera, Calendar } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">FotoStudio</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Galeria
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <Button variant="default" className="bg-gradient-hero shadow-soft">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary">
                Início
              </a>
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary">
                Serviços
              </a>
              <a href="#gallery" className="block px-3 py-2 text-foreground hover:text-primary">
                Galeria
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contato
              </a>
              <div className="px-3 py-2">
                <Button variant="default" className="w-full bg-gradient-hero shadow-soft">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;