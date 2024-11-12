let meuInt = parseInt(prompt("Informe um número inteiro: "))
let meuFloat = parseFloat(prompt("Informe um valor real: "))

soma = meuInt + meuFloat
diferenca = meuInt - meuFloat
produto = meuInt * meuFloat
divisao = meuInt / meuFloat

document.write("<br>O resultado da soma é: " + soma.toFixed(0))
document.write("O resultado da diferença é: " + diferenca.toFixed(1))
document.write("O resultado da multiplicação é: " + produto.toFixed(2))
document.write("O resultado da divisão é: " + divisao.toFixed(3))