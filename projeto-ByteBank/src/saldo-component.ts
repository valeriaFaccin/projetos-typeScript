let saldo: number = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementoData = document.querySelector('.block-saldo time') as HTMLElement;

elementoSaldo.textContent = formataMoeda(saldo);

const dataAcesso: Date = new Date();
elementoData.textContent = formataData(dataAcesso);
