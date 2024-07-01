function formataMoeda(valor: number): string {
    return valor.toLocaleString('pt-br', {currency: 'BRL', style: 'currency'});
}

function formataData(data: Date, formato: formatoData = formatoData.PADRAO): string {
    return data.toLocaleDateString('pt-br', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
   
    });
}