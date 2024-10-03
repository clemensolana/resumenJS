/*
Destructuring: la sintaxis de asignación de desestructuración (destructuring assignment/asignación por destructuracion) es una expresión que posibilita la extracción de datos, tanto de arreglos (los famosos arrays) como de propiedades de objetos, en variables distintas.
*/

const coloresArray = ['Rojo', 'Azul', 'Verde', 'Amarillo', 'Morado'];

let = [colorRojo, colorAzul, colorVerde, colorAmarillo, colorMorado] =
  coloresArray;

console.log(colorRojo);
console.log(colorAzul);
console.log(colorVerde);

/* en la línea 7 podemos ver que se crea una variable con otras variables dentro, al final se asigna el array del cual necesito extraer la información. Lo que sucede aquí es que JS creará tres variables por mi, y a cada una le asignará el valor correspondiente que exista dentro del array, conservando el mismo orden presente en mi código. */

// IMPORTANTE: la asignación por destructuración no modifica ni altera el array de origen. Su único objetivo es copiar lo valores de manera más sencilla y práctica.

//Con objeto literal:

const personaX = {
  nombre: 'María',
  apellido: 'López',
  profesión: 'Ingeniera de software',
  añoNacimiento: 1990,
};

let { nombre, apellido, profesión, añoNacimiento } = personaX;

console.log(nombre);
console.log(añoNacimiento);

console.log(' ');

/*
Spread operator: sirve para copiar y mover datos de un lugar a otro. Representado por tres puntos ... / sirve para expandir elementos de estructuras de datos iterables como arrays, strings y objetos. En lugar de simplemente copiar la variable, el spread operator esparce uno a uno los valores de la estructura original dentro de una nueva estructura.

Ejemplos de uso:

Copiar arrays: const nuevoArray = [...arrayOriginal];
Concatenar arrays: const arrayCombinado = [...array1, ...array2];
Pasar argumentos a funciones: miFuncion(...miArray);
Copiar y modificar objetos: const nuevoObjeto = { ...objetoOriginal, propiedadNueva: 'valor' };
*/

const frutas = ['manzana', 'banana', 'naranja', 'uva', 'fresa'];
const verduras = ['lechuga', 'tomate', 'zanahoria', 'pepino', 'cebolla'];

const frutasVerduras = [...frutas, ...verduras];

console.log(frutasVerduras);

console.log(' ');

// Ejemplo con objetos literales:

let cursada = {
  curso: 'FullStack',
  turno: 'Mañana',
  sede: 'Belgrano',
};

let estudianteUno = {
  nombre: 'Denise',
  email: 'denise@email.com',
  ...cursada,
};

let estudianteDos = {
  nombre: 'Javier',
  email: 'javi@email.com',
  ...cursada,
};

console.log(estudianteUno);
console.log(estudianteDos);

// Ejemplo con funciones:

function unirArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const numerosCombinados = unirArrays(numeros1, numeros2);
console.log(numerosCombinados);
