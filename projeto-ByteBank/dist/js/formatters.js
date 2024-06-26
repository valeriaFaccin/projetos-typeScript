function formataMoeda(valor) {
    return valor.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' });
}
function formataData(data, formato = formatoData.PADRAO) {
    if (formato = formatoData.SEMANA_PADRAO) {
        return data.toLocaleDateString('pt-br', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
    else if (formato = formatoData.DIA_MES) {
        return data.toLocaleDateString('pt-br', {
            day: '2-digit',
            month: '2-digit'
        });
    }
    return data.toLocaleDateString('pt-br');
}
