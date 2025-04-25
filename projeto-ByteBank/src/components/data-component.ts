import { formataData } from "../utils/formatters.js";
import { formatoData } from "../types/formatoData.js";
import Conta from "../types/Conta";

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

renderizarData();

function renderizarData(): void {
    elementoDataAcesso.textContent = formataData(Conta.getDataAcesso(), formatoData.SEMANA_PADRAO);
}

const dataComponent = {
    atualizarData() {
        renderizarData();
    },
};

export default dataComponent;