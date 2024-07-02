import { transacao } from "./transacao";

export type grupoTransacao = {
    label: string;
    transacoes: transacao[];
}