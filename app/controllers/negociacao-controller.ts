import { DiasDaSemana } from "../enum/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes;
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');

    //constrói o objeto de controle de Negociação
    constructor() {
        //seleciona os elementos do html que serão preenchidos com o valor da negociação
        this.inputData = <HTMLInputElement> document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    //método para adicionar nova negociação
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if(!this.confereDiaUtil(negociacao.data)){
            this.mensagemView.update('Cadastro de negociações somente realizado durante dias úteis');
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.limpaFormulario();
        this.atualizaView();
    }

    private confereDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    //método para limpar o formulário para uma nova negociação
    private limpaFormulario(): void {
        //altera os campos dos inputs para valor vazio
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView() : void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}