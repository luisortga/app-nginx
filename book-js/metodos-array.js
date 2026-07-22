const numeros = [1, 2, 3, 4]
const duplicados = numeros.map((x) => x * 2)
// [2, 4, 6, 8]

// filter

const numeros = [1, 2, 3, 4, 5]
const pares = numeros.filter((x) => x % 2 === 0)
// [2, 4]

// reduce

const numeros = [1, 2, 3, 4]
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
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
// { id: 2, nombre: "Bob" }

// Some y Every
const numeros = [1, 2, 3, 4, 5]

numeros.some((x) => x > 3) // true (al menos uno es > 3)
numeros.every((x) => x > 0) // true (todos son > 0)
