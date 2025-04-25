import { transacao } from "./transacao.js";
import { tipoTransacao } from "./tipoTransacao.js";
import { grupoTransacao } from "./grupoTransacao.js";

let saldo: number = JSON.parse(localStorage.getItem('saldo')) || 0;
const transacoes: transacao[] = JSON.parse(localStorage.getItem('transações'), (key: string, value: string) => {
    if(key === 'data') {
        return new Date(value);
    }
    return value;
}) || [];

function debitar(valor: number): void {
    if (valor < 0) {
        throw new Error('Valor Inválido');
    }

    if (valor > saldo) {
        throw new Error('Saldo Insuficiente');
    }

    saldo -= valor;
    localStorage.setItem('saldo', saldo.toString());
}

function depositar(valor: number): void {
    if (valor <= 0) {
        throw new Error('Valor Inválido');
    }

    saldo += valor;
    localStorage.setItem('saldo', saldo.toString());
}

const Conta = {
    getSaldo(): number {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    getGrupoTransacoes(): grupoTransacao[] {
        const gruposTransacoes: grupoTransacao[] = [];

        const listaTransacoes: transacao[] = structuredClone(transacoes);
        const transacoesOrdenadas: transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao: string = "";
                
        for (let t of transacoesOrdenadas) {
            let labelGrupoTransacao: string = t.data.toLocaleDateString("pt-br", { 
                month: "long", 
                year: "numeric" 
            });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(t);
        }

        return gruposTransacoes;
    },

    registrarTransacao(novaTransacao: transacao): void {
        if(novaTransacao.tipoTransacao === tipoTransacao.DEPOSITO){
            depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao === tipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == tipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        } else if (novaTransacao.tipoTransacao === tipoTransacao.PAGAMENTO_BOLETO){
            throw new Error('Tipo de transação inválida');
        } 
        else {
            throw new Error('Tipo de transação inválida!');
        }

        transacoes.push(novaTransacao);
        console.log(this.getGrupoTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
}

export default Conta;
