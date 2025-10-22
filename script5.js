let continuar = true;
while (continuar == true) {
    let monto = +prompt("Ingresa un monto a retirar")
    console.log("El monto a retirar es: \n")

    let bil100 = parseInt(monto/100);
    let bil50 = parseInt((monto - bil100*100)/50);
    let bil20 = parseInt((monto - bil100 * 100 - bil50 * 50)/20);
    let bil10 = parseInt((monto - bil100 * 100 - bil50 * 50 - bil20 * 20)/10);


    console.log("Billetes de 100: " + bil100 + "\n" +
        "Billetes de 50: " + bil50 + "\n" +
        "Billetes de 20: " + bil20 + "\n" +
        "Billetes de 10: " + bil10); 
    continuar = prompt("¿Quieres continuar?(y/n)");
    if (continuar == "n" ) continuar = false;
    if (continuar == "y" ) continuar = true;
}
