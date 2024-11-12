let nota1 = parseFloat(prompt("Informe a nota 1: "))
let nota2 = parseFloat(prompt("Informe a nota 2: "))
let nota3 = parseFloat(prompt("Informe a nota 3: "))

let media = (nota1 + nota2 + nota3) / 3

document.write("A média é: " + media.toFixed(2) + "<br>")

if(media >= 7) {
    document.write("Aluno foi APROVADO.")
} else {
    document.write("Aluno foi REPROVADO.")
}