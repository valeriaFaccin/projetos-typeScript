import { formataData, formataMoeda } from "../utils/formatters.js";
import { formatoData } from "../types/formatoData.js";
let saldo = 3000;
const elementoSaldo = document.querySelector('.saldo-valor .valor');
const elementoData = document.querySelector('.block-saldo time');
const dataAcesso = new Date();
elementoData.textContent = formataData(dataAcesso, formatoData.SEMANA_PADRAO);
export function getSaldo() {
    return saldo;
}
atualizaSaldo(saldo);
export function atualizaSaldo(novoSaldo) {
    saldo = novoSaldo;
    elementoSaldo.textContent = formataMoeda(saldo);
}
