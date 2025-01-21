import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { List } from "lucide-react";

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
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <List className="h-6 w-6" />
          Extratos
        </h1>
        <p className="text-muted-foreground">
          Consulte os extratos dos depósitos judiciais
        </p>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Número do Processo</TableHead>
              <TableHead>Conta</TableHead>
              <TableHead>Agência</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Juros e Correção Monetária</TableHead>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Extratos;