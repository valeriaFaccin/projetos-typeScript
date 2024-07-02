import { tipoTransacao } from "../types/tipoTransacao.js";
import { transacao } from "../types/transacao.js";
import Conta from "../types/Conta.js";
import saldoComponent from "./saldo-component.js";

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener('submit', function(event){
    try {
        event.preventDefault();
        if(!elementoFormulario.checkValidity()){
            alert('Por favor, preecha todos os campos da trasação');
            return;
        }

        const inputTransacao = document.querySelector('#tipoTransacao') as HTMLSelectElement;
        const inputValor = document.querySelector('#valor') as HTMLInputElement;
        const inputData = document.querySelector('#data') as HTMLInputElement;

        let transacao: tipoTransacao = inputTransacao.value as tipoTransacao;
        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value);

        const objetoTransacao: transacao = {
            tipoTransacao: transacao,
            valor: valor,
            data: data
        }

        Conta.registrarTransacao(objetoTransacao);
        saldoComponent.atualizar();
        elementoFormulario.reset();
    } catch (error) {
        alert(error.message);
    }
});