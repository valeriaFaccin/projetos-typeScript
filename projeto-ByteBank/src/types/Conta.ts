import { transacao } from "./transacao.js";
import { tipoTransacao } from "./tipoTransacao.js";

let saldo: number = 3000;

const Conta = {
    getSaldo(): number {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    registrarTransacao(novaTransacao: transacao): void {
        if(novaTransacao.tipoTransacao === tipoTransacao.DEPOSITO){
            saldo += novaTransacao.valor;
        } else if (novaTransacao.tipoTransacao === tipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao === tipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        } else {
            alert('Tipo de transação inválida!');
            return;
        }

        console.log(novaTransacao);
    }
}

export default Conta;