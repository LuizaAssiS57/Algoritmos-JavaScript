let peso = parseFloat(prompt("Informe seu peso: "))
let altura = parseFloat(prompt("Informe sua altura: "))
let IMC = peso / (altura * 2)
IMC = IMC.toFixed(1)

switch(true) {
    case(IMC < 18.5):
        document.write(`Voçê está abaixo do peso.<br>IMC -> ${IMC}`)
        break
    case(IMC < 24.9):
        document.write(`Seu peso é ideal.<br>IMC -> ${IMC}`)
        break
    case(IMC < 29.9):
        document.write(`Voçê tem excesso de peso.<br>IMC -> ${IMC}`)
        break
    case(IMC < 34.9):
        document.write(`Obesidade I.<br>IMC -> ${IMC}`)
        break
    case(IMC < 39.9):
        document.write(`Obesidade II.<br>IMC -> ${IMC}`)
        break
    default:
        document.write(`Obesidade III.<br>IMC -> ${IMC}`)
        break    
}