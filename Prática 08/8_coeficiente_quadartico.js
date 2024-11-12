let valorA = parseInt(prompt("Qual o valor de A? "))
let valorB = parseInt(prompt("Qual o valor de B? "))
let valorC = parseInt(prompt("Informe o valor de C? "))

let resultadoB = Math.pow(valorB, 2)
let resultado = -4 * valorA * valorC 
let delta = resultadoB + resultado

switch(true) {
    case(delta > 0):
        document.write("O cálculo das raizes reais é: " + (- valorB + Math.sqrt(delta) / (2 * valorA)) + (- valorB - Math.sqrt(delta) /(2 * valorA)))
        break
    case(delta == 0):
        document.write("O cálculo das raizes reais é: " + (- valorB + Math.sqrt(delta) / (2 * valorA)) + (- valorB - Math.sqrt(delta) /(2 * valorA)))
        break
    default:
        document.write("Não possui raiz real.")
        break
}