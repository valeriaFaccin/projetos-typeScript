import { logarTempoExec } from "../Decorators/logar-tempo-de-exec.js";

export abstract class View<T> {
    protected element: HTMLElement;
    private escapar = false;

    //construtor do Objeto de Negociações para a tela, criando a instância do elemento através do elemento HTML selecionado
    constructor(selector: string, escapar?: boolean){
        const element = document.querySelector(selector);
        if(element){
            this.element = element as HTMLElement;
        } else {
            throw Error (`Seletor ${selector} não existe no DOM.`)
        }

        if(escapar){
            this.escapar = escapar;
        }
    }

    @logarTempoExec()
    //renderiza a tabela construida no template, no innerHTML do elemento que queremos apresentar a tabela na tela
    public update(model: T): void {
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
}