const fs = require('node:fs')
// readFileSync si se quisiera leer de manera sincrona
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  if (err) console.error('error encontrado:', err)
  console.log('primer texto:', text)
})

console.log('—————————————————')
console.log('Hacer cosas mientras lee el archivo (esto se ejecuta antes del 1er texto)')
console.log('—————————————————')

fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  if (err) console.error('error encontrado:', err)
  console.log('segundo texto:', text)
})

// Lo interesante de la asincronia es que no sabemos en que orden nos va a
// llegar podria terminar imprimiendose el segundo texto en pantalla antes del primero
