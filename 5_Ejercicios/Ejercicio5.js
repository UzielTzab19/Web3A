// Función para generar la secuencia de Fibonacci hasta un número dado
function generarSecuenciaFibonacci(numero) {
    var secuencia = [0, 1]; // Inicializar la secuencia con los primeros dos números: 0 y 1
  
    // Generar la secuencia de Fibonacci
    while (secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2] <= numero) {
      var siguienteNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
      secuencia.push(siguienteNumero);
    }
  
    return secuencia;
}
function Fibonacci(){
        // Pedir al usuario un número
    var numero = parseInt(prompt("Ingresa un número:"));
    
    // Verificar si el usuario ingresó un número válido
    if (!isNaN(numero)) {
        // Generar la secuencia de Fibonacci hasta el número ingresado
        var secuenciaFibonacci = generarSecuenciaFibonacci(numero);
    
        // Mostrar la secuencia de Fibonacci generada
        alert("La secuencia de Fibonacci hasta " + numero + " es: " + secuenciaFibonacci.join(", "));
    } else {
        alert("¡Debes ingresar un número válido!");
    }

}
 
  