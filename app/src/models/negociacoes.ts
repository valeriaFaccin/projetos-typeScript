import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //cria uma lista com todas as negociações adicionadas
                        //Negociacao[]
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //métodp para retornar a lista de Negociações criadas, apenas para leitura, sem fornecer nenhum método de alteração dessa lista
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}