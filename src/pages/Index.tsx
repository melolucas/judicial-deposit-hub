import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, BarChart3, FileText, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Gestão Inteligente de Depósitos Judiciais
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Simplifique o controle dos seus depósitos judiciais com nossa plataforma integrada
            </p>
            <Link to="/login">
              <Button className="btn-secondary text-lg">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Recursos Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-secondary" />}
              title="Segurança Avançada"
              description="Autenticação 2FA e integração com GOV.br para máxima proteção"
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-secondary" />}
              title="Dashboard Personalizado"
              description="Visualize seus dados de forma clara e objetiva"
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8 text-secondary" />}
              title="Extrato Detalhado"
              description="Acompanhe movimentações, juros e correções monetárias"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-secondary" />}
              title="Gestão Centralizada"
              description="Controle múltiplas contas por CPF/CNPJ"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que já simplificaram sua gestão de depósitos judiciais
          </p>
          <Link to="/login">
            <Button className="btn-primary text-lg">
              Criar Conta Gratuita
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="p-6 card-hover">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Card>
);

export default Index;