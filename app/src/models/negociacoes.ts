import { Imprimivel } from "../utils/Imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel {
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
    
    imprimeTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}