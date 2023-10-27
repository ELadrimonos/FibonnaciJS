function Fibonacci(veces) {
    let aux1;
    let aux2;
    let resultado = [];
    for (let i = 0; i < veces; i++) {
        let valor;
        if (i > 1){
            // Los dos últimos valores para sumar
            aux1 = resultado[i-1];
            aux2 = resultado[i-2];
            // console.log("AUX1: " + aux1 + " AUX2: " + aux2)

            // La suma de los dos últimos valores
            valor = aux1 + aux2;
        } else {
            // Si i es 0 o 1 se meteran esos valores como los primeros
            valor = i;
        }
        // Metemos el valor al array del resultado
        resultado.push(valor)
    }
    return resultado;
}

console.log(Fibonacci(11));
