// Función para verificar si una cadena es un palíndromo
function esPalindromo(cadena) {
    // Eliminar espacios y convertir a minúsculas
    cadena = cadena.replace(/\s/g, "").toLowerCase();
    
    // Revertir la cadena
    var cadenaRevertida = cadena.split("").reverse().join("");
    
    // Verificar si la cadena original y la cadena revertida son iguales
    if (cadena === cadenaRevertida) {
      return true; // Es un palíndromo
    } else {
      return false; // No es un palíndromo
    }
  }
function VerifyText()
{
    var palabra = prompt("Ingresa una palabra o frase:");
  
  // Verificar si es un palíndromo
    if (esPalindromo(palabra)) {
        alert("Es un palíndromo.");
    } else {
        alert("No es un palíndromo.");
    }

}

  
  