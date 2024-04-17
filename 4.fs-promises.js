const fs = require('node:fs/promises');
// Por fortuna Node.js desde hace ya muchas versiones nos da la posibilidad
// de manejar esta asincronia mediante promesas en lugar de callbacks
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => console.log('1er texto:', text))

console.log('—————————————————');
console.log('Hacer cosas mientras lee el archivo (esto se ejecuta antes del 1er texto)');
console.log('—————————————————');

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => console.log('2do texto:', text))

// Puede ser que tengamos algunos moduelos nativos sin promesas nativas
// con callbacks en lugar de promesas, para esos caso tenemos
// const { promisify } = required('node:util');
// const readFilePromise = promisify(fs.readFile)
// ahi utilizariamos readFilePromise como promesa

