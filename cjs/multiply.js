// Esta es una exportacion obligando
// a llamar a la funcion con el nombre
// correcto, es como un export que no sea default
// al requerirlo tambien se lo pide con parentesis

function multiply (a, b) {
    return a * b;
}

module.exports = {
    multiply
};