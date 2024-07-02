import { tipoTransacao } from "./tipoTransacao.js";
let saldo = 3000;
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao === tipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        }
        else if (novaTransacao.tipoTransacao === tipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao === tipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        }
        else {
            alert('Tipo de transação inválida!');
            return;
        }
        console.log(novaTransacao);
    }
};
export default Conta;
