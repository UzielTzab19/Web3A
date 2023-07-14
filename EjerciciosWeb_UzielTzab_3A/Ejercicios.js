var edad = prompt("Ingresa tu edad:");
if (parseInt(edad) >= 18) {
    alert("Ya puedes conducir");
} else {
    alert("No puedes conducir eres menor de edad :)");
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var nota = prompt("Ingresa un número): ");

if (isNaN(parseInt(nota))) {
    alert("Solo se permiten numéros");
} else {
    var valorNota = parseInt(nota);
    
    switch (valorNota) {
        case 0:
        case 1:
        case 2:
        case 3:
            alert("Muy deficiente");
            break;
        case 4:
        case 5:
            alert("Insuficiente");
            break;
        case 6:
        case 7:
            alert("Suficiente");
            break;
        case 8:
            alert("Notable");
            break;
        case 9:
        case 10:
            alert("Sobresaliente");
            break;
        default:
            alert("Valor de nota no válido");
            break;
    }
}


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var cadenas = [];
while (true) {
    var text = prompt("Ingresa un texto: ");
    if (text === null) {
        break;
    }
    cadenas.push(text);
}

var print = cadenas.join("-");
alert("texto en forma de cadenas: " + print);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

while (true) {
    var numeroStr = prompt("Ingresa el número de DNI:");
    if (numeroStr === null) {
        break;
    }
    var numero = parseInt(numeroStr);
    if (isNaN(numero)) {
        alert("El valor ingresado no es un número válido. Por favor, intenta nuevamente.");
        continue;
    }
    if (numero < 0 || numero > 99999999) {
        alert("El número de DNI debe estar entre 0 y 99999999. Por favor, intenta nuevamente.");
        continue;
    }
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var indice = numero % 23;
    var letra = letras.charAt(indice);

    alert("La letra correspondiente al número de DNI " + numero + " es: " + letra);
}
