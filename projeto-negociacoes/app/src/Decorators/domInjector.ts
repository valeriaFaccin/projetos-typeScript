export function domInjector(selector: string) {
    return function (
        target: any,
        propertyKey: string
    ) {
        console.log(`Modificando prototype ${target.constructor.name}, e adicionando getter para a propriedade ${propertyKey}`);

        //método get para o elemento HTML 
        let element: HTMLElement;
        const abobrinha = function () {
            //verifica se o elemento buscado já existe ou não
            if(!element) {
                element = <HTMLElement>document.querySelector(selector);
                console.log(`Buscando elementos do DOM com o seletor ${selector} para injetar em ${propertyKey}`);
            }
            
            return element;
        }

        Object.defineProperty(
            target,
            propertyKey,
            {get: abobrinha}
        )
    }
}