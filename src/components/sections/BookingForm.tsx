import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Phone, Mail, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const BookingForm = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    location: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Login necessário",
        description: "Você precisa estar logado para fazer um agendamento.",
        variant: "destructive",
      });
      return;
    }
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // Primeiro, criar ou atualizar o cliente
      const { data: existingClient, error: clientSearchError } = await supabase
        .from("clients")
        .select("id")
        .eq("email", formData.email)
        .eq("user_id", user.id)
        .maybeSingle();

      let clientId = existingClient?.id;

      if (!clientId) {
        // Criar novo cliente
        const { data: newClient, error: clientError } = await supabase
          .from("clients")
          .insert({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            user_id: user.id,
          })
          .select("id")
          .single();

        if (clientError) throw clientError;
        clientId = newClient.id;
      }

      // Buscar o serviço selecionado
      const { data: service, error: serviceError } = await supabase
        .from("services")
        .select("id")
        .eq("package_type", formData.service)
        .maybeSingle();

      // Criar a sessão
      const { error: sessionError } = await supabase
        .from("sessions")
        .insert({
          client_id: clientId,
          service_id: service?.id,
          date: formData.date,
          time: formData.time,
          location: formData.location,
          notes: formData.message,
          user_id: user.id,
          status: "agendado",
        });

      if (sessionError) throw sessionError;
      
      toast({
        title: "Agendamento realizado!",
        description: "Sua sessão foi agendada com sucesso. Entraremos em contato em breve.",
      });
      
      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        location: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Erro no agendamento:", error);
      toast({
        title: "Erro no agendamento",
        description: error.message || "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Agende Sua <span className="bg-gradient-hero bg-clip-text text-transparent">Sessão</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato para confirmar todos os detalhes
          </p>
        </div>

        <Card className="bg-gradient-card shadow-elegant border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Camera className="w-6 h-6 mr-3 text-primary" />
              Formulário de Agendamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nome */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Seu nome completo"
                    className="bg-background border-border/50 focus:border-primary"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    className="bg-background border-border/50 focus:border-primary"
                    required
                  />
                </div>

                {/* Telefone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="bg-background border-border/50 focus:border-primary"
                  />
                </div>

                {/* Serviço */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground font-medium">
                    Tipo de Serviço *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-background border-border/50 focus:border-primary">
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pet-photography">Fotografia de Pets</SelectItem>
                      <SelectItem value="pet-family">Ensaio Pet + Família</SelectItem>
                      <SelectItem value="pet-video">Vídeo Pet Profissional</SelectItem>
                      <SelectItem value="pet-thematic">Book Pet Temático</SelectItem>
                      <SelectItem value="pet-party">Pet Party/Eventos</SelectItem>
                      <SelectItem value="pet-package">Pacote Acompanhamento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Data */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground font-medium">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Data Preferida *
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    className="bg-background border-border/50 focus:border-primary"
                    required
                  />
                </div>

                {/* Horário */}
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-foreground font-medium">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Horário Preferido
                  </Label>
                  <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                    <SelectTrigger className="bg-background border-border/50 focus:border-primary">
                      <SelectValue placeholder="Selecione o horário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Manhã (08:00 - 12:00)</SelectItem>
                      <SelectItem value="afternoon">Tarde (13:00 - 17:00)</SelectItem>
                      <SelectItem value="evening">Noite (18:00 - 22:00)</SelectItem>
                      <SelectItem value="flexible">Flexível</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Local */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-foreground font-medium">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Local da Sessão
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="Estúdio, domicílio ou local preferido"
                  className="bg-background border-border/50 focus:border-primary"
                />
              </div>

              {/* Mensagem */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Detalhes Adicionais
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Conte-nos sobre seu pet, expectativas ou necessidades especiais para a sessão..."
                  rows={4}
                  className="bg-background border-border/50 focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading || !user}
                  className="w-full bg-gradient-hero shadow-elegant hover:shadow-gold transition-all duration-300 disabled:opacity-50"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {loading ? "Agendando..." : !user ? "Faça login para agendar" : "Solicitar Agendamento"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Ou entre em contato diretamente:</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-foreground">(11) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground">contato@fotostudio.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;