let produto = prompt("Informe o valor do produto: R$")
let percentualDesconto = prompt("Informe o percentual do desconto: %")
let valorDesconto =(produto * percentualDesconto) / 100
let precoFinal = (produto - valorDesconto)
document.write("O preço final do produto será: R$ " + precoFinal.toFixed(2))