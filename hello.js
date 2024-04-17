// nodejs nos da la salida por la terminal de la consola y ya esta
// entonces es bueno amistarse con la consola para sacarle el jugo
console.log('Hola Mundo 👋');
console.time('temporizador_1');
console.count('conteo') // nos dara al final de todo el numero de veces que corrio console.count('conteo')
console.clear(); // limpiar la consola
console.count('conteo');
console.timeLog('temporizador_1');
console.countReset('conteo') // resetear los valores de conteo
console.count('conteo');
console.timeEnd('temporizador_1');


// Really node don't have many options for the CLI for default,
// but we can create great CLI applications with node, using any of these libraries:
// 1. Commander.js
// 2. Inquirer.js
// 3. Chalk
// 4. Clack

// NODE.JS es otro entorno para ejecutar javascript, distinto al navegador,
// por lo tanto no existe el objeto WINDOW
// Utiliza el motor v8 tal como los navegadores actuales lo que permite que javascript se ejecute rapidamente

// Al dia de hoy, existe una variable global llamada globalThis tanto en el entorno de Node.js como en el navegador
// globalThis es una variable global por la que podemos llamar en cualquier lugar de nuestra aplicacion
// la diferencia es que globalThis en el navegador apuntara a WINDOW
// y en nodejs apuntara a GLOBAL, dos objetos globales distintos

console.log(globalThis);