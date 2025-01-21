import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { List, Plus, Pencil, Trash } from "lucide-react";
import { toast } from "sonner";

const extratosData = [
  {
    numeroProcesso: "123456",
    conta: "7890",
    agencia: "1234",
    data: "01/01/2025",
    valor: "R$ 1.000,00",
    jurosCorrecao: "R$ 50,00",
  },
  {
    numeroProcesso: "654321",
    conta: "0987",
    agencia: "4321",
    data: "02/01/2025",
    valor: "R$ 2.000,00",
    jurosCorrecao: "R$ 100,00",
  },
];

const Extratos = () => {
  const handleAdd = () => {
    toast.info("Funcionalidade de cadastro em desenvolvimento");
  };

  const handleEdit = (numeroProcesso: string) => {
    toast.info(`Edição do processo ${numeroProcesso} em desenvolvimento`);
  };

  const handleDelete = (numeroProcesso: string) => {
    toast.info(`Exclusão do processo ${numeroProcesso} em desenvolvimento`);
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <List className="h-6 w-6" />
            Extratos
          </h1>
          <p className="text-muted-foreground">
            Consulte os extratos dos depósitos judiciais
          </p>
        </div>
        <Button onClick={handleAdd} className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Extrato
        </Button>
      </div>

      <div className="rounded-md border">
        <ScrollArea className="h-[600px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Número do Processo</TableHead>
                <TableHead>Conta</TableHead>
                <TableHead>Agência</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Juros e Correção Monetária</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {extratosData.map((extrato) => (
                <TableRow key={extrato.numeroProcesso}>
                  <TableCell>{extrato.numeroProcesso}</TableCell>
                  <TableCell>{extrato.conta}</TableCell>
                  <TableCell>{extrato.agencia}</TableCell>
                  <TableCell>{extrato.data}</TableCell>
                  <TableCell>{extrato.valor}</TableCell>
                  <TableCell>{extrato.jurosCorrecao}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(extrato.numeroProcesso)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(extrato.numeroProcesso)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Extratos;