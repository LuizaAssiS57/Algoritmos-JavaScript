let idade = parseFloat(prompt("informe sua idade: "))

if(idade < 18) {
    document.write("Menor de idade.")
} else if ((idade >= 18) && (idade <= 64)) {
    document.write("Maior de idade.")
} else if (idade >= 65){
    document.write("Voçê é idoso.")
}