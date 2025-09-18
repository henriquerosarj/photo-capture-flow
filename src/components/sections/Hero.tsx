import { Button } from "@/components/ui/button";
import { Calendar, Camera, Video, Sparkles, Heart } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Estúdio profissional de fotografia de pets com cães e gatos fofos em ambiente acolhedor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Fotografia de Pets
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Capture o
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Amor Pet
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Especializados em fotografia de pets, criamos retratos únicos que capturam 
                a personalidade e o charme especial do seu melhor amigo de quatro patas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero shadow-elegant hover:shadow-gold transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Sessão Pet
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:bg-primary/5 transition-all duration-300"
              >
                Ver Galeria Pet
              </Button>
            </div>
            
            {/* Services Icons */}
            <div className="flex items-center space-x-6 pt-8 border-t border-border">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Pets</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Camera className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Retratos</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Sparkles className="w-5 h-5 text-gold-elegant" />
                <span className="text-sm font-medium">Edição</span>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="hidden lg:flex flex-col space-y-6">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-soft backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">+300</h3>
                <p className="text-muted-foreground">Pets Fotografados</p>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-soft backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">5 Anos</h3>
                <p className="text-muted-foreground">Especializados em Pets</p>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-soft backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">100%</h3>
                <p className="text-muted-foreground">Satisfação Garantida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;