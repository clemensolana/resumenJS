/*
Repaso callback: es una función que se pasa como parámetro de otra función, y es la función que recibe dicho callback quien se encarga de ejecutar la función pasada cuando esto sea necesario.

Hay diferentes métodos de arrays: map, filter, reduce & forEach.
*/

// Map: se ejecuta sobre un array dado, y recibe como parámetro un callback, dicho callback recorre uno a uno los elementos del array dado, tomando como parámetro cada uno de los elementos y se encarga de retornar un array nuevo, con la misma cantidad de elementos que el array original. Retorna el elemento que va a ocupar su lugar. El map devuelve un array del mismo tamaño que el array original. Por ejemplo:

let numeros = [
  29, 31, 16, 77, 10, 93, 99, 77, 96, 85, 16, 51, 31, 29, 27, 15, 59, 0, 22, 20,
];

let dobleDeLosNumeros = numeros.map(function (numero) {
  return numero * 2;
});

console.log(dobleDeLosNumeros);

//Otro ejemplo con Arrow:

let elDobleDeLosNumeros = numeros.map((numero) => numero * 2);

console.log(elDobleDeLosNumeros);

//El map no modifica el array original.

// Filter: filtrará los elementos de un array dependiendo de la lógica que implemente, como es de esperar, el filter recorrerá el array dado, tomará cada uno de los elementos de este, y nos va a devolver solamente aquellos elementos que cumplan con la condición definida. Se ejecuta sobre un array y recibe como parámetro un callback y es dentro de este callback donde pondremos las condiciones necesarias para filtrar el array, al igual que el map, el filter retorna un array solamente con aquellos elementos que hayan pasado la condición por lo tanto podes obtener un array con menos elementos que el array original o un array vacío sin es que ningún elemento cumple con la condición dada. El filter devuelve un nuevo array.

const notas = [2, 4, 5, 6, 7, 8, 9, 9, 10, 8.5, 9.55];

const filtrarLosExamenesAprovados = notas.filter(function (numero) {
  return numero >= 6;
});

console.log(filtrarLosExamenesAprovados);

filtrarDesaprobados = notas.filter(function (numero) {
  return numero < 6;
});

console.log(filtrarDesaprobados);

//Otro ejemplo:

const pokemonArray = [
  'Pikachu',
  'Charmander',
  'Squirtle',
  'Bulbasaur',
  'Eevee',
  'Mewtwo',
  'Lucario',
  'Gengar',
  'Dragonite',
  'Arcanine',
];

const elMejorPokemon = pokemonArray.filter((pokemon) =>
  pokemon.includes('Mewtwo')
);

console.log(elMejorPokemon);

/*
Reduce: funciona similar al map y filter, se ejecuta sobre un array dado, recibe como parámetro un callback y este callback recorre uno a uno los elementos del array, sin embargo, el reduce tiene como finalidad reducir a la más mínima expresión el array dado, retornando como resultado un único valor, para hacer esto el callback recibe dos parámetros: ( si o si recibo dos parametros):
1) Acumulador
2) Elemento actual.
*/

const numerosArray = [1, 5, 10, 3, 7, 2, 9, 6, 4, 8];

let sumaDeNumeros = numerosArray.reduce(function (acumulador, numero) {
  return acumulador + numero;
});

console.log(sumaDeNumeros);

/*
forEach: tiene una sola función que es iterar sobre un array dado, en similitud a los métodos anteriores, el forEach va a recibir un callback que recorrerá el array dado, pero además no devolverá nada, su única función es iterar sobre un array.
*/

const paisesArray = [
  'España',
  'Francia',
  'Italia',
  'Alemania',
  'Portugal',
  'Japón',
  'Brasil',
  'Australia',
  'Canadá',
  'México',
];

paisesArray.forEach(function (unPais) {
  return console.log(unPais);
});
