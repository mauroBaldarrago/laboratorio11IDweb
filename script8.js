let opcion;
do {
    opcion = +(prompt(
    "MENÚ DE OPCIONES:\n" +
    "1. Calcular área del círculo\n" +
    "2. Calcular área del rectángulo\n" +
    "3. Salir\n\n" +
    "Elige una opción (1-3):"
  ));

  switch (opcion) {
    case 1:
      let radio = +prompt("Ingresa el radio del círculo:");
      let areaCirculo = Math.PI * Math.pow(radio, 2);
      console.log("El área del círculo es: " + areaCirculo.toFixed(2));
      break;

    case 2:
      let base = +prompt("Ingresa la base del rectángulo:");
      let altura = +prompt("Ingresa la altura del rectángulo:");
      let areaRectangulo = base * altura;
      console.log("El área del rectángulo es: " + areaRectangulo.toFixed(2));
      break;

    case 3:
      console.log("Saliendo del programa...");
      break;

    default:
      console.log("Opción no válida. Intenta nuevamente.");
      break;
  }

} while (opcion !== 3);
