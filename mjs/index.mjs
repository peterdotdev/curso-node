// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules (la forma mas nueva y recomendada para realizar importaciones)
// siempre que podamos es conveniente utilizar .mjs, y es mas parecido al navegador 🎊 VIVA MJS! 🎊
// .cjs -> para utilizar CommonJS

// pero 👀 en ECMASCRIPT MODULES es necesario importar con .mjs 👀
import multiplicar, { sum } from './operations.mjs';

console.log(sum(1,2));
console.log(multiplicar(3,4));