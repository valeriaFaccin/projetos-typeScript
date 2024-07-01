import { formataData, formataMoeda } from "../utils/formatters.js";
import { formatoData } from "../types/formatoData.js";

let saldo: number = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementoData = document.querySelector('.block-saldo time') as HTMLElement;


const dataAcesso: Date = new Date();
elementoData.textContent = formataData(dataAcesso, formatoData.SEMANA_PADRAO);

export function getSaldo(): number {
    return saldo;
}

atualizaSaldo(saldo);

export function atualizaSaldo(novoSaldo: number): void {
    saldo = novoSaldo;
    elementoSaldo.textContent = formataMoeda(saldo);
}
