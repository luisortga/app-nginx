class Calculadora {
  static count = 1
  static sumar(a, b) {
    return a + b
  }

  static restar(a, b) {
    return a - b
  }

  static greeting(namee) {
    // more implements
    return `Heey ${namee}`
  }

  static repeat(listaData) {
    listaData.forEach((element) => {
      console.log(element)
    })
  }

  // web socket

  static one_more() {
    Calculadora.count += 1
    console.log(`El contador va ${Calculadora.count}`)
  }
}

class Colab {
  constructor() {}
}

// Se llama directamente desde la clase, sin crear un objeto
console.log(Calculadora.sumar(5, 3)) // 8
console.log(Calculadora.restar(5, 3)) // 2
Calculadora.one_more()
Calculadora.one_more()

let places = ["dunkerque", "munich", "france", "polonia"]
Calculadora.repeat(places)
