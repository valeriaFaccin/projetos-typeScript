export function logarTempoExec(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t0 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t1 = performance.now();
            console.log(`${propertyKey}, tempo de execução do método: ${(t1 - t0) / divisor} ${unidade}`);
            retorno;
        };
        return descriptor;
    };
}
