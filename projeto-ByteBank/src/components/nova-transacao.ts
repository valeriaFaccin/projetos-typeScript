import { tipoTransacao } from "../types/tipoTransacao.js";
import { formataMoeda } from "../utils/formatters.js";
import { transacao } from "../types/transacao.js";
import { atualizaSaldo, getSaldo } from "./saldo-component.js";

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener('submit', function(event){
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
    let saldo: number = getSaldo();

    if(transacao === tipoTransacao.DEPOSITO){
        saldo += valor;
    } else if (transacao === tipoTransacao.TRANSFERENCIA || transacao === tipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    } else {
        alert('Tipo de transação inválida!');
        return;
    }

    atualizaSaldo(saldo);

    const objetoTransacao: transacao = {
        tipoTransacao: transacao,
        valor: valor,
        data: data
    }
    console.log(objetoTransacao);

    elementoFormulario.reset();
});