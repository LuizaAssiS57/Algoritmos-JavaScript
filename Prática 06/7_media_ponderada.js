let nota1 = parseFloat(prompt("Digite a nota 1: "))
let nota2 = parseFloat(prompt("Digite a nota 2: "))
let nota3 = parseFloat(prompt("Digite a nota 3: "))

let mediaPonderada = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10

document.write("<br>A média final do aluno é: " + mediaPonderada.toFixed(2))