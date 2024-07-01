import { tipoTransacao } from "../types/tipoTransacao.js";
import { atualizaSaldo, getSaldo } from "./saldo-component.js";
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preecha todos os campos da trasação');
        return;
    }
    const inputTransacao = document.querySelector('#tipoTransacao');
    const inputValor = document.querySelector('#valor');
    const inputData = document.querySelector('#data');
    let transacao = inputTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    let saldo = getSaldo();
    if (transacao === tipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (transacao === tipoTransacao.TRANSFERENCIA || transacao === tipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert('Tipo de transação inválida!');
        return;
    }
    atualizaSaldo(saldo);
    const objetoTransacao = {
        tipoTransacao: transacao,
        valor: valor,
        data: data
    };
    console.log(objetoTransacao);
    elementoFormulario.reset();
});
