import Conta from "../types/Conta.js";
import { formatoData } from "../types/formatoData.js";
import { grupoTransacao } from "../types/grupoTransacao.js";
import { formataData, formataMoeda } from "../utils/formatters.js";

const transacaoExtrato: HTMLElement = document.querySelector('.extrato .registro-transacoes');

renderizarExtrato();
function renderizarExtrato(): void {
    const gruposTransacoes: grupoTransacao[] = Conta.getGrupoTransacoes();
    transacaoExtrato.innerHTML = '';
    let htmlTransacoes: string = '';

    for(let grupoTransacao of gruposTransacoes) {
        let htmlTransacao: string = '';

        for(let transacao of grupoTransacao.transacoes) {
            htmlTransacao += `
                <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">${formataMoeda(transacao.valor)}</strong>
                    </div>
                    <time class="data">${formataData(transacao.data, formatoData.DIA_MES)}</time>
                </div>
            `;
        }

        htmlTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${grupoTransacao.label}</strong>
                ${htmlTransacao}
            </div>
        `;
    }

    if(htmlTransacoes === '') {
        htmlTransacoes = `<div>Não há transações registradas.</div>`;
    }

    transacaoExtrato.innerHTML = htmlTransacoes;
}

const extratoComponent = {
    atualiza(): void {
        renderizarExtrato();
    }
}

export default extratoComponent;