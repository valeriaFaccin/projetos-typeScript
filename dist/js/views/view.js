export class View {
    constructor(selector, escapar) {
        this.escapar = false;
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Seletor ${selector} não existe no DOM.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
