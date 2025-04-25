import { tipoTransacao } from "../types/tipoTransacao.js";
import { transacao } from "../types/transacao.js";
import Conta from "../types/Conta.js";
import saldoComponent from "./saldo-component.js";
import extratoComponent from "./extrato-component.js";
import dataComponent from "./data-component.js";

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener('submit', function(event){
    try {
        event.preventDefault();
        if(!elementoFormulario.checkValidity()){
            alert('Por favor, preecha todos os campos da trasação');
            return;
        }

        if(!elementoFormulario.checkValidity()) {
            alert('Preencha os dados necessários');
            return;
        }

        const inputTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
        const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
        const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

        let transacao: tipoTransacao = inputTransacao.value as tipoTransacao;
        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value + ' 00:00:00');

        const objetoTransacao: transacao = {
            tipoTransacao: transacao,
            valor: valor,
            data: data
        }

        Conta.registrarTransacao(objetoTransacao);
        saldoComponent.atualizarSaldo();
        dataComponent.atualizarData();
        extratoComponent.atualiza();
        elementoFormulario.reset();

    } catch (error) {
        alert(error.message);
    }
});
