import { Negociacao } from "./negociacao.js";

export class Negociacoes {
                        //Negociacao[]
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

 /* lista(): Array<Negociacao>{
        //pega cada item da lista this.negociacoes e adiciona numa nova lista
        return [...this.negociacoes];
    } */

    //Array para apenas leitura
            //readonly Negociacao[]
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}