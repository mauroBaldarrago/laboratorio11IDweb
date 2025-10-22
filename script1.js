let promNotas = 0;
for (let i = 1; i < 6; i++) {
    let nota = +prompt("Ingresa la nota N°" + i);
    while (nota > 20 || nota < 0) {
        nota = +prompt("Nota ingresada incorrecta, volver a intentar");
    }
    promNotas = promNotas + nota;
}
promNotas = promNotas/5;
console.log("Promedio de notas: " + promNotas)