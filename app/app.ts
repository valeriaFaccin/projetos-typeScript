import { NegociacaoController } from "./controllers/negociacao-controller.js";
//cria um objeto Negociação (que contém a data, quantidade e valor)
const negociacaoController = new NegociacaoController();
//seleciona o elemento html do formulário de preenchimento da negociação
const form = document.querySelector('.form');

//toda vez que ocorrer um evento submit (usuario clicar no botão incluir do formulário), evita o default do evento e adiciona na lista a negociação digitada pelo usuário
if (form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        negociacaoController.adiciona();
    });
} else {
    throw Error ('Não foi possível inicializar a aplicação. Verifique se o form existe');
}