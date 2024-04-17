// MODULOS NATIVO EN NODE JS
// NODE JS nos da una biblioteca enorme de modulos nativos que:
// - Nos va a dar acceso al sistema de archivos
// - Nos va a dar acceso al sistema operativo
// - A Internet
// Cualquier cosa que te puedas imaginar lo vamos a poder hacer aqui

const os = require('node:os')

console.log('Informacion del sistema operativo:')
console.log('———————————————————————————————————)')
console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus()) // <--- vamos a poder escalar procesos en Node
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('Uptime', os.uptime() / 60 / 60 / 24)
