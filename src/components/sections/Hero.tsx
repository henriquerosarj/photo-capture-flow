import { Button } from "@/components/ui/button";
import { Calendar, Camera, Video, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-photography.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Estúdio fotográfico profissional com equipamentos e iluminação elegante"
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
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Momentos Únicos
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Capture a
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Perfeição
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transformamos seus momentos especiais em memórias eternas através de 
                fotografia e vídeo profissionais com qualidade excepcional.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero shadow-elegant hover:shadow-gold transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Sessão
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:bg-primary/5 transition-all duration-300"
              >
                Ver Portfólio
              </Button>
            </div>
            
            {/* Services Icons */}
            <div className="flex items-center space-x-6 pt-8 border-t border-border">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Camera className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Fotografia</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Video className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Videomaking</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Sparkles className="w-5 h-5 text-gold-elegant" />
                <span className="text-sm font-medium">Edição</span>
              </div>
            </div>
          </div>
          
          {/* Stats or additional content can go here */}
          <div className="hidden lg:flex flex-col space-y-6">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-soft backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">+500</h3>
                <p className="text-muted-foreground">Clientes Satisfeitos</p>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-soft backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">5 Anos</h3>
                <p className="text-muted-foreground">De Experiência</p>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-soft backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">24h</h3>
                <p className="text-muted-foreground">Atendimento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;