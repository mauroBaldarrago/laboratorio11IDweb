let continuar = true;
while (continuar == true) {
    let lim = +prompt("Ingresa un número");
    console.log("Los números primos entre 1 y " + lim + " son: \n");
        for (let i = 1; i <= lim; i ++) {
            let divisores = 0;
            for (let j = 1; j <= i; j++) {
                if (i % j === 0) divisores++;
            }
            if (divisores === 2) console.log(i + "\n");
        }
    continuar = prompt("¿Quieres continuar?(y/n)");
    if (continuar == "n" ) continuar = false;
    if (continuar == "y" ) continuar = true;
}
