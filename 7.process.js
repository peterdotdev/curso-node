// process menciona propiedades y metodos del proceso actual en ejecucion
// argumentos de entrada
console.log(process.argv)

// controlar el proceso y su salida
// con exit se sale del proceso
// process.exit(0) // todo bien
// process.exit(1) // salio algo mal, mejor sali

// podemos controlar eventos del proceso
process.on('exit', () => {
  // limpiar los recursos
})

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)
// Escibir PEPITO=hola node 7.process.js en la consola y saldra hola
