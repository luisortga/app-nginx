let counter = 0

console.log('Started of Interval')

const test = setInterval(() => {
  counter++
  console.log(`Interval counter: ${counter}`)
  if (counter === 8) {
    console.log(`${counter} is final`)
    console.log(`Successful async`)

    clearInterval(test)
  }
}, 1000)


let customers = 0
const steps = setInterval(() => {
  customers++
  console.log(`Other Interval counter: ${customers}`)
  if (customers === 6) {
    console.log(`Aura`)
    console.log(`Successful async`)
  
    clearInterval(steps)
  }
}, 6000)

/* Un setInterval es un mecanismo para ejecutar una función de manera repetitiva a intervalos regulares de tiempo */

// primoridades: 1 sincrono, 2 micro tareas, 3 macro tareas

/*

console.log('Inicio') // codigo sincrono

setTimeout(() => console.log('Macrotask: setTimeout'), 0) // micro tarea

Promise.resolve().then(() => console.log('Microtask: Promise')) // macro tarea

console.log('Fin') // codigo sincrono
*/
