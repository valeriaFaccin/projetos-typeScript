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

    if(transacao === tipoTransacao.DEPOSITO){
        saldo += valor;
    } else if (transacao === tipoTransacao.TRANSFERENCIA || transacao === tipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    } else {
        alert('Tipo de transação inválida!');
        return;
    }

    elementoSaldo.textContent = formataMoeda(saldo);

    const objetoTransacao: transacao = {
        tipoTransacao: transacao,
        valor: valor,
        data: data
    }
    console.log(objetoTransacao);

    elementoFormulario.reset();
});