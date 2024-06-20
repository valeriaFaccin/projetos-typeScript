import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //cria uma lista com todas as negociações adicionadas
                        //Negociacao[]
    private negociacoes: Array<Negociacao> = [];

    public  adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    //métodp para retornar a lista de Negociações criadas, apenas para leitura, sem fornecer nenhum método de alteração dessa lista
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    public imprimir(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}