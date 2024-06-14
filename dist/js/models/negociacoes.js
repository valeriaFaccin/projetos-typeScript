export class Negociacoes {
    constructor() {
        //Negociacao[]
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    /* lista(): Array<Negociacao>{
           //pega cada item da lista this.negociacoes e adiciona numa nova lista
           return [...this.negociacoes];
       } */
    //Array para apenas leitura
    //readonly Negociacao[]
    lista() {
        return this.negociacoes;
    }
}
