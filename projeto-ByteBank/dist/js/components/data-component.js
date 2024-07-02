import { formataData } from "../utils/formatters.js";
import { formatoData } from "../types/formatoData.js";
import Conta from "../types/Conta";
const elementoDataAcesso = document.querySelector(".block-saldo time");
function renderizarData() {
    elementoDataAcesso.textContent = formataData(Conta.getDataAcesso(), formatoData.SEMANA_PADRAO);
}
const dataComponent = {
    atualizar: function () {
        renderizarData();
    },
};
export default dataComponent;
