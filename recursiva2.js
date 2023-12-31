// Si escribimos más argumentos a la hora de llamar la función nos la podemos cargar de esta manera, pero bueno
function FibonacciPosicion(objetivo, val1 = 0, val2 = 1, cont = 1) {
    // Si el contador llega a la posición objetiva devuelve el parametro val1, el cual será la suma de los dos
    // últimos números
    if (cont === objetivo) return val1;
    // Si no ha llegado el valor 1 se reemplaza con el segundo valor y el segundo valor es la suma de ambos,
    // el contador va incrementando para alcanzar el objetivo
    else return FibonacciPosicion(objetivo,val2,val2+val1,++cont);
}
// Posiciones a partir del 1
console.log(FibonacciPosicion(1))
console.log(FibonacciPosicion(7))
console.log(FibonacciPosicion(9))
console.log(FibonacciPosicion(11))
