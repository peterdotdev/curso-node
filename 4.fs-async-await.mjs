// En COMMONJS no se puede usar await sin async,
// otra razon mas para que usemos nuestro ECMAESCRIPT MODULES
// aqui podemos usar await en el cuerpo del archivo :D
import { readFile } from 'node:fs/promises'
// —————————————————————————————————————————————————
console.log('Leyendo el primer archivo...')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)
console.log('——> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
const secondText = await readFile('./archivo.txt', 'utf-8')
console.log('segundo texto:', secondText)
// —————————————————————————————————————————————————