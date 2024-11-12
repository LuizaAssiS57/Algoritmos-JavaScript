let valorEmprestimo = parseFloat(prompt("Informe o valor do empréstimo desejado: "))
let parcelas = parseInt(prompt("Informe o número de parcelas desejadas: "))
let salario = parseFloat(prompt("Informe o seu salário: "))

let limite = salario * 0.3 
let valorParcelas = valorEmprestimo / parcelas

if(valorParcelas <= limite) {
    document.write("Empréstimo aprovado!!")
}else{ 
    document.write("Empréstimo negado :(")
}