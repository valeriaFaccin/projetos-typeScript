import Conta from "../types/Conta.js";
import saldoComponent from "./saldo-component.js";
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
    const objetoTransacao = {
        tipoTransacao: transacao,
        valor: valor,
        data: data
    };
    Conta.registrarTransacao(objetoTransacao);
    saldoComponent.atualizar();
    elementoFormulario.reset();
});
