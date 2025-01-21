import { Button } from "@/components/ui/button";
import { FileText, Plus, Download, Printer } from "lucide-react";
import { toast } from "sonner";

export const QuickActions = () => {
  const handleAction = (action: string) => {
    toast.info(`Ação ${action} iniciada`);
  };

  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      <Button
        variant="outline"
        className="gap-2"
        onClick={() => handleAction("Novo Depósito")}
      >
        <Plus className="h-4 w-4" />
        Novo Depósito
      </Button>
      <Button
        variant="outline"
        className="gap-2"
        onClick={() => handleAction("Gerar Relatório")}
      >
        <FileText className="h-4 w-4" />
        Gerar Relatório
      </Button>
      <Button
        variant="outline"
        className="gap-2"
        onClick={() => handleAction("Exportar")}
      >
        <Download className="h-4 w-4" />
        Exportar
      </Button>
      <Button
        variant="outline"
        className="gap-2"
        onClick={() => handleAction("Imprimir")}
      >
        <Printer className="h-4 w-4" />
        Imprimir
      </Button>
    </div>
  );
};