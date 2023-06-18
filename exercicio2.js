let Saldo = {
    receitas: [2500, 300, 250.10, 360.70],
    despesas: [1230, 342.23, 234, 435.64]
}

function soma(lista) {
    let total = 0
    for (let valor of lista) {
        total += valor
    }
    return total
}

function balance() {

    let receita = soma(Saldo.receitas)
    let despesa = soma(Saldo.despesas)

    if (despesa > receita) {
        return `Saldo negativo de ${(receita-despesa).toFixed(2)} reais`
    } else {
        return `Saldo positivo de ${(receita-despesa).toFixed(2)} reais`
    }
}

console.log(balance())