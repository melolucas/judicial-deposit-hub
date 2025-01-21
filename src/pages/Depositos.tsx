import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Plus, Pencil, Trash } from "lucide-react";
import { toast } from "sonner";

const depositosData = [
  {
    numeroProcesso: "123456",
    conta: "7890",
    agencia: "1234",
    tipoDeposito: "Voluntário",
    guiaEmitido: "Sim",
    dataInclusao: "01/01/2025",
    origem: "Origem1",
    autor: "Autor1",
    reu: "Réu1",
    advogado: "Advogado1",
    cpfCnpj: "123.456.789-00",
    nomeDepositante: "Nome1",
    valor: "R$ 1.000,00",
  },
  {
    numeroProcesso: "654321",
    conta: "0987",
    agencia: "4321",
    tipoDeposito: "Consignado",
    guiaEmitido: "Não",
    dataInclusao: "02/01/2025",
    origem: "Origem2",
    autor: "Autor2",
    reu: "Réu2",
    advogado: "Advogado2",
    cpfCnpj: "987.654.321-00",
    nomeDepositante: "Nome2",
    valor: "R$ 2.000,00",
  },
];

const Depositos = () => {
  const handleGerarGuia = (numeroProcesso: string) => {
    toast.success(`Guia gerada para o processo ${numeroProcesso}`);
  };

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
            <FileText className="h-6 w-6" />
            Depósitos Judiciais
          </h1>
          <p className="text-muted-foreground">
            Gerencie seus depósitos judiciais
          </p>
        </div>
        <Button onClick={handleAdd} className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Depósito
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
                <TableHead>Tipo de Depósito</TableHead>
                <TableHead>Guia Emitido</TableHead>
                <TableHead>Data de Inclusão</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead>Autor</TableHead>
                <TableHead>Réu</TableHead>
                <TableHead>Advogado</TableHead>
                <TableHead>CPF/CNPJ</TableHead>
                <TableHead>Nome do Depositante</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {depositosData.map((deposito) => (
                <TableRow key={deposito.numeroProcesso}>
                  <TableCell>{deposito.numeroProcesso}</TableCell>
                  <TableCell>{deposito.conta}</TableCell>
                  <TableCell>{deposito.agencia}</TableCell>
                  <TableCell>{deposito.tipoDeposito}</TableCell>
                  <TableCell>{deposito.guiaEmitido}</TableCell>
                  <TableCell>{deposito.dataInclusao}</TableCell>
                  <TableCell>{deposito.origem}</TableCell>
                  <TableCell>{deposito.autor}</TableCell>
                  <TableCell>{deposito.reu}</TableCell>
                  <TableCell>{deposito.advogado}</TableCell>
                  <TableCell>{deposito.cpfCnpj}</TableCell>
                  <TableCell>{deposito.nomeDepositante}</TableCell>
                  <TableCell>{deposito.valor}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleGerarGuia(deposito.numeroProcesso)}
                      >
                        Gerar Guia
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(deposito.numeroProcesso)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(deposito.numeroProcesso)}
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

export default Depositos;