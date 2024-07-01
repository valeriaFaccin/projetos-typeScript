function formataMoeda(valor) {
    return valor.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' });
}
function formataData(data, formato = formatoData.PADRAO) {
    return data.toLocaleDateString('pt-br', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}
