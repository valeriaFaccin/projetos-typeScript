import { transacao } from "./transacao.js";
import { tipoTransacao } from "./tipoTransacao.js";

let saldo: number = 3000;

function debitar(valor: number): void {
    if(valor < 0){
        throw new Error('Valor Inválido');
    } else if (valor > saldo) {
        throw new Error('Saldo Insuficiente');
    }

    saldo -= valor;
}

function depositar(valor: number): void {
    if(valor < 0) {
        throw new Error('Valor Inválido');
    }

    saldo += valor;
}

const Conta = {
    getSaldo(): number {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    registrarTransacao(novaTransacao: transacao): void {
        if(novaTransacao.tipoTransacao === tipoTransacao.DEPOSITO){
            depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao === tipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao === tipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
        } else {
            throw new Error('Tipo de transação inválida!');
        }

        console.log(novaTransacao);
    }
}

export default Conta;