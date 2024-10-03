console.log(
  'Funciones: Cuando tenemos una pequeña parte de código que realiza una tarea más sencilla, comúnmente lo llamamos función, la ventaja es que no es necesario reescribir la rutina nuevamente, solo “llamarla” cuando sea necesario. En otras palabras, trabajar con funciones es una forma de encapsular un código para poder utilizarlo más fácilmente cuantas veces sea necesario (en programación es muy común utilizar el termino “método” para referirse al uso de las funciones). Entonces una función es un bloque de código que nos permite realizar una tarea en particular, para que se ejecute, “algo” debe invocarla. Sirve para reutilizar código.'
);
console.log(' ');
console.log(
  'Las funciones tienen cuatro partes, 1) la palabra reservada function, 2) el nombre de la función, 3) el o los parámetros y 4) {entre llaves el código que queremos ejecutar}'
);
console.log(' ');
console.log(
  'Tenemos dos tipos de funciones, tengamos en cuenta que JS lee de abajo hacia arriba y primero lee las funciones declaradas:'
);
console.log(
  'Función expresada: es aquella que se asgina como valor a una variable, por ejemplo:'
);
const ingresos = 2000;
const egresos = -1500;
const total = function (ingresos, egresos) {
  return console.log(ingresos + egresos);
};

total(ingresos, egresos);
console.log(' ');
console.log(
  'Función declarada: es aquella que recibe un nombre formal y no se asigna como valor a una variable, por ejemplo:'
);
function balance(ingresos, egresos) {
  return console.log(ingresos + egresos);
}

balance(ingresos, egresos);

/*
Palabra reservada: la usamos para indicar que vamos a escribir la función.

Nombre de la función: para referirnos al momento de invocarla.

Parámetros: Los parámetros son las variables que escribimos cuando definimos la función (nombres identificadores que van dentro de paréntesis), si hay más de uno los separamos con comas, si no lleva parámetros, igual incorporamos los paréntesis. Dentro de la función podemos acceder a ellos como si fueran una variable, solamente debemos escribir los nombres para trabajar con ellos.

Argumentos: son los valores que enviamos cuando invocamos la función (son los valores que yo le paso al parámetro)

Cuerpo: entre llaves escribimos la lógica de nuestra función, es decir, el código que queremos que se ejecute cada vez que la invoquemos.

Retorno: palabra reservada para que nos devuelva al exterior el resultado del proceso que estamos ejecutando. Utilizamos ‘return’ seguido de lo que queramos retornar.
*/

console.log(' ');
console.log(
  'Scope: siempre que hablamos de funciones, debemos tener en cuenta el scope, en JavaScript es el contexto actual de ejecución, es decir, el ámbito en el que las variables y las expresiones son accesibles o pueden ser referenciadas, es decir es el alcance que llega a tener una variable.'
);
console.log(' ');
console.log('Tenemos dos tipos de scopes:');
console.log(' ');
console.log(
  'Local: se refiere al ámbito que está dentro de una función o un bloque. Las variables declaradas dentro de una función o un bloque solo pueden ser usadas dentro de ese ámbito y no son visibles desde fuera (son inexistentes). '
);
console.log(' ');
function local() {
  const scopeLocal =
    'Este es un scope local, está dentro de esta función y solo se puede acceder dentro de esta función';
  return console.log(scopeLocal);
}
local();
console.log(' ');
console.log(
  'Global: se refiere al ámbito que abarca todo el código. Las variables declaradas fuera de cualquier función o bloque pertenecen al scope global y pueden ser usadas en cualquier parte del código.'
);
console.log(' ');
const elMejorAmigo = 'Santiago';

function global(elMejorAmigo) {
  return console.log(elMejorAmigo);
}
global(elMejorAmigo);
console.log(' ');
