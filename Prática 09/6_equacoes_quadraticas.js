let a = parseInt(prompt("Informe o valor de A: "))
let b = parseInt(prompt("Informe o valor de B: "))
let c = parseInt(prompt("Informe o valor de C: "))

let resultadoB = Math.pow(b, 2)
let resultado = -4 * a * c
let delta = resultadoB + resultado
let raizReal1;
let raizReal2;

if(delta > 0) {
    document.write("Possui duas raizes distintas")
    realReal1 = ( -b + Math.sqrt(delta)) / (2 * a)
    raizReal2 = ( -b - Math.sqrt(delta)) / (2 * a)
    document.write(raizReal1)
    document.write(raizReal2)
}else if (delta == 0) {
    document.write("Possui uma única raiz real")
    raizReal1 = ( -b + Math.sqrt(delta)) / (2 * a)
    raizReal2 = ( -b - Math.sqrt(delta)) / (2 * a)
    document.write(raizReal1)
    document.write(raizReal2)
}else {
    document.write("Não possui raiz real")
}