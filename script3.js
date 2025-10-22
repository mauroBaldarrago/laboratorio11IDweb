let contPares = 0;
let contImpares = 0;
for (let i = 1; i <= 10; i++) {
    let num = +prompt("Ingresa un número");
    if (num % 2 == 0) {
        contPares++;
    } else {
        contImpares++;
    }
}
console.log("Los números pares son: " + contPares + "\n"
    + "Los números impares son: " + contImpares
)