import { tipoTransacao } from "./tipoTransacao.js";
let saldo = JSON.parse(localStorage.getItem('saldo')) || 0;
const transacoes = JSON.parse(localStorage.getItem('transações'), (key, valor) => {
    if (key === 'data') {
        return new Date(valor);
    }
    return valor;
}) || [];
function debitar(valor) {
    if (valor < 0) {
        throw new Error('Valor Inválido');
    }
    else if (valor > saldo) {
        throw new Error('Saldo Insuficiente');
    }
    saldo -= valor;
    localStorage.setItem('saldo', saldo.toString());
}
function depositar(valor) {
    if (valor < 0) {
        throw new Error('Valor Inválido');
    }
    saldo += valor;
    localStorage.setItem('saldo', saldo.toString());
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao === tipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao === tipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao === tipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
        }
        else {
            throw new Error('Tipo de transação inválida!');
        }
        transacoes.push(novaTransacao);
        console.log(novaTransacao);
        localStorage.setItem('transações', JSON.stringify(transacoes));
    }
};
export default Conta;
