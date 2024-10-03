console.log('Las variables:');

//Var: ignora los bloques de código y convierte a la variable en global. Se declara y se usa en todo el código. No es utilizada hoy en día en los códigos modernos.

var variable = 'Clemente';

console.log('Var: ' + variable);

//Let: respeta los bloques de código, solo será accesible en el bloque de código donde fue declarada y solo podemos declararla una vez (podemos tener variables con el mismo nombre en diferentes bloques de nuestro código)

let variable2 = 'Clemente';

console.log('Let: ' + variable2);

//Const: es similar a let (estarán disponibles solo en el bloque de código en el que se hayan declarado. Solo podemos declararla una vez), con la diferencia que no vamos a poder cambiar su valor una vez que lo hayamos asignado.

const variable3 = 'Clemente';

console.log('Const: ' + variable3);

console.log('---*---');

console.log('Los datos:');

//Number: es un dato número, puede ser entero o decimal.

const number = 1;

console.log('Number: ' + number);

//String: son textos alfanuméricos pueden ir con comillas simples '' o dobles "" o con back tick o template string ``, con estos últimos usando el signo ${} podemos usar variables para mutar su contenido.

const stringComillaSimple = 'Hola';

console.log('stringComillaSimple: ' + stringComillaSimple);

const stringComillaDoble = 'Chau';

console.log('stringComillaDoble: ' + stringComillaDoble);

const dniItaliano = 'CA17796TB';

const stringTemplateString = `Este es mi número de documento italiano: ${dniItaliano}`;

console.log('stringTemplateString: ' + stringTemplateString);

// Boolean: son datos verdaderos o falsos, es decir true o false.

const nacioEnArgentina = true;

console.log('nacioEnArgentina: ' + nacioEnArgentina);

const nacioEnItalia = false;

console.log('nacioEnItalia: ' + nacioEnItalia);

console.log('---*---');

console.log('Los datos especiales:');

//NaN: especifica que no es un número pero tampoco un string o un boolean, es una operación errada.

const notANumber = 'a' * 2;

console.log('notANumber: ' + notANumber);

//Null: significa que una variable tiene un valor desconocido.

const ejemploNullCantidadDePasajeros = null;

console.log('Null: ' + ejemploNullCantidadDePasajeros);

//Undefined: es cuando no se le asignó un valor a la variable

const ejemploDeUndefined = undefined;

console.log('Undefined: ' + ejemploDeUndefined);

//Objeto literal: propiedad: valor, es decir es una colección de propiedades y una propiedad es una asociación entre un nombre o clave y un valor.

const miMac = {
  marca: 'Apple',
  modelo: 'Macbook Pro',
  procesador: 'M1 Pro de 10 núcleos',
  año: 2021,
  estaEncendida: true,
};

console.log('Objeto literal: ' + miMac.marca + miMac.modelo);

//Array: lista o colección de datos, tiene índices numéricos, comienza con la posición en 0, sigue 1, 2, 3, etc.

const array = ['apple', 'microsoft', 'google'];

console.log('Array completo: ' + array);

console.log('Array posición 0: ' + array[0]);

//Función: se declara con la palabra function.

console.log(function funcion(number) {
  return console.log('Esto es una función: ' + number);
});

console.log('Los operadores:');

//Operador de asignación: asigna un valor "X" a una variable determinada:

console.log('Operador de asignación: ' + '=');

//Operador aritmético: nos permite hacer operaciones matemáticas simples, como suma (+), resta (-), multiplicación (*), división (/), resto (%) y exponenciación (**):

console.log('Suma : 2+2 = ' + (2 + 2));

console.log('Resta : 2-2 = ' + (2 - 2));

console.log('Mult : 2*2 = ' + 2 * 2);

console.log('Div : 2/2 = ' + 2 / 2);

console.log('Resto : 2%2 = ' + (2 % 2));

console.log('Exp : 2**2 = ' + 2 ** 2);

//Operador de incremento y decremento: incrementa o decrementa tanto en el sufijo como el prefijo, se usan los símbolos, en este caso “A” es como si fuese un número.

