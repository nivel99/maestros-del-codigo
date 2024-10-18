// Clase Perro que implementa la interfaz IAnimal
var Perro = /** @class */ (function () {
    function Perro() {
    }
    Perro.prototype.comer = function () {
        console.log("El perro está comiendo.");
    };
    Perro.prototype.moverse = function () {
        console.log("El perro está corriendo.");
    };
    Perro.prototype.hacerSonido = function () {
        console.log("Guau!");
    };
    return Perro;
}());
// Clase Pajaro que implementa la interfaz IAnimal
var Pajaro = /** @class */ (function () {
    function Pajaro() {
    }
    Pajaro.prototype.comer = function () {
        console.log("El pájaro está picoteando.");
    };
    Pajaro.prototype.moverse = function () {
        console.log("El pájaro está volando.");
    };
    Pajaro.prototype.hacerSonido = function () {
        console.log("Pio, pio!");
    };
    return Pajaro;
}());
// Función para crear un zoológico
function crearZoologico(animales) {
    for (var _i = 0, animales_1 = animales; _i < animales_1.length; _i++) {
        var animal = animales_1[_i];
        animal.comer();
        animal.moverse();
        animal.hacerSonido();
        console.log("\n");
    }
}
// Crear un array de animales
var zoo = [
    new Perro(),
    new Pajaro(),
    new Perro(), // Podemos agregar más animales
];
// Llamar a la función para crear el zoológico
crearZoologico(zoo);
