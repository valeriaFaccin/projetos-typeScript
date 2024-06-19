export function domInjector(selector: string) {
    return function (
        target: any,
        propertyKey: string
    ) {
        console.log(`Modificando prototype ${target.constructor.name}, e adicionando getter para a propriedade ${propertyKey}`);
        //metodo get para o elemento HTML - método com nome de abobrinha para provar que o nome não necessariamente importa para a funcionalidade get dos elementos
        const abobrinha = function () {
            const element = document.querySelector(selector);
            console.log(`Buscando elementos do DOM com o seletor ${selector} para injetar em ${propertyKey}`);
            return element;
        }

        Object.defineProperty(
            target,
            propertyKey,
            {get: abobrinha}
        )
    }
}