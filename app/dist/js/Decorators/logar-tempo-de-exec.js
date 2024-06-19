export function logarTempoExec() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t0 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t1 = performance.now();
            console.log(`${propertyKey}, tempo de execução do método: ${(t1 - t0) / 1000} segundos`);
            retorno;
        };
        return descriptor;
    };
}
