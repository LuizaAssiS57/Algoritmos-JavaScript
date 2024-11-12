let codigo = parseFloat(prompt("Informe o código do produto: "))
let produto = codigo.toFixed(2)
switch(true){
    case codigo === 1:
        document.write("Alimento não-perecivel")
        break
    case codigo === 2 || codigo === 3 || codigo === 4:
        document.write("Alimento perecivel")
        break
    case codigo === 5 || codigo === 6:
        document.write("Vestuario")
        break
    case codigo === 7:
        document.write("Produto de higiene pessoal")
        break
    case codigo === 8 || codigo === 9 || codigo === 10:
        document.write("Utensilios domesticos")
        break
    default:
        document.write("Código inválido")
        break
}