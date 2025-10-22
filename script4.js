let continuar = true;
while (continuar == true) {
    let num = +prompt("Ingresa un número para multiplicar")
    console.log("Tabla de multiplicar del " + num + " es: \n");
    for (let i = 1; i <= 12; i++) {
        console.log(num*i + "\n");
    }
    continuar = prompt("¿Quieres continuar?(y/n)");
    if (continuar == "n" ) continuar = false;
    if (continuar == "y" ) continuar = true;
}
