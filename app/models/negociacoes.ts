import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //cria uma lista com todas as negociações adicionadas
                        //Negociacao[]
    private negociacoes: Array<Negociacao> = [];

    //método para adicionar uma negociação na lista de Negociações
    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //métodp para retornar a lista de Negociações criadas, apenas para leitura, sem fornecer nenhum método de alteração dessa lista
    //Array para apenas leitura
            //readonly Negociacao[]
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

 /* lista(): Array<Negociacao>{
        //pega cada item da lista this.negociacoes e adiciona numa nova lista
        return [...this.negociacoes];
    } */
}