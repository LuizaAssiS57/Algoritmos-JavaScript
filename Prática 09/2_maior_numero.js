let maiorNumero = Number.NEGATIVE_INFINITY
let numero 
while (true) {
    numero = parseInt(prompt("Digite um número (negativo para sair): "))
    if (numero < 0) {
            break
    }else if (numero > maiorNumero) {
        maiorNumero = numero     }
}
document.write("O maior número digitado foi: " + maiorNumero)