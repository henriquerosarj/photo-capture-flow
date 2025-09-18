import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Video, Image, Users, Heart, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Fotografia de Casamento",
      description: "Capture todos os momentos especiais do seu grande dia com nossa fotografia profissional de casamento.",
      price: "A partir de R$ 1.200",
      features: ["Sessão pré-casamento", "Cerimônia completa", "200+ fotos editadas", "Álbum digital"]
    },
    {
      icon: Video,
      title: "Filmagem Profissional",
      description: "Documentação completa em vídeo dos seus momentos mais importantes com qualidade cinematográfica.",
      price: "A partir de R$ 800",
      features: ["Filmagem 4K", "Edição profissional", "Highlight de 3-5min", "Vídeo completo"]
    },
    {
      icon: Image,
      title: "Ensaio Fotográfico",
      description: "Sessões personalizadas para retratos, família, gestante e muito mais em locações únicas.",
      price: "A partir de R$ 400",
      features: ["2h de sessão", "50+ fotos editadas", "Diferentes looks", "Galeria online"]
    },
    {
      icon: Users,
      title: "Eventos Corporativos",
      description: "Cobertura completa de eventos empresariais, conferências e celebrações corporativas.",
      price: "A partir de R$ 600",
      features: ["Cobertura completa", "Fotos profissionais", "Entrega 48h", "Direitos comerciais"]
    },
    {
      icon: Heart,
      title: "Fotografia Infantil",
      description: "Momentos únicos da infância capturados com carinho e técnica especializada.",
      price: "A partir de R$ 350",
      features: ["Ambiente lúdico", "Props inclusos", "30+ fotos editadas", "Sessão divertida"]
    },
    {
      icon: Calendar,
      title: "Pacotes Personalizados",
      description: "Crie seu pacote ideal combinando diferentes serviços para suas necessidades específicas.",
      price: "Orçamento personalizado",
      features: ["Consulta gratuita", "Pacote sob medida", "Preços especiais", "Flexibilidade total"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="bg-gradient-hero bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços fotográficos e de vídeo para transformar 
            seus momentos especiais em memórias eternas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group bg-card hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-bold text-primary">{service.price}</div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-gradient-accent hover:shadow-soft transition-all duration-300"
                    variant="secondary"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-hero text-white shadow-elegant">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Não encontrou o que procura?</h3>
              <p className="text-lg mb-8 opacity-90">
                Entre em contato conosco para criarmos um pacote personalizado perfeito para suas necessidades
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 shadow-soft"
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