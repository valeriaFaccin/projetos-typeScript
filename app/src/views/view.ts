import { inspect } from "../Decorators/inspect.js";
import { logarTempoExec } from "../Decorators/logar-tempo-de-exec.js";

export abstract class View<T> {
    protected element: HTMLElement;

    //construtor do Objeto de Negociações para a tela, criando a instância do elemento através do elemento HTML selecionado
    constructor(selector: string){
        const element = document.querySelector(selector);
        if(element){
            this.element = element as HTMLElement;
        } else {
            throw Error (`Seletor ${selector} não existe no DOM.`)
        }
    }

    //aplicados de baixo para o topo
    //@logarTempoExec(true)
    //@inspect
    //renderiza a tabela construida no template, no innerHTML do elemento que queremos apresentar a tabela na tela
    public update(model: T): void {
        let template = this.template(model);
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
}