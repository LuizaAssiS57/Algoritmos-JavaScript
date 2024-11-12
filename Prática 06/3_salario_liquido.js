let salario = parseFloat(prompt("Informe se salário: "))
let valorINSS = salario * 0.12
let valorIRRF = salario * 0.095
let valorPlanoDeSaude = salario * 0.045

let salarioLiquido = salario - valorINSS - valorIRRF - valorPlanoDeSaude

document.write("O salário liquido é: " + salarioLiquido.toFixed(2))