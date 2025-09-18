import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Camera, Video, Image, Users, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Fotografia de Pets",
      description: "Sessões especializadas para capturar a personalidade única do seu pet em retratos profissionais e cheios de amor.",
      price: "A partir de R$ 250",
      features: ["Sessão de 1h", "40+ fotos editadas", "Props inclusos", "Ambiente pet-friendly"],
      featured: true
    },
    {
      icon: Camera,
      title: "Ensaio Pet + Família",
      description: "Capture os momentos especiais entre você e seu pet em um ensaio que celebra essa relação única de amor.",
      price: "A partir de R$ 400",
      features: ["Sessão de 1h30", "60+ fotos editadas", "Pet + família", "Várias poses"]
    },
    {
      icon: Video,
      title: "Vídeo Pet Profissional",
      description: "Documentação em vídeo da personalidade do seu pet, criando memórias em movimento que duram para sempre.",
      price: "A partir de R$ 500",
      features: ["Filmagem 4K", "Vídeo de 3-5min", "Edição profissional", "Trilha sonora"]
    },
    {
      icon: Image,
      title: "Book Pet Temático",
      description: "Ensaios temáticos especiais para datas comemorativas ou apenas para celebrar seu melhor amigo.",
      price: "A partir de R$ 350",
      features: ["Tema personalizado", "Figurinos inclusos", "50+ fotos", "Álbum digital"]
    },
    {
      icon: Users,
      title: "Pet Party/Eventos",
      description: "Cobertura de eventos pet como aniversários, adoções ou encontros de raças com toda diversão registrada.",
      price: "A partir de R$ 600",
      features: ["Cobertura completa", "Fotos de todos pets", "Entrega 48h", "Galeria online"]
    },
    {
      icon: Calendar,
      title: "Pacote Acompanhamento",
      description: "Sessões regulares para documentar o crescimento do seu filhote ou momentos especiais do seu pet adulto.",
      price: "Orçamento personalizado",
      features: ["Múltiplas sessões", "Desconto progressivo", "Álbum cronológico", "Flexibilidade total"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="bg-gradient-hero bg-clip-text text-transparent">Serviços Pet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especializados em fotografia de pets, oferecemos serviços únicos para capturar 
            a personalidade e amor do seu melhor amigo de quatro patas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-elegant transition-all duration-300 border-border/50 ${
                service.featured ? 'bg-gradient-hero text-white border-primary shadow-gold' : 'bg-card'
              }`}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {service.featured && (
                    <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs rounded-full font-medium">
                      ⭐ SERVIÇO PRINCIPAL
                    </div>
                  )}

                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                    service.featured ? 'bg-white/20' : 'bg-gradient-hero'
                  }`}>
                    <service.icon className={`w-8 h-8 ${service.featured ? 'text-white' : 'text-white'}`} />
                  </div>

                  <div className="space-y-3">
                    <h3 className={`text-xl font-bold ${service.featured ? 'text-white' : 'text-foreground'}`}>
                      {service.title}
                    </h3>
                    <p className={`leading-relaxed ${service.featured ? 'text-white/90' : 'text-muted-foreground'}`}>
                      {service.description}
                    </p>
                  </div>

                  <div className={`text-2xl font-bold ${service.featured ? 'text-white' : 'text-primary'}`}>
                    {service.price}
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center text-sm ${
                        service.featured ? 'text-white/90' : 'text-muted-foreground'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          service.featured ? 'bg-white/60' : 'bg-accent'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full transition-all duration-300 ${
                      service.featured 
                        ? 'bg-white text-primary hover:bg-white/90 shadow-soft' 
                        : 'bg-gradient-accent hover:shadow-soft'
                    }`}
                    variant={service.featured ? "secondary" : "secondary"}
                  >
                    {service.featured ? "Agendar Agora" : "Saiba Mais"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-accent shadow-elegant">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4 text-foreground">Seu pet merece ser uma estrela!</h3>
              <p className="text-lg mb-8 text-muted-foreground">
                Entre em contato conosco para criar uma sessão única e especial para seu melhor amigo
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-hero text-white shadow-soft hover:shadow-gold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Consulta Gratuita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;