let saldo = 3000;
const elementoSaldo = document.querySelector('.saldo-valor .valor');
const elementoData = document.querySelector('.block-saldo time');
elementoSaldo.textContent = formataMoeda(saldo);
const dataAcesso = new Date();
elementoData.textContent = formataData(dataAcesso);
