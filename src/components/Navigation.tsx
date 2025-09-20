import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/auth");
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao fazer logout. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleLogin = () => {
    navigate("/auth");
  };

  if (!user) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Button onClick={handleLogin} variant="outline" className="bg-background/80 backdrop-blur-sm">
          <User className="w-4 h-4 mr-2" />
          Entrar
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <span className="text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg">
        Olá, {user.user_metadata?.nome || user.email}
      </span>
      <Button onClick={handleSignOut} variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
        <LogOut className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Navigation;