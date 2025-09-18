import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Share2 } from "lucide-react";
import petGallery1 from "@/assets/pet-gallery-1.jpg";
import petGallery2 from "@/assets/pet-gallery-2.jpg";
import petGallery3 from "@/assets/pet-gallery-3.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: petGallery1,
      title: "Golden Retriever Max",
      category: "Retrato Pet",
      alt: "Retrato profissional de Golden Retriever com iluminação suave e tons rosa"
    },
    {
      id: 2,
      image: petGallery2,
      title: "Gata Princesa Luna",
      category: "Felinos",
      alt: "Fotografia elegante de gato com iluminação profissional e ambiente acolhedor"
    },
    {
      id: 3,
      image: petGallery3,
      title: "Família Canina",
      category: "Pet + Filhotes",
      alt: "Retrato familiar de cachorra com filhotes em ambiente natural e iluminação suave"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Galeria <span className="bg-gradient-hero bg-clip-text text-transparent">Pet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore alguns dos nossos trabalhos mais adoráveis e veja como capturamos 
            a personalidade única de cada pet em retratos profissionais cheios de amor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-500">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white shadow-soft">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white shadow-soft">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white shadow-soft">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-card shadow-soft border-border/50 inline-block">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Seu pet pode ser o próximo!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Temos muito mais trabalhos adoráveis em nosso portfólio pet completo. 
                Venha conhecer nossa especialidade em fotografia de pets!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                  Ver Mais Pets
                </Button>
                <Button className="bg-gradient-hero shadow-soft">
                  <Heart className="w-4 h-4 mr-2" />
                  Agendar Sessão Pet
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;