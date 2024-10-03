console.log(
  'Funciones arrow: son otra forma de crear funciones, son más concisas que las funciones clásicas. No utiliza la palabra reservada ‘function’ y es necesario que sean asignadas como valor de una variable. Se llama Arrow Functions (flecha en ingles, se suele decir fat arrow- flecha gorda para diferenciarla de la simple) porque es necesario utilizar el operador flecha => para posteriormente definir las sentencias de código que la función va a ejecutar.'
);
console.log(' ');
const num1 = 10;
const num2 = 20;
console.log(
  'Ahora veremos dos tipos de funciones arrow, que escencialmente son los mismo, la diferencia radica en que una tiene una sola línea de código y, cuando sucede esto se pueden evitar las llaves que son carácteristicas de las funciones:'
);

const multiplicar = (num1, num2) => {
  return console.log(num1 * num2);
};
multiplicar(num1, num2);

const sumar = (num1, num2) => console.log(num1 + num2);
sumar(num1, num2);

//Las funciones arrow son siempre anónimas, es decir que no llevan la palabra function.
