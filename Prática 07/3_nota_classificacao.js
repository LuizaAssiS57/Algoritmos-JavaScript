let nota = parseFloat(prompt("Informe a nota: "))

if((nota >=0 ) && (nota <= 59)) { 
    document.write("Classificação E")
}else if((nota >= 60) && (nota <= 69)) {
    document.write("Classificação D")
}else if((nota >= 70) && (nota <= 79)) {
    document.write("Classisficação C")
}else if((nota >= 80) && (nota <= 89)) {
    document.write("Classificação B")
}else if((nota >= 90) && (nota <= 100)){
    document.write("Classificação A")
}else if((nota > 0) && (nota > 100)) {
    document.write("Nota invalida")
}