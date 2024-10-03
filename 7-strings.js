/*
Strings: para JavaScript un string es un objeto muy especial, que trae consigo un serie de particularidades, una de esas particularidades es que, sobre un string, podemos consultar propiedades y ejecutar diversos métodos
*/

const ejemplo = 'Clemente es el mejor';

console.log('length: nos devuelve la longitud de una cadena de texto');

console.log(ejemplo.length);

console.log(
  'indexOf: se ejecuta sobre un string dado y recibe como parámetro una cadena de texto la cual será buscada dentro del string que ejecuta el método'
);

console.log(ejemplo.indexOf('mejor'));

console.log(
  'slice: toma uan porción determinada de la cadena de texto, para eso, además de la cadena de texto sobre la que se ejecutará, deberemos pasar dentro de los paréntesis dos parámetros numéricos, el primero presenta el índice con el cual queremos comenzar a tomar la proción de texto y el segundo representa el índice hasta donde queres cortar, este último es opcional.'
);

console.log(ejemplo.slice(3, 8));

console.log(
  'trim: tiene una única función: eliminar los espacios en blanco antes y después de la primera ocurrencia de una carácter alfanumérico.'
);

console.log(ejemplo.trim());

console.log(
  'split: te permite convertir un string en un array, para ello hay que pasar como parámetro del método el delimitador a través del cual queres cortar y crear una nueva posición del array. El delimitador que paso como parámetro puede ser cualquier carácter que se me ocurra.'
);

console.log(ejemplo.split(''));

console.log(
  'replace: permite reemplazar una porción de texto dentro de un string para ello tendría que pasar dos parámetros, el primero indica la porción de texto que estas buscando y el segundo hará referencia a la porción de texto por la cual la quiero reemplazar.'
);

console.log(ejemplo.replace('Clemente', 'Nerea'));

console.log('toUpperCase: convertir un string a mayúsculas.');

console.log(ejemplo.toUpperCase());

console.log('tipeOf: muestra el tipo de dato que es.');

console.log(typeof ejemplo);
