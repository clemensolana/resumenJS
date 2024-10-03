/* 
Arrays: no es más que una colección de elementos, te permiten agrupar varios tipos de datos en una sola variable, teniendo en cuenta que cada uno de los datos va a quedar ubicado en un índice del array. Un índice es como un lugar disponible en un organizador que tiene como identificador un número, es importante entender que estos índices siempre comienzan con el número 0, para poder crear un array basta con escribir unos [ ] después del nombre de la variable, por ejemplo:
*/

const seriesFavoritas = ['Friends', 'GoT', 'BB'];

console.log(seriesFavoritas); //todo el array

console.log(seriesFavoritas[0]); //posición cero

console.log(seriesFavoritas[1]); //posición 1

console.log(seriesFavoritas[2]); //posición 2

/*
Los arrays pueden tener múltiples elementos, ¡no hay límite! Y no sólo eso, sino que, además, el orden es importante.
Por ejemplo, no es lo mismo [""hola"", ""mundo""] que [""mundo"", ""hola""]. Ambos tienen los mismos elementos, pero en posiciones diferentes.
*/

// Los arrays en JavaScript tienen muchas funciones llamadas métodos que nos van a permitir manipular los datos presentes en ese arreglo.

const ciudadesDeArgentina = [
  'Buenos Aires',
  'Córdoba',
  'Rosario',
  'Mendoza',
  'La Plata',
  'San Miguel de Tucumán',
  'Mar del Plata',
  'Salta',
  'Santa Fe',
  'Corrientes',
  'Ushuaia',
  'Bariloche',
  'Salta',
  'Jujuy',
  'Neuquén',
];

console.log('push: agregar elemnto al final');

console.log(ciudadesDeArgentina.push('Paraná'));

console.log('pop: sacar elemnto al final o guardar elemento seleccionado');

const sacarElUltimoElemento = ciudadesDeArgentina.pop();
console.log(sacarElUltimoElemento);

console.log('shift: sacar el primer elemento');

const sacarElPrimerElemento = ciudadesDeArgentina.shift();
console.log(sacarElPrimerElemento);

console.log('unshift: agregar un elemento al principio');

const agregarUnElementoAlPrincipio = ciudadesDeArgentina.unshift('Villaguay');
console.log(sacarElPrimerElemento);

console.log('indexOf: nos brinda la posición del elemento en el array');

console.log(ciudadesDeArgentina.indexOf('Corrientes'));

console.log(
  'lastIndexOf: nos brinda la posición del último elemento del array'
);

console.log(ciudadesDeArgentina.lastIndexOf());

console.log('join: junta todos los elementos en un solo string');

console.log(ciudadesDeArgentina.join());

console.log(
  'includes: similar a indexOf pero nos da un valor booleano de verdadero o falso'
);

console.log(ciudadesDeArgentina.includes('Paraná'));
