// Función para calcular la suma de los dígitos de un número
function sumaDigitos(numero) {
    var suma = 0;
  
    // Convertir el número en una cadena
    var numeroCadena = numero.toString();
  
    // Recorrer cada dígito en la cadena
    for (var i = 0; i < numeroCadena.length; i++) {
      // Obtener el dígito actual
      var digito = parseInt(numeroCadena.charAt(i));
      // Sumar el dígito a la suma total
      suma += digito;
    }
  
    return suma;
  }
  function SumNumbers(){
     // Pedir al usuario un número
    var numero = prompt("Ingresa un número:");
    
    // Verificar si el usuario ingresó un número válido
    if (!isNaN(numero)) {
        // Calcular la suma de los dígitos del número ingresado
        var resultado = sumaDigitos(numero);
    
        // Mostrar el resultado
        alert("La suma de los dígitos es: " + resultado);
    } else {
        alert("¡Debes ingresar un número válido!");
    }

  }
 
  