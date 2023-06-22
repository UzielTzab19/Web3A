const Names1 = ["Mauricio", "Jack", "Jose", "Vlad", "Isaias", "Angel", "Obrian", "Diego"];
const LastName = ["Rodriguez", "Roca", "Tzab", "Vargas", "Gongora", "Guerrero", "Cetina"];

// Obtener elemento del DOM
var nombreGenerado = document.getElementById("nombre-generado");

// Generar un índice aleatorio
function generarNombreAleatorio() {
    var LastNameIndex = Math.floor(Math.random()* LastName.length);
    var indiceAleatorio = Math.floor(Math.random() * Names1.length);
    var indiceAleatorio2 = Math.floor(Math.random() * Names1.length);
    var contador = 0;
    if(indiceAleatorio === indiceAleatorio2)
    {
        var contador =+ 1;
        console.log("Me ejute los indices fueron iguales ",contador," veces");
        indiceAleatorio2 = Math.floor(Math.random() * Names1.length);
        var nombreAleatorio = Names1[indiceAleatorio]+" "+ Names1[indiceAleatorio2] +" "+LastName[LastNameIndex];
        nombreGenerado.textContent = nombreAleatorio;
    }
    else
    {
        var nombreAleatorio = Names1[indiceAleatorio] +" "+ Names1[indiceAleatorio2] +" " + LastName[LastNameIndex];
        nombreGenerado.textContent = nombreAleatorio;
    }
}





