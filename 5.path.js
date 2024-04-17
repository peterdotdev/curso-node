const path = require('node:path')

// barra separadora de carpetas segun SO
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

// pedir el nombre del fichero en una ruta
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base);

// pedir el nombre del fichero en una ruta sin la extension
const fileName = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(fileName)

// pedir la extension
const extension = path.extname('my.super.image.jpg')
console.log(extension)