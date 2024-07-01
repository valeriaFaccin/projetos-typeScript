import { tipoTransacao } from "./tipoTransacao.js";

export type transacao = {
    tipoTransacao: tipoTransacao;
    valor: number;
    data: Date;
}
