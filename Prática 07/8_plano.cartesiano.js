let valorX = parseFloat(prompt("Informe o valor de X: "))
let valorY = parseFloat(prompt("Iforme o valor de Y: "))

if((valorX > 0) && (valorY > 0)) {
    document.write("Primeiro quadrante")
}else if((valorX < 0) && (valorY > 0)) {
    document.write("Segundo quadrante")
}else if((valorX < 0) && (valorY < 0)) {
    document.write("Terceiro quadrante")
}else if((valorX > 0) && (valorY < 0)) {
    document.write("Quarto quadrante")
}else {
    document.write("Não existe.")
}