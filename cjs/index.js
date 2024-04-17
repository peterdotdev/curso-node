// Esta es la forma clasica de importa modulos COMMONJS cjs para los amigos
const sumar = require('./sum');
const { multiply } = require('./multiply');

console.log(sumar(1,2));
console.log(multiply(2,3));