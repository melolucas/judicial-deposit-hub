import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText } from "lucide-react";
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

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="h-6 w-6" />
          Depósitos Judiciais
        </h1>
        <p className="text-muted-foreground">
          Gerencie seus depósitos judiciais
        </p>
      </div>

      <div className="rounded-md border">
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleGerarGuia(deposito.numeroProcesso)}
                  >
                    Gerar Guia
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Depositos;