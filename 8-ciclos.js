/*
Ciclos: ejecutan un fragmento del código tantas veces sea necesario. Los ciclos nos permiten repetir instrucciones de manera sencilla. Podemos hacerlo una determinada cantidad de veces, o mientras se cumpla una condición.
*/

console.log(`For: conlleva la idea de que "por cada ocurrencia que cumpla una condición, se debe realizar una tarea". Esta es la estructura de repetición más utilizada por los programadores cada vez que necesitamos repetir una acción varias veces. Su sintaxis en la misma que maneja JS, la palabra reservada “for”, los paréntesis y las llaves, cuenta de tres partes esenciales para su funcionamiento las mismas son: 

Variable inicializadora: es la primera parte, define en que número vamos a comenzar a iterar.

Condición a evaluar: es la segunda parte, es la parte del “for” que define cuantas iteraciones hará ese mismo ciclo. Y a su vez si es que dicha condición se cumple ejecutará las sentencias presentes dentro de las llaves.

Modificador de la variable inicializadora: es la tercera y última parte, permite incrementar o decrementar dicha variable según como lo necesitemos. Dentro de las llaves va el código que queremos ejecutar.
    `);

console.log(' ');

console.log(`Ejemplo de for: 
    function imprimirNerea() {
  for (let i = 0; i < 5; i++) {
    console.log('Nerea');
  }
}
    `);

function imprimirNerea() {
  for (let i = 0; i < 5; i++) {
    console.log('Nerea');
  }
}

imprimirNerea();

console.log(' ');

console.log(`Otro ejemplo de for:
    for (let i = 0; i < 10; i++) {
  const valorDeI = 'i tiene el valor de: ' + i;
  console.log(valorDeI);
}
    `);

for (let i = 0; i < 10; i++) {
  const valorDeI = 'i tiene el valor de: ' + i;
  console.log(valorDeI);
}

console.log(' ');

console.log(`Ejemplo de for para contar impares:
    const numeros = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function noParesDeContarImpares(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (i % 2 !== 0) {
      console.log('Este es el número impar n°: ' + i);
    }
  }
}
    `);

const numeros = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function noParesDeContarImpares(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (i % 2 !== 0) {
      console.log('Este es el número impar n°: ' + i);
    }
  }
}

noParesDeContarImpares(numeros);

/*
While & do while: existen dos estructuras dentro de los bucles o ciclos que nos pueden ayudar a resolver nuestros problemas eficientemente en determinadas situaciones.
*/

console.log(' ');

console.log(
  'While: tiene una estructura similar a la de los condicionales if/else, palabra reservada + la condición entre paréntesis. Sin embargo, el while loop revalúa esa condición repetidas veces y ejecuta su bloque de código hasta que la condición deja de ser verdadera.'
);

console.log(' ');

let vuelta = 1;

while (vuelta <= 5) {
  console.log('Haciendo la vuelta n°: ' + vuelta);
  vuelta++;
}

console.log(' ');

console.log(
  'Do while: es similar, pero se diferencia en que, sin importar la condición, la acción se realizará al menos una vez.'
);

console.log(' ');

let vuelta2 = 1;

do {
  console.log('Haciendo la vuelta n°: ' + vuelta2);
  vuelta2++;
} while (vuelta2 <= 0);
