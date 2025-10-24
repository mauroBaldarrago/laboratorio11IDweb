let numero = +prompt("Ingresa un número: ");
let temp = numero;
let suma = 0;

let n = numero.toString().length;

while (temp > 0) {
  let digito = temp % 10;
  suma += digito ** n;
  temp = Math.floor(temp / 10);
}

if (suma === numero) {
  console.log(numero + " es un número Armstrong.");
} else {
  console.log(numero + " no es un número Armstrong.");
}
