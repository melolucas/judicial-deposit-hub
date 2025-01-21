import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";

const Contracts = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="h-6 w-6" />
          Gestão de Contratos
        </h1>
        <p className="text-muted-foreground">
          Gerencie seus contratos e documentos
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Contratos Ativos</h2>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Contrato #{1000 + i}</h3>
                    <p className="text-sm text-muted-foreground">
                      Vigência: 01/01/2025 - 31/12/2025
                    </p>
                  </div>
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Ativo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default Contracts;