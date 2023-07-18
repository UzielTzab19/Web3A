// Función para generar un número aleatorio dentro de un rango
function generarNumeroAleatorio(min, max) {
    min = Math.ceil(min); // Redondear hacia arriba el límite inferior
    max = Math.floor(max); // Redondear hacia abajo el límite superior
    return Math.floor(Math.random() * (max - min + 1)) + min; // Generar el número aleatorio dentro del rango
  }
  
function SearhNumber()
{
        // Pedir al usuario el rango de números
    var rangoMinimo = parseInt(prompt("Ingresa el número mínimo del rango:"));
    var rangoMaximo = parseInt(prompt("Ingresa el número máximo del rango:"));

    // Verificar si los valores ingresados son números válidos
    if (!isNaN(rangoMinimo) && !isNaN(rangoMaximo)) {
    // Generar el número aleatorio dentro del rango
    var numeroAleatorio = generarNumeroAleatorio(rangoMinimo, rangoMaximo);

    // Mostrar el número aleatorio generado
    alert("El número aleatorio dentro del rango es: " + numeroAleatorio);
    } else {
    alert("¡Debes ingresar números válidos!");
    }
}
 
  