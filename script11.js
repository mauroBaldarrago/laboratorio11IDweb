let total = 0;
let continuar;

do {
  let precio = +prompt("Ingrese el precio del producto:");
  total = total + precio;

  continuar = prompt("¿Desea agregar otro producto? (s/n):").toUpperCase();
} while (continuar === "S");

console.log("Total parcial: " + total);

if (total > 100) {
  console.log("Tiene un descuento del 10%");
  total = total * 0.9;
} else if (total >= 50 && total <= 100) {
  console.log("Gana un cupón de 5%");
  total = total * 0.95;
} else {
  console.log("No aplica descuento");
}

console.log("Total final a pagar: " + total.toFixed(2));
