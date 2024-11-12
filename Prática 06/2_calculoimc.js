let peso = parseFloat(prompt("Informe seu peso: "))
let altura = parseFloat(prompt("Informe sua altura: "))

let IMC = peso / (altura * altura)

document.write("O seu IMC é: " + IMC.toFixed(2))