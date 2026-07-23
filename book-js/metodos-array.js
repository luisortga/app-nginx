let queue = 0

const corsair = setInterval(() => {
  queue += 2

  console.log(`in: ${queue}`)

  if (queue === 16) {
    console.log('Haz llegado al final.')

    clearInterval(corsair)
  }
}, 1000)

const numOne = [1, 2, 3, 4]
const duplicados = numOne.map((x) => x * 2)
console.log(duplicados)
// [2, 4, 6, 8]

// filter

const numTwo = [1, 2, 3, 4, 5]
const pares = numTwo.filter((x) => x % 2 === 0)
console.log(pares)
// [2, 4]

// reduce

const numThree = [1, 2, 3, 4]
const suma = numThree.reduce((acumulador, numero) => acumulador + numero, 0)
console.log(suma)
// 10

// Desglose:
// acumulador = 0, numero = 1 → acumulador = 1
// acumulador = 1, numero = 2 → acumulador = 3
// acumulador = 3, numero = 3 → acumulador = 6
// acumulador = 6, numero = 4 → acumulador = 10

// testing forEach

const numeros = [1, 2, 3]
numeros.forEach((num) => {
  console.log(num)
})

// find

const usuarios = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Bob' },
]

const usuario = usuarios.find((u) => u.id === 2)
console.log(usuario)
// { id: 2, nombre: "Bob" }

// Some y Every
const numFour = [1, 2, 3, 4, 5]

numFour.some((x) => x > 3) // true (al menos uno es > 3)
numFour.every((x) => x > 0) // true (todos son > 0)

// with console log

console.log(numFour.some((x) => x > 3))
console.log(numFour.every((x) => x > 0))

// call stack

// Cokies google

/* call stack - call back () => {} - event loop - webApis - heap */
