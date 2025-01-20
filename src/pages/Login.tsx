import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const email = (e.currentTarget as HTMLFormElement).email.value;
    const password = (e.currentTarget as HTMLFormElement).password.value;

    if (email === "usuario@teste.com" && password === "123456") {
      toast.success("Login realizado com sucesso!");
      navigate("/");
    } else {
      toast.error("Credenciais inválidas!");
    }
  };

  const handleGovBrLogin = () => {
    // Em um ambiente real, isso redirecionaria para a URL de autenticação do GOV.br
    toast.info("Redirecionando para autenticação GOV.br...");
    // Simulando redirecionamento após 2 segundos
    setTimeout(() => {
      toast.success("Login com GOV.br realizado com sucesso!");
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Bem-vindo de volta</h1>
          <p className="text-gray-600">Faça login para acessar sua conta</p>
        </div>

        <Button 
          onClick={handleGovBrLogin}
          className="w-full mb-6 bg-[#1351B4] hover:bg-[#0D47A1] text-white flex items-center justify-center gap-2"
        >
          <img 
            src="https://www.gov.br/favicon.ico" 
            alt="GOV.br" 
            className="w-5 h-5"
          />
          Entrar com GOV.br
        </Button>

        <div className="relative mb-6">
          <Separator />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-2 text-sm text-gray-500">
            ou
          </span>
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

          <Button type="submit" className="w-full">
            Entrar com Email
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