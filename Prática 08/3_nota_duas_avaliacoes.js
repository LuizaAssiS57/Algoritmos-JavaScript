let notaUm = parseFloat(prompt("Informe a nota 1: "))
let notaDois = parseFloat(prompt("Informe a nota 2: "))
let media = (notaUm + notaDois) / 2

switch(true) {
    case(media >= 7):
        document.write("Aprovado.<br>")
        break
    case(media === 10):
        document.write("Aprovado com distinção.<br>")
        break
    case((media >= 3) && (media < 7)):
        document.write("Exame.<br>")
        break
    case(media < 3):
        document.write("Reprovado.<br>")
        break
    default:
        document.write("Nota inválida.<br>")
        break
}