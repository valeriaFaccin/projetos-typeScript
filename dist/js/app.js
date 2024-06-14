import { NegociacaoController } from "./controllers/negociacao-controller.js";
const negociacaoController = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        negociacaoController.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe');
}
