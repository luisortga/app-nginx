/*
let counter = 0

console.log('Started of Interval')

const test = setInterval(() => {
  counter++
  console.log(`Interval counter: ${counter}`)
  if (counter === 8) {
    console.log(`${counter} is final`)
    console.log(`Sucessful async`)

    clearInterval(test)
  }
}, 1000) */

// primoridades: 1 sincrono, 2 micro tareas, 3 macro tareas

console.log('Inicio') // codigo sincrono

setTimeout(() => console.log('Macrotask: setTimeout'), 0) // micro tarea

Promise.resolve().then(() => console.log('Microtask: Promise')) // macro tarea

console.log('Fin') // codigo sincrono
