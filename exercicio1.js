
function notaAlpha(nota) {
    if(nota > 100){
        return "Nota superior ao máximo permitido."
    } else if(nota >= 90) {
        return "A"
    } else if(nota >= 80) {
        return "B"
    } else if(nota >= 70) {
        return "C"
    } else if(nota >= 60) {
        return "D"
    } else if(nota >= 0) {
        return "F"
    } else {
        return "Nota inferior ao mínimo permitido."
    }
}

console.log(notaAlpha(120))
console.log(notaAlpha(94))
console.log(notaAlpha(82))
console.log(notaAlpha(77))
console.log(notaAlpha(60))
console.log(notaAlpha(30))
console.log(notaAlpha(-10))