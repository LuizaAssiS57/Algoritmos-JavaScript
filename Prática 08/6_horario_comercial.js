let horario = parseFloat(prompt("Informe um horário: h"))
switch(true) {
    case(horario >= 9 && horario <= 18):
        document.write("Horário comercial")
        break
    default:
        document.write("Fora do horário comercial")
}