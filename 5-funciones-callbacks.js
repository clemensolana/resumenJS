console.log(
  'Callbacks: es una función que se pasa como parámetro de otra función, y es la función que recibe a ese parámetro la que se encarga de ejecutar la función cuando lo necesite.'
);
console.log('Ejemplo, mezclado con arrow:');
console.log(' ');
const num1 = 1;
const num2 = 2;

const sumar = (num1, num2) => num1 + num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;
const restar = (num1, num2) => num1 - num2;

const calculadora = (num1, num2, operacion) => operacion(num1, num2);

console.log(calculadora(num1, num2, sumar));

console.log(' ');

console.log('Ejemplo con código común');
function suma(numero1, numero2) {
  return numero1 + numero2;
}

function resta(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}

function division(numero1, numero2) {
  return numero1 / numero2;
}

function calcul(numero1, numero2, funcion) {
  return funcion(numero1, numero2);
}

console.log(calcul(100, 10, suma));

//Tenemos callbacks anónimos y definidos

/* Funciones Callback Anónimas:
Sin nombre: Como su nombre indica, no tienen un nombre asignado. Se definen directamente en el lugar donde se utilizan, generalmente como un argumento de otra función.
Uso común: Son muy útiles cuando se necesita una función simple y de un solo uso. Por ejemplo, al iterar sobre un arreglo y realizar una acción específica con cada elemento.
 */

console.log('Callback anónimo');

function calcular(a, b, callback) {
  return callback(a, b);
}

console.log(
  calcular(3, 4, function (a, b) {
    return a + b;
  })
); // 7

/*
Funciones Callback Definidas:
Con nombre: Se definen con un nombre, como cualquier otra función.
Reutilización: Pueden ser reutilizadas en diferentes partes del código, lo que las hace más organizadas y fáciles de mantener.
*/

console.log('Callback definido');

function nombreCompleto(nombre, apellido) {
  return nombre + ' ' + apellido;
}

function saludar(nombre, apellido, callback) {
  return '¡Hola ' + callback(nombre, apellido) + '!';
}

console.log(saludar('Nerea Haydee', 'Arin', nombreCompleto));
