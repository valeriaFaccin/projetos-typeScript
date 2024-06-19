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
const botaoImportar = document.querySelector('#botao-importa');
if (botaoImportar) {
    botaoImportar.addEventListener('click', () => {
        negociacaoController.importarDados();
    });
}
else {
    throw Error('Botão Importar não foi encontrado');
}
