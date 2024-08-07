import { formatoData } from "../types/formatoData.js";

export function formataMoeda(valor: number): string {
    return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}

export function formataData(data: Date, formato: formatoData = formatoData.PADRAO): string {
    if(formato = formatoData.SEMANA_PADRAO) {
        return data.toLocaleDateString('pt-br', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
       
        });
    } else if (formato = formatoData.DIA_MES) {
        return data.toLocaleDateString('pt-br', {
            day: '2-digit',
            month: '2-digit'
        });
    }

    return data.toLocaleDateString('pt-br');
}