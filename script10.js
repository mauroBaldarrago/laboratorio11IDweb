let opcion;

do {
    opcion = +prompt(
        "===== MENÚ DE OPCIONES =====\n" +
        "1. Calcular estadísticas de N notas\n" +
        "2. Calcular promedio\n" +
        "3. Valor máximo\n" +
        "4. Valor mínimo\n" +
        "5. Cantidad de pares e impares\n" +
        "6. Cuántos están por encima del promedio\n" +
        "7. Contar números pares e impares en un rango\n" +
        "8. Generar una tabla de multiplicar\n" +
        "9. Salir\n\n" + 
        "Elige una opción (1-9): "
        );

  switch (opcion) {
    case 1:
      let n = +prompt("¿Cuántas notas deseas ingresar?: ");
      let notas = [];
      for (let i = 0; i < n; i++) {
        notas.push(+prompt(`Nota ${i + 1}: `));
      }
      console.log("Notas ingresadas:", notas);
      break;

    case 2:
      if (!notas || notas.length === 0) {
        console.log("Primero debes ingresar las notas (opción 1).");
        break;
      }
      let promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
      console.log("Promedio:", promedio.toFixed(2));
      break;

    case 3:
      if (!notas || notas.length === 0) {
        console.log("Primero debes ingresar las notas (opción 1).");
        break;
      }
      console.log("Valor máximo:", Math.max(...notas));
      break;

    case 4:
      if (!notas || notas.length === 0) {
        console.log("Primero debes ingresar las notas (opción 1).");
        break;
      }
      console.log("Valor mínimo:", Math.min(...notas));
      break;

    case 5:
      if (!notas || notas.length === 0) {
        console.log("Primero debes ingresar las notas (opción 1).");
        break;
      }
      let pares = notas.filter(x => x % 2 === 0).length;
      let impares = notas.length - pares;
      console.log(`Pares: ${pares}, Impares: ${impares}`);
      break;

    case 6:
      if (!notas || notas.length === 0) {
        console.log("Primero debes ingresar las notas (opción 1).");
        break;
      }
      let prom = notas.reduce((a, b) => a + b, 0) / notas.length;
      let encima = notas.filter(x => x > prom).length;
      console.log(`${encima} notas están por encima del promedio.`);
      break;

    case 7:
      let inicio = +prompt("Inicio del rango: ");
      let fin = +prompt("Fin del rango: ");
      let contPares = 0, contImpares = 0;
      for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) contPares++;
        else contImpares++;
      }
      console.log(`En el rango ${inicio}-${fin}: Pares = ${contPares}, Impares = ${contImpares}`);
      break;

    case 8:
      let num = +prompt("¿Qué número deseas multiplicar?: ");
      let hasta = +prompt("¿Hasta qué número?: ");
      for (let i = 1; i <= hasta; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
      }
      break;

    case 9:
      console.log("Saliendo del programa...");
      break;

    default:
      console.log("Opción no válida. Intenta nuevamente.");
      break;
  }

} while (opcion !== 9);
