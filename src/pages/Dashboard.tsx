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
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for the chart
const data = [
  { name: "Jan", valor: 4000 },
  { name: "Fev", valor: 3000 },
  { name: "Mar", valor: 2000 },
  { name: "Abr", valor: 2780 },
  { name: "Mai", valor: 1890 },
  { name: "Jun", valor: 2390 },
];

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

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logout realizado com sucesso!");
    navigate("/login");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={handleLogout} className="text-red-500">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Total de Depósitos</h3>
              <p className="text-2xl font-bold">R$ 1.234.567,89</p>
              <p className="text-sm text-muted-foreground">+15% este mês</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Processos Ativos</h3>
              <p className="text-2xl font-bold">42</p>
              <p className="text-sm text-muted-foreground">3 novos esta semana</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Alvarás Pendentes</h3>
              <p className="text-2xl font-bold">7</p>
              <p className="text-sm text-muted-foreground">2 aguardando aprovação</p>
            </Card>
          </div>

          <Card className="p-6 mb-6">
            <h3 className="font-semibold mb-4">Evolução de Depósitos</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="valor"
                    stroke="#1351B4"
                    fill="#1351B4"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Últimos Depósitos</h3>
              <ScrollArea className="h-[200px]">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Processo #{1000 + i}</p>
                        <p className="text-sm text-muted-foreground">
                          Depositado em {new Date().toLocaleDateString()}
                        </p>
                      </div>
                      <p className="font-semibold">R$ {(Math.random() * 10000).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Próximos Vencimentos</h3>
              <ScrollArea className="h-[200px]">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Alvará #{2000 + i}</p>
                        <p className="text-sm text-muted-foreground">
                          Vence em {i} dias
                        </p>
                      </div>
                      <p className="font-semibold text-yellow-600">Pendente</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;