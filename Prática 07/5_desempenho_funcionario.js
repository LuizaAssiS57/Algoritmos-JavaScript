let pontuacao = parseFloat(prompt("Qual a pontuação do funcionario?"))
if((pontuacao >= 0) && (pontuacao <= 25)) {
    document.write("Isastifatorio")
}else if((pontuacao >= 26 ) && (pontuacao <= 50)) {
    document.write("Regular")
}else if((pontuacao >= 51 ) && (pontuacao <= 75)) {
    document.write("Bom")
}else if((pontuacao >= 76) && (pontuacao <= 100)) {
    document.write("Ótimo")
}else {
    document.write("Pontuação inválida")
}