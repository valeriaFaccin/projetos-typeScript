export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype ${target.constructor.name}, e adicionando getter para a propriedade ${propertyKey}`);
        let element;
        const abobrinha = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`Buscando elementos do DOM com o seletor ${selector} para injetar em ${propertyKey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: abobrinha });
    };
}
//# sourceMappingURL=domInjector.js.map