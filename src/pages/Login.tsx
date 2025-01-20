import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulando login com usuário de teste
    const email = (e.currentTarget as HTMLFormElement).email.value;
    const password = (e.currentTarget as HTMLFormElement).password.value;

    // Credenciais de teste
    if (email === "usuario@teste.com" && password === "123456") {
      toast.success("Login realizado com sucesso!");
      navigate("/");
    } else {
      toast.error("Credenciais inválidas!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Bem-vindo de volta</h1>
          <p className="text-gray-600">Faça login para acessar sua conta</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="seu@email.com"
              defaultValue="usuario@teste.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••"
              defaultValue="123456"
            />
          </div>

          <Button type="submit" className="w-full btn-primary">
            Entrar
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <a href="#" className="text-secondary hover:underline">
            Esqueceu sua senha?
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Login;