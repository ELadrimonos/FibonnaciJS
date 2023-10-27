function FibonacciPosicion(objetivo) {
    if (objetivo < 3) return objetivo - 1;
    else return FibonacciPosicion(objetivo - 1) + FibonacciPosicion(objetivo - 2);
}
// Posiciones a partir del 1
console.log(FibonacciPosicion(1))
console.log(FibonacciPosicion(7))
console.log(FibonacciPosicion(9))
console.log(FibonacciPosicion(11))
