let numero,somar
somar = 0
while(true) {
    numero = parseFloat(prompt("Informe um número (zero para sair): "))
    if(numero == 0) {
        break
    }
    somar += numero
}
document.write("A soma dos números positivos é: " + somar)