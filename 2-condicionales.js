console.log(
  'Los condicionales: son mecanismos de control de flujo, evalúan condiciones y realizan diferentes acciones según el resultado. Pueden ser tan complejas y estructuradas como uno quiera. IF (SE MANEJA CON BOOLEANOS) Y EL SWITCH (CON CLAVES)'
);

// Condicional simple: es la versión más básica del if. Establece una condición y un bloque de código a ejecutar en caso de que sea verdadera.

if (5 == 5) {
  console.log('True');
}

// Condicional con bloque else: igual al ejemplo anterior, pero agrega un bloque de código a ejecutar en caso de que la condición sea falsa. Es importante tener en cuenta que el bloque else es opcional.

if (5 == 4) {
  console.log('True');
} else {
  console.log('False');
}

// Condicional con bloque else if: igual que el ejemplo anterior, pero agrega un if adicional, es decir otra condición que puede evaluarse en caso de que la primera sea falsa.

const edad = 20;

let acceso = '';

if (edad < 16) {
  acceso = 'Menor de edad, prohibido';
} else if (edad >= 16 && edad <= 18) {
  acceso = 'Permitido solamente acompañado de un mayor de edad.';
} else {
  acceso = 'Permitido';
}

console.log(acceso);

// Condicional if ternario: no lleva llaves sobre el código a ejecutar ni la palabra reservada “if” ni “else”, se escribe todo en la misma línea (de forma horizontal), solo cubre el escenario para cuando la condición se cumple o no se cumple.

let rodadoBicicletaNormal = 14;

let rodadoBicicletaMountainBike = 18;

let tipoRodadoMasGrande =
  rodadoBicicletaNormal < rodadoBicicletaMountainBike ? 'Mountain' : 'Normal';

console.log(tipoRodadoMasGrande);

// Condicional switch: su estructura es diferente, pregunta por algo  si ese algo es verdadero  ejecuta un bloque de código // caso contrario, ejecuta otro bloque de código (el siguiente), si olvidamos el break los bloques se seguirán ejecutando sin importar si los casos se cumplen o no.

console.log('Ejemplo de Switch normal:');

const dia = 'viernes';

switch (dia) {
  case 'viernes':
    console.log('Buen fin de semana !');

    break;
  case 'lunes':
    console.log('Buen comienzo de semana !');

  default:
    console.log('A laburar !');

    break;
}

console.log('Ejemplo de Switch con función');

const celularSeleccionado = 'iphone';

function buscandoElMejorCelular(celularSeleccionado) {
  switch (celularSeleccionado) {
    case 'iphone':
      console.log('El mejor celular del mundo');

      break;
    case 'google':
      console.log('El segundo mejor celular del mundi');

    default:
      console.log('Busca otra cosa !!!');

      break;
  }
}

buscandoElMejorCelular(celularSeleccionado);
