let saldo = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;

elementoSaldo.textContent = saldo.toString();

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

    let transacao: string = inputTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if(transacao === 'Depósito'){
        saldo += valor;
    } else if (transacao === 'Transferência' || transacao === 'Pagamento de Boleto') {
        saldo -= valor;
    } else {
        alert('Tipo de transação inválida!');
        return;
    }

    elementoSaldo.textContent = saldo.toString();

    const objetoTransacao = {
        tipoTransacao: transacao,
        valorTransacao: valor,
        dataTransacao: data
    }
    console.log(objetoTransacao);

    elementoFormulario.reset();
});