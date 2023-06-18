
function conversora(temperatura) {

    temperatura = temperatura.toUpperCase()

    valor = Number(temperatura.substring(0,temperatura.length -1))

    if ( valor - valor != 0) {
        throw new Error("Temperatura inválida inserida!")

    } else {
        let conversao = 0
        if (temperatura[(temperatura.length)-1] == "F") {
            conversao = `${(valor - 32) * 5/9}C`
        } else if (temperatura[(temperatura.length)-1] == "C") {
            conversao = `${(valor * 9/5) + 32}F`
        } else {
            return "Grandeza inválida inserida!"
        }
        return conversao
    }
}

try {
    console.log(conversora("50F"))
    console.log(conversora("10c"))
    console.log(conversora("100J"))
    console.log(conversora("10s0f"))
} catch (error) {
    console.log(error.message)
}
