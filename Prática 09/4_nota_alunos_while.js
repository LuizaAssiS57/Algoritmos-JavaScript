let nota;
let somaNotas = 0;
let quantidadeNotas = 0;

do {
    nota = parseFloat(prompt("Digite a nota do aluno (ou uma nota negativa para encerrar):"));

    if (nota >= 0) {
        somaNotas += nota; 
        quantidadeNotas++; 
    }
} while (nota >= 0); 

if (quantidadeNotas > 0) {
    const media = somaNotas / quantidadeNotas;
    console.log(`A média das notas é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhuma nota válida foi inserida.");
}