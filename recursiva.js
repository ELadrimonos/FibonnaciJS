// Paso un historial como parámetro, tal vez sería mejor hacer una variable global
function Fibonacci(veces, historial = []) {
    // Si la longitud es igual que el número de valores que queremos terminará la función
  if (historial.length === veces){
    return historial;
      // Si la longitud del historial es menor de tres inicializamos con los dos primeros valores
  } else if (historial.length < 3){
    historial.push(0)
    historial.push(1)
  }
  // Hago valores auxiliares de los dos últimos valores del historial
  let aux1 = historial.length-1;
  let aux2 = historial.length-2;
  // console.log("AUX1: " + aux1 + " AUX2: " + aux2)
  // Metemos la suma en el historial
  historial.push(historial[aux1] + historial[aux2]);
  // Llamamos de nuevo a la función con el historial actualizado
  return Fibonacci(veces,historial);
}

console.log(Fibonacci(11))
