let distancia = parseInt(prompt("Informe a distância percorrida: "))
let tempoGasto = parseInt(prompt("Informe o tempo: "))
let velocidadeMedia = distancia / tempoGasto

switch(true) {
    case(velocidadeMedia < 5):
        document.write("Movimento lento")
        break
    case((velocidadeMedia >= 5) && (velocidadeMedia <= 15)):
        document.write("Movimento moderado")
        break
    case(velocidadeMedia > 15):
        document.write("Moviment rápido")
        break
    default:
        document.write("Não existe")
        break
}