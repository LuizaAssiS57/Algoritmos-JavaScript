let limite = parseInt(prompt("Digite um número: "))
let contador = 1
let qtdPares = 0
while (contador <= limite) {
    if (contador % 2 === 0) {
            qtdPares++
    }
    contador++
}
document.write("Existem " + qtdPares + " números pares entre 1 e " + limite)