/* A++: Operador de incremento sufijo: Este operador aumenta el valor de la variable A en 1, pero devuelve el valor original de A antes del incremento. Por ejemplo: */

let a = 5;
let b = a++; // b es 5, a es 6

console.log('a: ' + a);
console.log('b: ' + b);

/* A--: Operador de decremento sufijo: Este operador disminuye el valor de la variable A en 1, pero devuelve el valor original de A antes del decremento. Por ejemplo: */

let c = 5;
let d = c--; // d es 5, c es 4

console.log('c: ' + c);
console.log('d: ' + d);

/* ++A: Operador de incremento prefijo: Este operador aumenta el valor de la variable A en 1, y devuelve el nuevo valor de A después del incremento. Por ejemplo: */

let e = 5;
let f = ++e; // f es 6, e es 6

console.log('e: ' + e);
console.log('f: ' + f);

/* --A: Operador de decremento prefijo: Este operador disminuye el valor de la variable A en 1, y devuelve el nuevo valor de A después del decremento. Por ejemplo: */

let g = 5;
let h = --g; // g es 4, h es 4

console.log('g: ' + g);
console.log('h: ' + h);

//Operador de comparación o igualdad: el resultado de evaluar un operador de igualdad siempre es de tipo Boolean basado en si la comparación es verdadera.

console.log(
  'Simple: ' +
    'se usa ==, nos permite definir si un valor es igual a otro: 5 == 5 ' +
    (5 == 5)
);

console.log(
  'Estricta: ' +
    'hace lo mismo que la anterior, pero además pregunta si el tipo de dato es el mismo: 5 === "5" ' +
    (5 === '5')
);

console.log(
  'Simple desigualdad: ' +
    'se usa !=, comprueba si sus dos operandos no son iguales: 5 != 5 ' +
    (5 != 5)
);

console.log(
  'Estricta desigualdad: ' +
    'hace lo mismo que la anterior, pero además pregunta si el tipo de dato no es el mismo: 5 !== "5" ' +
    (5 !== '5')
);

//Operadores relacionales: un operador de comparación compara sus operandos y devuelve un valor Boolean basado en si la comparación es verdadera o no.

console.log('< operador menor que 5 < 10 = ' + (5 < 10));

console.log('> operador mayor que 5 > 10 = ' + (5 > 10));

console.log('<= operador menor o igual a que 5 <= 5 = ' + (5 <= 10));

console.log('<= operador mayor o igual a que 5 >= 5 = ' + (5 >= 10));

//Operadores lógicos: nos permiten unir sentencias de código por las cuales queremos preguntar. Devolverán por lo general un booleano como resultado.

console.log(
  'Operador &&: debe poder leerse ambas por separado. Evalúa dos condiciones y solo nos da verdadero cuando las dos son verdaderas. nos permite unir sentencias de código por las cuales queremos preguntar.'
);

console.log('Por ejemplo: (10 > 2 && 4 < 8) ' + (10 > 2 && 4 < 8));

console.log(
  'Operador OR: este operador nos solo nos dará falso cuando las dos condiciones sean falsas, esto quiere decir que, si una es verdadera, dará verdadera y si las dos son verdaderas, darán verdaderas.'
);

console.log('Por ejemplo: (10 > 5 || 4 > 10) ' + (10 > 5 || 4 > 10));

console.log(
  'Operador &: evalúa el valor binario de los números dados, nos lo dará basado en 10.'
);

console.log('Por ejemplo: 10 & 10 :' + (10 & 10));

//Operadores de negación: se implementa haciendo uso de (!), nos permite cambiar el falso o verdadero dependiendo del valor que existía anteriormente.

let noNegado = 5 > 3; // A es true
let Negado = !noNegado; // B es false

console.log(noNegado, Negado);

//Operadores de concatenación: se usa “+”, une dos o más cadenas de texto en una sola.

const nombreNovia = 'Nerea Haydee ';
const apellidoNovia = 'Arin';

console.log('Concatenado = ' + (nombreNovia + apellidoNovia));
