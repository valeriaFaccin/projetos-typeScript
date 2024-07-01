var saldo = 3000;
var elementoSaldo = document.querySelector('.saldo-valor .valor');
elementoSaldo.textContent = saldo.toString();
var elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preecha todos os campos da trasação');
        return;
    }
    var inputTransacao = document.querySelector('#tipoTransacao');
    var inputValor = document.querySelector('#valor');
    var inputData = document.querySelector('#data');
    var transacao = inputTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (transacao === 'Depósito') {
        saldo += valor;
    }
    else if (transacao === 'Transferência' || transacao === 'Pagamento de Boleto') {
        saldo -= valor;
    }
    else {
        alert('Tipo de transação inválida!');
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    var objetoTransacao = {
        tipoTransacao: transacao,
        valorTransacao: valor,
        dataTransacao: data
    };
    console.log(objetoTransacao);
    elementoFormulario.reset();
});
