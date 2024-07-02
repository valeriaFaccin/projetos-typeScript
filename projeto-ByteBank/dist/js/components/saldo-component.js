import { formataData, formataMoeda } from "../utils/formatters.js";
import { formatoData } from "../types/formatoData.js"; /*  */
import Conta from "../types/Conta.js";
const elementoSaldo = document.querySelector('.saldo-valor .valor');
const elementoData = document.querySelector('.block-saldo time'); /*  */
elementoData.textContent = formataData(Conta.getDataAcesso(), formatoData.SEMANA_PADRAO); /*  */
renderizarSaldo();
export function renderizarSaldo() {
    elementoSaldo.textContent = formataMoeda(Conta.getSaldo());
}
const saldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default saldoComponent;
