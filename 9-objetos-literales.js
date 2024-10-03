/*
Objetos literales: un objeto literal es una entidad independiente con propiedades. A su vez, esas propiedades tienen valores. Los objetos son un tipo de dato más.
Un objeto puede tener la cantidad de propiedades que queramos. Con la notación objeto.propiedad accedemos al valor de cada una de ellas.
*/

console.log(`Ejemplo de objeto literal con propiedades.valor:

const macbookPro = {
  marca: 'Apple',
  modelo: 'Macbook Pro',
  año: 2021,
  procesador: 'M1 Pro 10 cpu 16 gpu',
  ram: '16 gb',
  pantalla: '16"',
};
    `);

const macbookPro = {
  marca: 'Apple',
  modelo: 'Macbook Pro',
  año: 2021,
  procesador: 'M1 Pro 10 cpu 16 gpu',
  ram: '16 gb',
  pantalla: '16"',
};

console.log(macbookPro.modelo);

macbookPro.sonido = '6 parlantes de alta fidelidad';

console.log(macbookPro);

console.log(' ');

function queTanProEs(macbookPro) {
  if (macbookPro.procesador.includes('M1 Pro')) {
    return console.log('Es súper pro');
  } else {
    console.log('Es una Mac normal');
  }
}

queTanProEs(macbookPro);

macbookPro.bateria = function () {
  return console.log(
    'La batería dura mucho porque tiene una pantalla de: ' +
      this.pantalla +
      ' y un procesador ultra eficiente: ' +
      this.procesador
  );
};

macbookPro.bateria();

/*
Instanciar: pero si quisiera crear una mac, para ello necesitaremos “Instanciar”, que no es otra cosa más que crear un objeto particular a partir de su función molde. Si quisiera instanciar un objeto del tipo “Mac”, lo que necesito hacer es asignar una variable cualquiera la palabra reservada “new” e invocar la función constructora pasando los parámetros que sean necesarios, puedo acceder a las propiedades y métodos del objeto como lo veníamos haciendo con anterioridad a través de la dot.notation. Ej.:
*/

function createMac(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}

let macbookAir = new createMac('Apple', 'Macbook Air', 2022);

console.log(macbookAir);
