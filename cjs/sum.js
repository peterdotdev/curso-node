// Esta es una exportacion por default
// Si exportamos de esta forma, al momento
// de requerir la funcion sum , la podemos
// pedir con cualquier nombre
// es una especie de export default

function sum (a, b) {
    return a + b;
}

module.exports = sum;