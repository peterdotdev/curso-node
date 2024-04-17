const fs = require('node:fs') // A partir de Node 16 se recomienda poner node:native_package
// fs stand for file-system

const stats = fs.statSync('./archivo.txt')

console.log(
  'is a file?', stats.isFile(), // si es un fichero
  '\nis a directory?', stats.isDirectory(), // si es un directorio
  '\nis a symbolic link?', stats.isSymbolicLink(), // si es un enlace simbolico
  '\nFile size in bytes:', stats.size // tamanio en bytes
)
