import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BarChart3,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  Receipt,
  Settings,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { UserProfile } from "@/components/UserProfile";
import { QuickActions } from "@/components/QuickActions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Início",
    icon: Home,
    url: "/dashboard",
  },
  {
    title: "Depósitos",
    icon: BarChart3,
    url: "#depositos",
  },
  {
    title: "Extratos",
    icon: Receipt,
    url: "#extratos",
  },
  {
    title: "Documentos",
    icon: FileText,
    url: "#documentos",
  },
  {
    title: "Contratos",
    icon: FileText,
    url: "/contracts",
  },
  {
    title: "Usuários",
    icon: Users,
    url: "#usuarios",
  },
  {
    title: "Configurações",
    icon: Settings,
    url: "#configuracoes",
  },
];

const depositsData = [
  {
    processo: "123456",
    conta: "7890",
    agencia: "1234",
    tipo: "Voluntário",
    guia: "Sim",
    data: "01/01/2025",
    origem: "Origem1",
    autor: "Autor1",
    reu: "Réu1",
    advogado: "Advogado1",
    cpfCnpj: "123.456.789-00",
    depositante: "Nome1",
    valor: "R$ 1.000,00",
  },
  {
    processo: "654321",
    conta: "0987",
    agencia: "4321",
    tipo: "Consignado",
    guia: "Não",
    data: "02/01/2025",
    origem: "Origem2",
    autor: "Autor2",
    reu: "Réu2",
    advogado: "Advogado2",
    cpfCnpj: "987.654.321-00",
    depositante: "Nome2",
    valor: "R$ 2.000,00",
  },
];

const extractData = [
  {
    processo: "123456",
    conta: "7890",
    agencia: "1234",
    data: "01/01/2025",
    valor: "R$ 1.000,00",
    juros: "R$ 50,00",
  },
  {
    processo: "654321",
    conta: "0987",
    agencia: "4321",
    data: "02/01/2025",
    valor: "R$ 2.000,00",
    juros: "R$ 100,00",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logout realizado com sucesso!");
    navigate("/login");
  };

  const handleGenerateGuide = (processo: string) => {
    toast.success(`Gerando guia para o processo ${processo}`);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarContent>
            <UserProfile />
            <SidebarGroup>
              <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild={item.url.startsWith("/")}
                        onClick={
                          item.url.startsWith("/")
                            ? () => navigate(item.url)
                            : undefined
                        }
                      >
                        {item.url.startsWith("/") ? (
                          <button className="flex items-center gap-2">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </button>
                        ) : (
                          <a href={item.url} className="flex items-center gap-2">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </a>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={handleLogout}
                      className="text-red-500"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sair</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 p-6 bg-gray-50">
          <div className="mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <LayoutDashboard className="h-6 w-6" />
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Bem-vindo ao seu painel de controle de depósitos judiciais
            </p>
          </div>

          <QuickActions />

          <Card className="mb-6">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Depósitos Judiciais</h2>
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Processo</TableHead>
                      <TableHead>Conta</TableHead>
                      <TableHead>Agência</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Guia</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Origem</TableHead>
                      <TableHead>Autor</TableHead>
                      <TableHead>Réu</TableHead>
                      <TableHead>Advogado</TableHead>
                      <TableHead>CPF/CNPJ</TableHead>
                      <TableHead>Depositante</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {depositsData.map((deposit) => (
                      <TableRow key={deposit.processo}>
                        <TableCell>{deposit.processo}</TableCell>
                        <TableCell>{deposit.conta}</TableCell>
                        <TableCell>{deposit.agencia}</TableCell>
                        <TableCell>{deposit.tipo}</TableCell>
                        <TableCell>{deposit.guia}</TableCell>
                        <TableCell>{deposit.data}</TableCell>
                        <TableCell>{deposit.origem}</TableCell>
                        <TableCell>{deposit.autor}</TableCell>
                        <TableCell>{deposit.reu}</TableCell>
                        <TableCell>{deposit.advogado}</TableCell>
                        <TableCell>{deposit.cpfCnpj}</TableCell>
                        <TableCell>{deposit.depositante}</TableCell>
                        <TableCell>{deposit.valor}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleGenerateGuide(deposit.processo)}
                          >
                            Gerar Guia
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Extrato</h2>
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Processo</TableHead>
                      <TableHead>Conta</TableHead>
                      <TableHead>Agência</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Juros e Correção</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {extractData.map((extract) => (
                      <TableRow key={extract.processo}>
                        <TableCell>{extract.processo}</TableCell>
                        <TableCell>{extract.conta}</TableCell>
                        <TableCell>{extract.agencia}</TableCell>
                        <TableCell>{extract.data}</TableCell>
                        <TableCell>{extract.valor}</TableCell>
                        <TableCell>{extract.juros}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </div>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;