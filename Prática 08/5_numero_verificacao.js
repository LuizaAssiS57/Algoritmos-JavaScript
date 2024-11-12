let numero = parseFloat(prompt("Digite um número: "))

switch(true) {
    case(numero%2===0 && numero>0):
        document.write("O número informado é par e positivo")
        break
    case(numero%2===1 && numero<0):
        document.write("O número informado é impar e negativo")
        break
    case(numero%2===0 && numero<0):
        document.write("O número informado é par e negativo")
        break
    case(numero%2===1 && numero>0):
        document.write("O número informado é impar e positivo")
        break
    default:
        document.write("Número inválido")
        break
}