// Arreglo para almacenar los números
var numeros = [];

// Función para pedir un número al usuario
function GetNumber() {
  var numero = prompt("Ingresa un número (o presiona Cancelar para cerrar):");
  
  // Verificar si el usuario ingresó un número válido
  if (numero === null || numero === "") {
    ShowLong();
  } else {
    numero = parseInt(numero);
    
    // Verificar si el número es válido
    if (!isNaN(numero)) {
      numeros.push(numero);
      GetNumber(); // Pedir otro número
    } else {
      alert("¡Debes ingresar un número válido!");
      GetNumber(); // Pedir otro número
    }
  }
}

// Función para mostrar el número más grande
function ShowLong() {
  if (numeros.length > 0) {
    var maximo = Math.max(...numeros);
    alert("El número más grande es: " + maximo);
  } else {
    alert("No se ingresaron números.");
  }
}


