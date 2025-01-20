import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Bem-vindo de volta</h1>
          <p className="text-gray-600">Faça login para acessar sua conta</p>
        </div>
        
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <Button className="w-full btn-primary">
            Entrar
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link to="/forgot-password" className="text-secondary hover:underline">
            Esqueceu sua senha?
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;