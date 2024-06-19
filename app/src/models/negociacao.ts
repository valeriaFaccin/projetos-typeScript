export class Negociacao{

    constructor (
        private readonly _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get data(): Date{
        //cria uma cópia da data inserida
        const data = new Date(this._data.getTime())
        //retorna a cópia (assim evitando alterações na data original através de métodos de alteração atribuidos a data)
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    //método para criar nova instância de negociação
    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        //salva o valor preenchido nos campos de input, convertendo para valores aceitáveis para a criação do objeto
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        //cria um novo objeto negociação com os valores dos dados preenchidos nos inputs
        return new Negociacao(data, quantidade, valor);
    }
}