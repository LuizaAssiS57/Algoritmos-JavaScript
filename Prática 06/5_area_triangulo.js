let base, altura, area
altura = parseFloat(prompt("Informe a altura do triângulo: "))
base = parseFloat(prompt("Informe a base do triângulo: "))
area = (altura * base) / 2 
document.write("A área do triângulo é: " + area.toFixed(2) + "cm2")