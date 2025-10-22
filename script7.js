let continuar = true;
while (continuar == true) {
    let num = +prompt("Ingresa un número");
    let suma = 0;
    console.log("La suma de los números de 1 hasta " + num + " es: \n");
    for (let i = 1; i <= num; i++) {
        if (i % 5 != 0) suma = suma + i; 
    }
    console.log(suma);

    continuar = prompt("¿Quieres continuar?(y/n)");
    if (continuar == "n" ) continuar = false;
    if (continuar == "y" ) continuar = true;
}
